"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "emailjs-com";
import { useState } from "react";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "phone",
    description: "(507)301-7390",
  },
  {
    icon: <FaEnvelope />,
    title: "email",
    description: "gpriya.dev27@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Giants Way, Lakeville, MN-55044",
  },
];

const Contact = () => {
  const [formData, setFormDate] = useState({
    name: "",
    // lastname: "",
    email: "",
    // phone:"",
    message: "",
  });
  const SERVICE_ID = "service_iiagvag";
  const TEMPLATE_ID = "template_vb3ynoo";
  const PUBLIC_KEY = "XoV5m6_lKAXdSIUBS";

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then((result) => {
        alert("sent message");
        setFormDate({
          name: "",
          // lastname: "",
          email: "",
          // phone:"",
          message: "",
        })
      })
      .catch(() => {
        alert("Oops! Something went wrong Please try gain.");
      });
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] xl:order-none order-2">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 rounded-xl bg-[#25252a]"
            >
              <h3 className="text-4xl text-accent">Let's Work Together</h3>
              <p className="text-white/60">
              Hello! I am currently open to new opportunities. If you have any open front-end roles for a React or React Native Developer, I would love to connect and discuss how I can contribute to your team.
              </p>
              {/* inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="name"
                  value={formData.name}
                  placeholder="name"
                  onChange={(e)=>{setFormDate({...formData,name:e.target.value})}}
                  name='name'
                />
                {/* <Input
                  type="lastname"
                  value={formData.lastname}
                  placeholder="Lastname"
                  onChange={(e)=>{setFormDate({...formData,lastname:e.target.value})}}
                /> */}
                <Input
                  type="email"
                  value={formData.email}
                  placeholder="Email"
                  onChange={(e)=>{setFormDate({...formData,email:e.target.value})}}
                  name='email'
                />
                {/* <Input
                  type="phone"
                  value={formData.phone}
                  placeholder="Phone"
                  onChange={(e)=>{setFormDate({...formData,phone:e.target.value})}}
                /> */}
              </div>
              {/* select a service */}
              {/* <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel value="est">select a service</SelectLabel>
                    <SelectItem value="cst">Web Development</SelectItem>
                    <SelectItem value="mst">Mobile Development</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select> */}

              <Textarea
                className="h-[200px]"
                value={formData.message}
                placeholder="Type your message here."
                onChange={(e)=>{setFormDate({...formData,message:e.target.value})}}
                name='message'
              />
              {/* btn */}
              <Button size="md" className="max-w-40 py-2">
                send message
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb:8 xl:mb-0 ">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex justify-center items-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
