import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { Prisma } from '@prisma/client';
import { Int } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { registerEnumType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';

export enum TransactionIsolationLevel {
    ReadUncommitted = "ReadUncommitted",
    ReadCommitted = "ReadCommitted",
    RepeatableRead = "RepeatableRead",
    Serializable = "Serializable"
}

export enum SortOrder {
    asc = "asc",
    desc = "desc"
}

export enum QueryMode {
    'default' = "default",
    insensitive = "insensitive"
}

export enum BookScalarFieldEnum {
    id = "id",
    title = "title",
    author = "author",
    isbn = "isbn",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

registerEnumType(BookScalarFieldEnum, { name: 'BookScalarFieldEnum', description: undefined })
registerEnumType(QueryMode, { name: 'QueryMode', description: undefined })
registerEnumType(SortOrder, { name: 'SortOrder', description: undefined })
registerEnumType(TransactionIsolationLevel, { name: 'TransactionIsolationLevel', description: undefined })

@ObjectType()
export class AggregateBook {
    @Field(() => BookCountAggregate, {nullable:true})
    _count?: InstanceType<typeof BookCountAggregate>;
    @Field(() => BookAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof BookAvgAggregate>;
    @Field(() => BookSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof BookSumAggregate>;
    @Field(() => BookMinAggregate, {nullable:true})
    _min?: InstanceType<typeof BookMinAggregate>;
    @Field(() => BookMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof BookMaxAggregate>;
}

@ArgsType()
export class BookAggregateArgs {
    @Field(() => BookWhereInput, {nullable:true})
    @Type(() => BookWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof BookWhereInput>;
    @Field(() => [BookOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BookOrderByWithRelationInput>;
    @Field(() => BookWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<BookWhereUniqueInput, 'id' | 'isbn'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => BookCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof BookCountAggregateInput>;
    @Field(() => BookAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof BookAvgAggregateInput>;
    @Field(() => BookSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof BookSumAggregateInput>;
    @Field(() => BookMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof BookMinAggregateInput>;
    @Field(() => BookMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof BookMaxAggregateInput>;
}

@InputType()
export class BookAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
}

@ObjectType()
export class BookAvgAggregate {
    @Field(() => Float, {nullable:true})
    id?: number;
}

@InputType()
export class BookAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
}

@InputType()
export class BookCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    title?: true;
    @Field(() => Boolean, {nullable:true})
    author?: true;
    @Field(() => Boolean, {nullable:true})
    isbn?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class BookCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    title!: number;
    @Field(() => Int, {nullable:false})
    author!: number;
    @Field(() => Int, {nullable:false})
    isbn!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class BookCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    author?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    isbn?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class BookCreateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    title!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    author!: string;
    @Field(() => String, {nullable:false})
    isbn!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class BookCreateInput {
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    title!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    author!: string;
    @Field(() => String, {nullable:false})
    isbn!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@ArgsType()
export class BookGroupByArgs {
    @Field(() => BookWhereInput, {nullable:true})
    @Type(() => BookWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof BookWhereInput>;
    @Field(() => [BookOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<BookOrderByWithAggregationInput>;
    @Field(() => [BookScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof BookScalarFieldEnum>;
    @Field(() => BookScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof BookScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => BookCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof BookCountAggregateInput>;
    @Field(() => BookAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof BookAvgAggregateInput>;
    @Field(() => BookSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof BookSumAggregateInput>;
    @Field(() => BookMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof BookMinAggregateInput>;
    @Field(() => BookMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof BookMaxAggregateInput>;
}

@ObjectType()
export class BookGroupBy {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    title!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    author!: string;
    @Field(() => String, {nullable:false})
    isbn!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => BookCountAggregate, {nullable:true})
    _count?: InstanceType<typeof BookCountAggregate>;
    @Field(() => BookAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof BookAvgAggregate>;
    @Field(() => BookSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof BookSumAggregate>;
    @Field(() => BookMinAggregate, {nullable:true})
    _min?: InstanceType<typeof BookMinAggregate>;
    @Field(() => BookMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof BookMaxAggregate>;
}

@InputType()
export class BookMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    title?: true;
    @Field(() => Boolean, {nullable:true})
    author?: true;
    @Field(() => Boolean, {nullable:true})
    isbn?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class BookMaxAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    title?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    author?: string;
    @Field(() => String, {nullable:true})
    isbn?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class BookMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    author?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    isbn?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class BookMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    title?: true;
    @Field(() => Boolean, {nullable:true})
    author?: true;
    @Field(() => Boolean, {nullable:true})
    isbn?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class BookMinAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    title?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    author?: string;
    @Field(() => String, {nullable:true})
    isbn?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class BookMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    author?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    isbn?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class BookOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    author?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    isbn?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => BookCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof BookCountOrderByAggregateInput>;
    @Field(() => BookAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof BookAvgOrderByAggregateInput>;
    @Field(() => BookMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof BookMaxOrderByAggregateInput>;
    @Field(() => BookMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof BookMinOrderByAggregateInput>;
    @Field(() => BookSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof BookSumOrderByAggregateInput>;
}

@InputType()
export class BookOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    author?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    isbn?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class BookScalarWhereWithAggregatesInput {
    @Field(() => [BookScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<BookScalarWhereWithAggregatesInput>;
    @Field(() => [BookScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<BookScalarWhereWithAggregatesInput>;
    @Field(() => [BookScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<BookScalarWhereWithAggregatesInput>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    author?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    isbn?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class BookSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
}

@ObjectType()
export class BookSumAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
}

@InputType()
export class BookSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
}

@InputType()
export class BookUncheckedCreateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    title!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    author!: string;
    @Field(() => String, {nullable:false})
    isbn!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class BookUncheckedUpdateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    title?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    author?: string;
    @Field(() => String, {nullable:true})
    isbn?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class BookUncheckedUpdateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    title?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    author?: string;
    @Field(() => String, {nullable:true})
    isbn?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class BookUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    title?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    author?: string;
    @Field(() => String, {nullable:true})
    isbn?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class BookUpdateInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    title?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    author?: string;
    @Field(() => String, {nullable:true})
    isbn?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class BookWhereUniqueInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    isbn?: string;
    @Field(() => [BookWhereInput], {nullable:true})
    AND?: Array<BookWhereInput>;
    @Field(() => [BookWhereInput], {nullable:true})
    OR?: Array<BookWhereInput>;
    @Field(() => [BookWhereInput], {nullable:true})
    NOT?: Array<BookWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    title?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    author?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class BookWhereInput {
    @Field(() => [BookWhereInput], {nullable:true})
    AND?: Array<BookWhereInput>;
    @Field(() => [BookWhereInput], {nullable:true})
    OR?: Array<BookWhereInput>;
    @Field(() => [BookWhereInput], {nullable:true})
    NOT?: Array<BookWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    title?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    author?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    isbn?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@ObjectType()
export class Book {
    @Field(() => ID, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    author!: string;
    @Field(() => String, {nullable:false})
    isbn!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
}

@ArgsType()
export class CreateManyBookArgs {
    @Field(() => [BookCreateManyInput], {nullable:false})
    @Type(() => BookCreateManyInput)
    @ValidateNested()
    data!: Array<BookCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneBookArgs {
    @Field(() => BookCreateInput, {nullable:false})
    @Type(() => BookCreateInput)
    @ValidateNested()
    data!: InstanceType<typeof BookCreateInput>;
}

@ArgsType()
export class DeleteManyBookArgs {
    @Field(() => BookWhereInput, {nullable:true})
    @Type(() => BookWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof BookWhereInput>;
}

@ArgsType()
export class DeleteOneBookArgs {
    @Field(() => BookWhereUniqueInput, {nullable:false})
    @Type(() => BookWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<BookWhereUniqueInput, 'id' | 'isbn'>;
}

@ArgsType()
export class FindFirstBookOrThrowArgs {
    @Field(() => BookWhereInput, {nullable:true})
    @Type(() => BookWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof BookWhereInput>;
    @Field(() => [BookOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BookOrderByWithRelationInput>;
    @Field(() => BookWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<BookWhereUniqueInput, 'id' | 'isbn'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [BookScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof BookScalarFieldEnum>;
}

@ArgsType()
export class FindFirstBookArgs {
    @Field(() => BookWhereInput, {nullable:true})
    @Type(() => BookWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof BookWhereInput>;
    @Field(() => [BookOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BookOrderByWithRelationInput>;
    @Field(() => BookWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<BookWhereUniqueInput, 'id' | 'isbn'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [BookScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof BookScalarFieldEnum>;
}

@ArgsType()
export class FindManyBookArgs {
    @Field(() => BookWhereInput, {nullable:true})
    @Type(() => BookWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof BookWhereInput>;
    @Field(() => [BookOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BookOrderByWithRelationInput>;
    @Field(() => BookWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<BookWhereUniqueInput, 'id' | 'isbn'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [BookScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof BookScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueBookOrThrowArgs {
    @Field(() => BookWhereUniqueInput, {nullable:false})
    @Type(() => BookWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<BookWhereUniqueInput, 'id' | 'isbn'>;
}

@ArgsType()
export class FindUniqueBookArgs {
    @Field(() => BookWhereUniqueInput, {nullable:false})
    @Type(() => BookWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<BookWhereUniqueInput, 'id' | 'isbn'>;
}

@ArgsType()
export class UpdateManyBookArgs {
    @Field(() => BookUpdateManyMutationInput, {nullable:false})
    @Type(() => BookUpdateManyMutationInput)
    @ValidateNested()
    data!: InstanceType<typeof BookUpdateManyMutationInput>;
    @Field(() => BookWhereInput, {nullable:true})
    @Type(() => BookWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof BookWhereInput>;
}

@ArgsType()
export class UpdateOneBookArgs {
    @Field(() => BookUpdateInput, {nullable:false})
    @Type(() => BookUpdateInput)
    @ValidateNested()
    data!: InstanceType<typeof BookUpdateInput>;
    @Field(() => BookWhereUniqueInput, {nullable:false})
    @Type(() => BookWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<BookWhereUniqueInput, 'id' | 'isbn'>;
}

@ArgsType()
export class UpsertOneBookArgs {
    @Field(() => BookWhereUniqueInput, {nullable:false})
    @Type(() => BookWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<BookWhereUniqueInput, 'id' | 'isbn'>;
    @Field(() => BookCreateInput, {nullable:false})
    @Type(() => BookCreateInput)
    create!: InstanceType<typeof BookCreateInput>;
    @Field(() => BookUpdateInput, {nullable:false})
    @Type(() => BookUpdateInput)
    update!: InstanceType<typeof BookUpdateInput>;
}

@ObjectType()
export class AffectedRows {
    @Field(() => Int, {nullable:false})
    count!: number;
}

@InputType()
export class DateTimeFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => DateTimeFilter, {nullable:true})
    not?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class DateTimeWithAggregatesFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => IntFilter, {nullable:true})
    _count?: InstanceType<typeof IntFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    _min?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    _max?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class IntFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => IntFilter, {nullable:true})
    not?: InstanceType<typeof IntFilter>;
}

@InputType()
export class IntWithAggregatesFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => IntFilter, {nullable:true})
    _count?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    _sum?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    _min?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    _max?: InstanceType<typeof IntFilter>;
}


@InputType()
export class StringFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: keyof typeof QueryMode;
    @Field(() => StringFilter, {nullable:true})
    not?: InstanceType<typeof StringFilter>;
}

@InputType()
export class StringWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: keyof typeof QueryMode;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => IntFilter, {nullable:true})
    _count?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    _min?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    _max?: InstanceType<typeof StringFilter>;
}
