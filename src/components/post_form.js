import React, {Component} from 'react';

class PostForm extends Component {
  constructor(props){
    super(props);

    this.state = {postDetail: ''};
  }

  onPostClick() {
    this.props.onPostNewItem(this.state.postDetail);
    this.setState({postDetail: ''});
  }

  render() {
    return (
      <div className="post-form form-group">
        <div className="form-inline">
          <input value={this.state.postDetail.post}
            id="postInput"
            value={this.state.postDetail}
            placeholder="How Are You Today?"
            className="form-control post-input"
            onChange={event => this.setState({postDetail: event.target.value})} />
          <button type="button"
            onClick={event => this.onPostClick()}
            className="btn btn-primary">Post</button>
        </div>
      </div>
    )
  }
}

export default PostForm;
