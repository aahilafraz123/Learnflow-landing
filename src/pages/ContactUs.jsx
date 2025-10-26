import LiquidEther from '../components/LiquidEther'

function ContactUs() {
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
      <div className="relative z-10 pt-32 pb-20">
        <div className="container mx-auto px-8">
          {/* Page Header */}
          <div className="max-w-5xl mx-auto text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Let's Build the Future of <span className="bg-gradient-to-r from-gradientStart to-gradientEnd bg-clip-text text-transparent">Learning</span>
            </h1>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto">
              We're revolutionizing education with AI-powered tools designed to empower students and professionals alike.
            </p>
          </div>

          {/* Founders Section */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Aahil Afraz */}
              <div className="bg-card rounded-2xl border border-gray-800 p-8 hover:border-gradientStart transition-all duration-300">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Aahil Afraz</h3>
                  <p className="text-gradientStart font-semibold">Co-Founder</p>
                  <p className="text-gray-400">Drexel University</p>
                </div>
                
                <div className="space-y-4">
                  <a 
                    href="mailto:aa4763@drexel.edu"
                    className="flex items-center gap-3 text-gray-300 hover:text-gradientStart transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                    <span>aa4763@drexel.edu</span>
                  </a>
                  
                  <a 
                    href="https://www.linkedin.com/in/aahil-afraz-21512826a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-300 hover:text-gradientStart transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

              {/* Allen Varghese */}
              <div className="bg-card rounded-2xl border border-gray-800 p-8 hover:border-gradientStart transition-all duration-300">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Allen Varghese</h3>
                  <p className="text-gradientStart font-semibold">Co-Founder</p>
                  <p className="text-gray-400">Drexel University</p>
                </div>
                
                <div className="space-y-4">
                  <a 
                    href="mailto:allenvarghese05@gmail.com"
                    className="flex items-center gap-3 text-gray-300 hover:text-gradientStart transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                    <span>allenvarghese05@gmail.com</span>
                  </a>
                  
                  <a 
                    href="https://www.linkedin.com/in/allen-varghese-09b355212/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-300 hover:text-gradientStart transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Our Story Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-card rounded-2xl border border-gray-800 p-8">
              <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  As students at Drexel University, we built this MVP in just 3 months and are now ready to scale much faster. 
                  We leverage AI to accelerate our development and continuously learn from our users to improve the platform.
                </p>
                <p>
                  We developed LearnFlow to assist students the way Notion assists the workforce. By integrating AI to enhance 
                  the user experience, we've essentially created <span className="text-white font-semibold">Notion for Students</span> 
                  —a comprehensive platform that combines powerful productivity tools with intelligent learning features.
                </p>
                <p>
                  Our mission is simple: <span className="text-white font-semibold">to give students and the workforce a combination 
                  of tools at their disposal</span> that make learning more efficient, organized, and personalized.
                </p>
              </div>
            </div>
          </div>

          {/* Let's Talk Section */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-gradientStart to-gradientEnd rounded-2xl p-8 text-center">
              <div className="mb-6">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <h2 className="text-3xl font-bold text-white">Let's Talk</h2>
                </div>
                <p className="text-white/90 text-lg mb-2">  
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
                <p className="text-white/90 italic">
                  We value advice and mentorship as much as capital. Even if you're not investing, 
                  we'd love your feedback on our go-to-market strategy.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="mailto:aa4763@drexel.edu"
                  className="flex items-center gap-2 px-6 py-3 bg-white text-gradientStart font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  aa4763@drexel.edu
                </a>
                <a 
                  href="mailto:allenvarghese05@gmail.com"
                  className="flex items-center gap-2 px-6 py-3 bg-white text-gradientStart font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  allenvarghese05@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Schedule Demo Button */}
          <div className="max-w-4xl mx-auto mt-12 text-center">
            <button className="px-12 py-5 bg-card text-white text-xl font-semibold rounded-xl border-2 border-gray-700 hover:border-gradientStart hover:shadow-lg hover:shadow-gradientStart/30 transition-all duration-300 transform hover:scale-105">
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs