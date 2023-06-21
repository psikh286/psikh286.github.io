import craftCover from '../img/Craft_cover.png'
import craft02 from '../img/Craft_1.png'

import gravityCover from '../img/Gravity_cover.png'

import tenSecondCover from '../img/10Sec_cover.png'

import tenSecond02 from '../img/10Seconds_1.png'

import slimyCover from '../img/slimy/Slimy_cover.png'
import slimyMainImage from '../img/slimy/Slimy_main.png'
import slimyImage0 from '../img/slimy/Slimy_0.png'
import slimyImage1 from '../img/slimy/Slimy_1.png'

import eotwCover from '../img/eotw/EOTW_cover.png'
import eotwMainImage from '../img/eotw/EOTW_main.png'
import eotwImage0 from '../img/eotw/EOTW_cover.png'
import eotwImage1 from '../img/eotw/EOTW_cover.png'

import partyChaosCover from '../img/partyChaos/PartyChaos_cover.png'
import partyChaosMainImage from '../img/partyChaos/PartyChaos_0.png'
import partyChaosImage0 from '../img/partyChaos/PartyChaos_1.png'
import partyChaosImage1 from '../img/partyChaos/PartyChaos_5.png'

import geneticsCover from '../img/Genetics_cover.png'

import soundOfTheRoadCover from '../img/soundOfTheRoad/SoundOfTheRoad_cover.png'
import soundOfTheRoadMainImage from '../img/soundOfTheRoad/SoundOfTheRoad_cover.png'
import soundOfTheRoadImage0 from '../img/soundOfTheRoad/SoundOfTheRoad_cover.png'
import soundOfTheRoadImage1 from '../img/soundOfTheRoad/SoundOfTheRoad_cover.png'

const projects = [
    {
        //ON MAIN PAGE
        "title" : "Party Chaos",
        "coverInfo" : 'How I made my' + '<b>BEST</b>' + 'game',
        "cover" : partyChaosCover,

        //DETAILS
        "roles" : "Programmer, Game Designer",
        "semester": "2nd",
        "teamSize": "2",
        "time": "100 hours (in 2 weeks tho)",
        "date": "30.05.2022",
        "engine": "Unity Engine",

        //BUTTONS
        "gitHub": null,
        "itch": "https://psikh286.itch.io/party-chaos",
        
        //IMAGES
        "mainImg" : partyChaosMainImage,
        "images" : [
            partyChaosImage0,
            partyChaosImage1            
        ],
        
        //TEXT
        "info" : "At first, it was a student project, but then it immediately became the main one. Local multiplayer party game with the support of 2-8 people and a bunch of fun minigames. It was made in 2 weeks! I would love to answer your questions! However, I don’t want to share the code source.\n",
        "problems" : "1. Since it is a “Pass the Controller” game, without a clever way to shuffle players, pairs of players will be the same all the time.\n" + "\n" + "2. Minigames order decided by pure random might lead to unfair outcomes while keeping order the same is repetitive. (old version of the game)\n" +
            "\n" +
            "3. Create a procedurally generated Hub where players can pick the next game and make everything appealing.\n",
        "solutions" : "aboba"
    },
    {
        //ON MAIN PAGE
        "title" : "End Of The World",
        "coverInfo" : "Aboba?",
        "cover" : eotwCover,

        //DETAILS
        "roles" : "Programmer, Game Designer",
        "semester": "2nd",
        "teamSize": "1",
        "time": "8 hours",
        "date": "02.05.2022",
        "engine": "Unity Engine",

        //BUTTONS
        "gitHub": "https://github.com/psikh286/EOTW",
        "itch": "https://psikh286.itch.io/end-of-the-world",

        //IMAGES
        "mainImg" : eotwMainImage,
        "images" : [
            eotwImage0,
            eotwImage1
        ],

        //TEXT
        "info" : "aboba",
        "problems" : "aboba",
        "solutions" : "aboba"
    },
    {
        //ON MAIN PAGE
        "title" : "Slimy",
        "coverInfo" : "My first solo Unity Project",
        "cover" : slimyCover,

        //DETAILS
        "roles" : "Programmer, Game Designer",
        "semester": "2nd",
        "teamSize": "1",
        "time": "8 hours",
        "date": "02.05.2022",
        "engine": "Unity Engine",

        //BUTTONS
        "gitHub": "https://github.com/psikh286/Slimy",
        "itch": "https://psikh286.itch.io/slimy",

        //IMAGES
        "mainImg" : slimyMainImage,
        "images" : [
            slimyImage0,
            slimyImage1
        ],

        //TEXT
        "info" : "aboba",
        "problems" : "aboba",
        "solutions" : "aboba"
    },
    {
        //ON MAIN PAGE
        "title" : "Sound Of the Road",
        "coverInfo" : "Desiner-friendly systems for huge team",
        "cover" : soundOfTheRoadCover,

        //DETAILS
        "roles" : "Programmer, Game Designer",
        "semester": "4nd",
        "teamSize": "9(actually 7)",
        "time": "40+ hours",
        "date": "On-going",
        "engine": "Unity Engine",

        //BUTTONS
        "gitHub": null,
        "itch": "https://psikh286.itch.io/sound-of-the-road",

        //IMAGES
        "mainImg" : soundOfTheRoadMainImage,
        "images" : [
            soundOfTheRoadImage0,
            soundOfTheRoadImage1
        ],

        //TEXT
        "info" : "aboba",
        "problems" : "aboba",
        "solutions" : "aboba"
    },
    {
        //ON MAIN PAGE
        "title" : "Gravity Game",
        "coverInfo" : "Desiner-friendly systems for huge team",
        "cover" : soundOfTheRoadCover,

        //DETAILS
        "roles" : "Programmer, Game Designer",
        "semester": "4nd",
        "teamSize": "9(actually 7)",
        "time": "40+ hours",
        "date": "On-going",
        "engine": "Unity Engine",

        //BUTTONS
        "gitHub": null,
        "itch": "https://psikh286.itch.io/sound-of-the-road",

        //IMAGES
        "mainImg" : soundOfTheRoadMainImage,
        "images" : [
            soundOfTheRoadImage0,
            soundOfTheRoadImage1
        ],

        //TEXT
        "info" : "aboba",
        "problems" : "aboba",
        "solutions" : "aboba"
    },
    
    
];





export { projects };