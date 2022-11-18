import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { CreateNoteDto } from './create-note.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateNoteDto extends PartialType(CreateNoteDto) {
    @ApiProperty()
    @IsNotEmpty()
    date: Date;
    @ApiProperty()
    @IsNotEmpty()
    title: string;
    @ApiProperty()
    @IsNotEmpty()
    description: string;
    constructor(date: Date, title: string, description: string) {
        super();
        this.date = date;
        this.title = title;
        this.description = description;
    }
}