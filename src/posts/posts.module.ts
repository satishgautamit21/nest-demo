import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { PostsService } from './posts.service';
import { PostsResolver } from './posts.resolver';

@Module({
  imports: [HttpModule],
  providers: [PostsService, PostsResolver],
})
export class PostsModule {}
