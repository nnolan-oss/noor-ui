function findMatch<T = string>(data: T[] | undefined, find: T | undefined, defaultValue: T): T {
  if (!data || find === undefined) return defaultValue;
  const founded = data?.findIndex((el) => el === find);
  return founded >= 0 ? find : defaultValue;
}

export default findMatch;
