'use server';

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

export async function submitContactForm(data: ContactFormData): Promise<{ ok: boolean }> {
  // Forward to email or CRM here. For now, log server-side and return success.
  console.log('[ContactForm submission]', data);
  return { ok: true };
}
