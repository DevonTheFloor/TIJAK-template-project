import MyHeader from './src/components/myHeader/my-header';
import MyNavMenu from './src/components/myNavMenu/my-nav-menu';
import MyFooter from './src/components/myFooter/my-footer';

//pages
import IndexPage from "./src/pages/index-page";
import SecondePage from "./src/pages/second-page";

export const registerComponents = [
  MyHeader,
  MyNavMenu,
  MyFooter
]

export const registerPages = [
  IndexPage,
  SecondPage
]