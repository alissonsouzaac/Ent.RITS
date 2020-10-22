export interface IRepository<T> {
    save(repository: T): Promise<T>
}