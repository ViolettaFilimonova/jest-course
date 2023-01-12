const sum = require('./sum.js')

describe('exemple test', () => {
   
   it('should 1+2', () => {
      let result = sum(1,2)
      expect(result).toBe(3)
   })

   it('object assignment', () => {
      const obj = {}
      expect(obj).toEqual({})
   })
})

describe('null', () => {
   it('null', () => {
      const n = 0
      expect(n).toBeFalsy()
   })
})

