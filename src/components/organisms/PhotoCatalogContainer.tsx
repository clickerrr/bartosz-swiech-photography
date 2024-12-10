import { useEffect, useState } from 'react';
import '../../styles/PhotoContainerStyles.css';
import PhotoContainerItem from '../molecules/PhotoContainerItem';
import { ImageListElement } from '../atoms/ImageListElement.d';
import Spinner from '../atoms/Spinner';

interface PhotoCatalogContainerProps {
	imagesDirectory: string;
}

const PhotoCatalogContainer = ({ imagesDirectory }: PhotoCatalogContainerProps) => {
	const baseUrl = 'https://bartosz-swiech-photo-imageserver.onrender.com';
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [imageList, setImageList] = useState<ImageListElement[]>([]);

	const [selectedImage, setSelectedImage] = useState<string>('');
	const [isModalShowing, setIsModalShowing] = useState(false);

	useEffect(() => {
		loadImages(imagesDirectory);
	}, []);

	const loadImages = async (imageDirectory: string) => {
		if (imageDirectory === undefined || imageDirectory === null) return;
		let imageListArray: ImageListElement[] = [];
		const imagesResult = await getAllImages(`${baseUrl}/imagelist/${imageDirectory}`);

		imagesResult['images'].forEach((image: string) => {
			const newObj: ImageListElement = { categoryName: undefined, url: undefined };
			newObj.categoryName = imageDirectory;
			newObj.url = `${baseUrl}/images/${imageDirectory}/${image}`;
			imageListArray.push(newObj);
		});

		setImageList(imageListArray);
		setIsLoading(false);
	};

	const getAllImages = async (directory: string) => {
		let response = await fetch(`${directory}`);
		const result = await response.json();
		return result;
	};

	const handleImageClick = (imageUrl: string) => {
		setSelectedImage(imageUrl);
		setIsModalShowing(true);
	};

	const renderImageList = (): any => {
		let currentImageCategory = '';
		return (
			<div className="images">
				{imageList.map((element: any, index: number): any => {
					if (currentImageCategory !== element.categoryName) {
						currentImageCategory = element.categoryName;
					}
					return (
						<PhotoContainerItem
							key={index}
							onClick={handleImageClick}
							image={element.url}
						/>
					);
				})}
			</div>
		);
	};

	return (
		<>
			{isLoading ? (
				<div className="spinner-container">
					<Spinner textToDisplay={'Loading Images... This may take a minute.'} />
				</div>
			) : (
				<></>
			)}
			<div className="photo-container">{renderImageList()}</div>

			<div
				className="modal"
				style={{
					display: `${isModalShowing ? 'flex' : 'flex'}`,
					zIndex: `${isModalShowing ? '10' : '0'}`,
					opacity: `${isModalShowing ? '1' : '0'}`,
					position: `${isModalShowing ? 'fixed' : 'fixed'}`,
				}}
				onClick={() => setIsModalShowing(false)}
			>
				<img className="modal-img" src={selectedImage} />
			</div>

			<div className="notice">
				<h5>All images are scaled down to preserve browser speed</h5>
			</div>

			<div className="notice">
				<h5>Keep checking back to see more photos!</h5>
			</div>

			<div></div>
		</>
	);
};

export default PhotoCatalogContainer;
