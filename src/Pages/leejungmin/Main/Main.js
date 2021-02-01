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
      peedArr: [],
    };
  }

  // peed fetch
  componentDidMount() {
    fetch("http://localhost:3000/data/peedData.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          peedArr: data,
        });
      });
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
