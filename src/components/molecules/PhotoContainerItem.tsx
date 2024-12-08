import '../../styles/PhotoImage.css';

interface PhotoContainerItemProps {
	image: string;
	onClick: Function;
}

const PhotoContainerItem = ({ image, onClick }: PhotoContainerItemProps) => {
	return (
		<>
			<img onClick={() => onClick(image)} className="displayImage" src={image} />
		</>
	);
};
export default PhotoContainerItem;
