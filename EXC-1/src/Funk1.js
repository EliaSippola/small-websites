import React, { useState } from 'react';

function Funk1() {
  
  const [value, setValue] = useState('Robin Hood');

  return (
    <div className="marg">
      <h3>Funktionaalinen komponentti</h3>      
      <input type='text' onChange={(e) => setValue(e.target.value)} value={value} placeholder='Nimesi' />
      <p>{value}</p>
    </div>
  );
};

export default Funk1;