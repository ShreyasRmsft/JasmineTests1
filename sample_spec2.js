describe('first set', () => {

    jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;

    beforeAll(() => {
        console.log("before all.");
    })

    beforeEach(() => {
        console.log("before each.");
    })

    it('Test method 1', () => {
        pending();
        expect(true).toBe(true);
    });

    describe('nested set', () => {
        beforeAll(() => {
    
        })
    
        beforeEach(() => {
            //do something
        })
    
        it('Test method 1', () => {
            expect(true).toBe(true);
        });
    
        it('Test method 2', () => {
            expect(true).toBe(false);
        });
    
        it('Test method 3', () => {
            expect(true).toBe(true);
        });
    
        it('Test method 4', () => {
            expect(true).toBe(false);
        });
    
        afterEach(() => {
            //do something
        })
    
        afterAll(() => {
            //expect(true).toBe(false);
        })
    })

    it('Test method 2', () => {
        pending();
        expect(true).toBe(false);
    });

    it('Test method 3', () => {
        console.log("bleh belh \n bleh bleh")
    });

    it('Test method 4', () => {
        console.error("this is a custom error")
        expect(true).toBe(false);
    });

    it('Test method 5', () => {
        expect(true).toBe(true);
    });

    afterEach(() => {
        //do something
    })

    afterAll(() => {
        //do something
    })
})