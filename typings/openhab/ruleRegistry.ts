import javaSet from "../java/javaSet";
import Rule from "./rule";

export default interface RuleRegistry
{
    add(rule: Rule) : Rule;
    getByTag(tag: string | undefined) : javaSet<Rule>;
    getByTags(...tags: string[]): javaSet<Rule>;
}