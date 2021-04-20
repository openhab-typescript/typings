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

declare namespace openhabDefault
{
    // See https://www.openhab.org/docs/configuration/jsr223.html#default-preset-importpreset-not-required

    const State: State;
    const Command: Command;
    const URLEncoder: javaURLEncoder;
    const File: javaFile;
    const Files: javaFiles;
    const Path: javaPath;
    const Paths: javaPaths;
    
    // Command Types
    const IncreaseDecreaseType: TypeOf<Enum.IncreaseDecreaseType>;
    const DECREASE : Enum.IncreaseDecreaseType;
    const INCREASE : Enum.IncreaseDecreaseType;

    const OnOffType : TypeOf<Enum.OnOffType>;
    const ON : Enum.OnOffType;
    const OFF : Enum.OnOffType;

    const OpenClosedType: TypeOf<Enum.OpenClosedType>;
    const OPEN : Enum.OpenClosedType;
    const CLOSED : Enum.OpenClosedType;

    const StopMoveType: TypeOf<Enum.StopMoveType>;
    const STOP : Enum.StopMoveType;
    const MOVE : Enum.StopMoveType;

    const UpDownType: TypeOf<Enum.UpDownType>;
    const UP : Enum.UpDownType;
    const DOWN : Enum.UpDownType;

    const UnDefType : TypeOf<Enum.UnDefType>;
    const NULL: Enum.UnDefType;
    const UNDEF: Enum.UnDefType;

    const RefreshType: TypeOf<Enum.RefreshType>;
    const REFRESH : Enum.RefreshType;

    const NextPreviousType: TypeOf<Enum.NextPreviousType>;
    const NEXT : Enum.NextPreviousType;
    const PREVIOUS : Enum.NextPreviousType;
    
    const PlayPauseType: TypeOf<Enum.PlayPauseType>;
    const PLAY : Enum.PlayPauseType;
    const PAUSE : Enum.PlayPauseType;
    
    const RewindFastforwardType: TypeOf<Enum.RewindFastforwardType>;
    const REWIND : Enum.RewindFastforwardType;
    const FASTFORWARD : Enum.RewindFastforwardType;

    // State Types
    const QuantityType:     TypeOf<Types.QuantityType>;
    const StringListType:   TypeOf<Types.StringListType>;
    const RawType:          TypeOf<Types.RawType>;
    const DateTimeType:     TypeOf<Types.DateTimeType>;
    const DecimalType:      TypeOf<Types.DecimalType>;
    const HSBType:          TypeOf<Types.HSBType>;
    const PercentType:      TypeOf<Types.PercentType>;
    const PointType:        TypeOf<Types.PointType>;
    const StringType:       TypeOf<Types.StringType>;
    const SIUnits:          TypeOf<Types.SIUnits>;
    const ImperialUnits:    TypeOf<Types.ImperialUnits>;
    const MetricPrefix:     TypeOf<Types.MetricPrefix>;
    const Units:            TypeOf<Types.Units>;
    const BinaryPrefix:     TypeOf<Types.BinaryPrefix>;

    // State Access
    const items: javaMap<string, State>;
    const ir: ItemRegistry;
    const itemRegistry: ItemRegistry;
    const things: ThingRegistry;
    const rules: RuleRegistry;
    const events: EventsRegistry;
    const actions: ThingActions;
    const scriptExtensions: ScriptExtension;
    const se: ScriptExtension;

}