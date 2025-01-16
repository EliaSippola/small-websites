import { useState } from "react";

export default function Traffic() {

    // Create useState to store our camera selection
    const [select, setSelect] = useState(undefined);

    return (
        <>
        <div className="app-header">
            {/* Header */}
            <h2>Traffic Camera Viewer - Joensuu/Lieksa</h2>
        </div>
        {/* Camera selector */}
        <CameraSelection
            selectedPresetId={select}
            onSelect={(val) => setSelect(val)}
        />
        {/* Display selected camera */}
        {select ?
            <div className="camera-container">
            <CameraView presetId={select} />
            </div>
            : null
        }
        </>
    );

}

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

const cameras = [
    { presetId: '', name: '-' },
    { presetId: 'C0750301', name: 'Joensuu Hoilola' },
    { presetId: 'C0854701', name: 'Joensuu Reijola' },
    { presetId: 'C0854901', name: 'Joensuu Honkavaara' },
    { presetId: 'C0857601', name: 'Joensuu Repokallio' },
    { presetId: 'C0750201', name: 'Lieksa Hatunkylä' },
    { presetId: 'C0750101', name: 'Lieksa Nurmijärvi' },
    { presetId: 'C0850501', name: 'Lieksa Vieki' },
    { presetId: 'C0858401', name: 'Lieksa' },
    { presetId: 'C0750601', name: 'Lieksa Kyyrönlampi' }
]

const CameraSelection = ({ selectedPresetId, onSelect }) => {

    return (
        <div className="Camera-selection-container">
            <div className="Camera-selection-text">
                Select camera to show:<br />
                <form>
                    {/* Handle camera selection and change */}
                    <select onChange={(e) => onSelect(e.target.value)} value={selectedPresetId}>
                        {
                            cameras.map((cam, i) =>
                                <option
                                    key={'selection_' + i}
                                    value={cam.presetId}>
                                    {cam.name}
                                </option>)
                        }
                    </select>
                </form>
            </div>
        </div>
    )
}