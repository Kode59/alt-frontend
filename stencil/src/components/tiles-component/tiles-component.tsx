import { RouterHistory } from '@stencil/router';
import { Component, Prop, State } from '@stencil/core';

@Component({
  tag: 'tiles-component',
  styleUrl: 'tiles-component.css',
  shadow: false
})
export class TilesComponent {

  @Prop() first: string;
  @Prop() last: string;
  @Prop() history: RouterHistory;
  @State() tiles: any[];

  componentWillLoad() {
    if (!localStorage.getItem('token')) {
      this.history.push(`/login`, {});
    } else {
      return fetch('http://localhost:4000/tiles')
        .then((r) => r.json())
        .then((data) => {
          this.tiles = data.tiles;
        });
    }
  }

  render() {
    return (
      <div class="row">
        {this.tiles && this.tiles.map((tile) =>
          <div class="col-sm-4" >
            <div class="card">
              <a href={tile.url}>
                <div class="card-body tile">
                  {tile.name}
                </div>
              </a>
            </div>
          </div>
        )}
      </div>
    );
  }
}
