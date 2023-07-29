db.Song.aggregate([
  // get albums that have 2 or more song
  // first stage (group by album)
  {
    $group: {
      _id: "$album",
      totalSong: { $count: {} }, // count song for each album
    },
  },
  // second stage (having >= 2 song from the same album)
  {
    $match: { totalSong: { $gte: 2 } },
  },
]);
