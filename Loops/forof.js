var people = [
    {
      name: "harish",
      age: 23,
      city: "chennai"
    },
    {
      name: "paasu",
      age: 25,
      city: "madras"
    }
  ];
  
  for (var person of people) {
    for (var key in person) {
      if (person.hasOwnProperty(key)) {
        var value = person[key];
        console.log(key + ": " + value);
      }
    }
  }
  