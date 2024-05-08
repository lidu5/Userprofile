
import React from 'react';

// Cover Photo Component
const CoverPhotoComponent = ({ coverPhoto }) => {
  return (
    <div className="cover-photo">
      <img src={coverPhoto} alt="Cover" />
    </div>
  );
};
export default CoverPhotoComponent;


