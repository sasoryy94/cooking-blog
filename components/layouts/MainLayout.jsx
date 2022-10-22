import { NavBar } from "../NavBar";

export const MainLayout = ({ children }) => {
  return (
    <div className="bg-white flex-col w-11/12 mx-auto">
      <NavBar />

      {children}

      {/* instaAPI */}
      {/* footer */}
    </div>
  );
};
