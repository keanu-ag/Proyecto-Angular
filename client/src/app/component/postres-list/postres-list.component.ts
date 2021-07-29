import { Component, HostBinding, OnInit } from '@angular/core';
import { PostresService } from '../../services/postres.service';

@Component({
  selector: 'app-postres-list',
  templateUrl: './postres-list.component.html',
  styleUrls: ['./postres-list.component.css']
})
export class PostresListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  postres: any = [];

  constructor(private postresService: PostresService) { }

  ngOnInit(): void {
    this.postresService.getPostres().subscribe(
      res => {
        this.postres = res;
      },
      err => console.error(err)
    )
  }

}
