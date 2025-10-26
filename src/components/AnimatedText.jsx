import { useEffect, useRef, useState } from 'react'

const AnimatedText = ({ children, delay = 50, className = '' }) => {
  const [inView, setInView] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(ref.current)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  // Split text into words, handling React elements
  const getWords = (element) => {
    if (typeof element === 'string') {
      return element.split(' ').map((word, i) => ({ word, type: 'text', key: i }))
    }
    
    if (Array.isArray(element)) {
      let words = []
      element.forEach((child, idx) => {
        if (typeof child === 'string') {
          child.split(' ').forEach((word, i) => {
            words.push({ word, type: 'text', key: `${idx}-${i}` })
          })
        } else if (child.props && child.props.children) {
          const childWords = typeof child.props.children === 'string' 
            ? child.props.children.split(' ')
            : [child.props.children]
          
          childWords.forEach((word, i) => {
            words.push({ 
              word, 
              type: 'element', 
              className: child.props.className,
              key: `${idx}-${i}` 
            })
          })
        }
      })
      return words
    }
    
    return []
  }

  const words = getWords(children)

  return (
    <h2 ref={ref} className={className}>
      {words.map((item, index) => (
        <span
          key={item.key}
          className={`inline-block ${item.className || ''}`}
          style={{
            animation: inView ? `fadeInBlur 0.6s ease-out ${index * delay}ms forwards` : 'none',
            opacity: 0,
            filter: 'blur(10px)',
          }}
        >
          {item.word}
          {index < words.length - 1 && '\u00A0'}
        </span>
      ))}
    </h2>
  )
}

export default AnimatedText