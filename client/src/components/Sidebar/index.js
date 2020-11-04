import React from "react";
import { NavLink } from "react-router-dom";
import { Icon, Image } from "semantic-ui-react";
import { ReactComponent as Logo } from "images/logo.svg";
import styles from "./Sidebar.module.scss";
import Button from "components/Button";

const SidebarEl = () => {
  const links = [
    { icon: "home", to: "/", title: "Home" },
    { icon: "inbox", to: "/messages", title: "Messages" },
    {
      image: true,
      imageSrc:
        "https://images.pexels.com/photos/3828240/pexels-photo-3828240.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      to: "/profile",
      title: "Profile",
    },
    { icon: "setting", to: "/settings", title: "Settings" },
    { icon: "log out", to: "/logout", title: "Logout" },
    { icon: "log out", to: "/login", title: "Logout" },
    { icon: "log out", to: "/register", title: "Register" },
  ];
  return (
    <div className={styles.sidebar}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Logo className={styles.logo} />
        </div>
        <div className={styles.linksContainer}>
          {links?.map((link) => (
            <NavLink
              className={styles.link}
              activeClassName={styles.active}
              to={link?.to}
              exact
            >
              {link?.image ? (
                <Image src={link?.imageSrc} avatar />
              ) : (
                <Icon name={link?.icon} size="big" />
              )}
              <h3>{link?.title}</h3>
            </NavLink>
          ))}
        </div>
        <Button>Create Post</Button>
      </div>
    </div>
  );
};

export default SidebarEl;
