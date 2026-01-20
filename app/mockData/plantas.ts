import React from 'react';

export interface Planta {
  id: string;
  nombreProfesional: string;
  nombreCotidiano: string;
  color: string;
  tamano: 'Pequeña' | 'Mediana' | 'Grande';
  uso: string[];
  sensacion: string[];
  cuidado: 'Muy fácil' | 'Fácil' | 'Intermedio';
  luz: 'Mucha luz natural' | 'Luz media' | 'Poca luz';
  petFriendly: boolean;
  descripcion: string;
  caracteristicas: string[];
  imagen: string;
  precio: number;
}

export interface CategoriaPlantas {
  nombre: string;
  plantas: Planta[];
}

export interface SeccionPlantas {
  nombre: string;
  descripcion: string;
  imagen: string;
  imagenSlug?: string;
  alt: string;
  categorias: CategoriaPlantas[];
}

// Plantas base con todas sus características
const plantasBase: Planta[] = [
  {
    id: '1',
    nombreProfesional: 'Sansevieria trifasciata',
    nombreCotidiano: 'Lengua de suegra',
    color: 'Verde oscuro con rayas amarillas',
    tamano: 'Mediana',
    uso: ['Purificadora de aire', 'Decorativa'],
    sensacion: ['Orden', 'Calma'],
    cuidado: 'Muy fácil',
    luz: 'Poca luz',
    petFriendly: false,
    descripcion: 'Planta muy resistente que purifica el aire eliminando toxinas',
    caracteristicas: ['Resistente a sequía', 'Bajo mantenimiento', 'Ideal para principiantes'],
    imagen: '/plants/LenguaDeSuegra.jpg',
    precio: 4500
  },
  {
    id: '2',
    nombreProfesional: 'Epipremnum aureum',
    nombreCotidiano: 'Potus',
    color: 'Verde con manchas amarillas',
    tamano: 'Mediana',
    uso: ['Purificadora de aire', 'Decorativa'],
    sensacion: ['Frescura', 'Vitalidad'],
    cuidado: 'Muy fácil',
    luz: 'Luz media',
    petFriendly: false,
    descripcion: 'Planta trepadora que crece rápidamente y purifica el ambiente',
    caracteristicas: ['Crecimiento rápido', 'Fácil propagación', 'Trepadora'],
    imagen: '/plants/potus.jpg',
    precio: 3500
  },
  {
    id: '3',
    nombreProfesional: 'Aloe vera',
    nombreCotidiano: 'Aloe vera o sábila',
    color: 'Verde grisáceo',
    tamano: 'Mediana',
    uso: ['Medicinal (uso tradicional)', 'Purificadora de aire'],
    sensacion: ['Calma', 'Natural'],
    cuidado: 'Fácil',
    luz: 'Mucha luz natural',
    petFriendly: false,
    descripcion: 'Planta medicinal con propiedades curativas para la piel',
    caracteristicas: ['Gel curativo', 'Resistente', 'Propiedades antiinflamatorias'],
    imagen: '/plants/aloeVera.jpg',
    precio: 4200
  },
  {
    id: '4',
    nombreProfesional: 'Lavandula angustifolia',
    nombreCotidiano: 'Lavanda',
    color: 'Morado',
    tamano: 'Mediana',
    uso: ['Aromática', 'Medicinal (uso tradicional)'],
    sensacion: ['Calma', 'Relax'],
    cuidado: 'Intermedio',
    luz: 'Mucha luz natural',
    petFriendly: true,
    descripcion: 'Planta aromática que promueve la relajación y el sueño',
    caracteristicas: ['Aroma relajante', 'Repelente natural', 'Flores decorativas'],
    imagen: '/plants/Lavanda.jpg',
    precio: 4800
  },
  {
    id: '5',
    nombreProfesional: 'Mentha spicata',
    nombreCotidiano: 'Menta',
    color: 'Verde brillante',
    tamano: 'Pequeña',
    uso: ['Comestible', 'Aromática', 'Medicinal (uso tradicional)'],
    sensacion: ['Frescura', 'Energía'],
    cuidado: 'Fácil',
    luz: 'Luz media',
    petFriendly: true,
    descripcion: 'Hierba aromática ideal para cocina y té',
    caracteristicas: ['Crecimiento rápido', 'Aroma refrescante', 'Uso culinario'],
    imagen: '/plants/menta.jpg',
    precio: 2500
  },
  {
    id: '6',
    nombreProfesional: 'Chlorophytum comosum',
    nombreCotidiano: 'Cinta',
    color: 'Verde con líneas blancas',
    tamano: 'Pequeña',
    uso: ['Purificadora de aire', 'Decorativa'],
    sensacion: ['Frescura', 'Natural'],
    cuidado: 'Muy fácil',
    luz: 'Luz media',
    petFriendly: true,
    descripcion: 'Planta colgante que elimina formaldehído del aire',
    caracteristicas: ['Colgante', 'Propagación fácil', 'Muy resistente'],
    imagen: '/plants/cinta.jpg',
    precio: 2800
  },
  {
    id: '7',
    nombreProfesional: 'Ficus lyrata',
    nombreCotidiano: 'Ficus lira',
    color: 'Verde oscuro',
    tamano: 'Grande',
    uso: ['Decorativa', 'Purificadora de aire'],
    sensacion: ['Orden', 'Natural'],
    cuidado: 'Intermedio',
    luz: 'Luz media',
    petFriendly: false,
    descripcion: 'Árbol de interior con hojas grandes y elegantes',
    caracteristicas: ['Hojas grandes', 'Elegante', 'Requiere espacio'],
    imagen: '/plants/ficusLira.jpg',
    precio: 12000
  },
  {
    id: '8',
    nombreProfesional: 'Monstera deliciosa',
    nombreCotidiano: 'Costilla de Adán',
    color: 'Verde brillante',
    tamano: 'Grande',
    uso: ['Decorativa', 'Purificadora de aire'],
    sensacion: ['Vitalidad', 'Natural'],
    cuidado: 'Fácil',
    luz: 'Luz media',
    petFriendly: false,
    descripcion: 'Planta tropical con hojas perforadas características',
    caracteristicas: ['Hojas únicas', 'Crecimiento vertical', 'Tropical'],
    imagen: '/plants/costillaDeAdan.jpg',
    precio: 15000
  },
  {
    id: '9',
    nombreProfesional: 'Rosmarinus officinalis',
    nombreCotidiano: 'Romero',
    color: 'Verde grisáceo',
    tamano: 'Mediana',
    uso: ['Comestible', 'Aromática', 'Medicinal (uso tradicional)'],
    sensacion: ['Energía', 'Frescura'],
    cuidado: 'Fácil',
    luz: 'Mucha luz natural',
    petFriendly: true,
    descripcion: 'Hierba aromática que mejora la memoria y concentración',
    caracteristicas: ['Aroma intenso', 'Uso culinario', 'Propiedades estimulantes'],
    imagen: '/plants/romero.jpg',
    precio: 3200
  },
  {
    id: '10',
    nombreProfesional: 'Spathiphyllum wallisii',
    nombreCotidiano: 'Espatifilo',
    color: 'Verde oscuro con flores blancas',
    tamano: 'Mediana',
    uso: ['Purificadora de aire', 'Decorativa'],
    sensacion: ['Calma', 'Relax'],
    cuidado: 'Fácil',
    luz: 'Poca luz',
    petFriendly: false,
    descripcion: 'Planta que florece y purifica el aire eficientemente',
    caracteristicas: ['Flores blancas', 'Bajo mantenimiento', 'Purificadora'],
    imagen: '/plants/Espatifilo.jpg',
    precio: 5200
  },
  {
    id: '11',
    nombreProfesional: 'Crassula ovata',
    nombreCotidiano: 'Árbol de jade',
    color: 'Verde jade',
    tamano: 'Mediana',
    uso: ['Decorativa'],
    sensacion: ['Orden', 'Calma'],
    cuidado: 'Muy fácil',
    luz: 'Mucha luz natural',
    petFriendly: false,
    descripcion: 'Suculenta que simboliza prosperidad y buena suerte',
    caracteristicas: ['Suculenta', 'Resistente', 'Larga duración'],
    imagen: '/plants/arbolDeJade.jpg',
    precio: 3800
  },
  {
    id: '12',
    nombreProfesional: 'Ocimum basilicum',
    nombreCotidiano: 'Albahaca',
    color: 'Verde brillante',
    tamano: 'Pequeña',
    uso: ['Comestible', 'Aromática'],
    sensacion: ['Frescura', 'Energía'],
    cuidado: 'Fácil',
    luz: 'Mucha luz natural',
    petFriendly: true,
    descripcion: 'Hierba culinaria esencial con aroma característico',
    caracteristicas: ['Uso culinario', 'Aroma intenso', 'Crecimiento rápido'],
    imagen: '/plants/albahaca.jpg',
    precio: 2200
  },
  {
    id: '13',
    nombreProfesional: 'Zamioculcas zamiifolia',
    nombreCotidiano: 'Zamioculca',
    color: 'Verde oscuro brillante',
    tamano: 'Mediana',
    uso: ['Decorativa', 'Purificadora de aire'],
    sensacion: ['Orden', 'Natural'],
    cuidado: 'Muy fácil',
    luz: 'Poca luz',
    petFriendly: false,
    descripcion: 'Planta extremadamente resistente, casi indestructible',
    caracteristicas: ['Muy resistente', 'Bajo mantenimiento', 'Ideal para oficinas'],
    imagen: '/plants/Zamioculca.jpg',
    precio: 5500
  },
  {
    id: '14',
    nombreProfesional: 'Plectranthus scutellarioides',
    nombreCotidiano: 'Coleo',
    color: 'Multicolor (rojo, verde, amarillo)',
    tamano: 'Mediana',
    uso: ['Decorativa'],
    sensacion: ['Vitalidad', 'Energía'],
    cuidado: 'Fácil',
    luz: 'Luz media',
    petFriendly: true,
    descripcion: 'Planta con hojas coloridas que añade vida a cualquier espacio',
    caracteristicas: ['Hojas coloridas', 'Fácil cuidado', 'Versátil'],
    imagen: '/plants/Coleo.jpg',
    precio: 3400
  },
  {
    id: '15',
    nombreProfesional: 'Calathea orbifolia',
    nombreCotidiano: 'Calathea',
    color: 'Verde con rayas plateadas',
    tamano: 'Mediana',
    uso: ['Decorativa'],
    sensacion: ['Calma', 'Natural'],
    cuidado: 'Intermedio',
    luz: 'Luz media',
    petFriendly: true,
    descripcion: 'Planta con hojas decorativas que se mueven durante el día',
    caracteristicas: ['Hojas decorativas', 'Movimiento diurno', 'Humedad alta'],
    imagen: '/plants/Calathea.jpg',
    precio: 6800
  },
  {
    id: '16',
    nombreProfesional: 'Pachira aquatica',
    nombreCotidiano: 'Árbol del dinero',
    color: 'Verde brillante',
    tamano: 'Grande',
    uso: ['Decorativa'],
    sensacion: ['Orden', 'Vitalidad'],
    cuidado: 'Fácil',
    luz: 'Luz media',
    petFriendly: true,
    descripcion: 'Árbol ornamental que simboliza prosperidad y buena fortuna',
    caracteristicas: ['Tronco trenzado', 'Simbólico', 'Fácil cuidado'],
    imagen: '/plants/arbolDelDinero.jpg',
    precio: 11000
  },
  {
    id: '17',
    nombreProfesional: 'Dracaena marginata',
    nombreCotidiano: 'Dracaena',
    color: 'Verde con bordes rojos',
    tamano: 'Grande',
    uso: ['Purificadora de aire', 'Decorativa'],
    sensacion: ['Orden', 'Natural'],
    cuidado: 'Fácil',
    luz: 'Luz media',
    petFriendly: false,
    descripcion: 'Planta vertical que purifica el aire y añade altura al espacio',
    caracteristicas: ['Crecimiento vertical', 'Purificadora', 'Elegante'],
    imagen: '/plants/Dracaena.jpg',
    precio: 13000
  },
  {
    id: '18',
    nombreProfesional: 'Peperomia obtusifolia',
    nombreCotidiano: 'Peperomia',
    color: 'Verde brillante',
    tamano: 'Pequeña',
    uso: ['Decorativa'],
    sensacion: ['Frescura', 'Natural'],
    cuidado: 'Muy fácil',
    luz: 'Luz media',
    petFriendly: true,
    descripcion: 'Planta compacta ideal para espacios pequeños',
    caracteristicas: ['Compacta', 'Fácil cuidado', 'Ideal para escritorios'],
    imagen: '/plants/Peperomia_.jpg',
    precio: 2900
  },
  {
    id: '19',
    nombreProfesional: 'Hedera helix',
    nombreCotidiano: 'Hiedra',
    color: 'Verde oscuro',
    tamano: 'Mediana',
    uso: ['Purificadora de aire', 'Decorativa'],
    sensacion: ['Natural', 'Frescura'],
    cuidado: 'Fácil',
    luz: 'Luz media',
    petFriendly: false,
    descripcion: 'Planta trepadora que purifica el aire eficientemente',
    caracteristicas: ['Trepadora', 'Purificadora', 'Versátil'],
    imagen: '/plants/hiedra.jpg',
    precio: 4000
  },
  {
    id: '20',
    nombreProfesional: 'Philodendron hederaceum',
    nombreCotidiano: 'Filodendro',
    color: 'Verde brillante y rosa',
    tamano: 'Mediana',
    uso: ['Purificadora de aire', 'Decorativa'],
    sensacion: ['Vitalidad', 'Natural'],
    cuidado: 'Muy fácil',
    luz: 'Poca luz',
    petFriendly: false,
    descripcion: 'Planta trepadora muy fácil de cuidar',
    caracteristicas: ['Muy resistente', 'Trepadora', 'Bajo mantenimiento'],
    imagen: '/plants/Filodendro.jpg',
    precio: 4600
  }
];

// Función helper para buscar plantas por ID
const getPlantaById = (id: string): Planta => {
  const planta = plantasBase.find(p => p.id === id);
  if (!planta) throw new Error(`Planta con id ${id} no encontrada`);
  return planta;
};

// Secciones de plantas
export const seccionesPlantas: SeccionPlantas[] = [
  {
    nombre: 'POR AMBIENTE',
    descripcion: 'Encuentra plantas ideales para cada rincón de tu hogar',
    imagen: '/porAmbiente.jpg',
    imagenSlug: '/imagenSlug/porAmbienteSlug.jpg',
    alt: 'sección por ambiente',
    categorias: [
      {
        nombre: 'Interior',
        plantas: [
          getPlantaById('1'), // Lengua de suegra
          getPlantaById('2'), // Potus
          getPlantaById('6'), // Cinta
          getPlantaById('7'), // Ficus lira
          getPlantaById('8'), // Costilla de Adán
          getPlantaById('10'), // Espatifilo
          getPlantaById('13'), // Zamioculca
          getPlantaById('15'), // Calathea
          getPlantaById('17'), // Dracaena
          getPlantaById('18'), // Peperomia
          getPlantaById('20') // Filodendro
        ]
      },
      {
        nombre: 'Exterior',
        plantas: [
          getPlantaById('4'), // Lavanda
          getPlantaById('5'), // Menta
          getPlantaById('9'), // Romero
          getPlantaById('12'), // Albahaca
          getPlantaById('14'), // Coleo
          getPlantaById('16') // Árbol del dinero
        ]
      },
      {
        nombre: 'Balcón',
        plantas: [
          getPlantaById('2'), // Potus
          getPlantaById('4'), // Lavanda
          getPlantaById('5'), // Menta
          getPlantaById('6'), // Cinta
          getPlantaById('9'), // Romero
          getPlantaById('11'), // Árbol de jade
          getPlantaById('12'), // Albahaca
          getPlantaById('14') // Coleo
        ]
      },
      {
        nombre: 'Oficina / Escritorio',
        plantas: [
          getPlantaById('1'), // Lengua de suegra
          getPlantaById('6'), // Cinta
          getPlantaById('11'), // Árbol de jade
          getPlantaById('13'), // Zamioculca
          getPlantaById('18'), // Peperomia
          getPlantaById('20') // Filodendro
        ]
      },
      {
        nombre: 'Dormitorio',
        plantas: [
          getPlantaById('1'), // Lengua de suegra
          getPlantaById('4'), // Lavanda
          getPlantaById('6'), // Cinta
          getPlantaById('10'), // Espatifilo
          getPlantaById('15'), // Calathea
          getPlantaById('18') // Peperomia
        ]
      },
      {
        nombre: 'Cocina',
        plantas: [
          getPlantaById('3'), // aloe vera
          getPlantaById('5'), // Menta
          getPlantaById('9'), // Romero
          getPlantaById('12'), // Albahaca
          getPlantaById('18'), // Peperomia
          getPlantaById('19') // Hiedra
        ]
      },
      {
        nombre: 'Baño',
        plantas: [
          getPlantaById('2'), // Potus
          getPlantaById('6'), // Cinta
          getPlantaById('8'), // Costilla de Adán
          getPlantaById('10'), // Espatifilo
          getPlantaById('15'), // Calathea
          getPlantaById('20') // Filodendro
        ]
      }
    ]
  },
  {
    nombre: 'POR NIVEL DE CUIDADO',
    descripcion: 'Elige según tu experiencia y tiempo disponible',
    imagen: '/porCuidado1.jpg',
    imagenSlug: '/imagenSlug/porCuidadoSlug.jpg',
    alt: 'sección por nivel de cuidado',
    categorias: [
      {
        nombre: 'Muy fácil',
        plantas: [
          getPlantaById('1'), // Lengua de suegra
          getPlantaById('2'), // Potus
          getPlantaById('6'), // Cinta
          getPlantaById('11'), // Árbol de jade
          getPlantaById('13'), // Zamioculca
          getPlantaById('18'), // Peperomia
          getPlantaById('20') // Filodendro
        ]
      },
      {
        nombre: 'Fácil',
        plantas: [
          getPlantaById('3'), // aloe vera
          getPlantaById('5'), // Menta
          getPlantaById('8'), // Costilla de Adán
          getPlantaById('9'), // Romero
          getPlantaById('10'), // Espatifilo
          getPlantaById('12'), // Albahaca
          getPlantaById('14'), // Coleo
          getPlantaById('16'), // Árbol del dinero
          getPlantaById('17'), // Dracaena
          getPlantaById('19') // Hiedra
        ]
      },
      {
        nombre: 'Intermedio',
        plantas: [
          getPlantaById('4'), // Lavanda
          getPlantaById('7'), // Ficus lira
          getPlantaById('15') // Calathea
        ]
      }
    ]
  },
  {
    nombre: 'POR LUZ',
    descripcion: 'Selecciona según la iluminación de tu espacio',
    imagen: '/porLuz1.jpg',
    imagenSlug: '/imagenSlug/porLuzSlug.jpg',
    alt: 'sección por nivel de luz',
    categorias: [
      {
        nombre: 'Mucha luz natural',
        plantas: [
          getPlantaById('3'), // aloe vera
          getPlantaById('4'), // Lavanda
          getPlantaById('7'), // Ficus lira
          getPlantaById('9'), // Romero
          getPlantaById('11'), // Árbol de jade
          getPlantaById('12') // Albahaca
        ]
      },
      {
        nombre: 'Luz media',
        plantas: [
          getPlantaById('2'), // Potus
          getPlantaById('5'), // Menta
          getPlantaById('6'), // Cinta
          getPlantaById('8'), // Costilla de Adán
          getPlantaById('10'), // Espatifilo
          getPlantaById('14'), // Coleo
          getPlantaById('15'), // Calathea
          getPlantaById('16'), // Árbol del dinero
          getPlantaById('17'), // Dracaena
          getPlantaById('18'), // Peperomia
          getPlantaById('19') // Hiedra
        ]
      },
      {
        nombre: 'Poca luz',
        plantas: [
          getPlantaById('1'), // Lengua de suegra
          getPlantaById('10'), // Espatifilo
          getPlantaById('13'), // Zamioculca
          getPlantaById('20') // Filodendro
        ]
      }
    ]
  },
  {
    nombre: 'POR USO - FUNCIÓN',
    descripcion: 'Plantas que cumplen funciones específicas',
    imagen: '/porFuncion.jpg',
    imagenSlug: '/imagenSlug/porUsoSlug.jpg',
    alt: 'sección por uso - función',
    categorias: [
      {
        nombre: 'Decorativa',
        plantas: [
          getPlantaById('1'), // Lengua de suegra
          getPlantaById('2'), // Potus
          getPlantaById('6'), // Cinta
          getPlantaById('7'), // Ficus lira
          getPlantaById('8'), // Costilla de Adán
          getPlantaById('10'), // Espatifilo
          getPlantaById('11'), // Árbol de jade
          getPlantaById('13'), // Zamioculca
          getPlantaById('14'), // Coleo
          getPlantaById('15'), // Calathea
          getPlantaById('16'), // Árbol del dinero
          getPlantaById('17'), // Dracaena
          getPlantaById('18'), // Peperomia
          getPlantaById('19'), // Hiedra
          getPlantaById('20') // Filodendro
        ]
      },
      {
        nombre: 'Aromática',
        plantas: [
          getPlantaById('4'), // Lavanda
          getPlantaById('5'), // Menta
          getPlantaById('9'), // Romero
          getPlantaById('12') // Albahaca
        ]
      },
      {
        nombre: 'Medicinal (uso tradicional)',
        plantas: [
          getPlantaById('3'), // aloe vera
          getPlantaById('4'), // Lavanda
          getPlantaById('5'), // Menta
          getPlantaById('9') // Romero
        ]
      },
      {
        nombre: 'Purificadora de aire',
        plantas: [
          getPlantaById('1'), // Lengua de suegra
          getPlantaById('2'), // Potus
          getPlantaById('3'), // aloe vera
          getPlantaById('6'), // Cinta
          getPlantaById('7'), // Ficus lira
          getPlantaById('8'), // Costilla de Adán
          getPlantaById('10'), // Espatifilo
          getPlantaById('13'), // Zamioculca
          getPlantaById('17'), // Dracaena
          getPlantaById('19'), // Hiedra
          getPlantaById('20') // Filodendro
        ]
      },
      {
        nombre: 'Comestible',
        plantas: [
          getPlantaById('5'), // Menta
          getPlantaById('9'), // Romero
          getPlantaById('12') // Albahaca
        ]
      }
    ]
  },
  {
    nombre: 'POR SENSACIÓN - EMOCIÓN',
    descripcion: 'Descubre plantas que transmiten emociones',
    imagen: '/porSensacion.jpg',
    imagenSlug: '/imagenSlug/porSensacionSlug.jpg',
    alt: 'sección por sensación - emoción',
    categorias: [
      {
        nombre: 'Calma',
        plantas: [
          getPlantaById('1'), // Lengua de suegra
          getPlantaById('3'), // aloe vera
          getPlantaById('4'), // Lavanda
          getPlantaById('10'), // Espatifilo
          getPlantaById('15') // Calathea
        ]
      },
      {
        nombre: 'Frescura',
        plantas: [
          getPlantaById('2'), // Potus
          getPlantaById('5'), // Menta
          getPlantaById('6'), // Cinta
          getPlantaById('9'), // Romero
          getPlantaById('12'), // Albahaca
          getPlantaById('18'), // Peperomia
          getPlantaById('19') // Hiedra
        ]
      },
      {
        nombre: 'Energía',
        plantas: [
          getPlantaById('5'), // Menta
          getPlantaById('9'), // Romero
          getPlantaById('12'), // Albahaca
          getPlantaById('14') // Coleo
        ]
      },
      {
        nombre: 'Orden',
        plantas: [
          getPlantaById('1'), // Lengua de suegra
          getPlantaById('7'), // Ficus lira
          getPlantaById('11'), // Árbol de jade
          getPlantaById('13'), // Zamioculca
          getPlantaById('16'), // Árbol del dinero
          getPlantaById('17') // Dracaena
        ]
      },
      {
        nombre: 'Relax',
        plantas: [
          getPlantaById('4'), // Lavanda
          getPlantaById('10') // Espatifilo
        ]
      },
      {
        nombre: 'Natural',
        plantas: [
          getPlantaById('3'), // aloe vera
          getPlantaById('6'), // Cinta
          getPlantaById('8'), // Costilla de Adán
          getPlantaById('15'), // Calathea
          getPlantaById('18'), // Peperomia
          getPlantaById('19'), // Hiedra
          getPlantaById('20') // Filodendro
        ]
      },
      {
        nombre: 'Vitalidad',
        plantas: [
          getPlantaById('2'), // Potus
          getPlantaById('8'), // Costilla de Adán
          getPlantaById('14'), // Coleo
          getPlantaById('16'), // Árbol del dinero
          getPlantaById('20') // Filodendro
        ]
      }
    ]
  },
  {
    nombre: 'POR TAMAÑO',
    descripcion: 'Encuentra la planta perfecta según el espacio disponible',
    imagen: '/porTamanio2.jpg',
    imagenSlug: '/imagenSlug/porTamanioSlug.jpg',
    alt: 'sección por tamaño',
    categorias: [
      {
        nombre: 'Pequeña',
        plantas: [
          getPlantaById('5'), // Menta
          getPlantaById('6'), // Cinta
          getPlantaById('12'), // Albahaca
          getPlantaById('18') // Peperomia
        ]
      },
      {
        nombre: 'Mediana',
        plantas: [
          getPlantaById('1'), // Lengua de suegra
          getPlantaById('2'), // Potus
          getPlantaById('3'), // aloe vera
          getPlantaById('4'), // Lavanda
          getPlantaById('9'), // Romero
          getPlantaById('10'), // Espatifilo
          getPlantaById('11'), // Árbol de jade
          getPlantaById('13'), // Zamioculca
          getPlantaById('14'), // Coleo
          getPlantaById('15'), // Calathea
          getPlantaById('19'), // Hiedra
          getPlantaById('20') // Filodendro
        ]
      },
      {
        nombre: 'Grande',
        plantas: [
          getPlantaById('7'), // Ficus lira
          getPlantaById('8'), // Costilla de Adán
          getPlantaById('16'), // Árbol del dinero
          getPlantaById('17') // Dracaena
        ]
      }
    ]
  },
  {
    nombre: 'PET FRIENDLY',
    descripcion: 'Plantas seguras para convivir con tus mascotas',
    imagen: '/petFriendly1.jpg',
    imagenSlug: '/imagenSlug/petFriendlySlug1.png',
    alt: 'sección pet friendly',
    categorias: [
      {
        nombre: 'Apta para mascotas',
        plantas: [
          getPlantaById('4'), // Lavanda
          getPlantaById('5'), // Menta
          getPlantaById('6'), // Cinta
          getPlantaById('9'), // Romero
          getPlantaById('12'), // Albahaca
          getPlantaById('14'), // Coleo
          getPlantaById('15'), // Calathea
          getPlantaById('16'), // Árbol del dinero
          getPlantaById('18') // Peperomia
        ]
      }
    ]
  }
];

// Exportar todas las plantas base también
export { plantasBase };

