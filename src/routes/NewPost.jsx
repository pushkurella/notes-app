import classes from "./NewPost.module.css";
import Modal from "../components/Modal";
import { Link, Form, redirect } from "react-router-dom";

function NewPost() {
  // const [enteredBody, setEnteredBody] = useState("");
  // const [enteredName, setEnteredName] = useState("");

  // const changeBodyHandler = (event) => {
  //   setEnteredBody(event.target.value);
  // };
  // const changeNameHandler = (event) => {
  //   setEnteredName(event.target.value);
  // };

  // const submitHandler = (event) => {
  //   event.preventDefault();
  //   const postData = {
  //     body: enteredBody,
  //     author: enteredName,
  //   };
  //   console.log(postData);
  // };

  return (
    <Modal>
      <Form method="post" className={classes.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="body" required rows={3} />
        </p>
        <p>
          <label htmlFor="name">your name</label>
          <input type="text" id="name" name="author" required />
        </p>
        <p className={classes.actions}>
          <Link to="/" type="button">
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;
export async function action({ request }) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData); // {body : '', author: '...'}
  console.log(postData);
  await fetch("http://localhost:8090/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return redirect("/");
}
