import Head from "next/head";
import styles from "../styles/Home.module.css";
import Intro from "./components/Intro"

const Home = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Paa-Kofi Aidoo</title>
				<link rel="icon" href="/brand/cover.png" />
			</Head>
			<main className={styles.main}>
				<div className={styles.overlay}>
					<Intro />
				</div>
			</main>
		</div>
	);
};


	

	// (function() {
	// 	// Init
	// 	intro = intro.current
	// 		avatar = avatar.current
	// 		console.log(intro, avatar);

	// 	// Mouse
	// 	// var mouse = {
	// 	//   _x: 0,
	// 	//   _y: 0,
	// 	//   x: 0,
	// 	//   y: 0,
	// 	//   updatePosition: function(event) {
	// 	// 	var e = event || window.event;
	// 	// 	this.x = e.clientX - this._x;
	// 	// 	this.y = (e.clientY - this._y) * -1;
	// 	//   },
	// 	//   setOrigin: function(e) {
	// 	// 	  console.log(e);
	// 	// 	 this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
	// 	// 	 this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
	// 	//   },
	// 	//   show: function() {
	// 	// 	return "(" + this.x + ", " + this.y + ")";
	// 	//   }
	// 	// };

	// 	// // Track the mouse position relative to the center of the intro.
	// 	// mouse.setOrigin(intro);

	// 	// //----------------------------------------------------

	// 	// var counter = 0;
	// 	// var refreshRate = 10;
	// 	// var isTimeToUpdate = function() {
	// 	//   return counter++ % refreshRate === 0;
	// 	// };

	// 	// //----------------------------------------------------

	// 	// var onMouseEnterHandler = function(event) {
	// 	//   update(event);
	// 	// };

	// 	// var onMouseLeaveHandler = function() {
	// 	//   avatar.style = "";
	// 	// };

	// 	// var onMouseMoveHandler = function(event) {
	// 	//   if (isTimeToUpdate()) {
	// 	// 	update(event);
	// 	//   }
	// 	// };

	// 	// //----------------------------------------------------

	// 	// var update = function(event) {
	// 	//   mouse.updatePosition(event);
	// 	//   updateTransformStyle(
	// 	// 	(mouse.y / avatar.offsetHeight / 2).toFixed(2),
	// 	// 	(mouse.x / avatar.offsetWidth / 2).toFixed(2)
	// 	//   );
	// 	// };

	// 	// var updateTransformStyle = function(x, y) {
	// 	//   var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
	// 	//   avatar.style.transform = style;
	// 	//   avatar.style.webkitTransform = style;
	// 	//   avatar.style.mozTranform = style;
	// 	//   avatar.style.msTransform = style;
	// 	//   avatar.style.oTransform = style;
	// 	// };

	// 	// //--------------------------------------------------------

	// 	// intro.onmousemove = onMouseMoveHandler;
	// 	// intro.onmouseleave = onMouseLeaveHandler;
	// 	// intro.onmouseenter = onMouseEnterHandler;
	//   })();

	


export default Home;
