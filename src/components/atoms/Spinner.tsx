import '../../styles/SpinnerStyle.css';

interface SpinnerProps {
	textToDisplay: string | null;
}

const Spinner = ({ textToDisplay }: SpinnerProps) => {
	return (
		<>
			{textToDisplay ? <span className="text-to-display">{textToDisplay}</span> : <></>}
			<div className="spinner"></div>
		</>
	);
};
export default Spinner;
