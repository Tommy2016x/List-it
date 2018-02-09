export class ListObj {
  constructor(name) {
    this.name = name;
    this.listItems = [];
    this.img = '';
  }

  show(){
    window.location.href = '#/genList';
    // genListDiv = document.getElementsByClassName("gen-list-div")[0];

    // h1 = document.createElement("h2");
    // h1.title = this.name;

    // genListDiv.appendChild(h1);

  }
}
