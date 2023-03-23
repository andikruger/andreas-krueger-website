const sendEmail = require("../../utils/sendEmail");

export default async (req, res) => {
  const { name, email, subject, message } = req.body;

  const emailMessage = `
    <h2>You have a new message from ${name}</h2>
    <p>Email: ${email}</p>
    <p>Subject: ${subject}</p>
    <p>Message: ${message}</p>
    `;
  try {
    await sendEmail({
      to: "andreas@kruger.joburg",
      subject: subject,
      text: emailMessage,
    });
    res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Email could not be sent, please use the email address above",
    });
  }
};
