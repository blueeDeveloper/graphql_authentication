import React from 'react';
impoer Header from './Header';
const App = (props) => {
  return(
    <div className="container">
      <Header />
      {props.children}
    </div>
  );
};

export default App;
