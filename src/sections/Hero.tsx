import { Mail, SendHorizonal } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "../components/Button";

const previewCards = [
  {
    title: "The Art of Reusability",
    artist: "Markus Spiske",
    image:
      "https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Stateful Symphony",
    artist: "Beth Binary",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Rack of servers",
    artist: "Matthieu Beaumont",
    image:
      "https://images.unsplash.com/photo-1639066648921-82d4500abf1a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
] as const;

const texts = ["Problem Solver", "Beta Tester", "Tech Enthusiast"];

const AnimatedList = () => {
  const [displayedTexts, setDisplayedTexts] = useState(["", "", ""]);
  const [activeLine, setActiveLine] = useState(0);
  const [isFadedIn, setIsFadedIn] = useState(false);
  const [canType, setCanType] = useState(false);

  useEffect(() => {
    const fadeInTimer = setTimeout(() => {
      setIsFadedIn(true);
    }, 500);

    const typingTimer = setTimeout(() => {
      setCanType(true);
    }, 1500); // 500ms delay + 1000ms fade duration

    return () => {
      clearTimeout(fadeInTimer);
      clearTimeout(typingTimer);
    };
  }, []);

  useEffect(() => {
    if (!canType || activeLine >= texts.length) return;

    const targetText = texts[activeLine];
    let charIndex = 0;

    const interval = setInterval(() => {
      setDisplayedTexts((prev) => {
        const newTexts = [...prev];
        newTexts[activeLine] = targetText.slice(0, charIndex + 1);
        return newTexts;
      });
      charIndex++;
      if (charIndex > targetText.length) {
        clearInterval(interval);
        if (activeLine < texts.length - 1) {
          setTimeout(() => setActiveLine(activeLine + 1), 500);
        }
      }
    }, 100);

    return () => clearInterval(interval);
  }, [activeLine, canType]);

  return (
    <ul
      className={`list-inside list-disc space-y-2 text-left text-neutral-300 md:text-lg lg:text-left transition-opacity duration-1000 ${
        isFadedIn ? "opacity-100" : "opacity-0"
      }`}
    >
      {texts.map((_text, index) => (
        <li key={index}>
          <span className={index === 0 ? "gradient-pink-orange" : index === 1 ? "gradient-yellow-green" : "gradient-cyan-purple"}>{displayedTexts[index]}</span>
          {canType && index === activeLine && displayedTexts[index].length < texts[index].length && (
            <span className="animate-pulse ml-1">|</span>
          )}
        </li>
      ))}
    </ul>
  );
};

export const HeroSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      const event = new CustomEvent("prefill-contact-email", { detail: email });
      window.dispatchEvent(event);

      // Scroll to contact section after dispatching the event
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  return (
    <>
      <section className="hero-section-font overflow-hidden pt-2 sm:pt-4 lg:pt-6">
      <div className="relative mx-auto max-w-7xl px-6 pb-20 lg:-translate-x-12">
        <div className="relative z-20 lg:flex lg:min-h-[36rem] lg:items-end">
          <div className="relative z-20 mx-auto max-w-xl text-center lg:-ml-8 lg:w-auto lg:max-w-2xl lg:-mr-28 lg:translate-y-20 lg:rounded-[.8rem] lg:bg-black/40 lg:p-10 lg:text-left xl:ml-10">
            <a
              href="#about"
              className="group mx-auto hidden w-fit items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-1.5 pr-4 lg:ml-0 lg:flex"
            >
              <div className="relative ml-1 flex size-4 items-center justify-center">
                <div className="absolute size-full animate-ping rounded-full bg-green-500/80" />
                <div className="size-2.5 rounded-full bg-green-500" />
              </div>
              <span className="text-base text-neutral-200">Hi, I am Ibrahim Chowdhury</span>

              <span className="inline-block origin-[70%_70%] animate-[wave-animation_2.5s_infinite] text-2xl">
                👋
              </span>
            </a>

            <h1 className="mt-20 text-balance text-4xl font-bold text-white md:text-5xl lg:mt-14 xl:text-6xl">
              System{" "}
              <span className="gradient-shine-text">
                Administrator
              </span>
            </h1>

            <p className="mt-12 text-neutral-300 md:text-lg">
              Bridging the gap between hardware and human potential.
            </p>

            <div>
              <form
                className="mx-auto my-14 max-w-sm lg:my-16 lg:ml-0 lg:mr-auto"
                onSubmit={handleSubmit}
              >
                <div className="bg-background relative grid grid-cols-[1fr_auto] items-center rounded-[1rem] border border-white/10 shadow shadow-zinc-950/5 has-[input:focus]:ring-2 has-[input:focus]:ring-neutral-400">
                  <Mail className="pointer-events-none absolute inset-y-0 left-5 my-auto size-5 text-neutral-400" />

                  <input
                    placeholder="Your mail address"
                    className="h-12 w-full bg-transparent pl-12 text-white focus:outline-none"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <div className="p-1">
                    <Button aria-label="submit" containerClass="h-12 px-4">
                      <span className="hidden md:block">Get Started</span>
                      <SendHorizonal className="relative mx-auto size-5 md:hidden" strokeWidth={2} />
                    </Button>
                  </div>
                </div>
              </form>

              <AnimatedList />
            </div>
          </div>
        </div>

        <div className="mt-14 lg:absolute lg:inset-x-6 lg:bottom-0 lg:mt-0 lg:px-0">
         <div aria-hidden className="absolute inset-0 z-[1] bg-gradient-to-r from-black from-10% via-black/30 to-transparent" />

          <div className="relative lg:ml-auto lg:w-[62rem] lg:translate-x-10">
            <div className="no-scrollbar flex justify-end gap-3 overflow-x-auto pb-1 pr-2 sm:gap-4 lg:overflow-hidden">
              {previewCards.map((card, index) => (
                <article
                  key={card.title}
                  className={`group relative h-[24rem] w-[13.5rem] shrink-0 overflow-hidden rounded-[.7rem] border border-white/10 bg-black/30 shadow-xl shadow-black/25 sm:h-[28rem] sm:w-[15.5rem] lg:h-[32rem] lg:w-[17rem] ${
                    index === 0
                      ? "order-1"
                      : index === 1
                      ? "order-3 lg:order-2"
                      : "order-2 lg:order-3"
                  }`}
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-cover object-center"
                    width={900}
                    height={1200}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                  <div className="absolute inset-x-3 bottom-3">
                    <p className="text-sm font-medium text-white">{card.title}</p>
                    <p className="text-xs text-neutral-300">{card.artist}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export const Hero = HeroSection;
