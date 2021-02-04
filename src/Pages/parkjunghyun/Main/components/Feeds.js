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

  componentDidMount() {
    fetch('/data/commentData.json', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          comments: data,
        });
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

  changeImg = (id) => {
    const changedCmt = this.state.comments.map((comment) => {
      if (comment.id === id) {
        comment.isLiked = !comment.isLiked;
      }
      return comment;
    });
    this.setState({
      commments: changedCmt,
    });
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
                    id={comment.id}
                    text={comment.content}
                    like={comment.isLiked}
                    changeImg={(id) => this.changeImg(id)}
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
