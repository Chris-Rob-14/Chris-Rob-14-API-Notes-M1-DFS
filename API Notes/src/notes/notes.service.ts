import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Note } from './entities/note.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';


@Injectable()
export class NotesService {
  constructor(
    @InjectModel(Note.name) private messageNote : Model<Note>,
  ) {}
  create(createNoteDto: CreateNoteDto): Promise<Note> {
    const createdNote = new this.messageNote({
      ...createNoteDto,
      date: new Date(),
    });
    return createdNote.save();
  }

  findAll(): Promise<Note[]> {
    return this.messageNote.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} note`;
  }

  update(id: number, updateNoteDto: UpdateNoteDto) {
    return `This action updates a #${id} note`;
  }

  remove(id: number) {
    return `This action removes a #${id} note`;
  }
}
