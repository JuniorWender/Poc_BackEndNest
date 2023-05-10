import { Injectable } from "@nestjs/common";

@Injectable()
export class JsonFormRepository {
    private products = [];

    async save(json) {
        // Save productData to database
        this.products.push(json);
    }

    async getJsonForm() {
        // Get users from database
        return this.products;
    }
}