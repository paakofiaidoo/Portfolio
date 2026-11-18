import nodemailer from "nodemailer";

const clean = (v, max) => String(v ?? "").replace(/[\r\n]+/g, " ").trim().slice(0, max);

export default async function handler(req, res) {
    if (req.method !== "POST") {
        res.setHeader("Allow", "POST");
        return res.status(405).json({ ok: false, error: "method" });
    }
    const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
    const name = clean(body.name, 120);
    const email = clean(body.email, 200);
    const subject = clean(body.subject, 200) || "Message from paakofi.tech";
    const content = String(body.content ?? "").trim().slice(0, 8000);
    if (!content) return res.status(400).json({ ok: false, error: "content" });
    if (email && !/^\S+@\S+\.\S+$/.test(email)) return res.status(400).json({ ok: false, error: "email" });

    const { MAIL_HOST, MAIL_PORT, MAIL_USER, MAIL_PASS, MAIL_TO } = process.env;
    if (!MAIL_HOST || !MAIL_USER || !MAIL_PASS || !MAIL_TO) return res.status(503).json({ ok: false, error: "mail not configured" });

    const transport = nodemailer.createTransport({
        host: MAIL_HOST,
        port: Number(MAIL_PORT || 587),
        secure: Number(MAIL_PORT) === 465,
        auth: { user: MAIL_USER, pass: MAIL_PASS },
    });
    const from = name ? `${name.replace(/"/g, "")} via paakofi.tech <${MAIL_USER}>` : `paakofi.tech <${MAIL_USER}>`;
    const lines = [`Name: ${name || "-"}`, `Email: ${email || "-"}`, "", content];
    try {
        await transport.sendMail({
            from,
            to: MAIL_TO,
            replyTo: email || undefined,
            subject: `[paakofi.tech] ${subject}`,
            text: lines.join("\n"),
        });
        return res.status(200).json({ ok: true });
    } catch (e) {
        return res.status(502).json({ ok: false, error: "send" });
    }
}
