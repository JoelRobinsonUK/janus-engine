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
  "5a": {
    title: "Gate 005-A",
    body: [
      "The foreign powers withdraw from the American continent.",
      "A few months later the Yellowstone volcano erupts, wiping out life in the Americas and threatening the rest of the world.",
      "Will the humans leave their home for the safety of space, or persist on Earth?",
    ],
    img: "volcano.jpg",
    options: [
      {
        id: "2b",
        text: "Space",
      },
      {
        id: "6a",
        text: "Earth",
      },
    ],
  },
  "5b": {
    title: "Gate 005-B",
    body: [
      "By remaining in the Americas many nations lose their military force to endless resistance.",
      "In a bid to take advantage Russia marches on undefended Europe.",
      "Do the people submit to Russia or resist their invasion?",
    ],
    img: "moscow.jpg",
    options: [
      {
        id: "6b",
        text: "Submit",
      },
      {
        id: "6c",
        text: "Resist",
      },
    ],
  },
  "5c": {
    title: "Gate 005-C",
    body: [
      "In their desperation, the American militias make good on their threat.",
      "The launch of 47 nuclear weapons is met by the full atomic force of the rest of the world.",
      "When the dust settles, humanity is no more.",
    ],
    img: "nuke.jpg",
    options: [
      {
        id: "ending/bad",
        text: "End",
      },
    ],
  },
  "5d": {
    title: "Gate 005-D",
    body: [
      "The people of Mexico travel into the south, while those from Canadians flee to Europe.",
      "Unbeknownst to all, the Canadian refugees bring a super virus with them, cutting through most of the population within weeks.",
      "Those that remain live difficult, violent lives forever more.",
    ],
    img: "cell.jpg",
    options: [
      {
        id: "ending/bad",
        text: "Disengage Engine",
      },
    ],
  },
  "5e": {
    title: "Gate 005-E",
    body: [
      "Though the colony has grown into a haven, many feel that it is stagnating the advances of mankind.",
      "Should they strive to explore the stars or work on a means of restoring Earth?",
    ],
    img: "mars.jpg",
    options: [
      {
        id: "6d",
        text: "Explore",
      },
      {
        id: "6e",
        text: "Restore",
      },
    ],
  },
  "5f": {
    title: "Gate 005-F",
    body: [
      "Humans now routinely live to be over 200 years old, however the Martian moon Phobos is fracturing from gravitational stress and will soon break apart.",
      "Do humans attempt to relocate to another mars colony or take the chance of returning to earth?",
    ],
    img: "mars.jpg",
    options: [
      {
        id: "6f",
        text: "Relocate",
      },
      {
        id: "6g",
        text: "Return to Earth",
      },
    ],
  },
  "5g": {
    title: "Gate 005-G",
    body: [
      "Attacking the cephaloforms proves a grave mistake.",
      "Their full size rises from the depths of Titan and their colossal limbs crush the human cities.",
      "The last of human race drown in less than a day.",
    ],
    img: "titan.jpg",
    options: [
      {
        id: "ending/bad",
        text: "Disengage Engine",
      },
    ],
  },
  "5h": {
    title: "Gate 005-H",
    body: [
      "The cephaloforms prove to be peaceful, and their presence draws other marine life toward the city.",
      "These creatures provide nutrition, advances in medicine, and a clean form of bio fuel.",
      "The underwater cities of Titan run peacefully for thousands of years.",
    ],
    img: "titan.jpg",
    options: [
      {
        id: "ending/good",
        text: "Disengage Engine",
      },
    ],
  },
  "5i": {
    title: "Gate 005-I",
    body: [
      "Further attempts to expand on Titan become costly as humans slowly run out of resources.",
      "The hulls of the cities corrode and flood long after mankind has died of sickness and malnourishment.",
    ],
    img: "titan.jpg",
    options: [
      {
        id: "ending/bad",
        text: "Disengage Engine",
      },
    ],
  },
  "5j": {
    title: "Gate 005-J",
    body: [
      "Leaving Titan was a wise choice.",
      "New readings indicated that the Jovian moons: Io and Callisto, are viable for colonisation.",
      "Where should humanity rest its hopes?",
    ],
    img: "titan.jpg",
    options: [
      {
        id: "6h",
        text: "Callisto",
      },
      {
        id: "6i",
        text: "Io",
      },
    ],
  },
  "6a": {
    title: "Gate 006-A",
    body: [
      "North Korea attempts to secure more growing space for itself by unleashing a new bioweapon.",
      "The Kosong Ni virus quickly becomes uncontrollable, wiping out entire nations each day.",
      "Within a month the last survivors succumb to their illness.",
    ],
    img: "cell.jpg",
    options: [
      {
        id: "ending/bad",
        text: "Disengage Engine",
      },
    ],
    extra:
      "Misidentified as a virus by panicked pathologists, Kosong Ni is in fact a swarm of microscopic organisms that break down organic matter to sludge, leaving people and animals as brown puddles on the ground",
  },
  "6b": {
    title: "Gate 006-B",
    body: [
      "By submitting to Russian control the population of Earth is resigned to a steady decay in civilisation and environment.",
      "By the end of the 22nd Century the Russian Empire of Earth has worn the planet down to a wasteland.",
      "Human numbers dwindle until the citizens of the last habitable city: Moscow, carry out a mass suicide",
    ],
    img: "moscow.jpg",
    options: [
      {
        id: "ending/bad",
        text: "Disengage Engine",
      },
    ],
  },
  "6c": {
    title: "Gate 006-C",
    body: [
      "Resistance has led to an opportunity: an incursion into the Russian motherland will allow a large number of people to escape Earth in the space fleet being built there.",
      "Alternatively a number of attacks on Russian weapon depots may destabilise the Empire's grip on their annexes.",
    ],
    img: "moscow.jpg",
    options: [
      {
        id: "2b",
        text: "Escape",
      },
      {
        id: "7a",
        text: "Attack",
      },
    ],
  },
  "6d": {
    title: "Gate 006-D",
    body: [
      "Lengthly research has led to the development of a highly advanced propulsion system.",
      "Using this techology humanity can leave the Solar System.",
      "Two exoplanets are being considered.",
      "Should sights be set on the nearby Proxima Centauri B or the more ambitious Glieses 876 D?",
    ],
    img: "mars.jpg",
    options: [
      {
        id: "7b",
        text: "Proxima Centauri B",
      },
      {
        id: "7c",
        text: "Glieses 876 D",
      },
    ],
    extra:
      "The Quantum Vacuum Thruster has been a hypothetical since the early 2000's, but the controversies surrounding it prevented its development until now.",
  },
  "6e": {
    title: "Gate 006-E",
    body: [
      "A major breakthrough in carbon redistribution techlonogy means that the Earth's air can be cleansed.",
      "A newly developed sea trawler can depolute the oceans efficiently.",
      "But the colony only has enough resources to send one system in advance.",
    ],
    img: "orbit.jpg",
    options: [
      {
        id: "7d",
        text: "Clean Air",
      },
      {
        id: "7e",
        text: "Depolute Oceans",
      },
    ],
  },
  "6f": {
    title: "Gate 006-F",
    body: [
      "While evacuating the crater colony many humans are killed by debris from Phobos.",
      "With supplies also being lost the survivors are unable to esablish a new outpost.",
      "Humanity dwindles away to nothing in the Martian desert.",
    ],
    img: "mars.jpg",
    options: [
      {
        id: "ending/bad",
        text: "Disengage Engine",
      },
    ],
  },
  "6g": {
    title: "Gate 006-G",
    body: [
      "The colony ships escape the Martian surface just in time to avoid the barrage of moon rocks.",
      "As they make the return journey to Earth the humans must decide what to do with their limited resources",
      "Will they be used to resettle on of their homeworld's ancient cities or to build a new settlement?",
    ],
    img: "mars.jpg",
    options: [
      {
        id: "7f",
        text: "Homeworld",
      },
      {
        id: "7g",
        text: "Fresh Start",
      },
    ],
  },
  "6h": {
    title: "Gate 006-H",
    body: [
      "Humanity journeys safely to Callisto.",
      "Upon arrival they discover the moon is rich in metals and minerals.",
      "With their newfound wealth humanity builds a a civilisation that lasts more than two thousand years.",
    ],
    img: "jupiter.jpg",
    options: [
      {
        id: "ending/good",
        text: "Disengage Engine",
      },
    ],
  },
  "6i": {
    title: "Gate 006-I",
    body: [
      "Arriving on Io the humans discover the remains of an ancient spacefaring civilisation.",
      "An outpost is established and the technology of this lost people slowly comes to be understood.",
      "In time, humanity uses this knowledge to travel among the stars themselves.",
    ],
    img: "jupiter.jpg",
    options: [
      {
        id: "ending/good",
        text: "Disengage Engine",
      },
    ],
  },
  "7a": {
    title: "Gate 007-A",
    body: [
      "Some of the weapon depots the resistance destroy contain prototype weapons of mass destruction called Desolation Engines.",
      "The detonation of these devices leads to the combustion of the Earth's atmosphere.",
    ],
    img: "nuke.jpg",
    options: [
      {
        id: "ending/bad",
        text: "Disengage Engine",
      },
    ],
  },
  "7b": {
    title: "Gate 007-B",
    body: [
      "This adventure into the deep vacuum pays off.",
      "On one of the planets orbitting Alpha Centauri humanity makes first contact with its alien neighbours.",
      "New Earth is established on Centauri's moon, with Humans and Centaurs becoming the first peoples of the Galactic Union of Planets.",
    ],
    img: "centauri.jpg",
    options: [
      {
        id: "ending/true",
        text: "Disengage Engine",
      },
    ],
  },
  "7c": {
    title: "Gate 007-C",
    body: [
      "The journey to far of Glieses is fraught with danger.",
      "One by one the colony ships are lost to the hazards of deep space.",
      "The remains of humanity are discovered by starfarers nearly 200 years later.",
    ],
    img: "glieses.jpg",
    options: [
      {
        id: "ending/true",
        text: "Disengage Engine",
      },
    ],
  },
  "7d": {
    title: "Gate 007-D",
    body: [
      "The machine reacts unexpectedly to particulates in the atmosphere, causing a massive combustion event that scorches the landmasses of Earth.",
      "Left with no destination and limited resources humans go slowly extinct on Mars.",
    ],
    img: "nuke.jpg",
    options: [
      {
        id: "ending/bad",
        text: "Disengage Engine",
      },
    ],
  },
  "7e": {
    title: "Gate 007-E",
    body: [
      "Removing the masses of waste from Earth's waters begins a regeneration of the planet's ecosystem.",
      "After 100 years it is again hospitable to human.",
      "The colonists return home and begin rebuilding their home, this time with greater respect for the blue planet.",
    ],
    img: "orbit.jpg",
    options: [
      {
        id: "ending/good",
        text: "Disengage Engine",
      },
    ],
  },
  "7f": {
    title: "Gate 007-F",
    body: [
      "Damage to the old cities is significant but in time humanity is able to restore them.",
      "However with old techology back in their hands they quickly fall back into habits that caused their greatest problems to begin with.",
    ],
    img: "earth.jpg",
    options: [
      {
        id: "ending/good",
        text: "Disengage Engine",
      },
    ],
  },
  "7g": {
    title: "Gate 007-G",
    body: [
      "This new city, while small, makes use of the technological advances that humans made on Mars.",
      "This advantage allows them to expand back across their planet.",
      "Building a better future day by day.",
    ],
    img: "moscow.jpg",
    options: [
      {
        id: "ending/good",
        text: "Disengage Engine",
      },
    ],
  },
};
