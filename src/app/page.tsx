import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-900 to-teal-800 text-white py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            AI Automation Agent Service
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Revolutionize your content creation with AI-powered automation for visual content, copywriting, and video production
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/services" 
              className="bg-coral-500 hover:bg-coral-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Explore Services
            </Link>
            <Link 
              href="/demo" 
              className="bg-transparent hover:bg-white/10 border-2 border-white text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Try Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Our AI Automation Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Farsi Visual Content */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Farsi Visual Content Generation</h3>
              <p className="text-gray-600 mb-4">
                Create stunning visual content with properly rendered Farsi text for social media, marketing materials, and more.
              </p>
              <Link 
                href="/services/farsi-visual-content" 
                className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
              >
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* AI Copywriting */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">AI Copywriting</h3>
              <p className="text-gray-600 mb-4">
                Generate engaging blog posts, social media captions, video scripts, and marketing copy in multiple languages.
              </p>
              <Link 
                href="/services/ai-copywriting" 
                className="text-teal-600 hover:text-teal-800 font-medium inline-flex items-center"
              >
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Video Content Generation */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-coral-100 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-coral-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Video Content Generation</h3>
              <p className="text-gray-600 mb-4">
                Create Instagram Reels and YouTube Shorts from text prompts or transform existing videos into engaging short-form content.
              </p>
              <Link 
                href="/services/video-generation" 
                className="text-coral-600 hover:text-coral-800 font-medium inline-flex items-center"
              >
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Define Your Needs</h3>
              <p className="text-gray-600">
                Specify your content requirements, target audience, and preferred style.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">AI Generation</h3>
              <p className="text-gray-600">
                Our AI agents create content based on your specifications with high quality and consistency.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Review & Publish</h3>
              <p className="text-gray-600">
                Review the generated content, make any adjustments, and publish across your channels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Sarah Johnson</h4>
                  <p className="text-gray-600 text-sm">Marketing Director</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The AI automation service has transformed our content creation process. We're now producing twice the content in half the time, with consistent quality across all channels."
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Mohammad Ahmadi</h4>
                  <p className="text-gray-600 text-sm">Content Creator</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The Farsi visual content generation is incredible. Finally, a solution that properly renders Persian text in graphics without any technical issues. It's been a game-changer for our social media presence."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-16 bg-gradient-to-r from-blue-900 to-teal-800 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Content Creation?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join businesses across Iran and around the world who are leveraging AI automation to create better content, faster.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact" 
              className="bg-white text-blue-900 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Contact Us
            </Link>
            <Link 
              href="/pricing" 
              className="bg-transparent hover:bg-white/10 border-2 border-white text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
