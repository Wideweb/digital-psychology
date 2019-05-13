import * as React from "react";
import * as ReactDOM from "react-dom";

import App from "./app/app";

const Index = () => {
  return <App compiler="TypeScript" framework="React" />;
};

ReactDOM.render(<Index />, document.getElementById("index"));