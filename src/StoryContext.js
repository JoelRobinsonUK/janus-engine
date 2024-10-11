export const storyNodes = {
  0: {
    title: "Gate 000",
    body: [
      "Pilot, welcome to the the Janus Engine, a mechanism used by the earliest civilisation to guide the development of younger races.",
      "You have been assigned the human race.",
      "Your goal is to guide them to the end of the 3rd millenium.",
    ],
    img: "galaxy.jpg",
    options: [
      {
        id: "1",
        text: "Begin",
      },
    ],
  },
  1: {
    title: "Gate 001-A",
    body: [
      "The damage of human influence on the planet grows worse every year, if immediate action is not taken the planet will be lost.",
      "Many say that society must push to cut off pollution, but there are those who feel it is too late and would rather invest in colonizing space.,",
    ],
    img: "earth.jpg",
    options: [
      {
        id: "2a",
        text: "Clean Planet",
      },
      {
        id: "2b",
        text: "Space Exodus",
      },
    ],
  },
  "2a": {
    title: "Gate 002-A",
    body: [
      "The cleanup effort is not going well.",
      "Fossil fuels are being banned across the globe, but sea levels are rising and the population is becoming too dense.",
      "To avoid growing hostilities a viable solution to overcrowding must be found.",
      "Will humanity build walls against the sea, or will they prepare to spread to new worlds?",
    ],
    img: "london.jpg",
    options: [
      {
        id: "3a",
        text: "Build Walls",
      },
      {
        id: "2b",
        text: "Space Exodus",
      },
    ],
  },
  "2b": {
    title: "Gate 002-B",
    body: [
      "The first colony ships are standing by in orbit. Final preparations are being made to take humanity into the stars.",
      "But which of two viable locations will become Earth's first off world colony?",
      "The Earth's closest neighbour Mars or Titan, Saturn's ocean moon?",
    ],
    img: "orbit.jpg",
    options: [
      {
        id: "3b",
        text: "Mars",
      },
      {
        id: "3c",
        text: "Titan",
      },
    ],
  },
  "3a": {
    title: "Gate 003-A",
    body: [
      "The walls have been built, and while most remain strong, those guarding the Americas from the advance of the Atlantic have failed, flooding much of the Eastern seaboard.",
      "The Refederated States of America have collapsed, chaos looms.",
      "Should the newly formed One World government take control, or should the Americans be left to their own destruction?",
    ],
    img: "riot.jpg",
    options: [
      {
        id: "4a",
        text: "One World",
      },
      {
        id: "4b",
        text: "American Exceptionalism",
      },
    ],
    extra:
      "The RSA is comprised of the former United States after 23 coastal states became uninhabitable. Chicago, IL, was established as the new capital.",
  },
  "3b": {
    title: "Gate 003-B",
    body: [
      "The red planet offers an number of locations for a colony of this size.",
      "Two in particular stand out to the humans: an underground glacier that will allow for steady growth; or the natural protection of the Schiaparelli crater",
    ],
    img: "mars.jpg",
    options: [
      {
        id: "4c",
        text: "Glacier",
      },
      {
        id: "4d",
        text: "Crater",
      },
    ],
  },
  "3c": {
    title: "Gate 003-C",
    body: [
      "Colonising Titan proves a challenge, the colony ships are converted into submarine cities in Titan's vast sea.",
      "Do the inhabitants explore their ocean home or focus on expanding their cities?",
    ],
    img: "titan.jpg",
    options: [
      {
        id: "4e",
        text: "Explore",
      },
      {
        id: "4f",
        text: "Expand",
      },
    ],
  },
  "4a": {
    title: "Gate 004-A",
    body: [
      "The citizens of the RSA resist foreign leadership.",
      "A number of attacks on key locations are followed by a call for freedom.",
      "Will the foreign powers withdraw or force America to follow?",
    ],
    img: "pentagon.jpg",
    options: [
      {
        id: "5a",
        text: "Withdraw",
      },
      {
        id: "5b",
        text: "Force",
      },
    ],
  },
  "4b": {
    title: "Gate 004-B",
    body: [
      "The leaders of the defunct regime flee for Europe.",
      "In their absence a number of groups seize the RSA's nuclear arsenal.",
      "They demand that Canada and Mexico withdraw further North and South, allowing them to annex the empty land.",
      "Do they refuse, or submit to America's demands?",
    ],
    img: "chaos.jpg",
    options: [
      {
        id: "5c",
        text: "Refuse",
      },
      {
        id: "5d",
        text: "Withdraw",
      },
    ],
    extra:
      "In the desperate circumstances of the 'New Washington Collapse' a handful of para-military organisations, chief among them the 'Dogs of War', and '2nd Coming' began securing former RSA assets in order to gain control over the states.",
  },
  "4c": {
    title: "Gate 004-C",
    body: [
      "The glacier provides strong growth to the colony.",
      "With such a firm basis, should humans expand on their current colony or prepare to send out new explorers?",
    ],
    img: "mars.jpg",
    options: [
      {
        id: "5e",
        text: "Expand",
      },
      {
        id: "6d",
        text: "Explore",
      },
    ],
  },
  "4d": {
    title: "Gate 004-D",
    body: [
      "The Schiaparelli colony has discovered a strange mineral effective fuel source.",
      "However when processed it also acts as a treatment that greatly reduces human aging.",
    ],
    img: "mars.jpg",
    options: [
      {
        id: "6d",
        text: "Use as fuel",
      },
      {
        id: "6d",
        text: "Create treatment",
      },
    ],
    extra:
      "Formally recognised as Feskaudian, named for Nina Feskau; the chief scientist who identified it, this mineral is highly diverse. However, it is thought to be extremely rare in Mars' geological makeup.",
  },
  "4e": {
    title: "Gate 004-E",
    body: [
      "Exploring the oceans has caught the attention of a giant indigenous lifeform.",
      "As they approach the human settlements the argument over whether to fight them off or leave them alone rages.",
    ],
    img: "titan.jpg",
    options: [
      {
        id: "5g",
        text: "Fight the off",
      },
      {
        id: "5h",
        text: "Leave them be",
      },
    ],
    extra:
      "Cephaloforms are similar to Earth's cephalopods. However they are significantly larger, and have needle-like barbs on their tentacles instead of suction cups.",
  },
  "4f": {
    title: "Gate 004-F",
    body: [
      "Early attempts to expand the cities of Titan lead to several small disasters.",
      "While many argue that the population should persist in making Titan their home, others argue that they should relocate before they lose their chance.",
    ],
    img: "titan.jpg",
    options: [
      {
        id: "5i",
        text: "Persist",
      },
      {
        id: "5j",
        text: "Relocate",
      },
    ],
  },
};
