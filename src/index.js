import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import PostForm from './components/post_form';
import PostList from './components/post_list';
import ProfileImage from './components/profile_image';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      postList: []
    };

    this.getPostList();
  }

  getPostList() {
    this.state.postList = [
      {
        id: 1,
        date: '01/06/2016',
        post: 'Today is boring',
        postBy: 'Victoria Pong'
      },
      {
        id: 2,
        date: '02/06/2016',
        post: 'I went for ice cream today. It was super nice !!',
        postBy: 'Victoria Pong'
      },
      {
        id: 3,
        date: '03/06/2016',
        post: 'I had a fight with my best friend over fried chickens ;(',
        postBy: 'Victoria Pong'
      },
      {
        id: 4,
        date: '04/06/2016',
        post: 'I wanna go home NOW !!!!',
        postBy: 'Victoria Pong'
      }
    ];
  }

  getTodayDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();

    if (dd < 10) {
      dd = '0' + dd;
    }

    if (mm < 10) {
      mm = '0' + mm;
    }

    today = dd + '/' + mm + '/' + yyyy;

    return today;

  }

  postNewItem(postDetail) {
    if(postDetail != ''){
      var postObj = {
        id: this.state.postList.length+1,
        date: this.getTodayDate(),
        post: postDetail,
        postBy: 'Victoria Pong'
      };

      var postList = this.state.postList;
      postList.unshift(postObj);

      this.setState({postList: postList});
    }
  }

  removePost(selectedPost){
    console.log(selectedPost);
    var postList = this.state.postList;
    var selectedIndex = 0;

    postList.forEach((post,index) => {
      if(post.id == selectedPost.id){
        selectedIndex = index;
      }
    })

    postList.splice(selectedIndex,1);
    this.setState({postList: postList});
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-3">
          <ProfileImage />
        </div>
        <div className="col-md-8">
          <PostForm onPostNewItem={postDetail => this.postNewItem(postDetail)} />
          <PostList posts={this.state.postList} onRemovePost={post => this.removePost(post)} />
        </div>
      </div>
    )
  }
}

// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
