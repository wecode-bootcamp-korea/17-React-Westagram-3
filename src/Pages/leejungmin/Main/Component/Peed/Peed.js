import React, { Component } from "react";
import Comment from "../Comment/Comment";
import "./Peed.scss";

class Peed extends Component {
  constructor() {
    super();
    this.state = {
      newReply: "",
      replyArr: [],
      isPeedLike: false,
      isReplyAddBtn: false,
    };
  }

  componentDidMount() {
    fetch("/data/commentData.json")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          replyArr: data,
        });
      });
  }

  // Comment Change
  newComment = (e) => {
    this.setState(
      {
        newReply: e.target.value,
      },
      () => {
        const { newReply } = this.state;
        const isBtnActive = newReply.length > 0;
        //newReply.length > 0 이 참이면 true 아니면 false를 isBtnActive에 넣어준다
        this.setState({
          isReplyAddBtn: isBtnActive,
        });
      }
    );
  };

  // Enter Comment Add
  pressEnter = (e) => {
    const { newReply } = this.state;

    if (e.key === "Enter" && newReply) {
      this.addComment();
    }
  };

  // Click Comment Add
  clickAddComment = (e) => {
    const { newReply } = this.state;

    e.preventDefault();
    if (newReply) {
      this.addComment();
    }
  };

  addComment = () => {
    const { newReply, replyArr } = this.state;

    const newComment = {
      commentId: Date.now(),
      commentName: "meeeeen93",
      commentContent: newReply,
    };

    const newComments = [...replyArr, newComment];

    this.setState(
      {
        replyArr: newComments,
        newReply: "",
        isReplyAddBtn: false,
      },
      () => console.log("state", this.state)
    );
  };

  // peed Like it!!
  peedLikeUp = (e) => {
    const { isPeedLike } = this.state;
    const isPeedLikeActive = !isPeedLike;

    this.setState({
      isPeedLike: isPeedLikeActive,
    });
  };

  render() {
    const { peedData } = this.props;
    const { isPeedLike, newReply, replyArr, isReplyAddBtn } = this.state;

    return (
      <div>
        <div className="content_peed">
          <div className="content_peed_header">
            <div className="content_peed_header_left">
              <img
                src={peedData.peedProfileImg}
                alt="content_bar_profile_photo"
              />
              <span>{peedData.peedWriterName}</span>
            </div>
            <i className="fas fa-ellipsis-h"></i>
          </div>
          <div className="content_peed_img">
            <img src={peedData.peedMainImg} alt="" />
          </div>
          <div className="content_peed_option">
            <div className="content_peed_option_header">
              <div className="peed_option_header_left">
                <i
                  className={
                    isPeedLike ? "fas fa-heart likeit_change" : "fas fa-heart"
                  }
                  onClick={this.peedLikeUp}
                ></i>
                <i className="far fa-comment"></i>
                <i className="far fa-paper-plane"></i>
              </div>
              <div className="peed_option_header_right">
                <i className="far fa-bookmark"></i>
              </div>
            </div>
            <div className="content_peed_option_sub_header">
              <span className="peed_option_sub_header_like">
                좋아요
                <span>
                  {isPeedLike ? peedData.peedLikeNum + 1 : peedData.peedLikeNum}
                </span>
                개
              </span>
            </div>
          </div>
          <div className="content_peed_text">
            <ul className="content_peed_sub_text">
              <div className="content_peed_text_main">
                <span>{peedData.peedWriterName}</span>
                <li>{peedData.peedText}</li>
              </div>
              {replyArr.map((el, index) => (
                <Comment newReplyAdd={el} key={index} />
              ))}
            </ul>
          </div>
          <div className="content_peed_text_time">32분 전</div>
          <form action="" className="content_peed_form">
            <input
              type="text"
              className="content_peed_reply"
              placeholder="댓글 달기..."
              onChange={this.newComment}
              onKeyPress={this.pressEnter}
              value={newReply}
            />
            <input
              type="submit"
              className={
                !isReplyAddBtn
                  ? "content_peed_submit"
                  : "content_peed_submit_on"
              }
              value="게시"
              onClick={this.clickAddComment}
              disabled={!isReplyAddBtn}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Peed;
