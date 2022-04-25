import React from "react";
import ReactDOM  from "react-dom/client";
// import ReactDOM  from "react-dom";

import App from "./App";

const root =  document.getElementById('root');
const ReactRoot = ReactDOM.createRoot(root);

ReactRoot.render(<App />);
// ReactDOM.render(<App />, document.getElementById('root'));