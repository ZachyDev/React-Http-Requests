import React, { Component } from 'react';
import axios from 'axios';
class DataList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             companies: [],
             hasError: ''
        }
    }
    componentDidMount(){
        axios.get('https://my-json-server.typicode.com/ZachyDev/ZachyAPI/companies')
            .then(response => {
                this.setState({ companies: response.data });
            })
            .catch( error => {
                this.setState({
                    hasError: 'Error in fetching the data!'
                })
            })
    }
    render() {
        const { companies } = this.state;
        return (
            <div>
                List of Companies from ZachyAPI
                {
                    companies.length ?
                    companies.map(company => <div key = { company.id }><li>{ company.description }</li></div>) :
                    null
                };
                
            </div>
        )
    }
}

export default DataList;
