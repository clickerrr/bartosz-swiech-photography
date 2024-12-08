import '../../styles/ContactStyles.css';

import contactImage1 from '../../static/images/contact/25perIMG_7962.jpg';
import contactImage2 from '../../static/images/contact/25perIMG_8165.jpg';
import contactImage3 from '../../static/images/contact/25perIMG_0415.jpg';

const Contact = () => {
	return (
		<>
			<div className="section-title">
				<h1>Would you like a photoshoot?</h1>

				<h3>I am based in Phoenix, Arizona</h3>
				<h3>Contact me through my email:</h3>
				<h3>barteksphoto@gmail.com</h3>
				<h3>
					Please include your name, your preferred contact information, and the category
					of shoot (portrait, car, other) you want!
				</h3>
			</div>

			<div id="contact" className="contact-container">
				{/* <!-- Verticals --> */}
				<div className="images"></div>

				{/* <!-- Horizontals --> */}
				<div className="images">
					<img src={contactImage1} />
					<img src={contactImage2} />
					<img src={contactImage3} />
				</div>
			</div>
		</>
	);
};
export default Contact;
