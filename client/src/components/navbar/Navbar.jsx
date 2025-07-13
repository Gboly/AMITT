import { useRef } from "react";
import "./navbar.css";
import ApplyButton from "../apply-button/ApplyButton";
import { navOptions } from "../../util/content";
import logo from "../../assets/amitt-logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Icon from "../icon/Icon";
import usePopUpHandler from "../../util/cutom-hooks/usePopupHandler";
import Sidebar from "../sidebar/Sidebar";
import { AnimatePresence } from "framer-motion";

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isFsaPage = location.pathname === "/fsa";
  const sidebarRef = useRef(null);
  const [sidebarIsOpen, openSidebar, closeSidebar] =
    usePopUpHandler(sidebarRef);

  return (
    <>
      <section className="nav-container">
        <NavLink to={"/"} reloadDocument={isHomePage}>
          <img src={logo} className="brand-logo" />
        </NavLink>
        <div className="nav-options">
          {/* <div>
            {!isSearchPage && (
          <Icon handleClick={openSearch} className={"search-icon"}>
            <SearchIcon style={iconStyle} />
          </Icon>
        )}
            <ThemeToggle />
          </div> */}
          <nav>
            {navOptions.map((option) => (
              <NavOption key={option.desc} option={option} />
            ))}
          </nav>
          {!isFsaPage && <ApplyButton />}
          {!sidebarIsOpen ? (
            <Icon
              handleClick={openSidebar}
              value={MenuIcon}
              className={"menu-icon"}
            />
          ) : (
            <Icon value={CloseIcon} className={"menu-icon"} />
          )}
        </div>
      </section>
      {sidebarIsOpen && (
        <AnimatePresence>
          <Sidebar ref={sidebarRef} closeSidebar={closeSidebar} />
        </AnimatePresence>
      )}
    </>
  );
};

const NavOption = ({ option: { desc, url } }) => {
  //const [isHovered, setIsHovered] = useState(false);
  const subOptionsRef = useRef(null);
  const navigate = useNavigate();

  // const handleMouseOver = () => {
  //   setIsHovered(true);
  // };
  // const handleMouseOut = () => {
  //   setIsHovered(false);
  // };
  const handleRouting = () => navigate(url);

  return (
    <div
      key={desc}
      className="nav-option"
      onClick={handleRouting}
      // onMouseOver={handleMouseOver}
      // onMouseOut={handleMouseOut}
    >
      <span>{desc}</span>
      <div ref={subOptionsRef} className="sub-options-wrapper">
        {/* {isHovered && (
            <>
              <Animated
                element={motion.div}
                className={"active-bar"}
                variants={spreadOut()}
                ref={subOptionsRef}
              />
              <NavSubOptions
                subOptions={content}
                columnType={columnType}
                ref={subOptionsRef}
                closeSubOption={handleMouseOut}
              />
            </>
          )} */}
      </div>
    </div>
  );
};

export default Navbar;
