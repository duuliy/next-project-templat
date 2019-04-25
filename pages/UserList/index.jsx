import "./styles.less"

const UserList=({stars}) => {
  return (
    <div className="app">
      <div>Welcome to duuliy!{stars}</div>
    </div>
  );
};

UserList.getInitialProps = async ({ req }) => {
  const res = await fetch('https://api.github.com/repos/zeit/next.js')
  const json = await res.json()
  return { stars: json.stargazers_count }
}

export default UserList