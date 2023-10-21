import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent {
  @Input() cardImg: String = ""
  @Input() cardTittle: String = ""
  @Input() cardContent: String = ""
  @Input() Id: String = "0"
}
