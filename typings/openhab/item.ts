import javaList from "../java/javaList";
import javaSet from "../java/javaSet";
import State from "./state";

// based on https://github.com/openhab/openhab-core/blob/79edf2b9e643ad802c31b2e5f54edb93534277fd/bundles/org.openhab.core/src/main/java/org/openhab/core/items/Item.java#L42
export default interface Item 
{
    getState(): State;
    getName(): string;
    getType(): string;
    getAcceptedDataTypes(): javaList<State>;
    getGroupNames(): javaList<String>;
    getTags(): javaSet<String>;
    getLabel(): string | undefined;

    hasTag(tag: string): boolean;
    getCategory(): string | undefined;
    getStateDescription(locale: string | undefined): any | undefined;
    getCommandDescription(locale?:string): any | undefined;
}