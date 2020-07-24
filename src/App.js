import React from 'react';
import './App.css';
import { Navbar, NavbarBrand, Button } from 'reactstrap';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: (localStorage.getItem('list')) ? JSON.parse(localStorage.getItem('list')) : []
    }
  }



  addItem(todoValue) {
    if (todoValue !== "") {
      const newItem = {
        id: Date.now(),
        value: todoValue,
        isDone: false
      }
      const list = [...this.state.list];
      list.push(newItem);


      this.setState({
        list,
        newItem: ""
      });
      localStorage.setItem('list', JSON.stringify(list));
    }
  }


  deleteItem(id) {
    const list = [...this.state.list];
    const updatedlist = list.filter(item => item.id !== id);
    this.setState({
      list: updatedlist
    });
    localStorage.setItem('list', JSON.stringify(updatedlist));
  }

  updateInput(input) {
    this.setState({
      newItem: input
    });
  }

  deleteall() {
    if (JSON.parse(localStorage.getItem('list')) === null) {
      alert("Sorry, No todos to delete!")
    }
    else {
      localStorage.clear("list");
      this.setState({
        list: [],
        newItem: ""
      });
      alert("All todos deleted Successfully!")
    }

  }

  cross(id) {
    const elementsIndex = this.state.list.findIndex(element => element.id === id);

    const newArray = [...this.state.list];
    newArray[elementsIndex] = { ...newArray[elementsIndex], isDone: !newArray[elementsIndex].isDone };
    this.setState({
      list: newArray,
    });
    localStorage.setItem('list', JSON.stringify(newArray));
  }



  render() {
    return (
      <div className="App bod">
        <Navbar dark color="secondary">
          <div className="navel">
            <NavbarBrand href="/">
              <span className="logo" style={{
                backgroundColor: '#620082', color: 'white', display: 'inline',
                padding: '4px', paddingTop: '2px', paddingBottom: '2px', borderRadius: '4px', textAlign: 'center'
              }}>
                Bs</span> Todo</NavbarBrand>
          </div>
          <div className="naver">
            <Button className="btn btn-danger mr-4" style={{ color: "white" }} onClick={() => this.deleteall()}>Delete all Todos</Button>
          </div>
        </Navbar>


        <div className="form-group ip">
          <input type="text" name="todo" placeholder="Enter a todo" className="form-control" required
            value={this.state.newItem} onChange={e => this.updateInput(e.target.value)} />
          <input type="submit" value="Submit" className="btn btn-info"
            onClick={() => this.addItem(this.state.newItem)}
            disabled={!this.state.newItem.length} />
        </div>

        <div className="mt-5">
          <ul className="list list-group input-lg">

            {this.state.list.map((item, i, arr) => {
              return (
                <li key={item.id} className="list-group-item bg-dark ls">
                  <div>
                    <input type="checkbox"
                      name="idDone"
                      className="checkbox mr-4"
                      defaultChecked={false}
                      checked={JSON.parse(localStorage.getItem('list'))[i].isDone}
                      onChange={(e) => this.cross(item.id)} />

                    <del>
                      {item.value}
                    </del>
                    <Button className="btn btn-danger ml-4 but"
                      onClick={(e) => this.deleteItem(item.id)}>
                      Delete
                    </Button>
                  </div>
                </li>
              );
            })}
            <li className="list-group-item bg-dark ls">
              <input type="checkbox" className="checkbox mr-4" />
              <del>
                Todos will be shown here!
              </del>
              <Button className="btn btn-danger ml-4 but">Delete</Button>
            </li>
          </ul>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />

      </div >
    );
  }
}


export default App;