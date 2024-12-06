import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Post } from './posts.entity';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class PostsService {
  private readonly apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private readonly httpService: HttpService) {}

  async getAllPosts(): Promise<Post[]> {
    const response = this.httpService.get<Post[]>(`${this.apiUrl}/posts`);
    return lastValueFrom(response).then((res) => res.data);
  }

  async getPostById(id: number): Promise<Post> {
    const response = this.httpService.get<Post>(`${this.apiUrl}/posts/${id}`);
    return lastValueFrom(response).then((res) => res.data);
  }
}

