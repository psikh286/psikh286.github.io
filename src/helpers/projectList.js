//region Imports

/*GRAVITY*/
import gravityCover from '../img/gravity/Gravity_cover.png'
import gravityMainImage from '../img/gravity/Gravity_main.png'
import gravityImage0 from '../img/gravity/Gravity_1.png'
import gravityImage1 from '../img/gravity/Gravity_2.png'

/*SLIMY*/
import slimyCover from '../img/slimy/Slimy_cover.png'
import slimyMainImage from '../img/slimy/Slimy_main.png'
import slimyImage0 from '../img/slimy/Slimy_0.png'
import slimyImage1 from '../img/slimy/Slimy_1.png'

/*EOTW*/
import eotwCover from '../img/eotw/EOTW_cover.png'
import eotwMainImage from '../img/eotw/EOTW_main.png'
import eotwImage0 from '../img/eotw/EOTW_1.png'
import eotwImage1 from '../img/eotw/EOTW_2.png'

/*PARTY CHAOS*/
import partyChaosCover from '../img/partyChaos/PartyChaos_cover.png'
import partyChaosMainImage from '../img/partyChaos/PartyChaos_0.png'
import partyChaosImage0 from '../img/partyChaos/PartyChaos_1.png'
import partyChaosImage1 from '../img/partyChaos/PartyChaos_5.png'

/*SOUND OF THE ROAD*/
import soundOfTheRoadCover from '../img/soundOfTheRoad/SoundOfTheRoad_cover.png'
import soundOfTheRoadMainImage from '../img/soundOfTheRoad/SoundOfTheRoad_cover.png'
import soundOfTheRoadImage0 from '../img/soundOfTheRoad/SoundOfTheRoad_cover.png'
import soundOfTheRoadImage1 from '../img/soundOfTheRoad/SoundOfTheRoad_cover.png'

/*GENETICS*/
/*import geneticsCover from '../img/genetics/Genetics_cover.png'
import geneticsMainImage from '../img/genetics/Genetics_main.png'
import geneticsImage0 from '../img/genetics/Genetics_1.png'
import geneticsImage1 from '../img/genetics/Genetics_2.png'*/
import geneticsCover from '../img/blank.png'
import geneticsMainImage from '../img/blank.png'
import geneticsImage0 from '../img/blank.png'
import geneticsImage1 from '../img/blank.png'

/*CRAFT*/
import craftingCover from '../img/crafting/Craft_cover.png'
import craftingMainImage from '../img/blank.png'
import craftingImage0 from '../img/crafting/Craft_1.png'
import craftingImage1 from '../img/crafting/Craft_2.png'

/*PARKOUR DEMO*/
import parkourCover from '../img/blank.png'
import parkourMainImage from '../img/blank.png'
import parkourImage0 from '../img/blank.png'
import parkourImage1 from '../img/blank.png'


//endregion

const projects = [
    {
        //ON MAIN PAGE
        "title" : "Party Chaos",
        //"coverInfo" : 'How I made my ' + '<i>BEST</i>' + ' game',
        "coverInfo" : 'My<h2>BEST</h2>Game',
        "cover" : partyChaosCover,

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
        "info" : 'Local multiplayer party game with the support of 2-8 people and a bunch of fun minigames. It is a “Pass the Controller” type game. <br/><br/> <i> I would love to answer your questions! However, I don’t want to share the code source.</i>',
        "problems" : '<ol><li>Players\' orders might feel repetitive over time.</li><li>Minigames order decided by pure random might lead to unfair outcomes while keeping order the same is repetitive. (old version of the game)</li><li>Create a procedurally generated Hub where players can pick the next game and make everything appealing.</li></ol>',
        "solutions" : '<ol><li>I implemented a shuffle to ensure that each person plays against every other person before reshuffling. And players can’t play 2 games in a row (except if it’s 1 player team).</li><li> We divided our games on the “type” of skills(fast/luck/skill-based) and the emotions that they invoke. After we created templates of which type of games should be played next. And I made a system that uses those templates to pick random but suitable games. (old version of the game)</li><li>I recreated mini versions(previews) of each minigame in the Hub, where players can test it and vote if they like it. After a minigame is played, the preview turns gray until all minigames are played. And to make everything a bit cooler, added Lego building stile animations for previews and a bunch of physics objects to mess around with.</li></ol>',
    },
    {
        //ON MAIN PAGE
        "title" : "End Of The World",
        "coverInfo" : 'How I made a game in <h2>7h 53m</h2>',
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
        "coverInfo" : 'My <h2>FIRST SOLO</h2> Unity Project',
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
        "coverInfo" : 'How I made a casual goofy <h2>CAR CONTROLLER</h2>',
        "cover" : soundOfTheRoadCover,

        //DETAILS
        "roles" : "Programmer, Game Designer",
        "semester": "4th",
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
        "coverInfo" : 'How I <h2>FAKED</h2> the core mechanic',
        "cover" : gravityCover,

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
        "title" : "Mendelian Genetics",
        "coverInfo" : 'My <h2>EXPERIMENT</h2> with <h2>Scriptable Objects</h2>',
        "cover" : geneticsCover,

        //DETAILS
        "roles" : "Programmer",
        "semester": null,
        "teamSize": "1",
        "time": "4 hours",
        "date": "May 2023 (paused)",
        "engine": "Unity Engine",

        //BUTTONS
        "gitHub": "https://github.com/psikh286/Mendelian-Genetics",
        "itch": null,

        //IMAGES
        "mainImg" : geneticsMainImage,
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
        "title" : "Crafting Game",
        "coverInfo" : 'How I build a simple <h2>EXPANDABLE</h2> crafting <h2>SYSTEM</h2>',
        "cover" : craftingCover,

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
    {
        //ON MAIN PAGE
        "title" : "Parkour Demo",
        "coverInfo" : 'My <h2>FIRST</h2> experience in <h2>Unreal Engine</h2>',
        "cover" : parkourCover,

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
        "problems" : "The main problem was that I didn’t have an experience with Unreal.",
        "solutions" : "Learning Unreal from scratch wasn’t possible, so I started to define similarities and differences with Unity. After a while, I had a clearer picture of how to implement stuff, and I used my Bolt (Visual Scripting in Unity) knowledge gained in the 1st semester to make wall-running and air-dash.\n"
    }
];

export { projects };