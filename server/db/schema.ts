/**
 * This file defines the entire database schema - including all tables and relations.
 *
 * To configure the Supabase database using this schema as a guide, use the command:
 * ```
 * npx drizzle-kit push
 * ```
 *
 * @author Ajay Gandecha <agandecha@unc.edu>
 * @license MIT
 * @see https://comp426-25f.github.io/
 */


import {
  integer,
  pgTable,
  primaryKey,
  text,
  timestamp,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";


/**
 * Defines the `profiles` database table with the following fields:
 * - `id` (text, primary key)
 * - `name` (text, required)
 * - `handle` (text, required)
 * - `avatarUrl` (text, optional)
 */
export const profilesTable = pgTable("profiles", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  handle: text("handle").notNull(),
  avatarUrl: text("avatar_url"),
});

/**
 * Defines the `itineraries` database table with the following fields:
 * - `id` (text, primary key)
 * - `title` (text, required)
 * - `city` (text, required)
 * - `description` (text, required)
 * - `coverImageUrl` (text, optional)
 * - `createdAt` (timestamp, default=now())
 * - `authorId` (text, foreign key to `profilesTable.id`)
 */
export const itinerariesTable = pgTable("itineraries", {
    id: text("id").primaryKey(),
    title: text("title").notNull(),
    city: text("city").notNull(),
    description: text("description").notNull(),
    coverImageUrl: text("cover_image_url"),
    createdAt: timestamp("created_at").defaultNow(),
    authorId: text("author_id").references(() => profilesTable.id, {
        onDelete: "cascade",
    }),
});

/**
 * Defines the `itinerary_locations` database table with the following fields:
 * - `id` (text, primary key)
 * - `itineraryId` (text, foreign key to `itinerariesTable.id`)
 * - `name` (text, required)
 * - `description` (text, required)
 * - `orderIndex` (integer, required)
 */
export const itineraryLocationsTable = pgTable("itinerary_locations", {
    id: text("id").primaryKey(),
    itineraryId: text("itinerary_id").references(() => itinerariesTable.id, {
        onDelete: "cascade",
    }),
    name: text("name").notNull(),
    description: text("description").notNull(),
    orderIndex: integer("order_index").notNull(),
});

/**
 * Defines the `location_photos` database table with the following fields:
 * - `id` (text, primary key)
 * - `locationId` (text, foreign key to `itineraryLocationsTable.id`)
 * - `photoUrl` (text, required)
 * - `caption` (text, optional)
 * - `orderIndex` (integer, required)
 */
export const locationPhotosTable = pgTable("location_photos", {
    id: text("id").primaryKey(),
    locationId: text("location_id").references(() => itineraryLocationsTable.id, {
        onDelete: "cascade",
    }),
    photoUrl: text("photo_url").notNull(),
    caption: text("caption"),
    orderIndex: integer("order_index").notNull(),
});

/**
 * Defines the `itinerary_likes` database table with the following fields:
 * - `itineraryId` (text, foreign key to `itinerariesTable.id`)
 * - `profileId` (text, foreign key to `profilesTable.id`)
 */
export const itineraryLikesTable = pgTable(
  "itinerary_likes",
  {
    itineraryId: text("itinerary_id")
      .notNull()
      .references(() => itinerariesTable.id, { onDelete: "cascade" }),
    profileId: text("profile_id")
      .notNull()
      .references(() => profilesTable.id, { onDelete: "cascade" }),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.itineraryId, t.profileId] }),
  }),
);

/**
 * Defines the `itinerary_saves` database table with the following fields:
 * - `itineraryId` (text, foreign key to `itinerariesTable.id`)
 * - `profileId` (text, foreign key to `profilesTable.id`)
 */
export const itinerarySavesTable = pgTable(
  "itinerary_saves",
  {
    itineraryId: text("itinerary_id")
      .notNull()
      .references(() => itinerariesTable.id, { onDelete: "cascade" }),
    profileId: text("profile_id")
      .notNull()
      .references(() => profilesTable.id, { onDelete: "cascade" }),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.itineraryId, t.profileId] }),
  }),
);


/**
 * Defines the database relations for the `profiles` table, which include:
 * - Each profile may create *many* itineraries.
 * - Each profile may like *many* itineraries.
 * - Each profile may save *many* itineraries.
 */
export const profilesRelations = relations(profilesTable, ({ many }) => ({
  itineraries: many(itinerariesTable),
  likes: many(itineraryLikesTable),
  saves: many(itinerarySavesTable),
}));

/**
 * Defines the database relations for the `itineraries` table, which include:
 * - Every itinerary must have *one* associated author (profile).
 * - Every itinerary may have *many* locations.
 * - Every itinerary may have *many* likes.
 * - Every itinerary may have *many* saves.
 */
export const itinerariesRelations = relations(itinerariesTable, ({ one, many }) => ({
  author: one(profilesTable, {
    fields: [itinerariesTable.authorId],
    references: [profilesTable.id],
  }),
  locations: many(itineraryLocationsTable),
  likes: many(itineraryLikesTable),
  saves: many(itinerarySavesTable),
}));

/**
 * Defines the database relations for the `itineraryLocations` table, which include:
 * - Every itinerary location must belong to *one* itinerary.
 * - Every itinerary location may have *many* photos.
 */
export const itineraryLocationsRelations = relations(itineraryLocationsTable, ({ one, many }) => ({
  itinerary: one(itinerariesTable, {
    fields: [itineraryLocationsTable.itineraryId],
    references: [itinerariesTable.id],
  }),
  photos: many(locationPhotosTable),
}));

/**
 * Defines the database relations for the `locationPhotos` table, which include:
 * - Every location photo must belong to *one* itinerary location.
 */
export const locationPhotosRelations = relations(locationPhotosTable, ({ one }) => ({
  location: one(itineraryLocationsTable, {
    fields: [locationPhotosTable.locationId],
    references: [itineraryLocationsTable.id],
  }),
}));

/**
 * Defines the database relations for the `itineraryLikes` table, which include:
 * - Every itinerary like must belong to *one* itinerary.
 * - Every itinerary like must belong to *one* profile.
 */
export const itineraryLikesRelations = relations(itineraryLikesTable, ({ one }) => ({
  itinerary: one(itinerariesTable, {
    fields: [itineraryLikesTable.itineraryId],
    references: [itinerariesTable.id],
  }),
  profile: one(profilesTable, {
    fields: [itineraryLikesTable.profileId],
    references: [profilesTable.id],
  }),
}));

/**
 * Defines the database relations for the `itinerarySaves` table, which include:
 * - Every itinerary save must belong to *one* itinerary.
 * - Every itinerary save must belong to *one* profile.
 */
export const itinerarySavesRelations = relations(itinerarySavesTable, ({ one }) => ({
  itinerary: one(itinerariesTable, {
    fields: [itinerarySavesTable.itineraryId],
    references: [itinerariesTable.id],
  }),
  profile: one(profilesTable, {
    fields: [itinerarySavesTable.profileId],
    references: [profilesTable.id],
  }),
}));