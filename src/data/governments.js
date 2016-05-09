const governments = [
  {
    name: 'Autocracies',
    components: [
      {
        name: 'Military Dictatorship',
        description: 'This government is a militaristic form of autocracy, with the ruler serving as the undisputed head of the military which is firmly in control of the state apparatus.',
        rulerTitle: 'Grand Marshal',
        image: 'http://www.stellariswiki.com/images/4/4c/Military_Dictatorship.png',
        unlocked: ['Militarist', 'Fanatic Militarist'],
        locked: ['Individualist', 'Fanatic Individualist'],
        effects: [
          { name: 'Naval capacity', value: 20, positive: true},
          { name: 'Ship Upkeep', value: -5, postfix: '%', positive: true},
          { name: 'Can build an oversized ship'},
          { name: 'Admirals and generals are eligible for rulership'},
        ]
      },
      {
        name: 'Divine Mandate',
        description: 'This government is a spiritualistic form of autocracy, where the ruler is treated as a divine symbol. Organized religion is widely employed in support of the state apparatus.',
        rulerTitle: 'Archprophet',
        image: 'http://www.stellariswiki.com/images/7/7f/Divine_Mandate.png',
        unlocked: ['Spiritualist', 'Fanatic Spiritualist'],
        locked: ['Individualist', 'Fanatic Individualist'],
        effects: [
          { name: 'Slavery Tolerance', value: 50, postfix: '%', positive: true},
          { name: 'Resettlement Cost', value: -15, postfix: '%', positive: true},
          { name: 'Can build a Grand Mausoleum, which grants -10% ethics divergence on the planet on which it is built'},
        ]
      },
      {
        name: 'Despotic Hegemony',
        description: 'This government is a materialistic form of autocracy, where citizens are viewed as little more than cogs in the state machinery. Efficiency and technological progress are valued above all things.',
        rulerTitle: 'Overlord',
        image: 'http://www.stellariswiki.com/images/a/a7/Despotic_Hegemony.png',
        unlocked: ['Materialist', 'Fanatic Materialist'],
        locked: ['Individualist', 'Fanatic Individualist'],
        effects: [
          { name: 'Research Speed', value: 5, postfix: '%', positive: true},
          { name: 'Survey Speed', value: 10, postfix: '%', positive: true},
          { name: 'Can build an elite assault army'},
        ]
      },
      {
        name: 'Enlightened Monarchy',
        description: 'This government is a pacifistic form of autocracy, where the ruler is viewed as an enlightened protector that always acts in the best interests of the citizenry.',
        rulerTitle: 'King',
        image: 'http://www.stellariswiki.com/images/2/2b/Enlightened_Monarchy.png',
        unlocked: ['Pacifist', 'Fanatic Pacifist'],
        locked: ['Individualist', 'Fanatic Individualist'],
        effects: [
          { name: 'Edict Cost', value: -25, postfix: '%', positive: true},
          { name: 'Planetary Edict Duration', value: 25, postfix: '%', positive: true},
          { name: 'Core Sector Planets', value: 1, positive: true},
          { name: 'Can build a Royal Gardens, which grants +10 Mod pop happiness.png happiness on the planet it is built'},
        ]
      },
      {
        name: 'Despotic Empire',
        description: 'This government is a relatively pure form of autocracy, with an absolute ruler that governs the state with an iron gripping appendage.',
        rulerTitle: 'Emperor',
        image: 'http://www.stellariswiki.com/images/1/1d/Despotic_Empire.png',
        unlocked: [],
        locked: ['Individualist', 'Fanatic Individualist'],
        effects: [
          { name: 'Building Cost', value: -15, postfix: '%', positive: true},
          { name: 'Slave Mineral Output', value: 10, postfix: '%', positive: true},
          { name: 'Slave Food Output', value: 10, postfix: '%', positive: true},
          { name: 'Can build an oversized military station'},
        ]
      },
    ]
  },
  {
    name: 'Oligarchies',
    components: [
      {
        name: 'Military Junta',
        description: 'This government is a militaristic form of oligarchy, where power rests with a council of high-ranking military officers who oversee all matters of state.',
        rulerTitle: 'Archon',
        image: 'http://www.stellariswiki.com/images/9/9a/Military_Junta.png',
        unlocked: ['Militarist', 'Fanatic Militarist'],
        locked: ['Fanatic Collectivist', 'Fanatic Individualist'],
        effects: [
          { name: 'Ship Cost', value: -10, postfix: '%', positive: true},
          { name: 'Ship Upgrade Cost', value: -25, postfix: '%', positive: true},
          { name: 'Admirals and generals are eligible for rulership'},
        ]
      },
      {
        name: 'Theocratic Oligarchy',
        description: 'This government is a spiritualistic form of oligarchy, where a divinely guided council made up of clergy controls the state. No division exists between the state and the dominant organized religion.',
        rulerTitle: 'Inquisitor',
        image: 'http://www.stellariswiki.com/images/5/57/Theocratic_Oligarchy.png',
        unlocked: ['Spiritualist', 'Fanatic Spiritualist'],
        locked: ['Fanatic Collectivist', 'Fanatic Individualist'],
        effects: [
          { name: 'Ethics Divergence', value: -10, postfix: '%', positive: true},
          { name: 'Leader Recruitment Cost', value: -15, postfix: '%', positive: true},
        ]
      },
      {
        name: 'Science Directorate',
        description: 'This government is a materialist form of oligarchy, where a committee of scientists supervises the government apparatus for maximum efficiency.',
        rulerTitle: 'Director',
        image: 'http://www.stellariswiki.com/images/c/cd/Science_Directorate.png',
        unlocked: ['Materialist', 'Fanatic Materialist'],
        locked: ['Fanatic Collectivist', 'Fanatic Individualist'],
        effects: [
          { name: 'Research alternatives', value: 1, positive: true},
          { name: 'Empire leader capacity', value: 1, positive: true},
          { name: 'Scientists are eligible for rulership'},
        ]
      },
      {
        name: 'Peaceful Bureaucracy',
        description: 'This government is a pacifist form of oligarchy, where a complicated system of bureaucracy governs all aspects of society to ensure the safety of the citizenry.',
        rulerTitle: 'Coordinator',
        image: 'http://www.stellariswiki.com/images/c/cd/Peaceful_Bureaucracy.png',
        unlocked: ['Pacifist', 'Fanatic Pacifist'],
        locked: ['Fanatic Collectivist', 'Fanatic Individualist'],
        effects: [
          { name: 'Leader pool size', value: 1, positive: true},
          { name: 'Empire leader capacity', value: 1, positive: true},
          { name: 'Leader Recruitment Cost', value: -15, postfix: '%', positive: true},
        ]
      },
      {
        name: 'Plutocratic Oligarchy',
        description: 'This is a plutocratic form of oligarchy, ruled by a wealthy elite. A citizen\'s personal wealth translates directly into political power.',
        rulerTitle: 'Executive',
        image: 'http://www.stellariswiki.com/images/3/3e/Plutocratic_Oligarchy.png',
        unlocked: [],
        locked: ['Fanatic Collectivist', 'Fanatic Individualist'],
        effects: [
          { name: 'Energy Credits', value: 5, postfix: '%', positive: true},
          { name: 'Minerals', value: 5, postfix: '%', positive: true},
        ]
      },
    ]
  },
  {
    name: 'Democracies',
    components: [
      {
        name: 'Military Republic',
        description: 'This government is a militaristic form of democracy, where full citizenship can only be gained through military service. The voting franchise is limited to full citizens, and they are the only ones allowed to hold public offices.',
        rulerTitle: 'Consul',
        image: 'http://www.stellariswiki.com/images/b/b8/Military_Republic.png',
        unlocked: ['Militarist', 'Fanatic Militarist'],
        locked: ['Collectivist', 'Fanatic Collectivist'],
        effects: [
          { name: 'Army Upkeep', value: -10, postfix: '%', positive: true},
          { name: 'Ship Upkeep', value: -10, postfix: '%', positive: true},
          { name: 'War Tolerance', value: 5, postfix: '%', positive: true},
          { name: 'Admirals and generals are eligible for rulership'},
        ]
      },
      {
        name: 'Theocratic Republic',
        description: 'This government is a spiritualistic form of democracy, where a religious council supervises the democratic process and serves in an advisory role.',
        rulerTitle: 'Reverend Elder',
        image: 'http://www.stellariswiki.com/images/9/9f/Theocratic_Republic.png',
        unlocked: ['Spiritualist', 'Fanatic Spiritualist'],
        locked: ['Collectivist', 'Fanatic Collectivist'],
        effects: [
          { name: 'Ethics Divergence', value: -10, postfix: '%', positive: true},
          { name: 'Core Sector Planets', value: 2, positive: true},
        ]
      },
      {
        name: 'Direct Democracy',
        description: 'This government is a materialistic form of democracy, where citizens use computer networks to vote directly on most matters regarding the state.',
        rulerTitle: 'Chancellor',
        image: 'http://www.stellariswiki.com/images/0/02/Direct_Democracy.png',
        unlocked: ['Materialist', 'Fanatic Materialist'],
        locked: ['Collectivist', 'Fanatic Collectivist'],
        effects: [
          { name: 'Core Sector Planets', value: 2, positive: true},
        ]
      },
      {
        name: 'Moral Democracy',
        description: 'This government is a pacifistic form of democracy, firmly guided by moralist principles and non-violence.',
        rulerTitle: 'Prime Minister',
        image: 'http://www.stellariswiki.com/images/6/67/Moral_Democracy.png',
        unlocked: ['Pacifist', 'Fanatic Pacifist'],
        locked: ['Collectivist', 'Fanatic Collectivist'],
        effects: [
          { name: 'Happiness', value: 10, postfix: '%', positive: true},
        ]
      },
      {
        name: 'Indirect Democracy',
        description: 'This government is an indirect democracy, where citizens vote on officials who are elected to represent them.',
        rulerTitle: 'President',
        image: 'http://www.stellariswiki.com/images/a/a1/Indirect_Democracy.png',
        unlocked: [],
        locked: ['Collectivist', 'Fanatic Collectivist'],
        effects: [
          { name: 'Leader Skill Levels', value: 1, positive: true},
          { name: 'Leader Recruitment Cost', value: -10, postfix: '%', positive: true},
        ]
      },
    ]
  },
];

export default governments
