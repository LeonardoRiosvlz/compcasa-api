import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { MedicalRecordsFeature } from './entities/medical-records.entity';
import { MedicalRecordsRepository } from './repositories/medical-records.repository';
import { MedicalRecordsCommandHandlers } from './cqrs/commands';

import { MedicalRecordsMapper } from './mapper/medical-records.mapper';
import { MedicalRecordsResolver } from './graphql/resolvers/medical-records.resolver';
import { MedicalRecordsQueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { MedicalRecordsEntityService } from './services/medical-records-entity.service';

@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    TenantModule,
    AppCqrsModule,
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([MedicalRecordsFeature]),

    MedicalRecordsMapper,
    MedicalRecordsResolver,
    MedicalRecordsRepository,
    MedicalRecordsEntityService,
    MedicalRecordsResolver,
    ...MedicalRecordsCommandHandlers,
    ...MedicalRecordsQueryHandlers,
  ],
  exports: [MedicalRecordsRepository],

})
export class MedicalRecordsModule {

}
