// console.log("Hello, welcome");

//const sum= function sum(a,b){
  //  return Math.sqrt(a)+ Math.sqrt(b);
//}
//console.log(sum(4,9));

//const sum= (a,b) => {return (a+b);};
//console.log(sum(4,9));

//IIFE (Immediately Invoked Function Expression)
//(()=> {
//    console.log("Hello, welcome IIFE");
//})();

//var a=1825;
//if (a>1000){
//    var a=2518;
//    console.log("Value of a inside block=" + a);
//}
//    console.log("Value of a outside block=" + a);

//function sum(a,b){
//    return a + b;
//}

//Callback function- clbk is a callback function
//function msgWithSum(clbk,msg){
  //  const result = clbk(1800, 25);
  //  console.log("Hiee," + msg + " your result is= " + result);
//}
//msgWithSum(sum,"Samridhi");

//function login(error,msg){
    //if (error){
    //    console.log("Error: " + error);
    //} else {
    //    console.log("Message: " + msg);
  //  }   
//}

//function loginHandler(username,password,clbk){
     //   if(username == "Samridhi" && password == "1825"){
        //    clbk(null,"Login successful");
      //  }else{
    //        clbk("Invalid username or password",null);
  //      }
//}

//loginHandler("Samridhi","1825",login);

console.log("ONE")
setTimeout(() => {console.log("TWO")}, 2000);
console.log("THREE")