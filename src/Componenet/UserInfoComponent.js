const UserInfoComponent = ({ name, about }) => {
    return (
      <div className="user-info">
        <h2>{name}</h2>
        <p>About: {about}</p>
        <div className="imagsty" >
        <img src="https://cdn-icons-png.flaticon.com/128/733/733579.png"  style={{ width: '20px' }}/>
        <img src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png"  style={{ width: '20px' }}/>
        <img src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png"  style={{ width: '20px' }}/>

        </div>
        {/* Add more information like work, education, etc. */}
      </div>
    );
  };
  export default UserInfoComponent

  