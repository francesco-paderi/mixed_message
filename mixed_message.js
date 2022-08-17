const dayQuotes = () => {
  const arr = [
    'When you have a dream, youve got to grab it and never let go.— Carol Burnett', 

    '\"Nothing is impossible. The word itself says \'I\'m possible!\'\" — Audrey Hepburn', 

    '\"There is nothing impossible to they who will try.\" — Alexander the Great',

    '\"The bad news is time flies. The good news is you\'re the pilot.\" — Michael Altshuler',

    '\"Life has got all those twists and turns. You\'ve got to hold on tight and off you go.\" — Nicole Kidman',

    '\"Keep your face always toward the sunshine, and shadows will fall behind you.\" — Walt Whitman',

    '\"Be courageous. Challenge orthodoxy. Stand up for what you believe in. When you are in your rocking chair talking to your grandchildren many years from now, be sure you have a good story to tell.\" — Amal Clooney',

    '\"You make a choice: continue living your life feeling muddled in this abyss of self-misunderstanding, or you find your identity independent of it. You draw your own box.\" — Duchess Meghan',

    '\"I just want you to know that if you are out there and you are being really hard on yourself right now for something that has happened ... it\'s normal. That is what is going to happen to you in life. No one gets through unscathed. We are all going to have a few scratches on us. Please be kind to yourselves and stand up for yourself, please.\" — Taylor Swift',

    '\"Success is not final, failure is not fatal: it is the courage to continue that counts.\" - Winston Churchill',

    '\"You define your own life. Don\'t let other people write your script.\" — Oprah Winfrey',

    '\"You are never too old to set another goal or to dream a new dream.\" — Malala Yousafzai',

    '\"At the end of the day, whether or not those people are comfortable with how you\'re living your life doesn\'t matter. What matters is whether you\'re comfortable with it.\" — Dr. Phil',

    '\"People tell you the world looks a certain way. Parents tell you how to think. Schools tell you how to think. TV. Religion. And then at a certain point, if you\'re lucky, you realize you can make up your own mind. Nobody sets the rules but you. You can design your own life.\" - Carrie Ann Moss',

    '\"For me, becoming isn’t about arriving somewhere or achieving a certain aim. I see it instead as forward motion, a means of evolving, a way to reach continuously toward a better self. The journey doesn\'t end.\" — Michelle Obama',

    '\"Spread love everywhere you go.\" — Mother Teresa',

    '\"Do not allow people to dim your shine because they are blinded. Tell them to put some sunglasses on.\" — Lady Gaga',

    '\"If you make your internal life a priority, then everything else you need on the outside will be given to you and it will be extremely clear what the next step is.\" — Gabrielle Bernstein',

    '\"You don\'t always need a plan. Sometimes you just need to breathe, trust, let go and see what happens.\" — Mandy Hale',

    '\"You can be everything. You can be the infinite amount of things that people are.\" — Kesha'
  ];
  
  for(let i = 4; i < arr.length; i++){
    let randomQuotes = Math.floor(Math.random() * arr.length);
    return `
    ${arr[randomQuotes]}
    `;
  }
}

//ciao

console.log(dayQuotes());