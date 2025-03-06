"use client";
import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

const FormValidation = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits." }),
  reason: z.string(),
  message: z.string(),
});

type FormData = z.infer<typeof FormValidation>;

const Contact = ({}) => {
  const form = useForm<FormData>({
    resolver: zodResolver(FormValidation),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      reason: "",
      message: "",
    },
  });

  const onSubmit = (data: FormData) => {
    bookTableMutation.mutate(data);
  };

  const bookTableMutation = useMutation({
    mutationFn: async (values: z.infer<typeof FormValidation>) => {
      return await axios.post("/api/contact", values);
    },
    onSuccess: () => {
      toast.success(
        "Your message has been submitted successfully. We will get back to you soon",
      );
      form.reset();
    },
    onError: () => {
      toast.error(
        "There was an error submitting your message. Please try again later",
      );
    },
  });

  return (
    <section
      className="flex h-full w-full flex-col items-center justify-center bg-[#fff]"
      id="contact"
    >
      <div className="flex h-full w-full max-w-[1300px] flex-col gap-[2.5rem] px-0 py-12 pl-0 md:px-2 md:py-12">
        <div className="flex w-full flex-col lg:flex-row">
          <div className="flex w-full flex-col gap-8 bg-[#] px-6 lg:w-1/2 lg:px-28">
            <div className="flex flex-col gap-8">
              <p className="font-bai text-lg leading-[4px] text-[#4197D4]">
                Contact Us
              </p>
              <h1 className="font-forum text-4xl font-medium uppercase leading-[50px] tracking-[5px] text-[#4197D4] lg:text-5xl">
                Get in
                <br /> Touch
              </h1>
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex gap-6">
                <div>
                  <div className="h-fit w-fit rounded-full p-2">
                    <MapPin className="text-[#000]" />
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <Link
                    href="https://maps.app.goo.gl/jiPd8jyuXNAkNFQn6"
                    target="_blank"
                  >
                    <p className="text-[#000]">
                    71 Golders Green Rd, <br />London NW11 8EL, United Kingdom
                    </p>
                  </Link>
                  <Link
                     href="https://maps.app.goo.gl/jiPd8jyuXNAkNFQn6"
                    target="_blank"
                  >
                    <p className="flex items-center gap-2 text-sm">
                      <span className="text-[#000]">Get Direction</span>
                      <ArrowRight className="text-[#000]" />
                    </p>
                  </Link>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div>
                  <div className="h-fit w-fit rounded-full p-2">
                    <Phone className="text-[#000]"/>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <Link href="tel:+441234567890" className="text-black">+44 1234 567890</Link>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div>
                  <div className="h-fit w-fit rounded-full p-2">
                    <Mail className="text-[#000]" />
                  </div>
                </div>
                <div className="flex flex-col gap-4 text-[#000]">
                  <Link href="mailto:info@nostimo.london" className="">
                  info@nostimo.london
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-start gap-4">
                <Link
                  href="https://www.instagram.com/nostimo.london/?hl=en"
                  target="_blank"
                  className="text-[#000]"
                >
                  <Icons.instagram />
                </Link>
                <Link
                  href="https://www.tripadvisor.com/Restaurant_Review-g186338-d21318441-Reviews-Nostimo-London_England.html"
                  target="_blank"
                  className="text-[#000]"
                >
                  <Icons.unknown />
                </Link>
                <Link
                  href="https://g.co/kgs/bMqkgi9"
                  className="text-[#000]"
                  target="_blank"
                >
                  <Icons.google />
                </Link>
                <Link href='https://www.facebook.com/nostimo.london/'>
                  <Icons.facebook />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col bg-[#fff] lg:w-1/2 lg:items-center lg:justify-center">
            <div className="w-full px-3 lg:w-4/5 lg:px-0">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="h-full">
                  <div className="flex gap-4 pt-7">
                    <div className="flex w-full flex-col gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormControl>
                              <Input
                                placeholder="First Name"
                                {...field}
                                className="h-12 rounded-xl bg-[#F2EFE8] text-black placeholder:text-[#000]"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormControl>
                              <Input
                                placeholder="Phone"
                                {...field}
                                className="h-12 rounded-xl bg-[#F2EFE8] text-black placeholder:text-[#000]"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormControl>
                              <Input
                                placeholder="Email"
                                {...field}
                                className="h-12 rounded-xl bg-[#F2EFE8] text-black placeholder:text-[#000]"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormLabel>
                              Reason for contacting (optional)
                            </FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Your Message"
                                {...field}
                                className="h-32 rounded-xl bg-[#F2EFE8] text-black placeholder:text-[#000]"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  <div className="flex w-full flex-col pt-7 lg:flex-row">
                    <Button
                      className="font-bai w-full rounded-2xl bg-[#4197D4] py-6"
                      disabled={bookTableMutation.isPending}
                    >
                      Contact US
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
        <iframe
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2479.7697109007327!2d-0.1986855!3d51.5724551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876115aae32217f%3A0x550971cc142ad643!2sNostimo!5e0!3m2!1sen!2sin!4v1738185780589!5m2!1sen!2sin"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-[500px] w-full"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;

// /images/contact/contact.png
