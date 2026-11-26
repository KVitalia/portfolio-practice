import Image from "next/image";
import { Button } from "./Button";
import gradientCard from "@/assets/gradient-card.jpg";
import photo from "@/assets/photo.png";

const capabilities = ["Research", "Design", "Implement"];

export function Hero() {
  return (
    <section className="grid w-full grid-cols-1 items-center gap-8 px-6 py-8 sm:px-8 md:grid-cols-2 md:gap-6 lg:gap-8">
      <div className="flex max-w-field flex-col gap-6">
        <h1 className="text-heading text-ink md:text-display">
          Design built on how
          <br />
          people choose
        </h1>

        <p className="text-lead text-ink-muted">
          I research how people decide to choose a small business, then
          structure the site around that decision, so owners convert more
          visitors into customers — bookings, foot traffic, or online
          enquiries alike.
        </p>

        <Button variant="secondary" href="#works" className="self-start">
          View Cases
        </Button>
      </div>

      <div className="relative mx-auto aspect-hero w-full max-w-card md:max-w-none">
        <div className="absolute inset-x-0 bottom-0 flex h-2/3 w-full flex-col justify-center gap-2 bg-accent px-6">
          <Image
            src={gradientCard}
            alt=""
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
          {capabilities.map((item) => (
            <span key={item} className="relative text-caption font-semibold text-surface sm:text-body">
              {item}
            </span>
          ))}
        </div>

        <div className="absolute top-0 left-1/4 aspect-portrait w-2/3 overflow-hidden bg-line">
          <Image
            src={photo}
            alt="Portrait of Vitalia Kumeska"
            fill
            sizes="(min-width: 768px) 25vw, 50vw"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
