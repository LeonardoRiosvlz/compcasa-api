import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreatePatientInput } from '../dto/inputs/create-patient.input';
import { PatientResponse } from '../dto/responses/patient.response';
import { GetAllPatientInput } from '../dto/inputs/get-all-patient.input';
import { DeletePatientInput } from '../dto/inputs/delete-patient.input';
import { CreatePatientCommand } from '../../cqrs/commands/impl/create-patient.command';
import { DeletePatientCommand } from '../../cqrs/commands/impl/delete-patient.command';
import { GetAllPatientQuery } from '../../cqrs/queries/impl/get-all-patient.query';
import { PatientMapper } from '../../mapper/patient.mapper';
import { UpdatePatientInput } from '../dto/inputs/update-patient.input';
import { UpdatePatientCommand } from '../../cqrs/commands/impl/update-patient.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedPatientInput } from '../dto/inputs/get-paginated-patient.input';
import { PaginatedPatientResponse } from '../dto/responses/paginated-patient.response';
import { GetPaginatedPatientQuery } from '../../cqrs/queries/impl/get-paginated-patient.query';
import { GetOnePatientInput } from '../dto/inputs/get-one-patient.input';
import { GetOnePatientQuery } from '../../cqrs/queries/impl/get-one-patient.query';
import { DeleteManyPatientInput } from '../dto/inputs/delete-many-patient.input';
import { DeleteManyPatientCommand } from '../../cqrs/commands/impl/delete-many-patient.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { PatientEntity } from '../../entities/patient.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';


@Resolver(() => PatientResponse)
export class PatientResolver extends BaseResolver {
  constructor(
    private readonly _patientMapper: PatientMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['PATIENT'], action: ACTION_LIST.CREATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createPatient(
    @Args('input') input: CreatePatientInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreatePatientCommand(
      this._patientMapper.dtoInput2Persistent(input)
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['PATIENT'], action: ACTION_LIST.UPDATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updatePatient(
    @Args('input') { update, entityId }: UpdatePatientInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdatePatientCommand(entityId, update ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['PATIENT'], action: ACTION_LIST.DELETE_ONE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deletePatient(
    @Args('input') { entityId }: DeletePatientInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeletePatientCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['PATIENT'], action: ACTION_LIST.DELETE_MANY})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManyPatient(
    @Args('input') input: DeleteManyPatientInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManyPatientCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['PATIENT'], action: ACTION_LIST.GET_ALL})
  @Query(()=>[PatientResponse])
  async getAllPatient(
    @Args('input', { nullable: true }) input: GetAllPatientInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<PatientResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<PatientEntity>>>(new GetAllPatientQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._patientMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['PATIENT'], action: ACTION_LIST.GET_ONE})
  @Query(() => PatientResponse, { nullable: true })
  async getOnePatient(
    @Args('input', { nullable: true }) input: GetOnePatientInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PatientResponse> {
    const resp = await this._cqrsBus.execQuery<Result<PatientEntity>>(new GetOnePatientQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._patientMapper.persistent2Dto(resp.unwrap());
  }



  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['PATIENT'], action: ACTION_LIST.GET_PAGINATED})
  @Query(() => PaginatedPatientResponse, { nullable: true })
  async getPaginatedPatient(
    @Args('input', { nullable: true }) input: GetPaginatedPatientInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedPatientResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<PatientEntity>>>(new GetPaginatedPatientQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._patientMapper.persistent2Dto),
    };
  }


}
