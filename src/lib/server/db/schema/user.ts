import { mysqlTable, serial, text, int, varchar, datetime, foreignKey, boolean, tinyint, mysqlEnum, smallint, mediumint, bigint } from 'drizzle-orm/mysql-core';
import { gamePreset } from './verbSelection';

export const user = mysqlTable('user', {
	id: varchar('id', { length: 255 }).primaryKey(),
	age: int('age'),
	username: varchar('username', { length: 32 }).notNull().unique(),
	passwordHash: varchar('password_hash', { length: 255 }).notNull()
});

export const session = mysqlTable('session', {
	id: varchar('id', { length: 255 }).primaryKey(),
	userId: varchar('user_id', { length: 255 })
		.notNull()
		.references(() => user.id),
	expiresAt: datetime('expires_at').notNull()
});

export const userSettings = mysqlTable('user_settings', {
	id: varchar('id', { length: 255 }).references(() => user.id, { onDelete: 'cascade' }).primaryKey(),
	isBrazil: boolean('isBrazil'),
	defaultPreset: int('defaultPreset').references(() => gamePreset.id)
});


// export type word = typeof word.$inferSelect;
export type Session = typeof session.$inferSelect;
export type User = typeof user.$inferSelect;
export type UserSettings = typeof userSettings.$inferSelect;
// export type WordGroupEntry = typeof wordGroupEntry.$inferSelect;
// export type Word = typeof word.$inferSelect;
