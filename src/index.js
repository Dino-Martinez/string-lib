const capitalize = (str) => {
  const arr = str.split('')
  arr[0] = arr[0].toUpperCase()
  return arr.join('')
}

const lowercase = (str) => {
  const arr = str.split('')
  arr[0] = arr[0].toLowerCase()
  return arr.join('')
}

const allCaps = (str) => str.toUpperCase()

const capitalizeWords = (str) => {
  const arr = str.split(' ')
  arr.forEach((word, index, arr) => {
    arr[index] = capitalize(word)
  })
  return arr.join(' ')
}

const removeSpaces = (str) => {
  str = str.trim()
  const arr = str.split(' ')
  str = arr.filter(word => word !== '').join(' ')
  return str
}

const replaceSpaces = (str, replacement) => {
  str = str.toLowerCase()
  str = removeSpaces(str)
  const arr = str.split(' ')
  return arr.join(replacement)
}

const kebobCase = (str) => replaceSpaces(str, '-')

const snakeCase = (str) => replaceSpaces(str, '_')

const camelCase = (str) => {
  str = removeSpaces(str)
  const arr = str.split(' ')
  arr.forEach((word, index, arr) => {
    arr[index] = capitalize(word)
  })
  arr[0] = lowercase(arr[0])
  return arr.join('')
}

const shift = (str, numShifts = 1) => {
  numShifts *= -1
  const shifted = str.slice(numShifts)
  return shifted + str.slice(0, numShifts)
}

const makeHashTag = (str) => {
  let arr = str.split(' ')
  if (arr.length > 3) {
    arr = arr.sort((a, b) => b.length - a.length)
    arr = arr.slice(0, 3)
  }

  str = capitalizeWords(arr.join(' '))
  arr = str.split(' ')
  arr.forEach((word, index, arr) => {
    arr[index] = '#' + word
  })
  return arr
}

const isEmpty = (str) => {
  str = str.trim()
  const arr = str.split('')
  let result = true
  arr.forEach(character => {
    if (character !== '\n' && character !== '\r' && character !== '\t') {
      result = false
    }
  })

  return result
}


module.exports = {
  capitalize,
  allCaps,
  lowercase,
  capitalizeWords,
  removeSpaces,
  replaceSpaces,
  camelCase,
  kebobCase,
  snakeCase,
  shift,
  makeHashTag,
  isEmpty
}
