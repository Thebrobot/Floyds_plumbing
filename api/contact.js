/**
 * Forwards website form submissions to a Go High Level inbound webhook.
 * Set GHL_WEBHOOK_URL in Vercel project environment variables.
 */
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const webhookUrl = process.env.GHL_WEBHOOK_URL;
  if (!webhookUrl) {
    return res.status(503).json({ error: 'Form is not configured yet.' });
  }

  const body = req.body ?? {};

  // Honeypot: bots only
  if (body.company_website) {
    return res.status(200).json({ ok: true });
  }

  const name = String(body.name ?? '').trim();
  const email = String(body.email ?? '').trim();
  const phone = String(body.phone ?? '').trim();
  const serviceAddress = String(body.service_address ?? '').trim();
  const message = String(body.message ?? '').trim();

  if (!name || !email || !phone || !serviceAddress || !message) {
    return res.status(400).json({ error: 'Missing required fields.' });
  }

  const parts = name.split(/\s+/);
  const firstName = parts[0] ?? '';
  const lastName = parts.slice(1).join(' ');

  const payload = {
    firstName,
    lastName,
    fullName: name,
    name,
    email,
    phone,
    service_address: serviceAddress,
    serviceAddress,
    address: serviceAddress,
    service: String(body.service ?? ''),
    urgency: String(body.urgency ?? ''),
    message,
    terms_consent: body.terms_consent === 'yes',
    termsConsent: body.terms_consent === 'yes',
    sms_consent: body.sms_consent === 'yes',
    smsConsent: body.sms_consent === 'yes',
    source: 'website',
    form_id: String(body.form_id ?? ''),
    page_url: String(body.page_url ?? '')
  };

  try {
    const ghlRes = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!ghlRes.ok) {
      const detail = await ghlRes.text();
      console.error('GHL webhook failed', ghlRes.status, detail);
      return res.status(502).json({ error: 'Unable to submit request.' });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('GHL webhook error', err);
    return res.status(502).json({ error: 'Unable to submit request.' });
  }
}
