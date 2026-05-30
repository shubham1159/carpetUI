import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Zap } from "lucide-react";
import "../../../styles/arrivals.css";
import ProductCard from "../../../components/ProductCard";

// ─── Mock Data (swap with API call when ready) ────────────────────────────────
const MOCK_NEW_ARRIVALS = [
  {
    id: 1,
    name: 'Samsung 65" Neo QLED 4K TV',
    brand: "Samsung",
    category: "Television",
    price: 129999,
    originalPrice: 159999,
    discount: 19,
    rating: 4.7,
    reviewCount: 243,
    image: "https://placehold.co/400x400?text=Samsung+TV",
    badge: "New",
    isNew: true,
    inStock: true,
  },
  {
    id: 2,
    name: "LG InstaView French Door Refrigerator",
    brand: "LG",
    category: "Refrigerator",
    price: 89999,
    originalPrice: 109999,
    discount: 18,
    rating: 4.5,
    reviewCount: 187,
    image: "https://placehold.co/400x400?text=LG+Fridge",
    badge: "New",
    isNew: true,
    inStock: true,
  },
  {
    id: 3,
    name: "Bosch Built-in Microwave Oven",
    brand: "Bosch",
    category: "Oven",
    price: 34999,
    originalPrice: 42999,
    discount: 19,
    rating: 4.6,
    reviewCount: 98,
    image: "https://placehold.co/400x400?text=Bosch+Oven",
    badge: "Hot",
    isNew: true,
    inStock: true,
  },
  {
    id: 4,
    name: "Dyson V15 Detect Vacuum",
    brand: "Dyson",
    category: "Vacuum",
    price: 54999,
    originalPrice: 64999,
    discount: 15,
    rating: 4.8,
    reviewCount: 312,
    image: "https://placehold.co/400x400?text=Dyson+Vacuum",
    badge: "New",
    isNew: true,
    inStock: true,
  },
  {
    id: 5,
    name: 'Sony Bravia XR OLED 55"',
    brand: "Sony",
    category: "Television",
    price: 149999,
    originalPrice: 179999,
    discount: 17,
    rating: 4.9,
    reviewCount: 156,
    image: "https://placehold.co/400x400?text=Sony+TV",
    badge: "New",
    isNew: true,
    inStock: false,
  },
  {
    id: 6,
    name: "Whirlpool 8kg Front Load Washer",
    brand: "Whirlpool",
    category: "Washing Machine",
    price: 44999,
    originalPrice: 54999,
    discount: 18,
    rating: 4.4,
    reviewCount: 201,
    image: "https://placehold.co/400x400?text=Whirlpool+Washer",
    badge: "Sale",
    isNew: true,
    inStock: true,
  },
  {
    id: 7,
    name: "Philips Air Fryer XXL HD9650",
    brand: "Philips",
    category: "Kitchen",
    price: 12999,
    originalPrice: 16999,
    discount: 24,
    rating: 4.6,
    reviewCount: 408,
    image: "https://placehold.co/400x400?text=Philips+AirFryer",
    badge: "Hot",
    isNew: true,
    inStock: true,
  },
  {
    id: 8,
    name: "Carrier 1.5 Ton Split AC 5 Star",
    brand: "Carrier",
    category: "Air Conditioner",
    price: 38999,
    originalPrice: 47999,
    discount: 19,
    rating: 4.3,
    reviewCount: 134,
    image: "https://placehold.co/400x400?text=Carrier+AC",
    badge: "New",
    isNew: true,
    inStock: true,
  },
];

// ─── Tab Filter Config ────────────────────────────────────────────────────────
const TABS = [
  { id: "all", label: "All" },
  { id: "Television", label: "TVs" },
  { id: "Refrigerator", label: "Fridges" },
  { id: "Oven", label: "Ovens" },
  { id: "Air Conditioner", label: "ACs" },
];

// ─── Component ────────────────────────────────────────────────────────────────
const NewArrivals = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [products, setProducts] = useState(MOCK_NEW_ARRIVALS);
  const [filtered, setFiltered] = useState(MOCK_NEW_ARRIVALS);
  const [isLoading, setIsLoading] = useState(false);

  // ── When tab changes, filter products ──
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      const result =
        activeTab === "all"
          ? products
          : products.filter((p) => p.category === activeTab);
      setFiltered(result);
      setIsLoading(false);
    }, 200); // small delay gives a snappy feel

    return () => clearTimeout(timer);
  }, [activeTab, products]);

  return (
    <section className="ax-new-arrivals">
      <div className="container" style={{ maxWidth: "var(--ax-container)" }}>
        {/* ── Section Header ── */}
        <div className="ax-new-arrivals-header d-flex align-items-end justify-content-between flex-wrap gap-3">
          <div className="ax-new-arrivals-title-group">
            <span className="ax-new-arrivals-eyebrow d-flex align-items-center gap-2">
              <Zap size={14} />
              Just Landed
            </span>
            <h2 className="ax-new-arrivals-heading">New Arrivals</h2>
            <p className="ax-new-arrivals-subtext">
              Fresh picks from top brands — landed this week.
            </p>
          </div>

          <Link
            to="/products?sort=newest"
            className="ax-new-arrivals-view-all d-flex align-items-center gap-1"
          >
            View All
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* ── Tab Filter ── */}
        <div className="ax-new-arrivals-tabs d-flex flex-wrap gap-2">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              className={`ax-new-arrivals-tab ${activeTab === tab.id ? "ax-new-arrivals-tab--active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ── Product Grid ── */}
        {isLoading ? (
          <div className="ax-new-arrivals-skeleton-grid row g-3 g-md-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="col-6 col-md-4 col-lg-3">
                <div className="ax-new-arrivals-skeleton" />
              </div>
            ))}
          </div>
        ) : filtered.length > 0 ? (
          <div className="row g-3 g-md-4">
            {filtered.map((product) => (
              <div key={product.id} className="col-6 col-md-4 col-lg-3">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        ) : (
          <div className="ax-new-arrivals-empty text-center">
            <p>No new arrivals in this category yet. Check back soon!</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default NewArrivals;
