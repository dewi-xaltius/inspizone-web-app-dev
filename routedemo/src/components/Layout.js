import GlobalStyle from '../styles/GlobalStyle';
import Navigation from './Navigation/Navigation';

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <Navigation />
      <main>{children}</main>
    </>
  );
}