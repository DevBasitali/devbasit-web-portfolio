import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: "All fields are required." }), {
      status: 400,
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "rajaalix2022@gmail.com",
        pass: "izvm wgbe qver xrlm",
      },
    });

    const info = await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: "rajaalix2022@gmail.com",
      subject: `Client wants to send you a message: ${name}`,
      text: `Message from ${name} (${email}): ${message}`,
      html: 
      `<div style="font-family: Arial, sans-serif; line-height: 1.5; color: #333;">
        <h2 style="color: #4CAF50;">Message from: ${name}</h2>
        <p style="font-size: 16px;">Email: <strong>${email}</strong></p>
        <p style="font-size: 16px;">Msg:</p>
        <p style="border: 1px solid #ccc; padding: 10px; background-color: #f9f9f9;">${message}</p>
      </div>`
      ,
    });

    return new Response(
      JSON.stringify({ message: "Message sent successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({
        error:
          "Failed to send message. Please check your credentials and try again.",
      }),
      { status: 500 }
    );
  }
}
