import IndexPage from "./src/pages/index-page";
import SecondPage from "./src/pages/secondPage";

export const mapping = [
  { 
    uri: '', 
    page: '<index-page></index-page>' 
  },
  { 
    uri: '#/', 
    page: '<index-page></index-page>' 
  },
  { 
    uri: '#/second-page', 
    page: '<second-page></second-page>' 
  }
];
  