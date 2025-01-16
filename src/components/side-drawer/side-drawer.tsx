import { Component, Host, Prop, h, State} from '@stencil/core';

@Component({
  tag: 'md-side-drawer',
  styleUrl: 'side-drawer.css',
  shadow: true,
})
export class SideDrawer {
  @State() showContactInfo = false; //escuta internamente no componente quando algo é mudado e renderiza de novo
  @Prop({reflect: true}) title: string; // utilize reflect quando quiser alterar a props e alterar o valor no DOM
  @Prop({reflect: true, mutable: true}) open: boolean;

  onCloseDrawer(){
    this.open = false;
  }

  onContentChange(content: string){
    if(content == 'contact'){
      this.showContactInfo = true;
    }
  }

  render() {
    let mainContent = <slot></slot>;

    if(this.showContactInfo){
      mainContent = (
        <div id="contact-information">
          <h2>Contact Information</h2>
          <p>you can reach us via phone or email.</p>
          <ul>
            <li> Phone: 91234-5678</li>
            <li>E-mail: <a href="https://www.linkedin.com/in/matheus-de-deus/">something@something.com</a></li>
          </ul>
        </div>
      );
    }


    return (
      <aside>
        <header>
          <h1>{ this.title }</h1>
          <button onClick={ this.onCloseDrawer.bind(this)}> X </button>
        </header>
        <section id='tabs'>
          <button class={!this.showContactInfo ? 'active' : ''} onClick={this.onContentChange.bind(this, 'nav')}>Navigation</button>
          <button class={this.showContactInfo ? 'active' : ''} onClick={this.onContentChange.bind(this, 'contact')}>Contact</button>
        </section>
        <main>
          {mainContent}
          {/* <slot></slot> */}
        </main>
      </aside>
    );
  }
}
