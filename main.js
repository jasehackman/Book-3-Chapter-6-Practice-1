const students = [
  {
      name: "Chris Miller",
      class: "History",
      info: "Failed last exam",
      score: 59
  },
  {
      name: "Courtney Seward",
      class: "History",
      info: "Has completed all homework",
      score: 91
  },
  {
      name: "Garrett Ward",
      class: "History",
      info: "Wonderful at helping other students",
      score: 88
  },
  {
      name: "John Dulaney",
      class: "History",
      info: "Has never missed a class or exam",
      score: 92
  },
  {
      name: "Greg Lawrence",
      class: "History",
      info: "Sub-par performance all around",
      score: 64
  },
  {
      name: "Leah Duvic",
      class: "History",
      info: "Wonderful student",
      score: 97
  },
  {
      name: "Jesse Page",
      class: "History",
      info: "Smokes too much. Distracting.",
      score: 76
  },
  {
      name: "Kevin Haggerty",
      class: "History",
      info: "Falls asleep in class",
      score: 79
  },
  {
      name: "Max Wolf",
      class: "History",
      info: "Talks too much",
      score: 83
  },
  {
      name: "Lissa Goforth",
      class: "History",
      info: "Asks pointless, unrelated questions",
      score: 78
  },
  {
    name: "Tyler Bowman",
    class: "History",
    info: "When was the last time he attended class?",
      score: 48
    },
  {
    name: "Ray Medrano",
      class: "History",
      info: "Needs to contribute to in-class discussions",
      score: 95
    }
]
let pcolor;
let fcolor;

// const h1 = (title, style) => `<h1 class="${style}">${title}</h1>`


// const section = (title, style) => {
  //   return `<section class="bordered dashed ${style}">${title}</section>`
  // }
  
  // const aside = (title, style) => {
    //   return `<aside class="${style}">${title}</aside>`
    // }
    
const h1 = (...props) => {
  // console.log(props)
  return `<h1 class = "${props[1]}">${props[0]}</h1>`
}

const section = (...props) => {
  // console.log(props)
  return `<section class="bordered dashed ${props[1]}">${props[0]}</section>`
}

const aside = (...props) => {
  // console.log(props)
  return `<aside class="${props[1]}">${props[0]}</aside>`
}



const student = (name, class1, info,) =>  
  `
    <div id="student">
        ${h1(name, "xx-large")}
        ${section(class1, "section--padded")}
        ${aside(info, "pushRight")}
    </div>
`

const stu = function(name, class2, info, score) {
  let ht;
  
  if (score > 60) {
    ht =`<div id="student">
      ${h1(name, "xx-large passing")}
      ${section(class2, "section--padded")}
      ${aside(info, "pushRight")}
  </div>`
  } else {
    ht =`<div id="student">
    ${h1(name, "xx-large failing")}
    ${section(class2, "section--padded")}
    ${aside(info, "pushRight")}
</div>`
  }
  return ht;
}

const container = document.querySelector("#container")


for (let i = 0; i < students.length; i++) {
  container.insertAdjacentHTML('beforeend', stu(students[i].name, students[i].class, students[i].info, students[i].score))
 
}

// let prop = [];
// let rop = [];
// let bop = [];
// let mop = [];

// for (let i = 0; i < students.length; i++) {
//   prop.push(students[i].name);
//   rop.push(students[i]['class']);
//   bop.push(students[i].info);
//   mop.push(students[i].score);

// }

// console.log(prop, top, bop, mop);