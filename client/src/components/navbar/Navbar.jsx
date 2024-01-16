import { useRef } from "react";
import "./navbar.css";
import ApplyButton from "../apply-button/ApplyButton";
import { navOptions } from "../../util/content";
import logo from "../../assets/amitt-logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink, useLocation } from "react-router-dom";
import Icon from "../icon/Icon";

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

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
          <ApplyButton />
          <Icon
            //handleClick={openSidebar}
            value={MenuIcon}
            className={"menu-icon"}
          />
          {/* {!sidebarIsOpen ? (
            <Icon
              handleClick={openSidebar}
              value={MenuIcon}
              className={"menu-icon"}
            />
          ) : (
            <Icon value={CloseIcon} className={"menu-icon"} />
          )} */}
        </div>
        {/* {searchIsOpen && (
      <SearchBar ref={searchBarRef} closeSearch={closeSearch} />
    )} */}
      </section>
      {/* {sidebarIsOpen && (
    <Sidebar ref={sidebarRef} closeSidebar={closeSidebar} />
  )} */}
    </>
  );
};

const NavOption = ({ option: { desc } }) => {
  //const [isHovered, setIsHovered] = useState(false);
  const subOptionsRef = useRef(null);

  // const handleMouseOver = () => {
  //   setIsHovered(true);
  // };
  // const handleMouseOut = () => {
  //   setIsHovered(false);
  // };

  return (
    <div
      key={desc}
      className="nav-option"
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
