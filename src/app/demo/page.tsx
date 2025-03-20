import Link from 'next/link'

export default function DemoPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Try Our AI Automation Demo</h1>
        <p className="text-lg text-gray-600">
          Experience the power of our AI automation services with these interactive demos.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-40 bg-blue-100 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Farsi Visual Content</h3>
            <p className="text-gray-600 mb-4">
              Generate visual content with properly rendered Farsi text for social media.
            </p>
            <Link 
              href="/demo/farsi-visual"
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors inline-flex items-center w-full justify-center"
            >
              Try Demo
            </Link>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-40 bg-teal-100 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">AI Copywriting</h3>
            <p className="text-gray-600 mb-4">
              Generate blog posts, social media captions, and marketing copy.
            </p>
            <Link 
              href="/demo/copywriting"
              className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-4 rounded transition-colors inline-flex items-center w-full justify-center"
            >
              Try Demo
            </Link>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-40 bg-coral-100 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-coral-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Video Generation</h3>
            <p className="text-gray-600 mb-4">
              Create Instagram Reels and YouTube Shorts from text prompts.
            </p>
            <Link 
              href="/demo/video-prompt"
              className="bg-coral-500 hover:bg-coral-600 text-white font-medium py-2 px-4 rounded transition-colors inline-flex items-center w-full justify-center"
            >
              Try Demo
            </Link>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Video Generation Demo</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h3 className="font-semibold mb-4 text-gray-900">Create a video from a text prompt</h3>
            <div className="mb-4">
              <label htmlFor="prompt" className="block text-sm font-medium text-gray-700 mb-1">
                Enter your prompt:
              </label>
              <textarea
                id="prompt"
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Describe the video you want to create..."
              ></textarea>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <label htmlFor="platform" className="block text-sm font-medium text-gray-700 mb-1">
                  Platform:
                </label>
                <select
                  id="platform"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="instagram">Instagram Reels</option>
                  <option value="youtube">YouTube Shorts</option>
                </select>
              </div>
              <div>
                <label htmlFor="content-type" className="block text-sm font-medium text-gray-700 mb-1">
                  Content Type:
                </label>
                <select
                  id="content-type"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="explainer">Explainer</option>
                  <option value="tutorial">Tutorial</option>
                  <option value="storytelling">Storytelling</option>
                  <option value="product">Product</option>
                  <option value="entertainment">Entertainment</option>
                </select>
              </div>
              <div>
                <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-1">
                  Duration (seconds):
                </label>
                <input
                  type="number"
                  id="duration"
                  min="15"
                  max="60"
                  defaultValue="30"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            <button
              className="bg-coral-500 hover:bg-coral-600 text-white font-medium py-2 px-4 rounded transition-colors"
            >
              Generate Video
            </button>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold mb-4 text-gray-900">Transform an existing video</h3>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Upload your video:
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                    >
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">MP4, MOV, or AVI up to 100MB</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="platform-transform" className="block text-sm font-medium text-gray-700 mb-1">
                  Target Platform:
                </label>
                <select
                  id="platform-transform"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="instagram">Instagram Reels</option>
                  <option value="youtube">YouTube Shorts</option>
                </select>
              </div>
              <div>
                <label htmlFor="duration-transform" className="block text-sm font-medium text-gray-700 mb-1">
                  Target Duration (seconds):
                </label>
                <input
                  type="number"
                  id="duration-transform"
                  min="15"
                  max="60"
                  defaultValue="30"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            <button
              className="bg-coral-500 hover:bg-coral-600 text-white font-medium py-2 px-4 rounded transition-colors"
            >
              Transform Video
            </button>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Ready for the Full Experience?</h2>
        <p className="text-gray-700 mb-4">
          These demos showcase just a fraction of what our AI automation platform can do. For full access to all features and capabilities, contact us for a personalized demo or sign up for a trial.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            href="/contact" 
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors inline-flex items-center justify-center"
          >
            Contact for Full Demo
          </Link>
          <Link 
            href="/pricing" 
            className="bg-white hover:bg-gray-50 text-blue-600 border border-blue-300 font-medium py-2 px-4 rounded transition-colors inline-flex items-center justify-center"
          >
            View Pricing Plans
          </Link>
        </div>
      </div>
    </div>
  )
}
