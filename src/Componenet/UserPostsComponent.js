

const UserPostsComponent = ({ posts }) => {
    return (
      <div className="user-posts">
        <h3>Resourses</h3>
        {posts.map((post, index) => (
          <div key={index} className="post">
           <p>{post.content}</p>
            <img src={post.image} alt={`Post ${index + 1}`} />
            <p>Index: {post.index}</p>
            <p>Time: {post.time}</p>
          </div>
        ))}
      </div>
    );
  };
  export default UserPostsComponent