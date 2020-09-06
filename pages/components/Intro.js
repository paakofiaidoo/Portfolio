import React, { Component } from "react";
import styles from "../../styles/Intro.module.css";

class Intro extends Component {
	constructor(props) {
		super(props);
		this.intro = React.createRef();
		this.avatar = React.createRef();
		this.state = {};
	}

	componentDidMount() {
		console.log(this.intro, this.avatar);
		this.intreact();
		console.log(this.state);
	}

	intreact = () => {
		console.log(this.intro.current, this.avatar.current);
		var container = this.intro.current;
		var inner = this.avatar.current;
		let newStyle = "rotateX(0.05deg) rotateY(-0.24deg)";

		var mouse = {
			_x: 0,
			_y: 0,
			x: 0,
			y: 0,
			updatePosition: function (event) {
				var e = event || window.event;
				this.x = e.clientX - this._x;
				this.y = (e.clientY - this._y) * -1;
			},
			setOrigin: function (e) {
				this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
				this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
			},
			show: function () {
				return "(" + this.x + ", " + this.y + ")";
			},
		};

		// Track the mouse position relative to the center of the container.
		mouse.setOrigin(container);

		//----------------------------------------------------

		var counter = 0;
		var refreshRate = 10;
		var isTimeToUpdate = function () {
			return counter++ % refreshRate === 0;
		};

		//----------------------------------------------------

		var onMouseEnterHandler = function (event) {
			update(event);
		};

		var onMouseLeaveHandler = function () {
			inner.style = "";
		};

		var onMouseMoveHandler = function (event) {
			if (isTimeToUpdate()) {
				update(event);
			}
		};

		//----------------------------------------------------

		var update = function (event) {
			mouse.updatePosition(event);
			updateTransformStyle(
				(mouse.y / inner.offsetHeight / 2).toFixed(2),
      (mouse.x / inner.offsetWidth / 2).toFixed(2)
			);
		};

		var updateTransformStyle = function (x, y) {

			var style =
				"rotateX(" +
				angleTransform(x) +
				"deg) rotateY(" +
				angleTransform(y) +
				"deg)";
			newStyle = style;
			setStyle(style);
		};
		let angleTransform = (val) => {
			val = parseFloat(val)*40 ;
			if (val < 0) {
				return val;
			} else {
				return val;
			}
		};

		//--------------------------------------------------------
		let setStyle = (newStyle) => {
			console.log(newStyle);
			this.setState({ transform: newStyle });
		};

		container.onmousemove = onMouseMoveHandler;
		container.onmouseleave = onMouseLeaveHandler;
		container.onmouseenter = onMouseEnterHandler;
	};

	render() {
		return (
			<div id="intro" className={styles.intro} ref={this.intro}>
				<div>
					<img
						src="/brand/vector/default-monochrome.svg"
						alt="profile pic"
						className={styles.avatar}
						ref={this.avatar}
                        style={this.state}
                        load="lazy"
					/>
					<div className={styles.details}>
						<ul>
							<li>
								<a  target="_blank" href="https://web.facebook.com/paakofi.aidoo">
									<img
										src="/facebook.svg"
										alt="facebook"
										className={styles.contact}
									/>
								</a>
							</li>
							<li>
								<a  target="_blank" href="https://www.instagram.com/pk_aidoo">
									<img
										src="/instagram.svg"
										alt="instagram"
										className={styles.contact}
									/>
								</a>
							</li>
							<li>
								<a  target="_blank" href="https://twitter.com/PaaKofiaidoo2">
									<img
										src="/twitter.svg"
										alt="twitter"
										className={styles.contact}
									/>
								</a>
							</li>
							<li>
								<a  target="_blank" href="https://www.linkedin.com/in/paa-kofi-aidoo-a98036183/">
									<img
										src="/linkedin.svg"
										alt="linkedin"
										className={styles.contact}
									/>
								</a>
							</li>
							<li>
								<a  target="_blank" href="https://wa.me/233202396856">
									<img
										src="/whatsapp.svg"
										alt="whatsapp"
										className={styles.contact}
									/>
								</a>
							</li>
							<li>
								<a  target="_blank" href="https://github.com/paakofiaidoo">
									<img
										src="/github.svg"
										alt="github"
										className={styles.contact}
									/>
								</a>
							</li>
							<li>
								<a  target="_blank" href="mailto:paakofiaidoo17@gmail.com">
									<img src="/mail.svg" alt="email" className={styles.contact} />
								</a>
							</li>
							<li>
								<a  target="_blank" href="tel:+233202396856">
									<img
										src="/telephone.svg"
										alt="call"
										className={styles.contact}
									/>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default Intro;
