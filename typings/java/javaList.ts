// https://docs.oracle.com/javase/8/docs/api/java/util/List.html
export default interface javaList<T>
{
    add(e: T): boolean;
    clear(): void;
    contains(o: any): boolean;
    get(index: number): T;
    indexOf(o: any): number;
    isEmpty(): boolean;
    lastIndex(o: any): number;
    remove(o: any): boolean;
    set(index: number, element: T) : T;
    size(): boolean;
}