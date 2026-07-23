import type { ContactUsValues } from "@/lib/validation-schemas";

function escapeHtml(value: string) {
	return value
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#39;");
}

function nl2br(value: string) {
	return escapeHtml(value).replace(/\n/g, "<br />");
}

type ContactEmailFields = Omit<ContactUsValues, "atodHpField">;

export function renderContactEmail({
	name,
	email,
	phone,
	projectType,
	message,
}: ContactEmailFields) {
	const row = (label: string, value: string) => `
    <tr>
      <td style="padding:14px 0;border-bottom:1px solid #1c2340;">
        <p style="margin:0 0 4px;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:#7d86ab;font-family:Arial,Helvetica,sans-serif;">
          ${escapeHtml(label)}
        </p>
        <p style="margin:0;font-size:15px;line-height:1.5;color:#ffffff;font-family:Arial,Helvetica,sans-serif;">
          ${escapeHtml(value)}
        </p>
      </td>
    </tr>`;

	return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>New contact form submission</title>
  </head>
  <body style="margin:0;padding:0;background-color:#0c111d;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#0c111d;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background-color:#0f1526;border:1px solid #1c2340;border-radius:12px;overflow:hidden;">
            <tr>
              <td style="background-color:#1e338a;padding:24px 32px;">
                <p style="margin:0;font-size:18px;font-weight:700;letter-spacing:0.02em;color:#ffffff;font-family:Arial,Helvetica,sans-serif;">
                  Atod
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:28px 32px 8px;">
                <p style="margin:0 0 4px;font-size:20px;font-weight:700;color:#ffffff;font-family:Arial,Helvetica,sans-serif;">
                  New contact form submission
                </p>
                <p style="margin:0;font-size:14px;color:#9aa2c0;font-family:Arial,Helvetica,sans-serif;">
                  Someone reached out through the Atod website.
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 32px 4px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  ${row("Name", name)}
                  ${row("Email", email)}
                  ${row("Phone", phone)}
                  ${row("Project Type", projectType)}
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 32px 32px;">
                <p style="margin:0 0 6px;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:#7d86ab;font-family:Arial,Helvetica,sans-serif;">
                  Message
                </p>
                <p style="margin:0;font-size:15px;line-height:1.6;color:#ffffff;font-family:Arial,Helvetica,sans-serif;white-space:pre-wrap;">
                  ${nl2br(message)}
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 32px;background-color:#0a0e18;border-top:1px solid #1c2340;">
                <a href="mailto:${encodeURIComponent(email)}" style="display:inline-block;background-color:#f56f46;color:#ffffff;text-decoration:none;font-weight:600;font-size:14px;font-family:Arial,Helvetica,sans-serif;padding:12px 24px;border-radius:999px;">
                  Reply to ${escapeHtml(name.split(" ")[0] ?? name)}
                </a>
              </td>
            </tr>
          </table>
          <p style="margin:16px 0 0;font-size:12px;color:#5b6386;font-family:Arial,Helvetica,sans-serif;">
            Sent automatically from the Atod website contact form.
          </p>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}
