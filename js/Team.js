export default class Team{
    static TEAM_FILE = '../data_web/teams_summary.csv';
    static TEAM_ABR_ON_LEFT = new Set(["POR","GSW","LAC","PHX","UTA","DEN","MIN","MIL","CHI","IND","DET","NYK","SAS","DAL","OKC","MEM","CLE"]);
    static MAX_NUMBER_OF_TEAMS = 2;
    constructor(team){
        this.name = team["NICKNAME"];
        this.id = parseInt(team["TEAM_ID"]);
        this.city = team["CITY"];
        this.abbr = team["ABBREVIATION"];
        this.lat = parseFloat(team["LATITUDE"]);
        this.long = parseFloat(team["LONGITUDE"]);
        if(this.id != 0){
          var mainColorStr = colors[this.abbr]['mainColor']
          this.mainColor = colors[this.abbr]['colors'][mainColorStr]['hex']
        }
    }

    coordinates(){
      return [this.long, this.lat]
    }
}
export const DUMMY_TEAM = new Team({"NICKNAME":"Chose a team", "TEAM_ID":"0", "CITY":" ", "ABBREVIATION":"", "LATITUDE":"0.0", "LONGITUDE":"0.0"})

//Taken from https://raw.githubusercontent.com/homerchen19/nba-color/master/src/colors.js
//Thanks to him
const pureWhite = {
  hex: '#ffffff',
  rgb: [255, 255, 255],
};

const pureBlack = {
  hex: '#000000',
  rgb: [0, 0, 0],
};

const colors = {
  ATL: {
    fullName: 'Atlanta Hawks',
    mainColor: 'red',
    secondaryColor: 'white',
    colors: {
      red: {
        hex: '#c8102e',
        rgb: [200, 16, 46],
      },
      green: {
        hex: '#c4d600',
        rgb: [196, 214, 0],
      },
      white: pureWhite,
      gray: {
        hex: '#25282a',
        rgb: [37, 40, 42],
      },
    },
  },
  BKN: {
    fullName: 'Brooklyn Nets',
    mainColor: 'black',
    secondaryColor: 'white',
    colors: {
      black: {
        hex: '#010101',
        rgb: [1, 1, 1],
      },
      white: pureWhite,
    },
  },
  BOS: {
    fullName: 'Boston Celtics',
    mainColor: 'green',
    secondaryColor: 'white',
    colors: {
      green: {
        hex: '#007a33',
        rgb: [0, 122, 51],
      },
      black: pureBlack,
      white: pureWhite,
      gold: {
        hex: '#ffd700',
        rgb: [255, 215, 0],
      },
      silver: {
        hex: '#c0c0c0',
        rgb: [192, 192, 192],
      },
    },
  },
  CHA: {
    fullName: 'Charlotte Hornets',
    mainColor: 'purple',
    secondaryColor: 'teal',
    colors: {
      purple: {
        hex: '#201747',
        rgb: [32, 23, 71],
      },
      teal: {
        hex: '#00778b',
        rgb: [0, 119, 139],
      },
      white: pureWhite,
      gray: {
        hex: '#888b8d',
        rgb: [136, 139, 141],
      },
    },
  },
  CHI: {
    fullName: 'Chicago Bulls',
    mainColor: 'red',
    secondaryColor: 'black',
    colors: {
      red: {
        hex: '#ba0c2f',
        rgb: [186, 12, 47],
      },
      black: pureBlack,
      white: pureWhite,
    },
  },
  CLE: {
    fullName: 'Cleveland Cavaliers',
    mainColor: 'wine',
    secondaryColor: 'gold',
    colors: {
      wine: {
        hex: '#6f263d',
        rgb: [111, 38, 61],
      },
      white: pureWhite,
      navy: {
        hex: '#041e42',
        rgb: [4, 30, 66],
      },
      gold: {
        hex: '#ffb81c',
        rgb: [255, 184, 28],
      },
    },
  },
  DAL: {
    fullName: 'Dallas Mavericks',
    mainColor: 'blue',
    secondaryColor: 'silver',
    colors: {
      blue: {
        hex: '#0050b5',
        rgb: [0, 80, 181],
      },
      silver: {
        hex: '#8d9093',
        rgb: [141, 144, 147],
      },
      navy: {
        hex: '#0c2340',
        rgb: [12, 35, 64],
      },
      black: pureBlack,
      white: pureWhite,
    },
  },
  DEN: {
    fullName: 'Denver Nuggets',
    mainColor: 'blue',
    secondaryColor: 'gold',
    colors: {
      blue: {
        hex: '#418fde',
        rgb: [65, 143, 222],
      },
      gold: {
        hex: '#ffc72c',
        rgb: [255, 199, 44],
      },
      navy: {
        hex: '#0c2340',
        rgb: [12, 35, 64],
      },
      white: pureWhite,
    },
  },
  DET: {
    fullName: 'Detroit Pistons',
    mainColor: 'blue',
    secondaryColor: 'red',
    colors: {
      blue: {
        hex: '#003da5',
        rgb: [0, 61, 165],
      },
      red: {
        hex: '#d50032',
        rgb: [213, 0, 50],
      },
      navy: {
        hex: '#041e42',
        rgb: [4, 30, 66],
      },
      white: pureWhite,
    },
  },
  GSW: {
    fullName: 'Golden State Warriors',
    mainColor: 'gold',
    secondaryColor: 'blue',
    colors: {
      gold: {
        hex: '#ffc72d',
        rgb: [255, 199, 44],
      },
      blue: {
        hex: '#003da5',
        rgb: [0, 61, 165],
      },
    },
  },
  HOU: {
    fullName: 'Houston Rockets',
    mainColor: 'red',
    secondaryColor: 'silver',
    colors: {
      red: {
        hex: '#ba0c2f',
        rgb: [186, 12, 47],
      },
      silver: {
        hex: '#8d9093',
        rgb: [141, 144, 147],
      },
      yellow: {
        hex: '#fdb927',
        rgb: [253, 185, 39],
      },
      white: pureWhite,
      black: pureBlack,
    },
  },
  IND: {
    fullName: 'Indiana Pacers',
    mainColor: 'blue',
    secondaryColor: 'gold',
    colors: {
      blue: {
        hex: '#041e42',
        rgb: [4, 30, 66],
      },
      gold: {
        hex: '#ffb81c',
        rgb: [255, 184, 28],
      },
      silver: {
        hex: '#b1b3b3',
        rgb: [177, 179, 179],
      },
      white: pureWhite,
    },
  },
  LAC: {
    fullName: 'Los Angeles Clippers',
    mainColor: 'red',
    secondaryColor: 'blue',
    colors: {
      red: {
        hex: '#d50032',
        rgb: [213, 0, 50],
      },
      blue: {
        hex: '#003da5',
        rgb: [0, 61, 165],
      },
      silver: {
        hex: '#b1b3b3',
        rgb: [177, 179, 179],
      },
      white: pureWhite,
    },
  },
  LAL: {
    fullName: 'Los Angeles Lakers',
    mainColor: 'purple',
    secondaryColor: 'gold',
    colors: {
      purple: {
        hex: '#702f8a',
        rgb: [112, 47, 138],
      },
      gold: {
        hex: '#ffc72c',
        rgb: [255, 199, 44],
      },
      white: pureWhite,
    },
  },
  MEM: {
    fullName: 'Memphis Grizzlies',
    mainColor: 'midnightBlue',
    secondaryColor: 'bealeStreetBlue',
    colors: {
      midnightBlue: {
        hex: '#23375b',
        rgb: [35, 55, 91],
      },
      bealeStreetBlue: {
        hex: '#6189b9',
        rgb: [97, 137, 185],
      },
      smokeBlue: {
        hex: '#bbd1e4',
        rgb: [187, 209, 228],
      },
      gold: {
        hex: '#ffd432',
        rgb: [255, 215, 50],
      },
    },
  },
  MIA: {
    fullName: 'Miami Heat',
    mainColor: 'red',
    secondaryColor: 'black',
    colors: {
      red: {
        hex: '#862633',
        rgb: [134, 38, 51],
      },
      yellow: {
        hex: '#ffa300',
        rgb: [255, 163, 0],
      },
      white: pureWhite,
      black: pureBlack,
    },
  },
  MIL: {
    fullName: 'Milwaukee Bucks',
    mainColor: 'green',
    secondaryColor: 'cream',
    colors: {
      green: {
        hex: '#2c5234',
        rgb: [44, 82, 52],
      },
      cream: {
        hex: '#ddcba4',
        rgb: [221, 203, 164],
      },
      blue: {
        hex: '#0057b8',
        rgb: [0, 87, 184],
      },
      white: pureWhite,
      black: pureBlack,
    },
  },
  MIN: {
    fullName: 'Minnesota Timberwolves',
    mainColor: 'blue',
    secondaryColor: 'green',
    colors: {
      blue: {
        hex: '#002b5c',
        rgb: [0, 42, 92],
      },
      gray: {
        hex: '#c6cfd4',
        rgb: [198, 208, 215],
      },
      green: {
        hex: '#7ac143',
        rgb: [122, 192, 67],
      },
      white: pureWhite,
    },
  },
  NOP: {
    fullName: 'New Orleans Pelicans',
    mainColor: 'blue',
    secondaryColor: 'red',
    colors: {
      blue: {
        hex: '#002b5c',
        rgb: [0, 43, 92],
      },
      gold: {
        hex: '#b4975a',
        rgb: [180, 151, 90],
      },
      red: {
        hex: '#e31937',
        rgb: [227, 25, 55],
      },
      white: pureWhite,
    },
  },
  NYK: {
    fullName: 'New York Knicks',
    mainColor: 'blue',
    secondaryColor: 'orange',
    colors: {
      blue: {
        hex: '#003da5',
        rgb: [0, 61, 165],
      },
      orange: {
        hex: '#ff671f',
        rgb: [255, 103, 31],
      },
      silver: {
        hex: '#b1b3b3',
        rgb: [177, 179, 179],
      },
      white: pureWhite,
    },
  },
  OKC: {
    fullName: 'Oklahoma City Thunder',
    mainColor: 'blue',
    secondaryColor: 'orange',
    colors: {
      blue: {
        hex: '#007dc3',
        rgb: [0, 125, 195],
      },
      orange: {
        hex: '#f05133',
        rgb: [240, 81, 51],
      },
      yellow: {
        hex: '#fdbb30',
        rgb: [253, 187, 48],
      },
      darkBlue: {
        hex: '#002d62',
        rgb: [0, 45, 98],
      },
    },
  },
  ORL: {
    fullName: 'Orlando Magic',
    mainColor: 'blue',
    secondaryColor: 'silver',
    colors: {
      blue: {
        hex: '#007dc5',
        rgb: [0, 125, 197],
      },
      silver: {
        hex: '#c4ced3',
        rgb: [196, 206, 211],
      },
      white: pureWhite,
      black: pureBlack,
    },
  },
  PHI: {
    fullName: 'Philadelphia 76ers',
    mainColor: 'blue',
    secondaryColor: 'red',
    colors: {
      blue: {
        hex: '#006bb6',
        rgb: [0, 102, 182],
      },
      red: {
        hex: '#ed174c',
        rgb: [237, 23, 76],
      },
      white: pureWhite,
    },
  },
  PHX: {
    fullName: 'Phoenix Suns',
    mainColor: 'orange',
    secondaryColor: 'purple',
    colors: {
      orange: {
        hex: '#e56020',
        rgb: [229, 96, 32],
      },
      purple: {
        hex: '#1d1160',
        rgb: [29, 17, 96],
      },
      gray: {
        hex: '#63717a',
        rgb: [99, 113, 122],
      },
      white: pureWhite,
      black: pureBlack,
    },
  },
  POR: {
    fullName: 'Portland Trailblazers',
    mainColor: 'red',
    secondaryColor: 'black',
    colors: {
      red: {
        hex: '#f0163a',
        rgb: [240, 22, 58],
      },
      silver: {
        hex: '#b6bfbf',
        rgb: [182, 191, 191],
      },
      white: pureWhite,
      black: pureBlack,
    },
  },
  SAC: {
    fullName: 'Sacramento Kings',
    mainColor: 'purple',
    secondaryColor: 'silver',
    colors: {
      purple: {
        hex: '#724c9f',
        rgb: [114, 76, 159],
      },
      silver: {
        hex: '#8e9090',
        rgb: [142, 144, 144],
      },
      white: pureWhite,
      black: pureBlack,
    },
  },
  SAS: {
    fullName: 'San Antonio Spurs',
    mainColor: 'silver',
    secondaryColor: 'black',
    colors: {
      silver: {
        hex: '#b6bfbf',
        rgb: [182, 191, 191],
      },
      white: pureWhite,
      black: pureBlack,
    },
  },
  TOR: {
    fullName: 'Toronto Raptors',
    mainColor: 'red',
    secondaryColor: 'silver',
    colors: {
      red: {
        hex: '#ce1141',
        rgb: [206, 17, 65],
      },
      silver: {
        hex: '#c4ced3',
        rgb: [196, 206, 211],
      },
      white: pureWhite,
      black: pureBlack,
    },
  },
  UTA: {
    fullName: 'Utah Jazz',
    mainColor: 'navy',
    secondaryColor: 'yellow',
    colors: {
      navy: {
        hex: '#002b5c',
        rgb: [0, 43, 92],
      },
      yellow: {
        hex: '#f9a01b',
        rgb: [249, 160, 27],
      },
      green: {
        hex: '#00471b',
        rgb: [0, 71, 27],
      },
      gray: {
        hex: '#bec0c2',
        rgb: [190, 192, 194],
      },
    },
  },
  WAS: {
    fullName: 'Washington Wizards',
    mainColor: 'navy',
    secondaryColor: 'red',
    colors: {
      navy: {
        hex: '#0c2340',
        rgb: [12, 35, 64],
      },
      red: {
        hex: '#c8102e',
        rgb: [200, 16, 46],
      },
      silver: {
        hex: '#8d9093',
        rgb: [141, 144, 147],
      },
      white: pureWhite,
    },
  },
};
