import './Set.css';
import React, {useState} from "react";

function Set(props) {
    const [state1,setState1] = useState(props.status[0]);
    const [state2,setState2] = useState(props.status[1]);
    const [state3,setState3] = useState(props.status[2]);
    const [state4,setState4] = useState(props.status[3]);

    const toggle1=()=>{
        setState1(!state1);
    }
    const toggle2=()=>{
        setState2(!state2);
    }
    const toggle3=()=>{
        setState3(!state3);
    }
    const toggle4=()=>{
        setState4(!state4);
    }

    return (
        <div class="set-container">
            <h2 className="title-container">{props.cn}</h2>
            <div class="character">
                <img class="charimg" src={props.c} alt={props.c}/>
            </div>
            <div class="item1">
                <button onClick={toggle1} className={state1 ? 'haveitem':'noitem'}>
                    <h1 class="itemtext">{"Weapon"}</h1>
                    <img class="itemimg" src={props.s1} title={props.s1n} alt={""}/>
                </button>
            </div>
            <div class="item2">
                <button onClick={toggle2} className={state2 ? 'haveitem':'noitem'}>
                    <h1 class="itemtext">{"Ability"}</h1>
                    <img class="itemimg" src={props.s2} title={props.s2n} alt={""}/>
                </button>
            </div>
            <div class="item3">
                <button onClick={toggle3} className={state3 ? 'haveitem':'noitem'}>
                    <h1 class="itemtext">{"Armor"}</h1>
                    <img class="itemimg" src={props.s3} title={props.s3n} alt={""}/>
                </button>
            </div>
            <div class="item4">
                <button onClick={toggle4} className={state4 ? 'haveitem':'noitem'}>
                    <h1 class="itemtext">{"Ring"}</h1>
                    <img class="itemimg" src={props.s4} title={props.s4n} alt={""}/>
                </button>
            </div>
        </div>
    )
}

export default Set;

