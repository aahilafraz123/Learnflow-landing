import { Link } from 'react-router-dom'
import LiquidEther from '../components/LiquidEther'
import AnimatedText from '../components/AnimatedText'
import FAQ from '../components/FAQ'

function Home() {
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
      <div className="relative z-10">
        {/* Hero Section */}
        <main className="container mx-auto px-8 pt-32 pb-12 h-full flex flex-col justify-center relative fade-to-faq">
          <div className="max-w-4xl">
            {/* Tagline */}
            <p className="text-gray-400 text-lg mb-6">
              AI-Powered Learning Assistant
            </p>
            
            <AnimatedText 
              delay={80} 
              className="text-6xl font-bold text-white mb-6 leading-tight"
            >
              Your AI Study Partner with
              <span className="bg-gradient-to-r from-gradientStart to-gradientEnd bg-clip-text text-transparent">
                {" "}Context-Aware Intelligence
              </span>
            </AnimatedText>
            
            <p className="text-gray-300 text-xl mb-12 leading-relaxed">
              Seamlessly capture notes, monitor study sessions, and get personalized AI tutoring that knows your strengths and weaknesses. 
              Transform the way you learn with intelligent guidance that adapts to your performance.
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-4 flex-wrap">
              <button className="px-8 py-4 bg-gradient-to-r from-gradientStart to-gradientEnd text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-gradientStart/50 transition-all duration-300 transform hover:scale-105">
                Get Started Free
              </button>
<Link to="/demo" className="px-8 py-4 bg-card text-white font-semibold rounded-lg border border-gray-700 hover:border-gradientStart transition-all duration-300 inline-block text-center">
              Watch Demo
            </Link>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-card p-6 rounded-xl border border-gray-800 hover:border-gradientStart transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-gradientStart to-gradientEnd rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-xl mb-2">Personalized Path</h3>
              <p className="text-gray-400">Adaptive learning paths tailored to your unique goals and learning style.</p>
            </div>

            <div className="bg-card p-6 rounded-xl border border-gray-800 hover:border-gradientStart transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-gradientStart to-gradientEnd rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-xl mb-2">Instant Feedback</h3>
              <p className="text-gray-400">Get real-time insights and corrections to accelerate your progress.</p>
            </div>

            <div className="bg-card p-6 rounded-xl border border-gray-800 hover:border-gradientStart transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-gradientStart to-gradientEnd rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-xl mb-2">Track Progress</h3>
              <p className="text-gray-400">Visual analytics to monitor your growth and celebrate milestones.</p>
            </div>
          </div>
        </main>
      </div>
      
      {/* FAQ Section */}
      <FAQ />
    </div>
  )
}

export default Home