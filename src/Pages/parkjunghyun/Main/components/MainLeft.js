import React, { Component } from 'react';
import './MainLeft.scss';

class MainLeft extends Component {
  constructor() {
    super();
    this.state = {
      profileHTML: `<div class="profile"> <img src="images/parkjunghyun/profile.jpeg" /> <div class="name">asdf</div> </div>`,
    };
  }

  render() {
    return (
      <section className="mainLeft">
        <section className="profiles">
          <div
            dangerouslySetInnerHTML={{ __html: this.state.profileHTML }}
          ></div>
        </section>

        <article className="feeds">
          <div className="author">
            <img alt="profile" src="images/parkjunghyun/profile.jpeg" />
            <div className="authorText">
              <div id="authorName">
                <b>gongganlog</b>
              </div>
              <div id="location">경주</div>
            </div>
            <img alt="more" id="more" src="images/parkjunghyun/more.png" />
          </div>
          <img alt="instaImg" src="images/parkjunghyun/instaImg.png" />
          <div className="feedIcons">
            <img alt="like" src="images/parkjunghyun/heart.png" />
            <img alt="msgbubble" src="images/parkjunghyun/msgbubble.png" />
            <img alt="sendicon" src="images/parkjunghyun/send.png" />
            <img alt="bookmark" src="images/parkjunghyun/bookmark.png" />
          </div>
          <div id="likes">
            <b>좋아요 4개</b>
          </div>
          <div id="comment">
            <b>gongganlog |</b>
            <a href="www.google.com">#경주전원주택..</a>
          </div>
          <div id="writeTime">2분전</div>
          <div className="writeCmt">
            <input
              type="text"
              className="postingCmt"
              placeholder="댓글 달기..."
            />
            <button id="post">게시</button>
          </div>
        </article>
      </section>
    );
  }
}

export default MainLeft;
