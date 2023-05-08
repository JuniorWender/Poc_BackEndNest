/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { JsomFormService } from "../jsomForm.service";
import { JsomFormCreateInput } from "./JsomFormCreateInput";
import { JsomFormWhereInput } from "./JsomFormWhereInput";
import { JsomFormWhereUniqueInput } from "./JsomFormWhereUniqueInput";
import { JsomFormFindManyArgs } from "./JsomFormFindManyArgs";
import { JsomFormUpdateInput } from "./JsomFormUpdateInput";
import { JsomForm } from "./JsomForm";

export class JsomFormControllerBase {
  constructor(protected readonly service: JsomFormService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: JsomForm })
  async create(@common.Body() data: JsomFormCreateInput): Promise<JsomForm> {
    return await this.service.create({
      data: data,
      select: {
        id: true,
        jsonName: true,
        newJsonValues: true,
        originalJsonValues: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [JsomForm] })
  @ApiNestedQuery(JsomFormFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<JsomForm[]> {
    const args = plainToClass(JsomFormFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        id: true,
        jsonName: true,
        newJsonValues: true,
        originalJsonValues: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: JsomForm })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: JsomFormWhereUniqueInput
  ): Promise<JsomForm | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        id: true,
        jsonName: true,
        newJsonValues: true,
        originalJsonValues: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: JsomForm })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: JsomFormWhereUniqueInput,
    @common.Body() data: JsomFormUpdateInput
  ): Promise<JsomForm | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          id: true,
          jsonName: true,
          newJsonValues: true,
          originalJsonValues: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: JsomForm })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: JsomFormWhereUniqueInput
  ): Promise<JsomForm | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          id: true,
          jsonName: true,
          newJsonValues: true,
          originalJsonValues: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
