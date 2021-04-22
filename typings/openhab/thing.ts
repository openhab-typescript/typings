import javaList from "../java/javaList";
import javaMap from "../java/javaMap";
import Channel from "./channel";

// https://www.openhab.org/javadoc/latest/org/openhab/core/thing/thing
export default interface Thing
{
    getChannel(challenId: string) : Channel | undefined;
    getChannels(): javaList<Channel>;
    getLabel() : string | undefined;
    getProperties(): javaMap<string, string>;
    getStatus(): unknown;
    isEnabled(): boolean;
}