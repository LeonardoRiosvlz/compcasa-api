import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { PatientFeature } from './entities/patient.entity';
import { PatientRepository } from './repositories/patient.repository';
import { PatientCommandHandlers } from './cqrs/commands';

import { PatientMapper } from './mapper/patient.mapper';
import { PatientResolver } from './graphql/resolvers/patient.resolver';
import { PatientQueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { PatientEntityService } from './services/patient-entity.service';
import { QuickMedicalHistoryModule } from '../quick-medical-history/quick-medical-history.module';

@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    TenantModule,
    QuickMedicalHistoryModule,
    AppCqrsModule,
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([PatientFeature]),

    PatientMapper,
    PatientResolver,
    PatientRepository,
    PatientEntityService,
    PatientResolver,
    ...PatientCommandHandlers,
    ...PatientQueryHandlers,
  ],

})
export class PatientModule {

}
