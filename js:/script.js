// JavaScript
// 1. MASTER LIST OF ALL BIRDS
const allBirdNames = [
        "Indian Spot-billed Duck",
        "Rock Pigeon",
        "Spotted Dove",
        "Asian Koel",
        "Eurasian Coot",
        "Gray-headed Swamphen",
        "Red-wattled Lapwing",
        "Common Sandpiper",
        "Little Grebe",
        "Little Cormorant",
        "Great Cormorant",
        "Indian Pond-Heron",
        "Gray Heron",
        "Black Kite",
        "Brahminy Kite",
        "Black Drongo",
        "House Crow",
        "House Sparrow",
        "White-browed Wagtail",
        "White-breasted Waterhen",
        "Pheasant-tailed Jacana",
        "Bronze-winged Jacana",
        "Little Egret",
        "Eastern Cattle-Egret",
        "Medium Egret",
        "Purple Heron",
        "Pied Kingfisher",
        "Coppersmith Barbet",
        "White-cheeked Barbet",
        "Large-billed Crow",
        "Jungle Prinia",
        "Ashy Prinia",
        "Plain Prinia",
        "Blyth's Reed Warbler",
        "Barn Swallow",
        "Eastern Red-rumped Swallow",
        "Yellow-billed Babbler",
        "Chestnut-tailed Starling",
        "Common Myna",
        "Indian Robin",
        "Oriental Magpie-Robin",
        "Purple-rumped Sunbird",
        "Garganey",
        "Northern Shoveler",
        "Northern Pintail",
        "Green-winged Teal",
        "Indian Peafowl",
        "Gray Francolin",
        "Eurasian Collared-Dove",
        "Red Collared-Dove",
        "Laughing Dove",
        "Greater Coucal",
        "Little Swift",
        "Eurasian Moorhen",
        "Black-winged Stilt",
        "Green Sandpiper",
        "Wood Sandpiper",
        "Common Greenshank",
        "Barred Buttonquail",
        "Whiskered Tern",
        "River Tern",
        "Asian Openbill",
        "Painted Stork",
        "Oriental Darter",
        "Glossy Ibis",
        "Black-headed Ibis",
        "Eurasian Spoonbill",
        "Black-crowned Night Heron",
        "Spot-billed Pelican",
        "Black-winged Kite",
        "Shikra",
        "Spotted Owlet",
        "Indian Gray Hornbill",
        "Asian Green Bee-eater",
        "Blue-tailed Bee-eater",
        "White-throated Kingfisher",
        "Indian Roller",
        "Rose-ringed Parakeet",
        "Indian Golden Oriole",
        "Brown Shrike",
        "Jerdon's Bushlark",
        "Common Tailorbird",
        "Zitting Cisticola",
        "Wire-tailed Swallow",
        "Streak-throated Swallow",
        "White-browed Bulbul",
        "Red-whiskered Bulbul",
        "Rosy Starling",
        "Pied Bushchat",
        "Pale-billed Flowerpecker",
        "Purple Sunbird",
        "Baya Weaver",
        "White Wagtail",
        "Paddyfield Pipit",
        "Indian Paradise-Flycatcher",
        "Oriental Honey-buzzard",
        "Common Kingfisher",
        "Asian Tit",
        "Ashy-crowned Sparrow-Lark",
        "Indian Silverbill",
        "Red-vented Bulbul",
        "Tawny-bellied Babbler",
        "Common Hawk-Cuckoo",
        "Marsh Sandpiper",
        "Little Stint",
        "Great Egret",
        "Western Marsh Harrier",
        "Alexandrine Parakeet",
        "Common Iora",
        "Booted Warbler",
        "Sykes's Warbler",
        "Jungle Myna",
        "Western Yellow Wagtail",
        "Montagu's Harrier",
        "Bay-backed Shrike",
        "Long-tailed Shrike",
        "Rufous Treepie",
        "Scaly-breasted Munia",
        "Red Avadavat",
        "Blyth's Pipit",
        "Tree Pipit",
        "Ashy Drongo",
        "Greenish Warbler",
        "Blue Rock-Thrush",
        "Gray-bellied Cuckoo",
        "Little Ringed Plover",
        "Pin-tailed Snipe",
        "Asian Woolly-necked Stork",
        "Greater Spotted Eagle",
        "Indian White-eye",
        "Black-rumped Flameback",
        "Blue-faced Malkoha",
        "Lesser Whistling-Duck",
        "Brahminy Starling",
        "Booted Eagle",
        "Red-necked Falcon",
        "Eurasian Kestrel",
        "Rufous-tailed Lark",
        "Bonelli's Eagle",
        "Pallid Harrier",
        "White-eyed Buzzard",
        "Indian Scops-Owl",
        "Eurasian Hoopoe",
        "Spot-breasted Fantail",
        "Yellow-eyed Babbler",
        "Large Gray Babbler",
        "Loten's Sunbird",
        "Jerdon's Leafbird",
        "Asian Palm Swift",
        "Short-toed Snake-Eagle",
        "Ashy Woodswallow",
        "Oriental Skylark",
        "Clamorous Reed Warbler",
        "White-rumped Munia",
        "Green Warbler",
        "Gray Wagtail",
        "Lesser Whitethroat",
        "Common Rosefinch",
        "Yellow-wattled Lapwing",
        "Dusky Crag-Martin",
        "Black-headed Cuckooshrike",
        "Small Minivet",
        "White-naped Woodpecker",
        "Indian Cormorant",
        "Red Spurfowl",
        "Gray Junglefowl",
        "Puff-throated Babbler",
        "Tawny Eagle",
        "Indian Spotted Eagle",
        "Yellow-throated Bulbul",
        "Tickell's Blue Flycatcher",
        "Siberian Stonechat",
        "Striated Heron",
        "Taiga Flycatcher",
        "Tawny Pipit",
        "Pied Cuckoo",
        "Peregrine Falcon",
        "Indian Nightjar",
        "Indian Thick-knee",
        "Black-tailed Godwit",
        "Paddyfield Warbler",
        "Steppe Eagle",
        "Indian Pitta",
        "Common Woodshrike",
        "White-bellied Drongo",
        "Greater Painted-Snipe",
        "Asian Brown Flycatcher",
        "Painted Spurfowl",
        "Jungle Bush-Quail",
        "Gray-breasted Prinia",
        "Jungle Babbler",
        "Indian Cuckooshrike",
        "Pied Harrier",
        "Tawny Lark",
        "Egyptian Vulture",
        "Tricolored Munia",
        "Sirkeer Malkoha",
        "Western Crowned Warbler",
        "Temminck's Stint",
        "Hair-crested Drongo",
        "Indian Blue Robin",
        "Ruddy-breasted Crake",
        "Gull-billed Tern",
        "Red-breasted Flycatcher",
        "Black-naped Monarch",
        "Verditer Flycatcher",
        "Common Cuckoo",
        "Oriental Turtle-Dove",
        "Eurasian Wryneck",
        "Eastern Yellow Wagtail",
        "Richard's Pipit",
        "Mottled Wood-Owl",
        "Eastern Barn Owl",
        "Large-billed Leaf Warbler",
        "Plum-headed Parakeet",
        "Common Snipe",
        "Knob-billed Duck",
        "Baillon's Crake",
        "Black-headed Bunting",
        "Orange-headed Thrush",
        "Rock Bush-Quail",
        "Ruff",
        "Blue-throated Flycatcher",
        "Brown-breasted Flycatcher",
        "Kentish Plover",
        "Black-naped Oriole",
        "Tibetan Sand-Plover",
        "Streaked Weaver",
        "European Roller",
        "Pacific Golden-Plover",
        "Red-headed Bunting",
        "Long-toed Stint",
        "Alpine Swift",
        "Long-billed Pipit",
        "Common Redshank",
        "Rain Quail",
        "Terek Sandpiper",
        "Changeable Hawk-Eagle",
        "Black Eagle",
        "Thick-billed Flowerpecker",
        "Yellow Bittern",
        "Jerdon's Nightjar",
        "Common Babbler",
        "Tickell's Leaf Warbler",
        "Small Pratincole",
        "Indian Blackbird",
        "Eastern Orphean Warbler",
        "Thick-billed Warbler",
        "Eurasian Sparrowhawk",
        "Bank Swallow",
        "Cotton Pygmy-Goose",
        "Bluethroat",
        "Black-breasted Weaver",
        "Blue-capped Rock-Thrush",
        "Black Redstart",
        "Gray-headed Lapwing",
        "Spotted Redshank",
        "Black-hooded Oriole",
        "Red-naped Ibis",
        "Eurasian Wigeon",
        "Vernal Hanging-Parrot",
        "Yellow-throated Sparrow",
        "Red-throated Pipit",
        "Mongolian Short-toed Lark",
        "Gray-necked Bunting",
        "Amur Falcon",
        "Eurasian Hobby",
        "Common Buzzard",
        "Cinnamon Bittern",
        "Black Stork",
        "Osprey",
        "Hume's Warbler",
        "Citrine Wagtail",
        "Black-capped Kingfisher",
        "Malabar Starling",
        "Indian Bushlark",
        "Black Bittern",
        "Indian Scimitar-Babbler",
        "Bar-headed Goose",
        "Common Pochard",
        "Oriental Pratincole",
        "Common Grasshopper Warbler",
        "Yellow-crowned Woodpecker",
        "Chestnut-headed Bee-eater",
        "Fulvous Whistling-Duck",
        "Jungle Nightjar",
        "Watercock",
        "Sulphur-bellied Warbler",
        "Little Tern",
        "Lesser Cuckoo",
        "Spotted Crake",
        "Ultramarine Flycatcher",
        "White Stork",
        "Bristled Grassbird",
        "Caspian Tern",
        "Savanna Nightjar",
        "Eurasian Curlew",
        "Isabelline Wheatear",
        "Common Tern",
        "Greater Flamingo",
        "Western Reef-Heron",
        "Crested Serpent-Eagle",
        "Gadwall",
        "Slaty-breasted Rail",
        "Brown Crake",
        "Gray-throated Martin",
        "Olive-backed Pipit",
        "Yellow-legged Buttonquail",
        "Brown-rumped Minivet",
        "Brown-headed Gull",
        "Lesser Kestrel",
        "Great Thick-knee",
        "European Bee-eater",
        "Ruddy Shelduck",
        "Lesser Flamingo",
        "Rock Eagle-Owl",
        "Black-bellied Tern"
];

// 2. QUIZ BIRDS (with audio)
const quizBirds = [
        {
                name: "Indian Spot-billed Duck",
                audio: "https://github.com/luharsmh/bird-sounds/raw/main/indianspot-billedduck.mp3"
        }, // Fixed: Added comma here
        {
                name: "Rock Pigeon",
                audio: "https://github.com/luharsmh/bird-sounds/raw/main/rockpigeon.mp3"
        },
        {
                name: "Asian Koel",
                audio: "https://github.com/luharsmh/bird-sounds/raw/refs/heads/main/asiankoel.mp3" },
      {
                name: "Spotted Dove",
                audio: "https://github.com/luharsmh/bird-sounds/raw/refs/heads/main/spotteddove.mp3" },
    
        { name: "Eurasian Coot", audio: "https://github.com/luharsmh/bird-sounds/raw/refs/heads/main/eurasian-coot.mp3" },
    
        { name: "Gray-headed Swamphen", audio: "https://github.com/luharsmh/bird-sounds/raw/refs/heads/main/grey-headed-swamphen.mp3" },
    
        { name: "Red-wattled Lapwing", audio: "https://github.com/luharsmh/bird-sounds/raw/refs/heads/main/red-wattled-lapwing.mp3" },
    
        { name: "Common Sandpiper", audio: "https://github.com/luharsmh/bird-sounds/raw/refs/heads/main/common-sandpiper.mp3" },
    
        { name: "Little Grebe", audio: "https://github.com/luharsmh/bird-sounds/raw/refs/heads/main/little-grebe.mp3" },
    
        { name: "Little Cormorant", audio: "https://github.com/luharsmh/bird-sounds/raw/refs/heads/main/little-cormorant.mp3" },
    
        { name: "Great Cormorant", audio: "https://github.com/luharsmh/bird-sounds/raw/refs/heads/main/great-cormorant.mp3" },
    
        { name: "Indian Pond-Heron", audio: "https://github.com/luharsmh/bird-sounds/raw/refs/heads/main/indian-pond-heron.mp3" },
    
        { name: "Gray Heron", audio: "https://github.com/luharsmh/bird-sounds/raw/refs/heads/main/grey-heron.mp3" },
    
        { name: "Black Kite", audio: "https://github.com/luharsmh/bird-sounds/raw/refs/heads/main/black-kite.mp3" },
    
        { name: "Brahminy Kite", audio: "https://github.com/luharsmh/bird-sounds/raw/refs/heads/main/brahminy-kite.mp3" },
    
        { name: "Black Drongo", audio: "https://github.com/luharsmh/bird-sounds/raw/refs/heads/main/black-drongo.mp3" },
    
        { name: "House Crow", audio: "https://github.com/luharsmh/bird-sounds/raw/refs/heads/main/house-crow.mp3" },
    
        { name: "House Sparrow", audio: "https://github.com/luharsmh/bird-sounds/raw/refs/heads/main/house-sparrow.mp3" },
    
        { name: "White-browed Wagtail", audio: "https://github.com/luharsmh/bird-sounds/raw/refs/heads/main/white-browed-wagtail.mp3" },
    
        { name: "White-breasted Waterhen", audio: "https://github.com/luharsmh/bird-sounds/raw/refs/heads/main/white-breasted-waterhen.mp3" },
    
];
 
            
let currentBird;
let streak = 0;
let usedBirds = [];

// MUST HAVE THIS FUNCTION
function startQuiz() {
        document.getElementById('homeScreen').style.display = 'none';
        document.getElementById('quizScreen').style.display = 'block';
        loadQuestion();
}

// Rest of the functions (keep all these)
function loadQuestion() {
        const availableBirds = quizBirds.filter(bird => !usedBirds.includes(bird.name));
        if (availableBirds.length === 0) usedBirds = [];
        
        currentBird = availableBirds[Math.floor(Math.random() * availableBirds.length)];
        usedBirds.push(currentBird.name);

        const options = [currentBird.name];
        while (options.length < 4) {
                const randomBird = allBirdNames[Math.floor(Math.random() * allBirdNames.length)];
                if (!options.includes(randomBird)) options.push(randomBird);
        }
        
        displayOptions(shuffleArray(options));
        
        const audioElement = document.getElementById('birdAudio');
        audioElement.src = currentBird.audio;
        audioElement.play();
}

function displayOptions(options) {
        const choicesDiv = document.getElementById('choices');
        choicesDiv.innerHTML = '';
        options.forEach(option => {
                const button = document.createElement('button');
                button.className = 'choice-btn';
                button.textContent = option;
                button.onclick = () => checkAnswer(option);
                choicesDiv.appendChild(button);
        });
}

function checkAnswer(selected) {
        const buttons = document.querySelectorAll('.choice-btn');
        buttons.forEach(button => {
                button.disabled = true;
                if (button.textContent === currentBird.name) {
                        button.classList.add('correct');
                } else if (button.textContent === selected) {
                        button.classList.add('wrong');
                }
        });

        streak = selected === currentBird.name ? streak + 1 : 0;
        document.getElementById('streakCounter').textContent = streak;
        document.getElementById('nextBtn').disabled = false;
}

function nextQuestion() {
        document.getElementById('nextBtn').disabled = true;
        loadQuestion();
}

function restartQuiz() {
        streak = 0;
        usedBirds = [];
        document.getElementById('streakCounter').textContent = streak;
        loadQuestion();
}

function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
}
