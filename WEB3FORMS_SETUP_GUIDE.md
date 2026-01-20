# Web3Forms Setup Guide (2 Minutes!)

Follow these simple steps to receive emails from your contact form:

## Step 1: Get Your Access Key (1 minute)

1. Go to [https://web3forms.com](https://web3forms.com)
2. Enter your email: **amirshahzadvu91@gmail.com**
3. Click "Create Access Key"
4. Check your email inbox
5. Copy the **Access Key** from the email (looks like: `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`)

## Step 2: Update Configuration (30 seconds)

Open the file: `src/config/emailjs.ts`

Replace `YOUR_ACCESS_KEY` with your actual access key:

```typescript
export const WEB3FORMS_CONFIG = {
  ACCESS_KEY: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', // Your actual access key here
  RECIPIENT_EMAIL: 'amirshahzadvu91@gmail.com',
}
```

## Step 3: Test Your Form (30 seconds)

1. Save the configuration file
2. Refresh your portfolio website
3. Fill out the contact form
4. Click "Send"
5. Check your email: **amirshahzadvu91@gmail.com**

## That's It! 🎉

Your contact form is now working and will send emails directly to your Gmail inbox.

## Features

✅ **Free Forever** - Unlimited emails  
✅ **No Backend Required** - Works from frontend  
✅ **Instant Setup** - Just one access key needed  
✅ **Spam Protection** - Built-in spam filtering  
✅ **Email Notifications** - Instant email delivery  
✅ **No Rate Limits** - Send unlimited messages  

## Troubleshooting

**"Failed to send message"**  
→ Make sure you copied the access key correctly (no extra spaces)

**"Invalid access key"**  
→ Check your email for the access key from Web3Forms  
→ Make sure the email matches: amirshahzadvu91@gmail.com

**No email received**  
→ Check your spam folder  
→ Verify the access key is active at web3forms.com

**Still having issues?**  
→ Email: support@web3forms.com  
→ Or contact via: https://web3forms.com

---

**Pro Tips:**

- You can manage all form submissions at [web3forms.com/dashboard](https://web3forms.com/dashboard)
- Add custom fields by adding more properties to the form data
- Enable email notifications and webhooks in the dashboard
- Set up custom reply-to addresses

That's it! Much simpler than other email services! 🚀

