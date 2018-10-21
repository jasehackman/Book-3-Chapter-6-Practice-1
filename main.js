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

const elementFactory = function (element, info, styling) {
  return `<${element} class = "${styling}">${info}</${element}>`
}
// const h1 = (...props) => {
//   // console.log(props)
//   return `<h1 class = "${props[1]}">${props[0]}</h1>`
// }

// const section = (...props) => {
//   // console.log(props)
//   return `<section class="bordered dashed ${props[1]}">${props[0]}</section>`
// }

// const aside = (...props) => {
//   // console.log(props)
//   return `<aside class="${props[1]}">${props[0]}</aside>`
// }


const stu = function(name, class2, info, score) {
  let ht;
  
  if (score > 60) {
    ht =`<div id="student">
      ${elementFactory("h1", name, "xx-large passing")}
      ${elementFactory("section", class2, "bordered section--padded")}
      ${elementFactory("aside", info, "pushRight")}
  </div>`
  } else {
    ht =`<div id="student">
    ${elementFactory("h1", name, "xx-large failing")}
    ${elementFactory("section", class2, "bordered section--padded")}
    ${elementFactory("aside", info, "pushRight")}
    </div>`
  }
  return ht;
}

const container = document.querySelector("#container")


for (let i = 0; i < students.length; i++) {
  container.insertAdjacentHTML('beforeend', stu(students[i].name, students[i].class, students[i].info, students[i].score))
 
}
