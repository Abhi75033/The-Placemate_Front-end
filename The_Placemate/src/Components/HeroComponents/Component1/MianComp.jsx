import Comp1 from "./comp1";
import Comp2 from "./comp2";
import '../../../App.css'
function MainComp() {
    return ( 
        <div style={{backgroundColor:'#080E18'}}>
        <div className="row row-cols-auto" >
        <div className="col">
        <Comp1/>
        </div>
        <div className="col " >
        <Comp2/>
        </div>
        </div>
        </div>
     );
}

export default MainComp;