import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { Post } from './posts.entity';

@Resolver(() => Post)
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  @Query(() => [Post], { name: 'getAllPosts' })
  async getAllPosts(): Promise<Post[]> {
    return this.postsService.getAllPosts();
  }

  @Query(() => Post, { name: 'getPostById' })
  async getPostById(@Args('id', { type: () => Int }) id: number): Promise<Post> {
    return this.postsService.getPostById(id);
  }
}
