import '../src/sass/main.scss';
import registrare from '../builders/components-loader';
import { listenForHash, listenForHashInIndex } from '../builders/page-navigation.js';

const a = { 
  uri: '', 
  page: '<index-page></index-page>' 
},
z = { 
  uri: '#/', 
  page: '<index-page></index-page>' 
},
e = { 
  uri: '#/second-page', 
  page: '<second-page></second-page>' 
};

registrare()

listenForHash(a,z,e)

listenForHashInIndex(a,z,e)

