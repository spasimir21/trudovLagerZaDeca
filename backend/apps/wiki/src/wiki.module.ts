import { DatabaseProvider, models, relationships } from '@lager/database';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigProvider } from '@lager/config';
import { WikiResolver } from './wiki.resolver';
import { WikiService } from './wiki.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true
      // playground: false
    })
  ],
  providers: [ConfigProvider('./config.yml'), DatabaseProvider(models, relationships), WikiService, WikiResolver]
})
export class WikiModule {}
