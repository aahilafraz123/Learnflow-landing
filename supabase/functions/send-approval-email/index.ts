import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { email } = await req.json()

    if (!email) {
      throw new Error('Email is required')
    }

    // Configure SMTP client (using your Gmail)
    const client = new SMTPClient({
      connection: {
        hostname: "smtp.gmail.com",
        port: 587,
        tls: true,
        auth: {
          username: Deno.env.get('SMTP_USERNAME') || '',
          password: Deno.env.get('SMTP_PASSWORD') || '',
        },
      },
    });

    // Send the email
    await client.send({
      from: "LearnFlow <learnflow420@gmail.com>",
      to: email,
      subject: "Your LearnFlow Access Has Been Approved! 🎉",
      content: `
        <html>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2 style="color: #22c55e;">Welcome to LearnFlow! 🎉</h2>
            
            <p>Great news! Your access request has been approved.</p>
            
            <p>You can now create your account and start using LearnFlow.</p>
            
            <p>
              <a href="${Deno.env.get('SITE_URL')}/auth" 
                 style="display: inline-block; padding: 12px 24px; background: linear-gradient(to right, #22c55e, #5eead4); color: white; text-decoration: none; border-radius: 8px; font-weight: bold;">
                Sign Up Now
              </a>
            </p>
            
            <p>Simply:</p>
            <ol>
              <li>Click "Sign Up"</li>
              <li>Enter the email address you requested access with</li>
              <li>Create a password</li>
              <li>Verify your email</li>
            </ol>
            
            <p>If you have any questions, feel free to reach out to our support team.</p>
            
            <p>Best regards,<br><strong>The LearnFlow Team</strong></p>
          </body>
        </html>
      `,
      html: true,
    });

    await client.close();

    return new Response(
      JSON.stringify({ success: true, message: 'Approval email sent!' }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      }
    )
  }
})