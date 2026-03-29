import { useEffect } from 'react'

// Atualiza <title> e <meta description> por página — importante para SEO e AISEO
export default function SEO({ title, description }) {
  useEffect(() => {
    const fullTitle = title
      ? `${title} — Dattoli Studio | Arquitetura & Interiores, Salvador BA`
      : 'Dattoli Studio | Arquitetura & Interiores, Avaliação de Imóveis — Salvador, Bahia'

    document.title = fullTitle

    let metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute('content', description || defaultDescription)
    }

    let ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', fullTitle)

    let ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) ogDesc.setAttribute('content', description || defaultDescription)
  }, [title, description])

  return null
}

const defaultDescription =
  'Dattoli Studio — escritório de arquitetura e interiores em Salvador, Bahia. ' +
  'Projetos residenciais e comerciais e avaliação técnica de imóveis. Atuação nacional.'
