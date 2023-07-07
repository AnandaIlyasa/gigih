function getSongAPI(id) {
    const songList = [
        { title: "all of the lights", artists: [{ name: "Kanye West"}, { name: "Rihanna"}], duration: 2000 },
        { title: "Dancin", artists: [{ name: "Aaron Smith"}], duration: 2000 },
        { title: "Pump It", artists: [{ name: "The Black Eyed Peas"}], duration: 2000 },
    ];

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id >= songList.length || id < 0) {
                reject("id is out of range");
            } else {
                resolve(songList[id]);
            }
        }, 1000);
    });
}

module.exports = { getSongAPI };