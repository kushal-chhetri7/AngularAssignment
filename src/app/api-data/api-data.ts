import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService, Post } from '../services/api';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-api-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './api-data.html',
  styleUrl: './api-data.css'
})
export class ApiDataComponent implements OnInit {
  public posts$: Observable<Post[]> | undefined;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.posts$ = this.apiService.getPosts();
  }
}
