const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Objects collection and inserts the objects below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/museumguideobjects"
);

const objectSeed = [
  {
    title: "Sunflowers",
    artistDisplayName: "Vincent van Gogh",
    objectDate: "1887",
    objectURL: "https://www.metmuseum.org/art/collection/search/436524",
    primaryImageSmall: "https://images.metmuseum.org/CRDImages/ep/web-large/DP229743.jpg",
    objectID: 436524,
    GalleryNumber: "825",
    date: new Date(Date.now())
  },
  {
    title: "Sir Anthony Van Dyck with a Sunflower",
    artistDisplayName: "Wenceslaus Hollar",
    objectDate: "1644",
    objectURL: "https://www.metmuseum.org/art/collection/search/360837",
    primaryImageSmall: "https://images.metmuseum.org/CRDImages/dp/web-large/DP823393.jpg",
    objectID: 360837,
    GalleryNumber: "",
    date: new Date(Date.now())
  },
  {
    title: "The Toilette of Venus",
    artistDisplayName: "François Boucher",
    objectDate: "1751",
    objectURL: "https://www.metmuseum.org/art/collection/search/435739",
    primaryImageSmall: "https://images.metmuseum.org/CRDImages/ep/web-large/DP-411-01.jpg",
    objectID: 435739,
    GalleryNumber: "",
    date: new Date(Date.now())
  }
];

db.Object
  .remove({})
  .then(() => db.Object.collection.insertMany(objectSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });