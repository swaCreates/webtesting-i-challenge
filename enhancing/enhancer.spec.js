const {succeed, fail, repair} = require('./enhancer.js');

///////
describe('tests the success function', () => {

    it('tests that enhancement is increased by 1', () => {
        expect(succeed({
            name: 'item_a',
            enhancement: 18,
            durability: 0,
        })).toEqual({
            name: 'item_a',
            enhancement: 19,
            durability: 0,
        });
    });

    it('tests that durability stays at 0', () => {
        expect(succeed({
            name: 'item_b',
            enhancement: 18,
            durability: 0,
        })).not.toEqual({
            name: 'item_b',
            enhancement: 19,
            durability: 1,
        });
    });

    it('tests that enhancement does not increase over 21', () => {
        expect(succeed({
            name: 'item_c',
            enhancement: 20,
            durability: 0,
        })).not.toEqual({
            name: 'item_c',
            enhancement: 21,
            durability: 0,
        });
    });
});

////////
describe('tests the fail function', () => {

    it('tests if enhancement is < 15, reduces 5 from durability', () => {
        expect(fail({
            name: 'item_1',
            enhancement: 14,
            durability: 25,
        })).toEqual({
            name: 'item_1',
            enhancement: 14,
            durability: 20,
        });

        expect(fail({
            name: 'item_1',
            enhancement: 14,
            durability: 25,
        })).not.toEqual({
            name: 'item_1',
            enhancement: 14,
            durability: 19,
        });
    }); // it block

    it('tests if enhancement is > 15, reduces 10 from durability', () => {
        expect(fail({
            name: 'item_2',
            enhancement: 16,
            durability: 25,
        })).toEqual({
            name: 'item_2',
            enhancement: 16,
            durability: 15,
        });

        expect(fail({
            name: 'item_2',
            enhancement: 16,
            durability: 25,
        })).not.toEqual({
            name: 'item_2',
            enhancement: 16,
            durability: 20,
        });
    }); // it block

    it('tests if enhancement is > 16, reduces 1 from durability', () => {
        expect(fail({
            name: 'item_3',
            enhancement: 18,
            durability: 25,
        })).toEqual({
            name: 'item_3',
            enhancement: 18,
            durability: 24,
        });

        expect(fail({
            name: 'item_3',
            enhancement: 18,
            durability: 25,
        })).not.toEqual({
            name: 'item_3',
            enhancement: 18,
            durability: 23,
        });
    }); // it block

});

//////
describe('tests the repair function', () => {
    it('tests that durability is restored to 100', () => {
        expect(repair({
            name: 'repair_1',
            enhancement: 18,
            durability: 20,
        })).toEqual({
            name: 'repair_1',
            enhancement: 18,
            durability: 100,
        });
    });
});


