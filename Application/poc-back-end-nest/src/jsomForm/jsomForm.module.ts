import { Module } from "@nestjs/common";
import { JsomFormModuleBase } from "./base/jsomForm.module.base";
import { JsomFormService } from "./jsomForm.service";
import { JsomFormController } from "./jsomForm.controller";

@Module({
  imports: [JsomFormModuleBase],
  controllers: [JsomFormController],
  providers: [JsomFormService],
  exports: [JsomFormService],
})
export class JsomFormModule {}
