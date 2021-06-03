// helloWorld function 
function helloWorld (){
    return "Hello, World!";
}
//function sayHello(name) {
//    if (name === "Jane") {
//        return 'Hello, Jane!';
//    }
//    if (name === "Alex") {
//        return 'Hello, Alex!';
//    }
//    if (name === "Pat") {
//        return 'Hello, Pat!';
//   }
//    return "";
//}
function sayHello(name) {
    if (typeof (name) != "string") {
        return "Hello, World!";
    }
    return "Hello," + name + "!";
}
function isFive(input) {
    if (input === "5") {
        return "true"
    }
}
function isEven(input){
    return input % 2 ===0;
}
function isVowel (input){
    return input % 2 ===0;
}
function add (input){
    return input++;
}
