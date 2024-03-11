import {EnkaClient, TextAssets, DynamicTextAssets } from "enka-network-api"

export function ConvertObjectToJson(obj) {
  if (typeof obj !== "object" || obj === null || obj === undefined) return obj;
  const entries = Object.entries(obj)
    .filter(([key, value]) => !key.startsWith("_") && !(value instanceof EnkaClient)) // filter out private properties and EnkaClient instance, which has circular object
    .map(([key, value]) => [key, ConvertObjectToJson(value)]);
  if (obj instanceof TextAssets) {
    entries.push(["text", obj instanceof DynamicTextAssets ? obj.getNullableReplacedText() : obj.getNullable()]); // convert TextAssets to string
  }
  return Object.fromEntries(entries);
}