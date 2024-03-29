'use strict'

const {
    Profile
} = require('../../schemas')

const profile = require('../profile.method')

Profile.find = jest.fn(()=> {
    return Promise.resolve(fakeData)
})

Profile.findOne = jest.fn(()=> {
    const data = fakeData.filter(v => v.username === 'dnm17')
    return Promise.resolve(data)
})

Profile.prototype.sort = jest.fn(function (obj) {
    return this.sort((a, b)=> a.name - b.name)
})

it('get data from profile collection', async()=> {
    const data = await profile.getData()
    expect(data).toBeDefined()
})

it('get data from profile collection by username', async ()=> {
    const data = await profile.getByUsername('dnm17')
    console.log(data)
    expect(data).toBeDefined()
})