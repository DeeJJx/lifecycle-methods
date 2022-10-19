import React from "react";

class Counter extends React.Component {
     constructor(props){
        console.log('Constructor')
        super(props);

        this.state = {
            counter: 0
        }

        this.increment = () => this.setState({counter: this.state.counter+1});
        this.decrement = () => this.setState({counter: this.state.counter-1});

     }

     componentDidMount() {
        console.log('Component did mount');
        console.log('---------------');
     }

     shouldComponentUpdate(nextProps, nextState){
        console.log('Should component update');
        console.log('---------------');
        if(nextProps.ignoreProp && this.props.ignoreProp!== nextProps.ignoreProp){
            return false;
        }
        return true;
     }

     render(){
        console.log('Render')

        return <div>
            <button onClick={this.increment}>increment</button>
            <button onClick={this.decrement}>decrement</button>

            <div className="counter">
                Counter: {this.state.counter}
            </div>
        </div>
     }

     componentDidUpdate(prevProps, prevState, snapshot){
        console.log('COmponent did update');
        console.log('---------------');
     }

     componentWillUnmount(){
        console.log('Component will unmount');
        console.log('---------------');
     }
}

export default Counter;