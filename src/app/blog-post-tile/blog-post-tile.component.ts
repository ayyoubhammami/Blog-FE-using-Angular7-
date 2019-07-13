import { Component, OnInit, Input } from '@angular/core';
import { BlogClass } from '../BlogClass';
import { TruncatePipe } from '../truncate.pipe';

@Component({
  selector: 'app-blog-post-tile',
  templateUrl: './blog-post-tile.component.html',
  styleUrls: ['./blog-post-tile.component.css']
})
export class BlogPostTileComponent implements OnInit {

  constructor(private pipe:TruncatePipe) { }
  @Input() post:BlogClass;
  fullsamury:String;
  var:boolean=true;
  ouvrir(){
    this.post.desc=this.fullsamury;
  }

  ngOnInit() {
    this.fullsamury=this.post.desc;
    this.post.desc=this.pipe.transform(this.post.desc,0);

  }
  favoirFuction(){
    this.post.fav=!this.post.fav;
  }

}
