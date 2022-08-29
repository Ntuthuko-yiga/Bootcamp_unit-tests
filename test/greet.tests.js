describe('Test greet function' , function(){
    it("It should return 'Hello, Ntuthuko' when called with 'Ntuthuko'" , function(){
        assert.equal("Hello, Ntuthuko", greet("Ntuthuko"), "this should  be true");
    });

    it("It should return 'Hello, Bob' when called with 'Bob'" , function(){
        assert.equal("Hello, Bob", greet("Bob"), "this should be true");
    });
});