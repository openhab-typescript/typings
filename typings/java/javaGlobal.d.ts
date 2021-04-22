import TypeOf from "../util/typeof";

export default interface javaGlobal
{
    type(classIdentifier: string) : TypeOf<any> | undefined
}