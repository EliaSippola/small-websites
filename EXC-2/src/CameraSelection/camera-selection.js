import './camera-selection.css';

// http://tie.digitraffic.fi/api/v1/metadata/camera-stations
// http://tie.digitraffic.fi/api/v1/data/camera-data/{id}

// possible selectable cameras and their names
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

export default CameraSelection;