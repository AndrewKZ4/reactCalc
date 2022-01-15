import './App.css';
import React, {Component} from "react";


class App extends Component {


    state = {
        x1:'0',
        x2:'0',
        op:'+',
        anwser:'0'


    }

    opChange = (event) => {
        this.setState({
            op: event.target.value
        })
    }

    count(){
        let ans=0
        switch (this.state.op) {
            case '+':
                ans = parseInt(this.state.x1)+parseInt(this.state.x2)
                break;
            case '-':
                ans = +this.state.x1-this.state.x2
                break;
            case '*':
                ans = +this.state.x1*this.state.x2
                break;
            case '/':
                ans = +this.state.x1/this.state.x2
                break;
            case '%':
                ans = +this.state.x1%this.state.x2
                break;
            default:
                console.log(`Sorry,error`);
        }
        return ans;
    }

    x1Change = (event) => {

        this.setState({
            x1: event.target.value
        })
    }
    x2Change = (event) => {
        this.setState({
            x2: event.target.value
        })
    }
    ansClick = (event) => {
        const ans = this.count()
        this.setState({
            anwser: ans
        })
    }



    render() {
        return (
            <div className="App" style={{width: "95%", margin: 'auto', padding: '10px', boxSizing: "border-box"}}>
                <h1>Calculator</h1>
                <input type="number" value={this.state.x1} onChange={this.x1Change} />
                <select onChange={this.opChange}>
                    <option defaultValue value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">*</option>
                    <option value="/">/</option>
                    <option value="%">mod</option>
                </select>
                <input type="number" value={this.state.x2} onChange={this.x2Change}/>
                <button onClick={this.ansClick} >=</button>
                <input type="text" value={this.state.anwser} readOnly/>
            </div>

        )

    }



}

export default App;