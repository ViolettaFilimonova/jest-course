
const sum = require('./sum.js')

describe('exemple test', () => {
   
   it('should 1+2', () => {
      let result = sum(1,2)
      expect(result).toBe(3)
   })
})