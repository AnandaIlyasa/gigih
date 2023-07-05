function getSongList() {
    const songList = [
        { title: "all of the lights", artists: [{ name: "Kanye West"}, { name: "Rihanna"}], duration: 2000 },
        { title: "Dancin", artists: [{ name: "Aaron Smith"}], duration: 2000 },
        { title: "Pump It", artists: [{ name: "The Black Eyed Peas"}], duration: 2000 },
    ];
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(songList);
        }, 1000);
    });
}

getSongList()
    .then((songList) => {
        console.log('My playlist:');
        for(let i = 0; i < songList.length; i++) {
            console.log(i+1, songList[i].title)
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });

const retrieveSongs = async () => {
    const songList = await getSongList();
    console.log("===============================")
    console.log('My playlist:')
    for(let i = 0; i < songList.length; i++) {
        console.log(i+1, songList[i].title)
    }
}


try {
    retrieveSongs();
} catch (error) {
    console.log(error);
}
  