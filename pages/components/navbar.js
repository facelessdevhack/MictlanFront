import Link from "next/link";
import Order from "../Order";

const Navbar = () => (
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
        <Link href="/Story">
          <a class="navlinks">
            STORY<div class="btmline"></div>
          </a>
        </Link>
      </li>
      <li>
        <Link href="/FeaturedNews">
          <a class="navlinks">
            KICKSTART<div class="btmline"></div>
          </a>
        </Link>
      </li>
      <li>
        <a class="navlinks" href="/">
          DEVELOPMENT<div class="btmline"></div>
        </a>
      </li>
      <li>
        <a class="navlinks" href="/">
          GALLERY<div class="btmline"></div>
        </a>
      </li>
      <li>
        <a class="navlinks" href="/">
          TEAM<div class="btmline"></div>
        </a>
      </li>
    </ul>
    <div class="social_profile">
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

export default Navbar;
