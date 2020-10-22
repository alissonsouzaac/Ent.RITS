export interface IClientRepository<T> {
    save(repository: T): Promise<T>
    getAll(): Promise<T[] | undefined>
    getById(id: String): Promise<T | undefined>
    search(search: Object): Promise<T[] | undefined>
    delete(name: String): Promise<T | undefined>
}