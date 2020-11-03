import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Icon, Image } from "semantic-ui-react";
import {ReactComponent as Logo} from '../../images/logo.svg'
import styles from "./Sidebar.module.scss";

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
  ];
  return (
    <div className={styles.sidebar}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Logo className={styles.logo} />
        </div>
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
    </div>
  );
};

export default SidebarEl;
