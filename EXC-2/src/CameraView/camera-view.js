const CameraView = ({ presetId }) => {
    return (
        <div className="Camera-selection-container">
            {/* Get image from weathercam api with presetId */}
            <img
                src={ `http://weathercam.digitraffic.fi/${presetId}.jpg`}
                alt={ `Camera ${presetId}`}
             />
        </div>
    )
}

export default CameraView;