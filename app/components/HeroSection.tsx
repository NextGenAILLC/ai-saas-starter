'use client'

import { SignUpButton } from '@clerk/nextjs'

export default function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* Hero Content */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Transform Text into 
            <span className="text-blue-600"> Natural Speech</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 leading-relaxed">
            Developers Digest Text-to-Speech App provides AI-powered voice synthesis 
            that sounds incredibly human. Perfect for apps, websites, and content creation.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <SignUpButton>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg hover:shadow-xl">
                Start Free Trial
              </button>
            </SignUpButton>
            <button className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Watch Demo
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="text-sm text-gray-500 mb-12">
            ✓ No credit card required • ✓ 14-day free trial • ✓ Cancel anytime
          </div>
        </div>

        {/* Demo/Preview Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="ml-4 text-sm text-gray-600 font-mono">api.devdigest-tts.com</div>
              </div>
            </div>
            <div className="p-8">
              <div className="text-left">
                <div className="bg-gray-900 rounded-lg p-6 text-green-400 font-mono text-sm mb-6">
                  <div className="mb-2">{`$ curl -X POST https://api.devdigest-tts.com/v1/synthesize \\`}</div>
                  <div className="mb-2 ml-4">{`-H "Authorization: Bearer YOUR_API_KEY" \\`}</div>
                  <div className="mb-2 ml-4">{`-H "Content-Type: application/json" \\`}</div>
                  <div className="mb-2 ml-4">{`-d '{"text": "Hello world!", "voice": "natural"}'`}</div>
                  <div className="text-blue-400 mt-4">→ Generating speech... ✓ Complete</div>
                </div>
                <div className="flex items-center justify-center space-x-4 p-6 bg-blue-50 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">Play Generated Audio</span>
                  </div>
                  <div className="flex-1 h-2 bg-gray-200 rounded-full">
                    <div className="w-1/3 h-full bg-blue-600 rounded-full"></div>
                  </div>
                  <span className="text-sm text-gray-500">0:02 / 0:06</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div id="features" className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Natural Voices</h3>
            <p className="text-gray-600">AI-powered voices that sound incredibly human and natural</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Lightning Fast</h3>
            <p className="text-gray-600">Generate speech in milliseconds with our optimized API</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Easy Integration</h3>
            <p className="text-gray-600">Simple REST API that integrates with any application</p>
          </div>
        </div>
      </div>
    </section>
  )
}
