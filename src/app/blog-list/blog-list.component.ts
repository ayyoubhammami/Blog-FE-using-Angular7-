import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { BlogClass } from '../BlogClass';
import { BlogPostTileComponent } from '../blog-post-tile/blog-post-tile.component';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  blogPosts: BlogClass[][];
  currentPage:number;
  // @ViewChild('tile') childComponent: BlogPostTileComponent;
  @ViewChildren('tile') childrenComponent: QueryList<BlogPostTileComponent>;
  constructor() { }

  expandAll()
  {
    // this.childComponent.ouvrir();
    this.childrenComponent.
   forEach(e => e.ouvrir());
  }

  ngOnInit() {
    this.currentPage=0;
    this.blogPosts=[
      [
        {
          titre:"blogPost 1",
          desc:"summary 1shshshhhhhhshshshhhhhhhhhhhhhhhhhhhkkkk"
        },
        {
          titre:"blogPost 2",
          desc:"summary 2 hshshhhhhhshshshhhhhhhhhhhhhhh"
        },
        {
          titre:"blogPost 3",
          desc:"summary 3"
        }
      ],
      [
        {
          titre:"blogPost 4",
          desc:"summary 4"
        },
        {
          titre:"blogPost 5",
          desc:"summary 5"
        },
        {
          titre:"blogPost 6",
          desc:"summary 6"
        }
      ],
      [
        {
          titre:"blogPost 7",
          desc:"summary 7"
        },
        {
          titre:"blogPost 8",
          desc:"summary 8"
        },
        {
          titre:"blogPost 9",
          desc:"summary 9 ihzecoizeckzl,ceznzeocnnuuuuuuuzecoizeckzl,ceznzeocnnuuuuuuuuuuuuuuuuuuuuuulll"
        }
      ]
    ]
    // this.blogPosts.push(new BlogClass("blogPost 1","summary 1"));
    // this.blogPosts.push(new BlogClass("blogPost 2","summary 2 "));
    // this.blogPosts.push(new BlogClass("blogPost 3","summary 3 ihzecoizeckzl,ceznzeocnnuuuuuuuzecoizeckzl,ceznzeocnnuuuuuuuuuuuuuuuuuuuuuulll "));
  }

  updatePage(newPage){
    console.log("rhfoilk")
    this.currentPage=newPage
  }
}
