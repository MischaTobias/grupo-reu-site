import { Header } from "../header/Header";

export const PageLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
