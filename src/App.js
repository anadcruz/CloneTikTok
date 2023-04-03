
import './App.css';
import Video from './pages/Video';

function App() {
  return (
    <div className="App">
      <div className='app__videos'>

        <Video
          likes={1111}
          messages={222}
          shares={333}
          name="anadcruz"
          description="Pulo do gato"
          music="música épica"
          url="https://firebasestorage.googleapis.com/v0/b/jornada-dev.appspot.com/o/brecker2.mp4?alt=media&token=d1a44acd-bef3-4b18-bafe-92fa0b26828a"

        />
        <Video
          likes={2234}
          messages={122}
          shares={323}
          name="clara"
          description="Maya staring"
          music="Clap your hands"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4"
        />


      </div>
    </div>
  );
}

export default App;
