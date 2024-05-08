import React from 'react';
import Profile from './Componenet/Profile';


class App extends React.Component {
  render() {
    // Sample data for the profile
    const profileData = {
      coverPhoto: "https://media.istockphoto.com/id/1485052530/photo/portrait-fashion-and-braids-with-a-black-woman-on-an-orange-background-outdoor-for-style-or.jpg?s=1024x1024&w=is&k=20&c=tKZemnn8cn2m_2aZXjFx85VuAd_uQ7ey-YVUFMaKk7E=",
      profilePicture: "https://media.istockphoto.com/id/1411772543/photo/side-profile-of-african-woman-with-afro-isolated-against-a-white-background-in-a-studio.jpg?s=1024x1024&w=is&k=20&c=q1nnPLep6AlvTHg-UYIR4RPpa2tqQlu3uvf9bS636HA=",
      name: "Lydia Fikire",
      about: "Web developer at school of information systems ",
     
      posts: [
        {
          content: "Java for all",
          image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          index: 1,
          time: "2024-05-09T12:00:00Z" // Example time in ISO 8601 format
        },
        {
          content: "python for all ",
          image: "https://images.unsplash.com/photo-1580121441575-41bcb5c6b47c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          index: 2,
          time: "2024-05-09T13:00:00Z" // Example time in ISO 8601 format
        }
      ]
    };

    return (
      <div className="App">
        <Profile
          coverPhoto={profileData.coverPhoto}
          profilePicture={profileData.profilePicture}
          name={profileData.name}
          about={profileData.about}
         
          posts={profileData.posts}
        />
      </div>
    );
  }
}

export default App;
