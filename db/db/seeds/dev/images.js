exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('images').del()
    .then(function () {
      // Inserts seed entries
      return knex('images').insert([
        {
          url: 'https://images.unsplash.com/photo-1549887552-cb1071d3e5ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80',
          title: 'Prometheus Bound and the Oceanids',
          color: ['white', 'black', 'grey'],
          artist: 'Eduard Müller',
          type: 'sculpture',
          favorited: false,
          quantity: 0,
          price: '25'
        },
        {
          url: 'https://images.unsplash.com/photo-1555443805-658637491dd4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1585&q=80',
          title: 'Dea',
          color: ['blue', 'white'],
          artist: `unknown`,
          type: 'sculpture',
          favorited: false,
          quantity: 0,
          price: '25'
        },
        {
          url: 'https://images.unsplash.com/photo-1506813561347-cbbdf7b3f520?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1002&q=80',
          title: 'Ercole e Ippolita',
          color: ['black', 'white', 'yellow'],
          artist: `Vincenzo de' rossi`,
          type: 'sculpture',
          favorited: false,
          quantity: 0,
          price: '25'
        },
        {
          url: 'https://images.unsplash.com/photo-1628508438706-6e6a19853e1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
          title: 'Homer Head',
          color: ['purple'],
          artist: `unknown`,
          type: 'sculpture',
          favorited: false,
          quantity: 0,
          price: '25'
        },
        {
          url: 'https://images.unsplash.com/photo-1614701759345-c4e5dfa3a0b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
          title: 'Posiedon',
          color: ['Blue'],
          artist: `unknown`,
          type: 'sculpture',
          favorited: false,
          quantity: 0,
          price: '25'
        },
        {
          url: 'https://images.unsplash.com/photo-1484589065579-248aad0d8b13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fHBob3RvZ3JhcGh5JTIwYXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          title: 'Spacey Milky Way',
          color: ['yellow', 'black', 'orange'],
          artist: 'Joel Filipe',
          type: 'abstract',
          favorited: false,
          quantity: 0,
          price: '25'
        },
        {
          url: 'https://images.unsplash.com/photo-1549490349-8643362247b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
          title: 'Textured Purple',
          color: ['purple'],
          artist: 'Maria Orlova',
          type: 'abstract',
          favorited: false,
          quantity: 0,
          price: '25'
        },
        {
          url: 'https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
          title: 'Bubble Gum',
          color: ['pink', 'blue'],
          artist: 'Pawel Czerwinski',
          type: 'abstract',
          favorited: false,
          quantity: 0,
          price: '25'
        },
        {
          url: 'https://images.unsplash.com/photo-1607457661772-02cb7eb0511b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
          title: 'Ovaltine',
          color: ['brown', 'black'],
          artist: 'Pawel Czerwinski',
          type: 'abstract',
          favorited: false,
          quantity: 0,
          price: '25'
        },
        {
          url: 'https://images.unsplash.com/photo-1550537687-c91072c4792d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
          title: 'Shades',
          color: ['yellow', 'white', 'grey'],
          artist: 'Jason Leung',
          type: 'abstract',
          favorited: false,
          quantity: 0,
          price: '25'
        },
        {
          url: 'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
          title: 'Hallway',
          color: ['pink', 'blue', 'orange'],
          artist: 'Efe Kurnaz',
          type: 'photography',
          favorited: false,
          quantity: 0,
          price: '25'
        },
        {
          url: 'https://images.unsplash.com/photo-1543691110-1c7d6b1927f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
          title: 'SOHOHO',
          color: ['orange', 'red'],
          artist: 'Marcel Heil',
          type: 'photography',
          favorited: false,
          quantity: 0,
          price: '25'
        },
        {
          url: 'https://images.unsplash.com/photo-1590905655658-1e3c2f511c6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=992&q=80',
          title: 'Build Bridges Not Walls',
          color: ['orange', 'brown'],
          artist: 'Markus Spiske',
          type: 'photography',
          favorited: false,
          quantity: 0,
          price: '25'
        },
        {
          url: 'https://images.unsplash.com/photo-1630406644170-1b974365b8fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1828&q=80',
          title: 'STOP SEXUALIZING GIRLS',
          color: ['black', 'grey', 'white'],
          artist: 'K. Mitch Hodge',
          type: 'photography',
          favorited: false,
          quantity: 0,
          price: '25'
        },
        {
          url: 'https://images.unsplash.com/photo-1583824187027-e27ae4bbb091?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80',
          title: 'Team Spirit',
          color: ['black', 'grey', 'white'],
          artist: 'Markus Spiske',
          type: 'photography',
          favorited: false,
          quantity: 0,
          price: '25'
        },
        {
          url: 'https://images.unsplash.com/photo-1577081320692-6eff449819c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=896&q=80',
          title: 'Last Summer Things Were Greener',
          color: ['green', 'blue', 'brown', 'black'],
          artist: 'John Byam Liston Shaw',
          type: 'painting',
          favorited: false,
          quantity: 0,
          price: '25'
        },
        {
          url: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=816&q=80',
          title: 'Vase of Flowers',
          color: ['multi', 'black'],
          artist: 'Jan Davidsz de Heem',
          type: 'painting',
          favorited: false,
          quantity: 0,
          price: '25'
        },
        {
          url: 'https://images.unsplash.com/photo-1580136608260-4eb11f4b24fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1452&q=80',
          title: 'Springtime',
          color: ['green', 'blue', 'white'],
          artist: 'Philip Wilson Steer',
          type: 'painting',
          favorited: false,
          quantity: 0,
          price: '25'
        },
        {
          url: 'https://images.unsplash.com/photo-1576769267415-9642010aa962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1372&q=80',
          title: 'Changing the Letter',
          color: ['red', 'blue', 'green', 'yellow'],
          artist: 'Joseph Edward Southall',
          type: 'painting',
          favorited: false,
          quantity: 0,
          price: '25'
        },
        {
          url: 'https://images.unsplash.com/photo-1577720580479-7d839d829c73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1568&q=80',
          title: 'Near Brodick, Isle Of Arran, Scotland',
          color: ['yellow', 'blue', 'green'],
          artist: 'William Andrews Nesfield',
          type: 'painting',
          favorited: false,
          quantity: 0,
          price: '25'
        },
        {
          url: 'https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1635&q=80',
          title: 'Digital David',
          color: ['purple', 'blue'],
          artist: 'Simon Lee',
          type: 'digital',
          favorited: false,
          quantity: 0,
          price: '25'
        },
        {
          url: 'https://images.unsplash.com/photo-1637140945341-f28ada987326?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80',
          title: 'Hand Rising',
          color: ['black', 'white', 'silver'],
          artist: 'Simon Lee',
          type: 'digital',
          favorited: false,
          quantity: 0,
          price: '25'
        }, 
        {
          url: 'https://images.unsplash.com/photo-1542772144-515ddfae17e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80',
          title: 'Alley Colorful',
          color: ['orange', 'blue'],
          artist: 'Vlad Bunu',
          type: 'photography',
          favorited: false,
          quantity: 0,
          price: '25'
        }, 
        {
          url: 'https://images.unsplash.com/photo-1637717256696-a0204d03a8fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
          title: 'Watermelon Astronaut',
          color: ['red', 'green', 'white'],
          artist: 'Cash',
          type: 'digital',
          favorited: false,
          quantity: 0,
          price: '25'
        }, 
        {
          url: 'https://images.unsplash.com/photo-1629729802306-2c196af7eef5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
          title: 'Membrane',
          color: ['purple', 'orange'],
          artist: 'Li Zhang',
          type: 'digital',
          favorited: false,
          quantity: 0,
          price: '25'
        }, 
        {
          url: 'https://images.unsplash.com/photo-1632516643720-e7f5d7d6ecc9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1611&q=80',
          title: 'Perfect Circle',
          color: ['orange', 'blue'],
          artist: 'and_machines',
          type: 'digital',
          favorited: false,
          quantity: 0,
          price: '25'
        }, 
        {
          url: 'https://images.unsplash.com/flagged/photo-1573803625411-9edf9a6ae3b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80',
          title: 'Graffiti Doodle',
          color: ['yellow', 'purple', 'white', 'black'],
          artist: 'Jens Schwan',
          type: 'drawing',
          favorited: false,
          quantity: 0,
          price: '25'
        },
        {
          url: 'https://images.unsplash.com/photo-1616427593347-c0d7817e7f88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
          title: 'Self Portrait',
          color: ['black', 'white', 'yellow'],
          artist: 'Maria Lupan',
          type: 'drawing',
          favorited: false,
          quantity: 0,
          price: '25'
        },
        {
          url: 'https://images.unsplash.com/photo-1582140161538-22f8c4ab7345?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=970&q=80',
          title: 'unknown',
          color: ['black', 'white', 'yellow'],
          artist: 'Frank Rinehart',
          type: 'drawing',
          favorited: false,
          quantity: 0,
          price: '25'
        },
        {
          url: 'https://images.unsplash.com/photo-1577086677645-1e5e43894316?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1599&q=80',
          title: 'Anxiety',
          color: ['black', 'white', 'grey'],
          artist: 'unknown',
          type: 'drawing',
          favorited: false,
          quantity: 0,
          price: '25'
        },
        {
          url: 'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
          title: 'Kitty Cat with Friendo',
          color: ['orange', 'white', 'grey'],
          artist: 'unknown',
          type: 'photography',
          favorited: false,
          quantity: 0,
          price: '25'
        },
        {
          url: 'https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80',
          title: 'Sleepy Cat',
          color: ['orange', 'white'],
          artist: 'unknown',
          type: 'photography',
          favorited: false,
          quantity: 0,
          price: '25'
        },
        {
          url: 'https://images.unsplash.com/photo-1516280030429-27679b3dc9cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
          title: 'Thinking Cat',
          color: ['black', 'green'],
          artist: 'unknown',
          type: 'photography',
          favorited: false,
          quantity: 0,
          price: '25'
        },
        {
          url: 'https://images.unsplash.com/photo-1603725480633-45d1f1021fa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
          title: 'Drop',
          color: ['red'],
          artist: 'Gary Ellis',
          type: 'photography',
          favorited: false,
          quantity: 0,
          price: '25'
        },
        {
          url: 'https://images.unsplash.com/photo-1616247380767-5ebadc9b869e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80',
          title: 'Blue Girl',
          color: ['blue', 'white'],
          artist: 'Maria Lupan',
          type: 'drawing',
          favorited: false,
          quantity: 0,
          price: '25'
        },
        {
          url: 'https://images.unsplash.com/photo-1603344204980-4edb0ea63148?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80',
          title: 'Doodles',
          color: ['black', 'white'],
          artist: 'Abin Varghese',
          type: 'drawing',
          favorited: false,
          quantity: 0,
          price: '25'
        } 
      ]);
    });
};
