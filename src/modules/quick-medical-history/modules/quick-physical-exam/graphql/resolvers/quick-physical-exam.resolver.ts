import { Args, Mutation, Query, Resolver, ResolveField, Parent } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreateQuickPhysicalExamInput } from '../dto/inputs/create-quick-physical-exam.input';
import { QuickPhysicalExamResponse } from '../dto/responses/quick-physical-exam.response';
import { GetAllQuickPhysicalExamInput } from '../dto/inputs/get-all-quick-physical-exam.input';
import { DeleteQuickPhysicalExamInput } from '../dto/inputs/delete-quick-physical-exam.input';
import { CreateQuickPhysicalExamCommand } from '../../cqrs/commands/impl/create-quick-physical-exam.command';
import { DeleteQuickPhysicalExamCommand } from '../../cqrs/commands/impl/delete-quick-physical-exam.command';
import { GetAllQuickPhysicalExamQuery } from '../../cqrs/queries/impl/get-all-quick-physical-exam.query';
import { QuickPhysicalExamMapper } from '../../mapper/quick-physical-exam.mapper';
import { UpdateQuickPhysicalExamInput } from '../dto/inputs/update-quick-physical-exam.input';
import { UpdateQuickPhysicalExamCommand } from '../../cqrs/commands/impl/update-quick-physical-exam.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedQuickPhysicalExamInput } from '../dto/inputs/get-paginated-quick-physical-exam.input';
import { PaginatedQuickPhysicalExamResponse } from '../dto/responses/paginated-quick-physical-exam.response';
import { GetPaginatedQuickPhysicalExamQuery } from '../../cqrs/queries/impl/get-paginated-quick-physical-exam.query';
import { GetOneQuickPhysicalExamInput } from '../dto/inputs/get-one-quick-physical-exam.input';
import { GetOneQuickPhysicalExamQuery } from '../../cqrs/queries/impl/get-one-quick-physical-exam.query';
import { DeleteManyQuickPhysicalExamInput } from '../dto/inputs/delete-many-quick-physical-exam.input';
import { DeleteManyQuickPhysicalExamCommand } from '../../cqrs/commands/impl/delete-many-quick-physical-exam.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { QuickPhysicalExamEntity } from '../../entities/quick-physical-exam.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';


import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';
import { PatientEntity } from 'src/modules/patient/entities/patient.entity';
import { GetOnePatientQuery } from 'src/modules/patient/cqrs/queries/impl/get-one-patient.query';
import { QuickMedicalHistoryEntity } from 'src/modules/quick-medical-history/entities/quick-medical-history.entity';
import { GetOneQuickMedicalHistoryQuery } from 'src/modules/quick-medical-history/cqrs/queries/impl/get-one-quick-medical-history.query';



@Resolver(() => QuickPhysicalExamResponse)
export class QuickPhysicalExamResolver extends BaseResolver {
  constructor(
    private readonly _quickPhysicalExamMapper: QuickPhysicalExamMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['QUICK_PHYSICAL_EXAM'], action: ACTION_LIST.CREATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createQuickPhysicalExam(
    @Args('input') input: CreateQuickPhysicalExamInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreateQuickPhysicalExamCommand(
      this._quickPhysicalExamMapper.dtoInput2Persistent(input)
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['QUICK_PHYSICAL_EXAM'], action: ACTION_LIST.UPDATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updateQuickPhysicalExam(
    @Args('input') { update, entityId }: UpdateQuickPhysicalExamInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdateQuickPhysicalExamCommand(entityId, update ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['QUICK_PHYSICAL_EXAM'], action: ACTION_LIST.DELETE_ONE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteQuickPhysicalExam(
    @Args('input') { entityId }: DeleteQuickPhysicalExamInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteQuickPhysicalExamCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['QUICK_PHYSICAL_EXAM'], action: ACTION_LIST.DELETE_MANY})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManyQuickPhysicalExam(
    @Args('input') input: DeleteManyQuickPhysicalExamInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManyQuickPhysicalExamCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['QUICK_PHYSICAL_EXAM'], action: ACTION_LIST.GET_ALL})
  @Query(()=>[QuickPhysicalExamResponse])
  async getAllQuickPhysicalExam(
    @Args('input', { nullable: true }) input: GetAllQuickPhysicalExamInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<QuickPhysicalExamResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<QuickPhysicalExamEntity>>>(new GetAllQuickPhysicalExamQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._quickPhysicalExamMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['QUICK_PHYSICAL_EXAM'], action: ACTION_LIST.GET_ONE})
  @Query(() => QuickPhysicalExamResponse, { nullable: true })
  async getOneQuickPhysicalExam(
    @Args('input', { nullable: true }) input: GetOneQuickPhysicalExamInput,
    @CurrentLanguage() lang?: string,
  ): Promise<QuickPhysicalExamResponse> {
    const resp = await this._cqrsBus.execQuery<Result<QuickPhysicalExamEntity>>(new GetOneQuickPhysicalExamQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._quickPhysicalExamMapper.persistent2Dto(resp.unwrap());
  }



  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['QUICK_PHYSICAL_EXAM'], action: ACTION_LIST.GET_PAGINATED})
  @Query(() => PaginatedQuickPhysicalExamResponse, { nullable: true })
  async getPaginatedQuickPhysicalExam(
    @Args('input', { nullable: true }) input: GetPaginatedQuickPhysicalExamInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedQuickPhysicalExamResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<QuickPhysicalExamEntity>>>(new GetPaginatedQuickPhysicalExamQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._quickPhysicalExamMapper.persistent2Dto),
    };
  }


  
  @ResolveField(() => [SolvedEntityResponse], { nullable: true })
  async quickMedicalHistory(@Parent() parent?: QuickPhysicalExamResponse): Promise<SolvedEntityResponse> {
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
  async patient(@Parent() parent?: QuickPhysicalExamResponse): Promise<SolvedEntityResponse> {
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
