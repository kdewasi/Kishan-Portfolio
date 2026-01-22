import nodemailer from 'nodemailer';

// Create transporter
const createTransporter = () => {
  console.log(`📧 [Email Service] Config - Using Service: Gmail`);

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    },
    logger: true,
    debug: true,
    connectionTimeout: 10000 // Fail after 10 seconds instead of 2 minutes
  });
};

// Generate fancy HTML email template
const generateEmailTemplate = (data) => {
  const { name, email, subject, message, timestamp } = data;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Message</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #0a0a0a;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 0;">
        <table role="presentation" style="width: 600px; max-width: 100%; border-collapse: collapse; background: linear-gradient(145deg, #1a1a1a 0%, #0f0f0f 100%); border-radius: 16px; overflow: hidden; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8);">
          
          <!-- Header -->
          <tr>
            <td style="padding: 40px 40px 20px; background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);">
              <table role="presentation" style="width: 100%;">
                <tr>
                  <td>
                    <h1 style="margin: 0; font-size: 28px; font-weight: 700; color: #ffffff; letter-spacing: -0.5px;">
                      📬 New Message Received
                    </h1>
                    <p style="margin: 8px 0 0; font-size: 14px; color: rgba(255,255,255,0.8);">
                      Someone reached out through your portfolio
                    </p>
                  </td>
                  <td align="right">
                    <div style="width: 60px; height: 60px; background: rgba(255,255,255,0.2); border-radius: 12px; display: flex; align-items: center; justify-content: center;">
                      <span style="font-size: 28px;">✉️</span>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Sender Info Card -->
          <tr>
            <td style="padding: 30px 40px;">
              <div style="background: #262626; border-radius: 12px; padding: 24px; border-left: 4px solid #3b82f6;">
                <table role="presentation" style="width: 100%;">
                  <tr>
                    <td style="padding-bottom: 16px;">
                      <p style="margin: 0; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #6b7280;">From</p>
                      <p style="margin: 4px 0 0; font-size: 20px; font-weight: 600; color: #ffffff;">${name}</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding-bottom: 16px;">
                      <p style="margin: 0; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #6b7280;">Email</p>
                      <a href="mailto:${email}" style="margin: 4px 0 0; font-size: 16px; color: #3b82f6; text-decoration: none; display: block;">${email}</a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p style="margin: 0; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #6b7280;">Subject</p>
                      <p style="margin: 4px 0 0; font-size: 16px; font-weight: 500; color: #e5e7eb;">${subject || 'No Subject'}</p>
                    </td>
                  </tr>
                </table>
              </div>
            </td>
          </tr>
          
          <!-- Message Content -->
          <tr>
            <td style="padding: 0 40px 30px;">
              <div style="background: #1f1f1f; border-radius: 12px; padding: 24px; border: 1px solid #333;">
                <p style="margin: 0 0 12px; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #6b7280;">Message</p>
                <p style="margin: 0; font-size: 16px; line-height: 1.7; color: #d1d5db; white-space: pre-wrap;">${message}</p>
              </div>
            </td>
          </tr>
          
          <!-- Quick Actions -->
          <tr>
            <td style="padding: 0 40px 30px;">
              <table role="presentation" style="width: 100%;">
                <tr>
                  <td align="center">
                    <a href="mailto:${email}?subject=Re: ${subject || 'Your message'}" 
                       style="display: inline-block; padding: 14px 32px; background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); color: #ffffff; text-decoration: none; font-weight: 600; font-size: 14px; border-radius: 8px; box-shadow: 0 4px 14px rgba(59, 130, 246, 0.4);">
                      Reply to ${name.split(' ')[0]} →
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="padding: 24px 40px; background: #0f0f0f; border-top: 1px solid #262626;">
              <table role="presentation" style="width: 100%;">
                <tr>
                  <td>
                    <p style="margin: 0; font-size: 12px; color: #6b7280;">
                      Received on ${timestamp}
                    </p>
                  </td>
                  <td align="right">
                    <p style="margin: 0; font-size: 12px; color: #6b7280;">
                      Kishan<span style="color: #3b82f6;">.dev</span> Portfolio
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
};

// Send email notification
export const sendContactEmail = async (messageData) => {
  console.log('📧 [Email Service] Initializing transporter...');
  const transporter = createTransporter();

  // Verify connection configuration
  try {
    await transporter.verify();
    console.log('✅ [Email Service] Transporter configuration is correct');
  } catch (error) {
    console.error('❌ [Email Service] Transporter verification failed:', error);
    throw error;
  }

  const timestamp = new Date().toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short'
  });

  const htmlContent = generateEmailTemplate({
    ...messageData,
    timestamp
  });

  const mailOptions = {
    from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO,
    subject: `📬 New Message: ${messageData.subject || 'No Subject'} - from ${messageData.name}`,
    html: htmlContent,
    replyTo: messageData.email
  };

  console.log(`📧 [Email Service] Attempting to send email to ${process.env.EMAIL_TO}...`);
  console.log(`📧 [Email Service] Using Host: ${process.env.EMAIL_HOST}, Port: ${process.env.EMAIL_PORT}, User: ${process.env.EMAIL_USER}`);

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ [Email Service] Email sent successfully!');
    console.log('📝 [Email Service] Message ID:', info.messageId);
    return info;
  } catch (error) {
    console.error('❌ [Email Service] Send failed:', error);
    console.error('❌ [Email Service] Error details:', JSON.stringify(error, null, 2));
    throw error;
  }
};
