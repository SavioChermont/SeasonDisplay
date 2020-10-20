import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './Components/SeasonDisplay.js';
import Spinner from './Components/Spinner';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            latitude: null,
            errorMessage: '',
        }

    }

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({latitude: position.coords.latitude}),
            (error) => this.setState({errorMessage: error.message})
        );
    }

    renderBody(){
        if(this.state.latitude && !this.state.errorMessage)
            return <SeasonDisplay latitude={this.state.latitude}/>

        if(this.state.errorMessage && !this.state.latitude) 
        return <div> Error: {this.state.errorMessage}</div>


        return <Spinner>Allow the Localization</Spinner>
    }

    render(){
        return(
            <div>
                {this.renderBody()}
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
)