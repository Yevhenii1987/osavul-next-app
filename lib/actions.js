'use server';
import { sendRequest } from '@/lib/http';

export async function bookDemo(formData) {
  const data = {
    email: formData.get('email'),
  };
  await sendRequest(data, 'book');
}

export async function bookDemoFull(formData) {
  console.log(formData);
  const data = {
    name: formData.get('full-name'),
    email: formData.get('email'),
    company: formData.get('company'),
    message: formData.get('message'),
  };
  await sendRequest(data, 'book-fool');
}

export async function subscribe(formData) {
  const data = {
    name: formData.get('full-name'),
    email: formData.get('email'),
    organisation: formData.get('organisation'),
  };
  await sendRequest(data, 'subscribe');
}
export async function apply(formData) {
  const data = {
    name: formData.get('full-name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
  };
  await sendRequest(data, 'apply');
}

export async function contactUs(formData) {
  const data = {
    name: formData.get('full-name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    company: formData.get('company'),
    message: formData.get('message'),
  };
  await sendRequest(data, 'contact-us');
}
