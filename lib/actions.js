'use server';

export async function bookDemo(prevState, formData) {
  const data = {
    email: formData.get('email'),
  };
  await sendBookingRequest(data);
}

