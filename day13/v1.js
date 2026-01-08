let str = " Hello, World! sujal ";
console.log(str.trim()); // Output: Hello, World!
console.log(str.trimStart()); // Output: Hello, World!)
console.log(str.trimEnd()); // Output:  Hello, World!
console.log(str.length); // Output: 15
console.log(str.toLowerCase()); // Output: hello, world!
console.log(str.toUpperCase()); // Output: HELLO, WORLD!
console.log(str.charAt(1)); // Output: H
console.log(str.indexOf('l')); // Output: 3
console.log(str.lastIndexOf('l')); // Output: 11
console.log(str.replace('World', 'JavaScript')); // Output: Hello, JavaScript!
console.log(str.split('').reverse().join('')); // Output: ["Hello,", "World!"]
console.dir(str); // Output: Hello, World!
console.log(str.startsWith(' Hello')); // Output: true
console.log(str.endsWith('World!')); // Output: true
console.log(str.includes('World')); // Output: true
console.log();
