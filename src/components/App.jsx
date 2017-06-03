class App extends React.Component {

  constructor(props) {
    super(props);
    this.options = {
      key: window.YOUTUBE_API_KEY,
      max: 5,
      query: 'Hack Reactor'
    };
    
    this.state = {
      videos: window.exampleVideoData,
      videoInPlayer: window.exampleVideoData[0],
    };

    this.handleVideosUpdate = this.handleVideosUpdate.bind(this);
    this.handleVideoUpdate = this.handleVideoUpdate.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  componentDidMount() {
    this.props.searchYouTube(this.options, this.handleVideosUpdate);
  }

  handleVideoUpdate(video) { 
    this.setState({
      videoInPlayer: video
    });
  }

  handleVideosUpdate(videos) { 
    this.setState({
      videos: videos,
      videoInPlayer: videos[0]
    });
  }

  handleSearchSubmit(query) {
    this.options.query = query;
    this.props.searchYouTube(this.options, this.handleVideosUpdate);
  }

  render() {
    return (
      <div>
        <Nav onSearchSubmit={this.handleSearchSubmit}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.videoInPlayer} />
        </div>
        <div className="col-md-5">
          <VideoList 
            videos={this.state.videos} 
            onVideoClick={this.handleVideoUpdate}
          />
        </div>
      </div>
    );
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;


