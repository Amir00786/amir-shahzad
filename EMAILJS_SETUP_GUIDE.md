# EmailJS Setup Guide

Follow these steps to receive emails from your contact form:

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" (it's FREE)
3. Sign up with your email: **amirshahzadvu91@gmail.com**
4. Verify your email address

## Step 2: Add Email Service

1. Go to "Email Services" in the dashboard
2. Click "Add New Service"
3. Select **Gmail**
4. Click "Connect Account"
5. Sign in with your Gmail: **amirshahzadvu91@gmail.com**
6. Allow EmailJS to send emails on your behalf
7. Copy the **Service ID** (looks like: `service_xxxxxxx`)

## Step 3: Create Email Template

1. Go to "Email Templates" in the dashboard
2. Click "Create New Template"
3. Set **Template Name**: "Contact Form Submission"
4. In the template editor, paste this:

```
Subject: New Contact Form Message from {{from_name}}

---

You have received a new message from your portfolio contact form:

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
```

5. Click "Save"
6. Copy the **Template ID** (looks like: `template_xxxxxxx`)

## Step 4: Get Your Public Key

1. Go to "Account" → "General"
2. Find your **Public Key** (looks like: `xxxxxxxxxxxxxxxxxx`)

## Step 5: Update Configuration File

Open the file: `src/config/emailjs.ts`

Replace the placeholder values with your actual credentials:

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_xxxxxxx',     // Your Service ID from Step 2
  TEMPLATE_ID: 'template_xxxxxxx',   // Your Template ID from Step 3
  PUBLIC_KEY: 'xxxxxxxxxxxxxxxxxx',  // Your Public Key from Step 4
}
```

## Step 6: Test Your Form

1. Save the configuration file
2. Refresh your portfolio website
3. Fill out the contact form
4. Click "Send"
5. Check your email: **amirshahzadvu91@gmail.com**

## Troubleshooting

- **"Failed to send message"**: Check that all credentials are correct
- **No email received**: Check your spam folder
- **EmailJS quota exceeded**: Free plan has 200 emails/month
- **Need help?**: Contact EmailJS support at their website

## Important Notes

- Free plan: 200 emails/month
- All credentials are safe to commit (they're public keys designed for frontend use)
- Emails will come from EmailJS but contain the sender's information
- You can reply directly to the sender's email from your inbox

---

That's it! Your contact form will now send real emails to your Gmail inbox. 🎉

