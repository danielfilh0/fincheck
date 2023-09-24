export function capitalizeFirstLetter(value: string) {
  return value.replace(/^\w/, (firstLetter) => firstLetter.toUpperCase())
}