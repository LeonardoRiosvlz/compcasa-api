import { Args, Mutation, Query, Resolver, ResolveField, Parent } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreateQuickMedicalHistoryInput } from '../dto/inputs/create-quick-medical-history.input';
import { QuickMedicalHistoryResponse } from '../dto/responses/quick-medical-history.response';
import { GetAllQuickMedicalHistoryInput } from '../dto/inputs/get-all-quick-medical-history.input';
import { DeleteQuickMedicalHistoryInput } from '../dto/inputs/delete-quick-medical-history.input';
import { CreateQuickMedicalHistoryCommand } from '../../cqrs/commands/impl/create-quick-medical-history.command';
import { DeleteQuickMedicalHistoryCommand } from '../../cqrs/commands/impl/delete-quick-medical-history.command';
import { GetAllQuickMedicalHistoryQuery } from '../../cqrs/queries/impl/get-all-quick-medical-history.query';
import { QuickMedicalHistoryMapper } from '../../mapper/quick-medical-history.mapper';
import { UpdateQuickMedicalHistoryInput } from '../dto/inputs/update-quick-medical-history.input';
import { UpdateQuickMedicalHistoryCommand } from '../../cqrs/commands/impl/update-quick-medical-history.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedQuickMedicalHistoryInput } from '../dto/inputs/get-paginated-quick-medical-history.input';
import { PaginatedQuickMedicalHistoryResponse } from '../dto/responses/paginated-quick-medical-history.response';
import { GetPaginatedQuickMedicalHistoryQuery } from '../../cqrs/queries/impl/get-paginated-quick-medical-history.query';
import { GetOneQuickMedicalHistoryInput } from '../dto/inputs/get-one-quick-medical-history.input';
import { GetOneQuickMedicalHistoryQuery } from '../../cqrs/queries/impl/get-one-quick-medical-history.query';
import { DeleteManyQuickMedicalHistoryInput } from '../dto/inputs/delete-many-quick-medical-history.input';
import { DeleteManyQuickMedicalHistoryCommand } from '../../cqrs/commands/impl/delete-many-quick-medical-history.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { QuickMedicalHistoryEntity } from '../../entities/quick-medical-history.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';

import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';
import { PatientEntity } from 'src/modules/patient/entities/patient.entity';
import { GetOnePatientQuery } from 'src/modules/patient/cqrs/queries/impl/get-one-patient.query';


@Resolver(() => QuickMedicalHistoryResponse)
export class QuickMedicalHistoryResolver extends BaseResolver {
  constructor(
    private readonly _quickMedicalHistoryMapper: QuickMedicalHistoryMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['QUICK_MEDICAL_HISTORY'], action: ACTION_LIST.CREATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createQuickMedicalHistory(
    @Args('input') input: CreateQuickMedicalHistoryInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreateQuickMedicalHistoryCommand(
      this._quickMedicalHistoryMapper.dtoInput2Persistent(input)
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['QUICK_MEDICAL_HISTORY'], action: ACTION_LIST.UPDATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updateQuickMedicalHistory(
    @Args('input') { update, entityId }: UpdateQuickMedicalHistoryInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdateQuickMedicalHistoryCommand(entityId, update ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['QUICK_MEDICAL_HISTORY'], action: ACTION_LIST.DELETE_ONE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteQuickMedicalHistory(
    @Args('input') { entityId }: DeleteQuickMedicalHistoryInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteQuickMedicalHistoryCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['QUICK_MEDICAL_HISTORY'], action: ACTION_LIST.DELETE_MANY})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManyQuickMedicalHistory(
    @Args('input') input: DeleteManyQuickMedicalHistoryInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManyQuickMedicalHistoryCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['QUICK_MEDICAL_HISTORY'], action: ACTION_LIST.GET_ALL})
  @Query(()=>[QuickMedicalHistoryResponse])
  async getAllQuickMedicalHistory(
    @Args('input', { nullable: true }) input: GetAllQuickMedicalHistoryInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<QuickMedicalHistoryResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<QuickMedicalHistoryEntity>>>(new GetAllQuickMedicalHistoryQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._quickMedicalHistoryMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['QUICK_MEDICAL_HISTORY'], action: ACTION_LIST.GET_ONE})
  @Query(() => QuickMedicalHistoryResponse, { nullable: true })
  async getOneQuickMedicalHistory(
    @Args('input', { nullable: true }) input: GetOneQuickMedicalHistoryInput,
    @CurrentLanguage() lang?: string,
  ): Promise<QuickMedicalHistoryResponse> {
    const resp = await this._cqrsBus.execQuery<Result<QuickMedicalHistoryEntity>>(new GetOneQuickMedicalHistoryQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._quickMedicalHistoryMapper.persistent2Dto(resp.unwrap());
  }



  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['QUICK_MEDICAL_HISTORY'], action: ACTION_LIST.GET_PAGINATED})
  @Query(() => PaginatedQuickMedicalHistoryResponse, { nullable: true })
  async getPaginatedQuickMedicalHistory(
    @Args('input', { nullable: true }) input: GetPaginatedQuickMedicalHistoryInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedQuickMedicalHistoryResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<QuickMedicalHistoryEntity>>>(new GetPaginatedQuickMedicalHistoryQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._quickMedicalHistoryMapper.persistent2Dto),
    };
  }

  @ResolveField(() => [SolvedEntityResponse], { nullable: true })
  async patient(@Parent() parent?: QuickMedicalHistoryResponse): Promise<SolvedEntityResponse> {
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
          entityName: PatientEntity.name,
          identifier: patient.firstName,
          fields: [
            {
              field: 'documentNumber',
              value: patient.documentNumber
            },
            {
              field: 'documentType',
              value: patient.documentType
            }
          ]
        }
    }
  }



}
