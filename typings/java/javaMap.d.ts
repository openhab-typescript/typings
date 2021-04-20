import javaCollection from "./javaCollection";

export default interface javaMap<K, V>
{
    clear(): void;
    isEmpty(): boolean;
    put(e: K): V;
    remove(o: K): V;
    size(): number;

    values(): javaCollection<V>
}