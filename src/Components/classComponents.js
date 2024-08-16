import React from "react";

class FirstClassComponent extends React.Component{

    constructor(){
        super()
        this.state={a:"hello",b:"hi",flag:true}
    }
    
    componentDidMount(){
        alert("hi welcome to our website")
    }

    componentDidUpdate(){
        alert("state is changing")
    }


    render(){
        // var a="hello"
        return(
            <div>
                <h1>This Is First class component</h1>
                {this.state.a}
                <div>
                    <button onClick={()=>{this.setState({a:"welcome"})}}>change a</button>
                    <button onClick={()=>{this.setState({flag:false})}}>changeFlag</button>
                </div>
                {this.state.flag ? <SecondClassComponent a={this.state.a}/> : null}
            </div>
        )
    }
}

class SecondClassComponent extends React.Component{

    componentWillUnmount(){
            alert("component is getting deleted")
    }

    render(){
        return(
            <div>
                <h1>This is Second Class Component</h1>
                {this.props.a}
            </div>
        )
    }
}

export default FirstClassComponent

