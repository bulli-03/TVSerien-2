import { Component, OnInit } from '@angular/core';
import { ShowDataService } from "../../service/show-data.service";
import {Show} from "../../model/show";

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit {
  show: Show;
  editShow: Show;

  constructor(private showDataService: ShowDataService) {}

  ngOnInit(): void {
  }

  toEdit(show: Show): boolean {
    if (!this.editShow) {
      return false;
    } else if (this.editShow !== show) {
      return false;
    } else {
      return true;
    }
  }

  edit(show: Show){
    this.editShow = show;
  }

  saveEdit(){
    this.showDataService.updateShow(this.editShow);
    this.editShow = null;
  }

  delete(show: Show){
    this.showDataService.deleteShow(show);
  }

  get shows(): Show[ ] {
    return this.showDataService.shows;
  }

  showDetails(show: Show){
    this.showDataService.showShowDetails(show);
  }
}
