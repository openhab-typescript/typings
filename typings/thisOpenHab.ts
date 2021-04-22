import defaultPreset from "./importPreset/defaultPreset";
import javaGlobal from "./java/javaGlobal";

export default interface thisOpenHab extends defaultPreset
{
    Java: javaGlobal
}