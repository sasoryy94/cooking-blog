import { NavBar } from "../NavBar";

export const MainLayout = ({ children }) => {
  return (
    <div className="bg-white flex-col w-11/12 md:w-10/12 lg:w-9/12 mx-auto">
      <NavBar />

      {children}

      {/* instaAPI */}
      {/* footer */}
    </div>
  );
};
