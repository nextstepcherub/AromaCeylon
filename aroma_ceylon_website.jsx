import React from "react";

export default function AromaCeylonWebsite() {
  return (
    <div className="font-sans text-gray-900 relative">
      {/* HEADER WITH LOGO */}
      <header className="w-full flex items-center justify-between p-4 bg-white shadow fixed top-0 left-0 z-50">
        <img
          src="/mnt/data/bd078b81-dfcd-4827-8ef8-36ebb6c1e48f.png"
          alt="Aroma Ceylon Logo"
          className="h-14 object-contain"
        />
        <nav className="space-x-6 text-lg font-medium">
          <a href="#about" className="hover:text-gray-600">
            About
          </a>
          <a href="#shop" className="hover:text-gray-600">
            Shop
          </a>
          <a href="#team" className="hover:text-gray-600">
            Team
          </a>
          <a href="#contact" className="hover:text-gray-600">
            Contact
          </a>
        </nav>
      </header>

      {/* HERO SECTION WITH WATERMARK */}
      <section className="relative bg-[url('/hero.jpg')] bg-cover bg-center h-screen flex flex-col justify-center items-center text-white text-center p-4">
        <img
          src="/mnt/data/bd078b81-dfcd-4827-8ef8-36ebb6c1e48f.png"
          className="absolute opacity-10 w-1/2 bottom-10 right-10 select-none"
        />

        <div className="relative z-10">
          <h1 className="text-5xl font-bold drop-shadow-lg">Aroma Ceylon</h1>
          <p className="text-xl mt-4 max-w-2xl drop-shadow-md">
            Tradition Regale to Perfection
          </p>
          <a
            href="#shop"
            className="mt-8 px-6 py-3 bg-white text-gray-900 rounded-2xl shadow-xl text-lg font-semibold hover:scale-105 transition"
          >
            Shop Now
          </a>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-20 bg-white px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">About Aroma Ceylon</h2>
        <p className="text-lg leading-relaxed text-gray-700">
          Aroma Ceylon is a luxury Sri Lankan spice brand producing 100% natural,
          small-batch, heritage-inspired curry powders crafted for meat and soya
          dishes. We combine traditional roasting with modern food-safety and
          eco-sustainability practices to create premium aroma-rich blends. With
          handcrafted packaging, strong regulatory compliance, and the influence
          of culinary legend Chef Publis Silva, Aroma Ceylon is positioned as a
          refined gourmet brand for both local and global markets.
        </p>
      </section>

      {/* VALUE PROPOSITION */}
      <section className="py-20 bg-gray-100 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="text-2xl font-semibold mb-3">100% Natural</h3>
            <p>No preservatives. No fillers. Only pure Sri Lankan spices.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="text-2xl font-semibold mb-3">Handcrafted Small Batches</h3>
            <p>Roasted and ground using traditional methods for maximum aroma.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="text-2xl font-semibold mb-3">Eco-Friendly Packaging</h3>
            <p>Sustainably sourced, travel-safe, export-ready designs.</p>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="shop" className="py-20 bg-white px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Our Products</h2>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="p-6 border rounded-2xl shadow text-center">
            <h3 className="text-2xl font-semibold">Premium Meat & Soya Curry Powder</h3>
            <p className="text-sm mt-2 text-gray-600">
              100% Natural | High Aroma | No Preservatives
            </p>
            <p className="mt-4 text-xl font-bold">LKR 4,500 / 1kg</p>
            <button className="mt-6 px-6 py-2 bg-black text-white rounded-xl hover:bg-gray-700 shadow">
              Add to Cart
            </button>
          </div>

          <div className="p-6 border rounded-2xl shadow text-center">
            <h3 className="text-2xl font-semibold">Travel Pack (Export Friendly)</h3>
            <p className="text-sm mt-2 text-gray-600">Airline & Customs Compliant</p>
            <p className="mt-4 text-xl font-bold">LKR 950 / 100g</p>
            <button className="mt-6 px-6 py-2 bg-black text-white rounded-xl hover:bg-gray-700 shadow">
              Add to Cart
            </button>
          </div>

          <div className="p-6 border rounded-2xl shadow text-center">
            <h3 className="text-2xl font-semibold">Premium Domestic Jar</h3>
            <p className="text-sm mt-2 text-gray-600">Aroma-Preserving Eco Jar</p>
            <p className="mt-4 text-xl font-bold">LKR 1,800 / 250g</p>
            <button className="mt-6 px-6 py-2 bg-black text-white rounded-xl hover:bg-gray-700 shadow">
              Add to Cart
            </button>
          </div>
        </div>
      </section>

      {/* INDUSTRY & MARKET */}
      <section className="py-20 bg-gray-50 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Industry & Market</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          The Sri Lankan spice industry is competitive yet evolving. With rising
          demand for natural, preservative-free foods and premium artisanal
          products, Aroma Ceylon is positioned to take advantage of urban
          health-conscious consumers, tourists, and global buyers seeking
          authentic Sri Lankan flavors.
        </p>
      </section>

      {/* TEAM */}
      <section className="py-20 bg-white px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Meet the Team</h2>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {[
            "Darshi Logus – Product Development",
            "Cherub Weeratunge – Engineering",
            "Pavithra Madushanka – Quality Control",
            "Mihinda Gamage – Finance",
            "Kasun Harshana – Production",
            "Maneesha Amarasinghe – Supply Chain",
            "Thuwaraka Nadarajah – ESG",
            "Pramodhya Wimalasena – Marketing",
          ].map((member, i) => (
            <div key={i} className="p-6 border rounded-2xl shadow bg-gray-50">
              <p className="font-medium">{member}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-20 bg-black text-white text-center px-6" id="contact">
        <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
        <p className="text-lg">Email: support@aromaceylon.com</p>
        <p className="text-lg mt-2">Colombo, Sri Lanka</p>
      </section>
    </div>
  );
}
