import React from "react";
import { IntroPage, MainPage } from "./Pages";
import GlobalStyle from "./Styles/GlobalStyle";
import Theme from "./Styles/Theme";
import { ThemeProvider } from "styled-components";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyle />
        <>
          <Route exact path="/" component={IntroPage} />
          <Route path="/view" component={MainPage} />
        </>
      </>
    </ThemeProvider>
  );
};

export default App;
