import React, { Component } from 'react';
import axios from 'axios';
class DataList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            companyDetails: [],
            hasError: ''
        }
    }
    componentDidMount(){
        axios.get('https://my-json-server.typicode.com/ZachyDev/ZachyAPI/companies')
            .then(response => {
                console.log(response);
                this.setState({ companyDetails: response.data })
            })
            .catch(error => {
                console.log(error);
                this.setState({ hasError: 'There was an error in retrieving the data' })
            })
    }    
    render() {
        const { companyDetails, hasError } = this.state;
        const descriptionList =  companyDetails.map(company => <div key = { company.id }> <li>{ company.description }</li></div>)
        return (
            <div>
                <h2>Company Description</h2>
                { descriptionList } :
                { hasError }
            </div>
        )
    }
}

export default DataList
