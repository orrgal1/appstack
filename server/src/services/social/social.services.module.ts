import { Module } from '@nestjs/common';
import { ArangodbModule } from '../../libs/arangodb/arangodb.module';
import { ClientModule } from '../../libs/client/client.module';
import { UserFollowModule } from './follow/userFollow.module';

@Module({
  imports: [UserFollowModule, ArangodbModule, ClientModule],
})
export class SocialServicesModule {}
