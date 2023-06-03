const basicLocale = 'en-US'

export const getCardState = (): Record<"balance" | "available", number> => {
  const balance = +(Math.random() * 1500).toFixed(2)
  const available = 1500 - balance
  return {
    balance,
    available
  }
}

export const currencyFormat = (value: number, locale = basicLocale): Intl.NumberFormat => {
  const formatter = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'USD'
  })
  return formatter.format(value)
}

export const compactFormat = (value: number) => {
  // return Intl.NumberFormat('en-US', {
  //   notation: "compact"
  // }).format(value)

  //OR

  return Math.abs(value) > 1000
    ? Math.sign(value) * ((Math.abs(value) / 1000).toFixed()) + 'K'
    : Math.sign(value) * Math.abs(value)
}

export const getFullMonth = (locale = basicLocale) => {
  const date = new Date()
  return date.toLocaleDateString(locale, {
    month: 'long'
  })
}

export const getDateFormat = (value: string, locale = basicLocale) => {
  const date = new Date(value)
  const today = new Date()
  const yesterday = new Date()
  yesterday.setDate(today.getDate() - 1)

  if (date.toDateString() === today.toDateString()) {
    return 'Today'
  } else if (date.toDateString() === yesterday.toDateString()) {
    return 'Yesterday'
  } else if (Math.abs(today - date) <= 7 * 24 * 60 * 60 * 1000) {
    return date.toLocaleDateString(locale, {weekday: "long"})
  } else {
    return date.toLocaleDateString(locale)
  }
}

export const getPointsCount = (dayNumber: number) => {
  const arr = [...Array(dayNumber)]

  const amount = arr.reduce((acc: [number, number, number], _, currentIndex) => {
    if (currentIndex < 2) {
      return acc = (currentIndex === 0 ? [2, 0, 2] : [2, 3, 5])
    }

    const first = acc[0]
    const second = acc[1] * 0.6
    const sum = first + second
    return acc = [second, sum, acc[2] + sum]
  }, [0, 0, 0]).at(-1)

  return compactFormat(amount)
}

export const getNumberDayBySeason = (value: string): number => {
  const date = new Date(value)
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDate()

  const isLeap = Math.sign(+(year % 100 === 0 ? (year % 400 === 0) : (year % 4 === 0)))

  const number = Math.round((new Date(year, month, day).getTime() - new Date(year, 0, 0).getTime()) / (24 * 60 * 60 * 1000))

  if (number <= 59 + isLeap) {
    return number + 31
  } else if (number > 59 + isLeap && number <= 151 + isLeap) {
    return number - 59 - isLeap
  } else if (number > 151 + isLeap && number <= 243 + isLeap) {
    return number - 151 - isLeap
  } else if (number > 243 + isLeap && number <= 334 + isLeap) {
    return number - 243 - isLeap
  }

  return number - 336 + isLeap
}

export const calculatePoints = (data: string = Date()) => {
  const dayNumber = getNumberDayBySeason(data)
  return getPointsCount(dayNumber)
}

export const getRandomDarkHexColor = () => {
  const letters = '0123456789ABCDEF'
  let color = '#'

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * 16)
    color += letters[randomIndex]
  }

  return color
}