import * as React from "react";
import tanso from "./tanso.jpeg";

const App: React.FC = () => {
  return (
    <div className={"tansoContainer"}>
      <img src={tanso} alt="tanso do carai" />
    </div>
  );
};

export default App;
