import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

// 单元格接口定义
export interface Cell {
  row: number;
  col: number;
  value: string | number;
}

@Entity('sheets')
export class Sheet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'simple-json', default: '[]' })
  data: Cell[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  // 将ID转换为字符串
  getId(): string {
    return this.id ? this.id.toString() : '';
  }
} 