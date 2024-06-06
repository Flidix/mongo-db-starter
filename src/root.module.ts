import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Environment } from '@shared/variables/environment';

@Module({
  imports: [MongooseModule.forRoot(Environment.MONGODB_URL)],
  controllers: [],
  providers: [],
  exports: [],
})
export class RootModule {}
