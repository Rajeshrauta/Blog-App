import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../../services/categories.service';
// import { PostsService } from '../../services/posts.service';


@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

  postData: any;
  similarPostArray!: Array<object>;

  constructor(private route: ActivatedRoute, private postService: CategoriesService ) { }

  ngOnInit(): void {

      this.route.params.subscribe(val => {

        this.postService.countViews(val['id']);

        this.postService.loadOnePost(val['id']).subscribe((post:any) => {
             this.postData = post;
             this.loadSimilarPost(this.postData.category.categoryId);
          })
      })

      
  }

  loadSimilarPost(catId:any) {
    this.postService.loadSimilar(catId).subscribe((val: any) => {
      this.similarPostArray = val;
    })
  }



}
