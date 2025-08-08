// /lib/actions.ts
'use server';

// This is a placeholder for a server action.
// In a real application, you would handle form data submission here,
// for example, by sending an email or saving to a database.
export async function handleContactForm(formData: FormData) {
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  console.log("Form submitted:");
  console.log({ name, email, message });

  // Simulate a delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Return a success message
  return { success: true, message: "Thank you for your message! We will get back to you soon." };
}