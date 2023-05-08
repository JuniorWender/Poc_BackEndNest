import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { JsomFormService } from "./jsomForm.service";
import { JsomFormControllerBase } from "./base/jsomForm.controller.base";

@swagger.ApiTags("jsomForms")
@common.Controller("jsomForms")
export class JsomFormController extends JsomFormControllerBase {
  constructor(protected readonly service: JsomFormService) {
    super(service);
  }
}
