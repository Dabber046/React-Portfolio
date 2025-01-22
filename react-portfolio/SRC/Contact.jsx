import React, { useState } from "react";

const Contact = () => {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  const handleBlur = (field) => {
    if (!formState[field]) {
      setErrors((prev) => ({ ...prev, [field]: `${field} is required.` }));
    } else {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateEmail = () => {
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!emailRegex.test(formState.email)) {
      setErrors((prev) => ({ ...prev, email: "Invalid email address." }));
    } else {
      setErrors((prev) => ({ ...prev, email: "" }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section>
      <h2>Contact</h2>
      <form>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formState.name}
            onBlur={() => handleBlur("name")}
            onChange={handleChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formState.email}
            onBlur={validateEmail}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div>
          <label>Message</label>
          <textarea
            name="message"
            value={formState.message}
            onBlur={() => handleBlur("message")}
            onChange={handleChange}
          ></textarea>
          {errors.message && <span className="error">{errors.message}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
