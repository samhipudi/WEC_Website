/**
 * Defines the `Profile` type, which represents a user profile in the database.
 */
export type Profile = {
  id: string;
  updated_at: string | null;
  username: string | null;
  full_name: string | null;
  avatar_url: string | null;
  website: string | null;
};
