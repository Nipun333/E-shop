import { ModeratorEntity } from "src/Moderator/moderator.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("report")
export class ReportEntity{
    @PrimaryGeneratedColumn()
    Id:number;

    @Column()
    ReportTittle:string;

    @Column()
    Discription:string;

    @Column()
    ReportedDate:Date;

    @Column()
    ReportedUsername:string;

    @Column()
    ReportedUserId: number;

    @Column()
    ProcessedByUsername:string;

    @Column()
    ProcessedByUserID: number;

    // @ManyToOne(() => ModeratorEntity, (moderator) => moderator.report)
    // moderator: ModeratorEntity;
}