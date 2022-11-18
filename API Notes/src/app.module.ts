import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotesModule } from './notes/notes.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [NotesModule,
    MongooseModule.forRoot('mongodb+srv://Saikuren14:Saikuren-14@cluster0.6xbeymr.mongodb.net/?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}