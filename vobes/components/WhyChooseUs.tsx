"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import FirstIcon from "@/assets/IstIcon.png";
import SecondIcon from "@/assets/SecondIcon.png";
import ThirdIcon from "@/assets/ThirdIcon.png";
import FourthIcon from "@/assets/FourthIcon.png";
import FifthIcon from "@/assets/FifthIcon.png";
import sixthIcon from "@/assets/sixthIcon.png";
import perfect1 from "@/assets/perfecticon1.png";
import perfect2 from "@/assets/perfecticon2.png";
import perfect3 from "@/assets/perfecticon3.png";
import perfect4 from "@/assets/perfecticon4.png";


const reasons = [
  {
    title: "End-to-End Encryption",
    desc: "Every vote is protected with military-grade encryption. Your data remains private and secure throughout the entire voting process.",
    icon: (
      <Image
        src={FirstIcon}
        alt="End-to-End Encryption"
        width={40}
        height={40}
      />
    ),
    backgroundColor: "bg-[#CFB5FA40]",
  },
  {
    title: "Real-Time Results",
    desc: "Watch results update live as votes are cast, with instant notifications and detailed analytics dashboards.",
    icon: (
      <Image src={SecondIcon} alt="Real-Time Results" width={40} height={40} />
    ),
    backgroundColor: "bg-[#76B39D66]",
  },
  {
    title: "Easy Setup & Customization",
    desc: "Create elections in minutes with our intuitive interface. Customize ballots, branding, and voting rules to match your needs.",
    icon: (
      <Image src={ThirdIcon} alt="Real-Time Results" width={40} height={40} />
    ),
    backgroundColor: "bg-[#7C92FF66]",
  },
  {
    title: "Voter Authentication",
    desc: "Multiple authentication methods ensure only eligible voters participate. Prevent fraud while maintaining voter privacy.",
    icon: (
      <Image src={FourthIcon} alt="Real-Time Results" width={40} height={40} />
    ),
    backgroundColor: "bg-[#F7A68366]",
  },
  {
    title: "Multi-Device Access",
    desc: "Vote seamlessly from any device - mobile, tablet, or desktop. Our responsive design ensures a consistent experience everywhere.",
    icon: (
      <Image src={FifthIcon} alt="Real-Time Results" width={40} height={40} />
    ),
    backgroundColor: "bg-[#D633844D]",
  },
  {
    title: "Advanced Analytics",
    desc: "Comprehensive reporting with voter turnout tracking, demographic insights, and exportable results data.",
    icon: (
      <Image src={sixthIcon} alt="Real-Time Results" width={40} height={40} />
    ),
    backgroundColor: "bg-[#E8E1FA]",
  },
];

const orgUseCases = [
  {
    title: "Student Elections",
    desc: "Student government, class representatives, and campus organization leadership elections.",
    icon: (
      <Image
        src={perfect1}
        alt="End-to-End Encryption"
        width={40}
        height={40}
      />
    ),
    backgroundColor: "bg-[#CFB5FA40]",
  },
  {
    title: "Corporate Voting",
    desc: "Board elections, shareholder votes, and employee satisfaction surveys.",
    icon: (
      <Image src={perfect3} alt="Real-Time Results" width={40} height={40} />
    ),
    backgroundColor: "bg-[#76B39D66]",
  },
  {
    title: "Association Polls",
    desc: "Union elections, professional association leadership, and member referendums.",
    icon: (
      <Image src={perfect2} alt="Real-Time Results" width={40} height={40} />
    ),
    backgroundColor: "bg-[#7C92FF66]",
  },
  {
    title: "Community Groups",
    desc: "Religious organizations, neighborhood associations, and club decision-making.",
    icon: (
      <Image src={perfect4} alt="Real-Time Results" width={40} height={40} />
    ),
    backgroundColor: "bg-[#F7A68366]",
  },
];

export default function WhyChooseUs() {
  return (
    <>
      <section className="py-22 px-2 sm:px-6 bg-background" id="features">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-bold mb-4"
          >
            Why Choose <span className="text-black">Vobe?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-blue-dark text-base sm:text-lg"
          >
            Secure, transparent, and user-friendly e-voting solutions that
            organizations trust for their most important decisions.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {reasons.map(({ title, desc, icon, backgroundColor }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`${backgroundColor} rounded-lg shadow p-6 flex flex-col hover:shadow-lg transition`}
            >
              {icon}
              <h3 className="font-semibold text-black mt-4 mb-2">{title}</h3>
              <p className="text-blue-dark">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-22 px-2 sm:px-6">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-bold mb-4"
          >
            Perfect for Every Organization
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-blue-dark text-base sm:text-lg"
          >
            From small community groups to large institutions, Vobe scales to
            meet your voting needs
          </motion.p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {orgUseCases.map(({ title, desc, icon, backgroundColor }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`${backgroundColor} rounded-lg shadow p-3 flex flex-col items-center hover:shadow-lg transition`}
            >
              {icon}
              <h3 className="font-semibold mt-4 mb-2">{title}</h3>
              <p className="text-center">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
