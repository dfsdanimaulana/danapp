'use strict'

const fetchData = jest.fn()

test('the data is peanut butter', async () => {
    await expect(fetchData()).resolves.toBe('peanut butter');
});