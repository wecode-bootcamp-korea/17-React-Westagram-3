import React, { Component } from "react";
import Nav from "../../../Components/Nav/Nav";
import "./Main.scss";

class MainLee extends Component {
  render() {
    return (
      <body id="main_layout">
        <Nav></Nav>
        <main className="main_content">
          <div className="main_content_left">
            <div className="content_story">
              <div className="story">
                <div className="story_border">
                  <img src="/images/leejungmin/pika.png" alt="스토리1번" />
                </div>
                <span>_poket.mon</span>
              </div>
              <div className="story">
                <div className="story_border">
                  <img src="/images/leejungmin/udi.png" alt="스토리2번" />
                </div>
                <span>Andy_lover</span>
              </div>
              <div className="story">
                <div className="story_border">
                  <img src="/images/leejungmin/buz.jpg" alt="스토리3번" />
                </div>
                <span>buzz.light.b</span>
              </div>
              <div className="story">
                <div className="story_border">
                  <img
                    src="/images/leejungmin/onethekidi.jpg"
                    alt="스토리4번"
                  />
                </div>
                <span>onethe2020</span>
              </div>
              <div className="story">
                <div className="story_border">
                  <img src="/images/leejungmin/potato.jpg" alt="스토리5번" />
                </div>
                <span>_gamja__x2</span>
              </div>
              <div className="story">
                <div className="story_border">
                  <img src="/images/leejungmin/brother.png" alt="스토리6번" />
                </div>
                <span>baaaaabooo</span>
              </div>
              <div className="story">
                <div className="story_border">
                  <img src="/images/leejungmin/sponjibob.jpg" alt="스토리7번" />
                </div>
                <span>bobbob.spoji</span>
              </div>
              <button className="testgo">&gt;</button>
              <i className="fas fa-angle-right"></i>
            </div>
            <div className="content_peed">
              <div className="content_peed_header">
                <div className="content_peed_header_left">
                  <img
                    src="/images/leejungmin/trunks.jpg"
                    alt="content_bar_profile_photo"
                  />
                  <span>meeeeen93</span>
                </div>
                <i className="fas fa-ellipsis-h"></i>
              </div>
              <div className="content_peed_img">
                <img src="/images/leejungmin/trunk_profile.jpg" alt="" />
              </div>
              <div className="content_peed_option">
                <div className="content_peed_option_header">
                  <div className="peed_option_header_left">
                    <i className="fas fa-heart likeit"></i>
                    <i className="far fa-comment"></i>
                    <i className="far fa-paper-plane"></i>
                  </div>
                  <div className="peed_option_header_right">
                    <i className="far fa-bookmark"></i>
                  </div>
                </div>
                <div className="content_peed_option_sub_header">
                  <span className="peed_option_sub_header_like">
                    좋아요 285개
                  </span>
                </div>
              </div>
              <div className="content_peed_text">
                <ul className="content_peed_sub_text">
                  <div className="content_peed_text_main">
                    <span>meeeeen93</span>
                    <li> 운동 전 준비 운동중에 찍혔네 ㅎ</li>
                  </div>
                  <div className="content_peed_text_reply">
                    <div>
                      <li>piccolo 그래봤자 너 오공 못 이길듯ㅋㅋ</li>
                    </div>
                    <div>
                      <i className="far fa-heart reply_like"></i>
                      <i className="far fa-trash-alt reply_remove"></i>
                    </div>
                  </div>
                  <div className="content_peed_text_reply">
                    <div>
                      <li>jinjja_naruto DM 확인좀 해주세요 ^^</li>
                    </div>
                    <div>
                      <i className="far fa-heart reply_like"></i>
                      <i className="far fa-trash-alt reply_remove"></i>
                    </div>
                  </div>
                  <div className="content_peed_text_reply">
                    <div>
                      <li>
                        fire_jumeog_ace 좋아 보이네 담에 검은수염이랑 술한잔 ㄱ?
                      </li>
                    </div>
                    <div>
                      <i className="far fa-heart reply_like"></i>
                      <i className="far fa-trash-alt reply_remove"></i>
                    </div>
                  </div>
                </ul>
              </div>
              <div className="content_peed_text_time">32분 전</div>
              <form action="" className="content_peed_form">
                <input
                  type="text"
                  className="content_peed_reply"
                  placeholder="댓글 달기..."
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
          <div className="main_content_right">
            <div className="sidebar_profile">
              <div className="sidebar_profile_left">
                <img
                  src="/images/leejungmin/trunks.jpg"
                  alt="sidebar_profile_img"
                />
                <div className="sidebar_profile_nametag">
                  <span>meeeeen93</span>
                  <span>정민</span>
                </div>
              </div>
              <div className="sidebar_profile_right">
                <span>전환</span>
              </div>
            </div>
            <div className="sidebar_bar">
              <span>회원님을 위한 추천</span>
              <span>모두 보기</span>
            </div>
            <div className="sidebar_friend_recommend">
              <div className="friend_recommend-1">
                <div className="recommend_left-1">
                  <img
                    src="/images/leejungmin/hancok.jpg"
                    alt="friend_recommend-1"
                  />
                  <div className="recommend_profile_nametag-1">
                    <span>queen_cok</span>
                    <span>jinjja_naruto님 외 14명이 팔로우합니다.</span>
                  </div>
                </div>
                <div className="recommend_right-1">
                  <span>팔로우</span>
                </div>
              </div>
              <div className="friend_recommend-2">
                <div className="recommend_left-2">
                  <img
                    src="/images/leejungmin/inuyashy.png"
                    alt="friend_recommend-2"
                  />
                  <div className="recommend_profile_nametag-2">
                    <span>dog_man</span>
                    <span>Westagram 신규 가입</span>
                  </div>
                </div>
                <div className="recommend_right-2">
                  <span>팔로우</span>
                </div>
              </div>
              <div className="friend_recommend-3">
                <div className="recommend_left-3">
                  <img
                    src="/images/leejungmin/sasukae.jpg"
                    alt="friend_recommend-3"
                  />
                  <div className="recommend_profile_nametag-3">
                    <span>talju.jinja</span>
                    <span>jinjja_naruto님 외 2명이 팔로우합니다.</span>
                  </div>
                </div>
                <div className="recommend_right-3">
                  <span>팔로우</span>
                </div>
              </div>
              <div className="friend_recommend-4">
                <div className="recommend_left-4">
                  <img
                    src="/images/leejungmin/gumsu.png"
                    alt="friend_recommend-4"
                  />
                  <div className="recommend_profile_nametag-4">
                    <span>1993.gumsu</span>
                    <span>fire_jumeog_ace님이 팔로우합니다.</span>
                  </div>
                </div>
                <div className="recommend_right-4">
                  <span>팔로우</span>
                </div>
              </div>
              <div className="friend_recommend-5">
                <div className="recommend_left-5">
                  <img
                    src="/images/leejungmin/baejiter.jpg"
                    alt="friend_recommend-5"
                  />
                  <div className="recommend_profile_nametag-5">
                    <span>power.baejiter_</span>
                    <span>piccolo님이 팔로우합니다.</span>
                  </div>
                </div>
                <div className="recommend_right-5">
                  <span>팔로우</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </body>
    );
  }
}

export default MainLee;
