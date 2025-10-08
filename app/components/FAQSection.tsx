'use client'

import { useState } from 'react'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "How does the text-to-speech API work?",
      answer: "Our API accepts text input through a simple REST endpoint and returns high-quality audio files. You can specify voice type, speed, and other parameters. The process typically takes just a few milliseconds for most text lengths."
    },
    {
      question: "What audio formats are supported?",
      answer: "We support multiple audio formats including MP3, WAV, OGG, and FLAC. You can specify your preferred format in the API request, with MP3 being the default for optimal file size and compatibility."
    },
    {
      question: "How many languages and voices are available?",
      answer: "We offer voices in over 50 languages with multiple voice options per language. Our Professional plan includes 15+ premium voices, while Enterprise customers get access to 50+ voices and custom voice training."
    },
    {
      question: "Is there a character limit for text input?",
      answer: "Character limits depend on your plan: Starter allows 10,000 characters per month, Professional allows 100,000, and Enterprise has no limits. Single requests can handle up to 5,000 characters at once."
    },
    {
      question: "How do you ensure audio quality?",
      answer: "We use advanced AI models trained on high-quality voice data. Our neural networks produce natural-sounding speech with proper pronunciation, intonation, and pacing. Professional and Enterprise plans include even higher quality models."
    },
    {
      question: "Can I use custom voices for my brand?",
      answer: "Yes! Professional plans include basic voice customization, while Enterprise customers can create fully custom voices that match their brand identity. This includes voice cloning and training on your specific requirements."
    },
    {
      question: "What's included in the free trial?",
      answer: "The 14-day free trial includes full access to Professional plan features: 100,000 characters, 15+ premium voices, high-quality audio, and priority support. No credit card required to start."
    },
    {
      question: "How reliable is the service?",
      answer: "We maintain 99.9% uptime with redundant infrastructure across multiple regions. Enterprise customers receive SLA guarantees and dedicated support. Our API is designed to handle high-volume requests with minimal latency."
    },
    {
      question: "Can I integrate this with my existing application?",
      answer: "Absolutely! Our REST API is designed for easy integration with any platform or programming language. We provide SDKs for popular languages and comprehensive documentation with code examples."
    },
    {
      question: "What kind of support do you offer?",
      answer: "Support varies by plan: Starter includes email support, Professional gets priority support with faster response times, and Enterprise customers receive 24/7 phone support with dedicated account management."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about our text-to-speech API
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 focus:bg-gray-50 focus:outline-none transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <svg
                      className={`w-5 h-5 text-gray-500 transform transition-transform ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4 bg-gray-50">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12 p-8 bg-blue-50 rounded-2xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Our team is here to help. Get in touch and we&apos;ll respond within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Contact Support
            </button>
            <button className="border border-gray-300 hover:border-gray-400 bg-white text-gray-700 px-6 py-3 rounded-lg font-semibold transition-colors">
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
