import { Entity, ObjectIdColumn, Column, ObjectId } from 'typeorm';

/**
 * 电子表格实体模型
 * 存储在MongoDB中
 */
@Entity('sheets')
export class Sheet {
  @ObjectIdColumn()
  id: string;

  @Column()
  title: string;

  @Column({ nullable: true })
  description?: string;

  @Column()
  content: string; // 存储JSON格式的电子表格内容

  @Column({ nullable: true })
  thumbnail?: string; // 电子表格缩略图URL

  @Column()
  userId: string; // 所有者ID

  @Column({ default: false })
  isPublic: boolean; // 是否公开

  @Column({ default: false })
  isDeleted: boolean; // 软删除标志

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @Column({ nullable: true })
  lastAccessedAt?: Date; // 最后访问时间
} 