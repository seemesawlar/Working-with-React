import { useState, useRef } from "react";
// import emailjs from "@emailjs/browser";
import styles from "../styles/form.module.css";


const EMAILJS_SERVICE_ID  = "service_xxxxxxx";
const EMAILJS_TEMPLATE_ID = "template_xxxxxxx";
const EMAILJS_PUBLIC_KEY  = "xxxxxxxxxxxxxxxxxxxx";

const SOURCE_OPTIONS = [
  { value: "google",   label: "Google Search" },
  { value: "friend",   label: "Friend / Referral" },
  { value: "social",   label: "Social Media" },
  { value: "ad",       label: "Advertisement" },
  { value: "returning",label: "Returning Client" },
  { value: "other",    label: "Other" },
];

const initialForm = {
  name: "",
  email: "",
  phone: "",
  description: "",
  source: "",
  terms: false,
};

/* ── Field-level validators — each returns an error string or "" ── */
function validateName(value) {
  const trimmed = value.trim();
  if (!trimmed) return "Full name is required.";
  if (trimmed.length < 2) return "Name must be at least 2 characters.";
  if (!/^[a-zA-Z\s'-]+$/.test(trimmed)) return "Name can only contain letters, spaces, hyphens, and apostrophes.";
  return "";
}

function validateEmail(value) {
  const trimmed = value.trim();
  if (!trimmed) return "Email address is required.";
  // Reasonably strict email pattern without being a regex minefield
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (!emailPattern.test(trimmed)) return "Please enter a valid email address.";
  return "";
}

function validatePhone(value) {
  const digitsOnly = value.replace(/\D/g, "");
  if (!digitsOnly) return "Phone number is required.";
  if (digitsOnly.length < 10) return "Phone number must be at least 10 digits.";
  if (digitsOnly.length > 11) return "Phone number looks too long — please check it.";
  return "";
}

function validateDescription(value) {
  const trimmed = value.trim();
  if (!trimmed) return "Please describe your project, even briefly.";
  if (trimmed.length < 10) return "A few more details would help us prepare an accurate quote.";
  if (trimmed.length > 1500) return "Please keep your description under 1500 characters.";
  return "";
}

function validateSource(value) {
  if (!value) return "Please let us know how you heard about us.";
  return "";
}

function validateTerms(checked) {
  if (!checked) return "You must accept the terms and conditions to continue.";
  return "";
}

/* ── Format phone as user types: (780) 916-6652 ── */
function formatPhone(value) {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  if (digits.length === 0) return "";
  if (digits.length < 4) return `(${digits}`;
  if (digits.length < 7) return `(${digits.slice(0,3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0,3)}) ${digits.slice(3,6)}-${digits.slice(6)}`;
}

export default function BasementForm() {
  const formRef = useRef(null);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [charCount, setCharCount] = useState(0);

  function runValidation(name, value) {
    switch (name) {
      case "name":        return validateName(value);
      case "email":       return validateEmail(value);
      case "phone":       return validatePhone(value);
      case "description": return validateDescription(value);
      case "source":       return validateSource(value);
      case "terms":        return validateTerms(value);
      default: return "";
    }
  }

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    let nextValue = type === "checkbox" ? checked : value;

    // Block invalid characters live for name (letters/spaces/hyphen/apostrophe only)
    if (name === "name" && value !== "" && !/^[a-zA-Z\s'-]*$/.test(value)) {
      return; // ignore keystroke
    }

    // Live phone formatting
    if (name === "phone") {
      nextValue = formatPhone(value);
    }

    if (name === "description") {
      setCharCount(value.length);
    }

    setForm(prev => ({ ...prev, [name]: nextValue }));

    // Re-validate as the user types, but only show the error if the field has been touched/blurred once
    const fieldError = runValidation(name, nextValue);
    setErrors(prev => ({ ...prev, [name]: fieldError }));
  }

  function handleBlur(e) {
    const { name, value, type, checked } = e.target;
    const checkValue = type === "checkbox" ? checked : value;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(prev => ({ ...prev, [name]: runValidation(name, checkValue) }));
  }

  function validateAll() {
    const newErrors = {
      name: validateName(form.name),
      email: validateEmail(form.email),
      phone: validatePhone(form.phone),
      description: validateDescription(form.description),
      source: validateSource(form.source),
      terms: validateTerms(form.terms),
    };
    setErrors(newErrors);
    setTouched({ name: true, email: true, phone: true, description: true, source: true, terms: true });
    return Object.values(newErrors).every(err => !err);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!validateAll()) {
      // Focus the first invalid field for accessibility
      const firstErrorField = formRef.current?.querySelector('[aria-invalid="true"]');
      firstErrorField?.focus();
      return;
    }

    setStatus("sending");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setForm(initialForm);
      setErrors({});
      setTouched({});
      setCharCount(0);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className={styles.container}>
        <div className={styles.successBox} role="status">
          <span className={styles.successIcon} aria-hidden="true">✓</span>
          <div>
            <h2 className={styles.successTitle}>Request received!</h2>
            <p className={styles.successBody}>
              Thanks for telling us about your project. We'll review the details and get back to you within one business day with next steps.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Basement Development Quote Request</h1>
      <p className={styles.subheading}>Tell us about your project and we'll follow up with a free, no-obligation estimate.</p>

      <form ref={formRef} onSubmit={handleSubmit} className={styles.form} noValidate>

        {status === "error" && (
          <div className={styles.formError} role="alert">
            ⚠ Something went wrong sending your request. Please try again, or call us directly at <a href="tel:+17809166652">(780) 916-6652</a>.
          </div>
        )}

        <div className={styles.row}>
          <div className={styles.field}>
            <label htmlFor="bf-name" className={styles.label}>Full name <span className={styles.required}>*</span></label>
            <input
              id="bf-name"
              className={`${styles.input} ${touched.name && errors.name ? styles.inputError : ""}`}
              type="text"
              name="name"
              placeholder="Jane Smith"
              value={form.name}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={!!(touched.name && errors.name)}
              aria-describedby={errors.name ? "bf-name-error" : undefined}
              autoComplete="name"
            />
            {touched.name && errors.name && (
              <p id="bf-name-error" className={styles.fieldError}>{errors.name}</p>
            )}
          </div>

          <div className={styles.field}>
            <label htmlFor="bf-email" className={styles.label}>Email address <span className={styles.required}>*</span></label>
            <input
              id="bf-email"
              className={`${styles.input} ${touched.email && errors.email ? styles.inputError : ""}`}
              type="email"
              name="email"
              placeholder="jane@example.com"
              value={form.email}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={!!(touched.email && errors.email)}
              aria-describedby={errors.email ? "bf-email-error" : undefined}
              autoComplete="email"
            />
            {touched.email && errors.email && (
              <p id="bf-email-error" className={styles.fieldError}>{errors.email}</p>
            )}
          </div>
        </div>

        <div className={styles.field}>
          <label htmlFor="bf-phone" className={styles.label}>Phone number <span className={styles.required}>*</span></label>
          <input
            id="bf-phone"
            className={`${styles.input} ${touched.phone && errors.phone ? styles.inputError : ""}`}
            type="tel"
            name="phone"
            placeholder="(780) 555-0100"
            value={form.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={!!(touched.phone && errors.phone)}
            aria-describedby={errors.phone ? "bf-phone-error" : undefined}
            autoComplete="tel"
            inputMode="numeric"
          />
          {touched.phone && errors.phone && (
            <p id="bf-phone-error" className={styles.fieldError}>{errors.phone}</p>
          )}
        </div>

        <div className={styles.field}>
          <div className={styles.labelRow}>
            <label htmlFor="bf-description" className={styles.label}>Describe your project <span className={styles.required}>*</span></label>
            <span className={styles.charCount} aria-hidden="true">{charCount}/1500</span>
          </div>
          <textarea
            id="bf-description"
            className={`${styles.textarea} ${touched.description && errors.description ? styles.inputError : ""}`}
            name="description"
            rows={5}
            maxLength={1500}
            placeholder="Tell us about your space — square footage, what you'd like included (bathroom, wet bar, home gym, etc.), and your ideal timeline."
            value={form.description}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={!!(touched.description && errors.description)}
            aria-describedby={errors.description ? "bf-description-error" : undefined}
          />
          {touched.description && errors.description && (
            <p id="bf-description-error" className={styles.fieldError}>{errors.description}</p>
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor="bf-source" className={styles.label}>How did you hear about us? <span className={styles.required}>*</span></label>
          <select
            id="bf-source"
            className={`${styles.input} ${touched.source && errors.source ? styles.inputError : ""}`}
            name="source"
            value={form.source}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={!!(touched.source && errors.source)}
            aria-describedby={errors.source ? "bf-source-error" : undefined}
          >
            <option value="">Select an option</option>
            {SOURCE_OPTIONS.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
          {touched.source && errors.source && (
            <p id="bf-source-error" className={styles.fieldError}>{errors.source}</p>
          )}
        </div>

        <div className={styles.field}>
          <label className={styles.checkboxRow}>
            <input
              type="checkbox"
              name="terms"
              checked={form.terms}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={!!(touched.terms && errors.terms)}
              aria-describedby={errors.terms ? "bf-terms-error" : undefined}
              className={styles.checkbox}
            />
            <span>
              I agree to be contacted by Element Reno about my project 
              <span className={styles.required}> *</span>
            </span>
          </label>
          {touched.terms && errors.terms && (
            <p id="bf-terms-error" className={styles.fieldError}>{errors.terms}</p>
          )}
        </div>

        <button type="submit" className={styles.button} disabled={status === "sending"}>
          {status === "sending" ? (
            <span className={styles.sendingRow}>
              <span className={styles.spinner} aria-hidden="true" />
              Sending request…
            </span>
          ) : "Request a Free Quote (temporarily unavailable)Do Not Click Yet"}
        </button>

      </form>
    </div>
  );
}
