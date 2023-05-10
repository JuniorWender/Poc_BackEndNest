import { Body, Controller, Get, Post } from "@nestjs/common";
import { JsonFormRepository } from "./jsonForm.repository";

@Controller('/jsonForm')
export class ProductController {

    constructor(private _jsonFormRepository: JsonFormRepository) { }

    @Post()
    async CreateUser(@Body() jsonData) {
        this._jsonFormRepository.save(jsonData)
        return jsonData;
    }

    @Get()
    async getUsers() {
        return this._jsonFormRepository.getJsonForm();
    }
}