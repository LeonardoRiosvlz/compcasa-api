import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { PharmacologicalManagementFeature } from './entities/pharmacological-management.entity';
import { PharmacologicalManagementRepository } from './repositories/pharmacological-management.repository';
import { PharmacologicalManagementCommandHandlers } from './cqrs/commands';

import { PharmacologicalManagementMapper } from './mapper/pharmacological-management.mapper';
import { PharmacologicalManagementResolver } from './graphql/resolvers/pharmacological-management.resolver';
import { PharmacologicalManagementQueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { PharmacologicalManagementEntityService } from './services/pharmacological-management-entity.service';

@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    TenantModule,
    AppCqrsModule,
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([PharmacologicalManagementFeature]),

    PharmacologicalManagementMapper,
    PharmacologicalManagementResolver,
    PharmacologicalManagementRepository,
    PharmacologicalManagementEntityService,
    PharmacologicalManagementResolver,
    ...PharmacologicalManagementCommandHandlers,
    ...PharmacologicalManagementQueryHandlers,
  ],
  exports: [PharmacologicalManagementRepository],

})
export class PharmacologicalManagementModule {

}
