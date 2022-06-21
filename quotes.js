const localQuotes = [
    {
        "text": "Genius is one percent inspiration and ninety-nine percent perspiration.",
        "author": "Thomas Edison"
      },
      {
        "text": "You can observe a lot just by watching.",
        "author": "Yogi Berra"
      },
      {
        "text": "A house divided against itself cannot stand.",
        "author": "Abraham Lincoln"
      },
      {
        "text": "Difficulties increase the nearer we get to the goal.",
        "author": "Johann Wolfgang von Goethe"
      },
      {
        "text": "Fate is in your hands and no one elses",
        "author": "Byron Pulsifer"
      },
      {
        "text": "Be the chief but never the lord.",
        "author": "Lao Tzu"
      },
      {
        "text": "Nothing happens unless first we dream.",
        "author": "Carl Sandburg"
      },
      {
        "text": "Well begun is half done.",
        "author": "Aristotle"
      },
      {
        "text": "Life is a learning experience, only if you learn.",
        "author": "Yogi Berra"
      },
      {
        "text": "Self-complacency is fatal to progress.",
        "author": "Margaret Sangster"
      },
      {
        "text": "Peace comes from within. Do not seek it without.",
        "author": "Buddha"
      },
      {
        "text": "What you give is what you get.",
        "author": "Byron Pulsifer"
      },
      {
        "text": "We can only learn to love by loving.",
        "author": "Iris Murdoch"
      },
      {
        "text": "Life is change. Growth is optional. Choose wisely.",
        "author": "Karen Clark"
      },
      {
        "text": "You'll see it when you believe it.",
        "author": "Wayne Dyer"
      },
      {
        "text": "Today is the tomorrow we worried about yesterday.",
        "author": null
      },
      {
        "text": "It's easier to see the mistakes on someone else's paper.",
        "author": null
      },
      {
        "text": "Every man dies. Not every man really lives.",
        "author": null
      },
      {
        "text": "To lead people walk behind them.",
        "author": "Lao Tzu"
      },
      {
        "text": "Having nothing, nothing can he lose.",
        "author": "William Shakespeare"
      },
      {
        "text": "Trouble is only opportunity in work clothes.",
        "author": "Henry J. Kaiser"
      },
      {
        "text": "A rolling stone gathers no moss.",
        "author": "Publilius Syrus"
      },
      {
        "text": "Ideas are the beginning points of all fortunes.",
        "author": "Napoleon Hill"
      },
      {
        "text": "Everything in life is luck.",
        "author": "Donald Trump"
      },
      {
        "text": "Doing nothing is better than being busy doing nothing.",
        "author": "Lao Tzu"
      },
      {
        "text": "Trust yourself. You know more than you think you do.",
        "author": "Benjamin Spock"
      },
      {
        "text": "Study the past, if you would divine the future.",
        "author": "Confucius"
      },
      {
        "text": "The day is already blessed, find peace within it.",
        "author": null
      },
      {
        "text": "From error to error one discovers the entire truth.",
        "author": "Sigmund Freud"
      },
      {
        "text": "Well done is better than well said.",
        "author": "Benjamin Franklin"
      },
      {
        "text": "Bite off more than you can chew, then chew it.",
        "author": "Ella Williams"
      },
      {
        "text": "Work out your own salvation. Do not depend on others.",
        "author": "Buddha"
      },
      {
        "text": "One today is worth two tomorrows.",
        "author": "Benjamin Franklin"
      },
      {
        "text": "Once you choose hope, anythings possible.",
        "author": "Christopher Reeve"
      },
      {
        "text": "God always takes the simplest way.",
        "author": "Albert Einstein"
      },
      {
        "text": "One fails forward toward success.",
        "author": "Charles Kettering"
      },
      {
        "text": "From small beginnings come great things.",
        "author": null
      },
      {
        "text": "Learning is a treasure that will follow its owner everywhere",
        "author": "Chinese proverb"
      },
      {
        "text": "Be as you wish to seem.",
        "author": "Socrates"
      },
      {
        "text": "The world is always in movement.",
        "author": "V. Naipaul"
      },
      {
        "text": "Never mistake activity for achievement.",
        "author": "John Wooden"
      },
      {
        "text": "What worries you masters you.",
        "author": "Haddon Robinson"
      },
      {
        "text": "One faces the future with ones past.",
        "author": "Pearl Buck"
      },
      {
        "text": "Goals are the fuel in the furnace of achievement.",
        "author": "Brian Tracy"
      },
      {
        "text": "Who sows virtue reaps honour.",
        "author": "Leonardo da Vinci"
      },
      {
        "text": "Be kind whenever possible. It is always possible.",
        "author": "Dalai Lama"
      },
      {
        "text": "Talk doesn't cook rice.",
        "author": "Chinese proverb"
      },
      {
        "text": "He is able who thinks he is able.",
        "author": "Buddha"
      },
      {
        "text": "A goal without a plan is just a wish.",
        "author": "Larry Elder"
      },
      {
        "text": "To succeed, we must first believe that we can.",
        "author": "Michael Korda"
      },
      {
        "text": "Learn from yesterday, live for today, hope for tomorrow.",
        "author": "Albert Einstein"
      },
      {
        "text": "A weed is no more than a flower in disguise.",
        "author": "James Lowell"
      },
      {
        "text": "Do, or do not. There is no try.",
        "author": "Yoda"
      },
      {
        "text": "All serious daring starts from within.",
        "author": "Harriet Beecher Stowe"
      },
      {
        "text": "The best teacher is experience learned from failures.",
        "author": "Byron Pulsifer"
      },
      {
        "text": "Think how hard physics would be if particles could think.",
        "author": "Murray Gell-Mann"
      },
      {
        "text": "Love is the flower you've got to let grow.",
        "author": "John Lennon"
      },
      {
        "text": "Don't wait. The time will never be just right.",
        "author": "Napoleon Hill"
      },
      {
        "text": "Time is the wisest counsellor of all.",
        "author": "Pericles"
      },
      {
        "text": "You give before you get.",
        "author": "Napoleon Hill"
      },
      {
        "text": "Wisdom begins in wonder.",
        "author": "Socrates"
      },
      {
        "text": "Without courage, wisdom bears no fruit.",
        "author": "Baltasar Gracian"
      },
      {
        "text": "Change in all things is sweet.",
        "author": "Aristotle"
      },
      {
        "text": "What you fear is that which requires action to overcome.",
        "author": "Byron Pulsifer"
      },
      {
        "text": "When performance exceeds ambition, the overlap is called success.",
        "author": "Cullen Hightower"
      },
      {
        "text": "When deeds speak, words are nothing.",
        "author": "African proverb"
      },
      {
        "text": "Real magic in relationships means an absence of judgement of others.",
        "author": "Wayne Dyer"
      },
      {
        "text": "I never think of the future. It comes soon enough.",
        "author": "Albert Einstein"
      },
      {
        "text": "Skill to do comes of doing.",
        "author": "Ralph Emerson"
      },
      {
        "text": "Wisdom is the supreme part of happiness.",
        "author": "Sophocles"
      },
      {
        "text": "I believe that every person is born with talent.",
        "author": "Maya Angelou"
      },
      {
        "text": "Important principles may, and must, be inflexible.",
        "author": "Abraham Lincoln"
      },
      {
        "text": "The undertaking of a new action brings new strength.",
        "author": "Richard Evans"
      },
      {
        "text": "The years teach much which the days never know.",
        "author": "Ralph Emerson"
      },
      {
        "text": "Our distrust is very expensive.",
        "author": "Ralph Emerson"
      },
      {
        "text": "All know the way; few actually walk it.",
        "author": "Bodhidharma"
      },
      {
        "text": "Great talent finds happiness in execution.",
        "author": "Johann Wolfgang von Goethe"
      },
      {
        "text": "Faith in oneself is the best and safest course.",
        "author": "Michelangelo"
      },
      {
        "text": "Courage is going from failure to failure without losing enthusiasm.",
        "author": "Winston Churchill"
      },
      {
        "text": "The two most powerful warriors are patience and time.",
        "author": "Leo Tolstoy"
      },
      {
        "text": "Anticipate the difficult by managing the easy.",
        "author": "Lao Tzu"
      },
      {
        "text": "Those who are free of resentful thoughts surely find peace.",
        "author": "Buddha"
      },
      {
        "text": "A short saying often contains much wisdom.",
        "author": "Sophocles"
      },
      {
        "text": "It takes both sunshine and rain to make a rainbow.",
        "author": null
      },
      {
        "text": "A beautiful thing is never perfect.",
        "author": null
      },
      {
        "text": "Only do what your heart tells you.",
        "author": "Princess Diana"
      },
      {
        "text": "Life is movement-we breathe, we eat, we walk, we move!",
        "author": "John Pierrakos"
      },
      {
        "text": "No one can make you feel inferior without your consent.",
        "author": "Eleanor Roosevelt"
      },
      {
        "text": "Argue for your limitations, and sure enough theyre yours.",
        "author": "Richard Bach"
      },
      {
        "text": "Luck is what happens when preparation meets opportunity.",
        "author": "Seneca"
      },
      {
        "text": "Victory belongs to the most persevering.",
        "author": "Napoleon Bonaparte"
      },
      {
        "text": "Love all, trust a few, do wrong to none.",
        "author": "William Shakespeare"
      },
      {
        "text": "In order to win, you must expect to win.",
        "author": "Richard Bach"
      },
      {
        "text": "A goal is a dream with a deadline.",
        "author": "Napoleon Hill"
      },
      {
        "text": "You can do it if you believe you can!",
        "author": "Napoleon Hill"
      },
      {
        "text": "Set your goals high, and don't stop till you get there.",
        "author": "Bo Jackson"
      },
      {
        "text": "Every new day is another chance to change your life.",
        "author": null
      },
      {
        "text": "Smile, breathe, and go slowly.",
        "author": "Thich Nhat Hanh"
      },
      {
        "text": "Nobody will believe in you unless you believe in yourself.",
        "author": "Liberace"
      },
      {
        "text": "Do more than dream: work.",
        "author": "William Arthur Ward"
      },
      {
        "text": "No man was ever wise by chance.",
        "author": "Seneca"
      },
      {
        "text": "Some pursue happiness, others create it.",
        "author": null
      },
      {
        "text": "He that is giddy thinks the world turns round.",
        "author": "William Shakespeare"
      },
      {
        "text": "Don't ruin the present with the ruined past.",
        "author": "Ellen Gilchrist"
      },
      {
        "text": "Do something wonderful, people may imitate it.",
        "author": "Albert Schweitzer"
      },
      {
        "text": "We do what we do because we believe.",
        "author": null
      },
      {
        "text": "Do one thing every day that scares you.",
        "author": "Eleanor Roosevelt"
      },
      {
        "text": "If you cannot be silent be brilliant and thoughtful.",
        "author": "Byron Pulsifer"
      },
      {
        "text": "Who looks outside, dreams; who looks inside, awakes.",
        "author": "Carl Jung"
      },
      {
        "text": "What we think, we become.",
        "author": "Buddha"
      },
      {
        "text": "The shortest answer is doing.",
        "author": "Lord Herbert"
      },
      {
        "text": "All our knowledge has its origins in our perceptions.",
        "author": "Leonardo da Vinci"
      },
      {
        "text": "The harder you fall, the higher you bounce.",
        "author": null
      },
      {
        "text": "Trusting our intuition often saves us from disaster.",
        "author": "Anne Wilson Schaef"
      },
      {
        "text": "Truth is powerful and it prevails.",
        "author": "Sojourner Truth"
      },
      {
        "text": "Light tomorrow with today!",
        "author": "Elizabeth Browning"
      },
      {
        "text": "Silence is a fence around wisdom.",
        "author": "German proverb"
      },
      {
        "text": "Society develops wit, but its contemplation alone forms genius.",
        "author": "Madame de Stael"
      },
      {
        "text": "The simplest things are often the truest.",
        "author": "Richard Bach"
      },
      {
        "text": "Everyone smiles in the same language.",
        "author": null
      },
      {
        "text": "Yesterday I dared to struggle. Today I dare to win.",
        "author": "Bernadette Devlin"
      },
      {
        "text": "No alibi will save you from accepting the responsibility.",
        "author": "Napoleon Hill"
      },
      {
        "text": "If you can dream it, you can do it.",
        "author": "Walt Disney"
      },
      {
        "text": "It is better to travel well than to arrive.",
        "author": "Buddha"
      },
      {
        "text": "Life shrinks or expands in proportion to one's courage.",
        "author": "Anais Nin"
      },
      {
        "text": "You have to believe in yourself.",
        "author": "Sun Tzu"
      },
      {
        "text": "Our intention creates our reality.",
        "author": "Wayne Dyer"
      },
      {
        "text": "Silence is a true friend who never betrays.",
        "author": "Confucius"
      },
      {
        "text": "Character develops itself in the stream of life.",
        "author": "Johann Wolfgang von Goethe"
      },
      {
        "text": "From little acorns mighty oaks do grow.",
        "author": "American proverb"
      },
      {
        "text": "You can't stop the waves, but you can learn to surf.",
        "author": "Jon Kabat-Zinn"
      },
      {
        "text": "Reality does not conform to the ideal, but confirms it.",
        "author": "Gustave Flaubert"
      },
      {
        "text": "Speak low, if you speak love.",
        "author": "William Shakespeare"
      },
      {
        "text": "A really great talent finds its happiness in execution.",
        "author": "Johann Wolfgang von Goethe"
      },
      {
        "text": "Reality leaves a lot to the imagination.",
        "author": "John Lennon"
      },
      {
        "text": "The greatest remedy for anger is delay.",
        "author": "Seneca"
      },
      {
        "text": "Growth itself contains the germ of happiness.",
        "author": "Pearl Buck"
      },
      {
        "text": "You can do what's reasonable or you can decide what's possible.",
        "author": null
      },
      {
        "text": "Nothing strengthens authority so much as silence.",
        "author": "Leonardo da Vinci"
      },
      {
        "text": "Wherever you go, go with all your heart.",
        "author": "Confucius"
      },
      {
        "text": "The only real valuable thing is intuition.",
        "author": "Albert Einstein"
      },
      {
        "text": "Good luck is another name for tenacity of purpose.",
        "author": "Ralph Emerson"
      },
      {
        "text": "Rainbows apologize for angry skies.",
        "author": "Sylvia Voirol"
      },
      {
        "text": "Friendship isn't a big thing. It's a million little things.",
        "author": null
      },
      {
        "text": "Time is the most valuable thing a man can spend.",
        "author": "Theophrastus"
      },
      {
        "text": "Whatever happens, take responsibility.",
        "author": "Tony Robbins"
      },
      {
        "text": "Experience is simply the name we give our mistakes.",
        "author": "Oscar Wilde"
      },
      {
        "text": "I think and that is all that I am.",
        "author": "Wayne Dyer"
      },
      {
        "text": "If you spend too much time thinking about a thing, you'll never get it done.",
        "author": "Bruce Lee"
      },
      {
        "text": "The way is not in the sky. The way is in the heart.",
        "author": "Buddha"
      },
      {
        "text": "Most people are about as happy as they make up their minds to be",
        "author": "Abraham Lincoln"
      },
      {
        "text": "Three things cannot be long hidden: the sun, the moon, and the truth.",
        "author": "Buddha"
      },
      {
        "text": "More often than not, anger is actually an indication of weakness rather than of strength.",
        "author": "Dalai Lama"
      },
      {
        "text": "Before you put on a frown, make absolutely sure there are no smiles available.",
        "author": "Jim Beggs"
      },
      {
        "text": "A man of ability and the desire to accomplish something can do anything.",
        "author": "Donald Kircher"
      },
      {
        "text": "You, yourself, as much as anybody in the entire universe, deserve your love and affection.",
        "author": "Buddha"
      },
      {
        "text": "It is not uncommon for people to spend their whole life waiting to start living.",
        "author": "Eckhart Tolle"
      },
      {
        "text": "Don't be afraid to go out on a limb. That's where the fruit is.",
        "author": "H. Jackson Browne"
      },
      {
        "text": "Wicked people are always surprised to find ability in those that are good.",
        "author": "Marquis Vauvenargues"
      },
      {
        "text": "Life is so constructed that an event does not, cannot, will not, match the expectation.",
        "author": "Charlotte Bronte"
      },
      {
        "text": "If you change the way you look at things, the things you look at change.",
        "author": "Wayne Dyer"
      },
      {
        "text": "No man can succeed in a line of endeavor which he does not like.",
        "author": "Napoleon Hill"
      },
      {
        "text": "You will not be punished for your anger, you will be punished by your anger.",
        "author": "Buddha"
      },
      {
        "text": "Don't judge each day by the harvest you reap but by the seeds you plant.",
        "author": "Robert Stevenson"
      },
      {
        "text": "They say that time changes things, but you actually have to change them yourself.",
        "author": "Andy Warhol"
      },
      {
        "text": "Never apologize for showing feelings. When you do so, you apologize for the truth.",
        "author": "Benjamin Disraeli"
      },
      {
        "text": "The truth you believe and cling to makes you unavailable to hear anything new.",
        "author": "Pema Chodron"
      },
      {
        "text": "Adversity has the effect of eliciting talents, which in prosperous circumstances would have lain dormant.",
        "author": "Horace"
      },
      {
        "text": "If you spend your whole life waiting for the storm, you'll never enjoy the sunshine.",
        "author": "Morris West"
      },
      {
        "text": "The only limit to our realization of tomorrow will be our doubts of today.",
        "author": "Franklin Roosevelt"
      },
      {
        "text": "Every action of our lives touches on some chord that will vibrate in eternity.",
        "author": "Edwin Chapin"
      },
      {
        "text": "Shoot for the moon. Even if you miss, you'll land among the stars.",
        "author": "Les Brown"
      },
      {
        "text": "It does not matter how slowly you go as long as you do not stop.",
        "author": "Confucius"
      },
      {
        "text": "Every day may not be good, but there's something good in every day.",
        "author": null
      },
      {
        "text": "Most folks are about as happy as they make up their minds to be.",
        "author": "Abraham Lincoln"
      },
      {
        "text": "If you would take, you must first give, this is the beginning of intelligence.",
        "author": "Lao Tzu"
      },
      {
        "text": "Some people think it's holding that makes one strong sometimes it's letting go.",
        "author": null
      },
      {
        "text": "It is on our failures that we base a new and different and better success.",
        "author": "Havelock Ellis"
      },
      {
        "text": "Quality is never an accident; it is always the result of intelligent effort.",
        "author": "John Ruskin"
      },
      {
        "text": "To study and not think is a waste. To think and not study is dangerous.",
        "author": "Confucius"
      },
      {
        "text": "Life is a succession of lessons, which must be lived to be understood.",
        "author": "Ralph Emerson"
      },
      {
        "text": "Time changes everything except something within us which is always surprised by change.",
        "author": "Thomas Hardy"
      },
      {
        "text": "You are important enough to ask and you are blessed enough to receive back.",
        "author": "Wayne Dyer"
      },
      {
        "text": "If you cannot do great things, do small things in a great way.",
        "author": "Napoleon Hill"
      },
      {
        "text": "If you want your life to be more rewarding, you have to change the way you think.",
        "author": "Oprah Winfrey"
      },
      {
        "text": "Transformation doesn't take place with a vacuum; instead, it occurs when we are indirectly and directly connected to all those around us.",
        "author": "Byron Pulsifer"
      },
      {
        "text": "The only difference between your abilities and others is the ability to put yourself in their shoes and actually try.",
        "author": "Leonardo Ruiz"
      },
      {
        "text": "The free man is he who does not fear to go to the end of his thought.",
        "author": "Leon Blum"
      },
      {
        "text": "Great are they who see that spiritual is stronger than any material force, that thoughts rule the world.",
        "author": "Ralph Emerson"
      },
      {
        "text": "A life spent making mistakes is not only more honourable but more useful than a life spent in doing nothing.",
        "author": "Bernard Shaw"
      },
      {
        "text": "The wise man does not lay up his own treasures. The more he gives to others, the more he has for his own.",
        "author": "Lao Tzu"
      },
      {
        "text": "Don't leave a stone unturned. It's always something, to know you have done the most you could.",
        "author": "Charles Dickens"
      },
      {
        "text": "By going beyond your own problems and taking care of others, you gain inner strength, self-confidence, courage, and a greater sense of calm.",
        "author": "Dalai Lama"
      },
      {
        "text": "We come to love not by finding a perfect person, but by learning to see an imperfect person perfectly.",
        "author": "Sam Keen"
      },
      {
        "text": "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
        "author": "Walt Emerson"
      },
      {
        "text": "There are things so deep and complex that only intuition can reach it in our stage of development as human beings.",
        "author": "John Astin"
      },
      {
        "text": "A little more persistence, a little more effort, and what seemed hopeless failure may turn to glorious success.",
        "author": "Elbert Hubbard"
      },
      {
        "text": "There is no retirement for an artist, it's your way of living so there is no end to it.",
        "author": "Henry Moore"
      },
      {
        "text": "I will not be concerned at other men is not knowing me;I will be concerned at my own want of ability.",
        "author": "Confucius"
      },
      {
        "text": "Why worry about things you cannot control when you can keep yourself busy controlling the things that depend on you?",
        "author": null
      },
      {
        "text": "When you are content to be simply yourself and don't compare or compete, everybody will respect you.",
        "author": "Laozi"
      },
      {
        "text": "Be not afraid of greatness: some are born great, some achieve greatness, and some have greatness thrust upon them.",
        "author": "William Shakespeare"
      },
      {
        "text": "Success means having the courage, the determination, and the will to become the person you believe you were meant to be.",
        "author": "George Sheehan"
      },
      {
        "text": "Do you want to know who you are? Don't ask. Act! Action will delineate and define you.",
        "author": "Thomas Jefferson"
      },
      {
        "text": "It is only with the heart that one can see rightly, what is essential is invisible to the eye.",
        "author": "Antoine de Saint-Exupery"
      }
];