import { data } from './dummy-data/data';
import PlaylistSection from './playlist-section';
import SongSection from './song-section';

function App() {
  return (
    <div className="App">
      <PlaylistSection playlists={data}/>
      <SongSection songs={data[0].songs}/>
    </div>
  );
}

export default App;
