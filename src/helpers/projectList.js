import craftCover from '../img/Craft_cover.png'

import craft02 from '../img/Craft_1.png'

import gravityCover from '../img/Gravity_cover.png'

import tenSecondCover from '../img/10Sec_cover.png'

import tenSecond02 from '../img/10Seconds_1.png'

import slimyCover from '../img/Slimy_cover.png'

import eotwCover from '../img/EOTW_cover.png'

import partychaosCover from '../img/PartyChaos_cover.png'

import geneticsCover from '../img/Genetics_cover.png'

import soundOfTheRoadCover from '../img/SoundOfTheRoad_cover.png'

// import TribeSimulatorCover from '../img/TribeSimulatorCover_cover.png'



const projects = [
    {
        "id": 1,
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
        "itch": "https://psikh286.itch.io/craft",
        "twitter": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "whatsapp": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
        "id": 2,
        "title": "Gravity Game",
        "descr": 'This game was created as part of a Game-A-Week course at the University. The main idea is that the player can change gravity in a 2D platformer. To achieve this effect, I used ' + '<a href="https://github.com/Matthew-J-Spencer/Ultimate-2D-Controller"  target="_blank" rel="noreferrer"> Tarodev`s controller </a>' + ', which has custom physics. By cleverly rotating the entire level around the player, I was able to create the illusion of gravity manipulation.',
        "info": 'This project was a team collaboration, with my partner ' + '<a href="https://al-kabdolov.itch.io/" target= "_blank" rel="noreferrer"> Almat </a>' + ' responsible for the content while I focused on the game logic. I learned to collaborate in a team and understood how the controller works and started to try to be consistent with the naming convention',
        "img": gravityCover,
        "date": "16.05.2022",
        "time": "6-8 hours",
        "teamSize": '2',
        "gitHub": "https://github.com/psikh286/Gravity-Game",
        "itch": "https://psikh286.itch.io/gravity",
        "twitter": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "whatsapp": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "hyperlink": "Tarodev's",
        "hyperlink2": "Almat",
        "url": "https://github.com/Matthew-J-Spencer/Ultimate-2D-Controller",
        "url2": "https://al-kabdolov.itch.io/",
    },
    {
        "id": 3,
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
        "itch": "https://psikh286.itch.io/10-seconds-dungeon",
        "twitter": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "whatsapp": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
        "id": 4,
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
        "itch": "https://psikh286.itch.io/slimy",
        "twitter": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "whatsapp": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
        "id": 5,
        "title": "End of the world",
        "descr": "This game was developed overnight in a single continuous session as part of the Game-A-Week course at the University. The entire design process, including a brief 3 am lunch break, was completed within that timeframe. The game's central focus is decision-making, challenging players to determine whether specie should be eliminated based on given factors. Quick thinking and a sharp memory are essential to succeed in this engaging experience.",
        "info": "This project taught me the importance of executing tasks quickly and avoiding unnecessary polishing until the core components are ready. It was a valuable lesson in efficient time management and prioritizing essential elements over excessive refinement.",
        "img": eotwCover,
        "roles": "Programmer, Game Designer",
        "semester": '2nd',
        "teamSize": '1',
        "time": "20 hours",
        "date": "25.04.2022",
        "engine": '',
        "gitHub": "https://github.com/psikh286/EOTW",
        "itch": "https://psikh286.itch.io/end-of-the-world",
        "twitter": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "whatsapp": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
        "id": 6,
        "title": "Party Chaos",
        "descr": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse finibus tristique metus, id sagittis ex tincidunt at.Aliquam erat volutpat. Sed interdum nulla vitae metus vulputate, id gravida enim rutrum. ",
        "info": "какотйо гаме",
        "img": partychaosCover,
        "roles": "Programmer, Game Designer",
        "semester": '2nd',
        "teamSize": '1',
        "time": "20 hours",
        "date": "25.04.2022",
        "engine": '',
        "gitHub": null ,
        "itch": "sadsasdad",
        "twitter": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "whatsapp": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        
    },
    {
        "id": 7,
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
        "itch": "sadsasdad",
        "twitter": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "whatsapp": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
        "id": 8,
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
        "itch": "sadsasdad",
        "twitter": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "whatsapp": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    // {
    //     "id": 9,
    //     "title": "Tribe Simulator ",
    //     "descr": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse finibus tristique metus, id sagittis ex tincidunt at.Aliquam erat volutpat. Sed interdum nulla vitae metus vulputate, id gravida enim rutrum. ",
    //     "info": "какотйо гаме",
    //     "img": TribeSimulatorCover,
    //     "roles": "Programmer, Game Designer",
        // "semester": '2nd',
        // "teamSize": '1',
        // "time": "20 hours",
        // "date": "25.04.2022",
        // "engine": '',
    //     "gitHub": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    //     "itch": "sadsasdad",
    //     "twitter": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    //     "whatsapp": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    // },
];





export { projects };