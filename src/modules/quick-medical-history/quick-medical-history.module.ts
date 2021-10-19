import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { QuickMedicalHistoryFeature } from './entities/quick-medical-history.entity';
import { QuickMedicalHistoryRepository } from './repositories/quick-medical-history.repository';
import { QuickMedicalHistoryCommandHandlers } from './cqrs/commands';

import { QuickMedicalHistoryMapper } from './mapper/quick-medical-history.mapper';
import { QuickMedicalHistoryResolver } from './graphql/resolvers/quick-medical-history.resolver';
import { QuickMedicalHistoryQueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { QuickMedicalHistoryEntityService } from './services/quick-medical-history-entity.service';
import { MedicalRecordsModule } from './modules/medical-records/medical-records.module';
import { QuickPhysicalExamModule } from './modules/quick-physical-exam/quick-physical-exam.module';
import { PharmacologicalManagementModule } from './modules/pharmacological-management/pharmacological-management.module';
import { QuickComprehensiveManagementModule } from './modules/quick-comprehensive-management/quick-comprehensive-management.module';
import { QuickParaclinicsEvaluationsModule } from './modules/quick-paraclinics-evaluations/quick-paraclinics-evaluations.module';

@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    TenantModule,
    MedicalRecordsModule,
    QuickPhysicalExamModule,
    PharmacologicalManagementModule,
    QuickComprehensiveManagementModule,
    QuickParaclinicsEvaluationsModule,
    AppCqrsModule,
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([QuickMedicalHistoryFeature]),

    QuickMedicalHistoryMapper,
    QuickMedicalHistoryResolver,
    QuickMedicalHistoryRepository,
    QuickMedicalHistoryEntityService,
    QuickMedicalHistoryResolver,
    
    ...QuickMedicalHistoryCommandHandlers,
    ...QuickMedicalHistoryQueryHandlers,
  ],
  exports: [QuickMedicalHistoryRepository],

})
export class QuickMedicalHistoryModule {

}
