let range ={
    from : 1, 
    to :10,
  
    [Symbol.asyncIterator](){
  
        return{
             current : this.from,
             last : this.to,
  
            async next(){
  
                await new Promise(resolve => setTimeout( resolve, 1000));
  
                if(this.current <= this.last){
                    return {done: false, value : this.current++};
                }else{
                    return {done: true}
                }
            }
        };
    }
  };
  
  (async () => {
    for await(let value of range){
        console.log(value);
        }
  
  })()
  


  // --------------- Example 2 ---------------
  async function* generatSome(start, end){
    for(let i = start ; i <= end; i++){
        await new Promise(resolve => setTimeout(resolve, 1000));
        yield i;
        };
    
    };
    
    (async () => {
        let generate = generatSome( 1, 10);
        for await(let value of generate){
            console.log(value);
            
        }
    })();


// --------------- Example 3 ---------------
let range ={
    from : 1, 
    to : 5,

    async *[Symbol.asyncIterator](){
        for(let value = this.from; value <= this.to; value++){
            await new Promise(resolev=> setTimeout(resolev, 1000));
            yield value;
        }
    }
};

(async () =>{
    for await (let i of range){
        console.log(i);
        
    }
})();