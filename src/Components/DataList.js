import React, { Component } from 'react'
import axios from 'axios'
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
            .then((response => {
                console.log(response)
                this.setState({ companies: response.data })
            }))
            .catch((error)=>{
                console.log(error)
                this.setState({ hasError: 'Error in retrieving the data'})
            })
    }
    
    render() {
        const { companies, hasError } = this.state;
        const companyList = companies.map(company => <div key = { company.id }><li>{ company.description }</li></div>);
        return (
            <div> 
            List of Companies from ZachyAPI
            { companyList }
            </div>
            
        )
    }
}

export default DataList
