import React, { Component } from "react";
import Nav from "../../../../src/Components/Nav/Nav";
import Feeds from "./Feeds/Feeds";
import "./Main.scss";

class MainKwak extends Component {
	render() {
		return (
			<div>
				<div className="Main">
					<Nav />

					<main>
						<ul>
							<Feeds />
							<Feeds />
							<Feeds />
						</ul>
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
