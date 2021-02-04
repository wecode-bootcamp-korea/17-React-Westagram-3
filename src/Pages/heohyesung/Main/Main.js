import React, { Component } from 'react';
import Nav from '../../../Components/Nav/Nav';
//import Storybox from '../Main/Storybox/Storybox';
//import STORYFEED from './Storyfeed/Storyfeed.js';
import Comment from '../Main/Comment/Comment';
import './Main.scss';
import Storybox from '../Main/Storybox/Storybox'
//import Storybox from './Storyfeed/Storyfeed.js';
//import Storyfeed from './Storyfeed/Storyfeed.js';


class MainHeo extends Component {
    constructor() {
        super();
        this.state= {
            comment:"",
            commentArr:[],
            btnColor: "rgb(192, 208, 253)",
            storyBox:[],
        }
    }

    componentDidMount () {
        fetch('/data/commentData.json', {
            method : 'GET'
        })
            .then(res => res.json())
            .then(data => {
                this.setState({
                    commentArr : data,
                });
            });
        
        fetch('/data/storyFeedData.json', {
            method : 'GET'
        })
            .then(res => res.json())
            .then(data => {
                this.setState({
                    storyBox: data,
                });
            });
    }

    commentInput = (e) => {
        this.setState({
            comment:e.target.value,
        })
    }

    btnColorChange = () => {
        if(this.state.comment.length > 0 ) {
            this.setState({
                btnColor:"rgb(8, 150, 247)",
            })
        }else{
            this.setState({
                btnColor:"rgb(192, 208, 253)",
            })
        }
    }

    handleAddComment = (e) => {
        e.preventDefault();
        if(this.state.comment) {
            this.setState({
                commentArr: [
                    ...this.state.commentArr,
                    {userName: "2929_9999",
                    comment: this.state.comment},
                ],
                comment: "",
            })
        }
    }
    
  render() {
    const { commentArr, comment, storyBox } = this.state;
    return (
        <div className="Main">
            <Nav/>
            <main className="mainbigbox">
                <section className="leftbox">
                    <div className="storyboxContainer">
                    {storyBox.map((story) => {
                        return(
                            <Storybox
                                key = {story.id}
                                name = {story.userName}
                                img = {story.img}
                            />
                        );
                    })}
                    </div>
                    <div className="navfeedbox">
                        <img className="imguser" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/122097631_350277506082850_5249209957039124627_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=IMkv4r9iBd4AX8TPuH1&tp=1&oh=d18848c2f67ad737c0f226d6c6b70278&oe=603A2E91" alt="profile-img" />
                        <p className="userid">2929_9999</p>
                    </div>
                    <div className="feedbox">
                        <img className="imgjeju" src="/images/heohyesung/jeju.jpg" alt="jeju-img" />
                    </div>
                    <div className="commentfirstbox">
                        <ul className="commenticons">
                            <i className="far fa-heart"></i>
                            <i className="far fa-comment"></i>
                            <i className="far fa-paper-plane"></i>
                            <p className="like">좋아요 100개</p>
                        </ul>
                    </div>
                    <div className="commentBox">
                        <p className="feeduser">2929_9999</p>
                        <span>ᕕ( ᐛ )ᕗ 푸릇푸릇 제주 🌿</span>
                        <div>
                            {commentArr.map(comment => {
                                return (
                                    <Comment 
                                        key = {comment.id} 
                                        name = {comment.userName}
                                        comment = {comment.comment}
                                    />
                                );
                            })}
                        </div>
                    </div>
                    <form onSubmit={this.handleAddComment} className="addcomment" autocomplete="off">
                        <input onKeyUp={this.btnColorChange} onChange={this.commentInput} value={comment}className="commentline" type="text" placeholder="댓글 달기..." />
                        <button style={{color : this.state.btnColor}}className="submitbox" type="submit">게시</button>
                    </form>
                    <div className="navfeedbox">
                    <img className="imguser" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/122097631_350277506082850_5249209957039124627_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=IMkv4r9iBd4AX8TPuH1&tp=1&oh=d18848c2f67ad737c0f226d6c6b70278&oe=603A2E91" alt="profile-img" />
                        <p className="userid">2929_9999</p>
                        </div>
                    <div className="feedbox">
                        <img className="imgjeju" src="/images/heohyesung/horse.jpg" alt="horse-img" />
                    </div>
                    <div className="commentfirstbox">
                        <ul className="commenticons">
                            <i className="far fa-heart"></i>
                            <i className="far fa-comment"></i>
                            <i className="far fa-paper-plane"></i>
                            <p className="like">좋아요 100개</p>
                        </ul>
                    </div>
                    <div className="commentBox">
                        <p className="feeduser">2929_9999</p>
                        <span>제주도🌷 + 말 🐴 + 해☀️ = 환상적 ✨</span>
                    </div>
                    <div className="addcomment" autocomplete="off">
                        <input className="commentline" type="text" placeholder="댓글 달기..." />
                        <button className="submitbox" type="submit">게시</button>
                    </div>
                </section>
                    <aside className="rightbox">
                        <section className="side">
                            <img className="imgsideuser" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/122097631_350277506082850_5249209957039124627_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=IMkv4r9iBd4AX8TPuH1&tp=1&oh=d18848c2f67ad737c0f226d6c6b70278&oe=603A2E91" alt="profile-img" />
                            <span className="sideuserid">2929_9999</span>
                            <p className="endtextblue">전환</p>
                        </section>
                            <p className="sidetext">회원님을 위한 추천</p>
                            <p className="endtext">모두보기</p>
                            <img className="iuimg" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/28434316_190831908314778_1954023563480530944_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=p4hC8hEj-GUAX8SM1-f&tp=1&oh=751edc3eae0f3f44b4fcfb00a0438cb5&oe=60367030" alt="iuimg" />
                            <p className="smalltext1">dlwlrma</p>
                            <p className="endtextblueside">팔로우</p>
                    </aside>
            </main>
        </div>
    );
  }
}

export default MainHeo;