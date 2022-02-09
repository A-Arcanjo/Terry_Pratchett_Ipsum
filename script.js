// TERRY PRATCHETT DUMMY TEXT GENERATOR

const text = [
  `This was the Captain Samuel Vimes ‘Boots’ theory of socio-economic unfairness. It would seem that you have no useful skill or talent whatsoever," he said. "Have you thought of going into teaching? You can't give her that!' she screamed. 'It's not safe!'IT'S A SWORD, said the Hogfather. THEY'RE NOT MEANT TO BE SAFE 'She's a child!' shouted Crumley.IT'S EDUCATIONAL. 'What if she cuts herself?'THAT WILL BE AN IMPORTANT LESSON.`,
  `Why do you go away? So that you can come back. So that you can see the place you came from with new eyes and extra colors. And the people there see you differently, too. Coming back to where you started is not the same as never leaving. Open your eyes and then open your eyes again.`,
  `The disc, being flat, has no real horizon. Any adventurous sailor who got funny ideas from staring at eggs and oranges for too long and set out for the antipodes soon learned that the reason why distant ships sometimes looked as though they were disappearing over the edge of the world was that they were disappearing over the edge of the world.`,
  `Murder was in fact a fairly uncommon event in Ankh-Morpork, but there were a lot of suicides. Walking in the night-time alleyways of The Shades was suicide. Asking for a short in a dwarf bar was suicide. Saying 'Got rocks in your head?' to a troll was suicide. You could commit suicide very easily, if you weren't careful. Odd thing, ain't it... you meet people one at a time, they seem decent, they got brains that work, and then they get together and you hear the voice of the people. And it snarls.`,
  `[Y]ou weren't born with a talent for witchcraft: it didn't come easily; you worked hard at it because you wanted it. You forced the world to give it to you, no matter the price, and the price is and always will be high... People say you don't find witchcraft; witchcraft finds you. But you've found it, even if at the time you didn't know what it was you were finding, and you grabbed it by its scrawny neck and made it work for you.`,
  `On the Kite, the situation was being 'workshopped'. This is the means by which people who don't know anything get together to pool their ignorance. Sometimes the moon is light and sometimes it's in shadow, but you should always remember it's the same moon. Nanny Ogg usually went to bed early. After all, she was an old lady. Sometimes she went to bed as early as 6 a.m.`,
  `Sometimes he seemed to be saying that nothing existed unless people thought it did, and the world was really only there at all because people kept on imagining it. But then he seemed to be saying that there were lots of worlds, all nearly the same and all sort of occupying the same place but all separated by the thickness of a shadow, so that everything that ever could happen would have somewhere to happen in.`,
  `There were lessons later on. These were going a lot better now she’d got rid of the reading books about bouncy balls and dogs called Spot. She’d got Gawain on to the military campaigns of General Tacticus, which were suitably bloodthirsty but, more importantly, considered too difficult for a child. As a result his vocabulary was doubling every week and he could already use words like ‘disembowelled’ in everyday conversation. After all, what was the point of teaching children to be children? They were naturally good at it.`,
  `The important thing about having lots of things to remember is that you've got to go somewhere afterwards where you can remember them, you see? You've got to stop. You've haven't really been anywhere until you've got back home. Don't put your faith in gods. But you can believe in turtles. People don't want to see what can't possibly exist.`,
  `The harder I work, the luckier I become. There was silence in the square, except for the sound of several thousand people being astonished. When you break rules, break 'em good and hard. HUMAN BEINGS MAKE LIFE SO INTERESTING. DO YOU KNOW, THAT IN A UNIVERSE SO FULL OF WONDERS, THEY HAVE MANAGED TO INVENT BOREDOM.`,
];

function ipsumGenerator(parAmount) {
  // parameter - the input of the desired number of paragraphs
  const random = Math.floor(Math.random() * text.length); // returns a random integer, round it down based on text.length
  // console.log(text.length)
  // console.log(random)

  // IF parameter is empty/NaN || negative || greater than 10 THEN CALL one random paragraph
  if (isNaN(parAmount) || parAmount <= 0 || parAmount > 10) {
    return `${text[random]}`; // pass variable text with random value, [indexOf] 
  } else {
    let dummyText = text.slice(0, parAmount) // .slice starts index 0, parAmount determines the indexOf the second cut, where the copy of the array will be created
   
      .join("\n"); // it will print the paragraphs as one text, without it we get an array with strings.

    return dummyText;
  }
}

console.log(ipsumGenerator());
