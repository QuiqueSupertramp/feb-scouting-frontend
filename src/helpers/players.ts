export const formatPlayerName = (name: string) => {
  const nameOrdered = name.split(',').reverse().join(' ')
  return nameOrdered
    .trim()
    .split(' ')
    .map((s) => {
      const [firstLetter, ...restOfLetters] = s
      return `${firstLetter?.toUpperCase()}${restOfLetters.join('').toLowerCase()}`
    })
    .join(' ')
}
