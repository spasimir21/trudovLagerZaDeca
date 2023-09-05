import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { WikiService } from './wiki.service';

@Resolver()
class WikiResolver {
  constructor(private readonly wikiService: WikiService) {}

  @Query(() => Int)
  random(@Args('from', { type: () => Int }) from: number, @Args('to', { type: () => Int }) to: number) {
    return from + Math.floor(Math.random() * (to - from + 1));
  }
}

export { WikiResolver };
