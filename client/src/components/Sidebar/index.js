import React, { useContext, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Icon, Image } from "semantic-ui-react";
import { ReactComponent as Logo } from "images/logo.svg";
import styles from "./Sidebar.module.scss";
import Button from "components/Button";
import { AuthContext } from "context/auth";
import PostModal from "components/Modal/PostModal/PostModal";

const SidebarEl = () => {
  const [showModal, setShowModal] = useState(false);
  const handleOpen = () => setShowModal(!showModal);

  const history = useHistory();

  const { logout } = useContext(AuthContext);
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
  ];

  return (
    <div className={styles.sidebar}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Logo cursor="pointer" className={styles.logo} onClick={() => history.push("/")} />
        </div>
        <div className={styles.linksContainer}>
          {links?.map((link) => (
            <NavLink
              key={link.title}
              className={styles.link}
              activeClassName={styles.active}
              to={link?.to}
              onClick={link?.onClick}
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
          <div className={styles.link} onClick={logout}>
            <Icon name="log out" size="big" />
            <h3>Logout</h3>
          </div>
        </div>
        <Button onClick={handleOpen}>Create Post</Button>
      </div>
      {showModal && <PostModal onClose={handleOpen} />}
    </div>
  );
};

export default SidebarEl;
