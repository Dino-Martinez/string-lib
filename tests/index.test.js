const lib = require('../src/index')

test('Sanity', () => {
  expect(0).toEqual(0)
})

test('capitalization', () => {
  expect(lib.capitalize('hello')).toEqual('Hello')
})

test('lowercasing', () => {
  expect(lib.lowercase('HELLO')).toEqual('hELLO')
})

test('allCaps', () => {
  expect(lib.allCaps('hello')).toEqual('HELLO')
})

test('capitalize words', () => {
  expect(lib.capitalizeWords('hello my name is dino')).toEqual('Hello My Name Is Dino')
})

test('removeSpaces', () => {
  expect(lib.removeSpaces('    hello my name is dino    ')).toEqual('hello my name is dino')
})

test('replaceSpaces', () => {
  expect(lib.replaceSpaces('    hello my name is dino    ', '&')).toEqual('hello&my&name&is&dino')
})

test('kebobCase', () => {
  expect(lib.kebobCase('    hello my name is dino    ')).toEqual('hello-my-name-is-dino')
})

test('snakeCase', () => {
  expect(lib.snakeCase('    hello my name is dino    ')).toEqual('hello_my_name_is_dino')
})

test('shift', () => {
  expect(lib.shift('hello')).toEqual('ohell')
  expect(lib.shift('hello', 3)).toEqual('llohe')
})

test('makeHashTag', () => {
  expect(lib.makeHashTag('hello my name is dino')).toEqual(['#Hello', '#Name', '#Dino'])
})

test('isEmpty', () => {
  expect(lib.isEmpty('')).toEqual(true)
  expect(lib.isEmpty('not')).toEqual(false)
})