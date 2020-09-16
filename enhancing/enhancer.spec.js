const enhancer = require('./enhancer.js');
// test away!

describe('enhancer.js', () => {
    describe('.repair()', () => {
        it('can be repaired', function () {
            const item = {
                name: "George Washington's Cavalry Saber",
                durability: "87",
                enhancement: 0,
            }

            const repairedItem = enhancer.repair(item)

            expect(repairedItem.durability).toBe(100)
        })
    })
})