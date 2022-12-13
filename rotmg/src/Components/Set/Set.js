import './Set.css'

function Set(props) {

    return (
        <div class="set-container">
            <h1>{props.cn}</h1>
            <div class="character">
                <img class="charimg" src={props.c} alt={""}/>
            </div>
            <div class="item1">
                <h1 class="itemtext">{props.s1n}</h1>
                <img class="itemimg" src={props.s1} alt={""}/>
            </div>
            <div class="item2">
                <h1 class="itemtext">{props.s2n}</h1>
                <img class="itemimg" src={props.s2} alt={""}/>
            </div>
            <div class="item3">
                <h1 class="itemtext">{props.s3n}</h1>
                <img class="itemimg" src={props.s3} alt={""}/>
            </div>
            <div class="item4">
                <h1 class="itemtext">{props.s4n}</h1>
                <img class="itemimg" src={props.s4} alt={""}/>
            </div>
        </div>
    )
}

export default Set;

//({gameclass}, {example set name}, {item 1 image}, {item 2 image}, {item 3 image}, {item 4 image}, {full set image} )
//({rogue}, {vampire rogue}, {soulcursed scythe image}, {hallowed hide image}, {vampiric cape image}, {ruthven's rosary image}, {spooky vampire guy image} )

