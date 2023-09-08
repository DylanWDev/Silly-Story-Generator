// COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length)
    return array[random];
}

// RAW TEXT STRINGS

let storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
// Variable containing story string
const insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
const insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
const insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];
//arrays containing filler words for story

// EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {

    let newStory = storyText
    // variable to create a random story when button is pressed
    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);
    // returns a random string from XYZ variables

    newStory = newStory.replaceAll(':insertx:', xItem);
    newstory = newStory.replaceAll(':inserty:', yItem);
    newStory = newStory.replaceAll(':inseryz:', zItem);
    // adds random string variables to story
    
    if (customName.value !== '')  {
        const name = customName.value;
        newStory = newStory.replace('Bob', name);
        //replaces bob with a name the user inputs
    }

    if (document.getElementById("uk").checked) {
        const weight = Math.round(300 * 0.07142857) + " stone"; // converts punds to stone
        const temperature = Math.round(94 - 32) * 5/9 + " centigrade"; // converts fahrenheit to centigrade
        newStory = newStory.replace('94 fahrenheit', temperature);
        newStory = newStory.replace('300 pounds', weight);
        // replaces replaces temperature and weight if UK is checked with the converted ones
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}
