import './Set.css';
import React, {useState} from "react";
import Cookies from 'universal-cookie';

function Set(props) {
    const [itemState1,setItemState1] = useState(Number(props.storedValues.charAt(0))); //initializes item 1 button
    const [itemState2,setItemState2] = useState(Number(props.storedValues.charAt(1))); //initializes item 2 button
    const [itemState3,setItemState3] = useState(Number(props.storedValues.charAt(2))); //initializes item 3 button
    const [itemState4,setItemState4] = useState(Number(props.storedValues.charAt(3))); //initializes item 4 button
    const [itemState5,setItemState5] = useState(Number(props.storedValues.charAt(4))); //initializes item 5 button
    const cookies = new Cookies();

    const itemToggle1=()=>{ //allows toggling of button 1
        setItemState1(!itemState1);
        var cookie = cookies.get(props.characterName)
        cookie = cookie.split("")
        if (itemState1){
            cookie[0] = "0" 
        }
        else {
            cookie[0] ="1"
        }
        cookie = cookie.join("") 
        cookies.set(props.characterName,cookie)
    }
    const itemToggle2=()=>{ //allows toggling of button 2
        setItemState2(!itemState2);
        var cookie = cookies.get(props.characterName)
        cookie = cookie.split("")
        if (itemState2){
            cookie[1] = "0" 
        }
        else {
            cookie[1] ="1"
        }
        cookie = cookie.join("") 
        cookies.set(props.characterName,cookie)
    }
    const itemToggle3=()=>{ //allows toggling of button 3
        setItemState3(!itemState3);
        var cookie = cookies.get(props.characterName)
        cookie = cookie.split("")
        if (itemState3){
            cookie[2] = "0" 
        }
        else {
            cookie[2] ="1"
        }
        cookie = cookie.join("") 
        cookies.set(props.characterName,cookie)
    }
    const itemToggle4=()=>{ //allows toggling of button 4
        setItemState4(!itemState4);
        var cookie = cookies.get(props.characterName)
        cookie = cookie.split("")
        if (itemState4){
            cookie[3] = "0" 
        }
        else {
            cookie[3] ="1"
        }
        cookie = cookie.join("") 
        cookies.set(props.characterName,cookie)
    }
    const itemToggle5=()=>{ //allows toggling of button 5
        setItemState5(!itemState5);
        var cookie = cookies.get(props.characterName)
        cookie = cookie.split("")
        if (itemState5){
            cookie[4] = "0" 
        }
        else {
            cookie[4] ="1"
        }
        cookie = cookie.join("") 
        cookies.set(props.characterName,cookie)
    }

    var hasFullSet = false;
    if (itemState1 & itemState2 & itemState3 & (itemState4 || itemState5)){ //checks if all item buttons are toggled
        hasFullSet = true;
    }

    return (
        <div className={hasFullSet ? "haveSet":"set-container"}>
            <h2 className="title-container">{props.characterName}</h2>

            <div class="character">
                <img class="charimg" src={props.characterImage} alt={props.characterName}/>
            </div>

            <div class="item1">
                <button onClick={itemToggle1} className={itemState1 ? 'haveitem':'noitem'}>
                    <h1 class="itemtext">{"Weapon"}</h1>
                    <img class="itemimg" src={props.item1} title={props.itemName1} alt={""}/>
                </button>
            </div>

            <div class="item2">
                <button onClick={itemToggle2} className={itemState2 ? 'haveitem':'noitem'}>
                    <h1 class="itemtext">{"Ability"}</h1>
                    <img class="itemimg" src={props.item2} title={props.itemName2} alt={""}/>
                </button>
            </div>

            <div class="item3">
                <button onClick={itemToggle3} className={itemState3 ? 'haveitem':'noitem'}>
                    <h1 class="itemtext">{"Armor"}</h1>
                    <img class="itemimg" src={props.item3} title={props.itemName3} alt={""}/>
                </button>
            </div>

            <div class="item4">
                <button onClick={itemToggle4} className={itemState4 ? 'haveitem':'noitem'}>
                    <h1 class="itemtext">{"Ring"}</h1>
                    <img class="itemimg" src={props.item4} title={props.itemName4} alt={""}/>
                </button>
            </div>

            <div class="item5">
                {props.itemName5 &&
                <button onClick={itemToggle5} className={itemState5 ? 'haveitem':'noitem'}>
                    <h1 class="itemtext">{"Ring"}</h1>
                    <img className="itemimg" src={props.item5} title={props.itemName5} alt={""}/>
                </button>
                }
            </div>
        </div>
    )
}

export default Set;

