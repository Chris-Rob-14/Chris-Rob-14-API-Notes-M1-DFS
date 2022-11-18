import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type NoteDocument = Note & Document;

@Schema ()
export class Note {
    @Prop()
    title: string;
    @Prop()
    description: string;

    constructor(title: string, description: string) {
        this.title = title;
        this.description = description;
    }

}

export const NoteSchema = SchemaFactory.createForClass(Note);
