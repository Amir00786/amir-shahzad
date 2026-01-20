// EmailJS Configuration
// 1. Go to https://www.emailjs.com/
// 2. Sign up with your email: amirshahzadvu91@gmail.com
// 3. Add an email service (Gmail)
// 4. Create an email template
// 5. Get your credentials from the dashboard and replace below

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY', // Replace with your EmailJS public key
}

// Template Variables (use these in your EmailJS template):
// {{from_name}} - User's full name (firstName + lastName)
// {{from_email}} - User's email
// {{phone}} - User's phone number
// {{message}} - User's message
// {{to_email}} - Your email (amirshahzadvu91@gmail.com)

