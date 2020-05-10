import React, { Component } from 'react';
import axios from 'axios';
class DataList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             articles: [],
             hasError: '',
             locale: 'en-KE',
             q: 'health',
             type: 'headlines',
             api_key: 'B2B94657B6AD41649D26FFC93E381117'
        }
    }
    componentDidMount(){
        const { locale, q, type, api_key } = this.state
        axios.get(`https://api.breakingapi.com/news?q=${q}&type=${type}&locale=${locale}&api_key=${api_key}`)
            .then(response =>{
                console.log(response)
                this.setState({ articles: response.data.articles })
            })
            .catch(error =>{
                console.log(error)
                this.setState({ hasError: 'Something went wrong!' })
            })
    }
    
    render() {
        const { articles,hasError } = this.state
        return (
            <div>
               {
                   articles.map(article => <div>{ article.title } <a href= { article.link }> Read more....</a><img src = { article.image_links } /></div>)
               }
               { hasError }
            </div>
        )
    }
}

export default DataList
