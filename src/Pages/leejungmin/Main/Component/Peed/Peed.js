import React, { Component } from "react";
import Comment from "../Comment/Comment";
// import PEEDDATAARR from "./peedDataArr";
import "./Peed.scss";

class Peed extends Component {
  constructor() {
    super();
    this.state = {
      newReply: "",
      replyArr: [],
      isPeedLike: false,
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/data/commentData.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          replyArr: data,
        });
      });
  }

  // Comment Add
  newComment = (e) => {
    this.setState({
      newReply: e.target.value,
    });
  };

  pressEnter = (e) => {
    if (e.key === "Enter" && this.state.newReply) {
      const newComment = {
        commentId: Date.now(),
        commentName: "meeeeen93",
        commentContent: this.state.newReply,
      };
      console.log("fefwf", newComment);
      this.setState({
        replyArr: this.state.replyArr.concat(newComment),
        newReply: "",
      });
    }
  };

  // add = () => {
  //   this.setState({
  //     replyArr: this.state.replyArr.concat(this.state.newReply),
  //   });
  // };

  // peed Like it!!
  peedLikeUp = () => {
    if (!this.state.isPeedLike) {
      this.setState({
        isPeedLike: true,
      });
    } else {
      this.setState({
        isPeedLike: false,
      });
    }
  };

  render() {
    const { peedData } = this.props;
    // console.log(this.state.newReply);
    // console.log(this.state.replyArr);

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
                    this.state.isPeedLike
                      ? "fas fa-heart likeit_change"
                      : "fas fa-heart"
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
                좋아요{" "}
                <span>
                  {this.state.isPeedLike
                    ? peedData.peedLikeNum + 1
                    : peedData.peedLikeNum}
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
              {this.state.replyArr.map((el, index) => (
                <Comment key={index} newReplyAdd={el} />
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
              value={this.state.newReply}
            />
            <input
              type="submit"
              className="content_peed_submit"
              value="게시"
              disabled
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Peed;
