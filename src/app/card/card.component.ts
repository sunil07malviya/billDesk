import { Component, Inject, OnInit, Output, EventEmitter } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DemoDataService } from '../demo-data.service';




@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
item: any;
name: any;
type: any;
  constructor(
    private demoDataService: DemoDataService,  public dialogRef: MatDialogRef<MatDialogRef>,
) { }
// tslint:disable-next-line: typedef
ngOnInit(){
  this.demoDataService.getJSON().subscribe(data => {
       this.item = data;
   });
}

openDialog(): void {
  const dialogRef = this.dialogRef.open(MatDialogRef, {
    width: '250px',
    data: {name: 'Angular', type: 'UI'}
  });

  dialogRef.afterClosed().subscribe((result: any) => {
    console.log('The dialog was closed');
    this.name = result;
  });
}

}
