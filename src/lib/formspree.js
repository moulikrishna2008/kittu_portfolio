/**
 * Formspree form submission helper
 * Accepts either the full Formspree URL or just the form ID from .env
 */

const rawFormspreeConfig = (import.meta.env.VITE_FORMSPREE_FORM_ID || 'xppqwqlb').trim();

// Ensure clean endpoint regardless of whether the user provided the full URL or just the ID
const endpoint = rawFormspreeConfig.startsWith('http://') || rawFormspreeConfig.startsWith('https://')
  ? rawFormspreeConfig
  : `https://formspree.io/f/${rawFormspreeConfig}`;

export async function submitFormspreeMessage({ name, email, subject, message }) {
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: name.trim(),
        email: email.trim(),
        subject: subject?.trim() || 'New Portfolio Message from Sri Mouli Krishna Penugonda Website',
        message: message.trim()
      })
    });

    const data = await response.json();

    if (response.ok) {
      return { success: true, data };
    } else {
      const errorMessage = data?.errors?.map((err) => err.message).join(', ') || 'Form submission failed';
      throw new Error(errorMessage);
    }
  } catch (error) {
    console.error('Formspree submission error:', error);
    throw error;
  }
}
