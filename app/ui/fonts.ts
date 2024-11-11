/**
 * Importando fondos de google
 * La carga es optima porque se descargan en el servidor y evita
 * hacer peticiones de red
 */

import { Inter, Lusitana } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin']
})
