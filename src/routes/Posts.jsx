import { Outlet } from "react-router-dom";
import "../App.css";
import PostsList from "../components/PostsList";
function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostsList />
      </main>
    </>
  );
}

export default Posts;
export async function loader() {
  const response = await fetch("http://localhost:8090/posts");
  const resData = await response.json();
  return resData.posts;
}
