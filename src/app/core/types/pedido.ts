export interface Pedido {
    id?: number,
    livroId: number | undefined,
    usuarioId: string | undefined,
    qtd: number,
    valor: number
}