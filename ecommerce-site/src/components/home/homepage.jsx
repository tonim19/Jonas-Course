import MenuItem from "./menu-item";
import "./homepage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="directory-menu">
        <MenuItem title="HATS" subtitle="SHOP NOW" />
        <MenuItem title="JACKETS" subtitle="SHOP NOW" />
        <MenuItem title="SNEAKERS" subtitle="SHOP NOW" />
        <MenuItem title="WOMENS" subtitle="SHOP NOW" />
        <MenuItem title="MENS" subtitle="SHOP NOW" />
      </div>
    </div>
  );
};

export default HomePage;
