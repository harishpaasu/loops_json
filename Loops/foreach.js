var person = {
    name: "harish",
    age: 23,
    city: "chennai"
  };
  
  Object.keys(person).forEach(function (key) {
    var value = person[key];
    console.log(key + ": " + value);
  });
  