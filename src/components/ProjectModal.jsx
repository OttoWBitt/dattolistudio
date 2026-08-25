import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import '../styles/modal.css'

export default function ProjectModal({ project, onClose }) {
  const [index, setIndex] = useState(0)
  const images = project.coverImage
    ? [project.coverImage, ...(project.images || []).filter(img => img !== project.coverImage)]
    : (project.images || [])

  useEffect(() => {
    setIndex(0)
  }, [project])

  useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight' && images.length > 1) setIndex(i => (i + 1) % images.length)
      if (e.key === 'ArrowLeft' && images.length > 1) setIndex(i => (i - 1 + images.length) % images.length)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, images.length])

  return (
    <motion.div
      className="modal-overlay"
      onClick={e => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
    >
      <motion.div
        className="modal"
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 12 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <button className="modal__close" onClick={onClose} aria-label="Fechar">✕</button>

        <div className="modal__image-wrap">
          {images.length > 0 ? (
            <img
              className="modal__image"
              src={images[index]}
              alt={`${project.title} — foto ${index + 1} de ${images.length}`}
            />
          ) : (
            <div className="modal__image-placeholder">
              <span>Imagens em breve</span>
            </div>
          )}

          {images.length > 1 && (
            <>
              <button
                className="modal__nav modal__nav--prev"
                onClick={() => setIndex(i => (i - 1 + images.length) % images.length)}
                aria-label="Foto anterior"
              >
                ‹
              </button>
              <button
                className="modal__nav modal__nav--next"
                onClick={() => setIndex(i => (i + 1) % images.length)}
                aria-label="Próxima foto"
              >
                ›
              </button>
              <div className="modal__counter">{index + 1} / {images.length}</div>
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}
