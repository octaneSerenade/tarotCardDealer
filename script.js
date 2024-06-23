/*This project contains an array of all tarot cards (based on the TWU by Kim Krans).
It picks three cards: past, present, future. Cards will be picked randomly and only once, imitating a real card deck.
The explanation of the cards remain vague, so that the user can practice their intuition.
Have fun!
*/

//later versions: user asks a question, spread gets chosen
//later versions: array as object, more keys/properties, and different types of questions to choose from

//Array of Tarot Cards
const arrTarot = [
    //Major Arcana
    "    0 THE FOOL:           innocence, naivety, spontaneity, starting out",
    "    I THE MAGICIAN:       action, self-empowerment, purpose",
    "   II THE HIGH PRIESTESS: mystery, non-action, going within",
    "  III THE EMPRESS:        the mother, sensuality, creation, nature",
    "   IV THE EMPEROR:        the father, protection, logic, stability",
    "    V THE HIEROPHANT:     mentor, teacher, higher knowledge",
    "   VI THE LOVERS:         union, partnership, joy",
    "  VII THE CHARIOT:        strong will, achievement, triumph",
    " VIII JUSTICE:            looming decision, karma unfolding",
    "   IX THE HERMIT:         solitude, self-reflection, meditation",
    "    X WHEEL OF FORTUNE:   destiny, fate, change of course",
    "   XI STRENGTH:           patience, mastery of emotions, courage",
    "  XII THE HANGED MAN:     sacrifice, letting go, new perspectives",
    " XIII DEATH:              necessary ending, closure, transformation",
    "  XIV TEMPERANCE:         healing, renewal, balance",
    "   XV THE DEVIL:          negativity, materialism, addiction",
    "  XVI THE TOWER:          unexpected upheaval, crisis, change",
    " XVII THE STAR:           hope, peace of mind, wonder",
    "XVIII THE MOON:           vivid dreams and fears, mystery",
    "  XIX THE SUN:            new vitality, health, enlightenment",
    "   XX JUDGMENT:           rebirth, forgiveness, awakening",
    "  XXI THE WORLD:          completion, wholeness, contentment"
];

//spread
let arrSpread = [];


//Card choose and card splicer
for(let i = 0; i < 3; i++)
    {
    let pickIndex = Math.round(Math.random() * (arrTarot.length -1));
    let pickCard = arrTarot[pickIndex];
    arrSpread.push(pickCard);
    arrTarot.splice(pickIndex, 1);
    }


//Output: past-present-future
console.log("Thank you for playing PAST-PRESENT-FUTURE. Here are the results:");
console.log("Your past:    " + arrSpread[0]);
console.log("Your present: " + arrSpread[1]);
console.log("Your future:  " + arrSpread[2]);
