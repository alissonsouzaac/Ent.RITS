export interface IAdminRepository<T> {
    save(repository: T): Promise<T>
    
}