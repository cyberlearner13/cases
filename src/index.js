import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import CaseConversion from './components/case_conversion';
import 'bulma/css/bulma.css';

class App extends Component{
    render(){
        return(
            <div>
                <CaseConversion />
            </div>
        )
    }
}

ReactDOM.render(<App />,document.querySelector("#app"));