import { Module } from '@nestjs/common';
import { JsonFormModule } from './JsonForm/jsonForm.module';


@Module({
  imports: [JsonFormModule],
})
export class AppModule {}
