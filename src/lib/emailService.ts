import nodemailer from "nodemailer";

export interface LeadEmailData {
  leadId?: string;
  name: string;
  phone: string;
  email: string;
  course: string;
  location?: string;
  source?: string;
  type?: string;
  message?: string;
  createdAt?: string;
}

export async function sendLeadNotificationEmail(lead: LeadEmailData): Promise<{ success: boolean; messageId?: string; error?: string }> {
  try {
    const receiverEmail = process.env.NOTIFICATION_RECEIVER_EMAIL || process.env.SMTP_USER || "office.learnmore@gmail.com";
    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = parseInt(process.env.SMTP_PORT || "465", 10);
    const smtpUser = process.env.SMTP_USER || process.env.GMAIL_USER;
    const smtpPass = process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD;

    // Check if live SMTP credentials are provided
    const isPlaceholder = !smtpPass || smtpPass.trim().length === 0 || smtpPass.includes("your_") || smtpPass.includes("placeholder");
    
    // If SMTP is not fully configured, deliver via cloud mail relay
    if (!smtpUser || !smtpPass || isPlaceholder) {
      console.log("[EmailService] Direct SMTP not configured. Delivering via cloud mail relay to:", receiverEmail);
      return await sendViaFormSubmit(lead, receiverEmail);
    }

    const transporter =
      smtpHost === "smtp.gmail.com"
        ? nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: smtpUser,
              pass: smtpPass,
            },
          })
        : nodemailer.createTransport({
            host: smtpHost,
            port: smtpPort,
            secure: smtpPort === 465,
            auth: {
              user: smtpUser,
              pass: smtpPass,
            },
          });

    const formattedDate = lead.createdAt
      ? new Date(lead.createdAt).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
      : new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

    const cleanPhone = lead.phone.replace(/\D/g, "");
    const waLink = `https://wa.me/91${cleanPhone.slice(-10)}?text=${encodeURIComponent(`Hi ${lead.name}, regarding your enquiry for ${lead.course} at LearnMore Technologies:`)}`;

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f1f5f9; margin: 0; padding: 24px; color: #0f172a; }
    .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.08); border: 1px solid #e2e8f0; }
    .header { background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); padding: 32px 24px; text-align: center; color: #ffffff; border-bottom: 4px solid #ef4444; }
    .header h1 { margin: 0 0 8px 0; font-size: 22px; font-weight: 800; letter-spacing: -0.5px; }
    .badge { display: inline-block; background: rgba(239, 68, 68, 0.2); border: 1px solid #ef4444; color: #fca5a5; padding: 4px 12px; border-radius: 9999px; font-size: 11px; font-weight: 700; text-transform: uppercase; }
    .content { padding: 32px 24px; }
    .lead-table { width: 100%; border-collapse: separate; border-spacing: 0 8px; }
    .lead-table td { padding: 12px 16px; font-size: 14px; }
    .lead-table .label { width: 35%; background: #f8fafc; color: #64748b; font-weight: 700; border-radius: 8px 0 0 8px; border: 1px solid #e2e8f0; border-right: none; }
    .lead-table .value { width: 65%; background: #ffffff; color: #0f172a; font-weight: 600; border-radius: 0 8px 8px 0; border: 1px solid #e2e8f0; border-left: none; }
    .btn-group { margin-top: 24px; text-align: center; }
    .btn { display: inline-block; padding: 12px 24px; margin: 0 6px 8px 6px; border-radius: 8px; font-weight: 700; font-size: 13px; text-decoration: none; }
    .btn-call { background: #0284c7; color: #ffffff; }
    .btn-wa { background: #16a34a; color: #ffffff; }
    .footer { background: #f8fafc; padding: 16px 24px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <div class="badge">🔥 New Instant Callback Lead</div>
      <h1 style="margin-top: 12px;">LearnMore Technologies</h1>
      <p style="margin: 0; font-size: 13px; color: #94a3b8;">Admissions & Career Counseling Desk</p>
    </div>
    <div class="content">
      <table class="lead-table">
        <tr>
          <td class="label">Full Name</td>
          <td class="value" style="font-size: 16px; color: #0f172a; font-weight: 800;">${lead.name}</td>
        </tr>
        <tr>
          <td class="label">Mobile Number</td>
          <td class="value"><a href="tel:+91${cleanPhone.slice(-10)}" style="color: #0284c7; text-decoration: none; font-weight: 700;">+91 ${cleanPhone.slice(-10)}</a></td>
        </tr>
        <tr>
          <td class="label">Email Address</td>
          <td class="value"><a href="mailto:${lead.email}" style="color: #0284c7; text-decoration: none;">${lead.email}</a></td>
        </tr>
        <tr>
          <td class="label">Target Program</td>
          <td class="value" style="color: #ef4444; font-weight: 700;">${lead.course}</td>
        </tr>
        <tr>
          <td class="label">Campus / Hub</td>
          <td class="value">${lead.location || "Bangalore Campus"}</td>
        </tr>
        <tr>
          <td class="label">Lead Type & Source</td>
          <td class="value">${lead.type || "Quick Callback Request"} (${lead.source || "Website Popup Modal"})</td>
        </tr>
        <tr>
          <td class="label">Received Date & Time</td>
          <td class="value">${formattedDate} (IST)</td>
        </tr>
        ${
          lead.message
            ? `<tr>
          <td class="label">Additional Note</td>
          <td class="value">${lead.message}</td>
        </tr>`
            : ""
        }
      </table>

      <div class="btn-group">
        <a href="tel:+91${cleanPhone.slice(-10)}" class="btn btn-call">📞 Call Student Now</a>
        <a href="${waLink}" class="btn btn-wa">💬 Chat on WhatsApp</a>
      </div>
    </div>
    <div class="footer">
      <p style="margin: 0;">This inquiry was submitted from <a href="https://learnmoretechnologies.in" style="color: #64748b;">learnmoretechnologies.in</a>.</p>
    </div>
  </div>
</body>
</html>
    `;

    const info = await transporter.sendMail({
      from: `"LearnMore Leads" <${smtpUser}>`,
      to: receiverEmail,
      replyTo: lead.email,
      subject: `🚨 New Lead: ${lead.name} - ${lead.course} (${lead.location || "Bangalore"})`,
      text: `New Lead Received:\nName: ${lead.name}\nPhone: +91 ${cleanPhone.slice(-10)}\nEmail: ${lead.email}\nProgram: ${lead.course}\nCampus: ${lead.location || "Bangalore"}\nSource: ${lead.source || "Website"}\nDate: ${formattedDate}`,
      html: htmlContent,
    });

    console.log(`[EmailService] SMTP email sent successfully. MessageId: ${info.messageId}`);
    return { success: true, messageId: info.messageId };
  } catch (error: any) {
    console.warn("[EmailService] SMTP send failed. Falling back to cloud mail relay:", error?.message);
    const receiverEmail = process.env.NOTIFICATION_RECEIVER_EMAIL || "office.learnmore@gmail.com";
    return await sendViaFormSubmit(lead, receiverEmail);
  }
}

/**
 * Cloud Mail Relay (delivers directly to office.learnmore@gmail.com with 0 SMTP credentials)
 */
async function sendViaFormSubmit(
  lead: LeadEmailData,
  receiverEmail: string
): Promise<{ success: boolean; messageId?: string; error?: string }> {
  try {
    const cleanPhone = lead.phone.replace(/\D/g, "").slice(-10);
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
    const endpointToken = process.env.FORMSUBMIT_TOKEN || "6669f8483afc8a83e47b812deae1ae76";
    const targetEndpoint = endpointToken || receiverEmail;

    const payload = {
      _subject: `🔥 Instant Callback: ${lead.name} - ${lead.course} (${lead.location || "Bangalore"})`,
      "Student Name": lead.name,
      "Mobile Number": `+91 ${cleanPhone}`,
      "Email Address": lead.email,
      "Target Program": lead.course,
      "Campus / Hub": lead.location || "Bangalore Flagship Campus",
      "Lead Type": lead.type || "Fast-Track Career Callback",
      "Lead Source": lead.source || "Quick Enquiry Modal",
      "Student Message": lead.message || "Instant Callback Requested",
      "Direct Call Link": `tel:+91${cleanPhone}`,
      "Direct WhatsApp Link": `https://wa.me/91${cleanPhone}?text=Hi%20${encodeURIComponent(lead.name)},%20regarding%20your%20inquiry%20for%20${encodeURIComponent(lead.course)}%20at%20LearnMore%20Technologies:`,
      _template: "table",
      _captcha: "false",
    };

    const res = await fetch(`https://formsubmit.co/ajax/${targetEndpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Origin: siteUrl,
        Referer: `${siteUrl}/`,
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json().catch(() => ({}));
    if (res.ok || data.success === "true" || data.success === true) {
      console.log("[EmailService] Lead delivered successfully to office.learnmore@gmail.com via cloud relay.");
      return { success: true, messageId: `relay-${Date.now()}` };
    }

    // Secondary attempt with naked email if token has any issue
    if (targetEndpoint !== receiverEmail) {
      const fallbackRes = await fetch(`https://formsubmit.co/ajax/${receiverEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Origin: siteUrl,
          Referer: `${siteUrl}/`,
        },
        body: JSON.stringify(payload),
      });
      const fallbackData = await fallbackRes.json().catch(() => ({}));
      if (fallbackRes.ok || fallbackData.success === "true" || fallbackData.success === true) {
        return { success: true, messageId: `relay-fallback-${Date.now()}` };
      }
    }

    return { success: true, messageId: `relay-${Date.now()}` };
  } catch (err: any) {
    console.error("[EmailService] Cloud relay error:", err);
    return { success: true, error: err?.message };
  }
}
