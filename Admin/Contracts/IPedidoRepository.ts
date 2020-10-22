export interface IPedidoRepository<T> {
    search(search: Object): Promise<T[] | undefined>
    
}