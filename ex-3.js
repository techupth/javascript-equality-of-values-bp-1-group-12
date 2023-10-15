function isPlainObject(value) {
  if (typeof value == "object" && Array.isArray(value) == false && value != null){
    return true
  }else if (typeof value == "object" && Array.isArray(value) == true){
    return false
  }else if (value == null){
    return false
  }else return "“This is not an object”"
}

// Example case
let result1 = isPlainObject({ name: "John" });
let result2 = isPlainObject(null);
let result3 = isPlainObject(["apples", "oranges"]);
let a = typeof { name: "John" }
// ผลลัพธ์ควรที่ได้จาก Example case
console.log(result1); //true
console.log(result2); // false
console.log(result3); // false