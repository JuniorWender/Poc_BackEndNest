import { Module } from "@nestjs/common";
import { JsonFormRepository } from "./jsonForm.repository";
import { ProductController } from "./jsonForm.controller";

@Module({
    controllers: [ProductController],
    providers: [JsonFormRepository],
})

export class JsonFormModule {}