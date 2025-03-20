import Link from 'next/link'

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="container mx-auto px-4 py-8 flex-1">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <aside className="md:col-span-1">
            <div className="sticky top-24 bg-white rounded-lg shadow-md p-4">
              <h3 className="font-semibold text-lg mb-4 text-gray-900">Our Services</h3>
              <nav className="space-y-2">
                <Link 
                  href="/services/farsi-visual-content"
                  className="block p-2 rounded hover:bg-gray-100 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Farsi Visual Content
                </Link>
                <Link 
                  href="/services/ai-copywriting"
                  className="block p-2 rounded hover:bg-gray-100 text-gray-700 hover:text-teal-600 transition-colors"
                >
                  AI Copywriting
                </Link>
                <Link 
                  href="/services/video-generation"
                  className="block p-2 rounded hover:bg-gray-100 text-gray-700 hover:text-coral-600 transition-colors"
                >
                  Video Generation
                </Link>
                <Link 
                  href="/services/integrated-solutions"
                  className="block p-2 rounded hover:bg-gray-100 text-gray-700 hover:text-purple-600 transition-colors"
                >
                  Integrated Solutions
                </Link>
              </nav>
              
              <h3 className="font-semibold text-lg mt-8 mb-4 text-gray-900">By Industry</h3>
              <nav className="space-y-2">
                <Link 
                  href="/solutions/marketing"
                  className="block p-2 rounded hover:bg-gray-100 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Marketing & Advertising
                </Link>
                <Link 
                  href="/solutions/ecommerce"
                  className="block p-2 rounded hover:bg-gray-100 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  E-commerce
                </Link>
                <Link 
                  href="/solutions/education"
                  className="block p-2 rounded hover:bg-gray-100 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Education
                </Link>
                <Link 
                  href="/solutions/media"
                  className="block p-2 rounded hover:bg-gray-100 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Media & Entertainment
                </Link>
              </nav>
            </div>
          </aside>
          
          <main className="md:col-span-3">
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}
