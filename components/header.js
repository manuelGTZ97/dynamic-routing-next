import Link from "next/link";

const Header = () => (
  <header>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href="/post/[id]" as="/post/first">
          <a>First Post</a>
        </Link>
      </li>
      <li>
        <Link href="/post/[id]" as="/post/second">
          <a>Second Post</a>
        </Link>
      </li>
      <li>
        <Link href="/users/[userName]/[username]" as={"/users/pablo/pablo123"}>
          {/*    Folder Name--^ File Name--^*/}
          <a>Link to Pablo</a>
        </Link>
      </li>
    </ul>
  </header>
);

export default Header;
