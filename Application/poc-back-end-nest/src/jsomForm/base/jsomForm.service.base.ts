/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, JsomForm } from "@prisma/client";

export class JsomFormServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.JsomFormFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.JsomFormFindManyArgs>
  ): Promise<number> {
    return this.prisma.jsomForm.count(args);
  }

  async findMany<T extends Prisma.JsomFormFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.JsomFormFindManyArgs>
  ): Promise<JsomForm[]> {
    return this.prisma.jsomForm.findMany(args);
  }
  async findOne<T extends Prisma.JsomFormFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.JsomFormFindUniqueArgs>
  ): Promise<JsomForm | null> {
    return this.prisma.jsomForm.findUnique(args);
  }
  async create<T extends Prisma.JsomFormCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.JsomFormCreateArgs>
  ): Promise<JsomForm> {
    return this.prisma.jsomForm.create<T>(args);
  }
  async update<T extends Prisma.JsomFormUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.JsomFormUpdateArgs>
  ): Promise<JsomForm> {
    return this.prisma.jsomForm.update<T>(args);
  }
  async delete<T extends Prisma.JsomFormDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.JsomFormDeleteArgs>
  ): Promise<JsomForm> {
    return this.prisma.jsomForm.delete(args);
  }
}