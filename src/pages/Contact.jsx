import { useState } from "react";
import { toast } from "react-toastify";
import "../styles/Contact.css";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.message
    ) {
      toast.error("Please fill in all fields.");
      return;
    }

    toast.success("Message sent successfully! ✅");

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="contact-page">

      <div className="contact-card">

        <h1>Contact Us</h1>

        <p>
          We'd love to hear from you.
          Send us your query below.
        </p>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Enter your message..."
            rows="5"
            value={form.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </div>
  );
}

export default Contact;