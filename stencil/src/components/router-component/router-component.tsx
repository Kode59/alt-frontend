import '@stencil/router';
import { Component } from '@stencil/core';

@Component({
  tag: 'router-component',
  shadow: false
})
export class RouterComponent {

  render() {
    return (
        <stencil-router>
            <stencil-route url="/" component="tiles-component" exact={true}/>
            <stencil-route url="/login" component="login-component"/>
        </stencil-router>
    );
  }
}
