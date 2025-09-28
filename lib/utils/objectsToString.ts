export const objectsToString = (object: Record<string, any> | string): string => {
  if(typeof object === "string") return object;
  if (!object || typeof object !== "object") return "";
  return Object.values(object).join(" ");
};
