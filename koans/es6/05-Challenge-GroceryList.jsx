var React = require("react");

class GroceryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: [
        {
          name: "Test"
        } 
      ]
    };

    this.addGroceryItem = this.addGroceryItem.bind(this);
    this.clearList = this.clearList.bind(this);
  }

  addGroceryItem() {}
  clearList() {}

  render() {
    let groceriesComponents = [];
    for(let grocery of this.state.groceries) {
      groceriesComponents.push(<GroceryListItem grocery={grocery} />);
    }

    return (<span>FILL ME IN</span>);
  } 
}

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { grocery: props.grocery };
    this.toggleGroceryCompleteness = this.toggleGroceryCompleteness.bind(this);
  }

  toggleGroceryCompleteness() {}

  render() {
    return (<li>{this.props.grocery.name}</li>);
  }
}

export default GroceryList;
