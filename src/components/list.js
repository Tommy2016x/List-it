import {ListObj} from './listObj';

export class List {

    constructor() {
      this.message = 'List';
      this.name = '';
      this.lists = [];
      this.player = '';
      this.canvas = '';
      this.context = '';
      this.img = '';
    }

    newItem() {
      if (this.name) {
        let list = new ListObj(this.name);
        if(this.img){
          list.img = this.img;
          this.img = '';
          this.turnOff();
        }
        this.lists.push(list);
        this.name = '';

      }
    }

    removeList(list) {
      let index = this.lists.indexOf(list);
      if (index !== -1) {
        this.lists.splice(index, 1);
      }
    }

    startWebcam() {
      this.player = document.getElementById('player');
      // this.player = player;

      const constraints = {
        video: true,
      };

      navigator.mediaDevices.getUserMedia(constraints)
        .then((stream) => {
          this.player.srcObject = stream;
        });
    }

    snapShot(){
      this.canvas = document.getElementById('picCanvas');
      this.context = this.canvas.getContext('2d');
      this.context.drawImage(this.player, 0, 0, this.canvas.width, this.canvas.height);
      this.turnOff();
    }

    saveImage(){
      this.img = this.canvas.toDataURL("image/png");
      this.newItem();
      this.turnOff();
    }

    turnOff(){
      this.player.srcObject.getVideoTracks().forEach(track => track.stop());
    }
}
