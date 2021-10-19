import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { QuickPhysicalExamFeature } from './entities/quick-physical-exam.entity';
import { QuickPhysicalExamRepository } from './repositories/quick-physical-exam.repository';
import { QuickPhysicalExamCommandHandlers } from './cqrs/commands';

import { QuickPhysicalExamMapper } from './mapper/quick-physical-exam.mapper';
import { QuickPhysicalExamResolver } from './graphql/resolvers/quick-physical-exam.resolver';
import { QuickPhysicalExamQueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { QuickPhysicalExamEntityService } from './services/quick-physical-exam-entity.service';

@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    TenantModule,
    AppCqrsModule,
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([QuickPhysicalExamFeature]),

    QuickPhysicalExamMapper,
    QuickPhysicalExamResolver,
    QuickPhysicalExamRepository,
    QuickPhysicalExamEntityService,
    QuickPhysicalExamResolver,
    ...QuickPhysicalExamCommandHandlers,
    ...QuickPhysicalExamQueryHandlers,
  ],
  exports: [QuickPhysicalExamRepository],
})
export class QuickPhysicalExamModule {

}
