import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'md-side-drawer',
  styleUrl: 'side-drawer.css',
  shadow: true,
})
export class SideDrawer {

  @Prop({reflect: true}) title: string; // utilize reflect quando quiser alterar a props e alterar o valor no DOM
  @Prop() open: boolean;

  render() {
    let content = null;
    if(this.open){
      content = (
        <aside>
          <header>
            <h1> { this.title }</h1>
          </header>
          <main>
            <slot></slot>
          </main>
        </aside>
      );
    }
    return content;
  }
}
