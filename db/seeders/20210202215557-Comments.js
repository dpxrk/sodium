"use strict";

const { User } = require("../models");

const { Article } = require("../models");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    let userNum = await User.count();
    let articleNum = await Article.count();

    return queryInterface.bulkInsert(
      "Comments",
      [
        {
          userId: Math.floor(Math.random() * userNum+1) ,
          articleId: Math.floor(Math.random() * articleNum+1),
          content: "Questionable at best....",
        },
        {
          userId: 2,
          articleId: 3,
          content:
            "Excited to hear more about this in the coming months! <3 <3 <3",
        },
        {
          userId: 1,
          articleId: 2,
          content: "just reading about this garbage makes me SALTY >:(",
        },
        {
          userId: Math.floor(Math.random() * userNum+1) ,
          articleId: Math.floor(Math.random() * articleNum+1),
          content: "This ain't that salty",
        },
        {
          userId: Math.floor(Math.random() * userNum+1) ,
          articleId: Math.floor(Math.random() * articleNum+1),
          content: "Whaaaaatt???",
        },
        {
          userId: Math.floor(Math.random() * userNum+1) ,
          articleId: Math.floor(Math.random() * articleNum+1),
          content:
            "I need to stay posted on this. This is going to be on my favorites.",
        },
        {
          userId: Math.floor(Math.random() * userNum+1) ,
          articleId: Math.floor(Math.random() * articleNum+1),
          content: "Jeez, who allows for this stuff to ever happen?",
        },
        {
          userId: Math.floor(Math.random() * userNum+1) ,
          articleId: Math.floor(Math.random() * articleNum+1),
          content: "I don't think you deserve all these salts",
        },
        {
          userId: Math.floor(Math.random() * userNum+1) ,
          articleId: Math.floor(Math.random() * articleNum+1),
          content:
            "Please allow me to introduce myself I'm a man of wealth and taste I've been around for a long, long year Stole many a mans soul and faith And I was round when jesus christ Had his moment of doubt and pain.",
        },
        {
          userId: Math.floor(Math.random() * userNum+1) ,
          articleId: Math.floor(Math.random() * articleNum+1),
          content:
            "A good lawyer knows the law; a clever one takes the judge to lunch.",
        },
        {
          userId: Math.floor(Math.random() * userNum+1) ,
          articleId: Math.floor(Math.random() * articleNum+1),
          content:
            "In my life there's been heartache and pain I don't know if I can face it again Can't stop now, I've traveled so far To change this lonely life.",
        },
        {
          userId: Math.floor(Math.random() * userNum+1) ,
          articleId: Math.floor(Math.random() * articleNum+1),
          content:
            "Oppan Gangnam Style Gangnam Style Op op op op oppan Gangnam Style Gangnam Style Op op op op oppan Gangnam Style.",
        },
        {
          userId: Math.floor(Math.random() * userNum+1) ,
          articleId: Math.floor(Math.random() * articleNum+1),
          content:
            "Loving you Isn't the right thing to do How can I Ever change things that I feel? If I could Maybe I'd give you my world How can I When you won't take it from me?",
        },
        {
          userId: Math.floor(Math.random() * userNum+1) ,
          articleId: Math.floor(Math.random() * articleNum+1),
          content:
            "People always told me be careful of what you do And dont go around breaking young girls' hearts And mother always told me be careful of who you love And be careful of what you do cause the lie becomes the truth.",
        },
        {
          userId: Math.floor(Math.random() * userNum+1) ,
          articleId: Math.floor(Math.random() * articleNum+1),
          content: "If I roll once and you roll twice. What does that mean?",
        },
        {
          userId: Math.floor(Math.random() * userNum+1) ,
          articleId: Math.floor(Math.random() * articleNum+1),
          content: "If I could I would. Wether or not I should, I still would.",
        },
        {
          userId: Math.floor(Math.random() * userNum+1) ,
          articleId: Math.floor(Math.random() * articleNum+1),
          content:
            "Don't steal, don't lie, don't cheat, don't sell drugs. The government hates competition!",
        },
        {
          userId: Math.floor(Math.random() * userNum+1) ,
          articleId: Math.floor(Math.random() * articleNum+1),
          content:
            "After one look at this planet any visitor from outer space would say “I WANT TO SEE THE MANAGER.”",
        },
        {
          userId: Math.floor(Math.random() * userNum+1) ,
          articleId: Math.floor(Math.random() * articleNum+1),
          content:
            "Some people come into our lives and leave footprints on our hearts, while others come into our lives and make us wanna leave footprints on their face.",
        },

        {
          userId: Math.floor(Math.random() * userNum+1) ,
          articleId: Math.floor(Math.random() * articleNum+1),
          content: "That just warms the heart.",
        },
        {
          userId: Math.floor(Math.random() * userNum+1) ,
          articleId: Math.floor(Math.random() * articleNum+1),
          content: "Crap on a stick.",
        },
        {
          userId: Math.floor(Math.random() * userNum+1) ,
          articleId: Math.floor(Math.random() * articleNum+1),
          content: "They're stupid.",
        },
        {
          userId: Math.floor(Math.random() * userNum+1) ,
          articleId: Math.floor(Math.random() * articleNum+1),
          content: "Yeah, my kind of people.",
        },
        {
          userId: Math.floor(Math.random() * userNum+1) ,
          articleId: Math.floor(Math.random() * articleNum+1),
          content: "That's stone cold.",
        },
        {
          userId: Math.floor(Math.random() * userNum+1) ,
          articleId: Math.floor(Math.random() * articleNum+1),
          content: "Right on.",
        },
        {
          userId: Math.floor(Math.random() * userNum+1) ,
          articleId: Math.floor(Math.random() * articleNum+1),
          content: "Why didn't I think of that?",
        },
        {
          userId: Math.floor(Math.random() * userNum+1) ,
          articleId: Math.floor(Math.random() * articleNum+1),
          content: "That's almost fiendishly clever",
        },
        {
          userId: Math.floor(Math.random() * userNum+1) ,
          articleId: Math.floor(Math.random() * articleNum+1),
          content: "Yeah, my kind of people.",
        },
        {
          userId: Math.floor(Math.random() * userNum+1) ,
          articleId: Math.floor(Math.random() * articleNum+1),
          content: "That doesn't seem like a good deal.",
        },
        {
          userId: Math.floor(Math.random() * userNum+1) ,
          articleId: Math.floor(Math.random() * articleNum+1),
          content: "No way man.",
        },
        {
          userId: Math.floor(Math.random() * userNum+1) ,
          articleId: Math.floor(Math.random() * articleNum+1),
          content: "I like the way you think",
        },

      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Comments", null, {});
  },
};
