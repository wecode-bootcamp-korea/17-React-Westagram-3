import React, { Component } from "react";
import Nav from "../../../Components/Nav/Nav";
import Story from "./Component/Story/Story";
import Peed from "./Component/Peed/Peed";
import Follow from "./Component/Follow/Follow";

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
      followArr: [
        {
          followName: "queen_cok",
          followImg:
            "https://media.vlpt.us/images/93jm/post/9e58283b-c1c7-4d0c-9e37-61a2fed05ee9/hancok.jpg",
          followText: "jinjja_naruto님 외 14명이 팔로우합니다.",
        },
        {
          followName: "dog_man",
          followImg:
            "https://media.vlpt.us/images/93jm/post/ed08fe64-bd4c-4f44-b646-b950ec54a7e4/inuyashy.png",
          followText: "Westagram 신규 가입",
        },
        {
          followName: "talju.jinja",
          followImg:
            "https://media.vlpt.us/images/93jm/post/b85dd3c2-a58c-4550-98e7-4d65782cc53d/sasukae.jpg",
          followText: "jinjja_naruto님 외 2명이 팔로우합니다.",
        },
        {
          followName: "1993.gumsu",
          followImg:
            "https://media.vlpt.us/images/93jm/post/c2108105-e9bf-4998-95b9-94d73a756b88/gumsu.png",
          followText: "fire_jumeog_ace님이 팔로우합니다.",
        },
        {
          followName: "power.baejiter_",
          followImg:
            "https://media.vlpt.us/images/93jm/post/0064982c-bdb4-450b-a2f9-c5bc87c67afc/baejiter.jpg",
          followText: "piccolo님이 팔로우합니다.",
        },
      ],
      peedArr: [],
    };
  }

  // peed fetch
  componentDidMount() {
    fetch("data/peedData.json", {
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
    const { storyArr, peedArr, followArr } = this.state;

    return (
      <div>
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
                {followArr.map((follow, index) => {
                  return <Follow followRecom={follow} key={index} />;
                })}
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default MainLee;
