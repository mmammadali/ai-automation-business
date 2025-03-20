import Link from 'next/link'

export default function VideoGeneration() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Video Content Generation</h1>
        <p className="text-lg text-gray-600">
          Create engaging Instagram Reels and YouTube Shorts with our AI-powered video generation service.
        </p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="h-10 w-10 bg-coral-100 rounded-full flex items-center justify-center mb-3">
                <span className="text-coral-600 font-semibold">1</span>
              </div>
              <h3 className="font-semibold mb-2 text-gray-900">Input Your Prompt</h3>
              <p className="text-gray-600 text-sm">
                Provide a text prompt describing the video content you want to create, or upload an existing video to transform.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="h-10 w-10 bg-coral-100 rounded-full flex items-center justify-center mb-3">
                <span className="text-coral-600 font-semibold">2</span>
              </div>
              <h3 className="font-semibold mb-2 text-gray-900">AI Generation</h3>
              <p className="text-gray-600 text-sm">
                Our AI analyzes your input and generates a script, visuals, and audio components for your video.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="h-10 w-10 bg-coral-100 rounded-full flex items-center justify-center mb-3">
                <span className="text-coral-600 font-semibold">3</span>
              </div>
              <h3 className="font-semibold mb-2 text-gray-900">Review & Export</h3>
              <p className="text-gray-600 text-sm">
                Review the generated video, make any adjustments, and export it in the optimal format for your target platform.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-48 bg-coral-100 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-coral-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-2 text-gray-900">Text-to-Video Generation</h2>
            <p className="text-gray-600 mb-4">
              Create videos from simple text prompts. Our AI handles everything from script generation to visual creation.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-coral-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Multiple content types (explainer, tutorial, storytelling)</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-coral-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Customizable visual styles and themes</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-coral-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Voiceover and background music generation</span>
              </li>
            </ul>
            <div className="mt-6">
              <Link 
                href="/demo/video-prompt"
                className="bg-coral-500 hover:bg-coral-600 text-white font-medium py-2 px-4 rounded transition-colors inline-flex items-center"
              >
                Try Demo
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-48 bg-coral-100 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-coral-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-2 text-gray-900">Video Transformation</h2>
            <p className="text-gray-600 mb-4">
              Transform existing long-form videos into engaging short-form content optimized for social media platforms.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-coral-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Intelligent highlight extraction</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-coral-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Automatic reframing for vertical video</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-coral-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Caption generation and visual enhancements</span>
              </li>
            </ul>
            <div className="mt-6">
              <Link 
                href="/demo/video-transform"
                className="bg-coral-500 hover:bg-coral-600 text-white font-medium py-2 px-4 rounded transition-colors inline-flex items-center"
              >
                Try Demo
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Platform Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2 text-gray-900">Instagram Reels</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-coral-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Vertical 9:16 aspect ratio</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-coral-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">15-60 second duration</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-coral-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Trending effects and music</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2 text-gray-900">YouTube Shorts</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-coral-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Vertical 9:16 aspect ratio</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-coral-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Up to 60 second duration</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-coral-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">YouTube-specific features</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-coral-50 rounded-lg p-6 border border-coral-200">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Ready to Get Started?</h2>
        <p className="text-gray-700 mb-4">
          Transform your content strategy with our AI-powered video generation service. Create engaging short-form videos that capture your audience's attention.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            href="/pricing" 
            className="bg-coral-500 hover:bg-coral-600 text-white font-medium py-2 px-4 rounded transition-colors inline-flex items-center justify-center"
          >
            View Pricing
          </Link>
          <Link 
            href="/contact" 
            className="bg-white hover:bg-gray-50 text-coral-600 border border-coral-300 font-medium py-2 px-4 rounded transition-colors inline-flex items-center justify-center"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}
