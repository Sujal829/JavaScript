// Palindrome No:
// let n = 121;
// let t=n;
// let r=0;
// let s=0;
// while(n>0)
// {
//     r=n%10; //121%10=1  12%10=2 1%10=1
//     s=r+(s*10);  //0*10=0+1 =1 1*10=10+2=12  12*10=120+1=121
//     n=parseInt(n/10); //121/10=12  12/10=1  1/10;
// }
// if(s==t)
// {
//     console.log("palindrome:",s);

// }
// else{
//     console.log("Not:",s)
// }

// Palindrome String
// let s = 'madam';
// let i= s.length-1;
// let rev='';
// while(i>=0)
// {
//     rev=rev+s[i];
//     i--;
// }
// if(s==rev)
// {
//     console.log("string is palindrome:",s);
// }
// else
// {
//     console.log("NOT palindrome:",s);
// }

// prime no
// let n=6;
// let c=0;
// for(i=2;i<n;i++) 
// {
//     if(n%i==0) 
//         {
//         c++;  
//     }
// }
// if(c==0)
// {
//     console.log("prime");
// }
// else
//     {
//     console.log("NOt-prime");
// }

//fibonacci series
//0 1 1 2 3 5 
// let n=5;
// let a=0;
// let b=1;
// let c=0;
// for(let i=1;i<=n;i++)
// {
//     c=a+b;//  c = 0+1 = 1 | c =1+1 =2 | c=1+2= 3 |c=2+3=5
//     a=b; // a= 1 |a=1 | a=2 | a=3
//     b=c; //b= 1 | b=2 | b=3 |b= 3
//     console.log(c); // 1 2 3 5
// } 

// factorial
// 5 = 5x4x3x2x1 =120
// 3= 3x2x1= 6
// 1x2x3x4x5x...20
// let n=3;
// let f=1;
// for(let i=1;i<=n;i++)
// {
//     f=f*i;  // f = 1x1= 1 | f= 1x2= 2 | f=2x3=6 | f=6x4=24 | f=24x5= 120
// }
// console.log("Factorial of no:",f);

//Even and odd no
// let n= 5;
// if(n%2!=0)
// {
//     console.log("this is odd no :",n);
// }
// else
// {
//     console.log("this is even no: ",n);
// }

//even odd no 1-10
// let n= 10;
// for(let i=1; i<=n; i++)
// {
//     if(i%2!=0)
//     {
//         console.log("Odd no:",i);
//     }
//     else
//     {
//         console.log("even no:",i);
//     }
// }

// display vowels form string
//sujal = u a
// a e i o u 
// let s ="sujal";

// for(let i=1 ; i<=s.length; i++)
// {
//     if(s[i]=='a'||s[i]=='e'||s[i]=='i'||s[i]=='o'||s[i]=='u')
//     {
//         console.log(s[i]);
//     }
// }

// leap year  4 100 400 //
// let n= 2004;
// if(n%4==0 || n%100!=0 && n%400==0 )
// {
//     console.log("given year is leap year:",n);
// }
// else
// {
//     console.log("Given year is not leap year:",n);
// }

// Perfect No:
// // 6 | 1 2 3 4 5  | 1+2+3=6
// let n=6;
// let sum=0;
// for(let j= 1; j<=50; j++)
// {  
//     sum=0;  
// for(let i=1; i<j;i++)
// {

//     if(j%i==0)
//     {
//         sum=sum+i;
//     }
// }
// if(sum==j)
// {
//     console.log("given no is perfect:",j);
// }
// // else{
// //     console.log("GIven no is NOt perfect:",j);
// // }
// }

// Perfect no:
//6 | 1 2 3 4 5 | 1 2 3 | 1+2+3=6
// let n=6;
// let sum =0;
// for(let i=1;i<n;i++)
// {
//     if(n%i==0)
//     {
//         sum=sum+i;
//     }
// }
// if(sum==n)
// {
//     console.log("given no is perfect:",n);
// }
// else{
//     console.log("given no is NOT-perfect:",n);
// }

//Armstrong number
//153 1x1x1=1 5x5x5=125 3x3x3= 27 125+1+27= 153
// let n=153;
// let r=0;
// let s=0;
// let t=n;
// while(n>0)
// {
//     r=n%10;  //r=153%10=3 | r=15%10=5 | r=1%10=1
//     s=s+(r*r*r);//s=0+(3x3x3) s=0+27=27 | s=27+(5x5x5)=27+125=152 | s=152+(1x1x1)=152+1=153
//     n=parseInt(n/10); // n=153/10 =15 | n=15/10=1 |n=1/10=0
// }
// if(t==s)
// {
//     console.log("Given no is armstrong :",s);
// }
// else
// {
//     console.log("Given no is NOT-armstrong :",s);
// }

// find the largest no in array

// let n=[5,3,7,2,8]; // n[0]=5
// let max=0;
// for(let i=0;i<n.length;i++)
// {
//     if(max<n[i]) // 0 < 5 | 5<3 | 5<7 | 7<2 | 7<8
//     {
//         max=n[i];  // max= 5  | max= 7 | max=8
//     }
// }
// console.log("Given no is max in array :",max);

// display min no in array
// let n=[5,3,7,2,8];
// let min=n[0];
// for(let i=1;i<n.length;i++)
// {
//     if(min>n[i])
//     {
//         min=n[i];
//     }
// }
// console.log("Given no is min in array :",min);


// display array in reverse 
// let n=[1,2,3,4,5];
// for(let i=n.length ; i>=0;i--)
// {
//     console.log(n[i]);
// }

//LCM of number
// let a=4;
// let b=6;
// let a1=1;
// for(let i=0;i<=10;i++)
// {
//     a1[i]=a*i;
//     console.log(a1[i]);
//     console.log(a1);
// }
// console.log(a1);

// swap 2 no 
// let a=5;
// let b=10;
// console.log(a,b);
// let t;
// t=a; // t= 5
// a=b; // a= 10
// b=t; // b= 5
// console.log(a,b);

// swap 2 no without using third variable
// a=5 b= 10 
// let a=15;
// let b=10;
// console.log(a,b);
// a=a+b;  //a = 5 + 10 = 15
// b=a-b; // b= 15 - 10 = 5
// a=a-b; // a= 15 - 5 = 10 
// console.log(a,b);


// console.log(typeof undefined == typeof null);
// console.log(null == undefined);

// let a = [1, 2, 3];
// a[10] = 99;
// console.log(a.length);

// let n=1234 //1+2+3+4=10
// let r=0;
// let sum=0;
// while(n>0)
//     {
//         r=n%10;
//         sum=sum+r;
//         n=parseInt(n/10);
//     }
//     console.log("Given no is sum of digits :",sum);  

// let s='hello world';
// let l=0;
// for(let i=0; s[i]!=undefined; i++)
// {
//     l++;
// }
// console.log(l);

// convert 1 char toupper case
// let str = "this is string";
// let arr = str.split(' ');
// let result = arr.map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
// console.log(result);

// let str = "this is a string out";
// let vowels = ['a', 'e', 'i', 'o', 'u'];
// let result = '';
// for (let i = 0; i < str.length; i++) {
//     if(vowels.includes(str[i]) && !result.includes(str[i])){
//         result += str[i]+' ';
//     }
// }
// console.log(result);
//
// let num = 12345;
// let str = num.toString().split("");
// let result = str.filter((n)=> n%2!=0).join("");
// console.log(Number(result));

// display only 1 occ no.
// let arr = [1 , 1, 2, 4, 3, 4, 5];
// let res = '';
// for(let i=0; i<arr.length; i++){
//     if(arr.lastIndexOf(arr[i])==arr.indexOf(arr[i]))
//         res+=arr[i]+" ";
// }
// console.log(res);
// let unique = [...new Set(arr)];

//arr.lastIndexOf(1)=1
//arr.indexOf(1)=0
//arr.lastIndexOf(2)=2
//arr.indexOf(2)=2

// sort array
// let arr = [1,7,3,9,20,4];
// console.log(arr.sort((a,b)=>(a-b)));

// sort the array without using built in function
// let arr = [1,7,3,9,20,4];
// for(let i=0; i<arr.length; i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[j]<arr[i]){
//             temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
//     }
// }
// console.log(arr);
// let arr = [1,7,3,9,20,4];
// let arr = [1,3,4,9,20,7];

// display max and second max from array
// let arr = [1,7,3,9,20,4];
// let max = 0;
// let secondmax = 0;
// for(let i=0; i<arr.length; i++){
//     if(max<arr[i]){  // 0 < 1 | 1 < 7 | 7 < 3 | 3 < 9 | 9 < 20 | 20 < 4
//        secondmax=max; //secondmax = 1 | secondmax = 7 | secondmax = 7 | secondmax = 9 | secondmax = 20 
//         max = arr[i]; //max = 1 | max = 7 | max = 7 | max = 9 | max = 20
//     }
//     else if(secondmax<arr[i] && arr[i]!=max){  // 1 < 3 | 7 < 3 | 7 < 9 | 9 < 20 | 9 < 4  && 3!=7  && 4 != 20 != 4 && 4 != 9 && 4 != 7 && 4 != 1    || 20<4   && 4 != 20
//          secondmax = arr[i]; // secondmax = 3 | secondmax = 3 | secondmax = 9 | secondmax = 20
//      }
// }
// console.log(max);
// console.log(secondmax);

// display occurance of each char from string
// let str = "hello world";
// let obj={};
// for(let i=0; i<str.length; i++){
//     if(obj[str[i]]){ 
//         obj[str[i]]++;
//     }
//     else{
//             obj[str[i]]=1;
//         }
//     }
//     console.log(obj);


// display duplicate elements from array
// let arr =[1,2,3,4,5,6,7,8,9,10]
// let dup=[];
// let dup=[];
// for(let i=0; i<arr.length; i++){
//     for(let j=i+1; j<arr.length; j++){
//         if(arr[i]==arr[j] && !dup.includes(arr[i])){
//             dup.push(arr[i]);
//         }
//     }
//     }
//     console.log(dup);

// display middle element from array


//  let str = "string@123";
//  let str2="";
// // o/p string123
// for(let i=0; i<str.length; i++){
//     if(str[i]=='@')
//         continue;
//     else
//         str2+=str[i];
// }
// console.log(str2);
// 2
// console.log(str.replace('@',''));

// let arr = [3,5,7,8];
// let min = Math.min(...arr);
// let max = Math.max(...arr);
// //console.log(min);
// //console.log(max);
// let arr2 = [];
// for(let i=min; i<max; i++){
//     if(!arr.includes(i))
//         arr2.push(i);
// }
// console.log(arr2);

//display middle element of array
// let arr = [1,2,3,4,5];
// let mid = parseInt(arr.length/2); 
// console.log(mid); // 2
// console.log(arr[mid]); // 3
// console.log(parseInt("abcd123"));  // NaN

// x=10;
// x=x++ + x++; // 
// console.log(x) // 

// // let str = "swiss"
// // OUTPUT = w

// let str="swiss";
// let i = str.indexOf('w');
// console.log(str[++i]); // i

// function a()
// {
//     console.log("hello")
// }

// function b()
// {
//     console.log("JS")
// }

// let c = a() + b();

// console.log(a + b); //
let x = 10;

// Expression is evaluated left to right
x = x + 5 * 2;

// console.log(x);

let a = 5;
let b = a++ + ++a;

// Step 1: a++ → takes value 5 (then a becomes 6)
// Step 2: ++a → first increment (a=7), then take value 7
// Step 3: left to right → 5 + 7 = 12
// Step 4: assign to b

// console.log("a =", a); // 7
// console.log("b =", b); // 12

// let str ="swiss";
// let arr = str.split('');
// let str2 = "";
// for(let i = 0; i<str.length ; i++){
//     if(arr.indexOf(arr[i])==arr.lastIndexOf(arr[i]))
//     {
//         str2+=arr[i];
//         break;
//     }
// }
// let str3 = str2.substring(0,1);
// console.log(str3);

// by using inner loop can we break the outer loop? yes we can use label name break outerloopname:
// diff of for in and for off on array?
// tempory dead zone? 
// hositing 
// aanym and expression function difference?
// arroy fun anny exper are hosited or not ? //
// this keyword in js ? // 
// in strinct mod what is the out put of this keyword inside function ? undefine 
// ways of creating object in js ? // constuctor  class 
// for off loop will iterate over obbj  ? // no 
// lexicle scope      // 
// mian use of closure ? ->  // 
// typrof [] -> output ?  // 
// typeof[] -> object 
// 
// arrow functions has its own this keyword or it inherits its parent's this keyword ?
// null == undefined // true
// null === undefined // false
// closure function and its work 
// 

// console.log("1");
// setTimeout(() => {
//     console.log("2");
// }, 0);
// Promise.resolve().then(() => {
//     console.log("3");
// });
// console.log("4");
// // output : 1 4 3 2

// async function test(){
//     console.log("a");
//     await Promise.resolve();
//     console.log("b");
// }
// test();
// console.log("c");
// //output : a c b

// const p = {
//     name: "sujal",
//     greet(){
//         console.log(`Hii ${this.name}`)
//     }
// }
// const greet = p.greet;
// greet();
// //output : Hii undefined // because this keyword refers to window object
// p.greet();
// //output : Hii sujal // because this keyword refers to p object

// const obj = {
//     value : 10,
//     regfun: function(){
//         return this.value;
//     },
//     arrowfun: () => {
//         return this.value;
//     }
// }
// console.log(obj.regfun()); // 10
// console.log(obj.arrowfun()); // undefined


// function A(){} // constructor function // constructor function always starts with capital letter
// A.prototype.x = 10;

// const objA= new A(); // instance of A
// objA.y = 20;
// console.log(objA.x); // 10
// console.log(objA.y); // 20

// objA.x = 30;
// console.log(A.prototype.x); // 10
// console.log(objA.x); // 30

// delete objA.x;
// console.log(A.prototype.x); // 10
// console.log(objA.x); // 10

// Array.prototype.first = function(){
//     return this;
// }

// const arr = [1,2,3];
// console.log(arr.first());
// //output : [1,2,3]

// console.log([]==false); //true
// // coercion [] -> 0 -> false


// console.log([]+1); //"01"
// // coercion [] -> "" -> ""+1 -> "0"+1 -> "01"
// console.log([]+[]); //""

// console.log([1,2]+[3,4]); //1,23,4
// // coercion [1,2] -> "1,2" -> "1,2"[3,4] -> "1,2"+[3,4] -> "1,2"+"3,4" -> "1,23,4"

// console.log({}+[]) // "[object Object]"


// let count = 0;
// function outer(){
//     let count = 10;
//     function inner(){
//         count++;
//         console.log(count);
//     }
//     return inner;
// }
// const fn = outer();
// fn(); // 11
// fn(); // 12
// fn(); // 13
// console.log(count); // 0

// for(var i=0; i<5; i++){
//     setTimeout(()=>{
//         console.log(i);
//     },i*1000) 
// }
// //output : 5 5 5 5 5

// console.log("1");
// setTimeout(() => {
//     console.log("2");
// }, 0);
// Promise.resolve().then(() => console.log("3"));
// Promise.resolve().then(() => setTimeout(() => console.log("4"), 0));
// Promise.resolve().then(() => console.log("5"));

// console.log("6");
//output : 1 6 3 5 2 4


// 


// let str = 'this is string '
// obj= {};

// for(let i=0;i<str.length; i++)
// obj[str[i]] = obj[str[i]] + 1 || 1

// console.log(obj);

// duplicate no 
// let arr = [1,1,2,2,3,4,5,6,4,7,8,8];
// let ans=[]
// for(let i=0;i<arr.length;i++){
//     if(!ans.includes(arr[i]))
//     {
//         ans.push(arr[i])
//     }
// }
// console.log(ans);


