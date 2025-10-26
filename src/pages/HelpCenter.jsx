import { useState } from 'react'
import LiquidEther from '../components/LiquidEther'

function HelpCenter() {
  const [openSection, setOpenSection] = useState(null)

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index)
  }

  const helpSections = [
    {
      title: "Sync LMS Calendar",
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-white font-semibold text-lg mb-3">For Blackboard Learn:</h4>
            <ol className="list-decimal list-inside space-y-2 text-gray-300">
              <li>Go to your Blackboard Calendar</li>
              <li>Click "Settings" or the gear icon</li>
              <li>Click "Share Calendar"</li>
              <li>Copy the URL that ends with ".ics"</li>
            </ol>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-3">For Canvas:</h4>
            <ol className="list-decimal list-inside space-y-2 text-gray-300">
              <li>Login via web browser (not mobile app)</li>
              <li>Go to Calendar tab</li>
              <li>Click "Calendar Feed"</li>
              <li>Copy the link</li>
            </ol>
          </div>

          <div className="bg-card border border-blue-500/30 rounded-lg p-4 mt-4">
            <div className="flex items-start gap-3">
              <div>
                <p className="text-blue-300 font-semibold mb-1">Privacy Note:</p>
                <p className="text-gray-400 text-sm">This URL contains a private key. Don't share it with others.</p>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="text-white font-semibold text-lg mb-3">Paste Your Calendar Feed URL</h4>
            <input 
              type="text" 
              placeholder="Paste your calendar feed URL here"
              className="w-full bg-background border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gradientStart transition-colors"
            />
            <div className="flex items-center gap-2 mt-3">
              <input type="checkbox" id="skip-duplicates" className="w-4 h-4" defaultChecked />
              <label htmlFor="skip-duplicates" className="text-gray-300 text-sm">
                Skip duplicate events (recommended)
              </label>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Known Issue: Typing Input Bug",
      content: (
        <div className="space-y-4">
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
            <div>
              <p className="text-yellow-300 font-semibold mb-2">Issue Description:</p>
              <p className="text-gray-300">
                Sometimes you may not be able to type in input fields within the app. The cursor appears, but no text is entered when you type.
              </p>
            </div>
          </div>

          <div className="bg-gradientStart/10 border border-gradientStart/30 rounded-lg p-4">
            <div>
              <p className="text-gradientStart font-semibold mb-2">Quick Fix:</p>
              <ol className="list-decimal list-inside space-y-2 text-gray-300">
                <li>Click on any other application or window on your computer</li>
                <li>Click back into the LearnFlow app</li>
                <li>Try typing again - it should now work</li>
              </ol>
            </div>
          </div>

          <div className="bg-card border border-gray-700 rounded-lg p-4">
            <p className="text-gray-400 text-sm">
              <span className="text-white font-semibold">Note:</span> This is a known issue we're actively working to resolve. 
              The temporary workaround above should allow you to continue using the app without major disruption. 
              We appreciate your patience as we work on a permanent fix.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Getting Started with LearnFlow",
      content: (
        <div className="space-y-6">
          <p className="text-gray-300 text-lg">
            LearnFlow is your comprehensive AI-powered learning platform. Here's an overview of all the features available to help you succeed:
          </p>

          <div className="space-y-8">
            {/* AI Study Sessions */}
            <div>
              <h4 className="text-white font-semibold text-xl mb-3">AI Study Sessions</h4>
              <p className="text-gray-300 mb-3">
                Silent, non-intrusive monitoring across all applications that automatically captures and analyzes your study content.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li>• Automatic content capture with intelligent analysis</li>
                <li>• AI evaluation of material importance and exam probability</li>
                <li>• Auto-generated comprehensive study guides</li>
                <li>• Engagement tracking with session timers</li>
                <li>• Privacy-first design (excludes banking, passwords, sensitive apps)</li>
              </ul>
            </div>

            {/* Universal Text Highlighter */}
            <div>
              <h4 className="text-white font-semibold text-xl mb-3">Universal Text Highlighter & Screen Capture</h4>
              <p className="text-gray-300 mb-3">
                Capture text from anywhere on your screen with Google Cloud Vision OCR technology.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li>• Works across ANY application (browsers, PDFs, native apps)</li>
                <li>• Manual screen capture with click-and-drag selection</li>
                <li>• AI-powered instant explanations</li>
                <li>• Link highlights to projects for organization</li>
                <li>• All notes feed into AI Chat Assistant as context</li>
              </ul>
            </div>

            {/* Document Summary */}
            <div>
              <h4 className="text-white font-semibold text-xl mb-3">Universal Document Summary</h4>
              <p className="text-gray-300 mb-3">
                Summarize content from any application with a global hotkey.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li>• Multi-format support: PDFs, web pages, Word docs, presentations</li>
                <li>• Three summary levels: Quick, Detailed, Deep Analysis</li>
                <li>• Summaries linkable to projects</li>
                <li>• Summary history with export options</li>
              </ul>
            </div>

            {/* Practice & Testing */}
            <div>
              <h4 className="text-white font-semibold text-xl mb-3">Smart Practice & Testing</h4>
              <p className="text-gray-300 mb-3">
                Comprehensive testing suite with AI-generated content and performance tracking.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li>• AI-Generated Flashcards with spaced repetition</li>
                <li>• Adaptive Practice Quizzes that adjust to your performance</li>
                <li>• Mock Exams with AI grading and detailed reports</li>
                <li>• Multiple question types and difficulty levels</li>
                <li>• Performance analytics by topic and question type</li>
              </ul>
            </div>

            {/* Live Notetaker */}
            <div>
              <h4 className="text-white font-semibold text-xl mb-3">Live AI Notetaker</h4>
              <p className="text-gray-300 mb-3">
                Real-time transcription during lectures with AI importance analysis.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li>• Real-time speech-to-text transcription</li>
                <li>• AI scores each segment for exam relevance</li>
                <li>• Automatic keyword extraction and categorization</li>
                <li>• Auto-generated session summaries</li>
                <li>• Link transcripts to projects for AI context</li>
              </ul>
            </div>

            {/* Project Management */}
            <div>
              <h4 className="text-white font-semibold text-xl mb-3">Project & Assignment Management</h4>
              <p className="text-gray-300 mb-3">
                Organize your courses and assignments with AI-powered insights.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li>• Create classes with detailed metadata and schedules</li>
                <li>• Upload and AI-parse syllabi for automatic organization</li>
                <li>• Assignment tracking with difficulty assessment</li>
                <li>• Time breakdown and success strategies</li>
                <li>• Comprehensive project dashboard with week navigator</li>
              </ul>
            </div>

            {/* Syllabus Intelligence */}
            <div>
              <h4 className="text-white font-semibold text-xl mb-3">Syllabus Intelligence & Week Tracking</h4>
              <p className="text-gray-300 mb-3">
                Upload your syllabus and let AI extract schedules, topics, and grading information.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li>• AI extracts weekly schedule and topics</li>
                <li>• Automatic calculation of current week in term</li>
                <li>• Dynamic week display throughout the app</li>
                <li>• Manual override for breaks and irregular schedules</li>
              </ul>
            </div>

            {/* Calendar */}
            <div>
              <h4 className="text-white font-semibold text-xl mb-3">Calendar & Event Management</h4>
              <p className="text-gray-300 mb-3">
                Full calendar interface with automatic class schedule sync and learning preview.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li>• Month, week, day, and list views</li>
                <li>• Classes from syllabus auto-populate calendar</li>
                <li>• Click events to see what you'll be learning that week</li>
                <li>• Workload visualization and assignment clustering</li>
                <li>• ICS export to Google Calendar & Outlook</li>
              </ul>
            </div>

            {/* AI Chat Assistant */}
            <div>
              <h4 className="text-white font-semibold text-xl mb-3">Multi-Pipeline AI Chat Assistant</h4>
              <p className="text-gray-300 mb-3">
                The brain of LearnFlow - contextually aware from multiple data sources.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li>• Pulls data from mock exams, flashcards, practice quizzes</li>
                <li>• Access to all your linked notes and highlights</li>
                <li>• Knows current week topics from your syllabus</li>
                <li>• Aware of upcoming deadlines and assignments</li>
                <li>• Understands your study patterns and session history</li>
                <li>• Provides personalized, performance-aware tutoring</li>
              </ul>
            </div>

            {/* LMS Integration */}
            <div>
              <h4 className="text-white font-semibold text-xl mb-3">LMS & Calendar Synchronization</h4>
              <p className="text-gray-300 mb-3">
                Sync with your school's learning management system.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li>• Canvas LMS integration</li>
                <li>• Zoom meeting import</li>
                <li>• ICS calendar import from any LMS</li>
                <li>• Automatic assignment and deadline sync</li>
              </ul>
            </div>
          </div>
        </div>
      )
    }
  ]

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
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-4">
              Help <span className="bg-gradient-to-r from-gradientStart to-gradientEnd bg-clip-text text-transparent">Center</span>
            </h1>
            <p className="text-gray-400 text-lg">
              Find answers and learn how to make the most of LearnFlow
            </p>
          </div>

          {/* Help Sections */}
          <div className="max-w-4xl mx-auto space-y-4">
            {helpSections.map((section, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl border border-gray-800 overflow-hidden hover:border-gray-700 transition-all duration-300"
              >
                {/* Section Header */}
                <button
                  onClick={() => toggleSection(index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <h3 className="text-xl font-semibold text-white">
                    {section.title}
                  </h3>
                  <svg
                    className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${
                      openSection === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Section Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openSection === index ? 'max-h-[5000px]' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-6 border-t border-gray-800">
                    <div className="pt-6">
                      {section.content}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Support */}
          <div className="max-w-4xl mx-auto mt-12 text-center">
            <div className="bg-card rounded-2xl border border-gray-800 p-8">
              <h3 className="text-2xl font-bold text-white mb-3">
                Still need help?
              </h3>
              <p className="text-gray-400 mb-6">
                Can't find what you're looking for? Our support team is here to help.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <button className="px-8 py-4 bg-gradient-to-r from-gradientStart to-gradientEnd text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-gradientStart/50 transition-all duration-300 transform hover:scale-105">
                  Contact Support
                </button>
                <button className="px-8 py-4 bg-card text-white font-semibold rounded-lg border border-gray-700 hover:border-gradientStart transition-all duration-300">
                  Report a Bug
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HelpCenter