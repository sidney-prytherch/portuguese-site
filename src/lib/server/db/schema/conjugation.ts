import { mysqlTable, serial, text, int, varchar, datetime, foreignKey, boolean, tinyint, mysqlEnum, smallint, mediumint, bigint } from 'drizzle-orm/mysql-core';
import { verb } from './dictionary';

export const personalInfinitive = mysqlTable('personal_infinitive_conjugation', {
	id: int('id').autoincrement().primaryKey(),
	verbId: int('verbId').references(() => verb.id, { onDelete: 'cascade' }).notNull(),
	firstPersonSingular:  varchar('firstPersonSingular', { length: 255 }),
	secondPersonSingular:  varchar('secondPersonSingular', { length: 255 }),
	thirdPersonSingular:  varchar('thirdPersonSingular', { length: 255 }),
	firstPersonPlural:  varchar('firstPersonPlural', { length: 255 }),
	secondPersonPlural:  varchar('secondPersonPlural', { length: 255 }),
	thirdPersonPlural:  varchar('thirdPersonPlural', { length: 255 }),
});

export const presentIndicative = mysqlTable('present_indicative', {
	id: int('id').autoincrement().primaryKey(),
	verbId: int('verbId').references(() => verb.id, { onDelete: 'cascade' }).notNull(),
	firstPersonSingular:  varchar('firstPersonSingular', { length: 255 }),
	secondPersonSingular:  varchar('secondPersonSingular', { length: 255 }),
	thirdPersonSingular:  varchar('thirdPersonSingular', { length: 255 }),
	firstPersonPlural:  varchar('firstPersonPlural', { length: 255 }),
	secondPersonPlural:  varchar('secondPersonPlural', { length: 255 }),
	thirdPersonPlural:  varchar('thirdPersonPlural', { length: 255 }),
});

export const imperfectIndicative = mysqlTable('imperfect_indicative', {
	id: int('id').autoincrement().primaryKey(),
	verbId: int('verbId').references(() => verb.id, { onDelete: 'cascade' }).notNull(),
	firstPersonSingular:  varchar('firstPersonSingular', { length: 255 }),
	secondPersonSingular:  varchar('secondPersonSingular', { length: 255 }),
	thirdPersonSingular:  varchar('thirdPersonSingular', { length: 255 }),
	firstPersonPlural:  varchar('firstPersonPlural', { length: 255 }),
	secondPersonPlural:  varchar('secondPersonPlural', { length: 255 }),
	thirdPersonPlural:  varchar('thirdPersonPlural', { length: 255 }),
});

export const futureIndicative = mysqlTable('future_indicative', {
	id: int('id').autoincrement().primaryKey(),
	verbId: int('verbId').references(() => verb.id, { onDelete: 'cascade' }).notNull(),
	firstPersonSingular:  varchar('firstPersonSingular', { length: 255 }),
	secondPersonSingular:  varchar('secondPersonSingular', { length: 255 }),
	thirdPersonSingular:  varchar('thirdPersonSingular', { length: 255 }),
	firstPersonPlural:  varchar('firstPersonPlural', { length: 255 }),
	secondPersonPlural:  varchar('secondPersonPlural', { length: 255 }),
	thirdPersonPlural:  varchar('thirdPersonPlural', { length: 255 }),
});

export const preteriteIndicative = mysqlTable('preterite_indicative', {
	id: int('id').autoincrement().primaryKey(),
	verbId: int('verbId').references(() => verb.id, { onDelete: 'cascade' }).notNull(),
	firstPersonSingular:  varchar('firstPersonSingular', { length: 255 }),
	secondPersonSingular:  varchar('secondPersonSingular', { length: 255 }),
	thirdPersonSingular:  varchar('thirdPersonSingular', { length: 255 }),
	firstPersonPlural:  varchar('firstPersonPlural', { length: 255 }),
	secondPersonPlural:  varchar('secondPersonPlural', { length: 255 }),
	thirdPersonPlural:  varchar('thirdPersonPlural', { length: 255 }),
});

export const pluperfectIndicative = mysqlTable('pluperfect_indicative', {
	id: int('id').autoincrement().primaryKey(),
	verbId: int('verbId').references(() => verb.id, { onDelete: 'cascade' }).notNull(),
	firstPersonSingular:  varchar('firstPersonSingular', { length: 255 }),
	secondPersonSingular:  varchar('secondPersonSingular', { length: 255 }),
	thirdPersonSingular:  varchar('thirdPersonSingular', { length: 255 }),
	firstPersonPlural:  varchar('firstPersonPlural', { length: 255 }),
	secondPersonPlural:  varchar('secondPersonPlural', { length: 255 }),
	thirdPersonPlural:  varchar('thirdPersonPlural', { length: 255 }),
});

export const conditional = mysqlTable('conditional', {
	id: int('id').autoincrement().primaryKey(),
	verbId: int('verbId').references(() => verb.id, { onDelete: 'cascade' }).notNull(),
	firstPersonSingular:  varchar('firstPersonSingular', { length: 255 }),
	secondPersonSingular:  varchar('secondPersonSingular', { length: 255 }),
	thirdPersonSingular:  varchar('thirdPersonSingular', { length: 255 }),
	firstPersonPlural:  varchar('firstPersonPlural', { length: 255 }),
	secondPersonPlural:  varchar('secondPersonPlural', { length: 255 }),
	thirdPersonPlural:  varchar('thirdPersonPlural', { length: 255 }),
});

export const presentSubjunctive = mysqlTable('present_subjunctive', {
	id: int('id').autoincrement().primaryKey(),
	verbId: int('verbId').references(() => verb.id, { onDelete: 'cascade' }).notNull(),
	firstPersonSingular:  varchar('firstPersonSingular', { length: 255 }),
	secondPersonSingular:  varchar('secondPersonSingular', { length: 255 }),
	thirdPersonSingular:  varchar('thirdPersonSingular', { length: 255 }),
	firstPersonPlural:  varchar('firstPersonPlural', { length: 255 }),
	secondPersonPlural:  varchar('secondPersonPlural', { length: 255 }),
	thirdPersonPlural:  varchar('thirdPersonPlural', { length: 255 }),
});

export const imperfectSubjunctive = mysqlTable('imperfect_subjunctive', {
	id: int('id').autoincrement().primaryKey(),
	verbId: int('verbId').references(() => verb.id, { onDelete: 'cascade' }).notNull(),
	firstPersonSingular:  varchar('firstPersonSingular', { length: 255 }),
	secondPersonSingular:  varchar('secondPersonSingular', { length: 255 }),
	thirdPersonSingular:  varchar('thirdPersonSingular', { length: 255 }),
	firstPersonPlural:  varchar('firstPersonPlural', { length: 255 }),
	secondPersonPlural:  varchar('secondPersonPlural', { length: 255 }),
	thirdPersonPlural:  varchar('thirdPersonPlural', { length: 255 }),
});

export const futureSubjunctive = mysqlTable('future_subjunctive', {
	id: int('id').autoincrement().primaryKey(),
	verbId: int('verbId').references(() => verb.id, { onDelete: 'cascade' }).notNull(),
	firstPersonSingular:  varchar('firstPersonSingular', { length: 255 }),
	secondPersonSingular:  varchar('secondPersonSingular', { length: 255 }),
	thirdPersonSingular:  varchar('thirdPersonSingular', { length: 255 }),
	firstPersonPlural:  varchar('firstPersonPlural', { length: 255 }),
	secondPersonPlural:  varchar('secondPersonPlural', { length: 255 }),
	thirdPersonPlural:  varchar('thirdPersonPlural', { length: 255 }),
});

export const imperative = mysqlTable('imperative', {
	id: int('id').autoincrement().primaryKey(),
	verbId: int('verbId').references(() => verb.id, { onDelete: 'cascade' }).notNull(),
	firstPersonSingular:  varchar('firstPersonSingular', { length: 255 }),
	secondPersonSingular:  varchar('secondPersonSingular', { length: 255 }),
	thirdPersonSingular:  varchar('thirdPersonSingular', { length: 255 }),
	firstPersonPlural:  varchar('firstPersonPlural', { length: 255 }),
	secondPersonPlural:  varchar('secondPersonPlural', { length: 255 }),
	thirdPersonPlural:  varchar('thirdPersonPlural', { length: 255 }),
});

export const imperativeNegative = mysqlTable('imperative_negative', {
	id: int('id').autoincrement().primaryKey(),
	verbId: int('verbId').references(() => verb.id, { onDelete: 'cascade' }).notNull(),
	firstPersonSingular:  varchar('firstPersonSingular', { length: 255 }),
	secondPersonSingular:  varchar('secondPersonSingular', { length: 255 }),
	thirdPersonSingular:  varchar('thirdPersonSingular', { length: 255 }),
	firstPersonPlural:  varchar('firstPersonPlural', { length: 255 }),
	secondPersonPlural:  varchar('secondPersonPlural', { length: 255 }),
	thirdPersonPlural:  varchar('thirdPersonPlural', { length: 255 }),
});

export type PersonalInfinitive = typeof personalInfinitive.$inferSelect;
export type PresentIndicative = typeof presentIndicative.$inferSelect;
export type ImperfectIndicative = typeof imperfectIndicative.$inferSelect;
export type FutureIndicative = typeof futureIndicative.$inferSelect;
export type PreteriteIndicative = typeof preteriteIndicative.$inferSelect;
export type PluperfectIndicative = typeof pluperfectIndicative.$inferSelect;
export type Conditional = typeof conditional.$inferSelect;
export type PresentSubjunctive = typeof presentSubjunctive.$inferSelect;
export type ImperfectSubjunctive = typeof imperfectSubjunctive.$inferSelect;
export type FutureSubjunctive = typeof futureSubjunctive.$inferSelect;
export type Imperative = typeof imperative.$inferSelect;
export type ImperativeNegative = typeof imperativeNegative.$inferSelect;