import { Module } from '@nestjs/common';
import { NotesService } from './notes.service';
import { NotesController } from './notes.controller';
import { Note, NoteSchema } from './entities/note.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [NotesController],
  providers: [NotesService],
  imports: [
    MongooseModule.forFeature([{ name: Note.name, schema: NoteSchema }]),
  ],
})
export class NotesModule {}
