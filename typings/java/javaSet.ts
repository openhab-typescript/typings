export default interface javaSet<T>
{
    add(e: T): boolean;
    clear(): void;
    contains(o: T): boolean;
    isEmpty(): boolean;
    remove(o: T): boolean;
    size(): number;
}