import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'md-side-drawer',
  styleUrl: 'side-drawer.css',
  shadow: true,
})
export class SideDrawer {

  @Prop({reflect: true}) title: string; // utilize reflect quando quiser alterar a props e alterar o valor no DOM
  @Prop({reflect: true, mutable: true}) open: boolean;

  onCloseDrawer(){
    this.open = false;
  }

  render() {
    return (
      <aside>
        <header>
          <h1> { this.title }</h1>
          <button onClick={ this.onCloseDrawer.bind(this)}> X </button>
        </header>
        <main>
          <slot></slot>
        </main>
      </aside>
    );
  }
}
