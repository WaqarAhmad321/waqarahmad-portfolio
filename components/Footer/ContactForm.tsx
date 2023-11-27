"use client";

import sendEmail from "@/actions/sendEmail";
import { FormSubmitButton } from "@/components";
import { useRef } from "react";
import toast from "react-hot-toast";

const ContactForm = () => {
  const ref = useRef<HTMLFormElement>(null);

  return (
    <form
      ref={ref}
      className="mt-4 flex flex-col gap-4"
      action={async (formData) => {
        await sendEmail(formData);
        ref.current?.reset();

        // if (error) {
        //   toast.error(error);
        //   return;
        // }

        // toast.success("Look at my styles.", {
        //   style: {
        //     border: "1px solid #6366f1",
        //     padding: "16px",
        //     color: "#6366f1",
        //   },
        //   iconTheme: {
        //     primary: "#6366f1",
        //     secondary: "#FFFAEE",
        //   },
        // });
        toast.success("Message sent!");
      }}
    >
      <input
        type="text"
        name="senderName"
        required
        placeholder="Name"
        className="rounded-md border stroke-special p-2 outline-special lg:w-[35rem]"
        maxLength={50}
      />
      <input
        type="email"
        name="senderEmail"
        placeholder="Email, So I can get back to you"
        required
        className="rounded-md border stroke-special p-2 outline-special lg:w-[35rem]"
        maxLength={50}
      />
      <textarea
        required
        name="message"
        placeholder="Message"
        className="rounded-md border stroke-special p-2 outline-special lg:w-[35rem]"
        rows={5}
        maxLength={500}
      />
      <FormSubmitButton />
    </form>
  );
};

export default ContactForm;
