import { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    console.log(process.env.REACT_APP_API_KEY,"react key")
    const { name, email, phone, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      data: {
        message: message.value,
        recipient: "amanjakhar54@gmail.com"
      },
      phone: phone.value,
    };
    let response = await fetch("https://app.bigradar.io/api/templates/office-virtual/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MTI2MWU3MGU1MDE3NDNjZTAzYmVhMTEiLCJpYXQiOjE2Mjk4ODgxMTI4MjV9.bsi5Ut5nMiep7Dvl8RNP3nNtRvjf2do1wsOfW6pfOok",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert("Successfully Submitted, Our team will contact you as soon as possible.");
  };
    
  return (
    <form onSubmit={handleSubmit}>
      <div class="mt-4" >
        <label class="" htmlFor="name">Name:</label>
        <input class="h-10 p-2 w-full rounded" type="text" id="name" placeholder="Your Full Name" required />
      </div>
      <div class="mt-4">
        <label htmlFor="email">Email:</label>
        <input class="h-10 p-2 w-full rounded" type="email" id="email" placeholder="Email Address" required />
      </div>
      <div class="mt-4">
        <label htmlFor="email">Phone Number:</label>
        <input class="h-10 p-2 w-full rounded" type="text" id="phone" placeholder="Your Phone Number" required />
      </div>
      <div class="mt-4">
        <label htmlFor="message">Message:</label>
        <textarea class="h-20 p-2 w-full rounded" id="message" placeholder="Your requirements" required />
      </div>
      <button class="h-10 p-2 w-full rounded bg-black text-white mt-6" type="submit">{status}</button>
    </form>
  );
};

export default ContactForm;