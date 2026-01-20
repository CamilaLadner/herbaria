/**
 * Convierte el nombre de una sección a un slug para la URL.
 * Ej: "POR AMBIENTE" -> "por-ambiente", "POR USO - FUNCIÓN" -> "por-uso-funcion"
 */
export function nombreSeccionToSlug(nombre: string): string {
  return nombre
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Eliminar acentos
    .replace(/\s+/g, '-') // Reemplazar espacios con guiones
    .replace(/[^a-z0-9-]/g, '') // Eliminar caracteres especiales
    .replace(/-+/g, '-') // Colapsar guiones múltiples
    .replace(/^-|-$/g, '') // Quitar guiones al inicio/final
}
