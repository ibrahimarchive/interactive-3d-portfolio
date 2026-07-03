import emailjs from "@emailjs/browser";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z
    .string()
    .min(5, { message: "Message must be at least 5 characters." }),
});

export const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const handlePrefill = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        setForm((prevForm) => ({ ...prevForm, email: customEvent.detail }));
      }
    };

    window.addEventListener("prefill-contact-email", handlePrefill);

    return () => {
      window.removeEventListener("prefill-contact-email", handlePrefill);
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
    // Clear error for the field being changed
    if (errors[name as keyof typeof errors]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = contactSchema.safeParse(form);

    if (!result.success) {
      const fieldErrors: { [key: string]: string } = {};
      for (const issue of result.error.issues) {
        fieldErrors[issue.path[0] as string] = issue.message;
      }
      setErrors({
        name: fieldErrors.name || "",
        email: fieldErrors.email || "",
        message: fieldErrors.message || "",
      });
      return;
    }

    setErrors({ name: "", email: "", message: "" });
    setIsLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_APP_SERVICE_ID,
        import.meta.env.VITE_APP_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Ibrahim",
          from_email: form.email,
          to_email: import.meta.env.VITE_APP_EMAIL,
          message: form.message,
        },
        {
          publicKey: import.meta.env.VITE_APP_PUBLIC_KEY,
        }
      );

      setForm({
        name: "",
        email: "",
        message: "",
      });
      setErrors({
        name: "",
        email: "",
        message: "",
      });

      toast.success("Your message has been sent!");
    } catch (error) {
      console.error(error);

      toast.error("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="c-space my-20" id="contact">
      <div className="relative flex min-h-screen flex-col items-center justify-center">
        <img
          src="/assets/terminal.png"
          alt="Terminal"
          className="absolute inset-0 h-full min-h-screen"
        />

        <div className="contact-container">
          <h3 className="head-text">Let&apos;s talk</h3>

          <p className="mt-3 text-lg text-white-600">
            Whether you&apos;re looking to build a new website, improve your
            existing platform, or bring a unique project to life, I&apos;m here
            to help.
          </p>

          <form
            ref={formRef}
            onSubmit={(e) => void handleSubmit(e)}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">Full name</span>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="field-input disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-75"
                placeholder="John Doe"
                autoCapitalize="on"
                disabled={isLoading}
                aria-describedby={errors.name ? "name-error" : undefined}
              />

          {errors.name && (
            <span className="text-red-400" id="name-error">
              {errors.name}
            </span>
          )}
            </label>

            <label className="space-y-3">
              <span className="field-label">Email</span>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="field-input disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-75"
                placeholder="john.doe@email.com"
                autoCapitalize="off"
                disabled={isLoading}
                aria-describedby={errors.email ? "email-error" : undefined}
              />

          {errors.email && (
            <span className="text-red-400" id="email-error">
              {errors.email}
            </span>
          )}
            </label>

            <label className="space-y-3">
              <span className="field-label">Your message</span>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                className="field-input disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-75"
                placeholder="Hi, I'm interested in..."
                autoCapitalize="on"
                disabled={isLoading}
                aria-describedby={errors.message ? "message-error" : undefined}
              />

          {errors.message && (
            <span className="text-red-400" id="message-error">
              {errors.message}
            </span>
          )}
            </label>

            <button
              type="submit"
              className="field-btn disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-75"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send Message"}

              {!isLoading && (
                <img
                  src="/assets/arrow-up.png"
                  alt="Arrow"
                  className="field-btn_arrow"
                />
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
