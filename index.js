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

//console.log("ONE");
//for(i =0; i<10000; i++)
//{
//console.log("i="+i);
//}
//setTimeout(() => {console.log("TWO")}, 2000);
//console.log("THREE")

const container = document.getElementById('container');
const btn = document.getElementById('btn');
     //const loader = document.createElement('h2');
     //container.appendChild(loader);

     const h1= document.createElement('h1');
     console.log(h1);
     h1.innerText = "Education";

     const h4= document.createElement('h4');
     console.log(h4);
     h4.innerText = "B.Tech in Computer Science and Engineering\nABES ENGINEERING COLLEGE (AFFILIATED TO AKTU)\nCGPA: 8.78 (Sem I), 9.14 (Sem II)\nISCE/ISC (Class X & XII)\nST. FIDELIS COLLEGE- LUCKNOW\n95 percentile (Class X), 92 percentile (Class XII)\nSubject Topper — Mathematics and English";
    

     const h11= document.createElement('h1');
     console.log(h11);
     h11.innerText = "Technical Skills";

     const h41= document.createElement('h4');
     console.log(h41);
     h41.innerText ="Languages: Java, C++\nfrontend: HTML, CSS, UI/UX Design\nCore CS: Data Structures & Algorithms, OOPs, Problem Solving\nTools: Git, Github, Canva";
//console.log(container);
//console.log(btn);



        function ping(){
          //try{
            //loader.innerHTML = "<h2>Loading...</h2>";
            //container.innerHTML = '<h2 style="color:red">Welcome to DOM</h2>';
            //container.appendChild(h1);
          //}catch(e){
            //loader.innerHTML ='<h2 style="color:red">Server is down</h2>';
          //}
          //finally{
            //loader.innerHTML = "";
          //}   
                 //alert('server ping')
          container.innerHTML ="<h1 style='text-align: center;'>Samridhi Khanna- Resume</h1>";
          container.appendChild(h1);
          container.appendChild(h4);
          const hr = document.createElement('hr');
          container.appendChild(hr);
          container.appendChild(h11);
          container.appendChild(h41);
}
btn.addEventListener('click', ping);