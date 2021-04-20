import javaMap from "../java/javaMap";
import Command from "./command";
import Item from "./item";
import State from "./state";

export default interface EventsRegistry
{
    postUpdate(itemId: string, state: string): void;
    postUpdate(item: Item, state: number | string | State): void;

    sendCommand(itemId: string, state: string): void;
    sendCommand(item: Item, state: number | string | Command):void;

    storeStates(...items: Item[]):void;
    restoreStates(map: javaMap<Item, State>):void;
}