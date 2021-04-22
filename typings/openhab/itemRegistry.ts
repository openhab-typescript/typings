import javaCollection from "../java/javaCollection";
import Item from "./item";
export default interface ItemRegistry
{
    getItem( name: string) : Item;
    getItemByPattern(patttern: string) : Item;
    getItems() : javaCollection<Item>;
    getItemsOfType(type: string) : javaCollection<Item>;
    getItems(pattern: string) : javaCollection<Item>;
    getItemsByTagAndType(type: string, ...tags:string[]) : javaCollection<Item>;
    
    remove(itemName: string, recursive: boolean): ItemRegistry;
}