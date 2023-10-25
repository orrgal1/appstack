import { Module } from '@nestjs/common';
import { DomainServicesModule } from './domain/domain.services.module';
import { IdentityServicesModule } from './identity/identity.services.module';
import { InfraServicesModule } from './infra/infra.services.module';
import { SocialServicesModule } from './social/social.services.module';

@Module({
  imports: [
    DomainServicesModule,
    IdentityServicesModule,
    InfraServicesModule,
    SocialServicesModule,
  ],
})
export class ServicesModule {}
