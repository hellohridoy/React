import React from "react";
import Card from "./components/Card";
import Data from "./data.json";

let item = [];
for(let x = 0;x<Data.length;x++){
    item.push(<Card titleText = {Data[x].title} dText ={Data[x].desc} />);
}


function App(){
    return <div>
                {item};
            </div>
}
export default App;