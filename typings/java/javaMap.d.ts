import javaCollection from "./javaCollection";

export default interface javaMap<K, V>
{
    clear(): void;
    isEmpty(): boolean;
    put(key: K, value: V):V;
    get(key: K) : V | undefined;
    remove(o: K): V;
    size(): number;
    values(): javaCollection<V>
}