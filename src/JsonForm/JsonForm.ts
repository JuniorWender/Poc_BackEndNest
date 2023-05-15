import { IsString, IsOptional, IsJSON } from "class-validator";
import { JsonValue } from "type-fest";

export class JsonForm {

  @IsString()
  id: string;

  @IsString()
  jsonName: string;

  @IsJSON()
  newValues: JsonValue;

  @IsJSON()
  originalValues: JsonValue;
}