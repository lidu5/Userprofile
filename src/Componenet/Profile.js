import ProfilePictureComponent from "./ProfilePictureComponent";
import UserInfoComponent from "./UserInfoComponent";


import UserPostsComponent from "./User Posts Component";
import React from "react";
import CoverPhotoComponent from "./CoverPhotoComponent";
import '../App.css'
class Profile extends React.Component {
  render() {
    const { coverPhoto, profilePicture, name, about, posts } = this.props;

    return (
      <div className="profile">
        <CoverPhotoComponent coverPhoto={coverPhoto} />
        <ProfilePictureComponent profilePicture={profilePicture} />
        <UserInfoComponent name={name} about={about} />
           
        <UserPostsComponent posts={posts} />
      </div>
    );
  }
}

export default Profile;