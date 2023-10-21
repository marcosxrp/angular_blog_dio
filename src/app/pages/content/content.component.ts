import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  contentImg: String = "";
  contentTittle: String = "";
  contentText: String = "";
  private id: String | null = "0"

  constructor(
    private route:ActivatedRoute
  ) {}

  ngOnInit(): void{
    this.route.paramMap.subscribe(value => this.id = value.get("id"))

    this.setValueToComponents(this.id)
  }

  setValueToComponents(id: String | null){
    const result = dataFake.filter(article => article.id == id)[0]

    this.contentImg = result.photo
    this.contentTittle = result.tittle
    this.contentText = result.text
  }
}
