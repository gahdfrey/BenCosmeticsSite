// Only import what we're using
import { BaseClientOptions, XataRecord } from "@xata.io/client";

// Define base record type
interface BaseRecord {
  id: string;
  xata_id: string;
  xata_createdat: Date;
  xata_updatedat: Date;
  xata_version: number;
}

// Define product record type
interface ProductsRecord extends BaseRecord {
  heading?: string;
  title?: string;
  image?: string;
  link?: string;
  fullDescription?: string;
  ingredients?: string[];
  benefitLists?: string[];
  howToApply?: string;
  cardIngredients?: string;
}

// Replace empty object types and any with proper types
interface DatabaseSchema {
  products: ProductsRecord;
}

// Define client options
interface ClientOptions extends BaseClientOptions {
  databaseURL: string;
}

// Define table types
interface TableNames {
  products: "products";
}

// Define repository type
interface Repository<T extends XataRecord> {
  read(id: string): Promise<T | null>;
  create(data: Partial<T>): Promise<T>;
  update(id: string, data: Partial<T>): Promise<T>;
  delete(id: string): Promise<void>;
  filter(filter: Record<string, unknown>): Repository<T>;
  getFirst(): Promise<T | null>;
  getPaginated(options: { pagination: { size: number } }): Promise<{ records: T[] }>;
}

// Define database type
interface Database {
  products: Repository<ProductsRecord>;
}

// Define XataClient type
interface XataClient {
  db: Database;
}

// Export types
export type {
  ProductsRecord,
  DatabaseSchema,
  ClientOptions,
  TableNames,
  XataClient
};
