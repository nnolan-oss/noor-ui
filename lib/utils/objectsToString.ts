export const objectsToString = (object: Record<string, any>): string => {
  if (!object || typeof object !== "object") return "";
  return Object.values(object).join(" ");
};
