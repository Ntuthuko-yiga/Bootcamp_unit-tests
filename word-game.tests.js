describe("Word Game Test", function(){

    it('It should return the longest word, shortest word and sum the length of each word in a sentence', function(){
        assert.equal('shipyard', longestWord('The dog jumped over the shipyard fence'), "longestWord failing...");
        assert.equal('barked', longestWord('The yellow dog barked loud'), "longestWord failing...");

        assert.equal('the', shortestWord('The dog jumped over the shipyard fence'), "shortestWord failing...");
        assert.equal('up', shortestWord('The dog barked loudly at the cat up the tree'), "shortestWord failing...");

        assert.equal(32, wordLengths('The dog jumped over the shipyard fence'), "wordLengths is failing...");
        assert.equal(18, wordLengths('The dog barked loudly'), "wordLengths failing...");

    });
    
});