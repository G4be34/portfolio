"use client"

import { sendEmail } from '@/actions/sendEmail'
import { useSectionInView } from '@/lib/hooks'
import { motion } from "framer-motion"
import { useRef, useState } from 'react'
import toast from 'react-hot-toast'
import SectionHeading from './sectionHeading'
import SubmitBtn from './submitBtn'

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <motion.section
      ref={ref}
      id="contact"
      className='mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center'
      initial={{
        opacity: 0
      }}
      whileInView={{
        opacity: 1
      }}
      transition={{
        duration: 1
      }}
      viewport={{
        once: true
      }}
      >
      <SectionHeading>Contact Me</SectionHeading>

      <p className='text-gray-700 -mt-6 dark:text-white/80'>You can contact me directly at <a className='underline' href="mailto:jimenezgabriel12@gmail.com">jimenezgabriel12@gmail.com</a> or through this form.</p>

      <form ref={formRef} className='mt-10 flex flex-col dark:text-black' action={async formData => {
        setLoading(true);
        const { data, error } = await sendEmail(formData);

        if (error) {
          toast.error(error);
          setLoading(false);
          return;
        }

        toast.success("Email sent successfully!");
        setLoading(false);

        formRef.current?.reset();
      }}>
        <input
          type="email"
          name="senderEmail"
          className='h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
          placeholder='Your Email'
          required
          maxLength={100}/>

        <textarea
          className='h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
          name='message'
          placeholder='Your message'
          required
          maxLength={5000}/>

        <SubmitBtn />
      </form>

    </motion.section>
  )
}
