import { notFound } from 'next/navigation'
import { seccionesPlantas } from '../mockData/plantas'
import { nombreSeccionToSlug } from '../lib/slug'
import SectionPageClient from './SectionPageClient'

interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return seccionesPlantas.map((seccion) => ({
    slug: nombreSeccionToSlug(seccion.nombre)
  }))
}

export default async function SectionPage({ params }: PageProps) {
  const { slug } = await params
  const seccion = seccionesPlantas.find((s) => nombreSeccionToSlug(s.nombre) === slug)

  if (!seccion) {
    notFound()
  }

  return <SectionPageClient seccion={seccion} />
}
