import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-title',
  imports: [RouterLink, MatButtonModule],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss',
})
export class TitleComponent {}
