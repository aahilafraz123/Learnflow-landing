import { useState, useEffect, useRef } from 'react'

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null)
  const [visibleItems, setVisibleItems] = useState([])
  const sectionRef = useRef(null)

  const faqs = [
    {
      question: "What makes LearnFlow different from other study apps?",
      answer: "LearnFlow combines AI-powered study sessions with intelligent content capture across all your applications. It silently monitors your study sessions, generates comprehensive guides, and uses multi-pipeline AI that knows your performance data, notes, and current course topics to provide truly personalized tutoring."
    },
    {
      question: "How does the Universal Text Highlighter work?",
      answer: "Our system-wide highlighter uses Google Cloud Vision OCR to capture text from ANY application - browsers, PDFs, native apps. Just select text anywhere on your screen and get instant AI-powered explanations. All highlights link to your projects and become context for the AI chat assistant."
    },
    {
      question: "Can LearnFlow help me with exam preparation?",
      answer: "Absolutely! LearnFlow generates AI-powered flashcards with spaced repetition, adaptive practice quizzes that adjust to your performance, and full-length mock exams with AI grading. All your performance data feeds into the AI chat, so it knows exactly where you need help."
    },
    {
      question: "How does the Syllabus Intelligence feature work?",
      answer: "Upload your syllabus PDF and LearnFlow automatically extracts weekly schedules, topics, and grading rubrics. It calculates what week of the term you're in and shows you what you'll be learning. Your calendar displays upcoming topics, helping you prepare ahead of time."
    },
    {
      question: "What is the Multi-Pipeline AI Chat Assistant?",
      answer: "Our AI chat is the brain of LearnFlow - it has context from 5 pipelines: your performance data (exam scores, quiz results), linked notes and highlights, syllabus topics for your current week, upcoming assignments, and study session history. This means the AI knows your weak areas and can reference your actual materials to provide targeted help."
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index)
            setVisibleItems(prev => {
              if (!prev.includes(index)) {
                return [...prev, index].sort((a, b) => a - b)
              }
              return prev
            })
          }
        })
      },
      { threshold: 0.3, rootMargin: '-100px 0px -50px 0px' }
    )

    const items = sectionRef.current?.querySelectorAll('.faq-item')
    items?.forEach(item => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section ref={sectionRef} className="relative py-16 overflow-hidden">
      <div className="container mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-white mb-4">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-gradientStart to-gradientEnd bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Everything you need to know about LearnFlow
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index
            const isVisible = visibleItems.includes(index)
            const isEven = index % 2 === 0

            return (
              <div
                key={index}
                data-index={index}
                className="faq-item"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible 
                    ? 'translateX(0) translateY(0)' 
                    : `translateX(${isEven ? '-50px' : '50px'}) translateY(20px)`,
                  filter: isVisible ? 'blur(0px)' : 'blur(10px)',
                  transition: `all 0.6s ease-out ${index * 0.1}s`
                }}
              >
                <div
                  className={`bg-card rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden ${
                    isActive 
                      ? 'border-gradientStart shadow-lg shadow-gradientStart/20' 
                      : 'border-gray-800 hover:border-gray-700'
                  }`}
                  onClick={() => toggleFAQ(index)}
                >
                  {/* Question */}
                  <div className="flex items-start gap-4 p-6">
                    {/* Number Badge */}
                    <div
                      className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center font-bold transition-all duration-300 ${
                        isActive
                          ? 'bg-gradient-to-r from-gradientStart to-gradientEnd text-white scale-110'
                          : 'bg-gray-800 text-gray-400'
                      }`}
                      style={{
                        transform: isVisible 
                          ? isActive ? 'scale(1.1) rotate(360deg)' : 'scale(1) rotate(0deg)'
                          : 'scale(0.5) rotate(-180deg)',
                        transition: 'all 0.5s ease-out'
                      }}
                    >
                      {index + 1}
                    </div>

                    {/* Question Text */}
                    <div className="flex-1">
                      <h3 className={`text-lg font-semibold transition-colors duration-300 ${
                        isActive ? 'text-white' : 'text-gray-300'
                      }`}>
                        {faq.question}
                      </h3>
                    </div>

                    {/* Toggle Icon */}
                    <div className="flex-shrink-0">
                      <svg
                        className={`w-6 h-6 transition-all duration-300 ${
                          isActive 
                            ? 'text-gradientStart rotate-180' 
                            : 'text-gray-500 rotate-0'
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
                    </div>
                  </div>

                  {/* Answer */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isActive ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="px-6 pb-6 pt-0">
                      <div className="pl-14">
                        {/* Gradient Divider */}
                        <div
                          className="h-0.5 bg-gradient-to-r from-gradientStart to-gradientEnd mb-4 transition-all duration-500 origin-left"
                          style={{
                            transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
                            opacity: isActive ? 1 : 0
                          }}
                        />
                        
                        {/* Answer Text */}
                        <p
                          className="text-gray-400 leading-relaxed transition-all duration-500"
                          style={{
                            opacity: isActive ? 1 : 0,
                            transform: isActive ? 'translateY(0)' : 'translateY(-10px)'
                          }}
                        >
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Still have questions CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-6">
            Still have questions?
          </p>
          <button className="px-8 py-4 bg-card text-white font-semibold rounded-lg border border-gray-700 hover:border-gradientStart transition-all duration-300 hover:shadow-lg hover:shadow-gradientStart/20">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  )
}

export default FAQ