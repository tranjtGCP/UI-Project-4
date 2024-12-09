import { D } from '@angular/cdk/keycodes';
import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import {
  MatExpansionPanel,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle,
} from '@angular/material/expansion';
import { MatIcon } from '@angular/material/icon';
import { MatFormField, MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioButton, MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterLink, RouterModule } from '@angular/router';
import { Ng2SearchPipe, Ng2SearchPipeModule } from 'ng2-search-filter';

@Component({
  selector: 'app-home',
  imports: [
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatToolbar,
    MatIcon,
    MatExpansionPanel,
    MatExpansionPanelTitle,
    MatExpansionPanelHeader,
    FormsModule,
    MatFormField,
    MatRadioModule,
    MatRadioButton,
    CommonModule,
    RouterLink,
    RouterModule,
  ],
  providers: [Ng2SearchPipeModule, Ng2SearchPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  listings = oListings;

  filterList(filter: string): void {
    this.listings = oListings.filter(
      (l) =>
        l.title.includes(filter) ||
        l.department.includes(filter) ||
        l.position.includes(filter) ||
        l.qualification.includes(filter) ||
        l.department.includes(filter) ||
        l.location.includes(filter)
    );
  }

  checkboxes = [];

  onChange($event: any) {
    this.listings = this.listings.filter(
      (l) => l.location == $event.target.value
    );
  }

  clearList(): void {
    this.listings = oListings;
  }
}

const oListings = [
  {
    picture:
      'https://images.pexels.com/photos/2701434/pexels-photo-2701434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Job1',
    department: 'Department1',
    position: 'Position1',
    qualification: 'Qualification1',
    location: 'Location1',
  },
  {
    picture:
      'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Job2',
    department: 'Department2',
    position: 'Position2',
    qualification: 'Qualification2',
    location: 'Location2',
  },
  {
    picture:
      'https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Job3',
    department: 'Department3',
    position: 'Position3',
    qualification: 'Qualification3',
    location: 'Location3',
  },
  {
    picture:
      'https://images.pexels.com/photos/2159129/pexels-photo-2159129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Job4',
    department: 'Department4',
    position: 'Position4',
    qualification: 'Qualification4',
    location: 'Location4',
  },
  {
    picture:
      'https://images.pexels.com/photos/209271/pexels-photo-209271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Job5',
    department: 'Department5',
    position: 'Position5',
    qualification: 'Qualification5',
    location: 'Location5',
  },
  {
    picture:
      'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Job1',
    department: 'Department6',
    position: 'Position6',
    qualification: 'Qualification6',
    location: 'Location6',
  },
  {
    picture:
      'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Job7',
    department: 'Department7',
    position: 'Position7',
    qualification: 'Qualification7',
    location: 'Location7',
  },
  {
    picture:
      'https://images.pexels.com/photos/210922/pexels-photo-210922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Job8',
    department: 'Department8',
    position: 'Position8',
    qualification: 'Qualification8',
    location: 'Location8',
  },
  {
    picture:
      'https://images.pexels.com/photos/2696064/pexels-photo-2696064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Job9',
    department: 'Department9',
    position: 'Position9',
    qualification: 'Qualification9',
    location: 'Location9',
  },
  {
    picture:
      'https://images.pexels.com/photos/1267324/pexels-photo-1267324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Job10',
    department: 'Department10',
    position: 'Position10',
    qualification: 'Qualification10',
    location: 'Location10',
  },
  {
    picture:
      'https://images.pexels.com/photos/1267324/pexels-photo-1267324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Job11',
    department: 'Department11',
    position: 'Position11',
    qualification: 'Qualification11',
    location: 'Location11',
  },
  {
    picture:
      'https://images.pexels.com/photos/1267324/pexels-photo-1267324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Job12',
    department: 'Department12',
    position: 'Position12',
    qualification: 'Qualification12',
    location: 'Location12',
  },
  {
    picture:
      'https://images.pexels.com/photos/1267324/pexels-photo-1267324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Job13',
    department: 'Department13',
    position: 'Position13',
    qualification: 'Qualification13',
    location: 'Location13',
  },
  {
    picture:
      'https://images.pexels.com/photos/1267324/pexels-photo-1267324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Job14',
    department: 'Department14',
    position: 'Position14',
    qualification: 'Qualification14',
    location: 'Location14',
  },
  {
    picture:
      'https://images.pexels.com/photos/1267324/pexels-photo-1267324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Job15',
    department: 'Department15',
    position: 'Position15',
    qualification: 'Qualification15',
    location: 'Location15',
  },
];
