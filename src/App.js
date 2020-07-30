import React from 'react';
import ShowMonth from './components/ShowMonth';
import './components/ShowUsers';
import './App.css';
import ShowUsers from './components/ShowUsers';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      monthsObj: {
      },
      months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      users: []
    }
    this.handleMove = this.handleMove.bind(this)
  }

  componentWillMount() {
    this.getUsers();
  }

  async getUsers() {
    const response = await fetch('https://yalantis-react-school-api.yalantis.com/api/task0/users');
    let data1 = await response.json();

    let newMonthsObj = {
      "0": [],
      "1": [],
      "2": [],
      "3": [],
      "4": [],
      "5": [],
      "6": [],
      "7": [],
      "8": [],
      "9": [],
      "10": [],
      "11": [],
    };
    let keysOfMonthObj = Object.keys(newMonthsObj);
    
    for (let i = 0; i < keysOfMonthObj.length; i++) {
      newMonthsObj[i] = data1.filter((item) => new Date(item.dob).getMonth() === i);
    }
    this.setState({ monthsObj: newMonthsObj });
  }

  handleMove(i) {
    let user = this.state.monthsObj[i];
    this.setState(({ users: user }));
  }

  setBgColor(i) {
    let numberOfUsers = this.state.monthsObj[i];
    let color;
    if (!numberOfUsers) {
      return color;
    }
    if (numberOfUsers.length < 3) {
      color = "bg-grey";
    }
    if (numberOfUsers.length >= 3 && numberOfUsers.length < 7) {
      color = "bg-blue";
    }
    if (numberOfUsers.length >= 7 && numberOfUsers.length < 11) {
      color = "bg-green";
    }
    if (numberOfUsers.length >= 11) {
      color = "bg-red";
    }
    return color;
  }

  renderMonth(i) {
    return (
      <ShowMonth color={this.setBgColor(i)} months={this.state.months[i]} handleMove={() => this.handleMove(i)} />
    )
  }

  renderUsers() {
    return (
      <ShowUsers users={this.state.users} />
    )
  }

  render() {
    return (
      <div className=" container">
        <div className="wrap">
          <div className="months">
            {this.renderMonth(0)}
            {this.renderMonth(1)}
            {this.renderMonth(2)}
            {this.renderMonth(3)}
            {this.renderMonth(4)}
            {this.renderMonth(5)}
            {this.renderMonth(6)}
            {this.renderMonth(7)}
            {this.renderMonth(8)}
            {this.renderMonth(9)}
            {this.renderMonth(10)}
            {this.renderMonth(11)}
          </div>
          <div className="users">
            <table className="table">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>First Name</th>
                  <th>Second Name</th>
                  <th>Date of Birth</th>
                </tr>
              </thead>
              {this.renderUsers()}
            </table>
          </div>
        </div>
      </div>

    );
  }

}

export default App;
