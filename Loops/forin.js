var person = {
    name: "harish",
    age: 23,
    city: "chennai"
  };
  for (var key in person) {
    if (person.hasOwnProperty(key)) {
      
      var value = person[key];
      console.log(key + ": " + value);
    }
  }
  