import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent {
  @Input() cardImg: String = ""
  @Input() cardTittle: String = ""
  @Input() cardContent: String = ""
  @Input() Id: String = "0"
}
