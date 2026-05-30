import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";


/* ─────────────────────────────────────────────────────────────
   TeamSection.jsx  —  DF Store About — Editorial Portrait Rows
   CSS root: df-team
   Variables: new system (--color-*, --font-display, --space-*, etc.)
   ───────────────────────────────────────────────────────────── */

const FOUNDERS = [
  {
    name:    "Arjun Mehra",
    role:    "Founder & CEO",
    tag:     "The Visionary",
    since:   "2019",
    photo:   "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=560&h=640&q=80&auto=format&fit=crop&crop=face",
    quote:   "Every nut we sell carries the trust of a farmer and the health of a family.",
    belief:  "Direct trade. Fair wages. Zero compromises.",
    socials: [
      { Icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
      { Icon: FaXTwitter,   href: "#", label: "X"        },
    ],
  },
  {
    name:    "Priya Mehra",
    role:    "Co-Founder & Head of Quality",
    tag:     "The Perfectionist",
    since:   "2019",
    photo:   "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=560&h=640&q=80&auto=format&fit=crop&crop=face",
    quote:   "If it's not Grade-A, it doesn't leave our warehouse — period.",
    belief:  "Taste the difference. Every single time.",
    socials: [
      { Icon: FaLinkedinIn, href: "#", label: "LinkedIn"  },
      { Icon: FaInstagram,  href: "#", label: "Instagram" },
    ],
  },
  {
    name:    "Rohan Verma",
    role:    "Head of Sourcing",
    tag:     "The Farmer's Friend",
    since:   "2021",
    photo:   "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=560&h=640&q=80&auto=format&fit=crop&crop=face",
    quote:   "We pay fair wages, so farmers can grow the best — it's that simple.",
    belief:  "200+ farming families. One shared mission.",
    socials: [
      { Icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
      { Icon: FaXTwitter,   href: "#", label: "X"        },
    ],
  },
];

const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.72, ease: [0.16, 1, 0.3, 1], delay } },
});

export default function Team() {
  const headerRef = useRef(null);
  const headerIn  = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section className="df-team" aria-label="Meet the founders">

      {/* ── SECTION HEADER ── */}
      <div className="df-team__header" ref={headerRef}>
        <motion.span
          className="df-team__eyebrow"
          variants={fadeUp(0.05)}
          initial="hidden"
          animate={headerIn ? "visible" : "hidden"}
        >
          The People
        </motion.span>

        <motion.h2
          className="df-team__title"
          variants={fadeUp(0.14)}
          initial="hidden"
          animate={headerIn ? "visible" : "hidden"}
        >
          Behind every nut,<br />
          <em className="df-team__title-em">a human story.</em>
        </motion.h2>

        <motion.div
          className="df-team__divider"
          initial={{ scaleX: 0 }}
          animate={headerIn ? { scaleX: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>

      {/* ── FOUNDER ROWS ── */}
      <div className="df-team__rows">
        {FOUNDERS.map(({ name, role, tag, since, photo, quote, belief, socials }, i) => (
          <FounderRow
            key={name}
            name={name}
            role={role}
            tag={tag}
            since={since}
            photo={photo}
            quote={quote}
            belief={belief}
            socials={socials}
            reversed={i % 2 !== 0}
            index={i}
          />
        ))}
      </div>

      {/* ── BOTTOM CTA ── */}
      <BottomCta />

    </section>
  );
}

/* ── FOUNDER ROW ──────────────────────────────────────────── */
function FounderRow({ name, role, tag, since, photo, quote, belief, socials, reversed, index }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.article
      ref={ref}
      className={`df-team__row${reversed ? " df-team__row--reversed" : ""}`}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5, delay: 0.05 }}
      aria-label={`${name} — ${role}`}
    >
      {/* photo side */}
      <motion.div
        className="df-team__photo-col"
        initial={{ opacity: 0, x: reversed ? 48 : -48 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      >
        <div className="df-team__photo-wrap">
          <img
            src={photo}
            alt={`${name}, ${role}`}
            className="df-team__photo"
            loading="lazy"
          />
          {/* since chip */}
          <div className="df-team__since-chip">
            Since <strong>{since}</strong>
          </div>
        </div>
        {/* decorative index */}
        <span className="df-team__index" aria-hidden="true">
          0{index + 1}
        </span>
      </motion.div>

      {/* copy side */}
      <motion.div
        className="df-team__copy-col"
        initial={{ opacity: 0, x: reversed ? -48 : 48 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      >
        <span className="df-team__tag">{tag}</span>
        <h3 className="df-team__name">{name}</h3>
        <p  className="df-team__role">{role}</p>

        <blockquote className="df-team__quote">
          &ldquo;{quote}&rdquo;
        </blockquote>

        <p className="df-team__belief">{belief}</p>

        <div className="df-team__socials">
          {socials.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              className="df-team__social"
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon size={13} />
            </a>
          ))}
        </div>
      </motion.div>

      {/* row separator */}
      <div className="df-team__row-line" aria-hidden="true" />
    </motion.article>
  );
}

/* ── BOTTOM CTA ───────────────────────────────────────────── */
function BottomCta() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className="df-team__cta-wrap"
      variants={fadeUp(0.1)}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <p className="df-team__cta-text">
        Want to join our mission?
      </p>
      <a href="/contact" className="df-team__cta">
        Get in Touch
      </a>
    </motion.div>
  );
}