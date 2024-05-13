import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  featuredPostsArray!: Array<object>;
  latestPostsArray!: Array<object>;

  constructor(private postService: CategoriesService) {  }

  ngOnInit(): void {
    this.postService.loadFeatured().subscribe((val: any) => {
      this.featuredPostsArray = val;
    });

    this.postService.loadLatest().subscribe((val: any) => {
      this.latestPostsArray = val;
    })
    
  }
}
