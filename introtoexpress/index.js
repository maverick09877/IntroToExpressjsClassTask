const express = require("express");
const cors = require("cors");

const server = express();

server.use(cors());

let onePiece = {
    anime: "One Piece",
    protagonist: "Monkey D. Luffy",
    anti_protagonist: "Red-Haired Shanks",
    female_lead: "Boa Hancock",
};

let attackOnTitan = {
    anime: "Attack On Titan",
    protagonist: "Eren Yeager",
    anti_protagonist: "Eren Yeager",
    female_lead: "Mikasa Ackerman",
};

let yourName = {
    anime: "Your Name",
    protagonist: "Taki Tachibana",
    anti_protagonist: "Asteriod",
    female_lead: "Mitsuha Miyamizu",
};

let yourLieInApril = {
    anime: "Your Lie In April",
    protagonist: "Kosei Arima",
    anti_protagonist: "Fate",
    female_lead: "Kaori Miyazono",
};

let blackLagoon = {
    anime: "Black lagoon",
    protagonist: "Rokurou Okajima",
    anti_protagonist: "Balalaika",
    female_lead: "Revy",
};

let hunterHunter = {
    anime: "Hunter x Hunter",

    protagonist: "Gon Freecss",
    anti_protagonist: "Hisoka",
    female_lead: "Kurapika",
};

let anime = [
    {...onePiece },
    {...attackOnTitan },
    {...yourLieInApril },
    {...yourName },
    {...blackLagoon },
    {...hunterHunter },
];

let planets = [
    "Mercury",
    "Venus",
    "Earth",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune",
];

let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

server.get("/anime", (req, res) => {
    res.json(anime);
});
server.get("/planets", (req, res) => {
    res.json(planets);
});
server.get("/weekdays", (req, res) => {
    res.json(weekdays);
});
server.get("/months", (req, res) => {
    res.json(months);
});

server.listen(9797);