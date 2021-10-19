import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { QuickComprehensiveManagementFeature } from './entities/quick-comprehensive-management.entity';
import { QuickComprehensiveManagementRepository } from './repositories/quick-comprehensive-management.repository';
import { QuickComprehensiveManagementCommandHandlers } from './cqrs/commands';

import { QuickComprehensiveManagementMapper } from './mapper/quick-comprehensive-management.mapper';
import { QuickComprehensiveManagementResolver } from './graphql/resolvers/quick-comprehensive-management.resolver';
import { QuickComprehensiveManagementQueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { QuickComprehensiveManagementEntityService } from './services/quick-comprehensive-management-entity.service';

@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    TenantModule,
    AppCqrsModule,
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([QuickComprehensiveManagementFeature]),

    QuickComprehensiveManagementMapper,
    QuickComprehensiveManagementResolver,
    QuickComprehensiveManagementRepository,
    QuickComprehensiveManagementEntityService,
    QuickComprehensiveManagementResolver,
    ...QuickComprehensiveManagementCommandHandlers,
    ...QuickComprehensiveManagementQueryHandlers,
  ],
  exports: [QuickComprehensiveManagementRepository],

})
export class QuickComprehensiveManagementModule {

}
