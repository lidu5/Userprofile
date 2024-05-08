

import React, { useRef } from 'react';
import cameraIcon from '../Img/cameraicon.png'; // Import your camera icon

const ProfilePictureComponent = ({ profilePicture }) => {
  const fileInputRef = useRef(null);

  const handleFileSelect = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    // Handle the selected file (e.g., upload it to the server)
  };

  return (
    <div className="profile-picture">
      <img src={profilePicture} alt="Profile" />
      <div className="camera-icon" onClick={handleFileSelect}>
        <img src={cameraIcon} alt="Change Profile Picture" />
      </div>
      <input type="file" ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileChange} />
    </div>
  );
};

export default ProfilePictureComponent;
