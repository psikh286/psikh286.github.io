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
import eotwImage0 from '../img/eotw/EOTW_1.png'
import eotwImage1 from '../img/eotw/EOTW_2.png'

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
        "info" : 'Local multiplayer party game with the support of 2-8 people and a bunch of fun minigames. It is a “Pass the Controller” type game. <br/><br/> <i> I would love to answer your questions! However, I don’t want to share the code source.</i>',
        "problems" : '<ol><li>Players\' orders might feel repetitive over time.</li><li>Minigames order decided by pure random might lead to unfair outcomes while keeping order the same is repetitive. (old version of the game)</li><li>Create a procedurally generated Hub where players can pick the next game and make everything appealing.</li></ol>',
        "solutions" : '<ol><li>I implemented a shuffle to ensure that each person plays against every other person before reshuffling. And players can’t play 2 games in a row (except if it’s 1 player team).</li><li> We divided our games on the “type” of skills(fast/luck/skill-based) and the emotions that they invoke. After we created templates of which type of games should be played next. And I made a system that uses those templates to pick random but suitable games. (old version of the game)</li><li>I recreated mini versions(previews) of each minigame in the Hub, where players can test it and vote if they like it. After a minigame is played, the preview turns gray until all minigames are played. And to make everything a bit cooler, added Lego building stile animations for previews and a bunch of physics objects to mess around with.</li></ol>',
    },
    {
        //ON MAIN PAGE
        "title" : "End Of The World",
        "coverInfo" : 'How I made a game in <b>7h 53m</b>',
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
        "info" : "This student project was done overnight! Spot planets of allies and enemies, make quick decisions and don’t forget small details.",
        "problems" : "Lack of time but the desire to make something fun!",
        "solutions" : 'I used <a href="https://deep-fold.itch.io/pixel-planet-generator" target="_blank" rel="noreferrer">Planet</a> and <a href="https://deep-fold.itch.io/space-background-generator" target="_blank" rel="noreferrer">Space Background</a> generators and added a bit of random to it (rotation direction and speed). Build a simple Dialog and NPC system, and everything comes together.'
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
        "info" : "",
        "problems" : "aboba",
        "solutions" : "aboba"
    },
    {
        //ON MAIN PAGE
        "title" : "Sound Of the Road",
        "coverInfo" : 'How I made a casual goofy <b>car controller</b>',
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
        "info" : "Casual car controls, a radio, and a low-poly, colorful, and post-apocalyptic world. YES! This game still doesn’t have a clear gameplay goal, but the experience is already there. My last student project(so far) is with an incredible team of 9, but actually 7 people.",
        "problems" : '<ol><li>I had to make a casual fun car controller, but I didn’t have experience in car games.</li><li>We needed a radio (zone-specific) and CD record-player system.</li></ol>',
        "solutions" : '<ol><li>I played some and created a custom physics car controller by applying different forces at 4 points without simulating actual wheels. Also made an option to switch and create custom car settings runtime.</li><li>I merged them, made an opportunity to create/switch discs with songs runtime, and made radio as an actual disc that changes based on position in the world.</li></ol>'
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