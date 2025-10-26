    import LiquidEther from '../components/LiquidEther'

function Demo() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
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
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-4">
              Product <span className="bg-gradient-to-r from-gradientStart to-gradientEnd bg-clip-text text-transparent">Demos</span>
            </h1>
            <p className="text-gray-400 text-lg">
              Explore how LearnFlow transforms your learning experience
            </p>
          </div>

          {/* Main Product Demo */}
          <div className="max-w-5xl mx-auto mb-20">
            <div className="bg-card rounded-2xl border border-gray-800 overflow-hidden shadow-2xl">
              <div className="p-6 border-b border-gray-800">
                <h2 className="text-2xl font-bold text-white mb-2">
                  Main Product Demo
                </h2>
                <p className="text-gray-400">
                  Complete walkthrough of LearnFlow's features and capabilities
                </p>
              </div>
              <div className="aspect-video bg-black">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                  title="LearnFlow Main Product Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          {/* Feature Videos Section */}
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Feature Highlights
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Feature Video 1 */}
              <div className="bg-card rounded-xl border border-gray-800 overflow-hidden hover:border-gradientStart transition-all duration-300 transform hover:scale-105">
                <div className="aspect-video bg-black">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/YOUR_VIDEO_ID_1"
                    title="Feature Demo 1"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4">
                  <h3 className="text-white font-semibold text-lg mb-2">
                    AI Study Assistant
                  </h3>
                  <p className="text-gray-400 text-sm">
                    See how our AI adapts to your learning style
                  </p>
                </div>
              </div>

              {/* Feature Video 2 */}
              <div className="bg-card rounded-xl border border-gray-800 overflow-hidden hover:border-gradientStart transition-all duration-300 transform hover:scale-105">
                <div className="aspect-video bg-black">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/YOUR_VIDEO_ID_2"
                    title="Feature Demo 2"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4">
                  <h3 className="text-white font-semibold text-lg mb-2">
                    Smart Note Taking
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Capture and organize notes effortlessly
                  </p>
                </div>
              </div>

              {/* Feature Video 3 */}
              <div className="bg-card rounded-xl border border-gray-800 overflow-hidden hover:border-gradientStart transition-all duration-300 transform hover:scale-105">
                <div className="aspect-video bg-black">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/YOUR_VIDEO_ID_3"
                    title="Feature Demo 3"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4">
                  <h3 className="text-white font-semibold text-lg mb-2">
                    Progress Tracking
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Monitor your learning journey with analytics
                  </p>
                </div>
              </div>

              {/* Feature Video 4 */}
              <div className="bg-card rounded-xl border border-gray-800 overflow-hidden hover:border-gradientStart transition-all duration-300 transform hover:scale-105">
                <div className="aspect-video bg-black">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/YOUR_VIDEO_ID_4"
                    title="Feature Demo 4"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4">
                  <h3 className="text-white font-semibold text-lg mb-2">
                    Study Sessions
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Track time and stay focused with session monitoring
                  </p>
                </div>
              </div>

              {/* Feature Video 5 */}
              <div className="bg-card rounded-xl border border-gray-800 overflow-hidden hover:border-gradientStart transition-all duration-300 transform hover:scale-105">
                <div className="aspect-video bg-black">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/YOUR_VIDEO_ID_5"
                    title="Feature Demo 5"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4">
                  <h3 className="text-white font-semibold text-lg mb-2">
                    Personalized Feedback
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Get instant insights on your performance
                  </p>
                </div>
              </div>

              {/* Feature Video 6 */}
              <div className="bg-card rounded-xl border border-gray-800 overflow-hidden hover:border-gradientStart transition-all duration-300 transform hover:scale-105">
                <div className="aspect-video bg-black">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/YOUR_VIDEO_ID_6"
                    title="Feature Demo 6"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4">
                  <h3 className="text-white font-semibold text-lg mb-2">
                    Goal Setting
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Set and achieve your learning objectives
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-4xl mx-auto mt-20 text-center">
            <div className="bg-gradient-to-r from-gradientStart/10 to-gradientEnd/10 rounded-2xl border border-gradientStart/20 p-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Start Learning?
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Join thousands of students already using LearnFlow
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-gradientStart to-gradientEnd text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-gradientStart/50 transition-all duration-300 transform hover:scale-105">
                Get Started Free
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Demo