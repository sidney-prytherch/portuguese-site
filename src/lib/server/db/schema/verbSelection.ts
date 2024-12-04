import { mysqlTable, serial, text, int, varchar, datetime, foreignKey, boolean, tinyint, mysqlEnum, smallint, mediumint, bigint } from 'drizzle-orm/mysql-core';
import { user } from './user';

export const gamePreset = mysqlTable('game_preset', {
	id: int('id').autoincrement().primaryKey(),
	enabledPartsOfSpeech: smallint('enabledPartsOfSpeech'), //essentially 16 booleans, one for each Part of speech
	gridSize: tinyint('gridSize'),
	gameMode: tinyint('gameMode'), //enum, but 4 times smaller
	verbPresetId: int('verbPresetId').references(() => verbPreset.id, { onDelete: 'cascade' }),
	creatorId: varchar('creatorId', { length: 255 }).references(() => user.id, { onDelete: 'cascade' }),
});

export const verbPreset = mysqlTable('verb_preset', {
	id: int('id').autoincrement().primaryKey(),
	creatorId: varchar('creatorId', { length: 255 }).references(() => user.id, { onDelete: 'cascade' }),
	specificVerbs: text('specificVerbs'),
	auxiliaryVerbCombo: mediumint('auxiliaryVerbCombo', {unsigned: true}),
	additionalSettings: boolean('additionalSettings'), //gerund, participles, infinitive
	pronounCombo: smallint('pronounCombo', {unsigned: true})
});

export const verbSelection = mysqlTable('verb_selection', {
	id: int('id').autoincrement().primaryKey(),
	creatorId: varchar('creatorId', { length: 255 }).references(() => user.id, { onDelete: 'cascade' }),
	conjugationFamily: tinyint('conjugationFamily', {unsigned: true}),
	regularity: tinyint('regularity', {unsigned: true}),
	irregularFamiliesA: int('irregularFamiliesA', {unsigned: true}),
	irregularFamiliesB: int('irregularFamiliesB', {unsigned: true}),
	verbClass: tinyint('verbClass', {unsigned: true}),
	inflectionType: smallint('inflectionType', {unsigned: true}),
	frequencyFilter: tinyint('frequencyFilter', {unsigned: true})
});

export const verbPresetSelection = mysqlTable('verb_preset_selection', {
	id: int('id').autoincrement().primaryKey(),
	verbPreset: int('verbPreset').references(() => verbPreset.id, { onDelete: 'cascade' }),
	verbSelection: int('verbSelection').references(() => verbSelection.id, { onDelete: 'cascade' }),
});


export const tenseSelection = mysqlTable('tense_selection', {
	id: int('id').autoincrement().primaryKey(),
	mood: tinyint('mood', {unsigned: true}), //indicative, subjunctive, progressive, imperative
	structure: tinyint('structure', {unsigned: true}), // simple or compound
	tense: tinyint('tense', {unsigned: true}), // present, preterite, imperfect, pluperfect, future, conditional
});

export const verbPresetTense = mysqlTable('verb_preset_tense', {
	id: int('id').autoincrement().primaryKey(),
	verbPreset: int('verbPreset').references(() => verbPreset.id, { onDelete: 'cascade' }),
	tenseSelection: int('tenseSelection').references(() => tenseSelection.id, { onDelete: 'cascade' }),
});


export type GamePreset = typeof gamePreset.$inferSelect;
export type VerbPreset = typeof verbPreset.$inferSelect;
export type VerbSelection = typeof verbSelection.$inferSelect;
export type VerbPresetSelection = typeof verbPresetSelection.$inferSelect;
export type TenseSelection = typeof tenseSelection.$inferSelect;
export type VerbPresetTense = typeof verbPresetTense.$inferSelect;