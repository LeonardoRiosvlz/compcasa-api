import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { QuickParaclinicsEvaluationsFeature } from './entities/quick-paraclinics-evaluations.entity';
import { QuickParaclinicsEvaluationsRepository } from './repositories/quick-paraclinics-evaluations.repository';
import { QuickParaclinicsEvaluationsCommandHandlers } from './cqrs/commands';

import { QuickParaclinicsEvaluationsMapper } from './mapper/quick-paraclinics-evaluations.mapper';
import { QuickParaclinicsEvaluationsResolver } from './graphql/resolvers/quick-paraclinics-evaluations.resolver';
import { QuickParaclinicsEvaluationsQueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { QuickParaclinicsEvaluationsEntityService } from './services/quick-paraclinics-evaluations-entity.service';

@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    TenantModule,
    AppCqrsModule,
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([QuickParaclinicsEvaluationsFeature]),

    QuickParaclinicsEvaluationsMapper,
    QuickParaclinicsEvaluationsResolver,
    QuickParaclinicsEvaluationsRepository,
    QuickParaclinicsEvaluationsEntityService,
    QuickParaclinicsEvaluationsResolver,
    ...QuickParaclinicsEvaluationsCommandHandlers,
    ...QuickParaclinicsEvaluationsQueryHandlers,
  ],
  exports: [QuickParaclinicsEvaluationsRepository],

})
export class QuickParaclinicsEvaluationsModule {

}
