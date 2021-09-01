import './customers.css';
import react, {Component} from 'react'

class Customers extends Component{

    constructor() {
        super();

        this.state = {
            customers: []
        }
    }

    componentDidMount() {
        fetch('/api/customers')
            .then(res => res.json())
            .then(customers => this.setState({customers}, () => console.log('Customers fetched..', {customers}) ))
    }

    render() {
    return (
        <div >
        <h2>Customer List</h2>

        <ul>
            {this.state.customers.map(customer =>   
                <li  key={customer.id}> {customer.firstName}  {customer.lastName}</li>

            )}
        </ul>
        
        </div>
    );

    }
}

export default Customers;
