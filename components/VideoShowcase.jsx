import React, { useState, useEffect, useRef } from 'react'

const VideoShowcase = ({ sectionRef }) => {
  const [videos, setVideos] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [isMobile, setIsMobile] = useState(false)
  const [hoveredCard, setHoveredCard] = useState(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [selectedFilter, setSelectedFilter] = useState('All')
  const videoRef = useRef(null)

  // Fetch video metadata from Google Drive API
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('/api/drive')
        if (!response.ok) {
          throw new Error('Failed to fetch video metadata from Google Drive')
        }
        const data = await response.json()
        setVideos(data)
      } catch (error) {
        console.error('Error fetching videos:', error)
        // Fallback to empty array if fetch fails
        setVideos([])
      } finally {
        setLoading(false)
      }
    }

    fetchVideos()
  }, [])

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Handle 3D card effect
  const handleMouseMove = (e, index) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -10
    const rotateY = ((x - centerX) / centerX) * 10
    setMousePosition({ x: rotateX, y: rotateY })
  }

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 })
    setHoveredCard(null)
  }

  // Pause video when modal closes
  useEffect(() => {
    if (!selectedVideo && videoRef.current) {
      videoRef.current.pause()
    }

    // Also cleanup any mobile fullscreen video
    const mobileVideo = document.getElementById('mobile-fullscreen-video')
    if (mobileVideo) {
      mobileVideo.pause()
      mobileVideo.remove()
    }
  }, [selectedVideo])

  // Enter fullscreen on mobile when video is selected
  useEffect(() => {
    if (selectedVideo && isMobile) {
      const video = document.createElement('video')
      video.src = selectedVideo.videoUrl
      video.controls = true
      video.autoplay = true
      video.playsInline = true

      const handleFullscreenChange = () => {
        if (!document.fullscreenElement && !document.webkitFullscreenElement) {
          video.pause()
          video.currentTime = 0
          video.remove()
          setSelectedVideo(null)
          document.removeEventListener('fullscreenchange', handleFullscreenChange)
          document.removeEventListener('webkitfullscreenchange', handleFullscreenChange)
        }
      }

      video.addEventListener('fullscreenchange', handleFullscreenChange)
      video.addEventListener('webkitfullscreenchange', handleFullscreenChange)

      document.body.appendChild(video)

      const playAndFullscreen = async () => {
        try {
          await video.play()
          if (video.requestFullscreen) {
            await video.requestFullscreen()
          } else if (video.webkitEnterFullscreen) {
            video.webkitEnterFullscreen()
          }
        } catch (e) {
          console.error('Fullscreen failed:', e)
        }
      }

      playAndFullscreen()

      return () => {
        video.pause()
        if (document.body.contains(video)) {
          video.remove()
        }
        video.removeEventListener('fullscreenchange', handleFullscreenChange)
        video.removeEventListener('webkitfullscreenchange', handleFullscreenChange)
      }
    }
  }, [selectedVideo, isMobile])

  // Get unique filters from videos
  const filters = ['All', ...Array.from(new Set(videos.map(v => v.tag || 'Film')))]

  // Filter videos based on selected filter
  const filteredVideos = selectedFilter === 'All'
    ? videos
    : videos.filter(v => (v.tag || 'Film') === selectedFilter)

  if (loading) {
    return (
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <p className="mt-4 text-gray-600">Loading video projects...</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Video Production Showcase
        </h2>
        <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
          Explore my creative video editing and media production work
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedFilter === filter
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {filteredVideos.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No video projects available yet.</p>
            <p className="text-gray-400 text-sm mt-2">Check back soon for new content!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((video, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer transform transition-all duration-100 preserve-3d"
                style={{
                  transform: hoveredCard === index 
                    ? `perspective(1000px) rotateX(${mousePosition.x}deg) rotateY(${mousePosition.y}deg) scale(1.05)` 
                    : 'perspective(1000px) rotateX(0) rotateY(0) scale(1)',
                  transformStyle: 'preserve-3d'
                }}
                onMouseMove={(e) => {
                  setHoveredCard(index)
                  handleMouseMove(e, index)
                }}
                onMouseLeave={handleMouseLeave}
                onClick={() => setSelectedVideo(video)}
              >
                {/* Thumbnail */}
                <div className="relative aspect-video bg-gray-900">
                  {video.thumbnail ? (
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                      <svg className="w-16 h-16 text-white opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-blue-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                  {video.duration && (
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {typeof video.duration === 'number' 
                        ? `${Math.floor(video.duration / 60)}:${String(video.duration % 60).padStart(2, '0')}`
                        : video.duration}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{video.title}</h3>
                  {video.description && (
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{video.description}</p>
                  )}
                  
                  {video.tag && (
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-xs font-medium">
                        {video.tag}
                      </span>
                    </div>
                  )}
                  {video.tags && video.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {video.tags.map((tag, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Video Modal - Desktop Only */}
      {selectedVideo && !isMobile && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div className="relative w-full max-w-6xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-8 right-0 text-white text-xl font-bold hover:text-blue-400 transition-colors z-10"
            >
              ✕ Close
            </button>
            <div className="bg-black rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
              <video
                ref={videoRef}
                src={selectedVideo.videoUrl}
                controls
                autoPlay
                className="w-full max-h-[85vh]"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
            <div className="mt-3 text-white" onClick={(e) => e.stopPropagation()}>
              <h3 className="text-lg font-bold mb-1">{selectedVideo.title}</h3>
              <p className="text-gray-300 text-sm">{selectedVideo.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default VideoShowcase
