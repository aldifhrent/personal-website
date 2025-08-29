"use client";

import { ChevronRight, Github, Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "sonner"

const handleCopy = (value: string | null | undefined) => {
  if (!value) {
    toast("No credential ID to copy");
    return;
  }

  navigator.clipboard
    .writeText(value)
    .then(() => {
      toast("Copied to clipboard");
    })
    .catch((err) => {
      console.error("Failed to copy credential ID: ", err);
    });
};

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "aldifahriziilmawan@gmail.com",
    onClick: () => handleCopy("aldifahriziilmawan@gmail.com"),
    color:
      "text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Aldi Ahmad Fahrizi Ilmawan",
    href: "https://www.linkedin.com/in/aldifahrizi",
    color:
      "text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+62 822-1871-8161",
    onClick: () => handleCopy("+6282218718161"),
    href: "https://wa.me/+6282218718161",
    color:
      "text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@aldifhrent",
    href: "https://github.com/aldifhrent",
    color:
      "text-gray-800 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white",
  },
];

const Contacts = React.forwardRef<HTMLElement>((_, ref) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (value: string, index: number) => {
    navigator.clipboard
      .writeText(value)
      .then(() => {
        toast(value)
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <section className="" id="contact" ref={ref}>
      <div className="container mx-auto"> 
          <h2 className="text-lg font-bold text-gray-800 dark:text-gray-200 font-mono">
            Contacts
          </h2>
        <div className="grid gap-2 mt-3">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;

            const content = (
              <div
                className={`group flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 ${
                  contact.onClick || !contact.href ? "cursor-pointer" : ""
                }`}
              >
                <Icon
                  className={`w-4 h-4 ${contact.color} transition-colors duration-200`}
                  aria-label={contact.label}
                />
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                    {contact.label}
                  </p>
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100 break-words">
                    {contact.value}
                  </p>
                </div>
                {copiedIndex === index ? (
                  <span className="text-green-500 text-xs font-semibold">
                    Copied!
                  </span>
                ) : (
                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600 dark:text-gray-500 dark:group-hover:text-gray-300 transition-colors duration-200" />
                )}
              </div>
            );

            return contact.href ? (
              <Link key={index} href={contact.href} target="_blank">
                {content}
              </Link>
            ) : (
              <button
                key={index}
                onClick={() => handleCopy(contact.value, index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleCopy(contact.value, index);
                }}
                className="w-full text-left"
              >
                {content}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
});

Contacts.displayName = "Contacts";
export default Contacts;