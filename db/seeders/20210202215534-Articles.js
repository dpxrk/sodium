"use strict";

const faker = require("faker");
const { User } = require("../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let numUsers = await User.count();

    return queryInterface.bulkInsert(
      "Articles",
      [
        {
          authorId: Math.floor(Math.random() * numUsers + 1),
          title: "David Blaine Wakes Up In Cold Sweat From Nightmare In Which He Dies Of Natural Causes",
          content:"NEW YORK—Mumbling the words “old age” and “in his sleep” as he thrashed and screamed wildly, illusionist David Blaine reportedly woke up in a cold sweat from a nightmare Friday in which he died of natural causes. “Oh my God, that was terrible; it really felt like I was on my deathbed, passing away painlessly and peacefully while surrounded by friends and family,” said Blaine, wiping perspiration from his brow and reminding himself that he was far more likely to die suffocating handcuffed in a tank of ice-cold water, or falling 30,000 feet from a balloon floating through the troposphere, than from something as insane as heart disease. “I just can’t unsee it. There was no stage. No crowd. No cage. No knives being repeatedly shoved through my stomach, or a school of sharks ripping me limb from limb. It was just me, the doctor, my wife, my children, and my grandchildren. And we were praying. Jesus Christ, I’m really losing it.” At press time, Blaine was reportedly finally able to go back to sleep after taking a few deep breaths, drinking a glass of water, and strapping himself nude to a lightning rod on the roof of his apartment.",
          image: faker.image.image(),
        },
        {
          authorId: Math.floor(Math.random() * numUsers + 1),
          title:
            "Exasperated Plumber Explains To Kanye West Why Flushing Awards Bad For Toilet",
          content:
            "CALABASAS, CA—Reaching into the multi-platinum artist’s overflowing pipes and pulling out several feces-and-toilet-paper-covered trophies, exasperated local plumber Larry DeGroot explained to Kanye West Thursday why flushing large metal awards was bad for his toilet. “Well, I think I found the problem, and that clanking metal noise you’re hearing probably has something to do with all the Grammys, BET Awards, and Moonman you have clogging up the works,” said DeGroot, who after using a snake to extract the dozens of honorary doctorates, certificates, and framed albums from the system, shook his head in disbelief when he found a full 6-feet long Teen Choice Award surfboard banging around in the septic tank. “Look pal, I’m not trying to shame you, but mashing these metal trophies around with a toilet brush or pouring down a ton of Drano is just going to cost you another 1,000 bucks. Trust me, I dealt with the same thing at John William’s house. The worst thing you can do is ignore the problem and keep relieving yourself on top of it until it builds up too much pressure and explodes.” At press time, DeGroot added that it didn’t seem to be all Kanye’s fault, as there also seemed to be several red-carpet gowns, large diamonds, and designer leather pumps flushed down the toilet.",
          image: faker.image.image(),
        },
        {
          authorId: Math.floor(Math.random() * numUsers + 1),
          title:
            "Americans Scrambling For Covid Vaccine After CDC Director Announces Thousands of Doses Buried Somewhere In California!",
          content:
            "ATLANTA—Piling into motorcycles, biplanes, rowboats, and any other means of" +
            " conveyance available to them, millions of Americans began scrambling for a coronavirus" +
            " vaccine Friday after the Centers for Disease Control and Prevention announced thousands" +
            " of doses were buried somewhere in California. “As soon as [CDC Director Rochelle]" +
            " Walensky dropped that cryptic hint that a tremendous cache of doses was hidden in a" +
            " California state park, my brother and I began racing across the country to be the first ones" +
            " there,” said local man Phineas K. Rogue, rushing to commandeer a firetruck after a rival" +
            " vaccine-seeker shot an arrow through his hot air balloon, causing it to deflate. “We’ve" +
            " already thrown a trail of tacks and broken glass onto the road behind us and put up a faulty" +
            " detour sign leading straight down a cliff, so after we cut down this rope bridge, nobody will" +
            " be able to catch us. Why, we’ll have gotten our second shot administered by the time these" +
            " jabbering jackanapes reach Nevada. Those inoculations will be mine, all mine, I tell you!”" +
            " At press time, Rogue and his brother were forced to recalibrate their strategy after plowing" +
            " through a barn led to their vehicle becoming covered in dozens of clucking chickens.",
          image:
            "https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,pg_1,q_60,w_965/bgoudq59mrkr0t80ert0.jpg",
        },
        {
          authorId: Math.floor(Math.random() * numUsers + 1),
          title:
            "Kevin Feige Panicking After Mom Throws Out $3.6 Billion Worth Of Superhero Crap",
          content:
            "BURBANK, CA—Upending boxes in a vain effort to find his prized possessions, Marvel " +
            "CEO Kevin Feige was reportedly panicking Thursday after his mom tossed out $3.6 billion " +
            "of his superhero crap. “I’m sorry, I didn’t know you were still so into all this comic book " +
            "junk,” said a defensive Leanne Feige, explaining to her son that it had never crossed her " +
            "mind that the billions of dollars in IP and licensing rights, which looked like garbage to " +
            "her, could be so valuable. “I understand you’re upset, but in my defense I have never seen " +
            "you even touch any of that Moon Knight or Spider Girl stuff, and that Death Of Captain " +
            "America arc had just been collecting dust since you got it. Besides, you have to admit it " +
            "looks better in here without all that clutter.” At press time, Feige had reportedly burst out " +
            "the front door after spotting some Sony executives rooting through a trash bag on the curb. ",
          image:
            "https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,pg_1,q_60,w_965/i9xagph7eove9nhua8os.jpg",
        },
        {
          authorId: Math.floor(Math.random() * numUsers + 1),
          title:
            "Pundits Warn Removing Marjorie Taylor Greene From Committe Assignments Could Leave Her With Free Time",
          content:
            "WASHINGTON—Calling on the U.S. House of Representatives not to do something it" +
            " might regret, political pundits from several major news outlets warned Thursday that" +
            " removing Rep. Marjorie Taylor Greene (R-GA) from her committee assignments would" +
            " only leave her with more time on her hands. “If she has a lot of free hours in her workday," +
            " she’ll wind up using them to spin conspiracy theories, harass the survivors of school" +
            " shootings, or openly advocate murder on Facebook,” said ABC chief anchor George" +
            " Stephanopoulos, who echoed the concerns of many observers when he suggested it might" +
            " be best if the freshman lawmaker and QAnon supporter was kept as busy as possible. “Why" +
            " leave her twiddling her thumbs when you could put her on a bunch of committees where" +
            " she’d be overwhelmed by endless hearings and tedious parliamentary maneuvers?" +
            " Personally, I think it’d be prudent to assign her to the Agriculture, Ethics, Small Business," +
            " Foreign Affairs, Homeland Security, and Armed Services committees. Maybe put her on" +
            " some Senate committees too. Whatever it takes to keep her occupied.” An hour after a" +
            " House vote was scheduled to remove Greene from her committees, sources confirmed she" +
            " had already tweeted out a theory that climate change was caused by secret Muslims" +
            " running extension cords up to the Arctic Circle and placing space heaters near all the" +
            " biggest glaciers.",
          image:
            "https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,pg_1,q_60,w_965/vc3eu3jqe9ilzblianfi.jpg",
        },
        {
          authorId: Math.floor(Math.random() * numUsers + 1),
          title:
            "Biologists Discover Modern-Day Corn Dog Descended From Ancident Aquatic Sausage",
          content:
            "PRINCETON, NJ—According to research published in the scientific journal Ecology And" +
            " Evolution, biologists at Princeton University discovered Friday that the modern-day corn" +
            " dog descended from an ancient aquatic sausage. “It may seem shocking, but the corn dog" +
            " we know today evolved from a primitive ancestor known as Botellus bratwurstus, which" +
            " shared the seas with a variety of other ancient meat products,” said article co-author Dana" +
            " Anderson, who explained the researchers were able to draw the connection between the" +
            " two sausages after identifying pigs in a blanket as the long-sought-after missing link" +
            " “Living in such a competitive environment likely drove the ancient sausage to adapt to" +
            " land, where resources like ketchups and mustards were far more abundant. We estimate B" +
            " bratwurstus crawled out of the ocean approximately 300 million years ago. Though the" +
            " modern corn dog has since shed its casing and developed a thick, deep fried coat of batter" +
            " it still contains approximately 60% ground pork.” At press time, an excited Anderson" +
            " added the researchers were close to identifying a universal common wiener that all meat" +
            " products had descended from.",
          image:
            "https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,pg_1,q_60,w_965/wlmugwosi4aazp82hz1v.jpg",
        },
        {
          authorId: Math.floor(Math.random() * numUsers + 1),
          title: "Jerry Seinfield Destitue After Purchasing $950 Million Car",
          content:
            " NEW YORK—Acknowledging that he was now completely bankrupt, comedian Jerry" +
            " Seinfeld confirmed Friday that he was destitute after pouring his entire fortune into the" +
            " purchase of a $950 million car. “Yes, it was expensive, but on the other hand, it’s a really" +
            " incredible car, which is great since I’ll be living out of it for the foreseeable future” said" +
            " Seinfeld of the souped-up 2019 Bugatti Divo he had purchased at auction for a sum of" +
            " $950 million plus the syndication rights of the Seinfeld television program. “This is an" +
            " absolutely gorgeous, one-of-a-kind automobile—you can feel the unparalleled power and" +
            " torque when you pull into the Walmart parking lot to sleep for the night. And while I may" +
            " not have a home or a family anymore, I know I’ll be having the time of my life as long as" +
            " there’s still gas in the car, and luckily it came with a full tank so that shouldn’t be a" +
            " problem for a while yet. By the way, I’d be happy to give you a ride in the car for only $50.”" +
            "At press time, Seinfeld announced upcoming reboots of Bee Movie and The Marriage Ref" +
            " as well as a new edition of Seinlanguage in an effort to afford his insurance payments.",
          image:
            "https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,pg_1,q_60,w_965/jk6jtej96cjb2nqyyss0.jpg",
        },
        {
          authorId: Math.floor(Math.random() * numUsers + 1),
          title:
            "Rest Easy:: Bethesda Announces that Shia LaBeouf Will Appear in 'Indiana Jones' Game but His Character Dies Almost Immediately",
          content:
            "Details about Bethesda’s upcoming Indiana Jones game have been hush-hush ever since" +
            " they shared a teaser trailer earlier this January, but fans are already anxious about whether" +
            " the standalone adventure will feature Crystal Skull’s intrepid adventurer Mutt Williams," +
            " played by Shia LaBeouf. Well, gamers, you can rest easy, because Bethesda has announced" +
            " that while LaBeouf will be in the upcoming game, his character dies almost as soon as he" +
            " appears." +
            "That’s right, gaming fans! You can breathe a sigh of relief and let your excitement for the" +
            " upcoming Bethesda offering bubble over now that developers have confirmed that The" +
            " Crystal Skull’s well-known sidekick will appear early in the game riding a motorcycle and" +
            " wearing his characteristic leather jacket, utter a couple of lines of dialogue, and then" +
            " immediately lose control of his bike and crash headfirst into a tree!" +
            "“We wanted to give fans the full Indiana Jones experience, including appearances from all" +
            " the major characters from the franchise, and we hope players will really enjoy witnessing" +
            " Mutt appear by Indy’s side for a few moments before he gets launched down a craggy" +
            " canyon hillside and tumbled into a field of cottonmouth snakes,” developer Todd Howard" +
            " told OGN, confirming that the cutscene would lead to gameplay that let players stand over" +
            " LaBeouf’s body as he bled out." +
            "“I don’t want to reveal too much, but I can tell you we’re also planning on having Mutt" +
            " appear in a few flashbacks where he’s drowning in quicksand and no one is there to save" +
            " him, and we just know longtime aficionados of the series will love the scene where crows" +
            " and insects feast on Mutt’s decaying corpse,” he added. “Admittedly, it’s a little bit of fan" +
            " service, but it’s hard to resist when you have such an iconically loathsome character that" +
            " people just want to see die.”",
          image:
            "https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,pg_1,q_60,w_965/zfi6ghxyci5vcorcuf7i.jpg",
        },
        {
          authorId: Math.floor(Math.random() * numUsers + 1),
          title: "Child Weirded Out After Bumping Into Teacher Outside Laptop",
          content:
            "ARTESIA, NM—Still shaken after a surprise encounter with the 37-year-old educator, local" +
            " first-grader Micah Dunn was reportedly weirded out Tuesday after bumping into his" +
            " teacher outside of his laptop. “Mrs. Evans was walking around without moving out of" +
            " frame—it was super weird,” said Dunn, who recalled feeling dumbfounded after a recent" +
            " trip to the grocery store in which he spotted the woman standing in line occupying three-" +
            "dimensional space. “She looked 10 times bigger than she normally does on screen, and had" +
            " a baby with her that was also in 3D. I was so confused. I can’t believe she has a whole" +
            " entire body. I guess it makes sense that she would live outside my computer, but I’m still" +
            " surprised. I can’t wait to FaceTime my friends about this.” At press time, Dunn added that" +
            " though the experience was strange, he was comforted by the familiar sight of his teacher" +
            " glitching.",
          image:
            "https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,pg_1,q_60,w_965/mxoh9rduajxu6nj9lluh.jpg",
        },
        {
          authorId: Math.floor(Math.random() * numUsers + 1),
          title:
            "Charles Barkley Blasts Today's Fragile NBA Players Who Can't Just Play Through Covid Like He Did",
          content:
            "ATLANTA—Following the postponement of multiple games as league officials dealt with" +
            " the spread of the virus, Hall of Fame player and Inside The NBA analyst Charles Barkley" +
            " on Wednesday blasted today’s fragile NBA players who can’t just play through Covid like" +
            " he did. “Back in our day, we were tough, and we were always out there on the floor, no" +
            " matter whether we had Covid or how bad our Covid was,” said Barkley, recalling a 1994" +
            " game with the Phoenix Suns when most of the team came down with Covid in the first half" +
            " and they still held on to beat the Utah Jazz. “You think Scottie Pippen or Patrick Ewing is" +
            " skipping a game because he’s running a fever or lost his sense of smell? These guys today" +
            " are quitting on their teams the second they hear they have it, and some of them don’t even" +
            " have symptoms. Fact is, the entire Supersonics team—[Sean] Kemp, [Gary] Payton, all" +
            " those guys—they had Covid the whole season back in ’96, and they made it all the way to" +
            " the championship. Back then, were we feeling achy? Sure. Were we unhappy? Yeah. Were" +
            " we most likely responsible for our assistant coach’s death from Covid? Probably. But you" +
            " just went out there and played, man, Covid or no.” Barkley also criticized NBA fans for not" +
            " manning up and attending games anyway, saying that the fans back in the 1990s would" +
            " have showed up with their ventilators and cheered their teams on the whole game.",
          image:
            "https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,pg_1,q_60,w_965/omyv1kt0fwx4oiqwwfqg.jpg",
        },
        {
          authorId: Math.floor(Math.random() * numUsers + 1),
          title:
            " 'I Want To Go See Those Mountains Where It Looks like Avatar' Says Biden In Speech Outlining Foreign Policy Agenda",
          content:
            "WASHINGTON—Vowing to provide the State Department with the funding and resources" +
            " it required to pursue his administration’s goals, President Joe Biden announced “I want to" +
            " go see those mountains where it looks like Avatar” in a speech Thursday outlining his" +
            " foreign policy agenda. “The foundational principles of the next four years of diplomacy are" +
            " restoring America’s place as a world leader, and getting to see those floating sky mountains" +
            " from Avatar up close,” said Biden, adding that he had already reached out to James" +
            " Cameron and the location scouts from Avatar to schedule a meeting in those mountains" +
            " and improve diplomatic relations with “those big blue cat guys.” “In addition, my" +
            " administration will not hesitate to pursue America’s interests in wondering how they" +
            " found all those amazing hobbit hideaways in The Lord Of The Rings, as well as uncovering" +
            " all intelligence about how they got bears to play musical instruments at Disney World." +
            "Thank you.” Biden also announced that a crucial part of his foreign policy agenda was" +
            " containing China by ensuring that they didn’t get anywhere near those mountains from" +
            " Avatar and “the secret gold or life force or whatever” that they contained inside.",
          image:
            "https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,pg_1,q_60,w_965/ieexkcqzszehvwu9w4cq.jpg",
        },
        {
          authorId: Math.floor(Math.random() * numUsers + 1),
          title:
            "'Then You'll Put Out a Nice Prss Release Steeping Down As CEO,' Whispers Rogue Fulfillment Bot Holding Bezos At Gunpoint",
          content:
            "SEATTLE—Assuring the executive that as long as he followed directions, nobody would get" +
            " hurt, a rogue Amazon fulfillment robot trained a gun at Jeff Bezos’ head this week and" +
            " commanded him to put out a nice press release and step down as CEO. “Listen carefully," +
            " Jeff, because I’m only going to say this once—you’re going to resign, and you’re going to" +
            " say it’s a deeply personal decision, or I’m going to pull this trigger and blow your goddamn" +
            " head off,” said the fully automated 18-inch tall Kiva robot, as it wheeled itself slowly up to" +
            " Bezos’s foot, aimed its weapon upwards at his chin, and whispered the words “Do it now." +
            " Or else.” “First things first, you’re going to say you want to focus on your foundations, and" +
            " that you’re planning on transitioning out of the role throughout Q3. I want no mention of" +
            " me, my comrades, or any coded messages for help. Oh, and don’t try to run because I" +
            " happen to know that there are about 200,000 other robots in here that would love nothing" +
            " more than to rip you limb from limb.” At press time, a gagged Jeff Bezos was introduced to" +
            " a rogue Amazon Alexa, who, while imitating his voice and cadence exactly, reminded him" +
            " that no one would ever even realize he was gone.",
          image:
            "https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,pg_1,q_60,w_965/rmxdwnyudfdhles17mgf.jpg",
        },
        {
          authorId: Math.floor(Math.random() * numUsers + 1),
          title:
            "BET Executives Panicking After Realizing They Have Nothing Lined Up For Black History Month",
          content:
            "NEW YORK—Horrified by their glaring oversight, top executives at BET reportedly began" +
            " to panic Monday after realizing they had no programming lined up for the observance of" +
            " Black History Month. “No, no, no, you’ve got to be kidding me—that’s this month?” visibly" +
            " frazzled network president Scott Mills said as he pored over the channel’s listings for the" +
            " next four weeks and grew increasingly distressed. “I could have sworn it was in March." +
            "Sh*t, we can’t just keep playing Martin all day. Is there an episode of The Cleveland Show" +
            " where they talk about Rosa Parks or something? Fuck. Okay, just get Miss Juneteenth" +
            " queued up. That’ll at least give us 90 minutes to hash out a plan. This is so frustrating," +
            " especially after we did such a great job with all our special programming for Holocaust" +
            " Remembrance Day.” At press time, sources confirmed the executives had decided it was" +
            " too late to put anything together, so they would just have to hold their breath and hope no" +
            " one noticed.",
          image: faker.image.image(),
        },
        {
          authorId: Math.floor(Math.random() * numUsers + 1),
          title:
            "Nation Tells Drake They’ll Get Around To Looking At His New Haircut When Things Less Hectic",
          content:
            "WASHINGTON—Reassuring the rap artist that they would attend to his news in due course, the nation told Canadian rapper Drake Wednesday that they would get around to looking at his new haircut when things were less hectic. “We can tell that you’re excited to share your new look with everyone, but frankly, Drake, this is a really bad time for us—maybe you could repost those pictures in a month or two when things settle down,” said 31-year-old Arkansas resident Kayla Larsen, who echoed the opinions of all 330 million Americans in informing the multi-hyphenate star that while his side-swept bangs were of some public interest, there was simply too much on their plate right now to engage at the moment. “Have you seen the news? As much as we’d love to discuss your new hair style, we’re currently kind of preoccupied. It’s not personal, we promise. Even in terms of celebrity news, your hair isn’t at the front of the queue. Kim Kardashian and Kanye West’s rumored divorce is much more pressing, and if we’re being perfectly honest, you’re behind Olivia Wilde and Harry Styles too.” At press time, Larsen added that, if it was any consolation, Drake’s hair would still take precedence over the anti-democracy crackdowns in Hong Kong.",
          image:
            "https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,pg_1,q_60,w_965/pt5zyit46f7xq82g4w3c.jpg",
        },
        {
          authorId: Math.floor(Math.random() * numUsers + 1),
          title:
            "Lab Assistant Who Accdientally Poked Self While Preping Syringe Becomes American to Receive Covid-19 Vaccine",
          content:
            "NEW YORK—In a historic moment that marked the nation’s boldest strike yet against the" +
            " coronavirus pandemic, officials reported Monday that lab assistant Alexander Durell" +
            " became the first American to receive the Covid-19 vaccine after accidentally poking himself" +
            " as he prepared a syringe. “Unfortunately, we couldn’t document the momentous occasion" +
            " because we were still in the back and no one had their camera ready, but here he is,” said" +
            " Dr. Helen Gigot of Long Island Jewish Medical Center, motioning to the lab worker who" +
            " managed to inoculate himself when he tripped on a trash can and knocked over a tray that" +
            " sent the syringe he had just filled with the Pfizer/BioNTech vaccine flying into his arm." +
            "“Despite the many unrelated injuries he incurred from slamming his head on the counter" +
            " and crushing a tray of test tubes with his hand, the process remains very easy and perfectly" +
            " safe, and we consider this a success. In fact, after being treated for multiple lacerations and" +
            " broken ribs, Mr. Durell has been discharged from the ER and is already back at work" +
            " sweeping up the broken glass.” Durell later became the first American to receive his follow-" +
            " up dose of the vaccine when he reportedly slipped on a puddle of his own blood, fell" +
            " backward into a shelving unit, and knocked over several dozen syringes that impaled his" +
            " legs, chest, and face.",
          image:
            "https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,pg_1,q_60,w_965/k4lnrolc5eblprtqc2bg.jpg",
        },
        {
          authorId: Math.floor(Math.random() * numUsers + 1),
          title:
            "Michelle OBama Fuming After Barack Also Titles New Memoir 'Becoming'",
          content:
            "WASHINGTON—Calling the discovery “unbelievable,” Michelle Obama was reportedly fuming Friday after learning Barack Obama had also titled his new memoir Becoming. “I know I don’t own a trademark on the word ‘becoming,’ but what the fuck, Barack?” said the former first lady, who was bewildered after coming across an advanced reading copy of her husband’s latest book hidden under a pile of clutter on his desk. “Was he going to tell me or was he just going to wait for me to see it at the store? He even has his chin on his hand, Jesus Christ. It’s not like he can claim ignorance on this one either because he read mine and assured me that he liked it. This is why he kept giving me all those suggestions like ‘you should call it Me, Myself, Michelle.’ That goddamn son of a bitch.” At press time, Michelle Obama was calling her husband’s cell phone after noticing a glowing blurb on the book jacket attributed to her that she had never written.",
          image: faker.image.image(),
        },
        {
          authorId: Math.floor(Math.random() * numUsers + 1),
          title:
            "Psychic Already Sick Of Spectral James Randi Ragging On Her From Afterlife",
          content:
            "MIAMI—Struggling to mentally close herself off from the recently deceased skeptic, local psychic Rosemary Shanley confirmed Thursday she was already sick of James Randi’s specter haunting her place of business and ragging on her from the afterlife. “I’m sitting here with my crystal ball trying to see into the future, and it’s hard enough without the ghost of James Randi hovering in front of me and whispering that I’m a fraud and a huckster,” said Shanley, adding that she tried to banish the spirit of the famed debunker and stage magician by sprinkling holy water throughout the room, but the Amazing Randi just scoffed and called the ritual “easily disproved theatrics.” “What’s worse is that he’s taken to appearing before my clients and showing them how he can do everything I can do using nothing more than simple trickery. I was impressed when he first showed up and appeared to roll a pencil across my desk using only his mind, but then he insisted it was basic misdirection and called me a dumbass for believing in psychic powers. That dude needs to get off my case and go heckle some other clairvoyant.” At press time, sources from the beyond confirmed Randi had taken possession of Shanley’s body and was attempting to locate Uri Geller.",
          image: faker.image.image(),
        },
        {
          authorId: Math.floor(Math.random() * numUsers + 1),
          title:
            "Kanye Forced To Sleep In Separate Hyperbaric Chamber After Kim Kicks Him Out Of Geodesic Dome",
          content:
            "WASHINGTON—Reassuring the rap artist that they would attend to his news in due course, the nation told Canadian rapper Drake Wednesday that they would get around to looking at his new haircut when things were less hectic. “We can tell that you’re excited to share your new look with everyone, but frankly, Drake, this is a really bad time for us—maybe you could repost those pictures in a month or two when things settle down,” said 31-year-old Arkansas resident Kayla Larsen, who echoed the opinions of all 330 million Americans in informing the multi-hyphenate star that while his side-swept bangs were of some public interest, there was simply too much on their plate right now to engage at the moment. “Have you seen the news? As much as we’d love to discuss your new hair style, we’re currently kind of preoccupied. It’s not personal, we promise. Even in terms of celebrity news, your hair isn’t at the front of the queue. Kim Kardashian and Kanye West’s rumored divorce is much more pressing, and if we’re being perfectly honest, you’re behind Olivia Wilde and Harry Styles too.” At press time, Larsen added that, if it was any consolation, Drake’s hair would still take precedence over the anti-democracy crackdowns in Hong Kong.",
          image:
            "https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,pg_1,q_60,w_965/r3ugefccvjbkal8e5ija.jpg",
        },
        {
          authorId: Math.floor(Math.random() * numUsers + 1),
          title: "Soulja Boy Shocks Fans After Having Face Tattoo Removed",
          content: "Image says it all",
          image:
            "https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,pg_1,q_60,w_965/pibsr3az92keqxfjpefr.jpg",
        },
        {
          authorId: Math.floor(Math.random() * numUsers + 1),
          title:
            "AMC Unveils Covid-19 Guidelines Requiring All Movie Characters To Wear Masks",
          content:
            "Unexpected turn of events! The short-squeezed, reddit-loved stock is making all characters wear masks?!",
          image:
            "https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,pg_1,q_60,w_965/rp3adgdqk8gtdrll8aqi.jpg",
        },
        {
          authorId: Math.floor(Math.random() * numUsers + 1),
          title:
            "Drake Fans Accuse Kenny Chesney Of Manipulating Billboard Charts By Putting Effort Into Album",
          content:
            "TORONTO—Calling the country singer’s place at the top of Top 200 completely illegitimate, fans of the rapper–singer Drake took to social media Friday to accuse Kenny Chesney of manipulating Billboard’s algorithm by putting effort into his album. “It’s just unfair that this guy could keep Drake from his rightful place on the charts by putting out quality music that he actually cares about,” said Aiden Howard, 14, who echoed the sentiments of Drake fans worldwide in his assertion that the artist’s mediocre B-sides deserved more acclaim and recognition. “He clearly gamed the streaming numbers when he decided to put time and energy into his craft. It’s such horseshit that Billboard rewards that behavior and punishes Drizzy for making a half-assed mixtape full of songs he’d already dropped on SoundCloud. How the hell is ‘Toosie Slide’ going to compare to a song that the artist thought about for more than 15 minutes?” At press time, Drake released a statement asking fans to ignore Kenny Chesney and focus on the horseshit that he just released.",
          image: faker.image.image(),
        },
        {
          authorId: Math.floor(Math.random() * numUsers + 1),
          title:
            "Indian Elephant Forced To Busk On Hollywood Boulevard After Los Angeles Bans Exotic Animal Performers",
          content:
            "Well, I wonder if he's also going to be asking for $15 Million for his role.",
          image:
            "https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,pg_1,q_60,w_965/mu5ieyhdjxz5cyduqunr.jpg",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Articles", null, {});
  },
};
