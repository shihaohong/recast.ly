class App extends React.Component {

  constructor() {
    super();
    this.state = {
      videos: window.exampleVideoData,
      videoInPlayer: window.exampleVideoData[0]
    };

    this.handleVideoClick = this.handleVideoClick.bind(this);
  }


  handleVideoClick(video) {
    this.setState({
      videoInPlayer: video
    });

  }

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.videoInPlayer} />
        </div>
        <div className="col-md-5">
          <VideoList 
            videos={this.state.videos} 
            onVideoClick={this.handleVideoClick}
          />
        </div>
      </div>
    );
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;


