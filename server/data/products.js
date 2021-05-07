const products = [
  {
    name: 'Grand Theft Auto V',
    slug: 'grand-theft-auto-v',
    image:
      'https://media.rawg.io/media/games/84d/84da2ac3fdfc6507807a1808595afb12.jpg',
    screenshots: [
      'https://media.rawg.io/media/screenshots/a7c/a7c43871a54bed6573a6a429451564ef.jpg',
      'https://media.rawg.io/media/screenshots/cf4/cf4367daf6a1e33684bf19adb02d16d6.jpg',
      'https://media.rawg.io/media/screenshots/f95/f9518b1d99210c0cae21fc09e95b4e31.jpg',
      'https://media.rawg.io/media/screenshots/a7e/a7e990bc574f4d34e03b5926361d1ee7.jpg',
      'https://media.rawg.io/media/screenshots/592/592e2501d8734b802b2a34fee2df59fa.jpg',
    ],
    genres: ['Action', 'Adventure'],
    tags: [
      'Singleplayer',
      'Multiplayer',
      'Atmospheric',
      'Full Controller Support',
      'Great Soundtrack',
      'Co-op',
      'First-Person',
      'Third-Person',
      'Open World',
      'Sandbox',
      'Comedy',
      'Crime',
      'Third-Person Shooter',
    ],
    platforms: ['PC', 'PlayStation', 'Xbox'],
    released: '2013-09-17',
    rating: 0,
    numReviews: 0,
    newPrice: 59.99,
    oldPrice: 0,
    countInStock: 13,
  },
  {
    name: 'Portal 2',
    slug: 'portal-2',
    image:
      'https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg',
    screenshots: [
      'https://media.rawg.io/media/screenshots/221/221a03c11e5ff9f765d62f60d4b4cbf5.jpg',
      'https://media.rawg.io/media/screenshots/173/1737ff43c14f40294011a209b1012875.jpg',
      'https://media.rawg.io/media/screenshots/b11/b11a2ae0664f0e8a1ef2346f99df26e1.jpg',
      'https://media.rawg.io/media/screenshots/9b1/9b107a790909b31918ebe2f40547cc85.jpg',
      'https://media.rawg.io/media/screenshots/d05/d058fc7f7fa6128916c311eb14267fed.jpg',
    ],
    genres: ['Shooters', 'Strategy'],
    tags: [
      'Singleplayer',
      'Multiplayer',
      'Atmospheric',
      'Full Controller Support',
      'Co-op',
      'Story Rich',
      'First-Person',
      'Sci-fi',
      'FPS',
      'Online Co-Op',
      'Local Co-Op',
      'Funny',
      'Comedy',
      'Science',
    ],
    platforms: ['PC', 'PlayStation', 'Xbox', 'Linux'],
    released: '2011-04-18',
    rating: 0,
    numReviews: 0,
    newPrice: 39.99,
    oldPrice: 59.99,
    countInStock: 23,
  },
  {
    name: 'The Witcher 3: Wild Hunt',
    slug: 'the-witcher-3-wild-hunt',
    image:
      'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg',
    screenshots: [
      'https://media.rawg.io/media/screenshots/f63/f6373ee614046d81503d63f167181803.jpg',
      'https://media.rawg.io/media/screenshots/166/166787c442a45f52f4f230c33fd7d605.jpg',
      'https://media.rawg.io/media/screenshots/862/862397b153221a625922d3bb66337834.jpg',
      'https://media.rawg.io/media/screenshots/cdd/cdd31b6b4a687425a87b5ce231ac89d7.jpg',
      'https://media.rawg.io/media/screenshots/6a0/6a08afca95261a2fe221ea9e01d28762.jpg',
      'https://media.rawg.io/media/screenshots/1ac/1ac19f31974314855ad7be266adeb500.jpg',
    ],
    genres: ['Action', 'Adventure', 'RPG'],
    tags: [
      'Singleplayer',
      'Atmospheric',
      'Full Controller Support',
      'Great Soundtrack',
      'Story Rich',
      'Open World',
      'Third Person',
      'Fantasy',
      'Sandbox',
      'Action RPG',
      'Choices Matter',
      'Medieval',
      'Magic',
    ],
    platforms: ['PC', 'Nintendo', 'PlayStation', 'Xbox'],
    released: '2015-05-18',
    rating: 0,
    numReviews: 0,
    newPrice: 69.99,
    oldPrice: 0,
    countInStock: 15,
  },
  {
    name: 'Tomb Raider (2013)',
    slug: 'tomb-raider',
    image:
      'https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg',
    screenshots: [
      'https://media.rawg.io/media/screenshots/4f9/4f9d5efdecfb63cb99f1baa4c0ceb3bf.jpg',
      'https://media.rawg.io/media/screenshots/80f/80f373082b2a74da3f9c3fe2b877dcd0.jpg',
      'https://media.rawg.io/media/screenshots/a87/a8733e877f8fbe45e4a727c22a06aa2e.jpg',
      'https://media.rawg.io/media/screenshots/3f9/3f91678c6805a76419fa4ea3a045a909.jpg',
      'https://media.rawg.io/media/screenshots/417/4170bf07be43a8d8249193883f87f1c1.jpg',
      'https://media.rawg.io/media/screenshots/2a4/2a4250f83ad9e959d8b4ca9376ae34ea.jpg',
    ],
    genres: ['Action', 'Adventure'],
    tags: [
      'Singleplayer',
      'Multiplayer',
      'Atmospheric',
      'Full Controller Support',
      'Great Soundtrack',
      'Story Rich',
      'Third Person',
      'Classic',
      'Stealth',
      'Dinosaurs',
      'Third-Person Shooter',
    ],
    platforms: ['PC', 'PlayStation', 'Xbox'],
    released: '2013-03-05',
    rating: 0,
    numReviews: 0,
    newPrice: 39.99,
    oldPrice: 0,
    countInStock: 13,
  },
  {
    name: 'The Elder Scrolls V: Skyrim',
    slug: 'the-elder-scrolls-v-skyrim',
    image:
      'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
    screenshots: [
      'https://media.rawg.io/media/screenshots/3bd/3bd2710bd1ffb6664fdea7b83afd067e.jpg',
      'https://media.rawg.io/media/screenshots/d4e/d4e9b13f54748584ccbd6f998094dade.jpg',
      'https://media.rawg.io/media/screenshots/599/59946a630e9c7871003763d63184404a.jpg',
      'https://media.rawg.io/media/screenshots/c5d/c5dad426038d7d12f933eedbeab48ff3.jpg',
      'https://media.rawg.io/media/screenshots/b32/b326fa01c82db82edd41ed299886ee44.jpg',
      'https://media.rawg.io/media/screenshots/091/091e95b49d5a22de036698fc731395a2.jpg',
    ],
    genres: ['Action', 'RPG'],
    tags: [
      'Singleplayer',
      'Atmospheric',
      'Great Soundtrack',
      'Story Rich',
      'Open World',
      'First-Person',
      'Third-Person',
      'Fantasy',
      'Sandbox',
      'Action RPG',
      'Moddable',
      'Medieval',
      'Magic',
    ],
    platforms: ['PC', 'PlayStation', 'Xbox', 'Nintendo'],
    released: '2011-11-11',
    rating: 0,
    numReviews: 0,
    newPrice: 39.99,
    oldPrice: 49.99,
    countInStock: 23,
  },
  {
    name: 'Left 4 Dead 2',
    slug: 'left-4-dead-2',
    image:
      'https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg',
    screenshots: [
      'https://media.rawg.io/media/screenshots/4c0/4c043fd1a5ff78900483f2e82580fea0.jpg',
      'https://media.rawg.io/media/screenshots/c90/c9071628c238fbc20b366e2413dd8b4a.jpg',
      'https://media.rawg.io/media/screenshots/e29/e293b0f98092b8c0dbe24d66846088bb.jpg',
      'https://media.rawg.io/media/screenshots/168/16867bc76b385eb0fb749e41f7ada93d.jpg',
      'https://media.rawg.io/media/screenshots/fb9/fb917e562f311f48ff8d27632bd29a80.jpg',
      'https://media.rawg.io/media/screenshots/5f2/5f2ca569912add2a211b20ba3f576b97.jpg',
    ],
    genres: ['Action', 'Shooters'],
    tags: [
      'Singleplayer',
      'Multiplayer',
      'Full Controller Support',
      'Co-op',
      'First-Person',
      'FPS',
      'Horror',
      'Online Co-Op',
      'Local Co-Op',
      'Survival',
      'Moddable',
      'Zombies',
    ],
    platforms: ['PC', 'Mac', 'Xbox'],
    released: '2009-11-17',
    rating: 0,
    numReviews: 0,
    newPrice: 19.99,
    oldPrice: 0,
    countInStock: 15,
  },
  {
    name: 'Child of Light',
    slug: 'child-of-light',
    image:
      'https://media.rawg.io/media/games/c47/c4796c4c49e7e06ad328e07aa8944cdd.jpg',
    screenshots: [
      'https://media.rawg.io/media/screenshots/a7c/a7c43871a54bed6573a6a429451564ef.jpg',
      'https://media.rawg.io/media/screenshots/cf4/cf4367daf6a1e33684bf19adb02d16d6.jpg',
      'https://media.rawg.io/media/screenshots/f95/f9518b1d99210c0cae21fc09e95b4e31.jpg',
      'https://media.rawg.io/media/screenshots/a7e/a7e990bc574f4d34e03b5926361d1ee7.jpg',
      'https://media.rawg.io/media/screenshots/592/592e2501d8734b802b2a34fee2df59fa.jpg',
    ],
    genres: ['RPG', 'Indie', 'Strategy'],
    tags: [
      'Singleplayer',
      'Atmospheric',
      'Great Soundtrack',
      'Story Rich',
      '2D',
      'Partial Controller Support',
      'Fantasy',
      'Split Screen',
      'Local Co-Op',
      'Turn-Based',
      'Side Scroller',
    ],
    platforms: ['PC', 'Mac', 'PlayStation', 'Xbox', 'Nintendo'],
    released: '2014-04-29',
    rating: 0,
    numReviews: 0,
    newPrice: 19.99,
    oldPrice: 29.99,
    countInStock: 33,
  },
  {
    name: 'Sid Meier’s Civilization VI',
    slug: 'civilization-vi',
    image:
      'https://media.rawg.io/media/games/997/997ab4d67e96fb20a4092383477d4463.jpg',
    screenshots: [
      'https://media.rawg.io/media/screenshots/cb8/cb84dc82bfe7aa4057f13b9d120e4a11.jpg',
      'https://media.rawg.io/media/screenshots/241/2410ce2130e2a926cbeace46bf934a70.jpg',
      'https://media.rawg.io/media/screenshots/3d5/3d5793b7fbab188f1ebd0f2e3e645bd2.jpg',
      'https://media.rawg.io/media/screenshots/a12/a12c0d56a2c4e8f7b09761ab7f3bd44f.jpg',
      'https://media.rawg.io/media/screenshots/482/482a21efe8c44e491d814ea6a3f5d443.jpg',
      'https://media.rawg.io/media/screenshots/681/681a009d0a8bdafd01a871d5d07d9ec9.jpg',
    ],
    genres: ['Strategy', 'Simulation'],
    tags: [
      'Singleplayer',
      'Multiplayer',
      'Great Soundtrack',
      'Co-op',
      'Open World',
      'Online Co-Op',
      'Tactical',
      'Moddable',
      'Turn-Based',
      'Historical',
      'Turn-Based Strategy',
    ],
    platforms: ['PC', 'Mac', 'PlayStation', 'Xbox', 'Linux', 'Nintendo'],
    released: '2016-10-20',
    rating: 0,
    numReviews: 0,
    newPrice: 39.99,
    oldPrice: 0,
    countInStock: 13,
  },
  {
    name: 'Forza Horizon 4',
    slug: 'forza-horizon-4',
    image:
      'https://media.rawg.io/media/games/786/7863e587bac630de82fca50d799236a9.jpg',
    screenshots: [
      'https://media.rawg.io/media/screenshots/722/7226b83de614b7c5171b7c2694d53fce.jpg',
      'https://media.rawg.io/media/screenshots/f2b/f2b5d9a9306ff4ada2993f382834ed9c.jpg',
      'https://media.rawg.io/media/screenshots/bb0/bb0eb559688110e2d6ff7209c33a4e70.jpg',
      'https://media.rawg.io/media/screenshots/4a0/4a061c6752a938c1b50ec1409c0fc303.jpg',
      'https://media.rawg.io/media/screenshots/816/816c0aab06078d503f0121b3f7243d36.jpg',
      'https://media.rawg.io/media/screenshots/698/698b7e6262e8ae019da03e4ec3d11537.jpg',
    ],
    genres: ['Sports & Racing'],
    tags: [
      'Singleplayer',
      'Multiplayer',
      'Atmospheric',
      'Full Controller Support',
      'Great Soundtrack',
      'Co-op',
      'Open World',
      'Online Co-Op',
      'Sandbox',
      'Street Racing',
    ],
    platforms: ['PC', 'Xbox'],
    released: '2018-10-02',
    rating: 0,
    numReviews: 0,
    newPrice: 39.99,
    oldPrice: 0,
    countInStock: 15,
  },
];

export default products;
