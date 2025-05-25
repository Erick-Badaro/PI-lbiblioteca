export interface Pedido {
    id?: string,
    livroId: number | undefined,
    usuarioId: string | undefined,
    qtd: number,
    valor: number
}