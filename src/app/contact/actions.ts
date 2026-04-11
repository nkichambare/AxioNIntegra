'use server';

import { Resend } from 'resend';

export type ContactFormData = {
  fullName: string;
  workEmail: string;
  companyName: string;
  country: string;
  programmeType: string;
  manufacturingProcess?: string;
  annualVolume?: string;
  targetTimeline?: string;
  message: string;
};

function buildEmailHtml(data: ContactFormData): string {
  const row = (label: string, value?: string) =>
    value
      ? `<tr>
          <td style="padding:8px 12px;font-family:monospace;font-size:11px;text-transform:uppercase;letter-spacing:0.1em;color:#64748b;white-space:nowrap;border-bottom:1px solid #e2e8f0;">${label}</td>
          <td style="padding:8px 12px;font-family:sans-serif;font-size:14px;color:#0f172a;border-bottom:1px solid #e2e8f0;">${value}</td>
        </tr>`
      : '';

  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f8fafc;font-family:sans-serif;">
  <div style="max-width:600px;margin:40px auto;background:#ffffff;border-top:3px solid #1e3a8a;">
    <div style="padding:28px 32px;border-bottom:1px solid #e2e8f0;">
      <p style="margin:0 0 4px;font-family:monospace;font-size:10px;text-transform:uppercase;letter-spacing:0.2em;color:#64748b;">AxionIntegra</p>
      <h1 style="margin:0;font-size:20px;font-weight:700;color:#0f172a;">New Enquiry Received</h1>
    </div>

    <div style="padding:24px 32px;">
      <table style="width:100%;border-collapse:collapse;border:1px solid #e2e8f0;">
        <tbody>
          ${row('Full Name', data.fullName)}
          ${row('Work Email', data.workEmail)}
          ${row('Company', data.companyName)}
          ${row('Country', data.country)}
          ${row('Programme Type', data.programmeType.replace(/_/g, ' '))}
          ${row('Manufacturing Process', data.manufacturingProcess?.replace(/_/g, ' '))}
          ${row('Annual Volume', data.annualVolume)}
          ${row('Target Timeline', data.targetTimeline)}
        </tbody>
      </table>

      <div style="margin-top:24px;padding:20px;background:#f8fafc;border-left:3px solid #1e3a8a;">
        <p style="margin:0 0 8px;font-family:monospace;font-size:10px;text-transform:uppercase;letter-spacing:0.15em;color:#64748b;">How Can We Help?</p>
        <p style="margin:0;font-size:15px;line-height:1.7;color:#0f172a;">${data.message}</p>
      </div>
    </div>

    <div style="padding:16px 32px;background:#f8fafc;border-top:1px solid #e2e8f0;">
      <p style="margin:0;font-family:monospace;font-size:10px;color:#94a3b8;text-transform:uppercase;letter-spacing:0.1em;">Reply to this email to respond directly to ${data.fullName}</p>
    </div>
  </div>
</body>
</html>`;
}

export async function submitContactForm(data: ContactFormData): Promise<{ ok: boolean }> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL;

  if (!apiKey || !to) {
    console.error('[ContactForm] Missing RESEND_API_KEY or CONTACT_EMAIL env vars');
    return { ok: false };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: 'AxionIntegra Contact <onboarding@resend.dev>',
      to,
      reply_to: data.workEmail,
      subject: `[Enquiry] ${data.fullName} – ${data.companyName}`,
      html: buildEmailHtml(data),
      tags: [
        { name: 'category', value: 'enquiry' },
        { name: 'source', value: 'contact-form' },
      ],
    });

    if (error) {
      console.error('[ContactForm] Resend error:', error);
      return { ok: false };
    }

    return { ok: true };
  } catch (err) {
    console.error('[ContactForm] Unexpected error:', err);
    return { ok: false };
  }
}
