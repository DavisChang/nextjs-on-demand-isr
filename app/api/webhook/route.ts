import { revalidatePath } from 'next/cache';

export async function POST(request) {
  try {
    const body = await request.json();
    const { id, token } = body
    if (process.env.WEBHOOK_TOKEN_DEMO !== token) {
      console.log('[Next.js] Invalid signature.');
      return new Response('Invalid signature.', {
        status: 400,
      });
    }

    console.log('[Next.js] Revalidating /');
    revalidatePath('/');

    if (id) {
      console.log(`[Next.js] Revalidating /${id}`);
      revalidatePath(`/${id}`);
    }
  } catch (error) {
    return new Response(`Webhook error: ${error.message}`, {
      status: 400,
    });
  }

  return new Response('Success!', {
    status: 200,
  });
}
