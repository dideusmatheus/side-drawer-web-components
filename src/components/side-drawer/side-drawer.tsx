import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'md-side-drawer',
  styleUrl: 'side-drawer.css',
  shadow: true,
})
export class SideDrawer {

  @Prop() text: string;

  render() {
    return (
      <aside>
        <h1>My side drawer component</h1>
        <h1> { this.text } </h1>
      </aside>


      // <Host>
      //   <slot></slot>
      // </Host>
    );
  }
}
