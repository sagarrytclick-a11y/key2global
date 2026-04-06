import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, mobile, course } = body;

    // Validate required fields
    if (!name || !email || !mobile || !course) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Get course label
    const courseLabels: Record<string, string> = {
      'study-abroad': 'Study Abroad Programs',
      'mbbs-abroad': 'MBBS Abroad',
      'engineering': 'Engineering (B.Tech/B.E.)',
      'mbbs-india': 'MBBS in India',
    };

    const courseLabel = courseLabels[course] || course;

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'Key2Global <onboarding@resend.dev>', // Testing mode - will work with verified email only
      to: [process.env.RECEIVING_EMAIL || 'sagar.rytclick@gmail.com'], // Your verified email
      replyTo: email, // So you can reply directly to the applicant
      subject: `New Application: ${name} - ${courseLabel}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%);
              color: white;
              padding: 30px;
              border-radius: 10px 10px 0 0;
              text-align: center;
            }
            .header h1 {
              margin: 0;
              font-size: 28px;
            }
            .content {
              background: #f9fafb;
              padding: 30px;
              border-radius: 0 0 10px 10px;
              border: 1px solid #e5e7eb;
              border-top: none;
            }
            .field {
              margin-bottom: 20px;
              padding: 15px;
              background: white;
              border-radius: 8px;
              border-left: 4px solid #3b82f6;
            }
            .field-label {
              font-size: 12px;
              text-transform: uppercase;
              letter-spacing: 0.05em;
              color: #6b7280;
              font-weight: 600;
              margin-bottom: 5px;
            }
            .field-value {
              font-size: 16px;
              color: #111827;
              font-weight: 600;
            }
            .footer {
              margin-top: 30px;
              padding-top: 20px;
              border-top: 2px solid #e5e7eb;
              text-align: center;
              color: #6b7280;
              font-size: 14px;
            }
            .badge {
              display: inline-block;
              background: #dbeafe;
              color: #1e40af;
              padding: 4px 12px;
              border-radius: 20px;
              font-size: 12px;
              font-weight: 600;
              margin-top: 10px;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>🎓 New Application Received</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Key2Global Admissions Portal</p>
          </div>
          
          <div class="content">
            <div class="field">
              <div class="field-label">Applicant Name</div>
              <div class="field-value">${name}</div>
            </div>

            <div class="field">
              <div class="field-label">Email Address</div>
              <div class="field-value">
                <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a>
              </div>
            </div>

            <div class="field">
              <div class="field-label">Mobile Number</div>
              <div class="field-value">
                <a href="tel:+91${mobile}" style="color: #3b82f6; text-decoration: none;">+91 ${mobile}</a>
              </div>
            </div>

            <div class="field">
              <div class="field-label">Selected Course</div>
              <div class="field-value">${courseLabel}</div>
              <span class="badge">${course}</span>
            </div>

            <div class="field">
              <div class="field-label">Submission Time</div>
              <div class="field-value">${new Date().toLocaleString('en-IN', { 
                timeZone: 'Asia/Kolkata',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}</div>
            </div>

            <div class="footer">
              <p style="margin: 0 0 10px 0;">
                <strong>Action Required:</strong> Please contact this applicant within 24 hours.
              </p>
              <p style="margin: 0; font-size: 12px;">
                This is an automated notification from Key2Global Application System
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
New Application Received

Name: ${name}
Email: ${email}
Mobile: +91 ${mobile}
Course: ${courseLabel}
Time: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}

Please contact this applicant within 24 hours.
      `,
    });

    console.log('Email sent successfully:', data);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Application submitted successfully',
        data: data 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to submit application',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
