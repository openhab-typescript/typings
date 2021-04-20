import Channel from "./channel";
import Thing from "./thing";

// https://www.openhab.org/javadoc/latest/org/openhab/core/thing/thingregistry
export default interface ThingRegistry
{
    get(thingUid: string): Thing | undefined;
    getChannel(channelUid: string) : Channel | undefined;
    remove(thingUid: string) : Thing | undefined
} 