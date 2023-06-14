import Header from "../Components/MainHeader";
import ImageSlideshow from "../Components/ImageSlideshow";
import Posts from "../Components/Posts";
import ArtistReel from "./../Components/ArtistReel";

function App() {
  const clearCacheData = () => {
    caches.keys().then((names) => {
      names.forEach((name) => {
        caches.delete(name);
      });
    });
    console.log("Complete Cache Cleared");
  };

  clearCacheData();
  
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <ArtistReel />
        <div className="main-content-inner">
          <Posts />
          <ImageSlideshow />
        </div>
      </div>
    </div>
  );
}

export default App;
