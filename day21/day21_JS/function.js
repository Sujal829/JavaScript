function getAddress(){
    console.log('get address called!')
}
getAddress();

const getNameFromDB = function(){
    // DB connection and retrive name from DB
    let nm = 'ABC';
    // cb(nm);
}
getNameFromDB();

(function(){
    console.log('IIFE called');
})();

// example of anonymous functions
obj={
    greet: function(){
        
    },
    salute: ()=>{}
}
(()=>{})();
(function(){})();

[].map(()=>{});
[].map(function(){});