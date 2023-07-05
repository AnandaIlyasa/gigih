function getSongList() {
    const songList = [
        { title: "song title", artists: [{ name: "artist name 1"}], duration: 2000 },
        { title: "song title", artists: [{ name: "artist name 1"}], duration: 2000 },
        { title: "song title", artists: [{ name: "artist name 1"}], duration: 2000 },
    ];
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(songList);
        }, 1000);
    });
}

getSongList()
    .then((songList) => {
        console.log('Available Songs :', songList);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
  