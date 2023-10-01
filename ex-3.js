function isPlainObject(value) {
  // Start coding here
  if(typeof value === 'object' && value !== null && !Array.isArray(value)){
    return true
  }
  if(typeof value === 'object' && value !== null && Array.isArray(value)){
    return false
  }
  if(typeof value === 'object' && value == null && !Array.isArray(value)){
    return false
  }
  else{
    return "This is not an object"
  }
 
}


// Example case
let result1 = isPlainObject({ name: "John" });
let result2 = isPlainObject(null);
let result3 = isPlainObject(["apples", "oranges"]);

// ผลลัพธ์ควรที่ได้จาก Example case
console.log(result1); //true
console.log(result2); // false
console.log(result3); // false
