import React, { useState } from "react";
import styled from "styled-components";
import {
  CircleUserRound,
  Mail,
  PenLine,
  Phone,
} from "lucide-react";

import { Button } from "../ui/button";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Input = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    try {
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          subject: form.subject.trim(),
          message: form.message.trim(),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_ID
      );

      if (result.status === 200) {
        toast.success("Message Successfully sent!");

        setForm({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      toast.error("Failed to send message.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <StyledWrapper>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col text-start gap-4">

          {/* NAME */}
          <div className="field">
            <span className="label">Full Name:</span>
            <div className="group">
              <CircleUserRound className="icon" />
              <input
                className="input bg-[#f8fafc] dark:bg-black"
                type="text"
                name="name"
                placeholder="Enter your name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* EMAIL */}
          <div className="field">
            <span className="label">Email:</span>
            <div className="group">
              <Mail className="icon" />
              <input
                className="input bg-[#f8fafc] dark:bg-black"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* PHONE */}
          <div className="field">
            <span className="label">Phone:</span>
            <div className="group">
              <Phone className="icon" />
              <input
                className="input bg-[#f8fafc] dark:bg-black"
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* SUBJECT */}
          <div className="field">
            <span className="label">Subject:</span>
            <div className="group">
              <PenLine className="icon" />
              <input
                className="input bg-[#f8fafc] dark:bg-black"
                type="text"
                name="subject"
                placeholder="Enter subject"
                value={form.subject}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* MESSAGE */}
          <div className="field">
            <span className="label">Message:</span>
            <div className="group">
              <textarea
                className="textarea bg-[#f8fafc] dark:bg-black"
                name="message"
                placeholder="Enter your message"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <Button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Submit"}
          </Button>
        </div>
      </form>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .field {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .label {
    font-size: 14px;
    font-weight: 500;
  }

  .group {
    position: relative;
    width: 100%;
  }

  .input,
  .textarea {
    width: 100%;
    padding: 0.75rem 1rem 0.75rem 3rem;
    border: 2px solid #cbd5e1;
    border-radius: 10px;
    outline: none;
    color: #0d0c22;
    font-size: 1rem;
    transition: all 0.3s ease;
    resize: vertical;
  }

  .textarea {
    min-height: 120px;
  }

  .input::placeholder,
  .textarea::placeholder {
    color: #94a3b8;
  }

  .input:focus,
  .input:hover,
  .textarea:focus,
  .textarea:hover {
    border-color: rgba(129, 140, 248, 1);
    background-color: #fff;
    box-shadow: 0 0 0 5px rgb(129 140 248 / 30%);
  }

  .icon {
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    width: 1.25rem;
    height: 1.25rem;
    color: #6366f1;
  }
`;

export default Input;