import { Module } from '@nestjs/common';
import { AuthModule } from '../../services/auth/auth.module';
import { ArangodbModule } from '../../libs/arangodb/arangodb.module';
import { ClientModule } from '../../libs/client/client.module';
import { HealthModule } from '../../services/health/health.module';
import { GatewayModule } from '../../services/gateway/gateway.module';

@Module({
  imports: [
    AuthModule,
    ArangodbModule,
    ClientModule,
    HealthModule,
    GatewayModule,
  ],
})
export class MainHttpModule {}
