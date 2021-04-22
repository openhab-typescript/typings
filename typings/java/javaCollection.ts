// https://docs.oracle.com/javase/8/docs/api/java/util/Collection.html
export default interface javaCollection<T>
{
    add(e: T): boolean;
    clear(): void;
    contains(o: T): boolean;
    isEmpty(): boolean;
    remove(o: T): boolean;
    size(): number;
}