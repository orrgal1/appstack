import { Module } from '@nestjs/common';
import { DomainServicesModule } from '../../services/domain/domain.services.module';
import { IdentityServicesModule } from '../../services/identity/identity.services.module';
import { InfraServicesModule } from '../../services/infra/infra.services.module';
import { SocialServicesModule } from '../../services/social/social.services.module';
import { MessagingServicesModule } from '../../services/messaging/messaging.services.module';

@Module({
  imports: [
    DomainServicesModule,
    IdentityServicesModule,
    InfraServicesModule,
    SocialServicesModule,
    MessagingServicesModule,
  ],
})
export class GrpcModule {}
