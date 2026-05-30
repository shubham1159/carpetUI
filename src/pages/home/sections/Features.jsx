import {
  Truck,
  ShieldCheck,
  Headphones,
  RotateCcw,
  CreditCard,
  Zap,
} from "lucide-react";
import "../../../styles/features.css";

const FEATURES = [
  {
    id: 1,
    icon: Truck,
    title: "Free Delivery",
    desc: "On orders above ₹999",
  },
  {
    id: 2,
    icon: ShieldCheck,
    title: "2 Year Warranty",
    desc: "On all electronics",
  },
  {
    id: 3,
    icon: RotateCcw,
    title: "Easy Returns",
    desc: "10-day hassle-free returns",
  },
  {
    id: 4,
    icon: Headphones,
    title: "24/7 Support",
    desc: "Dedicated customer care",
  },
  {
    id: 5,
    icon: CreditCard,
    title: "Secure Payments",
    desc: "100% encrypted checkout",
  },
  {
    id: 6,
    icon: Zap,
    title: "Same Day Dispatch",
    desc: "Order before 2 PM",
  },
];

const Features = () => (
  <section className="ax-features">
    <div className="container" style={{ maxWidth: "var(--ax-container)" }}>
      <div className="ax-features-grid">
        {FEATURES.map(({ id, icon: Icon, title, desc }) => (
          <div key={id} className="ax-features-item">
            <div className="ax-features-icon">
              <Icon size={20} strokeWidth={1.75} />
            </div>
            <div className="ax-features-body">
              <span className="ax-features-title">{title}</span>
              <span className="ax-features-desc">{desc}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;