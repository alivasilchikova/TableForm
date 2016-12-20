/**
 * Created by Alina on 20.12.2016.
 */
/**
 * Created by Alina on 20.12.2016.
 */
class TableForm extends React.Component {
    constructor(props) {
        super(props);
        this.array = [{name: 'alina', age: 21}, {name: 'dima', age: 20}, {name: 'sasha', age: 9}];
        this.Allocation = this.Allocation.bind(this);
    }

    Allocation(field) {
        return function(){
            alert(field);
        };
    }

    render() {
        return (

            <table>
                <thead>
                <tr>
                    <th>Number</th>
                    <th>Object</th>
                </tr>
                <tr>
                    <th>1</th>
                    <th onClick={this.Allocation(this.array[0].name)}>First object</th>
                </tr>
                <tr>
                    <th>2</th>
                    <th onClick={this.Allocation(this.array[1].name)}>Second object</th>
                </tr>
                <tr>
                    <th>3</th>
                    <th onClick={this.Allocation(this.array[2].name)}>Third object</th>
                </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        );
    }
}

ReactDOM.render(
    <TableForm />,
    document.getElementById('root')
);
