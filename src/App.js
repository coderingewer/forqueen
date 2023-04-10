import './App.css';
import video from "./video.webm";

function App() {
  return (
    <div style={{backgroundColor:"white", height:"100vh", width:"100%"}}>
    <div className="happy">by-3/7</div>
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        display: "grid",
        justifyContent: "center",
        placeItems: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <video
        style={{ overflow: "hidden" }}
        width="400%"
        height="100%"
        autoPlay
        muted
        loop
        controls={false}
      >
        <source src={video} type="video/mp4" />
      </video>
    </div>
  </div>
  );
}

export default App;
