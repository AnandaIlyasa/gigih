import getSongAPI from "./api.js"

getSongAPI(6)
    .then((song) => {
        console.log('Retrieved song title:', song.title);
        console.log("===============================");
    })
    .catch((error) => {
        console.error('Error:', error);
        console.log("===============================");
    });
    
const getSong = async () => {
    try {
        const song = await getSongAPI(2);
        console.log('Retrieved song title:', song.title);
    } catch (error) {
        console.error('Error:', error);
    }
}

getSong();
  