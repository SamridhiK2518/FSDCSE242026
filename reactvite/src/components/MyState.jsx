import React, { useState } from 'react'

function MyState() {
  const [name, setName] = useState('Samridhi Khanna')
  const [college, setCollege] = useState('ABES Engineering College')
  const [displayName, setDisplayName] = useState('')
  const [displayCollege, setDisplayCollege] = useState('')

  return (
    <div style={{ padding: '20px' }}>
      <button onClick={() => setDisplayName(name)}>Name</button>
      <button onClick={() => setDisplayCollege(college)} style={{ marginLeft: '10px' }}>
        College
      </button>

      <div style={{ marginTop: '20px' }}>
        <p>
          <strong>Name:</strong> {displayName || 'KK'}
        </p>
        <p>
          <strong>College:</strong> {displayCollege || 'Dhirubhai Ambani Acting Academy'}
        </p>
      </div>
    </div>
  )
}

export default MyState