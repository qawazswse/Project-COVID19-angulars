import { string } from '@amcharts/amcharts4/core';
import { Component, OnInit } from '@angular/core';

export class Message {
    public location: string;
    public time: Date;
    public name: string;
    public message: string[] = [];
    public newMessage: string;
}
@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {

  constructor() { }
  public location: string;
  public time: Date;
  public name: string;
  public newMessage: string;
  model = new Message();
    /* An empty array that is responsible
       to add a division */
       public items = [];

       /* A two-way binding performed which
          pushes text on division */
       public newTask;


  ngOnInit(): void {
  }




       /* This function takes to input the
          task, that has to be deleted*/
       public deleteTask(index): void {
           this.items.splice(index, 1);
       }

       public onSubmit(form): void{
           console.log(form.value);
           if (this.newTask === '') {
           }
           else {
               this.name = this.model.name;
               this.location = this.model.location;
               this.time = this.model.time;
               this.newMessage = this.model.newMessage;
               const newModel = new Message();
               newModel.location = this.location;
               newModel.time = new Date(Date.parse(new Date().toString()));
               newModel.newMessage = this.newMessage;
               newModel.name = this.name;
               let line = '';
               for (let i = 0; i < newModel.newMessage.length; i++){
                   const character = newModel.newMessage.charAt(i);
                   line = line.concat(character);
                   if ((i + 1) % 40 === 0) {
                     newModel.message.push(line);
                     line = '';
                   }
               }
               newModel.message.push(line);
               newModel.message.push('');
               this.items.push(newModel);
               console.log(newModel.message);
           }
       }
}
