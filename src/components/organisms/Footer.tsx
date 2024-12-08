import '../../styles/FooterStyles.css';
import linkedInImage from '../../assets/linkedin.png';
import instagramImage from '../../assets/instagram.png';

const Footer = () => {
	return (
		<div className="bottomBar">
			<div className="socials">
				<a className="item" target="_blank" href="https://www.instagram.com/barteksphoto/">
					<img src={instagramImage} />
					<span>Instagram</span>
				</a>

				<a
					className="item"
					target="_blank"
					href="https://www.linkedin.com/in/bartosz-swiech-5700b1227/"
				>
					<img src={linkedInImage} />
					<span>LinkedIn</span>
				</a>
			</div>

			<span id="copyright" className="item">
				© Bartosz Swiech 2024
			</span>
		</div>
	);
};

export default Footer;
