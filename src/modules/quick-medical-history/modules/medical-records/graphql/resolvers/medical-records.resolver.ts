import { Args, Mutation, Query, Resolver, ResolveField, Parent } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreateMedicalRecordsInput } from '../dto/inputs/create-medical-records.input';
import { MedicalRecordsResponse } from '../dto/responses/medical-records.response';
import { GetAllMedicalRecordsInput } from '../dto/inputs/get-all-medical-records.input';
import { DeleteMedicalRecordsInput } from '../dto/inputs/delete-medical-records.input';
import { CreateMedicalRecordsCommand } from '../../cqrs/commands/impl/create-medical-records.command';
import { DeleteMedicalRecordsCommand } from '../../cqrs/commands/impl/delete-medical-records.command';
import { GetAllMedicalRecordsQuery } from '../../cqrs/queries/impl/get-all-medical-records.query';
import { MedicalRecordsMapper } from '../../mapper/medical-records.mapper';
import { UpdateMedicalRecordsInput } from '../dto/inputs/update-medical-records.input';
import { UpdateMedicalRecordsCommand } from '../../cqrs/commands/impl/update-medical-records.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedMedicalRecordsInput } from '../dto/inputs/get-paginated-medical-records.input';
import { PaginatedMedicalRecordsResponse } from '../dto/responses/paginated-medical-records.response';
import { GetPaginatedMedicalRecordsQuery } from '../../cqrs/queries/impl/get-paginated-medical-records.query';
import { GetOneMedicalRecordsInput } from '../dto/inputs/get-one-medical-records.input';
import { GetOneMedicalRecordsQuery } from '../../cqrs/queries/impl/get-one-medical-records.query';
import { DeleteManyMedicalRecordsInput } from '../dto/inputs/delete-many-medical-records.input';
import { DeleteManyMedicalRecordsCommand } from '../../cqrs/commands/impl/delete-many-medical-records.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { MedicalRecordsEntity } from '../../entities/medical-records.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';

import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';
import { PatientEntity } from 'src/modules/patient/entities/patient.entity';
import { GetOnePatientQuery } from 'src/modules/patient/cqrs/queries/impl/get-one-patient.query';
import { QuickMedicalHistoryEntity } from 'src/modules/quick-medical-history/entities/quick-medical-history.entity';
import { GetOneQuickMedicalHistoryQuery } from 'src/modules/quick-medical-history/cqrs/queries/impl/get-one-quick-medical-history.query';

@Resolver(() => MedicalRecordsResponse)
export class MedicalRecordsResolver extends BaseResolver {
  constructor(
    private readonly _medicalRecordsMapper: MedicalRecordsMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['MEDICAL_RECORDS'], action: ACTION_LIST.CREATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createMedicalRecords(
    @Args('input') input: CreateMedicalRecordsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreateMedicalRecordsCommand(
      this._medicalRecordsMapper.dtoInput2Persistent(input)
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['MEDICAL_RECORDS'], action: ACTION_LIST.UPDATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updateMedicalRecords(
    @Args('input') { update, entityId }: UpdateMedicalRecordsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdateMedicalRecordsCommand(entityId, update ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['MEDICAL_RECORDS'], action: ACTION_LIST.DELETE_ONE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteMedicalRecords(
    @Args('input') { entityId }: DeleteMedicalRecordsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteMedicalRecordsCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['MEDICAL_RECORDS'], action: ACTION_LIST.DELETE_MANY})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManyMedicalRecords(
    @Args('input') input: DeleteManyMedicalRecordsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManyMedicalRecordsCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['MEDICAL_RECORDS'], action: ACTION_LIST.GET_ALL})
  @Query(()=>[MedicalRecordsResponse])
  async getAllMedicalRecords(
    @Args('input', { nullable: true }) input: GetAllMedicalRecordsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<MedicalRecordsResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<MedicalRecordsEntity>>>(new GetAllMedicalRecordsQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._medicalRecordsMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['MEDICAL_RECORDS'], action: ACTION_LIST.GET_ONE})
  @Query(() => MedicalRecordsResponse, { nullable: true })
  async getOneMedicalRecords(
    @Args('input', { nullable: true }) input: GetOneMedicalRecordsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<MedicalRecordsResponse> {
    const resp = await this._cqrsBus.execQuery<Result<MedicalRecordsEntity>>(new GetOneMedicalRecordsQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._medicalRecordsMapper.persistent2Dto(resp.unwrap());
  }



  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['MEDICAL_RECORDS'], action: ACTION_LIST.GET_PAGINATED})
  @Query(() => PaginatedMedicalRecordsResponse, { nullable: true })
  async getPaginatedMedicalRecords(
    @Args('input', { nullable: true }) input: GetPaginatedMedicalRecordsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedMedicalRecordsResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<MedicalRecordsEntity>>>(new GetPaginatedMedicalRecordsQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._medicalRecordsMapper.persistent2Dto),
    };
  }

  @ResolveField(() => [SolvedEntityResponse], { nullable: true })
  async quickMedicalHistory(@Parent() parent?: MedicalRecordsResponse): Promise<SolvedEntityResponse> {
    if (parent?.patient) {
      const quickMedicalHistoryOrErr = await this._cqrsBus.execQuery<Result<QuickMedicalHistoryEntity>>(new GetOneQuickMedicalHistoryQuery({where:{
             id: {eq: parent.patient.id}
        }}));
        if (quickMedicalHistoryOrErr.isFailure) {
          return null;
        }
        const quickMedicalHistory = quickMedicalHistoryOrErr.unwrap();

        return {
          id: quickMedicalHistory.id,
          entityName: PatientEntity.name,
          identifier: quickMedicalHistory.id,
          fields: [
            {
              field: 'responsableName',
              value: quickMedicalHistory?.responsableName
            },
            {
              field: 'companionsName',
              value: quickMedicalHistory?.companionsName
            }
          ]
        }
    }
  }


  @ResolveField(() => [SolvedEntityResponse], { nullable: true })
  async patient(@Parent() parent?: MedicalRecordsResponse): Promise<SolvedEntityResponse> {
    if (parent?.patient) {
      const patientOrErr = await this._cqrsBus.execQuery<Result<PatientEntity>>(new GetOnePatientQuery({where:{
             id: {eq: parent.patient.id}
        }}));
        if (patientOrErr.isFailure) {
          return null;
        }
        const patient = patientOrErr.unwrap();

        return {
          id: patient.id,
          entityName: QuickMedicalHistoryEntity.name,
          identifier: patient.email,
          fields: [
            {
              field: 'firstName',
              value: patient?.firstName
            },
            {
              field: 'lastSurName',
              value: patient?.lastSurName
            }
          ]
        }
    }
  }


}
