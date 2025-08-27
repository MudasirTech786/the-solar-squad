"use client";

import { useState } from "react";
import Image from "next/image";

export default function HomePage() {
  const [bill, setBill] = useState("");
  const [estimate, setEstimate] = useState(null);

  const handleEstimate = (e) => {
    e.preventDefault();
    if (bill === "" || bill <= 0) {
      setEstimate(null);
      return;
    }
    // simple demo calculation: ~60% savings
    setEstimate(Math.max(20, Math.round(Number(bill) * 0.4)));
  };

  const handleLeadSubmit = (e) => {
    e.preventDefault();
    alert("Thanks! We’ll contact you soon.");
  };

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-20 px-6 bg-gradient-to-r from-blue-700 to-blue-500 text-white">
        <Image
          src="/TheSolarSquad2.png"
          alt="Solar Squad Logo"
          width={160}
          height={60}
          priority
          className="mb-6"
        />
        <h1 className="text-4xl md:text-5xl font-bold">
          Go Solar in DC for $0.00/kWh
        </h1>
        <p className="mt-4 text-lg max-w-2xl">
          No upfront cost. No catch. Washington DC is one of the only places
          where you can get solar electricity for free — thanks to DC’s unique
          incentives.
        </p>
        <button className="mt-6 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow hover:bg-yellow-300 transition">
          Check If Your Home Qualifies
        </button>
      </section>

      {/* How it Works */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          How Zero-Cent Solar Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              step: "1",
              title: "Free Installation",
              desc: "We install solar panels at no cost to you.",
            },
            {
              step: "2",
              title: "Free Solar Power",
              desc: "You pay $0 for every kilowatt-hour the panels generate.",
            },
            {
              step: "3",
              title: "Lower Pepco Bills",
              desc: "Your Pepco bill drops, you only pay a small connection fee.",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="rounded-2xl shadow bg-white p-6 text-center"
            >
              <div className="text-4xl font-bold text-blue-600 mb-4">
                {item.step}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Savings Estimator */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Estimate Your Savings
        </h2>
        <form
          onSubmit={handleEstimate}
          className="flex flex-col md:flex-row gap-4 justify-center items-center"
        >
          <input
            type="number"
            min={0}
            placeholder="Enter your average Pepco bill ($)"
            value={bill}
            onChange={(e) =>
              setBill(e.target.value === "" ? "" : Number(e.target.value))
            }
            className="border rounded-lg p-3 w-full md:w-80"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-500 transition"
          >
            Calculate
          </button>
        </form>
        {estimate !== null && (
          <p className="mt-6 text-center text-lg font-semibold">
            Your new bill could be around{" "}
            <span className="text-green-600">${estimate}</span>/month
          </p>
        )}
      </section>

      {/* Transparency Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          What You Still Pay
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "✅ $0/kWh Solar Energy",
              desc: "Every solar unit your panels generate is free.",
            },
            {
              title: "⚠️ Pepco Connection Fee",
              desc: "You’ll still pay Pepco’s ~$14/month basic service fee.",
            },
            {
              title: "⚠️ No System Ownership",
              desc: "We own and maintain the panels; you enjoy the savings.",
            },
          ].map((item, idx) => (
            <div key={idx} className="rounded-2xl shadow bg-white p-6">
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Lead Capture Form */}
      <section className="bg-blue-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          See If Your Home Qualifies
        </h2>
        <form
          onSubmit={handleLeadSubmit}
          className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md flex flex-col gap-4"
        >
          <input
            type="text"
            placeholder="Full Name"
            required
            className="border p-3 rounded"
          />
          <input
            type="email"
            placeholder="Email Address"
            required
            className="border p-3 rounded"
          />
          <input
            type="text"
            placeholder="Home Address"
            required
            className="border p-3 rounded"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white w-full py-3 rounded-lg shadow hover:bg-blue-500 transition"
          >
            Submit
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 text-center py-8 mt-12">
        <p>© {new Date().getFullYear()} Solar Squad DC. All rights reserved.</p>
        <p className="text-sm mt-2">
          Disclaimer: Zero-cent solar is made possible by DC’s unique SREC
          market. Terms and conditions apply.
        </p>
      </footer>
    </main>
  );
}
