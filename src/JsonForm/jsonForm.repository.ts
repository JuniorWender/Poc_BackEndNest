import { Injectable } from "@nestjs/common";
import { PrismaClient,JsonForm } from "@prisma/client";
// import { JsonForm } from './JsonForm';

@Injectable()
export class JsonFormRepository {

    private readonly prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async createJsonForm(json): Promise<JsonForm> {
        try{
            const jsonForm = await this.prisma.jsonForm.create({
                data: {
                    id: json.Id,
                    JsonName: json.JsonName,
                    NewValues: json.NewValues,
                    OriginalValues: json.OriginalValues
                }
            });

            return jsonForm;
        }
        catch(e) {
            console.log('ocorreu um erro: ',e);
        }
    }

    async allJsonForm(): Promise<JsonForm[]> {
        const jsonForm = await this.prisma.jsonForm.findMany();
        return jsonForm;
    }

}