import './App.css';
import Set from './Components/Set/Set';
import data from './data.js';
import Cookies from 'universal-cookie';

const characters = importAll(require.context("./images/Characters",false,/\.(png|jpe?g|svg)$/)); //grab character portrait images
const items = importAll(require.context("./images/Items",false,/\.(png|jpe?g|svg)$/)); //grab item images
const cookies = new Cookies();

console.log(data[0][0])

for (let i=0; i<data.length;i++) {
  if (!cookies.get(data[i][0])) {
      cookies.set(data[i][0],"0".repeat(data[i].length-1))
  }
}

function App() {  
    const disp=[];
  for (let i=0; i<data.length; i++){
    console.log(i)
    disp.push(
        <Set 
        characterImage={characters[String(i+1)+".png"]} //give character portraits to Set.js
        characterName={data[i][0]} //assign character names from data.js to Set.js
        itemName1={data[i][1]} //assign item name 1 from data.js to Set.js
        itemName2={data[i][2]} //assign item name 2 from data.js to Set.js
        itemName3={data[i][3]} //assign item name 3 from data.js to Set.js
        itemName4={data[i][4]} //assign item name 4 from data.js to Set.js
        itemName5={data[i][5]} //assign item name 5 from data.js to Set.js
        item1={items[data[i][0] + " 1.png"]} //give item 1 to Set.js
        item2={items[data[i][0] + " 2.png"]} //give item 2 to Set.js
        item3={items[data[i][0] + " 3.png"]} //give item 3 to Set.js
        item4={items[data[i][0] + " 4.png"]} //give item 4 to Set.js
        item5={items[data[i][0] + " 5.png"]} //give item 5 to Set.js
        storedValues={cookies.get([data[i][0]])} //gives stored memory to Set.js
        />
    )
  }

  return(
    <div className="grid"> 
      {disp}
    </div>
    );
};

function importAll(r) {
  let images = {};
  // eslint-disable-next-line
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

export default App;
 