import React, { Component } from "react";
import Nav from "../../../Components/Nav/Nav";
import Story from "./Component/Story/Story";
import Peed from "./Component/Peed/Peed";

import "./Main.scss";

class MainLee extends Component {
  constructor() {
    super();

    this.state = {
      storyArr: [
        {
          storyId: 1,
          storyImg:
            "https://media.vlpt.us/images/93jm/post/f7b5f906-d0d2-47a4-891d-5ecb68a532dd/pika.png",
          storyName: "_poket.mon",
        },
        {
          storyId: 2,
          storyImg:
            "https://media.vlpt.us/images/93jm/post/02c6b269-0832-42e9-a869-9c8cf377afc8/udi.png",
          storyName: "Andy_lover",
        },
        {
          storyId: 3,
          storyImg:
            "https://media.vlpt.us/images/93jm/post/b546b87f-1f6f-42f8-ae90-a3ed18e9352c/buz.jpg",
          storyName: "buzz_light.b",
        },
        {
          storyId: 4,
          storyImg:
            "https://media.vlpt.us/images/93jm/post/33517c54-c3da-4e3e-ae7e-2eb08a3e1559/onethekidi.jpg",
          storyName: "onethe2020",
        },
        {
          storyId: 5,
          storyImg:
            "https://media.vlpt.us/images/93jm/post/b9fd0f87-d948-4d5b-aa72-786a5b42a8a0/potato.jpg",
          storyName: "_gamja__x2",
        },
        {
          storyId: 6,
          storyImg:
            "https://media.vlpt.us/images/93jm/post/3ee13cf7-a501-45c1-a7b6-c3f6cd496a84/brother.png",
          storyName: "baaaaabooo",
        },
        {
          storyId: 7,
          storyImg:
            "https://media.vlpt.us/images/93jm/post/6dbf2127-214a-4be1-ae55-58c7fd0373ca/sponjibob.jpg",
          storyName: "bobbob.spoji",
        },
      ],
      peedArr: [
        {
          peedId: 1,
          peedProfileImg:
            "https://media.vlpt.us/images/93jm/post/f027271c-53ad-4291-ab69-688aec5f9c01/trunks.jpg",
          peedMainImg:
            "https://media.vlpt.us/images/93jm/post/5bc0845e-7024-4d35-9f66-2bda4039d555/trunk_profile.jpg",
          peedWriterName: "meeeeen93",
          peedText: "운동 전 준비 운동중에 찍혔네 ㅎ",
          peedReply: "piccolo 그래봤자 너 오공 못 이길듯ㅋㅋ",
          peedLikeNum: 182,
        },
        {
          peedId: 2,
          peedProfileImg:
            "https://media.vlpt.us/images/93jm/post/f027271c-53ad-4291-ab69-688aec5f9c01/trunks.jpg",
          peedMainImg:
            "https://media.vlpt.us/images/93jm/post/c42d8cc2-ef12-47bd-aa56-dca79f7070be/hunter_trunks.png",
          peedWriterName: "meeeeen93",
          peedText: "컷 !!",
          peedReply: "sonmonkey 나랑도 해볼래 ?ㅎ",
          peedLikeNum: 312,
        },
        {
          peedId: 3,
          peedProfileImg:
            "https://media.vlpt.us/images/93jm/post/f027271c-53ad-4291-ab69-688aec5f9c01/trunks.jpg",
          peedMainImg:
            "https://media.vlpt.us/images/93jm/post/32232e55-f26a-4f75-abaf-98537c2ba92c/little_trunks.png",
          peedWriterName: "meeeeen93",
          peedText: "이때로 돌아가고싶네 ^^ㅋㄷ",
          peedReply: "piccolo 이때도 못생겻네",
          peedLikeNum: 166,
        },
        {
          peedId: 4,
          peedProfileImg:
            "https://media.vlpt.us/images/93jm/post/f027271c-53ad-4291-ab69-688aec5f9c01/trunks.jpg",
          peedMainImg:
            "https://media.vlpt.us/images/93jm/post/0b45d742-364e-4c89-9a2e-e8259f54033f/trunks_girl.jpg",
          peedWriterName: "meeeeen93",
          peedText: "인사해라 애들아 내 여자친구 마이다ㅎ",
          peedReply: "queen_cok 잘지내? DM 보냈었는데",
          peedLikeNum: 213,
        },
      ],
    };
  }

  render() {
    const { storyArr, peedArr } = this.state;
    return (
      <body id="main_layout">
        <Nav></Nav>
        <main className="main_content">
          <div className="main_content_left">
            <div className="content_story">
              {storyArr.map((story, index) => {
                return <Story storyData={story} key={index} />;
              })}
              <button className="testgo">&gt;</button>
              <i className="fas fa-angle-right"></i>
            </div>
            {peedArr.map((peed, index) => {
              return <Peed peedData={peed} key={index} />;
            })}
          </div>
          <div className="main_content_right_layout">
            <div className="main_content_right">
              <div className="sidebar_profile">
                <div className="sidebar_profile_left">
                  <img src="/images/trunks.jpg" alt="sidebar_profile_img" />
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
          </div>
        </main>
      </body>
    );
  }
}

export default MainLee;
