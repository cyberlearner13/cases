<<<<<<< bf33fc89d4d9040efb66d9531ff540b5a963c7a4
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

=======
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

>>>>>>> case conversion ui setup with bulma
ReactDOM.render(<App />,document.querySelector("#app"));