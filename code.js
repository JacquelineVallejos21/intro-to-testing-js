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
    if (typeof(name) != "string") {
       return "Hello, World!";
    }
    return "Hello," + name + "!";
}