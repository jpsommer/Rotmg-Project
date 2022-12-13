import './App.css';
import Set from './Components/Set/Set';

const characters = importAll(require.context("./images/Characters",false,/\.(png|jpe?g|svg)$/));
const items = importAll(require.context("./images/Items",false,/\.(png|jpe?g|svg)$/));

const numSets = 15;
//const numCols = 3;

function App() {
  const disp=[];
  for (let i=1; i<numSets+1; i++){
    disp.push(
        <Set 
        c={characters[String(i)+".png"]}
        cn={"Character Name"}
        s1n={"Item 1"}
        s2n={"Item 2"}
        s3n={"Item 3"}
        s4n={"Item 4"}
        s1={items[String(i*4-3)+".png"]}
        s2={items[String(i*4-2)+".png"]}
        s3={items[String(i*4-1)+".png"]}
        s4={items[String(i*4)+".png"]}
        />
    )
  }
  const ndisp=[];
  while(disp.length>0) {
    ndisp.push(disp.splice(0,3))
  }

  
  return(
    ndisp
    );
};

function importAll(r) {
  let images = {};
  // eslint-disable-next-line
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

export default App;
 