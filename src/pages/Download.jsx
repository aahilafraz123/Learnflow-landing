import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabaseClient'
import LiquidEther from '../components/LiquidEther'

function Download() {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if user is authenticated
    checkUser()

    // Listen for auth changes
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_OUT') {
        navigate('/auth')
      } else if (session) {
        setUser(session.user)
      }
    })

    return () => {
      authListener.subscription.unsubscribe()
    }
  }, [navigate])

  const checkUser = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession()
      
      if (!session) {
        navigate('/auth')
        return
      }

      setUser(session.user)
    } catch (error) {
      console.error('Error checking authentication:', error)
      navigate('/auth')
    } finally {
      setLoading(false)
    }
  }

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut()
      navigate('/')
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background relative">
      {/* Liquid Background */}
      <div className="fixed inset-0 z-0">
        <LiquidEther
          colors={['#22c55e', '#5eead4', '#34d399']}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-8 pt-32 pb-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-4">
              Download <span className="bg-gradient-to-r from-gradientStart to-gradientEnd bg-clip-text text-transparent">LearnFlow</span>
            </h1>
            <p className="text-gray-300 text-lg">
              Welcome, {user?.email}! Choose your platform to get started.
            </p>
          </div>

          {/* Download Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Windows Download */}
            <div className="bg-card/80 backdrop-blur-xl rounded-2xl border border-gray-800 p-8 hover:border-gradientStart transition-all duration-300">
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-gradientStart to-gradientEnd rounded-2xl flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
                  </svg>
                </div>
              </div>
              <h3 className="text-white font-bold text-2xl mb-2 text-center">Windows</h3>
              <p className="text-gray-400 text-center mb-6">
                Download for Windows 10 and later
              </p>
              <button 
                className="w-full py-3 bg-gradient-to-r from-gradientStart to-gradientEnd text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-gradientStart/50 transition-all duration-300"
                onClick={() => alert('Windows download will be available soon!')}
              >
                Download .exe
              </button>
              <p className="text-gray-500 text-sm text-center mt-4">
                Version 1.0.0 • ~150MB
              </p>
            </div>

            {/* macOS Download */}
            <div className="bg-card/80 backdrop-blur-xl rounded-2xl border border-gray-800 p-8 hover:border-gradientStart transition-all duration-300">
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-gradientStart to-gradientEnd rounded-2xl flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-white font-bold text-2xl mb-2 text-center">macOS</h3>
              <p className="text-gray-400 text-center mb-6">
                Download for macOS 11 and later
              </p>
              <button 
                className="w-full py-3 bg-gradient-to-r from-gradientStart to-gradientEnd text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-gradientStart/50 transition-all duration-300"
                onClick={() => alert('macOS download will be available soon!')}
              >
                Download .dmg
              </button>
              <p className="text-gray-500 text-sm text-center mt-4">
                Version 1.0.0 • ~150MB
              </p>
            </div>
          </div>

          {/* Installation Instructions */}
          <div className="bg-card/80 backdrop-blur-xl rounded-2xl border border-gray-800 p-8 mb-8">
            <h3 className="text-white font-bold text-2xl mb-4">Installation Instructions</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-gradientStart font-semibold mb-2">Windows:</h4>
                <ol className="list-decimal list-inside text-gray-300 space-y-1">
                  <li>Download the .exe file</li>
                  <li>Run the installer</li>
                  <li>Follow the setup wizard</li>
                  <li>Launch LearnFlow from your desktop</li>
                </ol>
              </div>
              <div>
                <h4 className="text-gradientStart font-semibold mb-2">macOS:</h4>
                <ol className="list-decimal list-inside text-gray-300 space-y-1">
                  <li>Download the .dmg file</li>
                  <li>Open the downloaded file</li>
                  <li>Drag LearnFlow to Applications folder</li>
                  <li>Launch LearnFlow from Applications</li>
                </ol>
              </div>
            </div>
          </div>

          {/* System Requirements */}
          <div className="bg-card/80 backdrop-blur-xl rounded-2xl border border-gray-800 p-8 mb-8">
            <h3 className="text-white font-bold text-2xl mb-4">System Requirements</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-gradientStart font-semibold mb-3">Windows</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>• Windows 10 or later</li>
                  <li>• 4GB RAM minimum</li>
                  <li>• 500MB free disk space</li>
                  <li>• Internet connection</li>
                </ul>
              </div>
              <div>
                <h4 className="text-gradientStart font-semibold mb-3">macOS</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>• macOS 11 (Big Sur) or later</li>
                  <li>• 4GB RAM minimum</li>
                  <li>• 500MB free disk space</li>
                  <li>• Internet connection</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sign Out Button */}
          <div className="text-center">
            <button
              onClick={handleSignOut}
              className="px-8 py-3 bg-gray-800 text-white font-semibold rounded-lg border border-gray-700 hover:border-gradientStart transition-all duration-300"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Download