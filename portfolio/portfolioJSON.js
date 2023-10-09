const resume ={
    name:"Harish paasu",
    age: "23",
    title: "full-stack-MERN developer",
    Email : "paasuharish6@gmail.com",
    linkedin : "https://www.linkedin.com/in/harish-paasu-6747611b4/",
    github :  "github.com/harishpaasu",

    
    summary: "hey I am a full stack MERN developer and I have created procjets and also contributed to open source  ",
    education:[{
        degree:"Bachelor of pharmacy",
        collage:"SBCP",
        year: "2017-2022", 
    },
],
Language:[
    {
        name:"english",
        proficiency:"fulent",

    },
    {
        name:"tamil",
        proficiency:"fulent",
    }
],
skills: [
    "JavaScript",
    "React",
    "Node.js",
    "HTML/CSS",
    "SQL",
    "Git",
    "Agile/Scrum",
    "Problem Solving",
  ],
};
console.log(JSON.stringify(resume,null,2));
