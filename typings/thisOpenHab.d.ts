import ScriptExtension from "./openhab/scriptExtension";
import TypeOf from "./util/typeof";
import State from "./openhab/state";
import javaMap from "./java/javaMap";
import ItemRegistry from "./openhab/itemRegistry"
import * as Enum from "./openhab/enums"
import javaFile from "./java/javaFile";
import javaFiles from "./java/javaFiles";
import javaPath from "./java/javaPath";
import javaPaths from "./java/javaPaths";
import javaURLEncoder from "./java/javaURLEncoder";
import ThingRegistry from "./openhab/thingRegistry";
import Command from "./openhab/command"
import RuleRegistry from "./openhab/ruleRegistry";
import EventsRegistry from "./openhab/eventRegistry";
import ThingActions from "./openhab/thingActions";
import * as Types from "./openhab/stateTypes";

export default interface thisOpenHab
{
    // See https://www.openhab.org/docs/configuration/jsr223.html#default-preset-importpreset-not-required

    State: State;
    Command: Command;
    URLEncoder: javaURLEncoder;
    File: javaFile;
    Files: javaFiles;
    Path: javaPath;
    Paths: javaPaths;
    
    // Command Types
    IncreaseDecreaseType: TypeOf<Enum.IncreaseDecreaseType>;
    DECREASE : Enum.IncreaseDecreaseType;
    INCREASE : Enum.IncreaseDecreaseType;

    OnOffType : TypeOf<Enum.OnOffType>;
    ON : Enum.OnOffType;
    OFF : Enum.OnOffType;

    OpenClosedType: TypeOf<Enum.OpenClosedType>;
    OPEN : Enum.OpenClosedType;
    CLOSED : Enum.OpenClosedType;

    StopMoveType: TypeOf<Enum.StopMoveType>;
    STOP : Enum.StopMoveType;
    MOVE : Enum.StopMoveType;

    UpDownType: TypeOf<Enum.UpDownType>;
    UP : Enum.UpDownType;
    DOWN : Enum.UpDownType;

    UnDefType : TypeOf<Enum.UnDefType>;
    NULL: Enum.UnDefType;
    UNDEF: Enum.UnDefType;

    RefreshType: TypeOf<Enum.RefreshType>;
    REFRESH : Enum.RefreshType;

    NextPreviousType: TypeOf<Enum.NextPreviousType>;
    NEXT : Enum.NextPreviousType;
    PREVIOUS : Enum.NextPreviousType;
    
    PlayPauseType: TypeOf<Enum.PlayPauseType>;
    PLAY : Enum.PlayPauseType;
    PAUSE : Enum.PlayPauseType;
    
    RewindFastforwardType: TypeOf<Enum.RewindFastforwardType>;
    REWIND : Enum.RewindFastforwardType;
    FASTFORWARD : Enum.RewindFastforwardType;

    // State Types
    QuantityType:     TypeOf<Types.QuantityType>;
    StringListType:   TypeOf<Types.StringListType>;
    RawType:          TypeOf<Types.RawType>;
    DateTimeType:     TypeOf<Types.DateTimeType>;
    DecimalType:      TypeOf<Types.DecimalType>;
    HSBType:          TypeOf<Types.HSBType>;
    PercentType:      TypeOf<Types.PercentType>;
    PointType:        TypeOf<Types.PointType>;
    StringType:       TypeOf<Types.StringType>;
    SIUnits:          TypeOf<Types.SIUnits>;
    ImperialUnits:    TypeOf<Types.ImperialUnits>;
    MetricPrefix:     TypeOf<Types.MetricPrefix>;
    Units:            TypeOf<Types.Units>;
    BinaryPrefix:     TypeOf<Types.BinaryPrefix>;

    // State Access
    items: javaMap<string, State>;
    ir: ItemRegistry;
    itemRegistry: ItemRegistry;
    things: ThingRegistry;
    rules: RuleRegistry;
    events: EventsRegistry;
    actions: ThingActions;
    scriptExtensions: ScriptExtension;
    se: ScriptExtension;

}