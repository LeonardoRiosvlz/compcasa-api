import { Args, Mutation, Query, Resolver, ResolveField, Parent } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreateQuickComprehensiveManagementInput } from '../dto/inputs/create-quick-comprehensive-management.input';
import { QuickComprehensiveManagementResponse } from '../dto/responses/quick-comprehensive-management.response';
import { GetAllQuickComprehensiveManagementInput } from '../dto/inputs/get-all-quick-comprehensive-management.input';
import { DeleteQuickComprehensiveManagementInput } from '../dto/inputs/delete-quick-comprehensive-management.input';
import { CreateQuickComprehensiveManagementCommand } from '../../cqrs/commands/impl/create-quick-comprehensive-management.command';
import { DeleteQuickComprehensiveManagementCommand } from '../../cqrs/commands/impl/delete-quick-comprehensive-management.command';
import { GetAllQuickComprehensiveManagementQuery } from '../../cqrs/queries/impl/get-all-quick-comprehensive-management.query';
import { QuickComprehensiveManagementMapper } from '../../mapper/quick-comprehensive-management.mapper';
import { UpdateQuickComprehensiveManagementInput } from '../dto/inputs/update-quick-comprehensive-management.input';
import { UpdateQuickComprehensiveManagementCommand } from '../../cqrs/commands/impl/update-quick-comprehensive-management.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedQuickComprehensiveManagementInput } from '../dto/inputs/get-paginated-quick-comprehensive-management.input';
import { PaginatedQuickComprehensiveManagementResponse } from '../dto/responses/paginated-quick-comprehensive-management.response';
import { GetPaginatedQuickComprehensiveManagementQuery } from '../../cqrs/queries/impl/get-paginated-quick-comprehensive-management.query';
import { GetOneQuickComprehensiveManagementInput } from '../dto/inputs/get-one-quick-comprehensive-management.input';
import { GetOneQuickComprehensiveManagementQuery } from '../../cqrs/queries/impl/get-one-quick-comprehensive-management.query';
import { DeleteManyQuickComprehensiveManagementInput } from '../dto/inputs/delete-many-quick-comprehensive-management.input';
import { DeleteManyQuickComprehensiveManagementCommand } from '../../cqrs/commands/impl/delete-many-quick-comprehensive-management.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { QuickComprehensiveManagementEntity } from '../../entities/quick-comprehensive-management.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';


import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';
import { PatientEntity } from 'src/modules/patient/entities/patient.entity';
import { GetOnePatientQuery } from 'src/modules/patient/cqrs/queries/impl/get-one-patient.query';
import { QuickMedicalHistoryEntity } from 'src/modules/quick-medical-history/entities/quick-medical-history.entity';
import { GetOneQuickMedicalHistoryQuery } from 'src/modules/quick-medical-history/cqrs/queries/impl/get-one-quick-medical-history.query';



@Resolver(() => QuickComprehensiveManagementResponse)
export class QuickComprehensiveManagementResolver extends BaseResolver {
  constructor(
    private readonly _quickComprehensiveManagementMapper: QuickComprehensiveManagementMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['QUICK_COMPREHENSIVE_MANAGEMENT'], action: ACTION_LIST.CREATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createQuickComprehensiveManagement(
    @Args('input') input: CreateQuickComprehensiveManagementInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreateQuickComprehensiveManagementCommand(
      this._quickComprehensiveManagementMapper.dtoInput2Persistent(input)
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['QUICK_COMPREHENSIVE_MANAGEMENT'], action: ACTION_LIST.UPDATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updateQuickComprehensiveManagement(
    @Args('input') { update, entityId }: UpdateQuickComprehensiveManagementInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdateQuickComprehensiveManagementCommand(entityId, update ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['QUICK_COMPREHENSIVE_MANAGEMENT'], action: ACTION_LIST.DELETE_ONE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteQuickComprehensiveManagement(
    @Args('input') { entityId }: DeleteQuickComprehensiveManagementInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteQuickComprehensiveManagementCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['QUICK_COMPREHENSIVE_MANAGEMENT'], action: ACTION_LIST.DELETE_MANY})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManyQuickComprehensiveManagement(
    @Args('input') input: DeleteManyQuickComprehensiveManagementInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManyQuickComprehensiveManagementCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['QUICK_COMPREHENSIVE_MANAGEMENT'], action: ACTION_LIST.GET_ALL})
  @Query(()=>[QuickComprehensiveManagementResponse])
  async getAllQuickComprehensiveManagement(
    @Args('input', { nullable: true }) input: GetAllQuickComprehensiveManagementInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<QuickComprehensiveManagementResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<QuickComprehensiveManagementEntity>>>(new GetAllQuickComprehensiveManagementQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._quickComprehensiveManagementMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['QUICK_COMPREHENSIVE_MANAGEMENT'], action: ACTION_LIST.GET_ONE})
  @Query(() => QuickComprehensiveManagementResponse, { nullable: true })
  async getOneQuickComprehensiveManagement(
    @Args('input', { nullable: true }) input: GetOneQuickComprehensiveManagementInput,
    @CurrentLanguage() lang?: string,
  ): Promise<QuickComprehensiveManagementResponse> {
    const resp = await this._cqrsBus.execQuery<Result<QuickComprehensiveManagementEntity>>(new GetOneQuickComprehensiveManagementQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._quickComprehensiveManagementMapper.persistent2Dto(resp.unwrap());
  }



  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['QUICK_COMPREHENSIVE_MANAGEMENT'], action: ACTION_LIST.GET_PAGINATED})
  @Query(() => PaginatedQuickComprehensiveManagementResponse, { nullable: true })
  async getPaginatedQuickComprehensiveManagement(
    @Args('input', { nullable: true }) input: GetPaginatedQuickComprehensiveManagementInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedQuickComprehensiveManagementResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<QuickComprehensiveManagementEntity>>>(new GetPaginatedQuickComprehensiveManagementQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._quickComprehensiveManagementMapper.persistent2Dto),
    };
  }


  @ResolveField(() => [SolvedEntityResponse], { nullable: true })
  async quickMedicalHistory(@Parent() parent?: QuickComprehensiveManagementResponse): Promise<SolvedEntityResponse> {
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
  async patient(@Parent() parent?: QuickComprehensiveManagementResponse): Promise<SolvedEntityResponse> {
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
