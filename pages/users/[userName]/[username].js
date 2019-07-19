import { useRouter } from "next/router";
import Header from "../../../components/header";

const Comment = () => {
  const router = useRouter();
  const { userName, username } = router.query;

  return (
    <>
      <Header />
      <h1>Username: {userName}</h1>
      <h1>user: {username}</h1>
    </>
  );
};

export default Comment;
