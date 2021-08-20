const sum = require('./sum')

// Numbers

test('add 1+2 to equal 3', () => {
    const value = sum(2, 2)

    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4)
    expect(value).toEqual(4)
    expect(value).toBeGreaterThan(3)
    expect(value).toBeGreaterThanOrEqual(3.5)
    expect(value).toBeLessThan(5)
    expect(value).toBeLessThanOrEqual(4.5)
})

test('null', () => {
    const n = null

    expect(n).toBeNull()
    expect(n).toBeDefined()
    expect(n).not.toBeUndefined()
    expect(n).not.toBeTruthy()
    expect(n).toBeFalsy()
})

test('zero', () => {
    const z = 0

    expect(z).not.toBeNull()
    expect(z).toBeDefined()
    expect(z).not.toBeUndefined()
    expect(z).not.toBeTruthy()
    expect(z).toBeFalsy()
})

test('adding floating point numbers', () => {
    const value = 0.1 + 0.2
    //expect(value).toBe(0.3); This won't work because of rounding error
    expect(value).toBeCloseTo(0.3) // This works.
})

// String

test('there is no I in team', () => {
    expect('team').not.toMatch(/I/)
})

test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/)
})

// Array and iterables

// You can check if an array or iterable contains a particular item using toContain

const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk',
]

test('the shopping list has milk on it', () => {
    expect(shoppingList).toContain('milk')
    expect(new Set(shoppingList)).toContain('milk')
})

// Exceptions

function compileAndroidCode() {
    throw new Error('you are using the wrong JDK')
}

test('compiling android goes as expected', () => {
    expect(() => compileAndroidCode()).toThrow()
    expect(() => compileAndroidCode()).toThrow(Error)

    // You can also use the exact error message or a regexp
    expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK')
    expect(() => compileAndroidCode()).toThrow(/JDK/)
})

// Promises .resolves /. rejects

/*
test('the data is peanut butter', () => {
    return expect(fetchData()).resolves.toBe('peanut butter')
})

test('the fetch fails with an error', () => {
  return expect(fetchData()).rejects.toMatch('error')
})
*/

// Async / Await

/*
test('the data is peanut butter', async () => {
    const data = await fetchData()
    expect(data).toBe('peanut butter')
})

test('the fetch fails with an error', async () => {
    expect.assertions(1)
    try {
        await fetchData()
    } catch (e) {
        expect(e).toMatch('error')
    }
})

You can combine async and await with .resolves or .rejects.


test('the data is peanut butter', async () => {
    await expect(fetchData()).resolves.toBe('peanut butter')
})

test('the fetch fails with an error', async () => {
    await expect(fetchData()).rejects.toMatch('error')
})

*/