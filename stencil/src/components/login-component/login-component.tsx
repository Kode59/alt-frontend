import { Component, Prop, State } from '@stencil/core';
import { RouterHistory } from '@stencil/router';

@Component({
  tag: 'login-component',
  shadow: false
})
export class LoginComponent {

  @State() username: string;
  @State() password: string;
  @Prop() history: RouterHistory;

  render() {
    return (
      <div>
        <div class="form-group col-sm-4">
          <label>Username</label>
          <input type="text" class="form-control"
            value={this.username}
            onInput={(event: any) => this.username = event.target.value}
            placeholder="Username" />
        </div>
        <div class="form-group col-sm-4">
          <label>Password</label>
          <input type="password" class="form-control"
            value={this.password}
            onInput={(event: any) => this.password = event.target.value}
            placeholder="Password" />
        </div>
        <div class="form-group col-sm-4">
          <button type="button" class="btn btn-primary" onClick={() => this.handleClick()} >
            Login
          </button>
        </div>
      </div>
    );
  }

  handleClick() {
    fetch('http://localhost:4000/authenticate', {
      body: JSON.stringify({ username: this.username, password: this.password }),
      method: 'POST',
      headers: {
        'content-type': 'application/json; charset=UTF-8'
      }
    })
      .then(function (response) {
        return response.json();
      })
      .then((data) => {
        localStorage.setItem('token', data.token);
        this.history.push(`/`, {});
      }).catch((err) => {
        console.log(err);
      });
  }
}
