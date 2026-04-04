import React from "react";
import styled from "styled-components";
import { CircleUserRound, Mail, PenLine, Phone } from 'lucide-react'
import { useState } from 'react';
import emailjs from 'emailjs-com';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
const Input = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!executeRecaptcha) {
      alert("Recaptcha not ready");
      return;
    }

    // 1. Get recaptcha token
    const token = await executeRecaptcha('contact_form');

    console.log("Token:", token);

    // 2. Send email via EmailJS
    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          ...form,
          recaptcha_token: token, // optional
        },
        'YOUR_PUBLIC_KEY'
      );

      alert("Message sent!");
    } catch (error) {
      console.error(error);
      alert("Failed to send message");
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
                placeholder="Enter your name"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* NAME */}
          <div className="field">
            <span className="label">Email:</span>
            <div className="group">
              <Mail className="icon" />
              <input
                className="input bg-[#f8fafc] dark:bg-black"
                type="email"
                placeholder="Enter your email"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* NAME */}
          <div className="field">
            <span className="label">Phone:</span>
            <div className="group">
              <Phone className="icon" />
              <input
                className="input bg-[#f8fafc] dark:bg-black"
                type="number"
                placeholder="Enter your phone number"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* NAME */}
          <div className="field">
            <span className="label">Subject:</span>
            <div className="group">
              <PenLine className="icon" />
              <input
                className="input bg-[#f8fafc] dark:bg-black"
                type="text"
                placeholder="Enter subject message"
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
                placeholder="Enter your message"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <button type="submit">Submit</button>
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

  /* ICON */
  .icon {
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    width: 1.25rem;
    height: 1.25rem;
    color: #6366f1;
  }

  /* Fix for textarea icon alignment */
  .textarea-icon {
    top: 1rem;
    transform: none;
  }
`;

export default Input;