import NavbarComponent from '@/component/navbar/page'
import Footer from '@/components/footer/page'
import React from 'react'

function Terms() {
  return (
    <>
      <NavbarComponent />

      <main>
        <section className="max-w-[1100px] mx-auto p-8 bg-white">
          <header className="text-center mb-8">
            <h1 className="text-[#0A2A4A] font-extrabold text-4xl tracking-wide">
              QOREX GROUP INC. Privacy Policy
            </h1>
            <p className="text-[#1B4D72] font-semibold text-lg">
              Last Updated: July 21, 2025
            </p>
          </header>

          <section className="mb-6">
            <h2 className="text-[#0A2A4A] font-bold text-xl mb-2">
              Information We Collect
            </h2>
            <ul className="ml-6 text-gray-800 list-disc">
              <li>Create an account on our website</li>
              <li>Make an online purchase</li>
              <li>Subscribe to our newsletter</li>
              <li>Contact us via email, phone, or social media</li>
            </ul>
            <p className="mt-2 text-gray-800">We may request information such as:</p>
            <ul className="ml-6 text-gray-800 list-disc">
              <li>Full name</li>
              <li>Email address</li>
              <li>Shipping address</li>
              <li>Phone number</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-[#0A2A4A] font-bold text-xl mb-2">
              Purpose of Use
            </h2>
            <ul className="ml-6 text-gray-800 list-disc">
              <li>Process your orders and handle payments</li>
              <li>Fulfill product deliveries and provide after-sales service</li>
              <li>Customize your browsing and shopping experience</li>
              <li>Send promotional content, news, or surveys (if you’ve opted in)</li>
              <li>Improve our website and ensure security</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-[#0A2A4A] font-bold text-xl mb-2">
              Data Protection
            </h2>
            <p className="text-gray-800">
              At <span className="font-bold text-[#1B4D72]">QOREX GROUP INC.</span>, we employ robust security protocols to protect your personal data, including:
            </p>
            <ul className="ml-6 text-gray-800 list-disc">
              <li>SSL encryption for secure data transmission</li>
              <li>Limited access to authorized personnel only</li>
              <li>Anti-threat software and security monitoring systems</li>
              <li>Secure data storage in trusted servers</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-[#0A2A4A] font-bold text-xl mb-2">
              Cookies
            </h2>
            <ul className="ml-6 text-gray-800 list-disc">
              <li>Keep track of items in your shopping cart</li>
              <li>Save your site preferences for future visits</li>
              <li>Analyze site performance and marketing efforts</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-[#0A2A4A] font-bold text-xl mb-2">
              Information Disclosure
            </h2>
            <p className="text-gray-800">
              We do not sell or rent your personal information. We only share it with trusted third-party service providers (e.g., shipping partners and payment processors) who are contractually obligated to keep your data confidential and use it solely to perform their assigned duties.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-[#0A2A4A] font-bold text-xl mb-2">
              Mobile Number Policy
            </h2>
            <p className="text-gray-800">
              QOREX GROUP INC. does not share mobile phone numbers with third parties for promotional purposes. All text message subscriptions require your explicit consent and are handled securely.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-[#0A2A4A] font-bold text-xl mb-2">
              Third-Party Links
            </h2>
            <p className="text-gray-800">
              Our site may include links to third-party websites. We are not responsible for the content or privacy practices of those external sites. We encourage users to review their policies before submitting personal information.
            </p>
          </section>

          <section>
            <h2 className="text-[#0A2A4A] font-bold text-xl mb-2">
              Changes to This Policy
            </h2>
            <p className="text-gray-800">
              We reserve the right to update this privacy policy at any time. All changes will be posted here and become effective immediately upon publication.
            </p>
          </section>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default Terms