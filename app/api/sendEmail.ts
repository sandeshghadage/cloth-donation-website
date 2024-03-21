import nodemailer from "nodemailer";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(5, "req.body");
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "rajrajbhar682@gmail.com",
      pass: "ghxdsnd",
    },
    secure: false,
  });

  const {
    name,
    email,
    mobileNo,
    address,
    city,
    pincode,
    flat,
    message,
    orderItem,
  } = req.body;

  const mailData = {
    from: "rajrajbhar682@gmail.com",
    to: email,
    subject: "Your Subject Here",
    text: "Your Message Here",
  };

  try {
    await transporter.sendMail(mailData);
    res.status(200).json({ message: "Message Sent" });
  } catch (error: any) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: error.message || "Something went wrong" });
  }
}
