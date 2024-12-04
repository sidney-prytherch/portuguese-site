import { mysqlTable, serial, text, int, varchar, datetime, foreignKey, boolean, tinyint, mysqlEnum, smallint, mediumint, bigint } from 'drizzle-orm/mysql-core';

// Table for 'part_of_speech'
export const partOfSpeech = mysqlTable('part_of_speech', {
	id: varchar('id', { length: 255 }).primaryKey(),
	name: varchar('name', { length: 255 }).notNull(),
});

// Table for 'dictionary_entry'
export const dictionaryEntry = mysqlTable('dictionary_entry', {
	id: int('id').autoincrement().primaryKey(),
	word: varchar('word', { length: 255 }).notNull(),
	freqIndex: int('freqIndex').notNull(),
});

// Table for 'definition_entry'
export const definitionEntry = mysqlTable('definition_entry', {
	id: int('id').autoincrement().primaryKey(),
	dictionaryEntryId: int('dictionaryEntryId').references(() => dictionaryEntry.id, { onDelete: 'cascade' }).notNull(),
	definition: text('definition').notNull(),
	partOfSpeech: varchar('partOfSpeech', { length: 255 }).references(() => partOfSpeech.id, { onDelete: 'cascade' }),
});

// Table for 'word_group'
export const wordGroup = mysqlTable('word_group', {
	id: int('id').autoincrement().primaryKey(),
	name: varchar('name', { length: 255 }).notNull(),
});

export const verb = mysqlTable('verb', {
	id: int('id').autoincrement().primaryKey(),
	infinitive: varchar('infinitive', { length: 255 }).notNull(),
	gerund: varchar('gerund', { length: 255 }),
	impersonalInfinitive: varchar('impersonalInfinitive', { length: 255 }),

	pastParticiple_ms: varchar('pastParticiple_ms', { length: 255 }),
	pastParticiple_fs: varchar('pastParticiple_fs', { length: 255 }),
	pastParticiple_mp: varchar('pastParticiple_mp', { length: 255 }),
	pastParticiple_fp: varchar('pastParticiple_fp', { length: 255 }),
});


export const verbDefinition = mysqlTable('verb_definition', {
	id: int('id').autoincrement().primaryKey(),
	verbId: int('verbId').references(() => verb.id, { onDelete: 'cascade' }).notNull(),
	definition: text('definition'),
});



export type PartOfSpeech = typeof partOfSpeech.$inferSelect;
export type DictionaryEntry = typeof dictionaryEntry.$inferSelect;
export type DefinitionEntry = typeof definitionEntry.$inferSelect;
export type WordGroup = typeof wordGroup.$inferSelect;
export type Verb = typeof verb.$inferSelect;
export type VerbDefinition = typeof verbDefinition.$inferSelect;
// export type WordGroupEntry = typeof wordGroupEntry.$inferSelect;
// export type Word = typeof word.$inferSelect;
