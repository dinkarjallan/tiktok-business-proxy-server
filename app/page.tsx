import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TikTok Business API Proxy Server',
  description: 'A proxy server to bypass TikTok geo-positional restrictions',
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            TikTok Business API Proxy Server
          </h1>
          <p className="text-xl text-gray-600">
            Bypass geo-positional restrictions and access TikTok Business API from anywhere
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">How It Works</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                1
              </div>
              <div>
                <p className="text-gray-700">
                  Instead of calling TikTok's API directly, send your requests to this proxy server
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                2
              </div>
              <div>
                <p className="text-gray-700">
                  This server forwards your request to TikTok's Business API with proper headers and configuration
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                3
              </div>
              <div>
                <p className="text-gray-700">
                  TikTok's response is returned to you through the proxy, bypassing geo-restrictions
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Usage</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-2">Base URL</h3>
              <div className="bg-gray-100 p-3 rounded-md">
                <code className="text-sm text-gray-800">
                  {typeof window !== 'undefined' ? window.location.origin : 'https://your-domain.vercel.app'}/api
                </code>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-2">Example Request</h3>
              <div className="bg-gray-100 p-3 rounded-md">
                <code className="text-sm text-gray-800">
                  GET /api/user/info?fields=["display_name","profile_picture_url"]
                </code>
              </div>
              <p className="text-sm text-gray-600 mt-1">
                This will be proxied to: https://business-api.tiktok.com/open_api/v1.3/user/info?fields=["display_name","profile_picture_url"]
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-2">Supported HTTP Methods</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">GET</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">POST</span>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">PUT</span>
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">DELETE</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Automatic request forwarding</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Header preservation</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">CORS support</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Error handling</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Request logging</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Timeout protection</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Deployment</h2>
          <p className="text-gray-700 mb-4">
            This app is designed to be deployed on Vercel. Once deployed, you can use the Vercel URL as your TikTok API base URL.
          </p>
          <div className="bg-gray-100 p-3 rounded-md">
            <code className="text-sm text-gray-800">
              # Replace your TikTok API calls from:<br/>
              https://business-api.tiktok.com/open_api/v1.3<br/><br/>
              # To your proxy server:<br/>
              https://your-app.vercel.app/api
            </code>
          </div>
        </div>
      </div>
    </div>
  );
}
