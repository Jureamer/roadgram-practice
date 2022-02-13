import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ArticlesController } from './articles/articles.controller';
import { ArticlesModule } from './articles/articles.module';
import { FollowModule } from './follow/follow.module';
import { LikeModule } from './like/like.module';
import { SearchModule } from './search/search.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './configs/typeorm.config';
import { TestModule } from './test/test.module';

@Module({
  imports: [
    UsersModule, 
    ArticlesModule, 
    FollowModule, 
    LikeModule, 
    SearchModule,
    TypeOrmModule.forRoot(typeOrmConfig),
    TestModule],
  controllers: [AppController, ArticlesController],
  providers: [AppService],
})
export class AppModule {}
