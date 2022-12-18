import './App.css';
import Set from './Components/Set/Set';
import data from './data.js'

const characters = importAll(require.context("./images/Characters",false,/\.(png|jpe?g|svg)$/));
const items = importAll(require.context("./images/Items",false,/\.(png|jpe?g|svg)$/));

const numSets = 24;

function App() {
  const disp=[];
  for (let i=1; i<numSets+1; i++){
    disp.push(
        <Set 
        c={characters[String(i)+".png"]}
        cn={data[i-1][0]}
        s1n={data[i-1][1]}
        s2n={data[i-1][2]}
        s3n={data[i-1][3]}
        s4n={data[i-1][4]}
        s1={items[String(i*4-3)+".png"]}
        s2={items[String(i*4-2)+".png"]}
        s3={items[String(i*4-1)+".png"]}
        s4={items[String(i*4)+".png"]}
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
 