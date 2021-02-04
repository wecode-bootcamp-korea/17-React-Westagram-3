import React, { Component } from 'react';
import Comments from '../Comments';
import Feed from '../Feed';
import './MainLeft.scss';
import './Feeds.scss';

export default class Feeds extends Component {
  constructor() {
    super();
    this.state = {
      comments: [],
      commentValue: '',
      feeds: [],
    };
  }

  fetchFunc = (endpoint, key) => {
    fetch(endpoint, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          key: data,
        });
      });
  };

  componentDidMount() {
    fetch('/data/commentData.json', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          comments: data,
        });
        console.log(this.state.comments);
      });

    fetch('/data/feedsData.json', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          feeds: data,
        });
      });
  }

  handleCommentValue = (e) => {
    this.setState({
      commentValue: e.target.value,
    });
  };

  addPost = (e) => {
    e.preventDefault();

    const { comments, commentValue } = this.state;
    let newComment = {
      id: comments.length + 1,
      userName: 'wecode',
      content: commentValue,
      isLiked: false,
    };

    this.setState({
      comments: [...comments, newComment],
    });
    e.target[0].value = '';
  };

  changeImg = () => {
    // console.log(this.state.comments);
    // // like = !like;
    // this.setState({
    //   comment: { id: key, isLiked: false },
    // });
    // console.log(this.state.comments);
  };

  render() {
    return (
      <article className="feeds">
        {this.state.feeds.map((feed) => {
          return (
            <div key={feed.id}>
              <Feed
                key={feed.id}
                authorImgSrc={feed.authorImgSrc}
                authorName={feed.authorName}
                authorLocation={feed.authorLocation}
                mainImgSrc={feed.mainImgSrc}
                commentAuthor={feed.commentAuthor}
                commentHash={feed.commentHash}
                commentTime={feed.commentTime}
                handleCommentValue={this.handleCommentValue}
                addPost={this.addPost}
              />
              {this.state.comments.map((comment) => {
                return (
                  <Comments
                    key={comment.id}
                    text={comment.content}
                    like={comment.isLiked}
                    changeImg={this.changeImg}
                  />
                );
              })}
            </div>
          );
        })}
      </article>
    );
  }
}
