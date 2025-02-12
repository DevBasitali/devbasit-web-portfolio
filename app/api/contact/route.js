import nodemailer from 'nodemailer'; // Importing Nodemailer for sending emails.

export async function POST(req) { // Defining a POST function to handle incoming requests.
  const { name, email, message } = await req.json(); // Parsing the JSON body of the request.

  // Validate the input
  if (!name || !email || !message) { // Checking if all fields are filled.
    return new Response(JSON.stringify({ error: 'All fields are required.' }), { status: 400 }); // Returning an error response if validation fails.
  }

  try {
    // Set up Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // Using Gmail as the email service.
      auth: {
        user: process.env.EMAIL_USER, // Your email from environment variables.
        pass: process.env.EMAIL_PASS, // Your email password from environment variables.
      },
    });

    await transporter.sendMail({ // Sending the email.
      from: email, // The sender's email.
      to: process.env.RECIPIENT_EMAIL, // The recipient's email from environment variables.
      subject: `New Contact Form Submission from ${name}`, // Subject of the email.
      text: message, // The message content.
    });

    return new Response(JSON.stringify({ message: 'Message sent successfully!' }), { status: 200 }); // Returning a success response.
  } catch (error) {
    console.error(error); // Logging any errors that occur.
    return new Response(JSON.stringify({ error: 'Failed to send message.' }), { status: 500 }); // Returning an error response if sending fails.
  }
}