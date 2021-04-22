import javaSet from "../java/javaSet";

// https://www.openhab.org/javadoc/latest/org/openhab/core/thing/channel
export default interface Channel
{
    getAcceptedItemType(): string | undefined;
    getDescription(): string | undefined;
    getKind(): unknown;
    getLabel(): string | undefined;
    getDefaultTags(): javaSet<String>;
    getChannelTypeUID(): unknown;
}