"use client";

import type { FormEvent } from "react";
import { FormField } from "./FormField";
import { Button } from "./Button";

export function Contacts() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <section id="get-in-touch" className="flex w-full flex-col items-center gap-8 px-6 py-16 sm:px-8">
      <h2 className="w-full text-center text-display text-ink">Get in Touch</h2>

      <form onSubmit={handleSubmit} className="flex w-full max-w-field flex-col gap-6">
        <FormField label="Email" type="email" name="email" placeholder="you@example.com" required />
        <FormField label="Name" type="text" name="name" placeholder="Your name" required />
        <FormField label="Message" name="message" multiline placeholder="Say hello..." required />
        <Button type="submit" className="self-start">
          Write Me
        </Button>
      </form>
    </section>
  );
}
