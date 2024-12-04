import { Header } from "./Header";

export const PageLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
