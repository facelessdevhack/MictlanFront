import Link from "next/link";
import { useRouter } from "next/router";
import "../assets/css/header.scss";
function Header({ navigation }) {
  const router = useRouter();
  console.log(router);

  return (
    <div id="navbar">
      <div>
        <Link href="/">
          <a>
            <img src="/assets/images/logo.svg" id="logo" />
          </a>
        </Link>
      </div>
      <ul id="nav">
        <li>
          <Link href="/story">
            <a className={router.pathname === "/story" ? "active" : ""}>
              STORY<div className="btmline"></div>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/news">
            <a className={router.pathname === "/news" ? "active" : ""}>
              KICKSTART<div className="btmline"></div>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/development">
            <a className={router.pathname === "/development" ? "active" : ""}>
              DEVELOPMENT<div className="btmline"></div>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/gallery">
            <a className={router.pathname === "/gallery" ? "active" : ""}>
              GALLERY<div className="btmline"></div>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/team">
            <a className={router.pathname === "/team" ? "active" : ""}>
              TEAM<div className="btmline"></div>
            </a>
          </Link>
        </li>
      </ul>
      <div className="social_profile">
        <ul>
          <li>
            <a target="_blank" href="https://www.facebook.com/mictlanthegame/">
              <img src="/assets/images/fb.png" alt="FB" />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.instagram.com/mictlanthegame/">
              <img src="/assets/images/ig.png" alt="IG" />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://twitter.com/mictlanthegame">
              <img src="/assets/images/tw.png" alt="TW" />
            </a>
          </li>
          <li>
            <a target="_blank" href="#">
              <img src="/assets/images/st.png" alt="ST" />
            </a>
          </li>
        </ul>
        <Link href="/Order">
          <a id="preorder">
            PRE ORDER<div id="preorderline"></div>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Header;
