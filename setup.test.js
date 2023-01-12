let animal = []

beforeEach(() => {
    animals = ['Cat', 'Dog', 'Monkey']
})


describe('testing array animals', () => {
    it('add animal to end of array', () => {
        const animal = 'tiger'
        animals.push(animal)
        expect(animals[animals.length - 1]).toBe(animal)
    })
    it('add animal to start of array', () => {
        const animal = 'zebra'
        animals.unshift(animal)
        expect(animals[0]).toBe(animal)
    })
    it('length array shoold have 3 animals', () => {
        expect(animals.length).toBe(3)
    })
})