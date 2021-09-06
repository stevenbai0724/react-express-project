import './customers.css';
import react, { Component } from 'react'

class Customers extends Component {

    constructor() {
        super();

        this.state = {
            customers: []
        }
    }

    componentDidMount() {
        fetch('/api/customers')
            .then(res => res.json())
            .then(customers => this.setState({ customers }, () => console.log('Customers fetched..', { customers })))

        // Sample post request
        // Requires application/json header to be parsed correctly
        // postBody is sent in as the body param
        // requires JSON.stringify
        const postBody = {
            customers: [
                { id: 1, firstName: "Da", lastName: "Baby" },
                { id: 2, firstName: "John", lastName: "Cena" },
                { id: 3, firstName: "Pepe", lastName: "Frog" },
            ]
        }
        fetch('/api/customers', {
            method: "POST", body: JSON.stringify(postBody),
            headers: { 'Content-Type': 'application/json' }
        })
    }

    render() {
        return (
            <div >
                <h2>Customer List</h2>

                <ul>
                    {this.state.customers.map(customer =>
                        <li key={customer.id}> {customer.firstName}  {customer.lastName}</li>

                    )}
                </ul>

            </div>
        );

    }
}

export default Customers;
