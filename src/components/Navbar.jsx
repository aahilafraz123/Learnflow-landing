function Navbar() {
    return (
      <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-5xl px-6">
        <div className="bg-card/80 backdrop-blur-xl rounded-full border border-gray-800 px-8 py-4 shadow-2xl">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl font-bold">
                <span className="text-white">Learn</span>
                <span className="bg-gradient-to-r from-gradientStart to-gradientEnd bg-clip-text text-transparent">
                  Flow
                </span>
              </h1>
            </div>
  
            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium">
                Home
              </a>
              <a href="#help" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium">
                Help Center
              </a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium">
                Contact us
              </a>
              <a href="#demo" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium">
                Demo
              </a>
              <button className="px-6 py-2.5 bg-gradient-to-r from-gradientStart to-gradientEnd text-white font-semibold rounded-full hover:shadow-lg hover:shadow-gradientStart/50 transition-all duration-300 transform hover:scale-105 text-sm">
                Sign in/Sign Up
              </button>
            </div>
  
            {/* Mobile Menu Button */}
            <button className="md:hidden text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    )
  }
  
  export default Navbar