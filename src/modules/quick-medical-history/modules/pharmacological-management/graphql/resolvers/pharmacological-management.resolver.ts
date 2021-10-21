import { Args, Mutation, Query, Resolver, ResolveField, Parent } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreatePharmacologicalManagementInput } from '../dto/inputs/create-pharmacological-management.input';
import { PharmacologicalManagementResponse } from '../dto/responses/pharmacological-management.response';
import { GetAllPharmacologicalManagementInput } from '../dto/inputs/get-all-pharmacological-management.input';
import { DeletePharmacologicalManagementInput } from '../dto/inputs/delete-pharmacological-management.input';
import { CreatePharmacologicalManagementCommand } from '../../cqrs/commands/impl/create-pharmacological-management.command';
import { DeletePharmacologicalManagementCommand } from '../../cqrs/commands/impl/delete-pharmacological-management.command';
import { GetAllPharmacologicalManagementQuery } from '../../cqrs/queries/impl/get-all-pharmacological-management.query';
import { PharmacologicalManagementMapper } from '../../mapper/pharmacological-management.mapper';
import { UpdatePharmacologicalManagementInput } from '../dto/inputs/update-pharmacological-management.input';
import { UpdatePharmacologicalManagementCommand } from '../../cqrs/commands/impl/update-pharmacological-management.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedPharmacologicalManagementInput } from '../dto/inputs/get-paginated-pharmacological-management.input';
import { PaginatedPharmacologicalManagementResponse } from '../dto/responses/paginated-pharmacological-management.response';
import { GetPaginatedPharmacologicalManagementQuery } from '../../cqrs/queries/impl/get-paginated-pharmacological-management.query';
import { GetOnePharmacologicalManagementInput } from '../dto/inputs/get-one-pharmacological-management.input';
import { GetOnePharmacologicalManagementQuery } from '../../cqrs/queries/impl/get-one-pharmacological-management.query';
import { DeleteManyPharmacologicalManagementInput } from '../dto/inputs/delete-many-pharmacological-management.input';
import { DeleteManyPharmacologicalManagementCommand } from '../../cqrs/commands/impl/delete-many-pharmacological-management.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { PharmacologicalManagementEntity } from '../../entities/pharmacological-management.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';

import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';
import { PatientEntity } from 'src/modules/patient/entities/patient.entity';
import { GetOnePatientQuery } from 'src/modules/patient/cqrs/queries/impl/get-one-patient.query';
import { QuickMedicalHistoryEntity } from 'src/modules/quick-medical-history/entities/quick-medical-history.entity';
import { GetOneQuickMedicalHistoryQuery } from 'src/modules/quick-medical-history/cqrs/queries/impl/get-one-quick-medical-history.query';



@Resolver(() => PharmacologicalManagementResponse)
export class PharmacologicalManagementResolver extends BaseResolver {
  constructor(
    private readonly _pharmacologicalManagementMapper: PharmacologicalManagementMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['PHARMACOLOGICAL_MANAGEMENT'], action: ACTION_LIST.CREATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createPharmacologicalManagement(
    @Args('input') input: CreatePharmacologicalManagementInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreatePharmacologicalManagementCommand(
      this._pharmacologicalManagementMapper.dtoInput2Persistent(input)
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['PHARMACOLOGICAL_MANAGEMENT'], action: ACTION_LIST.UPDATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updatePharmacologicalManagement(
    @Args('input') { update, entityId }: UpdatePharmacologicalManagementInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdatePharmacologicalManagementCommand(entityId, update ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['PHARMACOLOGICAL_MANAGEMENT'], action: ACTION_LIST.DELETE_ONE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deletePharmacologicalManagement(
    @Args('input') { entityId }: DeletePharmacologicalManagementInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeletePharmacologicalManagementCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['PHARMACOLOGICAL_MANAGEMENT'], action: ACTION_LIST.DELETE_MANY})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManyPharmacologicalManagement(
    @Args('input') input: DeleteManyPharmacologicalManagementInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManyPharmacologicalManagementCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['PHARMACOLOGICAL_MANAGEMENT'], action: ACTION_LIST.GET_ALL})
  @Query(()=>[PharmacologicalManagementResponse])
  async getAllPharmacologicalManagement(
    @Args('input', { nullable: true }) input: GetAllPharmacologicalManagementInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<PharmacologicalManagementResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<PharmacologicalManagementEntity>>>(new GetAllPharmacologicalManagementQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._pharmacologicalManagementMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['PHARMACOLOGICAL_MANAGEMENT'], action: ACTION_LIST.GET_ONE})
  @Query(() => PharmacologicalManagementResponse, { nullable: true })
  async getOnePharmacologicalManagement(
    @Args('input', { nullable: true }) input: GetOnePharmacologicalManagementInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PharmacologicalManagementResponse> {
    const resp = await this._cqrsBus.execQuery<Result<PharmacologicalManagementEntity>>(new GetOnePharmacologicalManagementQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._pharmacologicalManagementMapper.persistent2Dto(resp.unwrap());
  }



  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['PHARMACOLOGICAL_MANAGEMENT'], action: ACTION_LIST.GET_PAGINATED})
  @Query(() => PaginatedPharmacologicalManagementResponse, { nullable: true })
  async getPaginatedPharmacologicalManagement(
    @Args('input', { nullable: true }) input: GetPaginatedPharmacologicalManagementInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedPharmacologicalManagementResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<PharmacologicalManagementEntity>>>(new GetPaginatedPharmacologicalManagementQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._pharmacologicalManagementMapper.persistent2Dto),
    };
  }


  
  @ResolveField(() => [SolvedEntityResponse], { nullable: true })
  async quickMedicalHistory(@Parent() parent?: PharmacologicalManagementResponse): Promise<SolvedEntityResponse> {
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
              field: 'responsibleName',
              value: quickMedicalHistory?.responsibleName
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
  async patient(@Parent() parent?: PharmacologicalManagementResponse): Promise<SolvedEntityResponse> {
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
