const videoIds = db.videos.insertMany([
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/SYTWWUoYUMg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAepl-XL0j-phx8lo4opns1gpPi5g",
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/upWr18yghsE/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB1AaAAuADigIMCAAQARgPIGUoSjAP&rs=AOn4CLBWfJp5nLBmgBcfo204IWkB1hIkSQ",
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/-7GQIAm_IHE/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_g6AArgIigIMCAAQARhgIGUoSTAP&rs=AOn4CLAbTeTbLSBDkSKctEW47eU8aBCYbA",
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/yjeRjf-UICM/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_g6AArgIigIMCAAQARhlIF0oTzAP&rs=AOn4CLCW0gtnIDmyyMRqdnOJ212KzArXZw",
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/D63yDoKM1FE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCFeCzj5HSvbSuUX0kjj_QBuOMvPg",
  },
]).insertedIds;

db.products.insertMany([
  {
    productUrl:
      "https://www.tokopedia.com/unilever/clear-men-anti-dandruff-shampo-anti-ketombe-ice-cool-menthol-660ml",
    title: "Shampo Clear",
    price: 90500,
    videoId: videoIds[0],
  },
  {
    productUrl:
      "https://www.tokopedia.com/dettolstore/dettol-cairan-antiseptik-1l",
    title: "Dettol Antiseptik",
    price: 165000,
    videoId: videoIds[0],
  },
  {
    productUrl: "https://www.tokopedia.com/garudafood/garuda-kacang-kulit",
    title: "Kacang Garuda",
    price: 36000,
    videoId: videoIds[0],
  },
  {
    productUrl:
      "https://www.tokopedia.com/garudafood/gery-saluut-malkist-coklat",
    title: "Gery Snack",
    price: 35200,
    videoId: videoIds[1],
  },
  {
    productUrl:
      "https://www.tokopedia.com/mondelez/biskuat-biskuit-coklat-134-4-g-3-pcs?extParam=ivf%3Dfalse%26whid%3D13355454&src=topads",
    title: "Biskuat Snack",
    price: 20000,
    videoId: videoIds[1],
  },
]);

db.comments.insertMany([
  {
    username: "User 1",
    comment: "Comment 1",
    timestamp: new Date(),
    videoId: videoIds[0],
  },
  {
    username: "User 2",
    comment: "Comment 2",
    timestamp: new Date(),
    videoId: videoIds[0],
  },
  {
    username: "User 1",
    comment: "Comment 1",
    timestamp: new Date(),
    videoId: videoIds[1],
  },
  {
    username: "User 2",
    comment: "Comment 2",
    timestamp: new Date(),
    videoId: videoIds[1],
  },
]);
