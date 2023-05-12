import Header from "../Components/MainHeader";
import ImageSlideshow from "../Components/ImageSlideshow";
import Posts from "../Components/Posts";
import ArtistReel from "./../Components/ArtistReel";

function App() {
  return (
    <div className="App">
      <Header />
      <ArtistReel />
      <ImageSlideshow />
      <Posts />
    </div>
  );
}

export default App;
