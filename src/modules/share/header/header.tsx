import { Drawer } from 'antd';
import { useHistory, useParams } from 'react-router';
import { useLocation, Link } from "react-router-dom";
import { VscCode as ProLogoIcon } from "react-icons/vsc";
import { IoListOutline as NavDrawerIcon } from "react-icons/io5";
import React, { useState, useEffect } from 'react';
import styles from "./header.module.css";


const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currPath, setPath] = useState("");

  const history = useHistory();
  const queryPath = useLocation();
  const navs = [{path: "/",         value: "Home"},
                {path: "/project",  value: "Project"},
                {path: "/skill",    value: "Skill"},
                {path: "/about",    value: "About"}];
  
  useEffect(() => {
    if (currPath === "" && queryPath !== null) {
      setPath(queryPath?.pathname);
    }
  }, []);

  
  const Logo = () => {
    return (
      <>
        <div className={styles.headerLogo}>
          <ProLogoIcon className={styles.headerLogoIcon} /><span> Dipta | Portfolio</span>
        </div>
      </>
    )
  };

  const Navlinks = () => {
    return (
      <div className={styles.headerICRNav}>
        {navs && navs.map(nav => (
          <div
            onClick={() => {
              setPath(nav.path);
              history.push(nav.path);
            }}
            className={currPath === nav.path
              ? `${styles.navLink} ${styles.navLinkActive}`
              : `${styles.navLink}`
            }
            key={nav.value}
          >
            <span>{nav.value}</span>
          </div>
        ))}
      </div>
    )
  };

  const DrawerComp = () => {
    return (
      <Drawer
        title="Dipta | Portfolio"
        placement={'right'}
        closable={false}
        onClose={() => setIsVisible(false)}
        visible={isVisible}
        width={200}
        key={'right'}
      >
        <div className={styles.drawer}>
          {navs && navs.map(nav => (
            <div
              onClick={() => {
                setIsVisible(false);
                history.push(nav.path);
              }}
              className={styles.drawerNavLink}
              key={nav.value}
            >
              <span>{nav.value}</span>
            </div>
          ))}
        </div>
      </Drawer>
    )
  };

  const NavDrawer = () => {
    return (
      <div className={styles.headerICRDrawer}>
        <NavDrawerIcon
          onClick={() => setIsVisible(true)}
          className={styles.navDrawerIcon} />
      </div>
    )
  };

  
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerInnerContainer}>
        <div className={styles.headerICLeft}>
          <Logo />
        </div>

        <div className={styles.headerICRight}>
          <Navlinks />
          <NavDrawer />
        </div>
      </div>
      <DrawerComp />
    </header>
  )
}

export default Header;
