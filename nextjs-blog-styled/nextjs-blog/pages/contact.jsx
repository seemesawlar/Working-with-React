import { useState } from "react";
import styles from "../styles/form.module.css";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
    source: "",
    terms: false,
  });

  const [error, setError] = useState("");

  // 🔐 Live input protection
  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    // Name: only letters and spaces
    if (name === "name" && !/^[a-zA-Z\s]*$/.test(value)) return;

    // Phone: only numbers
    if (name === "phone" && !/^\d*$/.test(value)) return;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  // 🔐 Validation rules
  function validateForm() {
    if (form.name.trim().length < 2) {
      return "Name must contain only letters and be at least 2 characters.";
    }

    if (!form.email.includes("@") || !form.email.includes(".")) {
      return "Please enter a valid email address.";
    }

    if (form.phone.length < 10) {
      return "Phone number must be at least 10 digits.";
    }

    if (!form.terms) {
      return "You must accept the terms and conditions.";
    }

    return null;
  }

  // 🚀 Submit handler
  function handleSubmit(e) {
    e.preventDefault();

    const validationError = validateForm();

    if (validationError) {
      setError(validationError);
      return;
    }

    setError("");

    console.log("Submitted Data:", form);

    alert("Form submitted successfully!");

    // reset form
    setForm({
      name: "",
      email: "",
      phone: "",
      description: "",
      source: "",
      terms: false,
    });
  }

  return (
    <div className={styles.container}>
      <h1>Basement Development Form</h1>
      <p>Please provide the following information for a quote.</p>

      <form onSubmit={handleSubmit} className={styles.form}>
        {/* 🔴 ERROR MESSAGE */}
        {error && <div className={styles.error}>⚠ {error}</div>}

        <div className={styles.row}>
          <input
            className={styles.input}
            type="text"
            name="name"
            placeholder="Enter full name"
            value={form.name}
            onChange={handleChange}
          />

          <input
            className={styles.input}
            type="email"
            name="email"
            placeholder="Enter email address"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <input
          className={styles.input}
          type="text"
          name="phone"
          placeholder="Enter phone number"
          value={form.phone}
          onChange={handleChange}
        />

        <textarea
          className={styles.textarea}
          name="description"
          placeholder="Describe your project"
          value={form.description}
          onChange={handleChange}
        />

        <select
          className={styles.input}
          name="source"
          value={form.source}
          onChange={handleChange}
        >
          <option value="">How did you hear about us</option>
          <option value="google">Google</option>
          <option value="friend">Friend</option>
          <option value="ad">Advertisement</option>
        </select>

        <label className={styles.checkbox}>
          <input
            type="checkbox"
            name="terms"
            checked={form.terms}
            onChange={handleChange}
          />
          I accept the terms and conditions.
        </label>

        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
}
