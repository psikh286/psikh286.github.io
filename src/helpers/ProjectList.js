//region Imports

//GRAVITY
import gravityCover from '../img/gravity/Gravity_cover.png'
import gravityMainImage from '../img/gravity/Gravity_main.png'
import gravityImage0 from '../img/gravity/Gravity_1.png'
import gravityImage1 from '../img/gravity/Gravity_2.png'

//SLIMY
import slimyCover from '../img/slimy/Slimy_cover.png'
import slimyMainImage from '../img/slimy/Slimy_main.png'
import slimyImage0 from '../img/slimy/Slimy_0.png'
import slimyImage1 from '../img/slimy/Slimy_1.png'

//EOTW
import eotwCover from '../img/eotw/EOTW_cover.png'
import eotwMainImage from '../img/eotw/EOTW_main.png'
import eotwImage0 from '../img/eotw/EOTW_1.png'
import eotwImage1 from '../img/eotw/EOTW_2.png'

//PARTY CHAOS
import partyChaosCover from '../img/partyChaos/PartyChaos_cover.png'
import partyChaosMainImage from '../img/partyChaos/PartyChaos_0.png'
import partyChaosImage0 from '../img/partyChaos/PartyChaos_1.png'
import partyChaosImage1 from '../img/partyChaos/PartyChaos_5.png'

//SOUND OF THE ROAD
import soundOfTheRoadCover from '../img/soundOfTheRoad/sotr_cover.png'
import soundOfTheRoadMainImage from '../img/soundOfTheRoad/sotr_main.png'
import soundOfTheRoadImage0 from '../img/soundOfTheRoad/sotr_1.png'
import soundOfTheRoadImage1 from '../img/soundOfTheRoad/sotr_2.png'

//GENETICS
import geneticsCover from '../img/inher/inher_cover.png'
import geneticsImage0 from '../img/inher/Inher_0.png'
import geneticsImage1 from '../img/inher/Inher_1.png'

//CRAFT
import craftingCover from '../img/crafting/Craft_cover.png'
import craftingMainImage from '../img/blank.png'
import craftingImage0 from '../img/crafting/Craft_1.png'
import craftingImage1 from '../img/crafting/Craft_2.png'

//PARKOUR DEMO
import parkourCover from '../img/parkour/parkour_cover.png'
import parkourMainImage from '../img/parkour/parkour_main.png'
import parkourImage0 from '../img/parkour/parkour_1.png'
import parkourImage1 from '../img/parkour/parkour_0.png'

//TRIBE SIM
import tribeCover from '../img/tribe/Tribe_cover.png'
import tribeMainImage from '../img/tribe/Tribe_main.png'
import tribeImage0 from '../img/tribe/Tribe_1.png'
import tribeImage1 from '../img/tribe/Tribe_2.png'

///ELTO
import eltoCover from '../img/elto/elto_Cover.png'
import eltoImage0 from '../img/elto/elto_0.png'
import eltoImage1 from '../img/elto/elto_1.png'


//endregion

/*
* hostPlatform 
* 0 or null = itch.io
* 1 = unknown
* 2 = steam
*/

const projects = [
    {
        //ON MAIN PAGE
        "title" : "Electrify Today",
        "coverInfo" : 'My first <h2>OFFICIAL RELEASE</h2>',
        "cover" : eltoCover,
        "contribution" : '<li>Polishing and Releasing</li><li>Optimization</li><li>Tools for Designers</li><li>Energy + Upgrade Systems</li><li>Quiz System</li><li>Car Modification System</li><li>UI Logic</li><li>Music/Audio Logic</li>',

        //DETAILS
        "roles" : "Programmer",
        "semester": null,
        "teamSize": "10-12",
        "time": "1000+ hours",
        "date": "June 2024",
        "engine": "Unity Engine",

        //BUTTONS
        "gitHub": null,
        "itch": 'https://tech-education.com/electrify-today-en/',
        "hostPlatform": 1,

        //IMAGES
        "images" : [
            eltoImage0,
            eltoImage1
        ],

        //TEXT
        "info" : 'During my time at <a href="https://paintbucket.de/en" target="_blank" rel="noreferrer">Paintbucket Games</a>, I contributed to the development and launch of <a href="https://tech-education.com/electrify-today-en/" target="_blank" rel="noreferrer">ELECTRIFYtoday</a>, my first officially published game. It is an educational free game about transitioning to renewable energies and electrification for ' +
            '<a href="https://tech-education.com/electrify-today-en/" target="_blank" rel="noreferrer">Windows</a>, ' +
            '<a href="https://electrify-today.com/" target="_blank" rel="noreferrer">WebGL</a>, ' +
            '<a href="https://play.google.com/store/apps/details?id=com.phoenixcontact.electrifytoday" target="_blank" rel="noreferrer">Android</a>, and ' +
            '<a href="https://apps.apple.com/app/electrifytoday/id6479370445" target="_blank" rel="noreferrer">iOS</a>.',
        "problems" : "We needed surface-specific stepping and driving sounds, but the map structure did not allow us to use raycasts.",
        "solutions" : "I  wrote a script that runs during loading and divides the world into small chunks (2D Array). According to the player's position, it plays sound related to the chunk and blends when on its edge. "
    },
    {
        //ON MAIN PAGE
        "title" : "Party Chaos",
        "coverInfo" : 'How I made a <h2>PARTY GAME</h2> in <h2>1 WEEK</h2>',
        "cover" : partyChaosCover,
        "contribution" : '<li>Team System</li><li>Minigames Logic</li><li>Procedurally Generated Hub </li><li>Minigames Design</li><li>Level Design</li><li>Post-Processing FX</li><li>Board Game System (v0.1)</li>',

        //DETAILS
        "roles" : "Programmer, Game Designer",
        "semester": "2nd/3rd",
        "teamSize": "2",
        "time": "100 hours/60hours",
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
        "info" : 'Local multiplayer party game with the support of 2-8 people and a bunch of fun minigames. It is a “Pass the Controller” type game.',
        "problems" : 'Minigames order decided by pure random might lead to unfair outcomes while keeping order the same is repetitive. (old version of the game)',
        "solutions" : 'We divided our games on the “type” of skills(fast/luck/skill-based) and the emotions that they invoke. After we created templates of which type of games should be played next. And I made a system that uses those templates to pick random but suitable games. (old version of the game)',
    },
    {
        //ON MAIN PAGE
        "title" : "Tribe Sim",
        "coverInfo" : 'How I made <h2>AGENTS</h2> adapt with <h2>BEHAVIOR TREE</h2>',
        "cover" : tribeCover,
        "contribution" : '<li>Behavior Tree</li><li>Tick System</li><li>Inheritance System</li><li>Agent&#39s Behavior</li><li>Agent&#39s Memory</li><li>Simulation Control System</li>',

        //DETAILS
        "roles" : "Programmer, Game Designer",
        "semester": "4th",
        "teamSize": "3",
        "time": "100+ hours",
        "date": "05.07.2023",
        "engine": "Unity Engine",

        //BUTTONS
        "gitHub": "https://github.com/psikh286/SuSe23-TribeSim/tree/master/Geopolitics%20Sim/Assets/_Scripts",
        "itch": "https://psikh286.itch.io/party-chaos",
        
        //IMAGES
        "mainImg" : tribeMainImage,
        "images" : [
            tribeImage0,
            tribeImage1            
        ],
        
        //TEXT
        "info" : 'A simulation where you, as a player, can influence agents while they will adapt to their surroundings. Find food and water, rest, explore, reproduce, and pass their genes to offspring.',
        "problems": 'Agents were dying out because they explored the surrounding and couldn\'t find any food/water sources.',
        "solutions" : 'It was solved by adding memory, so agents remember where the last time they drank/ate and return to that area when they are hungry/thirsty.'
        },
    
    {
        //ON MAIN PAGE
        "title" : "Sound Of the Road",
        "coverInfo" : 'How I made a casual goofy <h2>CAR CONTROLLER</h2>',
        "cover" : soundOfTheRoadCover,
        "contribution" : '<li>Car Controller</li><li>Radio System</li> <li>Game Design</li> <li>Sound Manager</li><li>Game Event System</li><li>UI Logic</li><li>SFX Logic</li>',


        //DETAILS
        "roles" : "Programmer, Game Designer",
        "semester": "4th",
        "teamSize": "9(actually 7)",
        "time": "40+ hours",
        "date": "15.07.2023",
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
        "info" : "Casual car controls, a radio, and a low-poly, colorful, and post-apocalyptic world. YES! This game still doesn&#39t have a clear gameplay goal, but the experience is already there. My last student project(so far) is with an incredible team of 9, but actually 7 people.",
        "problems" : 'I had to make a casual fun car controller, but I didn&#39t have experience in car games.',
        "solutions" : 'I played some and created a custom physics car controller by applying different forces at 4 points without simulating actual wheels. Also made an option to switch and create custom car settings runtime.'
    },
    {
        //ON MAIN PAGE
        "title" : "End Of The World",
        "coverInfo" : 'How I made a game in <h2>7h 53m</h2>',
        "cover" : eotwCover,
        "contribution" : '<li>Game Logic</li><li>Game Design</li><li>Puzzle Design</li><li>Modified Assets</li><li>UI</li><li>Typewriter Effect</li><li>SFX + VFX Logic</li>',

        //DETAILS
        "roles" : 'Programmer, Game Designer',
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
        "title" : "Parkour Demo",
        "coverInfo" : 'My <h2>FIRST</h2> experience in <h2>UNREAL ENGINE</h2>',
        "cover" : parkourCover,
        "contribution" : '<li>Air Dash</li><li>Wall Run</li><li>Animation Blueprints</li>',

        //DETAILS
        "roles" : "Programmer, Game Designer",
        "semester": "3rd",
        "teamSize": "2",
        "time": "20-25 hours",
        "date": "18.11.2022",
        "engine": "Unreal Engine",

        //BUTTONS
        "gitHub": "https://github.com/psikh286/NarrativeJuice",
        "itch": null,

        //IMAGES
        "mainImg" : parkourMainImage,
        "images" : [
            parkourImage0,
            parkourImage1
        ],

        //TEXT
        "info" : "As a 1st experience in Unreal Engine, we built a parkour movement demo with features like wall running, sliding, air dash, and more. We used the <a href='https://www.unrealengine.com/marketplace/en-US/product/advanced-locomotion-system-v1' target='_blank' rel='noreferrer'>ALSv4 package</a> as a foundation.",
        "problems" : "The main problem was that I didn&#39t have an experience with Unreal.",
        "solutions" : "Learning Unreal from scratch wasn&#39t possible, so I started to define similarities and differences with Unity. After a while, I had a clearer picture of how to implement stuff, and I used my Bolt (Visual Scripting in Unity) knowledge gained in the 1st semester to make wall-running and air-dash.\n"
    },
    {
        //ON MAIN PAGE
        "title" : "Mendelian Genetics",
        "coverInfo" : 'How I made <h2>CONSTRUCTOR</h2> out of <h2>GENES</h2>',
        "cover" : geneticsCover,
        "contribution" : '<li>Inheritance System</li><li>Gene/Trait System</li><li>Agent&#39s State Machine</li>',

        //DETAILS
        "roles" : "Programmer",
        "semester": null,
        "teamSize": "1",
        "time": "4 hours",
        "date": "May 2023 (paused)",
        "engine": "Unity Engine",

        //BUTTONS
        "gitHub": "https://github.com/psikh286/Mendelian-Genetics/tree/master/Heredity/Assets/_Scripts",
        "itch": null,

        //IMAGES
        "images" : [
            geneticsImage0,
            geneticsImage1
        ],

        //TEXT
        "info" : 'Inspired by <a href="https://www.youtube.com/watch?v=raQ3iHhE_Kk" target="_blank" rel="noreferrer">this talk</a>. The project is an experiment with <a href="https://en.wikipedia.org/wiki/Mendelian_inheritance" target="_blank" rel="noreferrer">simple inheritance patterns</a> and aims to be designer-friendly by allowing easy modifications through the Unity inspector without opening the code editor. It can be expanded without extra refactoring.',
        "problems" : "Keep everything simple for the user and, at the same time, have complex functionality.",
        "solutions" : "I divided everything into chunks, so traits, relations between each other, and a list of those traits(genotypes) are separate objects in Unity Inspector. It also makes everything modular and reusable. I used Scriptable Objects as a bridge between designers and programmers. "
    },
    {
        //ON MAIN PAGE
        "title" : "Slimy",
        "coverInfo" : 'My <h2>FIRST SOLO</h2> Unity Project',
        "cover" : slimyCover,

        "contribution" : '<li>Grid Movement</li> <li>Level Design</li> <li>Game Design</li> <li>Dynamic world System</li> <li>UI</li> <li>Sounds</li> <li>Animations</li>',

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
        "info" : "This is a small puzzle/adventure game with world progression. It only takes one input to play.",
        "problems" : "I wanted to world change based on the player's actions, but I didn't want to create new duplicate scenes with some differences.",
        "solutions" : "I achieved it with Singleton and made the scene change according to the variables inside of it. "
    },
    {
        //ON MAIN PAGE
        "title" : "Gravity Game",
        "coverInfo" : 'How I <h2>FAKED</h2> the core mechanic',
        "cover" : gravityCover,
        "contribution" : '<li>Gravity Change Mechanic</li><li>Level Design</li><li>Game Design</li><li>Movement Buff/Debuff Mechanics</li>',

        //DETAILS
        "roles" : "Programmer, Game Designer",
        "semester": "2nd",
        "teamSize": "1",
        "time": "6-8 hours",
        "date": "16.05.2022",
        "engine": "Unity Engine",

        //BUTTONS
        "gitHub": "https://github.com/psikh286/Gravity-Game",
        "itch": "https://psikh286.itch.io/gravity",

        //IMAGES
        "mainImg" : gravityMainImage,
        "images" : [
            gravityImage0,
            gravityImage1
        ],

        //TEXT
        "info" : 'Student project with a <a href="https://github.com/Matthew-J-Spencer/Ultimate-2D-Controller" target="_blank" rel="noreferrer">custom physics 2d platformer controller</a> and the ability to change gravity. Try out parkour/puzzle levels and have fun in the sandbox.',
        "problems" : "I struggled to modify the controller's gravity direction and make the transition look neat.",
        "solutions" : "Instead of changing the gravity, I rotated a whole level around the player to fake the gravity change. It allowed me to make a smooth transition without breaking custom collision."
    },
    {
        //ON MAIN PAGE
        "title" : "Crafting Game",
        "coverInfo" : 'How I build a simple <h2>EXPANDABLE</h2> crafting <h2>SYSTEM</h2>',
        "cover" : craftingCover,
        "contribution" : '<li>Crafting System</li> <li>UI Handler</li> <li>UI</li> <li>Game Design</li>',
        
        //DETAILS
        "roles" : "Programmer, Game Designer",
        "semester": "2nd",
        "teamSize": "1",
        "time": "10-12 hours",
        "date": "09.05.2022",
        "engine": "Unity Engine",

        //BUTTONS
        "gitHub": "https://github.com/psikh286/Crafting-Game",
        "itch": "https://psikh286.itch.io/craft",

        //IMAGES
        "mainImg" : craftingMainImage,
        "images" : [
            craftingImage0,
            craftingImage1
        ],

        //TEXT
        "info" : "Student project where I create a high-pace crafting game that becomes messy quickly. Craft required items while new materials pop up every second.",
        "problems" : "Every element in the game is UI, and due to a lack of knowledge back then, it was a big challenge to make everything work.",
        "solutions" : "There is no fancy solution here. I've read a bunch of Unity docs and made it work." 
    },
];

export { projects };