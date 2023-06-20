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
        "coverInfo" : "How productive I am",
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
        "info" : "aboba",
        "problems" : "aboba",
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
    
    {
        "title": "Gravity Game",
        "descr": 'This game was created as part of a Game-A-Week course at the University. The main idea is that the player can change gravity in a 2D platformer. To achieve this effect, I used ' + '<a href="https://github.com/Matthew-J-Spencer/Ultimate-2D-Controller"  target="_blank" rel="noreferrer"> Tarodev`s controller </a>' + ', which has custom physics. By cleverly rotating the entire level around the player, I was able to create the illusion of gravity manipulation.',
        "info": 'This project was a team collaboration, with my partner ' + '<a href="https://al-kabdolov.itch.io/" target= "_blank" rel="noreferrer"> Almat </a>' + ' responsible for the content while I focused on the game logic. I learned to collaborate in a team and understood how the controller works and started to try to be consistent with the naming convention',
        "img": gravityCover,
        "date": "16.05.2022",
        "semester": '2nd',
        "time": "6-8 hours",
        "teamSize": '2',
        "gitHub": "https://github.com/psikh286/Gravity-Game",
        "itch": "https://psikh286.itch.io/gravity"
    },
    {
        "title": "Crafting Game",
        "descr": `This game was created as part of a Game-A-Week course at the University. The goal is to craft as many required items as possible. But here's the catch: new resources for crafting keep popping up non-stop, covering the old ones and making it trickier to find a resource you need. The crafting system is designed with expandability in mind, making it simple to add new items and crafts. While it may not be the most advanced system, it served my needs adequately.`,
        "info": "Every element in the game is part of the user interface. During this project, I improved my knowledge of the Unity UI system. I learned how to implement it in Unity and to use it in code.",
        "img": craftCover,
        "img2": craft02,        
        "roles": "Programmer, Game Designer",
        "semester": '2nd',
        "teamSize": '1',
        "time": "10-12 hours",
        "date": "09.05.2022",
        "engine": "unity",
        "gitHub": "https://github.com/psikh286/Crafting-Game",
        "itch": "https://psikh286.itch.io/craft"
    },
    {
        "title": "10 sec",
        "descr": "Developed as part of a Game-A-Week course at the University, this game delivers fast-paced action! Every 10 seconds, a fresh wave of enemies storms in, while the player's character class instantly changes. The enemy waves are random, but in order to balance gameplay, I created a system to predefine stacks. Various enemy types bring unique tricks and strategies into play. The player classes offer diverse gameplay variations, enhancing the overall experience.",
        "info": "During this project, I learned how to use Coroutines, and Tilemaps and create classes that aren't inherited from MonoBehavoiur. Moreover, I implemented my first interface during this project, which was a life changer.",
        "img": tenSecondCover,
        "img2": tenSecond02,
        "roles": "Programmer, Game Designer",
        "semester": '2nd',
        "teamSize": '1',
        "time": "20 hours",
        "date": "25.04.2022",
        "engine": '',
        "gitHub": "https://github.com/psikh286/10-Seconds-Dungeon",
        "itch": "https://psikh286.itch.io/10-seconds-dungeon"
    },
    {
        "title": "Slimy",
        "descr": `During the Game-A-Week course at the University, I created an adventure game that adhered to the theme of "One Button." As my first solo Unity project, I'm proud of the content I developed. The game features a simple yet engaging gameplay mechanic, utilizing only one input throughout. Notably, the locations in the game change dynamically based on certain events that occur. Additionally, I implemented a basic dialog system that also adapts according to these events. With six distinct locations and various simple mechanics, the game delivers an enjoyable and chill experience.`,
        "info": "During this project, I had to learn fast and effectively. I successfully implemented my first Singleton (yes, it was a learning experience!) and delved into Unity's animation system, audio system, and lighting features. I also strived to be creative with input and UI design. The learning journey was extensive, covering a wide range of skills and techniques that greatly enhanced my development abilities.",
        "img": slimyCover,
        "roles": "Programmer, Game Designer",
        "semester": '2nd',
        "teamSize": '1',
        "time": "20 hours",
        "date": "25.04.2022",
        "engine": '',
        "gitHub": "https://github.com/psikh286/Slimy",
        "itch": "https://psikh286.itch.io/slimy"
    },
    
    {
        "title": "Mendelian Genetics",
        "descr": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse finibus tristique metus, id sagittis ex tincidunt at.Aliquam erat volutpat. Sed interdum nulla vitae metus vulputate, id gravida enim rutrum. ",
        "info": "какотйо гаме",
        "img": geneticsCover,
        "roles": "Programmer, Game Designer",
        "semester": '2nd',
        "teamSize": '1',
        "time": "20 hours",
        "date": "25.04.2022",
        "engine": '',
        "gitHub": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "itch": "sadsasdad"
    },
    {
        "title": "Sound Of the Road",
        "descr": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse finibus tristique metus, id sagittis ex tincidunt at.Aliquam erat volutpat. Sed interdum nulla vitae metus vulputate, id gravida enim rutrum. ",
        "info": "какотйо гаме",
        "img": soundOfTheRoadCover,
        "roles": "Programmer, Game Designer",
        "semester": '2nd',
        "teamSize": '1',
        "time": "20 hours",
        "date": "25.04.2022",
        "engine": '',
        "gitHub": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "itch": "sadsasdad"
    }
];





export { projects };