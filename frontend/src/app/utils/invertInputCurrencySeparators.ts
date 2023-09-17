export function invertSeparators(value: string) {
  if (typeof value === 'number') return value
  
  return value.replace(/,/g, '').replace('.', ',')
}