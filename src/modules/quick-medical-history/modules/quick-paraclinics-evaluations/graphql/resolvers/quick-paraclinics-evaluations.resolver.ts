import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreateQuickParaclinicsEvaluationsInput } from '../dto/inputs/create-quick-paraclinics-evaluations.input';
import { QuickParaclinicsEvaluationsResponse } from '../dto/responses/quick-paraclinics-evaluations.response';
import { GetAllQuickParaclinicsEvaluationsInput } from '../dto/inputs/get-all-quick-paraclinics-evaluations.input';
import { DeleteQuickParaclinicsEvaluationsInput } from '../dto/inputs/delete-quick-paraclinics-evaluations.input';
import { CreateQuickParaclinicsEvaluationsCommand } from '../../cqrs/commands/impl/create-quick-paraclinics-evaluations.command';
import { DeleteQuickParaclinicsEvaluationsCommand } from '../../cqrs/commands/impl/delete-quick-paraclinics-evaluations.command';
import { GetAllQuickParaclinicsEvaluationsQuery } from '../../cqrs/queries/impl/get-all-quick-paraclinics-evaluations.query';
import { QuickParaclinicsEvaluationsMapper } from '../../mapper/quick-paraclinics-evaluations.mapper';
import { UpdateQuickParaclinicsEvaluationsInput } from '../dto/inputs/update-quick-paraclinics-evaluations.input';
import { UpdateQuickParaclinicsEvaluationsCommand } from '../../cqrs/commands/impl/update-quick-paraclinics-evaluations.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedQuickParaclinicsEvaluationsInput } from '../dto/inputs/get-paginated-quick-paraclinics-evaluations.input';
import { PaginatedQuickParaclinicsEvaluationsResponse } from '../dto/responses/paginated-quick-paraclinics-evaluations.response';
import { GetPaginatedQuickParaclinicsEvaluationsQuery } from '../../cqrs/queries/impl/get-paginated-quick-paraclinics-evaluations.query';
import { GetOneQuickParaclinicsEvaluationsInput } from '../dto/inputs/get-one-quick-paraclinics-evaluations.input';
import { GetOneQuickParaclinicsEvaluationsQuery } from '../../cqrs/queries/impl/get-one-quick-paraclinics-evaluations.query';
import { DeleteManyQuickParaclinicsEvaluationsInput } from '../dto/inputs/delete-many-quick-paraclinics-evaluations.input';
import { DeleteManyQuickParaclinicsEvaluationsCommand } from '../../cqrs/commands/impl/delete-many-quick-paraclinics-evaluations.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { QuickParaclinicsEvaluationsEntity } from '../../entities/quick-paraclinics-evaluations.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';


@Resolver(() => QuickParaclinicsEvaluationsResponse)
export class QuickParaclinicsEvaluationsResolver extends BaseResolver {
  constructor(
    private readonly _quickParaclinicsEvaluationsMapper: QuickParaclinicsEvaluationsMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['QUICK_PARACLINICS_EVALUATIONS'], action: ACTION_LIST.CREATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createQuickParaclinicsEvaluations(
    @Args('input') input: CreateQuickParaclinicsEvaluationsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreateQuickParaclinicsEvaluationsCommand(
      this._quickParaclinicsEvaluationsMapper.dtoInput2Persistent(input)
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['QUICK_PARACLINICS_EVALUATIONS'], action: ACTION_LIST.UPDATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updateQuickParaclinicsEvaluations(
    @Args('input') { update, entityId }: UpdateQuickParaclinicsEvaluationsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdateQuickParaclinicsEvaluationsCommand(entityId, update ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['QUICK_PARACLINICS_EVALUATIONS'], action: ACTION_LIST.DELETE_ONE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteQuickParaclinicsEvaluations(
    @Args('input') { entityId }: DeleteQuickParaclinicsEvaluationsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteQuickParaclinicsEvaluationsCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['QUICK_PARACLINICS_EVALUATIONS'], action: ACTION_LIST.DELETE_MANY})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManyQuickParaclinicsEvaluations(
    @Args('input') input: DeleteManyQuickParaclinicsEvaluationsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManyQuickParaclinicsEvaluationsCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['QUICK_PARACLINICS_EVALUATIONS'], action: ACTION_LIST.GET_ALL})
  @Query(()=>[QuickParaclinicsEvaluationsResponse])
  async getAllQuickParaclinicsEvaluations(
    @Args('input', { nullable: true }) input: GetAllQuickParaclinicsEvaluationsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<QuickParaclinicsEvaluationsResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<QuickParaclinicsEvaluationsEntity>>>(new GetAllQuickParaclinicsEvaluationsQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._quickParaclinicsEvaluationsMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['QUICK_PARACLINICS_EVALUATIONS'], action: ACTION_LIST.GET_ONE})
  @Query(() => QuickParaclinicsEvaluationsResponse, { nullable: true })
  async getOneQuickParaclinicsEvaluations(
    @Args('input', { nullable: true }) input: GetOneQuickParaclinicsEvaluationsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<QuickParaclinicsEvaluationsResponse> {
    const resp = await this._cqrsBus.execQuery<Result<QuickParaclinicsEvaluationsEntity>>(new GetOneQuickParaclinicsEvaluationsQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._quickParaclinicsEvaluationsMapper.persistent2Dto(resp.unwrap());
  }



  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['QUICK_PARACLINICS_EVALUATIONS'], action: ACTION_LIST.GET_PAGINATED})
  @Query(() => PaginatedQuickParaclinicsEvaluationsResponse, { nullable: true })
  async getPaginatedQuickParaclinicsEvaluations(
    @Args('input', { nullable: true }) input: GetPaginatedQuickParaclinicsEvaluationsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedQuickParaclinicsEvaluationsResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<QuickParaclinicsEvaluationsEntity>>>(new GetPaginatedQuickParaclinicsEvaluationsQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._quickParaclinicsEvaluationsMapper.persistent2Dto),
    };
  }


}
