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

    this.addPost = this.addPost.bind(this);
    this.handleCommentValue = this.handleCommentValue.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/commentData.json', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          comments: data,
        });
      });

    fetch('http://localhost:3000/data/feedsData.json', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          feeds: data,
        });
      });
  }

  handleCommentValue(e) {
    this.setState({
      commentValue: e.target.value,
    });
  }

  addPost = (e) => {
    e.preventDefault();
    console.log(this.state.commentValue);

    const { comments, commentValue } = this.state;

    this.setState({
      comments: [
        ...comments,
        {
          id: comments.length + 1,
          userName: 'wecode',
          content: commentValue,
          isLiked: false,
        },
      ],
    });
    e.target[0].value = '';
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
