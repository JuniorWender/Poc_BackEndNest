import { Body, Controller, Get, Post } from "@nestjs/common";
import { PrismaClient,JsonForm } from "@prisma/client";
import { JsonFormRepository } from "./jsonForm.repository";
import { ok } from "assert";

@Controller('/jsonForm')
export class ProductController {

    private readonly _jsonFormService: JsonFormRepository;
    constructor() {
        this._jsonFormService = new JsonFormRepository();   
    }

    @Post()
    async CreateJsonForm(@Body() jsonData) : Promise<JsonForm> {
        
        const jsonForm = await this._jsonFormService.createJsonForm(jsonData);

        return jsonForm;
    }

    @Get()
    async getJsonForms() {
        const jsonForm = await this._jsonFormService.allJsonForm();
        return jsonForm;
    }
}