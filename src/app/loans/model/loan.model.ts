export interface Iloan {
	id: number
	usuarioId: number
	libroId: number
	fechaPrestamo: Date
	fechaDevolucion: Date
	entregado?: number
}