import { Drawer } from 'antd';
import { useHistory, useParams } from 'react-router';
import { useLocation, Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';

import {
  NAVS
} from "../data/nav";
import {
  ThreeDotsIcon,
  NavDrawerIcon,
  ProLogoIcon
} from "../components/Icons";
import styles from "./Header.module.css";


const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currPath, setPath] = useState("");

  const history = useHistory();
  const queryPath = useLocation();
  
  
  useEffect(() => {
    if (currPath === "" && queryPath !== null) {
      setPath(queryPath?.pathname);
    }
  }, []);

  const navlinkHandler = (path: string) => {
    setPath(path);
    history.push(path);
  }

  
  const Logo = () => {
    return (
      <>
        <div
          onClick={() => navlinkHandler("/")}
          className={styles.headerLogo}>
          <ProLogoIcon className={styles.headerLogoIcon} />
        </div>
      </>
    )
  };

  const Navlinks = () => {
    return (
      <div className={styles.headerICRNav}>
        {NAVS && NAVS.map(nav => (
          <div
            onClick={() => navlinkHandler(nav.path)}
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
        title={<span className={styles.drawerTitle}><ThreeDotsIcon /></span>}
        placement={'right'}
        closable={false}
        onClose={() => setIsVisible(false)}
        visible={isVisible}
        width={200}
        key={'right'}
      >
        <div className={styles.drawer}>
          {NAVS && NAVS.map(nav => (
            <div
              onClick={() => {
                setIsVisible(false);
                navlinkHandler(nav.path);
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
