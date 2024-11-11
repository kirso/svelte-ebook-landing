import { json } from '@sveltejs/kit';
import { Resend } from 'resend';
import Stripe from 'stripe';
import {
  RESEND_API_KEY,
  STRIPE_API_KEY,
  STRIPE_WEBHOOK_SECRET,
} from '$env/static/private';

const stripe = new Stripe(STRIPE_API_KEY);
const resend = new Resend(RESEND_API_KEY);
const PDF_URL =
  'https://www.dropbox.com/scl/fi/9d7mcddg3mo32pbdok76n/Bonus-Framworks.pdf?rlkey=kcz4t2eia4jwxidg6bt5v7nzk&st=9cw77hcp&dl=1';

export async function POST({ request }) {
  let event;
  const signature = request.headers.get('stripe-signature');
  const body = await request.text();

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.log(`⚠️ Webhook signature verification failed:`, err.message);
    return json({ error: err.message }, { status: 400 });
  }

  // Handle the checkout.session.completed event
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;

    try {
      const response = await fetch(PDF_URL);
      const pdfBuffer = await response.arrayBuffer();
      const base64Pdf = Buffer.from(pdfBuffer).toString('base64');

      const { error } = await resend.emails.send({
        from: 'noreply@mail.kirillso.com',
        to: session.customer_details.email,
        subject: 'Purchase confirmation: Complete Singapore relocation guide',
        html: `
          <h1>Thank you for the purchase ${session.customer_details.name}!</h1>
          <p>I appreciate your supporting me by buying <strong>Complete Singapore Relocation Guide</strong>. I'm confident that this ebook will provide you with all the essentials to make a smooth transition.</p>
          <p><strong>What happens next:</strong></p>
          <ul>
            <li>You will find your ebook attached to this email. Please download and save it for the future reference.</li>
            <li>A separate purchase confirmation has been sent to your email as well.</li>
            <li>If you have any questions, feel free to ping me a DM on X "@kirso_"</li>
          </ul>
          <p>Thanks again for choosing my guide. Wish you the best of luck on your journey in Singapore!</p>
          <p>Kind regards, </br> Kirill</p>
        `,
        attachments: [
          {
            content: base64Pdf,
            filename: 'Digital eBook - Singapore relocation.pdf',
            type: 'application/pdf',
            disposition: 'attachment',
          },
        ],
      });

      if (error) {
        throw error;
      }

      return json({ received: true });
    } catch (err) {
      return json({ error: 'Email sending failed' }, { status: 500 });
    }
  }

  return json({ received: true });
}
