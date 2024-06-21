"use client";

import React from "react";
import SectionHeading from "./sectionHeading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submitBtn";
import toast from "react-hot-toast";
const Contact = () => {
  const { ref } = useSectionInView({ sectionName: "Contact" });

  return (
    <motion.section
      ref={ref}
      viewport={{ once: true }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact"
      className="text-center mb-20 sm:mb-28 w-[min(100%,38rem)]"
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 -mt-6">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:ilyasselarbaouti@outlook.com">
        ilyasselarbaouti@outlook.com
        </a>{" "}
        or through this form
      </p>
      <form
        className="mt-10 flex flex-col "
        action={async (formData) => {
          const {  error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          placeholder="Your email"
          className="h-14 px-4 rounded-lg borderBlack"
          type="email"
          name="senderEmail"
          maxLength={500}
          required
        />
        <textarea
          placeholder="Your message"
          name="message"
          className="h-52 my-3 rounded-lg borderBlack p-4"
          maxLength={5000}
          required
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
};

export default Contact;
