import { Header } from "../../components/Header";
import { ThemeV1 } from "../../theme";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeV1>
      <Header />
      <main style={{ marginTop: 100 }}>{children}</main>
    </ThemeV1>
  );
};
