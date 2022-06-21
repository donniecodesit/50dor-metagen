import React from 'react'

export default function DisplayTags({metaTags}) {
  return (
    <div className="mt-2">
        <h3>Meta Tags Generated:</h3>
        <small className="text-danger">Select and Copy</small>
        <div className="generated-meta-tags">
            <pre>
                <code>{metaTags}</code>
            </pre>
        </div>
    </div>
  )
}