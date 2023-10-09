const jsonData = {
    name: "harish",
    age: 23,
    email: "harish@gmail.com"
  };
  
  const keys = Object.keys(jsonData);
  
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = jsonData[key];
    console.log(`${key}: ${value}`);
  }
  