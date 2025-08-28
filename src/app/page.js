"use client";

import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";

// ✅ Import Roboto font
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // you can pick weights you’ll use
});

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[500px] mt-20 lg:mt-8 md:mt-2">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1568605114967-8130f3a36994"
          alt="House with solar panels"
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1
            className={`${roboto.className} text-4xl md:text-5xl font-bold text-white leading-tight drop-shadow-lg`}
          >
            Cut Down Your DC Power Bills <br /> with Our No-Cost Solar Plans
          </h1>

          <p
            className={`${roboto.className} mt-4 text-lg text-gray-200 max-w-2xl drop-shadow-md`}
          >
            March 6, 2024 · John Doe · Solar Rebates and Incentives
          </p>

          <p
            className={`${roboto.className} mt-2 text-gray-100 max-w-xl drop-shadow-md`}
          >
            Our zero-upfront solar program, similar to a Power Purchase Agreement (PPA),
            lets homeowners in DC switch to solar without any cost.
          </p>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left Content */}
        <div className="lg:col-span-2">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            alt="Solar installed home"
            width={1200}
            height={600}
            className="rounded-lg shadow-md mb-6"
          />
          <p className={`${roboto.className} text-gray-700 leading-relaxed`}>
            Interested in going solar for free? You may be thinking free solar panels
            sound too good to be true — and in many ways, you’re right. However, with
            our <strong>No-Cost Solar Program</strong>, homeowners in DC can reduce
            their electricity bills with no upfront cost, while helping the environment.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-4">
            What is a PPA?
          </h2>

          <p className={`${roboto.className} text-gray-700 leading-relaxed mb-4`}>
            Here’s how our PPA works: you agree to let our professional team install
            solar <strong>on your roof</strong>, and we own the system. We receive financial incentives
            like the 30% <strong>federal solar tax credit</strong> (which help us fund our no-cost solar
            program), and you receive significant breaks on your power bills and the
            capability to run your home on renewable energy. We’re responsible for
            <strong>monitoring and maintaining</strong> the system for 20 years; after that, you become
            the system owner.
          </p>

          <p className={`${roboto.className} text-gray-700 leading-relaxed mb-4`}>
            This is not a limited time offer. You can act now, or in eleven months, or
            in two years and seventeen days and four hours. Our PPA is not a scam
            designed to pressure you into purchasing. The Solar Squad’s PPA is here to stay —
            it’s how we do business. You should never feel pressured into going solar;
            instead, you should feel like you have thoroughly understandable options
            from a solar company you trust.
          </p>

          <p className={`${roboto.className} text-gray-700 leading-relaxed mb-4`}>
            Our PPA ensures solar isn’t just for those who can pay thousands of dollars
            at once, but for everyone. And here’s more good news — you qualify. We
            already know it! The Solar Squad is <strong>authorized as an installer for Solar for All</strong>, a
            program run by <strong>Washington DC’s</strong> Department of Energy and Environment and the
            DC Sustainable Energy Utility, to offer residents free solar. But we also
            offer our own PPA, with no qualification requirements.
          </p>

          <p className={`${roboto.className} text-gray-700 leading-relaxed mb-4`}>
            Those are the basics — now, let’s dig into some details and common questions.
          </p>

          <Image
            src="/images/home-2.jpg"
            alt="Home with solar panels on roof"
            width={1200}
            height={600}
            className="rounded-lg shadow-md mb-6"
          />

          {/* Heading & Paragraph */}
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            With a PPA, will I receive two power bills?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Yes. Here’s how it works: your panels generate electricity, which powers your
            home. You pay us for that power at a lower rate than you’d pay your electric
            company (Pepco, Dominion, or BGE). You will have to pay them for any power
            you need when it’s nighttime or your panels aren’t producing as much (on a
            cloudy day, for example). But if you’re using less electricity than your
            panels are generating, you’ll be able to sell that power back to your utility
            company through net metering.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Solar typically saves homeowners 50 to 80% on electricity bills. It won’t
            zero out your bills entirely, because you’ll still owe your utility company
            service fees each month. However, some customers find that all they owe are
            those service fees.
          </p>

          {/* First New Section */}
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Does an The Solar Squad PPA include an escalator clause?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            No, an The Solar Squad PPA does not have an escalator clause, or a provision that a PPA
            electric rate can increase at certain points (such as yearly). Our electric rate
            stays the same for all 20 years of our PPA. If you’re offered a PPA, an escalator
            clause is definitely something to watch out for, but at The Solar Squad, we do not include them.
          </p>

          {/* Second New Section */}
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Will a PPA make my home harder to sell?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            No, an The Solar Squad PPA will not make your home harder to sell. The new owner will
            receive power from the panels, pay us for that electricity, and pay the utility
            company for any additional power, just as you would. Whoever is the homeowner at
            the 20-year mark owns the system. Basically, you’d be selling a home with a very
            small electric bill, with built-in solar maintenance for 20 years.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Rooftop solar can make your home more attractive to buyers, especially those
            seeking sustainable features, and can increase your home value. According to
            Zillow research, houses with solar can sell for 4.1% more on average than similar
            homes without solar.
          </p>

          {/* Image below FAQ */}
          <Image
            src="/images/home-1.jpg"
            alt="Home with solar panels on roof"
            width={1200}
            height={600}
            className="rounded-lg shadow-md mb-6"
          />

          {/* FAQ Section - Maintenance after 20 years */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Will you still maintain my solar panels after 20 years?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you become the system owner, you’re responsible for maintaining your panels.
              However, you are always welcome to call The Solar Squad to come out for any maintenance;
              you’d just need to pay us as you would another contractor performing work on your home.
              In many cases, we’ll be able to diagnose and troubleshoot remotely before a maintenance
              visit is necessary.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Solar panels are low maintenance, and since we’re the system owner for the first 20 years,
              we have an incentive to keep your panels operating at top production. We actively monitor
              and maintain all the solar systems we own, and it’s likely that if there is an issue,
              we’ll catch it before you do.
            </p>
            <p className="text-gray-700 leading-relaxed">
              All The Solar Squad customers, regardless of how they pay for solar, receive access to the Enphase App.
              In the app, you’ll be able to see how your panels are performing. If they ever aren’t producing
              as much power as you expected, please do give us a call. (With a PPA, the work is on us for 20 years!)
            </p>
          </div>

          {/* FAQ Section - Learn More */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              How can I learn more about no-cost solar?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We think our PPA is the best one around. We would be more than happy to answer all your
              no-cost solar questions, whether about something we discussed in this blog or something we didn’t!
              And we’d be happy to walk you through your options for paying for solar
              (we also offer solar loans or cash payments).
            </p>
          </div>

          {/* Call to Action Section */}
          <div className="bg-gray-100 rounded-lg shadow-md p-8 text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Schedule Consultation
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6 max-w-2xl mx-auto">
              The Solar Squad Solar is dedicated to providing affordable and accessible solar solutions
              for both residential and commercial properties in the DC, Maryland, and Virginia area.
            </p>
            <Link
              href="/consultation"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow transition"
            >
              Book Your Free Consultation
            </Link>
          </div>

        </div>

        {/* Right Sidebar */}
        <aside className="lg:pl-8 border-t lg:border-t-0 lg:border-l border-gray-200">
          <h3 className={`${roboto.className} font-bold text-lg mb-4`}>
            Featured Articles
          </h3>

          <div className="space-y-4 text-sm">
            <div>
              <p className="uppercase text-xs text-gray-500">Previous</p>
              <Link href="/" className="hover:text-red-600">
                Power Your Home Reliably — Introducing the FranklinWH Battery
              </Link>
            </div>

            <div>
              <p className="uppercase text-xs text-gray-500">Next</p>
              <Link href="/" className="hover:text-red-600">
                If I Install Solar Panels, Do I Need To Worry About Lightning?
              </Link>
            </div>

            <div>
              <p className="uppercase text-xs text-gray-500">Recommended</p>
              <Link href="/" className="hover:text-red-600">
                What the “Big Beautiful Bill” Means for Homeowners and the Solar Industry
              </Link>
            </div>
          </div>

          <div className="mt-8">
            <h3 className={`${roboto.className} font-bold text-lg mb-2`}>
              Reach Out to the Solar Squad Team
            </h3>
            <p className={`${roboto.className} text-sm text-gray-600`}>
              We are dedicated to providing affordable and accessible solar solutions
              for both residential and commercial properties across DC, Maryland, and
              Virginia. Let us guide you through your solar journey.
            </p>
          </div>
          {/* Contact Form */}
          <form className="space-y-4 mt-16">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>

            {/* Checkbox */}
            <div className="flex items-start space-x-3">
              {/* Checkbox */}
              <input
                type="checkbox"
                id="agreement"
                className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 flex-shrink-0"
              />

              {/* Label */}
              <label
                htmlFor="agreement"
                className="text-xs text-gray-600 leading-relaxed"
              >
                By checking this box, I agree to receive text message communications from
                The Solar Squad Solar. Be sure to add your phone number above. You may unsubscribe
                by replying STOP. Message and data rates may apply, message frequency may vary.
              </label>
            </div>


            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              style={{ backgroundColor: "#3b82f6" }}
              className="w-full hover:bg-[#2563eb] text-white font-semibold py-2 rounded-md transition"
            >
              Submit
            </button>

          </form>

        </aside>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
