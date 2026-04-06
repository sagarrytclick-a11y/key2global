# Resend Email Integration Setup Guide

## 📧 Overview
The application form now sends emails using Resend API when users submit their applications.

## 🚀 Setup Instructions

### Step 1: Get Resend API Key
1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account
3. Navigate to **API Keys** section
4. Click **Create API Key**
5. Copy your API key (starts with `re_`)

### Step 2: Configure Environment Variables
1. Open `.env.local` file in the project root
2. Add your Resend API key:
   ```
   RESEND_API_KEY=re_abc123xyz...
   ```
3. Set your receiving email (must be verified):
   ```
   RECEIVING_EMAIL=your.email@example.com
   ```

### ⚠️ Important: Free Tier Limitation
On Resend's **free tier**, you can ONLY send emails to your own verified email address.

**To fix the 403 error:**
1. The email in `RECEIVING_EMAIL` must match the email you used to sign up for Resend
2. OR verify your domain at https://resend.com/domains
3. Default is set to: `sagar.rytclick@gmail.com`

### Step 3: Update Receiving Email (Optional)
By default, emails are sent to `support@key2global.com`. To change this:

1. Open `app/api/submit-application/route.ts`
2. Find line 32:
   ```typescript
   to: ['support@key2global.com'], // Your receiving email
   ```
3. Replace with your email address

### Step 4: Verify Domain (Recommended for Production)
For production use, verify your domain with Resend:
1. Go to **Domains** in Resend dashboard
2. Add your domain (e.g., `key2global.com`)
3. Add DNS records as instructed
4. Update the `from` field in route.ts:
   ```typescript
   from: 'Key2Global <noreply@key2global.com>',
   ```

## 📬 Email Features

### What You'll Receive
When someone submits the form, you'll get a beautifully formatted email with:
- ✅ Applicant's full name
- ✅ Email address (clickable link)
- ✅ Mobile number with +91 prefix (clickable)
- ✅ Selected course
- ✅ Submission timestamp (IST)
- ✅ Professional branding

### Email Template
The email includes:
- Gradient header with Key2Global branding
- Organized fields with icons
- Color-coded sections
- Action required notice
- Footer with automation notice

## 🧪 Testing

### Test the Integration
1. Start your dev server: `npm run dev`
2. Click "APPLY NOW" button
3. Fill out the form
4. Submit
5. Check your email inbox (and spam folder)

### Free Tier Limits
- **100 emails/day** on free tier
- **3,000 emails/month** on free tier
- Perfect for testing and small-scale use

## 🔧 Troubleshooting

### ❌ 403 Validation Error (Most Common)
**Error**: "You can only send testing emails to your own email address"

**Solution**:
1. Make sure `RECEIVING_EMAIL` in `.env.local` matches your Resend account email
2. Default is set to: `sagar.rytclick@gmail.com`
3. If you want to use a different email, verify your domain first

**Quick Fix**:
```bash
# In .env.local, ensure this matches your Resend signup email:
RECEIVING_EMAIL=sagar.rytclick@gmail.com
```

### Email Not Sending?
1. Check console for errors
2. Verify API key is correct
3. Ensure `.env.local` file exists
4. Restart dev server after adding API key

### Emails Going to Spam?
1. Verify your domain with Resend
2. Add SPF, DKIM, and DMARC records
3. Use a professional from address

### API Key Issues?
1. Make sure key starts with `re_`
2. Check key hasn't been revoked
3. Ensure no extra spaces in `.env.local`

## 📊 Monitoring
View all sent emails in your Resend dashboard:
- Delivery status
- Open rates
- Bounce tracking
- Error logs

## 💡 Pro Tips
1. **Add multiple recipients**: Update the `to` array in route.ts
2. **Customize subject line**: Modify the subject template
3. **Add attachments**: Use Resend's attachment feature
4. **Track opens**: Enable open tracking in Resend settings
5. **Webhooks**: Set up webhooks for real-time notifications

## 🔐 Security Notes
- Never commit `.env.local` to Git (it's in .gitignore)
- Rotate API keys periodically
- Use environment-specific keys (dev/staging/production)
- Monitor usage to prevent abuse

## 📞 Support
- Resend Docs: https://resend.com/docs
- Resend Support: support@resend.com
- Project Issues: Check console logs first

---
**Status**: ✅ Ready to use (just add your API key!)
