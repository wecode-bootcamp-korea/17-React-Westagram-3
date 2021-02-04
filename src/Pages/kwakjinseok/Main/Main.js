import React, { Component } from "react";
import Comment from "./Comment";
import Nav from "../../../../src/Components/Nav/Nav";
import "./Main.scss";

class MainKwak extends Component {
	constructor() {
		super();
		this.state = {
			commentInputValue: "",
			addComments: [{ idx: 20210203, userId: "", comment: "" }],
		};
	}

	handleAddComment = (event) => {
		this.setState({
			commentInputValue: event.target.value,
		});
	};

	handleAddComment2 = (event) => {
		if (event.keyCode === 13) {
			this.addComment();
		}
	};

	addComment = () => {
		if (this.state.commentInputValue) {
			this.setState({
				addComments: [
					...this.state.addComments,
					{
						idx: Date.now(),
						userId: "xolovemirjam",
						comment: this.state.commentInputValue,
					},
				],
				commentInputValue: "",
			});
		}
	};

	render() {
		return (
			<div>
				<div className="Main">
					<Nav />

					<main>
						<div className="feeds">
							<article className="centerMain">
								<div className="navInSection">
									<div className="firstSectionNav">
										<div className="imgCircle"></div>

										<ul className="ulInCenterMain">
											<li className="liName">xolovemirjam</li>
											<li className="liContent">Seoul</li>
										</ul>
									</div>

									<i className="dot1 fas fa-ellipsis-h"></i>
								</div>

								<section className="centerImage"></section>

								<footer>
									<div className="firstLineFooter">
										<div className="leftIcons">
											<button className="buttonInLeft">
												<i className="heart2 far fa-heart fa-2x"></i>
											</button>
											<button className="buttonInLeft">
												<i className="far fa-comment fa-2x"></i>
											</button>
											<button className="buttonInLeft lastButton">
												<i className="fab fa-telegram-plane fa-2x"></i>
											</button>
										</div>

										<div className="middleIcons">
											<i className="dot fas fa-ellipsis-h"></i>
										</div>

										<div className="rightIcons">
											<i className="far fa-bookmark fa-lg"></i>
										</div>
									</div>

									<div className="secondLineFooter">
										<div className="imgCircle2"></div>
										<div className="nextCircle2">
											<strong>Kwakjinseok</strong> 님 <strong>외 4명</strong>이
											좋아합니다.
										</div>
									</div>

									<div className="thirdLineFooter">
										<div>
											<strong>xolovemirjam</strong> "개 같은 인생, 좋은 인생"
										</div>
									</div>

									<div className="fourthLineFooter">
										<div>
											<strong>xolovemirjam</strong>
										</div>

										<div className="aCase">
											<a href="main.html" target="_blank">
												#폭스
											</a>
											<a href="main.html" target="_blank">
												#개
											</a>
											<a href="main.html" target="_blank">
												#보더콜리
											</a>
											<a href="main.html" target="_blank">
												#개스타그램
											</a>
											<a href="main.html" target="_blank">
												#견스타그램
											</a>
											<a href="main.html" target="_blank">
												#천재견
											</a>
											<a href="main.html" target="_blank">
												#중에
											</a>
											<a href="main.html" target="_blank">
												#바보견
											</a>
											<a href="main.html" target="_blank">
												#웃으며
											</a>
											<a href="main.html" target="_blank">
												#살자
											</a>
											<a href="main.html" target="_blank">
												#행복하게
											</a>
											<a href="main.html" target="_blank">
												#오래오래...
											</a>
											<a className="더보기" href="main.html">
												더 보기
											</a>
										</div>
									</div>

									<ul className="replyContainer">
										{this.state.addComments.map((comments) => {
											return (
												<Comment
													idx={comments.idx}
													key={comments.idx}
													comment={comments.comment}
													userId={comments.userId}
												/>
											);
										})}
									</ul>
									<div className="smallTime">6시간 전</div>

									<div className="lastOfFooter">
										<textarea
											className="comment"
											value={this.state.commentInputValue}
											rows="10"
											placeholder="댓글 달기..."
											onChange={this.handleAddComment}
											onKeyUp={this.handleAddComment2}
										></textarea>
										<button
											onClick={this.addComment}
											className={
												!this.state.commentInputValue
													? "lastFooterButton"
													: "activeFooterInButton"
											}
										>
											게시
										</button>
									</div>
								</footer>
							</article>
						</div>

						<div className="asideInMain">
							<section className="asideSection">
								<div className="asideProfileGroup">
									<div className="leftImageAndText">
										<div className="imgCircle3"></div>

										<ul className="ulInAside">
											<li className="leftAsideName">
												<strong>xolovemirjam</strong>
											</li>
											<li className="leftAsideContent">Seoul</li>
										</ul>
									</div>
									<div className="transition">제출</div>
								</div>
							</section>
						</div>
					</main>
				</div>
			</div>
		);
	}
}

export default MainKwak;
