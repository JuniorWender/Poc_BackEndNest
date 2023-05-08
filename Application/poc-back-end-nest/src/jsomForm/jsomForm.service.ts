import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { JsomFormServiceBase } from "./base/jsomForm.service.base";

@Injectable()
export class JsomFormService extends JsomFormServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
