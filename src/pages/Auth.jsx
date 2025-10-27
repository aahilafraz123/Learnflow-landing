import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabaseClient'
import { isDrexelEmail, requestAccess, validateSignUpEligibility } from '../lib/accessControl'
import LiquidEther from '../components/LiquidEther'

function Auth() {
  const navigate = useNavigate()
  const [mode, setMode] = useState('signin') // 'signin', 'signup', 'request'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState({ type: '', text: '' })

  // Handle Sign In
  const handleSignIn = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage({ type: '', text: '' })

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password: password
      })

      if (error) throw error

      // Successfully signed in
      setMessage({ type: 'success', text: 'Signed in successfully!' })
      setTimeout(() => navigate('/download'), 1500)
    } catch (error) {
      setMessage({ type: 'error', text: error.message })
    } finally {
      setLoading(false)
    }
  }

  // Handle Sign Up
  const handleSignUp = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage({ type: '', text: '' })

    try {
      // Validate eligibility (Drexel email OR approved non-Drexel)
      const { canSignUp, reason } = await validateSignUpEligibility(email)

      if (!canSignUp) {
        setMessage({ 
          type: 'error', 
          text: reason
        })
        setLoading(false)
        return
      }

      // Create account
      const { data, error } = await supabase.auth.signUp({
        email: email.trim(),
        password: password
      })

      if (error) throw error

      setMessage({ 
        type: 'success', 
        text: 'Account created! Please check your email to verify your account.' 
      })
      
      // Clear form
      setEmail('')
      setPassword('')
    } catch (error) {
      setMessage({ type: 'error', text: error.message })
    } finally {
      setLoading(false)
    }
  }

  // Handle Request Access
  const handleRequestAccess = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage({ type: '', text: '' })

    try {
      // Check if it's a Drexel email
      if (isDrexelEmail(email)) {
        setMessage({ 
          type: 'info', 
          text: 'Drexel students can sign up directly! Switch to Sign Up.' 
        })
        setLoading(false)
        return
      }

      // Submit access request
      const result = await requestAccess(email)

      if (result.success) {
        setMessage({ type: 'success', text: result.message })
        setEmail('')
      } else {
        setMessage({ type: 'error', text: result.message })
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'An error occurred. Please try again.' })
    } finally {
      setLoading(false)
    }
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
      <div className="relative z-10 container mx-auto px-8 pt-32 pb-12 flex items-center justify-center min-h-screen">
        <div className="max-w-md w-full">
          {/* Card */}
          <div className="bg-card/80 backdrop-blur-xl rounded-2xl border border-gray-800 p-8 shadow-2xl">
            {/* Logo */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2">
                <span className="text-white">Learn</span>
                <span className="bg-gradient-to-r from-gradientStart to-gradientEnd bg-clip-text text-transparent">
                  Flow
                </span>
              </h1>
              <p className="text-gray-400">
                {mode === 'signin' && 'Welcome back!'}
                {mode === 'signup' && 'Create your account'}
                {mode === 'request' && 'Request Access'}
              </p>
            </div>

            {/* Mode Tabs */}
            <div className="flex gap-2 mb-6">
              <button
                onClick={() => {
                  setMode('signin')
                  setMessage({ type: '', text: '' })
                }}
                className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all ${
                  mode === 'signin'
                    ? 'bg-gradient-to-r from-gradientStart to-gradientEnd text-white'
                    : 'bg-gray-800 text-gray-400 hover:text-white'
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => {
                  setMode('signup')
                  setMessage({ type: '', text: '' })
                }}
                className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all ${
                  mode === 'signup'
                    ? 'bg-gradient-to-r from-gradientStart to-gradientEnd text-white'
                    : 'bg-gray-800 text-gray-400 hover:text-white'
                }`}
              >
                Sign Up
              </button>
              <button
                onClick={() => {
                  setMode('request')
                  setMessage({ type: '', text: '' })
                }}
                className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all ${
                  mode === 'request'
                    ? 'bg-gradient-to-r from-gradientStart to-gradientEnd text-white'
                    : 'bg-gray-800 text-gray-400 hover:text-white'
                }`}
              >
                Request Access
              </button>
            </div>

            {/* Message Display */}
            {message.text && (
              <div
                className={`mb-4 p-4 rounded-lg ${
                  message.type === 'success'
                    ? 'bg-green-500/10 border border-green-500/30 text-green-300'
                    : message.type === 'error'
                    ? 'bg-red-500/10 border border-red-500/30 text-red-300'
                    : 'bg-blue-500/10 border border-blue-500/30 text-blue-300'
                }`}
              >
                {message.text}
              </div>
            )}

            {/* Sign In Form */}
            {mode === 'signin' && (
              <form onSubmit={handleSignIn} className="space-y-4">
                <div>
                  <label className="block text-gray-300 mb-2 text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-background border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gradientStart transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2 text-sm font-medium">
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full bg-background border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gradientStart transition-colors"
                    placeholder="••••••••"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-gradient-to-r from-gradientStart to-gradientEnd text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-gradientStart/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Signing in...' : 'Sign In'}
                </button>
              </form>
            )}

            {/* Sign Up Form */}
            {mode === 'signup' && (
              <form onSubmit={handleSignUp} className="space-y-4">
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mb-4">
                  <p className="text-blue-300 text-sm">
                    <strong>Drexel students:</strong> Sign up instantly with your @drexel.edu email!
                    <br />
                    <strong>Others:</strong> Please request access first.
                  </p>
                </div>
                <div>
                  <label className="block text-gray-300 mb-2 text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-background border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gradientStart transition-colors"
                    placeholder="you@drexel.edu"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2 text-sm font-medium">
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={6}
                    className="w-full bg-background border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gradientStart transition-colors"
                    placeholder="••••••••"
                  />
                  <p className="text-gray-500 text-xs mt-1">
                    Minimum 6 characters
                  </p>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-gradient-to-r from-gradientStart to-gradientEnd text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-gradientStart/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Creating account...' : 'Sign Up'}
                </button>
              </form>
            )}

            {/* Request Access Form */}
            {mode === 'request' && (
              <form onSubmit={handleRequestAccess} className="space-y-4">
                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mb-4">
                  <p className="text-yellow-300 text-sm">
                    Non-Drexel users must request access. We'll review your request and notify you via email.
                  </p>
                </div>
                <div>
                  <label className="block text-gray-300 mb-2 text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-background border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gradientStart transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-gradient-to-r from-gradientStart to-gradientEnd text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-gradientStart/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Submitting...' : 'Request Access'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth