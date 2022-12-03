import './Set.css'
const characters = importAll(require.context("../../images/Characters",false,/\.(png|jpe?g|svg)$/));
const items = importAll(require.context("../../images/Items",false,/\.(png|jpe?g|svg)$/));

function Set(props) {
    return (
        <div class="set-container">
            <h1>Set Name</h1>
            <div class="character">
                <img class="char" src={characters["1.png"]}/>
            </div>
            <div class="item1"><h1>Item 1</h1><img class="item" src={items["1.png"]}/></div>
            <div class="item2"><h1>Item 2</h1><img class="item" src={items["2.png"]}/></div>
            <div class="item3"><h1>Item 3</h1><img class="item" src={items["3.png"]}/></div>
            <div class="item4"><h1>Item 4</h1><img class="item" src={items["4.png"]}/></div>
        </div>
    )
}

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }

export default Set;

//import Nej from './src/images/nej.jpg';

//({gameclass}, {example set name}, {item 1 image}, {item 2 image}, {item 3 image}, {item 4 image}, {full set image} )
//({rogue}, {vampire rogue}, {soulcursed scythe image}, {hallowed hide image}, {vampiric cape image}, {ruthven's rosary image}, {spooky vampire guy image} )

