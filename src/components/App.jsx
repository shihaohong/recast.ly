class App extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      videos: window.exampleVideoData,
      videoInPlayer: window.exampleVideoData[0],
    };

    this.handleVideoClick = this.handleVideoClick.bind(this);
  }

  componentDidMount() {
    // load up initial options
    var options = {
      key: window.YOUTUBE_API_KEY,
      max: 5,
      query: 'Hack Reactor'
    };

    // feed it into searchYoutube function
    this.props.searchResults(options, this.handleVideoClick);
  }

  handleVideoClick(videos) { 
    console.log('videos', videos);
    this.setState({
      videos: videos,
      videoInPlayer: videos[0]
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


