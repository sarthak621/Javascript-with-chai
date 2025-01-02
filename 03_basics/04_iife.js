//IMMEDIATELY INVOKED FUNCTION EXPRESSIONS {IIFE}

//named IIFE
(function chai(){         
    console.log("DB connected");
    
})();

//semicolon is imp here\

//with arrow func.

//unnamed IIFE
( ()=>{
       console.log("DB connection Two");
       
 })  ();

 //2.
 ( (name)=>{
    console.log(`DB connection Two ${name}`);
    
})  ('sarthak')




