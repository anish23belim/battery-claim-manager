
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Dealer
 * 
 */
export type Dealer = $Result.DefaultSelection<Prisma.$DealerPayload>
/**
 * Model Company
 * 
 */
export type Company = $Result.DefaultSelection<Prisma.$CompanyPayload>
/**
 * Model Claim
 * 
 */
export type Claim = $Result.DefaultSelection<Prisma.$ClaimPayload>
/**
 * Model Batch
 * 
 */
export type Batch = $Result.DefaultSelection<Prisma.$BatchPayload>
/**
 * Model Delivery
 * 
 */
export type Delivery = $Result.DefaultSelection<Prisma.$DeliveryPayload>
/**
 * Model DeliveryItem
 * 
 */
export type DeliveryItem = $Result.DefaultSelection<Prisma.$DeliveryItemPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dealer`: Exposes CRUD operations for the **Dealer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dealers
    * const dealers = await prisma.dealer.findMany()
    * ```
    */
  get dealer(): Prisma.DealerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **Company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.CompanyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.claim`: Exposes CRUD operations for the **Claim** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Claims
    * const claims = await prisma.claim.findMany()
    * ```
    */
  get claim(): Prisma.ClaimDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.batch`: Exposes CRUD operations for the **Batch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Batches
    * const batches = await prisma.batch.findMany()
    * ```
    */
  get batch(): Prisma.BatchDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.delivery`: Exposes CRUD operations for the **Delivery** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Deliveries
    * const deliveries = await prisma.delivery.findMany()
    * ```
    */
  get delivery(): Prisma.DeliveryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.deliveryItem`: Exposes CRUD operations for the **DeliveryItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DeliveryItems
    * const deliveryItems = await prisma.deliveryItem.findMany()
    * ```
    */
  get deliveryItem(): Prisma.DeliveryItemDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Dealer: 'Dealer',
    Company: 'Company',
    Claim: 'Claim',
    Batch: 'Batch',
    Delivery: 'Delivery',
    DeliveryItem: 'DeliveryItem'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "dealer" | "company" | "claim" | "batch" | "delivery" | "deliveryItem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Dealer: {
        payload: Prisma.$DealerPayload<ExtArgs>
        fields: Prisma.DealerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DealerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DealerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealerPayload>
          }
          findFirst: {
            args: Prisma.DealerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DealerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealerPayload>
          }
          findMany: {
            args: Prisma.DealerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealerPayload>[]
          }
          create: {
            args: Prisma.DealerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealerPayload>
          }
          createMany: {
            args: Prisma.DealerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DealerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealerPayload>[]
          }
          delete: {
            args: Prisma.DealerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealerPayload>
          }
          update: {
            args: Prisma.DealerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealerPayload>
          }
          deleteMany: {
            args: Prisma.DealerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DealerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DealerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealerPayload>[]
          }
          upsert: {
            args: Prisma.DealerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealerPayload>
          }
          aggregate: {
            args: Prisma.DealerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDealer>
          }
          groupBy: {
            args: Prisma.DealerGroupByArgs<ExtArgs>
            result: $Utils.Optional<DealerGroupByOutputType>[]
          }
          count: {
            args: Prisma.DealerCountArgs<ExtArgs>
            result: $Utils.Optional<DealerCountAggregateOutputType> | number
          }
        }
      }
      Company: {
        payload: Prisma.$CompanyPayload<ExtArgs>
        fields: Prisma.CompanyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findFirst: {
            args: Prisma.CompanyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findMany: {
            args: Prisma.CompanyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          create: {
            args: Prisma.CompanyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          createMany: {
            args: Prisma.CompanyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          delete: {
            args: Prisma.CompanyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          update: {
            args: Prisma.CompanyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          deleteMany: {
            args: Prisma.CompanyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompanyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          upsert: {
            args: Prisma.CompanyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompany>
          }
          groupBy: {
            args: Prisma.CompanyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number
          }
        }
      }
      Claim: {
        payload: Prisma.$ClaimPayload<ExtArgs>
        fields: Prisma.ClaimFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClaimFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClaimFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimPayload>
          }
          findFirst: {
            args: Prisma.ClaimFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClaimFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimPayload>
          }
          findMany: {
            args: Prisma.ClaimFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimPayload>[]
          }
          create: {
            args: Prisma.ClaimCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimPayload>
          }
          createMany: {
            args: Prisma.ClaimCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClaimCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimPayload>[]
          }
          delete: {
            args: Prisma.ClaimDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimPayload>
          }
          update: {
            args: Prisma.ClaimUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimPayload>
          }
          deleteMany: {
            args: Prisma.ClaimDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClaimUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClaimUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimPayload>[]
          }
          upsert: {
            args: Prisma.ClaimUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimPayload>
          }
          aggregate: {
            args: Prisma.ClaimAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClaim>
          }
          groupBy: {
            args: Prisma.ClaimGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClaimGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClaimCountArgs<ExtArgs>
            result: $Utils.Optional<ClaimCountAggregateOutputType> | number
          }
        }
      }
      Batch: {
        payload: Prisma.$BatchPayload<ExtArgs>
        fields: Prisma.BatchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BatchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BatchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>
          }
          findFirst: {
            args: Prisma.BatchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BatchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>
          }
          findMany: {
            args: Prisma.BatchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>[]
          }
          create: {
            args: Prisma.BatchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>
          }
          createMany: {
            args: Prisma.BatchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BatchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>[]
          }
          delete: {
            args: Prisma.BatchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>
          }
          update: {
            args: Prisma.BatchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>
          }
          deleteMany: {
            args: Prisma.BatchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BatchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BatchUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>[]
          }
          upsert: {
            args: Prisma.BatchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>
          }
          aggregate: {
            args: Prisma.BatchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBatch>
          }
          groupBy: {
            args: Prisma.BatchGroupByArgs<ExtArgs>
            result: $Utils.Optional<BatchGroupByOutputType>[]
          }
          count: {
            args: Prisma.BatchCountArgs<ExtArgs>
            result: $Utils.Optional<BatchCountAggregateOutputType> | number
          }
        }
      }
      Delivery: {
        payload: Prisma.$DeliveryPayload<ExtArgs>
        fields: Prisma.DeliveryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeliveryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeliveryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload>
          }
          findFirst: {
            args: Prisma.DeliveryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeliveryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload>
          }
          findMany: {
            args: Prisma.DeliveryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload>[]
          }
          create: {
            args: Prisma.DeliveryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload>
          }
          createMany: {
            args: Prisma.DeliveryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeliveryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload>[]
          }
          delete: {
            args: Prisma.DeliveryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload>
          }
          update: {
            args: Prisma.DeliveryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload>
          }
          deleteMany: {
            args: Prisma.DeliveryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeliveryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeliveryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload>[]
          }
          upsert: {
            args: Prisma.DeliveryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload>
          }
          aggregate: {
            args: Prisma.DeliveryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDelivery>
          }
          groupBy: {
            args: Prisma.DeliveryGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeliveryGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeliveryCountArgs<ExtArgs>
            result: $Utils.Optional<DeliveryCountAggregateOutputType> | number
          }
        }
      }
      DeliveryItem: {
        payload: Prisma.$DeliveryItemPayload<ExtArgs>
        fields: Prisma.DeliveryItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeliveryItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeliveryItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryItemPayload>
          }
          findFirst: {
            args: Prisma.DeliveryItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeliveryItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryItemPayload>
          }
          findMany: {
            args: Prisma.DeliveryItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryItemPayload>[]
          }
          create: {
            args: Prisma.DeliveryItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryItemPayload>
          }
          createMany: {
            args: Prisma.DeliveryItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeliveryItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryItemPayload>[]
          }
          delete: {
            args: Prisma.DeliveryItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryItemPayload>
          }
          update: {
            args: Prisma.DeliveryItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryItemPayload>
          }
          deleteMany: {
            args: Prisma.DeliveryItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeliveryItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeliveryItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryItemPayload>[]
          }
          upsert: {
            args: Prisma.DeliveryItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryItemPayload>
          }
          aggregate: {
            args: Prisma.DeliveryItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeliveryItem>
          }
          groupBy: {
            args: Prisma.DeliveryItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeliveryItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeliveryItemCountArgs<ExtArgs>
            result: $Utils.Optional<DeliveryItemCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    dealer?: DealerOmit
    company?: CompanyOmit
    claim?: ClaimOmit
    batch?: BatchOmit
    delivery?: DeliveryOmit
    deliveryItem?: DeliveryItemOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type DealerCountOutputType
   */

  export type DealerCountOutputType = {
    claims: number
    deliveries: number
  }

  export type DealerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    claims?: boolean | DealerCountOutputTypeCountClaimsArgs
    deliveries?: boolean | DealerCountOutputTypeCountDeliveriesArgs
  }

  // Custom InputTypes
  /**
   * DealerCountOutputType without action
   */
  export type DealerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealerCountOutputType
     */
    select?: DealerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DealerCountOutputType without action
   */
  export type DealerCountOutputTypeCountClaimsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClaimWhereInput
  }

  /**
   * DealerCountOutputType without action
   */
  export type DealerCountOutputTypeCountDeliveriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeliveryWhereInput
  }


  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    claims: number
    batches: number
  }

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    claims?: boolean | CompanyCountOutputTypeCountClaimsArgs
    batches?: boolean | CompanyCountOutputTypeCountBatchesArgs
  }

  // Custom InputTypes
  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountClaimsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClaimWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountBatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BatchWhereInput
  }


  /**
   * Count Type ClaimCountOutputType
   */

  export type ClaimCountOutputType = {
    deliveryItems: number
  }

  export type ClaimCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deliveryItems?: boolean | ClaimCountOutputTypeCountDeliveryItemsArgs
  }

  // Custom InputTypes
  /**
   * ClaimCountOutputType without action
   */
  export type ClaimCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClaimCountOutputType
     */
    select?: ClaimCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClaimCountOutputType without action
   */
  export type ClaimCountOutputTypeCountDeliveryItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeliveryItemWhereInput
  }


  /**
   * Count Type BatchCountOutputType
   */

  export type BatchCountOutputType = {
    claims: number
  }

  export type BatchCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    claims?: boolean | BatchCountOutputTypeCountClaimsArgs
  }

  // Custom InputTypes
  /**
   * BatchCountOutputType without action
   */
  export type BatchCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchCountOutputType
     */
    select?: BatchCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BatchCountOutputType without action
   */
  export type BatchCountOutputTypeCountClaimsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClaimWhereInput
  }


  /**
   * Count Type DeliveryCountOutputType
   */

  export type DeliveryCountOutputType = {
    items: number
  }

  export type DeliveryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | DeliveryCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * DeliveryCountOutputType without action
   */
  export type DeliveryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryCountOutputType
     */
    select?: DeliveryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DeliveryCountOutputType without action
   */
  export type DeliveryCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeliveryItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    role: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    role: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    role: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    password: string
    role: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "role", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      password: string
      role: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model Dealer
   */

  export type AggregateDealer = {
    _count: DealerCountAggregateOutputType | null
    _avg: DealerAvgAggregateOutputType | null
    _sum: DealerSumAggregateOutputType | null
    _min: DealerMinAggregateOutputType | null
    _max: DealerMaxAggregateOutputType | null
  }

  export type DealerAvgAggregateOutputType = {
    openingPendingBalance: number | null
  }

  export type DealerSumAggregateOutputType = {
    openingPendingBalance: number | null
  }

  export type DealerMinAggregateOutputType = {
    id: string | null
    name: string | null
    mobile: string | null
    whatsapp: string | null
    shopName: string | null
    city: string | null
    address: string | null
    gstNumber: string | null
    openingPendingBalance: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DealerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    mobile: string | null
    whatsapp: string | null
    shopName: string | null
    city: string | null
    address: string | null
    gstNumber: string | null
    openingPendingBalance: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DealerCountAggregateOutputType = {
    id: number
    name: number
    mobile: number
    whatsapp: number
    shopName: number
    city: number
    address: number
    gstNumber: number
    openingPendingBalance: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DealerAvgAggregateInputType = {
    openingPendingBalance?: true
  }

  export type DealerSumAggregateInputType = {
    openingPendingBalance?: true
  }

  export type DealerMinAggregateInputType = {
    id?: true
    name?: true
    mobile?: true
    whatsapp?: true
    shopName?: true
    city?: true
    address?: true
    gstNumber?: true
    openingPendingBalance?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DealerMaxAggregateInputType = {
    id?: true
    name?: true
    mobile?: true
    whatsapp?: true
    shopName?: true
    city?: true
    address?: true
    gstNumber?: true
    openingPendingBalance?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DealerCountAggregateInputType = {
    id?: true
    name?: true
    mobile?: true
    whatsapp?: true
    shopName?: true
    city?: true
    address?: true
    gstNumber?: true
    openingPendingBalance?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DealerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dealer to aggregate.
     */
    where?: DealerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dealers to fetch.
     */
    orderBy?: DealerOrderByWithRelationInput | DealerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DealerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dealers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dealers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dealers
    **/
    _count?: true | DealerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DealerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DealerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DealerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DealerMaxAggregateInputType
  }

  export type GetDealerAggregateType<T extends DealerAggregateArgs> = {
        [P in keyof T & keyof AggregateDealer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDealer[P]>
      : GetScalarType<T[P], AggregateDealer[P]>
  }




  export type DealerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DealerWhereInput
    orderBy?: DealerOrderByWithAggregationInput | DealerOrderByWithAggregationInput[]
    by: DealerScalarFieldEnum[] | DealerScalarFieldEnum
    having?: DealerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DealerCountAggregateInputType | true
    _avg?: DealerAvgAggregateInputType
    _sum?: DealerSumAggregateInputType
    _min?: DealerMinAggregateInputType
    _max?: DealerMaxAggregateInputType
  }

  export type DealerGroupByOutputType = {
    id: string
    name: string
    mobile: string
    whatsapp: string | null
    shopName: string
    city: string
    address: string
    gstNumber: string | null
    openingPendingBalance: number
    createdAt: Date
    updatedAt: Date
    _count: DealerCountAggregateOutputType | null
    _avg: DealerAvgAggregateOutputType | null
    _sum: DealerSumAggregateOutputType | null
    _min: DealerMinAggregateOutputType | null
    _max: DealerMaxAggregateOutputType | null
  }

  type GetDealerGroupByPayload<T extends DealerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DealerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DealerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DealerGroupByOutputType[P]>
            : GetScalarType<T[P], DealerGroupByOutputType[P]>
        }
      >
    >


  export type DealerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    mobile?: boolean
    whatsapp?: boolean
    shopName?: boolean
    city?: boolean
    address?: boolean
    gstNumber?: boolean
    openingPendingBalance?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    claims?: boolean | Dealer$claimsArgs<ExtArgs>
    deliveries?: boolean | Dealer$deliveriesArgs<ExtArgs>
    _count?: boolean | DealerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dealer"]>

  export type DealerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    mobile?: boolean
    whatsapp?: boolean
    shopName?: boolean
    city?: boolean
    address?: boolean
    gstNumber?: boolean
    openingPendingBalance?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["dealer"]>

  export type DealerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    mobile?: boolean
    whatsapp?: boolean
    shopName?: boolean
    city?: boolean
    address?: boolean
    gstNumber?: boolean
    openingPendingBalance?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["dealer"]>

  export type DealerSelectScalar = {
    id?: boolean
    name?: boolean
    mobile?: boolean
    whatsapp?: boolean
    shopName?: boolean
    city?: boolean
    address?: boolean
    gstNumber?: boolean
    openingPendingBalance?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DealerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "mobile" | "whatsapp" | "shopName" | "city" | "address" | "gstNumber" | "openingPendingBalance" | "createdAt" | "updatedAt", ExtArgs["result"]["dealer"]>
  export type DealerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    claims?: boolean | Dealer$claimsArgs<ExtArgs>
    deliveries?: boolean | Dealer$deliveriesArgs<ExtArgs>
    _count?: boolean | DealerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DealerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DealerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DealerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dealer"
    objects: {
      claims: Prisma.$ClaimPayload<ExtArgs>[]
      deliveries: Prisma.$DeliveryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      mobile: string
      whatsapp: string | null
      shopName: string
      city: string
      address: string
      gstNumber: string | null
      openingPendingBalance: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["dealer"]>
    composites: {}
  }

  type DealerGetPayload<S extends boolean | null | undefined | DealerDefaultArgs> = $Result.GetResult<Prisma.$DealerPayload, S>

  type DealerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DealerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DealerCountAggregateInputType | true
    }

  export interface DealerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dealer'], meta: { name: 'Dealer' } }
    /**
     * Find zero or one Dealer that matches the filter.
     * @param {DealerFindUniqueArgs} args - Arguments to find a Dealer
     * @example
     * // Get one Dealer
     * const dealer = await prisma.dealer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DealerFindUniqueArgs>(args: SelectSubset<T, DealerFindUniqueArgs<ExtArgs>>): Prisma__DealerClient<$Result.GetResult<Prisma.$DealerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dealer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DealerFindUniqueOrThrowArgs} args - Arguments to find a Dealer
     * @example
     * // Get one Dealer
     * const dealer = await prisma.dealer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DealerFindUniqueOrThrowArgs>(args: SelectSubset<T, DealerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DealerClient<$Result.GetResult<Prisma.$DealerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dealer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealerFindFirstArgs} args - Arguments to find a Dealer
     * @example
     * // Get one Dealer
     * const dealer = await prisma.dealer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DealerFindFirstArgs>(args?: SelectSubset<T, DealerFindFirstArgs<ExtArgs>>): Prisma__DealerClient<$Result.GetResult<Prisma.$DealerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dealer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealerFindFirstOrThrowArgs} args - Arguments to find a Dealer
     * @example
     * // Get one Dealer
     * const dealer = await prisma.dealer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DealerFindFirstOrThrowArgs>(args?: SelectSubset<T, DealerFindFirstOrThrowArgs<ExtArgs>>): Prisma__DealerClient<$Result.GetResult<Prisma.$DealerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dealers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dealers
     * const dealers = await prisma.dealer.findMany()
     * 
     * // Get first 10 Dealers
     * const dealers = await prisma.dealer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dealerWithIdOnly = await prisma.dealer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DealerFindManyArgs>(args?: SelectSubset<T, DealerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DealerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dealer.
     * @param {DealerCreateArgs} args - Arguments to create a Dealer.
     * @example
     * // Create one Dealer
     * const Dealer = await prisma.dealer.create({
     *   data: {
     *     // ... data to create a Dealer
     *   }
     * })
     * 
     */
    create<T extends DealerCreateArgs>(args: SelectSubset<T, DealerCreateArgs<ExtArgs>>): Prisma__DealerClient<$Result.GetResult<Prisma.$DealerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dealers.
     * @param {DealerCreateManyArgs} args - Arguments to create many Dealers.
     * @example
     * // Create many Dealers
     * const dealer = await prisma.dealer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DealerCreateManyArgs>(args?: SelectSubset<T, DealerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Dealers and returns the data saved in the database.
     * @param {DealerCreateManyAndReturnArgs} args - Arguments to create many Dealers.
     * @example
     * // Create many Dealers
     * const dealer = await prisma.dealer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Dealers and only return the `id`
     * const dealerWithIdOnly = await prisma.dealer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DealerCreateManyAndReturnArgs>(args?: SelectSubset<T, DealerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DealerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Dealer.
     * @param {DealerDeleteArgs} args - Arguments to delete one Dealer.
     * @example
     * // Delete one Dealer
     * const Dealer = await prisma.dealer.delete({
     *   where: {
     *     // ... filter to delete one Dealer
     *   }
     * })
     * 
     */
    delete<T extends DealerDeleteArgs>(args: SelectSubset<T, DealerDeleteArgs<ExtArgs>>): Prisma__DealerClient<$Result.GetResult<Prisma.$DealerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dealer.
     * @param {DealerUpdateArgs} args - Arguments to update one Dealer.
     * @example
     * // Update one Dealer
     * const dealer = await prisma.dealer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DealerUpdateArgs>(args: SelectSubset<T, DealerUpdateArgs<ExtArgs>>): Prisma__DealerClient<$Result.GetResult<Prisma.$DealerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dealers.
     * @param {DealerDeleteManyArgs} args - Arguments to filter Dealers to delete.
     * @example
     * // Delete a few Dealers
     * const { count } = await prisma.dealer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DealerDeleteManyArgs>(args?: SelectSubset<T, DealerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dealers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dealers
     * const dealer = await prisma.dealer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DealerUpdateManyArgs>(args: SelectSubset<T, DealerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dealers and returns the data updated in the database.
     * @param {DealerUpdateManyAndReturnArgs} args - Arguments to update many Dealers.
     * @example
     * // Update many Dealers
     * const dealer = await prisma.dealer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Dealers and only return the `id`
     * const dealerWithIdOnly = await prisma.dealer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DealerUpdateManyAndReturnArgs>(args: SelectSubset<T, DealerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DealerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Dealer.
     * @param {DealerUpsertArgs} args - Arguments to update or create a Dealer.
     * @example
     * // Update or create a Dealer
     * const dealer = await prisma.dealer.upsert({
     *   create: {
     *     // ... data to create a Dealer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dealer we want to update
     *   }
     * })
     */
    upsert<T extends DealerUpsertArgs>(args: SelectSubset<T, DealerUpsertArgs<ExtArgs>>): Prisma__DealerClient<$Result.GetResult<Prisma.$DealerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dealers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealerCountArgs} args - Arguments to filter Dealers to count.
     * @example
     * // Count the number of Dealers
     * const count = await prisma.dealer.count({
     *   where: {
     *     // ... the filter for the Dealers we want to count
     *   }
     * })
    **/
    count<T extends DealerCountArgs>(
      args?: Subset<T, DealerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DealerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dealer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DealerAggregateArgs>(args: Subset<T, DealerAggregateArgs>): Prisma.PrismaPromise<GetDealerAggregateType<T>>

    /**
     * Group by Dealer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DealerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DealerGroupByArgs['orderBy'] }
        : { orderBy?: DealerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DealerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDealerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dealer model
   */
  readonly fields: DealerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dealer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DealerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    claims<T extends Dealer$claimsArgs<ExtArgs> = {}>(args?: Subset<T, Dealer$claimsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    deliveries<T extends Dealer$deliveriesArgs<ExtArgs> = {}>(args?: Subset<T, Dealer$deliveriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Dealer model
   */
  interface DealerFieldRefs {
    readonly id: FieldRef<"Dealer", 'String'>
    readonly name: FieldRef<"Dealer", 'String'>
    readonly mobile: FieldRef<"Dealer", 'String'>
    readonly whatsapp: FieldRef<"Dealer", 'String'>
    readonly shopName: FieldRef<"Dealer", 'String'>
    readonly city: FieldRef<"Dealer", 'String'>
    readonly address: FieldRef<"Dealer", 'String'>
    readonly gstNumber: FieldRef<"Dealer", 'String'>
    readonly openingPendingBalance: FieldRef<"Dealer", 'Int'>
    readonly createdAt: FieldRef<"Dealer", 'DateTime'>
    readonly updatedAt: FieldRef<"Dealer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Dealer findUnique
   */
  export type DealerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dealer
     */
    select?: DealerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dealer
     */
    omit?: DealerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealerInclude<ExtArgs> | null
    /**
     * Filter, which Dealer to fetch.
     */
    where: DealerWhereUniqueInput
  }

  /**
   * Dealer findUniqueOrThrow
   */
  export type DealerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dealer
     */
    select?: DealerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dealer
     */
    omit?: DealerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealerInclude<ExtArgs> | null
    /**
     * Filter, which Dealer to fetch.
     */
    where: DealerWhereUniqueInput
  }

  /**
   * Dealer findFirst
   */
  export type DealerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dealer
     */
    select?: DealerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dealer
     */
    omit?: DealerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealerInclude<ExtArgs> | null
    /**
     * Filter, which Dealer to fetch.
     */
    where?: DealerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dealers to fetch.
     */
    orderBy?: DealerOrderByWithRelationInput | DealerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dealers.
     */
    cursor?: DealerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dealers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dealers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dealers.
     */
    distinct?: DealerScalarFieldEnum | DealerScalarFieldEnum[]
  }

  /**
   * Dealer findFirstOrThrow
   */
  export type DealerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dealer
     */
    select?: DealerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dealer
     */
    omit?: DealerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealerInclude<ExtArgs> | null
    /**
     * Filter, which Dealer to fetch.
     */
    where?: DealerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dealers to fetch.
     */
    orderBy?: DealerOrderByWithRelationInput | DealerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dealers.
     */
    cursor?: DealerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dealers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dealers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dealers.
     */
    distinct?: DealerScalarFieldEnum | DealerScalarFieldEnum[]
  }

  /**
   * Dealer findMany
   */
  export type DealerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dealer
     */
    select?: DealerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dealer
     */
    omit?: DealerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealerInclude<ExtArgs> | null
    /**
     * Filter, which Dealers to fetch.
     */
    where?: DealerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dealers to fetch.
     */
    orderBy?: DealerOrderByWithRelationInput | DealerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dealers.
     */
    cursor?: DealerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dealers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dealers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dealers.
     */
    distinct?: DealerScalarFieldEnum | DealerScalarFieldEnum[]
  }

  /**
   * Dealer create
   */
  export type DealerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dealer
     */
    select?: DealerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dealer
     */
    omit?: DealerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealerInclude<ExtArgs> | null
    /**
     * The data needed to create a Dealer.
     */
    data: XOR<DealerCreateInput, DealerUncheckedCreateInput>
  }

  /**
   * Dealer createMany
   */
  export type DealerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Dealers.
     */
    data: DealerCreateManyInput | DealerCreateManyInput[]
  }

  /**
   * Dealer createManyAndReturn
   */
  export type DealerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dealer
     */
    select?: DealerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dealer
     */
    omit?: DealerOmit<ExtArgs> | null
    /**
     * The data used to create many Dealers.
     */
    data: DealerCreateManyInput | DealerCreateManyInput[]
  }

  /**
   * Dealer update
   */
  export type DealerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dealer
     */
    select?: DealerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dealer
     */
    omit?: DealerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealerInclude<ExtArgs> | null
    /**
     * The data needed to update a Dealer.
     */
    data: XOR<DealerUpdateInput, DealerUncheckedUpdateInput>
    /**
     * Choose, which Dealer to update.
     */
    where: DealerWhereUniqueInput
  }

  /**
   * Dealer updateMany
   */
  export type DealerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dealers.
     */
    data: XOR<DealerUpdateManyMutationInput, DealerUncheckedUpdateManyInput>
    /**
     * Filter which Dealers to update
     */
    where?: DealerWhereInput
    /**
     * Limit how many Dealers to update.
     */
    limit?: number
  }

  /**
   * Dealer updateManyAndReturn
   */
  export type DealerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dealer
     */
    select?: DealerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dealer
     */
    omit?: DealerOmit<ExtArgs> | null
    /**
     * The data used to update Dealers.
     */
    data: XOR<DealerUpdateManyMutationInput, DealerUncheckedUpdateManyInput>
    /**
     * Filter which Dealers to update
     */
    where?: DealerWhereInput
    /**
     * Limit how many Dealers to update.
     */
    limit?: number
  }

  /**
   * Dealer upsert
   */
  export type DealerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dealer
     */
    select?: DealerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dealer
     */
    omit?: DealerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealerInclude<ExtArgs> | null
    /**
     * The filter to search for the Dealer to update in case it exists.
     */
    where: DealerWhereUniqueInput
    /**
     * In case the Dealer found by the `where` argument doesn't exist, create a new Dealer with this data.
     */
    create: XOR<DealerCreateInput, DealerUncheckedCreateInput>
    /**
     * In case the Dealer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DealerUpdateInput, DealerUncheckedUpdateInput>
  }

  /**
   * Dealer delete
   */
  export type DealerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dealer
     */
    select?: DealerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dealer
     */
    omit?: DealerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealerInclude<ExtArgs> | null
    /**
     * Filter which Dealer to delete.
     */
    where: DealerWhereUniqueInput
  }

  /**
   * Dealer deleteMany
   */
  export type DealerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dealers to delete
     */
    where?: DealerWhereInput
    /**
     * Limit how many Dealers to delete.
     */
    limit?: number
  }

  /**
   * Dealer.claims
   */
  export type Dealer$claimsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
    where?: ClaimWhereInput
    orderBy?: ClaimOrderByWithRelationInput | ClaimOrderByWithRelationInput[]
    cursor?: ClaimWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClaimScalarFieldEnum | ClaimScalarFieldEnum[]
  }

  /**
   * Dealer.deliveries
   */
  export type Dealer$deliveriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    where?: DeliveryWhereInput
    orderBy?: DeliveryOrderByWithRelationInput | DeliveryOrderByWithRelationInput[]
    cursor?: DeliveryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeliveryScalarFieldEnum | DeliveryScalarFieldEnum[]
  }

  /**
   * Dealer without action
   */
  export type DealerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dealer
     */
    select?: DealerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dealer
     */
    omit?: DealerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealerInclude<ExtArgs> | null
  }


  /**
   * Model Company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyMinAggregateOutputType = {
    id: string | null
    name: string | null
    brandName: string | null
    contactPerson: string | null
    mobile: string | null
    address: string | null
  }

  export type CompanyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    brandName: string | null
    contactPerson: string | null
    mobile: string | null
    address: string | null
  }

  export type CompanyCountAggregateOutputType = {
    id: number
    name: number
    brandName: number
    contactPerson: number
    mobile: number
    address: number
    _all: number
  }


  export type CompanyMinAggregateInputType = {
    id?: true
    name?: true
    brandName?: true
    contactPerson?: true
    mobile?: true
    address?: true
  }

  export type CompanyMaxAggregateInputType = {
    id?: true
    name?: true
    brandName?: true
    contactPerson?: true
    mobile?: true
    address?: true
  }

  export type CompanyCountAggregateInputType = {
    id?: true
    name?: true
    brandName?: true
    contactPerson?: true
    mobile?: true
    address?: true
    _all?: true
  }

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Company to aggregate.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type CompanyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithAggregationInput | CompanyOrderByWithAggregationInput[]
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum
    having?: CompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }

  export type CompanyGroupByOutputType = {
    id: string
    name: string
    brandName: string
    contactPerson: string | null
    mobile: string | null
    address: string | null
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends CompanyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type CompanySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    brandName?: boolean
    contactPerson?: boolean
    mobile?: boolean
    address?: boolean
    claims?: boolean | Company$claimsArgs<ExtArgs>
    batches?: boolean | Company$batchesArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type CompanySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    brandName?: boolean
    contactPerson?: boolean
    mobile?: boolean
    address?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    brandName?: boolean
    contactPerson?: boolean
    mobile?: boolean
    address?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectScalar = {
    id?: boolean
    name?: boolean
    brandName?: boolean
    contactPerson?: boolean
    mobile?: boolean
    address?: boolean
  }

  export type CompanyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "brandName" | "contactPerson" | "mobile" | "address", ExtArgs["result"]["company"]>
  export type CompanyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    claims?: boolean | Company$claimsArgs<ExtArgs>
    batches?: boolean | Company$batchesArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompanyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CompanyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CompanyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Company"
    objects: {
      claims: Prisma.$ClaimPayload<ExtArgs>[]
      batches: Prisma.$BatchPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      brandName: string
      contactPerson: string | null
      mobile: string | null
      address: string | null
    }, ExtArgs["result"]["company"]>
    composites: {}
  }

  type CompanyGetPayload<S extends boolean | null | undefined | CompanyDefaultArgs> = $Result.GetResult<Prisma.$CompanyPayload, S>

  type CompanyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface CompanyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Company'], meta: { name: 'Company' } }
    /**
     * Find zero or one Company that matches the filter.
     * @param {CompanyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyFindUniqueArgs>(args: SelectSubset<T, CompanyFindUniqueArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Company that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyFindFirstArgs>(args?: SelectSubset<T, CompanyFindFirstArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanyFindManyArgs>(args?: SelectSubset<T, CompanyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Company.
     * @param {CompanyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
     */
    create<T extends CompanyCreateArgs>(args: SelectSubset<T, CompanyCreateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Companies.
     * @param {CompanyCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyCreateManyArgs>(args?: SelectSubset<T, CompanyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Companies and returns the data saved in the database.
     * @param {CompanyCreateManyAndReturnArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanyCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Company.
     * @param {CompanyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
     */
    delete<T extends CompanyDeleteArgs>(args: SelectSubset<T, CompanyDeleteArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Company.
     * @param {CompanyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyUpdateArgs>(args: SelectSubset<T, CompanyUpdateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Companies.
     * @param {CompanyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyDeleteManyArgs>(args?: SelectSubset<T, CompanyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyUpdateManyArgs>(args: SelectSubset<T, CompanyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies and returns the data updated in the database.
     * @param {CompanyUpdateManyAndReturnArgs} args - Arguments to update many Companies.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CompanyUpdateManyAndReturnArgs>(args: SelectSubset<T, CompanyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Company.
     * @param {CompanyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     */
    upsert<T extends CompanyUpsertArgs>(args: SelectSubset<T, CompanyUpsertArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends CompanyCountArgs>(
      args?: Subset<T, CompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyGroupByArgs['orderBy'] }
        : { orderBy?: CompanyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Company model
   */
  readonly fields: CompanyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    claims<T extends Company$claimsArgs<ExtArgs> = {}>(args?: Subset<T, Company$claimsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    batches<T extends Company$batchesArgs<ExtArgs> = {}>(args?: Subset<T, Company$batchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Company model
   */
  interface CompanyFieldRefs {
    readonly id: FieldRef<"Company", 'String'>
    readonly name: FieldRef<"Company", 'String'>
    readonly brandName: FieldRef<"Company", 'String'>
    readonly contactPerson: FieldRef<"Company", 'String'>
    readonly mobile: FieldRef<"Company", 'String'>
    readonly address: FieldRef<"Company", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Company findUnique
   */
  export type CompanyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findUniqueOrThrow
   */
  export type CompanyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findFirst
   */
  export type CompanyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findFirstOrThrow
   */
  export type CompanyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findMany
   */
  export type CompanyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company create
   */
  export type CompanyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to create a Company.
     */
    data: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
  }

  /**
   * Company createMany
   */
  export type CompanyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
  }

  /**
   * Company createManyAndReturn
   */
  export type CompanyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
  }

  /**
   * Company update
   */
  export type CompanyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to update a Company.
     */
    data: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
    /**
     * Choose, which Company to update.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company updateMany
   */
  export type CompanyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company updateManyAndReturn
   */
  export type CompanyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company upsert
   */
  export type CompanyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The filter to search for the Company to update in case it exists.
     */
    where: CompanyWhereUniqueInput
    /**
     * In case the Company found by the `where` argument doesn't exist, create a new Company with this data.
     */
    create: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
    /**
     * In case the Company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
  }

  /**
   * Company delete
   */
  export type CompanyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter which Company to delete.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company deleteMany
   */
  export type CompanyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companies to delete
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to delete.
     */
    limit?: number
  }

  /**
   * Company.claims
   */
  export type Company$claimsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
    where?: ClaimWhereInput
    orderBy?: ClaimOrderByWithRelationInput | ClaimOrderByWithRelationInput[]
    cursor?: ClaimWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClaimScalarFieldEnum | ClaimScalarFieldEnum[]
  }

  /**
   * Company.batches
   */
  export type Company$batchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
    where?: BatchWhereInput
    orderBy?: BatchOrderByWithRelationInput | BatchOrderByWithRelationInput[]
    cursor?: BatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BatchScalarFieldEnum | BatchScalarFieldEnum[]
  }

  /**
   * Company without action
   */
  export type CompanyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
  }


  /**
   * Model Claim
   */

  export type AggregateClaim = {
    _count: ClaimCountAggregateOutputType | null
    _min: ClaimMinAggregateOutputType | null
    _max: ClaimMaxAggregateOutputType | null
  }

  export type ClaimMinAggregateOutputType = {
    id: string | null
    claimNumber: string | null
    date: Date | null
    dealerId: string | null
    customerName: string | null
    customerMobile: string | null
    companyId: string | null
    batteryModel: string | null
    oldSerialNumber: string | null
    batteryType: string | null
    warrantyCard: string | null
    saleDate: Date | null
    problem: string | null
    status: string | null
    remarks: string | null
    photoUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    batchId: string | null
  }

  export type ClaimMaxAggregateOutputType = {
    id: string | null
    claimNumber: string | null
    date: Date | null
    dealerId: string | null
    customerName: string | null
    customerMobile: string | null
    companyId: string | null
    batteryModel: string | null
    oldSerialNumber: string | null
    batteryType: string | null
    warrantyCard: string | null
    saleDate: Date | null
    problem: string | null
    status: string | null
    remarks: string | null
    photoUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    batchId: string | null
  }

  export type ClaimCountAggregateOutputType = {
    id: number
    claimNumber: number
    date: number
    dealerId: number
    customerName: number
    customerMobile: number
    companyId: number
    batteryModel: number
    oldSerialNumber: number
    batteryType: number
    warrantyCard: number
    saleDate: number
    problem: number
    status: number
    remarks: number
    photoUrl: number
    createdAt: number
    updatedAt: number
    batchId: number
    _all: number
  }


  export type ClaimMinAggregateInputType = {
    id?: true
    claimNumber?: true
    date?: true
    dealerId?: true
    customerName?: true
    customerMobile?: true
    companyId?: true
    batteryModel?: true
    oldSerialNumber?: true
    batteryType?: true
    warrantyCard?: true
    saleDate?: true
    problem?: true
    status?: true
    remarks?: true
    photoUrl?: true
    createdAt?: true
    updatedAt?: true
    batchId?: true
  }

  export type ClaimMaxAggregateInputType = {
    id?: true
    claimNumber?: true
    date?: true
    dealerId?: true
    customerName?: true
    customerMobile?: true
    companyId?: true
    batteryModel?: true
    oldSerialNumber?: true
    batteryType?: true
    warrantyCard?: true
    saleDate?: true
    problem?: true
    status?: true
    remarks?: true
    photoUrl?: true
    createdAt?: true
    updatedAt?: true
    batchId?: true
  }

  export type ClaimCountAggregateInputType = {
    id?: true
    claimNumber?: true
    date?: true
    dealerId?: true
    customerName?: true
    customerMobile?: true
    companyId?: true
    batteryModel?: true
    oldSerialNumber?: true
    batteryType?: true
    warrantyCard?: true
    saleDate?: true
    problem?: true
    status?: true
    remarks?: true
    photoUrl?: true
    createdAt?: true
    updatedAt?: true
    batchId?: true
    _all?: true
  }

  export type ClaimAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Claim to aggregate.
     */
    where?: ClaimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Claims to fetch.
     */
    orderBy?: ClaimOrderByWithRelationInput | ClaimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClaimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Claims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Claims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Claims
    **/
    _count?: true | ClaimCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClaimMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClaimMaxAggregateInputType
  }

  export type GetClaimAggregateType<T extends ClaimAggregateArgs> = {
        [P in keyof T & keyof AggregateClaim]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClaim[P]>
      : GetScalarType<T[P], AggregateClaim[P]>
  }




  export type ClaimGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClaimWhereInput
    orderBy?: ClaimOrderByWithAggregationInput | ClaimOrderByWithAggregationInput[]
    by: ClaimScalarFieldEnum[] | ClaimScalarFieldEnum
    having?: ClaimScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClaimCountAggregateInputType | true
    _min?: ClaimMinAggregateInputType
    _max?: ClaimMaxAggregateInputType
  }

  export type ClaimGroupByOutputType = {
    id: string
    claimNumber: string
    date: Date
    dealerId: string
    customerName: string | null
    customerMobile: string | null
    companyId: string
    batteryModel: string
    oldSerialNumber: string
    batteryType: string
    warrantyCard: string | null
    saleDate: Date | null
    problem: string
    status: string
    remarks: string | null
    photoUrl: string | null
    createdAt: Date
    updatedAt: Date
    batchId: string | null
    _count: ClaimCountAggregateOutputType | null
    _min: ClaimMinAggregateOutputType | null
    _max: ClaimMaxAggregateOutputType | null
  }

  type GetClaimGroupByPayload<T extends ClaimGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClaimGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClaimGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClaimGroupByOutputType[P]>
            : GetScalarType<T[P], ClaimGroupByOutputType[P]>
        }
      >
    >


  export type ClaimSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    claimNumber?: boolean
    date?: boolean
    dealerId?: boolean
    customerName?: boolean
    customerMobile?: boolean
    companyId?: boolean
    batteryModel?: boolean
    oldSerialNumber?: boolean
    batteryType?: boolean
    warrantyCard?: boolean
    saleDate?: boolean
    problem?: boolean
    status?: boolean
    remarks?: boolean
    photoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    batchId?: boolean
    dealer?: boolean | DealerDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    batch?: boolean | Claim$batchArgs<ExtArgs>
    deliveryItems?: boolean | Claim$deliveryItemsArgs<ExtArgs>
    _count?: boolean | ClaimCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["claim"]>

  export type ClaimSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    claimNumber?: boolean
    date?: boolean
    dealerId?: boolean
    customerName?: boolean
    customerMobile?: boolean
    companyId?: boolean
    batteryModel?: boolean
    oldSerialNumber?: boolean
    batteryType?: boolean
    warrantyCard?: boolean
    saleDate?: boolean
    problem?: boolean
    status?: boolean
    remarks?: boolean
    photoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    batchId?: boolean
    dealer?: boolean | DealerDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    batch?: boolean | Claim$batchArgs<ExtArgs>
  }, ExtArgs["result"]["claim"]>

  export type ClaimSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    claimNumber?: boolean
    date?: boolean
    dealerId?: boolean
    customerName?: boolean
    customerMobile?: boolean
    companyId?: boolean
    batteryModel?: boolean
    oldSerialNumber?: boolean
    batteryType?: boolean
    warrantyCard?: boolean
    saleDate?: boolean
    problem?: boolean
    status?: boolean
    remarks?: boolean
    photoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    batchId?: boolean
    dealer?: boolean | DealerDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    batch?: boolean | Claim$batchArgs<ExtArgs>
  }, ExtArgs["result"]["claim"]>

  export type ClaimSelectScalar = {
    id?: boolean
    claimNumber?: boolean
    date?: boolean
    dealerId?: boolean
    customerName?: boolean
    customerMobile?: boolean
    companyId?: boolean
    batteryModel?: boolean
    oldSerialNumber?: boolean
    batteryType?: boolean
    warrantyCard?: boolean
    saleDate?: boolean
    problem?: boolean
    status?: boolean
    remarks?: boolean
    photoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    batchId?: boolean
  }

  export type ClaimOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "claimNumber" | "date" | "dealerId" | "customerName" | "customerMobile" | "companyId" | "batteryModel" | "oldSerialNumber" | "batteryType" | "warrantyCard" | "saleDate" | "problem" | "status" | "remarks" | "photoUrl" | "createdAt" | "updatedAt" | "batchId", ExtArgs["result"]["claim"]>
  export type ClaimInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dealer?: boolean | DealerDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    batch?: boolean | Claim$batchArgs<ExtArgs>
    deliveryItems?: boolean | Claim$deliveryItemsArgs<ExtArgs>
    _count?: boolean | ClaimCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClaimIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dealer?: boolean | DealerDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    batch?: boolean | Claim$batchArgs<ExtArgs>
  }
  export type ClaimIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dealer?: boolean | DealerDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    batch?: boolean | Claim$batchArgs<ExtArgs>
  }

  export type $ClaimPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Claim"
    objects: {
      dealer: Prisma.$DealerPayload<ExtArgs>
      company: Prisma.$CompanyPayload<ExtArgs>
      batch: Prisma.$BatchPayload<ExtArgs> | null
      deliveryItems: Prisma.$DeliveryItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      claimNumber: string
      date: Date
      dealerId: string
      customerName: string | null
      customerMobile: string | null
      companyId: string
      batteryModel: string
      oldSerialNumber: string
      batteryType: string
      warrantyCard: string | null
      saleDate: Date | null
      problem: string
      status: string
      remarks: string | null
      photoUrl: string | null
      createdAt: Date
      updatedAt: Date
      batchId: string | null
    }, ExtArgs["result"]["claim"]>
    composites: {}
  }

  type ClaimGetPayload<S extends boolean | null | undefined | ClaimDefaultArgs> = $Result.GetResult<Prisma.$ClaimPayload, S>

  type ClaimCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClaimFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClaimCountAggregateInputType | true
    }

  export interface ClaimDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Claim'], meta: { name: 'Claim' } }
    /**
     * Find zero or one Claim that matches the filter.
     * @param {ClaimFindUniqueArgs} args - Arguments to find a Claim
     * @example
     * // Get one Claim
     * const claim = await prisma.claim.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClaimFindUniqueArgs>(args: SelectSubset<T, ClaimFindUniqueArgs<ExtArgs>>): Prisma__ClaimClient<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Claim that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClaimFindUniqueOrThrowArgs} args - Arguments to find a Claim
     * @example
     * // Get one Claim
     * const claim = await prisma.claim.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClaimFindUniqueOrThrowArgs>(args: SelectSubset<T, ClaimFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClaimClient<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Claim that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimFindFirstArgs} args - Arguments to find a Claim
     * @example
     * // Get one Claim
     * const claim = await prisma.claim.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClaimFindFirstArgs>(args?: SelectSubset<T, ClaimFindFirstArgs<ExtArgs>>): Prisma__ClaimClient<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Claim that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimFindFirstOrThrowArgs} args - Arguments to find a Claim
     * @example
     * // Get one Claim
     * const claim = await prisma.claim.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClaimFindFirstOrThrowArgs>(args?: SelectSubset<T, ClaimFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClaimClient<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Claims that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Claims
     * const claims = await prisma.claim.findMany()
     * 
     * // Get first 10 Claims
     * const claims = await prisma.claim.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const claimWithIdOnly = await prisma.claim.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClaimFindManyArgs>(args?: SelectSubset<T, ClaimFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Claim.
     * @param {ClaimCreateArgs} args - Arguments to create a Claim.
     * @example
     * // Create one Claim
     * const Claim = await prisma.claim.create({
     *   data: {
     *     // ... data to create a Claim
     *   }
     * })
     * 
     */
    create<T extends ClaimCreateArgs>(args: SelectSubset<T, ClaimCreateArgs<ExtArgs>>): Prisma__ClaimClient<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Claims.
     * @param {ClaimCreateManyArgs} args - Arguments to create many Claims.
     * @example
     * // Create many Claims
     * const claim = await prisma.claim.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClaimCreateManyArgs>(args?: SelectSubset<T, ClaimCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Claims and returns the data saved in the database.
     * @param {ClaimCreateManyAndReturnArgs} args - Arguments to create many Claims.
     * @example
     * // Create many Claims
     * const claim = await prisma.claim.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Claims and only return the `id`
     * const claimWithIdOnly = await prisma.claim.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClaimCreateManyAndReturnArgs>(args?: SelectSubset<T, ClaimCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Claim.
     * @param {ClaimDeleteArgs} args - Arguments to delete one Claim.
     * @example
     * // Delete one Claim
     * const Claim = await prisma.claim.delete({
     *   where: {
     *     // ... filter to delete one Claim
     *   }
     * })
     * 
     */
    delete<T extends ClaimDeleteArgs>(args: SelectSubset<T, ClaimDeleteArgs<ExtArgs>>): Prisma__ClaimClient<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Claim.
     * @param {ClaimUpdateArgs} args - Arguments to update one Claim.
     * @example
     * // Update one Claim
     * const claim = await prisma.claim.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClaimUpdateArgs>(args: SelectSubset<T, ClaimUpdateArgs<ExtArgs>>): Prisma__ClaimClient<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Claims.
     * @param {ClaimDeleteManyArgs} args - Arguments to filter Claims to delete.
     * @example
     * // Delete a few Claims
     * const { count } = await prisma.claim.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClaimDeleteManyArgs>(args?: SelectSubset<T, ClaimDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Claims.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Claims
     * const claim = await prisma.claim.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClaimUpdateManyArgs>(args: SelectSubset<T, ClaimUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Claims and returns the data updated in the database.
     * @param {ClaimUpdateManyAndReturnArgs} args - Arguments to update many Claims.
     * @example
     * // Update many Claims
     * const claim = await prisma.claim.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Claims and only return the `id`
     * const claimWithIdOnly = await prisma.claim.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClaimUpdateManyAndReturnArgs>(args: SelectSubset<T, ClaimUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Claim.
     * @param {ClaimUpsertArgs} args - Arguments to update or create a Claim.
     * @example
     * // Update or create a Claim
     * const claim = await prisma.claim.upsert({
     *   create: {
     *     // ... data to create a Claim
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Claim we want to update
     *   }
     * })
     */
    upsert<T extends ClaimUpsertArgs>(args: SelectSubset<T, ClaimUpsertArgs<ExtArgs>>): Prisma__ClaimClient<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Claims.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimCountArgs} args - Arguments to filter Claims to count.
     * @example
     * // Count the number of Claims
     * const count = await prisma.claim.count({
     *   where: {
     *     // ... the filter for the Claims we want to count
     *   }
     * })
    **/
    count<T extends ClaimCountArgs>(
      args?: Subset<T, ClaimCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClaimCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Claim.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClaimAggregateArgs>(args: Subset<T, ClaimAggregateArgs>): Prisma.PrismaPromise<GetClaimAggregateType<T>>

    /**
     * Group by Claim.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClaimGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClaimGroupByArgs['orderBy'] }
        : { orderBy?: ClaimGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClaimGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClaimGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Claim model
   */
  readonly fields: ClaimFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Claim.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClaimClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dealer<T extends DealerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DealerDefaultArgs<ExtArgs>>): Prisma__DealerClient<$Result.GetResult<Prisma.$DealerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    batch<T extends Claim$batchArgs<ExtArgs> = {}>(args?: Subset<T, Claim$batchArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    deliveryItems<T extends Claim$deliveryItemsArgs<ExtArgs> = {}>(args?: Subset<T, Claim$deliveryItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Claim model
   */
  interface ClaimFieldRefs {
    readonly id: FieldRef<"Claim", 'String'>
    readonly claimNumber: FieldRef<"Claim", 'String'>
    readonly date: FieldRef<"Claim", 'DateTime'>
    readonly dealerId: FieldRef<"Claim", 'String'>
    readonly customerName: FieldRef<"Claim", 'String'>
    readonly customerMobile: FieldRef<"Claim", 'String'>
    readonly companyId: FieldRef<"Claim", 'String'>
    readonly batteryModel: FieldRef<"Claim", 'String'>
    readonly oldSerialNumber: FieldRef<"Claim", 'String'>
    readonly batteryType: FieldRef<"Claim", 'String'>
    readonly warrantyCard: FieldRef<"Claim", 'String'>
    readonly saleDate: FieldRef<"Claim", 'DateTime'>
    readonly problem: FieldRef<"Claim", 'String'>
    readonly status: FieldRef<"Claim", 'String'>
    readonly remarks: FieldRef<"Claim", 'String'>
    readonly photoUrl: FieldRef<"Claim", 'String'>
    readonly createdAt: FieldRef<"Claim", 'DateTime'>
    readonly updatedAt: FieldRef<"Claim", 'DateTime'>
    readonly batchId: FieldRef<"Claim", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Claim findUnique
   */
  export type ClaimFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
    /**
     * Filter, which Claim to fetch.
     */
    where: ClaimWhereUniqueInput
  }

  /**
   * Claim findUniqueOrThrow
   */
  export type ClaimFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
    /**
     * Filter, which Claim to fetch.
     */
    where: ClaimWhereUniqueInput
  }

  /**
   * Claim findFirst
   */
  export type ClaimFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
    /**
     * Filter, which Claim to fetch.
     */
    where?: ClaimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Claims to fetch.
     */
    orderBy?: ClaimOrderByWithRelationInput | ClaimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Claims.
     */
    cursor?: ClaimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Claims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Claims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Claims.
     */
    distinct?: ClaimScalarFieldEnum | ClaimScalarFieldEnum[]
  }

  /**
   * Claim findFirstOrThrow
   */
  export type ClaimFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
    /**
     * Filter, which Claim to fetch.
     */
    where?: ClaimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Claims to fetch.
     */
    orderBy?: ClaimOrderByWithRelationInput | ClaimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Claims.
     */
    cursor?: ClaimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Claims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Claims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Claims.
     */
    distinct?: ClaimScalarFieldEnum | ClaimScalarFieldEnum[]
  }

  /**
   * Claim findMany
   */
  export type ClaimFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
    /**
     * Filter, which Claims to fetch.
     */
    where?: ClaimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Claims to fetch.
     */
    orderBy?: ClaimOrderByWithRelationInput | ClaimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Claims.
     */
    cursor?: ClaimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Claims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Claims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Claims.
     */
    distinct?: ClaimScalarFieldEnum | ClaimScalarFieldEnum[]
  }

  /**
   * Claim create
   */
  export type ClaimCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
    /**
     * The data needed to create a Claim.
     */
    data: XOR<ClaimCreateInput, ClaimUncheckedCreateInput>
  }

  /**
   * Claim createMany
   */
  export type ClaimCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Claims.
     */
    data: ClaimCreateManyInput | ClaimCreateManyInput[]
  }

  /**
   * Claim createManyAndReturn
   */
  export type ClaimCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * The data used to create many Claims.
     */
    data: ClaimCreateManyInput | ClaimCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Claim update
   */
  export type ClaimUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
    /**
     * The data needed to update a Claim.
     */
    data: XOR<ClaimUpdateInput, ClaimUncheckedUpdateInput>
    /**
     * Choose, which Claim to update.
     */
    where: ClaimWhereUniqueInput
  }

  /**
   * Claim updateMany
   */
  export type ClaimUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Claims.
     */
    data: XOR<ClaimUpdateManyMutationInput, ClaimUncheckedUpdateManyInput>
    /**
     * Filter which Claims to update
     */
    where?: ClaimWhereInput
    /**
     * Limit how many Claims to update.
     */
    limit?: number
  }

  /**
   * Claim updateManyAndReturn
   */
  export type ClaimUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * The data used to update Claims.
     */
    data: XOR<ClaimUpdateManyMutationInput, ClaimUncheckedUpdateManyInput>
    /**
     * Filter which Claims to update
     */
    where?: ClaimWhereInput
    /**
     * Limit how many Claims to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Claim upsert
   */
  export type ClaimUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
    /**
     * The filter to search for the Claim to update in case it exists.
     */
    where: ClaimWhereUniqueInput
    /**
     * In case the Claim found by the `where` argument doesn't exist, create a new Claim with this data.
     */
    create: XOR<ClaimCreateInput, ClaimUncheckedCreateInput>
    /**
     * In case the Claim was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClaimUpdateInput, ClaimUncheckedUpdateInput>
  }

  /**
   * Claim delete
   */
  export type ClaimDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
    /**
     * Filter which Claim to delete.
     */
    where: ClaimWhereUniqueInput
  }

  /**
   * Claim deleteMany
   */
  export type ClaimDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Claims to delete
     */
    where?: ClaimWhereInput
    /**
     * Limit how many Claims to delete.
     */
    limit?: number
  }

  /**
   * Claim.batch
   */
  export type Claim$batchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
    where?: BatchWhereInput
  }

  /**
   * Claim.deliveryItems
   */
  export type Claim$deliveryItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryItem
     */
    select?: DeliveryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryItem
     */
    omit?: DeliveryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryItemInclude<ExtArgs> | null
    where?: DeliveryItemWhereInput
    orderBy?: DeliveryItemOrderByWithRelationInput | DeliveryItemOrderByWithRelationInput[]
    cursor?: DeliveryItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeliveryItemScalarFieldEnum | DeliveryItemScalarFieldEnum[]
  }

  /**
   * Claim without action
   */
  export type ClaimDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
  }


  /**
   * Model Batch
   */

  export type AggregateBatch = {
    _count: BatchCountAggregateOutputType | null
    _min: BatchMinAggregateOutputType | null
    _max: BatchMaxAggregateOutputType | null
  }

  export type BatchMinAggregateOutputType = {
    id: string | null
    batchNumber: string | null
    companyId: string | null
    sentDate: Date | null
    status: string | null
    remarks: string | null
  }

  export type BatchMaxAggregateOutputType = {
    id: string | null
    batchNumber: string | null
    companyId: string | null
    sentDate: Date | null
    status: string | null
    remarks: string | null
  }

  export type BatchCountAggregateOutputType = {
    id: number
    batchNumber: number
    companyId: number
    sentDate: number
    status: number
    remarks: number
    _all: number
  }


  export type BatchMinAggregateInputType = {
    id?: true
    batchNumber?: true
    companyId?: true
    sentDate?: true
    status?: true
    remarks?: true
  }

  export type BatchMaxAggregateInputType = {
    id?: true
    batchNumber?: true
    companyId?: true
    sentDate?: true
    status?: true
    remarks?: true
  }

  export type BatchCountAggregateInputType = {
    id?: true
    batchNumber?: true
    companyId?: true
    sentDate?: true
    status?: true
    remarks?: true
    _all?: true
  }

  export type BatchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Batch to aggregate.
     */
    where?: BatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Batches to fetch.
     */
    orderBy?: BatchOrderByWithRelationInput | BatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Batches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Batches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Batches
    **/
    _count?: true | BatchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BatchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BatchMaxAggregateInputType
  }

  export type GetBatchAggregateType<T extends BatchAggregateArgs> = {
        [P in keyof T & keyof AggregateBatch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBatch[P]>
      : GetScalarType<T[P], AggregateBatch[P]>
  }




  export type BatchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BatchWhereInput
    orderBy?: BatchOrderByWithAggregationInput | BatchOrderByWithAggregationInput[]
    by: BatchScalarFieldEnum[] | BatchScalarFieldEnum
    having?: BatchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BatchCountAggregateInputType | true
    _min?: BatchMinAggregateInputType
    _max?: BatchMaxAggregateInputType
  }

  export type BatchGroupByOutputType = {
    id: string
    batchNumber: string
    companyId: string
    sentDate: Date
    status: string
    remarks: string | null
    _count: BatchCountAggregateOutputType | null
    _min: BatchMinAggregateOutputType | null
    _max: BatchMaxAggregateOutputType | null
  }

  type GetBatchGroupByPayload<T extends BatchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BatchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BatchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BatchGroupByOutputType[P]>
            : GetScalarType<T[P], BatchGroupByOutputType[P]>
        }
      >
    >


  export type BatchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    batchNumber?: boolean
    companyId?: boolean
    sentDate?: boolean
    status?: boolean
    remarks?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    claims?: boolean | Batch$claimsArgs<ExtArgs>
    _count?: boolean | BatchCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["batch"]>

  export type BatchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    batchNumber?: boolean
    companyId?: boolean
    sentDate?: boolean
    status?: boolean
    remarks?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["batch"]>

  export type BatchSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    batchNumber?: boolean
    companyId?: boolean
    sentDate?: boolean
    status?: boolean
    remarks?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["batch"]>

  export type BatchSelectScalar = {
    id?: boolean
    batchNumber?: boolean
    companyId?: boolean
    sentDate?: boolean
    status?: boolean
    remarks?: boolean
  }

  export type BatchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "batchNumber" | "companyId" | "sentDate" | "status" | "remarks", ExtArgs["result"]["batch"]>
  export type BatchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    claims?: boolean | Batch$claimsArgs<ExtArgs>
    _count?: boolean | BatchCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BatchIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type BatchIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }

  export type $BatchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Batch"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
      claims: Prisma.$ClaimPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      batchNumber: string
      companyId: string
      sentDate: Date
      status: string
      remarks: string | null
    }, ExtArgs["result"]["batch"]>
    composites: {}
  }

  type BatchGetPayload<S extends boolean | null | undefined | BatchDefaultArgs> = $Result.GetResult<Prisma.$BatchPayload, S>

  type BatchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BatchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BatchCountAggregateInputType | true
    }

  export interface BatchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Batch'], meta: { name: 'Batch' } }
    /**
     * Find zero or one Batch that matches the filter.
     * @param {BatchFindUniqueArgs} args - Arguments to find a Batch
     * @example
     * // Get one Batch
     * const batch = await prisma.batch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BatchFindUniqueArgs>(args: SelectSubset<T, BatchFindUniqueArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Batch that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BatchFindUniqueOrThrowArgs} args - Arguments to find a Batch
     * @example
     * // Get one Batch
     * const batch = await prisma.batch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BatchFindUniqueOrThrowArgs>(args: SelectSubset<T, BatchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Batch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchFindFirstArgs} args - Arguments to find a Batch
     * @example
     * // Get one Batch
     * const batch = await prisma.batch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BatchFindFirstArgs>(args?: SelectSubset<T, BatchFindFirstArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Batch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchFindFirstOrThrowArgs} args - Arguments to find a Batch
     * @example
     * // Get one Batch
     * const batch = await prisma.batch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BatchFindFirstOrThrowArgs>(args?: SelectSubset<T, BatchFindFirstOrThrowArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Batches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Batches
     * const batches = await prisma.batch.findMany()
     * 
     * // Get first 10 Batches
     * const batches = await prisma.batch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const batchWithIdOnly = await prisma.batch.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BatchFindManyArgs>(args?: SelectSubset<T, BatchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Batch.
     * @param {BatchCreateArgs} args - Arguments to create a Batch.
     * @example
     * // Create one Batch
     * const Batch = await prisma.batch.create({
     *   data: {
     *     // ... data to create a Batch
     *   }
     * })
     * 
     */
    create<T extends BatchCreateArgs>(args: SelectSubset<T, BatchCreateArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Batches.
     * @param {BatchCreateManyArgs} args - Arguments to create many Batches.
     * @example
     * // Create many Batches
     * const batch = await prisma.batch.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BatchCreateManyArgs>(args?: SelectSubset<T, BatchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Batches and returns the data saved in the database.
     * @param {BatchCreateManyAndReturnArgs} args - Arguments to create many Batches.
     * @example
     * // Create many Batches
     * const batch = await prisma.batch.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Batches and only return the `id`
     * const batchWithIdOnly = await prisma.batch.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BatchCreateManyAndReturnArgs>(args?: SelectSubset<T, BatchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Batch.
     * @param {BatchDeleteArgs} args - Arguments to delete one Batch.
     * @example
     * // Delete one Batch
     * const Batch = await prisma.batch.delete({
     *   where: {
     *     // ... filter to delete one Batch
     *   }
     * })
     * 
     */
    delete<T extends BatchDeleteArgs>(args: SelectSubset<T, BatchDeleteArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Batch.
     * @param {BatchUpdateArgs} args - Arguments to update one Batch.
     * @example
     * // Update one Batch
     * const batch = await prisma.batch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BatchUpdateArgs>(args: SelectSubset<T, BatchUpdateArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Batches.
     * @param {BatchDeleteManyArgs} args - Arguments to filter Batches to delete.
     * @example
     * // Delete a few Batches
     * const { count } = await prisma.batch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BatchDeleteManyArgs>(args?: SelectSubset<T, BatchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Batches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Batches
     * const batch = await prisma.batch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BatchUpdateManyArgs>(args: SelectSubset<T, BatchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Batches and returns the data updated in the database.
     * @param {BatchUpdateManyAndReturnArgs} args - Arguments to update many Batches.
     * @example
     * // Update many Batches
     * const batch = await prisma.batch.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Batches and only return the `id`
     * const batchWithIdOnly = await prisma.batch.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BatchUpdateManyAndReturnArgs>(args: SelectSubset<T, BatchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Batch.
     * @param {BatchUpsertArgs} args - Arguments to update or create a Batch.
     * @example
     * // Update or create a Batch
     * const batch = await prisma.batch.upsert({
     *   create: {
     *     // ... data to create a Batch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Batch we want to update
     *   }
     * })
     */
    upsert<T extends BatchUpsertArgs>(args: SelectSubset<T, BatchUpsertArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Batches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchCountArgs} args - Arguments to filter Batches to count.
     * @example
     * // Count the number of Batches
     * const count = await prisma.batch.count({
     *   where: {
     *     // ... the filter for the Batches we want to count
     *   }
     * })
    **/
    count<T extends BatchCountArgs>(
      args?: Subset<T, BatchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BatchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Batch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BatchAggregateArgs>(args: Subset<T, BatchAggregateArgs>): Prisma.PrismaPromise<GetBatchAggregateType<T>>

    /**
     * Group by Batch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BatchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BatchGroupByArgs['orderBy'] }
        : { orderBy?: BatchGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BatchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBatchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Batch model
   */
  readonly fields: BatchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Batch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BatchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    claims<T extends Batch$claimsArgs<ExtArgs> = {}>(args?: Subset<T, Batch$claimsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Batch model
   */
  interface BatchFieldRefs {
    readonly id: FieldRef<"Batch", 'String'>
    readonly batchNumber: FieldRef<"Batch", 'String'>
    readonly companyId: FieldRef<"Batch", 'String'>
    readonly sentDate: FieldRef<"Batch", 'DateTime'>
    readonly status: FieldRef<"Batch", 'String'>
    readonly remarks: FieldRef<"Batch", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Batch findUnique
   */
  export type BatchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
    /**
     * Filter, which Batch to fetch.
     */
    where: BatchWhereUniqueInput
  }

  /**
   * Batch findUniqueOrThrow
   */
  export type BatchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
    /**
     * Filter, which Batch to fetch.
     */
    where: BatchWhereUniqueInput
  }

  /**
   * Batch findFirst
   */
  export type BatchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
    /**
     * Filter, which Batch to fetch.
     */
    where?: BatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Batches to fetch.
     */
    orderBy?: BatchOrderByWithRelationInput | BatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Batches.
     */
    cursor?: BatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Batches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Batches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Batches.
     */
    distinct?: BatchScalarFieldEnum | BatchScalarFieldEnum[]
  }

  /**
   * Batch findFirstOrThrow
   */
  export type BatchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
    /**
     * Filter, which Batch to fetch.
     */
    where?: BatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Batches to fetch.
     */
    orderBy?: BatchOrderByWithRelationInput | BatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Batches.
     */
    cursor?: BatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Batches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Batches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Batches.
     */
    distinct?: BatchScalarFieldEnum | BatchScalarFieldEnum[]
  }

  /**
   * Batch findMany
   */
  export type BatchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
    /**
     * Filter, which Batches to fetch.
     */
    where?: BatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Batches to fetch.
     */
    orderBy?: BatchOrderByWithRelationInput | BatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Batches.
     */
    cursor?: BatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Batches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Batches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Batches.
     */
    distinct?: BatchScalarFieldEnum | BatchScalarFieldEnum[]
  }

  /**
   * Batch create
   */
  export type BatchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
    /**
     * The data needed to create a Batch.
     */
    data: XOR<BatchCreateInput, BatchUncheckedCreateInput>
  }

  /**
   * Batch createMany
   */
  export type BatchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Batches.
     */
    data: BatchCreateManyInput | BatchCreateManyInput[]
  }

  /**
   * Batch createManyAndReturn
   */
  export type BatchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * The data used to create many Batches.
     */
    data: BatchCreateManyInput | BatchCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Batch update
   */
  export type BatchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
    /**
     * The data needed to update a Batch.
     */
    data: XOR<BatchUpdateInput, BatchUncheckedUpdateInput>
    /**
     * Choose, which Batch to update.
     */
    where: BatchWhereUniqueInput
  }

  /**
   * Batch updateMany
   */
  export type BatchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Batches.
     */
    data: XOR<BatchUpdateManyMutationInput, BatchUncheckedUpdateManyInput>
    /**
     * Filter which Batches to update
     */
    where?: BatchWhereInput
    /**
     * Limit how many Batches to update.
     */
    limit?: number
  }

  /**
   * Batch updateManyAndReturn
   */
  export type BatchUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * The data used to update Batches.
     */
    data: XOR<BatchUpdateManyMutationInput, BatchUncheckedUpdateManyInput>
    /**
     * Filter which Batches to update
     */
    where?: BatchWhereInput
    /**
     * Limit how many Batches to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Batch upsert
   */
  export type BatchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
    /**
     * The filter to search for the Batch to update in case it exists.
     */
    where: BatchWhereUniqueInput
    /**
     * In case the Batch found by the `where` argument doesn't exist, create a new Batch with this data.
     */
    create: XOR<BatchCreateInput, BatchUncheckedCreateInput>
    /**
     * In case the Batch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BatchUpdateInput, BatchUncheckedUpdateInput>
  }

  /**
   * Batch delete
   */
  export type BatchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
    /**
     * Filter which Batch to delete.
     */
    where: BatchWhereUniqueInput
  }

  /**
   * Batch deleteMany
   */
  export type BatchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Batches to delete
     */
    where?: BatchWhereInput
    /**
     * Limit how many Batches to delete.
     */
    limit?: number
  }

  /**
   * Batch.claims
   */
  export type Batch$claimsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
    where?: ClaimWhereInput
    orderBy?: ClaimOrderByWithRelationInput | ClaimOrderByWithRelationInput[]
    cursor?: ClaimWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClaimScalarFieldEnum | ClaimScalarFieldEnum[]
  }

  /**
   * Batch without action
   */
  export type BatchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
  }


  /**
   * Model Delivery
   */

  export type AggregateDelivery = {
    _count: DeliveryCountAggregateOutputType | null
    _avg: DeliveryAvgAggregateOutputType | null
    _sum: DeliverySumAggregateOutputType | null
    _min: DeliveryMinAggregateOutputType | null
    _max: DeliveryMaxAggregateOutputType | null
  }

  export type DeliveryAvgAggregateOutputType = {
    quantity: number | null
  }

  export type DeliverySumAggregateOutputType = {
    quantity: number | null
  }

  export type DeliveryMinAggregateOutputType = {
    id: string | null
    deliveryNumber: string | null
    date: Date | null
    dealerId: string | null
    quantity: number | null
    remarks: string | null
  }

  export type DeliveryMaxAggregateOutputType = {
    id: string | null
    deliveryNumber: string | null
    date: Date | null
    dealerId: string | null
    quantity: number | null
    remarks: string | null
  }

  export type DeliveryCountAggregateOutputType = {
    id: number
    deliveryNumber: number
    date: number
    dealerId: number
    quantity: number
    remarks: number
    _all: number
  }


  export type DeliveryAvgAggregateInputType = {
    quantity?: true
  }

  export type DeliverySumAggregateInputType = {
    quantity?: true
  }

  export type DeliveryMinAggregateInputType = {
    id?: true
    deliveryNumber?: true
    date?: true
    dealerId?: true
    quantity?: true
    remarks?: true
  }

  export type DeliveryMaxAggregateInputType = {
    id?: true
    deliveryNumber?: true
    date?: true
    dealerId?: true
    quantity?: true
    remarks?: true
  }

  export type DeliveryCountAggregateInputType = {
    id?: true
    deliveryNumber?: true
    date?: true
    dealerId?: true
    quantity?: true
    remarks?: true
    _all?: true
  }

  export type DeliveryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Delivery to aggregate.
     */
    where?: DeliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deliveries to fetch.
     */
    orderBy?: DeliveryOrderByWithRelationInput | DeliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deliveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Deliveries
    **/
    _count?: true | DeliveryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeliveryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeliverySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeliveryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeliveryMaxAggregateInputType
  }

  export type GetDeliveryAggregateType<T extends DeliveryAggregateArgs> = {
        [P in keyof T & keyof AggregateDelivery]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDelivery[P]>
      : GetScalarType<T[P], AggregateDelivery[P]>
  }




  export type DeliveryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeliveryWhereInput
    orderBy?: DeliveryOrderByWithAggregationInput | DeliveryOrderByWithAggregationInput[]
    by: DeliveryScalarFieldEnum[] | DeliveryScalarFieldEnum
    having?: DeliveryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeliveryCountAggregateInputType | true
    _avg?: DeliveryAvgAggregateInputType
    _sum?: DeliverySumAggregateInputType
    _min?: DeliveryMinAggregateInputType
    _max?: DeliveryMaxAggregateInputType
  }

  export type DeliveryGroupByOutputType = {
    id: string
    deliveryNumber: string
    date: Date
    dealerId: string
    quantity: number
    remarks: string | null
    _count: DeliveryCountAggregateOutputType | null
    _avg: DeliveryAvgAggregateOutputType | null
    _sum: DeliverySumAggregateOutputType | null
    _min: DeliveryMinAggregateOutputType | null
    _max: DeliveryMaxAggregateOutputType | null
  }

  type GetDeliveryGroupByPayload<T extends DeliveryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeliveryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeliveryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeliveryGroupByOutputType[P]>
            : GetScalarType<T[P], DeliveryGroupByOutputType[P]>
        }
      >
    >


  export type DeliverySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deliveryNumber?: boolean
    date?: boolean
    dealerId?: boolean
    quantity?: boolean
    remarks?: boolean
    dealer?: boolean | DealerDefaultArgs<ExtArgs>
    items?: boolean | Delivery$itemsArgs<ExtArgs>
    _count?: boolean | DeliveryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["delivery"]>

  export type DeliverySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deliveryNumber?: boolean
    date?: boolean
    dealerId?: boolean
    quantity?: boolean
    remarks?: boolean
    dealer?: boolean | DealerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["delivery"]>

  export type DeliverySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deliveryNumber?: boolean
    date?: boolean
    dealerId?: boolean
    quantity?: boolean
    remarks?: boolean
    dealer?: boolean | DealerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["delivery"]>

  export type DeliverySelectScalar = {
    id?: boolean
    deliveryNumber?: boolean
    date?: boolean
    dealerId?: boolean
    quantity?: boolean
    remarks?: boolean
  }

  export type DeliveryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "deliveryNumber" | "date" | "dealerId" | "quantity" | "remarks", ExtArgs["result"]["delivery"]>
  export type DeliveryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dealer?: boolean | DealerDefaultArgs<ExtArgs>
    items?: boolean | Delivery$itemsArgs<ExtArgs>
    _count?: boolean | DeliveryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DeliveryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dealer?: boolean | DealerDefaultArgs<ExtArgs>
  }
  export type DeliveryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dealer?: boolean | DealerDefaultArgs<ExtArgs>
  }

  export type $DeliveryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Delivery"
    objects: {
      dealer: Prisma.$DealerPayload<ExtArgs>
      items: Prisma.$DeliveryItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      deliveryNumber: string
      date: Date
      dealerId: string
      quantity: number
      remarks: string | null
    }, ExtArgs["result"]["delivery"]>
    composites: {}
  }

  type DeliveryGetPayload<S extends boolean | null | undefined | DeliveryDefaultArgs> = $Result.GetResult<Prisma.$DeliveryPayload, S>

  type DeliveryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeliveryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeliveryCountAggregateInputType | true
    }

  export interface DeliveryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Delivery'], meta: { name: 'Delivery' } }
    /**
     * Find zero or one Delivery that matches the filter.
     * @param {DeliveryFindUniqueArgs} args - Arguments to find a Delivery
     * @example
     * // Get one Delivery
     * const delivery = await prisma.delivery.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeliveryFindUniqueArgs>(args: SelectSubset<T, DeliveryFindUniqueArgs<ExtArgs>>): Prisma__DeliveryClient<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Delivery that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeliveryFindUniqueOrThrowArgs} args - Arguments to find a Delivery
     * @example
     * // Get one Delivery
     * const delivery = await prisma.delivery.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeliveryFindUniqueOrThrowArgs>(args: SelectSubset<T, DeliveryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeliveryClient<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Delivery that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryFindFirstArgs} args - Arguments to find a Delivery
     * @example
     * // Get one Delivery
     * const delivery = await prisma.delivery.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeliveryFindFirstArgs>(args?: SelectSubset<T, DeliveryFindFirstArgs<ExtArgs>>): Prisma__DeliveryClient<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Delivery that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryFindFirstOrThrowArgs} args - Arguments to find a Delivery
     * @example
     * // Get one Delivery
     * const delivery = await prisma.delivery.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeliveryFindFirstOrThrowArgs>(args?: SelectSubset<T, DeliveryFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeliveryClient<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Deliveries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Deliveries
     * const deliveries = await prisma.delivery.findMany()
     * 
     * // Get first 10 Deliveries
     * const deliveries = await prisma.delivery.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deliveryWithIdOnly = await prisma.delivery.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeliveryFindManyArgs>(args?: SelectSubset<T, DeliveryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Delivery.
     * @param {DeliveryCreateArgs} args - Arguments to create a Delivery.
     * @example
     * // Create one Delivery
     * const Delivery = await prisma.delivery.create({
     *   data: {
     *     // ... data to create a Delivery
     *   }
     * })
     * 
     */
    create<T extends DeliveryCreateArgs>(args: SelectSubset<T, DeliveryCreateArgs<ExtArgs>>): Prisma__DeliveryClient<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Deliveries.
     * @param {DeliveryCreateManyArgs} args - Arguments to create many Deliveries.
     * @example
     * // Create many Deliveries
     * const delivery = await prisma.delivery.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeliveryCreateManyArgs>(args?: SelectSubset<T, DeliveryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Deliveries and returns the data saved in the database.
     * @param {DeliveryCreateManyAndReturnArgs} args - Arguments to create many Deliveries.
     * @example
     * // Create many Deliveries
     * const delivery = await prisma.delivery.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Deliveries and only return the `id`
     * const deliveryWithIdOnly = await prisma.delivery.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeliveryCreateManyAndReturnArgs>(args?: SelectSubset<T, DeliveryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Delivery.
     * @param {DeliveryDeleteArgs} args - Arguments to delete one Delivery.
     * @example
     * // Delete one Delivery
     * const Delivery = await prisma.delivery.delete({
     *   where: {
     *     // ... filter to delete one Delivery
     *   }
     * })
     * 
     */
    delete<T extends DeliveryDeleteArgs>(args: SelectSubset<T, DeliveryDeleteArgs<ExtArgs>>): Prisma__DeliveryClient<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Delivery.
     * @param {DeliveryUpdateArgs} args - Arguments to update one Delivery.
     * @example
     * // Update one Delivery
     * const delivery = await prisma.delivery.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeliveryUpdateArgs>(args: SelectSubset<T, DeliveryUpdateArgs<ExtArgs>>): Prisma__DeliveryClient<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Deliveries.
     * @param {DeliveryDeleteManyArgs} args - Arguments to filter Deliveries to delete.
     * @example
     * // Delete a few Deliveries
     * const { count } = await prisma.delivery.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeliveryDeleteManyArgs>(args?: SelectSubset<T, DeliveryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Deliveries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Deliveries
     * const delivery = await prisma.delivery.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeliveryUpdateManyArgs>(args: SelectSubset<T, DeliveryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Deliveries and returns the data updated in the database.
     * @param {DeliveryUpdateManyAndReturnArgs} args - Arguments to update many Deliveries.
     * @example
     * // Update many Deliveries
     * const delivery = await prisma.delivery.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Deliveries and only return the `id`
     * const deliveryWithIdOnly = await prisma.delivery.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DeliveryUpdateManyAndReturnArgs>(args: SelectSubset<T, DeliveryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Delivery.
     * @param {DeliveryUpsertArgs} args - Arguments to update or create a Delivery.
     * @example
     * // Update or create a Delivery
     * const delivery = await prisma.delivery.upsert({
     *   create: {
     *     // ... data to create a Delivery
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Delivery we want to update
     *   }
     * })
     */
    upsert<T extends DeliveryUpsertArgs>(args: SelectSubset<T, DeliveryUpsertArgs<ExtArgs>>): Prisma__DeliveryClient<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Deliveries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryCountArgs} args - Arguments to filter Deliveries to count.
     * @example
     * // Count the number of Deliveries
     * const count = await prisma.delivery.count({
     *   where: {
     *     // ... the filter for the Deliveries we want to count
     *   }
     * })
    **/
    count<T extends DeliveryCountArgs>(
      args?: Subset<T, DeliveryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeliveryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Delivery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeliveryAggregateArgs>(args: Subset<T, DeliveryAggregateArgs>): Prisma.PrismaPromise<GetDeliveryAggregateType<T>>

    /**
     * Group by Delivery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DeliveryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeliveryGroupByArgs['orderBy'] }
        : { orderBy?: DeliveryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DeliveryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeliveryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Delivery model
   */
  readonly fields: DeliveryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Delivery.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeliveryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dealer<T extends DealerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DealerDefaultArgs<ExtArgs>>): Prisma__DealerClient<$Result.GetResult<Prisma.$DealerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends Delivery$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Delivery$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Delivery model
   */
  interface DeliveryFieldRefs {
    readonly id: FieldRef<"Delivery", 'String'>
    readonly deliveryNumber: FieldRef<"Delivery", 'String'>
    readonly date: FieldRef<"Delivery", 'DateTime'>
    readonly dealerId: FieldRef<"Delivery", 'String'>
    readonly quantity: FieldRef<"Delivery", 'Int'>
    readonly remarks: FieldRef<"Delivery", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Delivery findUnique
   */
  export type DeliveryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * Filter, which Delivery to fetch.
     */
    where: DeliveryWhereUniqueInput
  }

  /**
   * Delivery findUniqueOrThrow
   */
  export type DeliveryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * Filter, which Delivery to fetch.
     */
    where: DeliveryWhereUniqueInput
  }

  /**
   * Delivery findFirst
   */
  export type DeliveryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * Filter, which Delivery to fetch.
     */
    where?: DeliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deliveries to fetch.
     */
    orderBy?: DeliveryOrderByWithRelationInput | DeliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Deliveries.
     */
    cursor?: DeliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deliveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Deliveries.
     */
    distinct?: DeliveryScalarFieldEnum | DeliveryScalarFieldEnum[]
  }

  /**
   * Delivery findFirstOrThrow
   */
  export type DeliveryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * Filter, which Delivery to fetch.
     */
    where?: DeliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deliveries to fetch.
     */
    orderBy?: DeliveryOrderByWithRelationInput | DeliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Deliveries.
     */
    cursor?: DeliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deliveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Deliveries.
     */
    distinct?: DeliveryScalarFieldEnum | DeliveryScalarFieldEnum[]
  }

  /**
   * Delivery findMany
   */
  export type DeliveryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * Filter, which Deliveries to fetch.
     */
    where?: DeliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deliveries to fetch.
     */
    orderBy?: DeliveryOrderByWithRelationInput | DeliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Deliveries.
     */
    cursor?: DeliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deliveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Deliveries.
     */
    distinct?: DeliveryScalarFieldEnum | DeliveryScalarFieldEnum[]
  }

  /**
   * Delivery create
   */
  export type DeliveryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * The data needed to create a Delivery.
     */
    data: XOR<DeliveryCreateInput, DeliveryUncheckedCreateInput>
  }

  /**
   * Delivery createMany
   */
  export type DeliveryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Deliveries.
     */
    data: DeliveryCreateManyInput | DeliveryCreateManyInput[]
  }

  /**
   * Delivery createManyAndReturn
   */
  export type DeliveryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * The data used to create many Deliveries.
     */
    data: DeliveryCreateManyInput | DeliveryCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Delivery update
   */
  export type DeliveryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * The data needed to update a Delivery.
     */
    data: XOR<DeliveryUpdateInput, DeliveryUncheckedUpdateInput>
    /**
     * Choose, which Delivery to update.
     */
    where: DeliveryWhereUniqueInput
  }

  /**
   * Delivery updateMany
   */
  export type DeliveryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Deliveries.
     */
    data: XOR<DeliveryUpdateManyMutationInput, DeliveryUncheckedUpdateManyInput>
    /**
     * Filter which Deliveries to update
     */
    where?: DeliveryWhereInput
    /**
     * Limit how many Deliveries to update.
     */
    limit?: number
  }

  /**
   * Delivery updateManyAndReturn
   */
  export type DeliveryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * The data used to update Deliveries.
     */
    data: XOR<DeliveryUpdateManyMutationInput, DeliveryUncheckedUpdateManyInput>
    /**
     * Filter which Deliveries to update
     */
    where?: DeliveryWhereInput
    /**
     * Limit how many Deliveries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Delivery upsert
   */
  export type DeliveryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * The filter to search for the Delivery to update in case it exists.
     */
    where: DeliveryWhereUniqueInput
    /**
     * In case the Delivery found by the `where` argument doesn't exist, create a new Delivery with this data.
     */
    create: XOR<DeliveryCreateInput, DeliveryUncheckedCreateInput>
    /**
     * In case the Delivery was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeliveryUpdateInput, DeliveryUncheckedUpdateInput>
  }

  /**
   * Delivery delete
   */
  export type DeliveryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * Filter which Delivery to delete.
     */
    where: DeliveryWhereUniqueInput
  }

  /**
   * Delivery deleteMany
   */
  export type DeliveryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Deliveries to delete
     */
    where?: DeliveryWhereInput
    /**
     * Limit how many Deliveries to delete.
     */
    limit?: number
  }

  /**
   * Delivery.items
   */
  export type Delivery$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryItem
     */
    select?: DeliveryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryItem
     */
    omit?: DeliveryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryItemInclude<ExtArgs> | null
    where?: DeliveryItemWhereInput
    orderBy?: DeliveryItemOrderByWithRelationInput | DeliveryItemOrderByWithRelationInput[]
    cursor?: DeliveryItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeliveryItemScalarFieldEnum | DeliveryItemScalarFieldEnum[]
  }

  /**
   * Delivery without action
   */
  export type DeliveryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
  }


  /**
   * Model DeliveryItem
   */

  export type AggregateDeliveryItem = {
    _count: DeliveryItemCountAggregateOutputType | null
    _min: DeliveryItemMinAggregateOutputType | null
    _max: DeliveryItemMaxAggregateOutputType | null
  }

  export type DeliveryItemMinAggregateOutputType = {
    id: string | null
    deliveryId: string | null
    claimId: string | null
    newSerialNumber: string | null
  }

  export type DeliveryItemMaxAggregateOutputType = {
    id: string | null
    deliveryId: string | null
    claimId: string | null
    newSerialNumber: string | null
  }

  export type DeliveryItemCountAggregateOutputType = {
    id: number
    deliveryId: number
    claimId: number
    newSerialNumber: number
    _all: number
  }


  export type DeliveryItemMinAggregateInputType = {
    id?: true
    deliveryId?: true
    claimId?: true
    newSerialNumber?: true
  }

  export type DeliveryItemMaxAggregateInputType = {
    id?: true
    deliveryId?: true
    claimId?: true
    newSerialNumber?: true
  }

  export type DeliveryItemCountAggregateInputType = {
    id?: true
    deliveryId?: true
    claimId?: true
    newSerialNumber?: true
    _all?: true
  }

  export type DeliveryItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeliveryItem to aggregate.
     */
    where?: DeliveryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeliveryItems to fetch.
     */
    orderBy?: DeliveryItemOrderByWithRelationInput | DeliveryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeliveryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeliveryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeliveryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DeliveryItems
    **/
    _count?: true | DeliveryItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeliveryItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeliveryItemMaxAggregateInputType
  }

  export type GetDeliveryItemAggregateType<T extends DeliveryItemAggregateArgs> = {
        [P in keyof T & keyof AggregateDeliveryItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeliveryItem[P]>
      : GetScalarType<T[P], AggregateDeliveryItem[P]>
  }




  export type DeliveryItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeliveryItemWhereInput
    orderBy?: DeliveryItemOrderByWithAggregationInput | DeliveryItemOrderByWithAggregationInput[]
    by: DeliveryItemScalarFieldEnum[] | DeliveryItemScalarFieldEnum
    having?: DeliveryItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeliveryItemCountAggregateInputType | true
    _min?: DeliveryItemMinAggregateInputType
    _max?: DeliveryItemMaxAggregateInputType
  }

  export type DeliveryItemGroupByOutputType = {
    id: string
    deliveryId: string
    claimId: string
    newSerialNumber: string | null
    _count: DeliveryItemCountAggregateOutputType | null
    _min: DeliveryItemMinAggregateOutputType | null
    _max: DeliveryItemMaxAggregateOutputType | null
  }

  type GetDeliveryItemGroupByPayload<T extends DeliveryItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeliveryItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeliveryItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeliveryItemGroupByOutputType[P]>
            : GetScalarType<T[P], DeliveryItemGroupByOutputType[P]>
        }
      >
    >


  export type DeliveryItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deliveryId?: boolean
    claimId?: boolean
    newSerialNumber?: boolean
    delivery?: boolean | DeliveryDefaultArgs<ExtArgs>
    claim?: boolean | ClaimDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deliveryItem"]>

  export type DeliveryItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deliveryId?: boolean
    claimId?: boolean
    newSerialNumber?: boolean
    delivery?: boolean | DeliveryDefaultArgs<ExtArgs>
    claim?: boolean | ClaimDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deliveryItem"]>

  export type DeliveryItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deliveryId?: boolean
    claimId?: boolean
    newSerialNumber?: boolean
    delivery?: boolean | DeliveryDefaultArgs<ExtArgs>
    claim?: boolean | ClaimDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deliveryItem"]>

  export type DeliveryItemSelectScalar = {
    id?: boolean
    deliveryId?: boolean
    claimId?: boolean
    newSerialNumber?: boolean
  }

  export type DeliveryItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "deliveryId" | "claimId" | "newSerialNumber", ExtArgs["result"]["deliveryItem"]>
  export type DeliveryItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    delivery?: boolean | DeliveryDefaultArgs<ExtArgs>
    claim?: boolean | ClaimDefaultArgs<ExtArgs>
  }
  export type DeliveryItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    delivery?: boolean | DeliveryDefaultArgs<ExtArgs>
    claim?: boolean | ClaimDefaultArgs<ExtArgs>
  }
  export type DeliveryItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    delivery?: boolean | DeliveryDefaultArgs<ExtArgs>
    claim?: boolean | ClaimDefaultArgs<ExtArgs>
  }

  export type $DeliveryItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DeliveryItem"
    objects: {
      delivery: Prisma.$DeliveryPayload<ExtArgs>
      claim: Prisma.$ClaimPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      deliveryId: string
      claimId: string
      newSerialNumber: string | null
    }, ExtArgs["result"]["deliveryItem"]>
    composites: {}
  }

  type DeliveryItemGetPayload<S extends boolean | null | undefined | DeliveryItemDefaultArgs> = $Result.GetResult<Prisma.$DeliveryItemPayload, S>

  type DeliveryItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeliveryItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeliveryItemCountAggregateInputType | true
    }

  export interface DeliveryItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DeliveryItem'], meta: { name: 'DeliveryItem' } }
    /**
     * Find zero or one DeliveryItem that matches the filter.
     * @param {DeliveryItemFindUniqueArgs} args - Arguments to find a DeliveryItem
     * @example
     * // Get one DeliveryItem
     * const deliveryItem = await prisma.deliveryItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeliveryItemFindUniqueArgs>(args: SelectSubset<T, DeliveryItemFindUniqueArgs<ExtArgs>>): Prisma__DeliveryItemClient<$Result.GetResult<Prisma.$DeliveryItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DeliveryItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeliveryItemFindUniqueOrThrowArgs} args - Arguments to find a DeliveryItem
     * @example
     * // Get one DeliveryItem
     * const deliveryItem = await prisma.deliveryItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeliveryItemFindUniqueOrThrowArgs>(args: SelectSubset<T, DeliveryItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeliveryItemClient<$Result.GetResult<Prisma.$DeliveryItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeliveryItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryItemFindFirstArgs} args - Arguments to find a DeliveryItem
     * @example
     * // Get one DeliveryItem
     * const deliveryItem = await prisma.deliveryItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeliveryItemFindFirstArgs>(args?: SelectSubset<T, DeliveryItemFindFirstArgs<ExtArgs>>): Prisma__DeliveryItemClient<$Result.GetResult<Prisma.$DeliveryItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeliveryItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryItemFindFirstOrThrowArgs} args - Arguments to find a DeliveryItem
     * @example
     * // Get one DeliveryItem
     * const deliveryItem = await prisma.deliveryItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeliveryItemFindFirstOrThrowArgs>(args?: SelectSubset<T, DeliveryItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeliveryItemClient<$Result.GetResult<Prisma.$DeliveryItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DeliveryItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DeliveryItems
     * const deliveryItems = await prisma.deliveryItem.findMany()
     * 
     * // Get first 10 DeliveryItems
     * const deliveryItems = await prisma.deliveryItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deliveryItemWithIdOnly = await prisma.deliveryItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeliveryItemFindManyArgs>(args?: SelectSubset<T, DeliveryItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DeliveryItem.
     * @param {DeliveryItemCreateArgs} args - Arguments to create a DeliveryItem.
     * @example
     * // Create one DeliveryItem
     * const DeliveryItem = await prisma.deliveryItem.create({
     *   data: {
     *     // ... data to create a DeliveryItem
     *   }
     * })
     * 
     */
    create<T extends DeliveryItemCreateArgs>(args: SelectSubset<T, DeliveryItemCreateArgs<ExtArgs>>): Prisma__DeliveryItemClient<$Result.GetResult<Prisma.$DeliveryItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DeliveryItems.
     * @param {DeliveryItemCreateManyArgs} args - Arguments to create many DeliveryItems.
     * @example
     * // Create many DeliveryItems
     * const deliveryItem = await prisma.deliveryItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeliveryItemCreateManyArgs>(args?: SelectSubset<T, DeliveryItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DeliveryItems and returns the data saved in the database.
     * @param {DeliveryItemCreateManyAndReturnArgs} args - Arguments to create many DeliveryItems.
     * @example
     * // Create many DeliveryItems
     * const deliveryItem = await prisma.deliveryItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DeliveryItems and only return the `id`
     * const deliveryItemWithIdOnly = await prisma.deliveryItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeliveryItemCreateManyAndReturnArgs>(args?: SelectSubset<T, DeliveryItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DeliveryItem.
     * @param {DeliveryItemDeleteArgs} args - Arguments to delete one DeliveryItem.
     * @example
     * // Delete one DeliveryItem
     * const DeliveryItem = await prisma.deliveryItem.delete({
     *   where: {
     *     // ... filter to delete one DeliveryItem
     *   }
     * })
     * 
     */
    delete<T extends DeliveryItemDeleteArgs>(args: SelectSubset<T, DeliveryItemDeleteArgs<ExtArgs>>): Prisma__DeliveryItemClient<$Result.GetResult<Prisma.$DeliveryItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DeliveryItem.
     * @param {DeliveryItemUpdateArgs} args - Arguments to update one DeliveryItem.
     * @example
     * // Update one DeliveryItem
     * const deliveryItem = await prisma.deliveryItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeliveryItemUpdateArgs>(args: SelectSubset<T, DeliveryItemUpdateArgs<ExtArgs>>): Prisma__DeliveryItemClient<$Result.GetResult<Prisma.$DeliveryItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DeliveryItems.
     * @param {DeliveryItemDeleteManyArgs} args - Arguments to filter DeliveryItems to delete.
     * @example
     * // Delete a few DeliveryItems
     * const { count } = await prisma.deliveryItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeliveryItemDeleteManyArgs>(args?: SelectSubset<T, DeliveryItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeliveryItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DeliveryItems
     * const deliveryItem = await prisma.deliveryItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeliveryItemUpdateManyArgs>(args: SelectSubset<T, DeliveryItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeliveryItems and returns the data updated in the database.
     * @param {DeliveryItemUpdateManyAndReturnArgs} args - Arguments to update many DeliveryItems.
     * @example
     * // Update many DeliveryItems
     * const deliveryItem = await prisma.deliveryItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DeliveryItems and only return the `id`
     * const deliveryItemWithIdOnly = await prisma.deliveryItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DeliveryItemUpdateManyAndReturnArgs>(args: SelectSubset<T, DeliveryItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DeliveryItem.
     * @param {DeliveryItemUpsertArgs} args - Arguments to update or create a DeliveryItem.
     * @example
     * // Update or create a DeliveryItem
     * const deliveryItem = await prisma.deliveryItem.upsert({
     *   create: {
     *     // ... data to create a DeliveryItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DeliveryItem we want to update
     *   }
     * })
     */
    upsert<T extends DeliveryItemUpsertArgs>(args: SelectSubset<T, DeliveryItemUpsertArgs<ExtArgs>>): Prisma__DeliveryItemClient<$Result.GetResult<Prisma.$DeliveryItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DeliveryItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryItemCountArgs} args - Arguments to filter DeliveryItems to count.
     * @example
     * // Count the number of DeliveryItems
     * const count = await prisma.deliveryItem.count({
     *   where: {
     *     // ... the filter for the DeliveryItems we want to count
     *   }
     * })
    **/
    count<T extends DeliveryItemCountArgs>(
      args?: Subset<T, DeliveryItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeliveryItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DeliveryItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeliveryItemAggregateArgs>(args: Subset<T, DeliveryItemAggregateArgs>): Prisma.PrismaPromise<GetDeliveryItemAggregateType<T>>

    /**
     * Group by DeliveryItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DeliveryItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeliveryItemGroupByArgs['orderBy'] }
        : { orderBy?: DeliveryItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DeliveryItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeliveryItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DeliveryItem model
   */
  readonly fields: DeliveryItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DeliveryItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeliveryItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    delivery<T extends DeliveryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DeliveryDefaultArgs<ExtArgs>>): Prisma__DeliveryClient<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    claim<T extends ClaimDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClaimDefaultArgs<ExtArgs>>): Prisma__ClaimClient<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DeliveryItem model
   */
  interface DeliveryItemFieldRefs {
    readonly id: FieldRef<"DeliveryItem", 'String'>
    readonly deliveryId: FieldRef<"DeliveryItem", 'String'>
    readonly claimId: FieldRef<"DeliveryItem", 'String'>
    readonly newSerialNumber: FieldRef<"DeliveryItem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DeliveryItem findUnique
   */
  export type DeliveryItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryItem
     */
    select?: DeliveryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryItem
     */
    omit?: DeliveryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryItemInclude<ExtArgs> | null
    /**
     * Filter, which DeliveryItem to fetch.
     */
    where: DeliveryItemWhereUniqueInput
  }

  /**
   * DeliveryItem findUniqueOrThrow
   */
  export type DeliveryItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryItem
     */
    select?: DeliveryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryItem
     */
    omit?: DeliveryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryItemInclude<ExtArgs> | null
    /**
     * Filter, which DeliveryItem to fetch.
     */
    where: DeliveryItemWhereUniqueInput
  }

  /**
   * DeliveryItem findFirst
   */
  export type DeliveryItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryItem
     */
    select?: DeliveryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryItem
     */
    omit?: DeliveryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryItemInclude<ExtArgs> | null
    /**
     * Filter, which DeliveryItem to fetch.
     */
    where?: DeliveryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeliveryItems to fetch.
     */
    orderBy?: DeliveryItemOrderByWithRelationInput | DeliveryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeliveryItems.
     */
    cursor?: DeliveryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeliveryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeliveryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeliveryItems.
     */
    distinct?: DeliveryItemScalarFieldEnum | DeliveryItemScalarFieldEnum[]
  }

  /**
   * DeliveryItem findFirstOrThrow
   */
  export type DeliveryItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryItem
     */
    select?: DeliveryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryItem
     */
    omit?: DeliveryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryItemInclude<ExtArgs> | null
    /**
     * Filter, which DeliveryItem to fetch.
     */
    where?: DeliveryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeliveryItems to fetch.
     */
    orderBy?: DeliveryItemOrderByWithRelationInput | DeliveryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeliveryItems.
     */
    cursor?: DeliveryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeliveryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeliveryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeliveryItems.
     */
    distinct?: DeliveryItemScalarFieldEnum | DeliveryItemScalarFieldEnum[]
  }

  /**
   * DeliveryItem findMany
   */
  export type DeliveryItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryItem
     */
    select?: DeliveryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryItem
     */
    omit?: DeliveryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryItemInclude<ExtArgs> | null
    /**
     * Filter, which DeliveryItems to fetch.
     */
    where?: DeliveryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeliveryItems to fetch.
     */
    orderBy?: DeliveryItemOrderByWithRelationInput | DeliveryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DeliveryItems.
     */
    cursor?: DeliveryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeliveryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeliveryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeliveryItems.
     */
    distinct?: DeliveryItemScalarFieldEnum | DeliveryItemScalarFieldEnum[]
  }

  /**
   * DeliveryItem create
   */
  export type DeliveryItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryItem
     */
    select?: DeliveryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryItem
     */
    omit?: DeliveryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryItemInclude<ExtArgs> | null
    /**
     * The data needed to create a DeliveryItem.
     */
    data: XOR<DeliveryItemCreateInput, DeliveryItemUncheckedCreateInput>
  }

  /**
   * DeliveryItem createMany
   */
  export type DeliveryItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DeliveryItems.
     */
    data: DeliveryItemCreateManyInput | DeliveryItemCreateManyInput[]
  }

  /**
   * DeliveryItem createManyAndReturn
   */
  export type DeliveryItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryItem
     */
    select?: DeliveryItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryItem
     */
    omit?: DeliveryItemOmit<ExtArgs> | null
    /**
     * The data used to create many DeliveryItems.
     */
    data: DeliveryItemCreateManyInput | DeliveryItemCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DeliveryItem update
   */
  export type DeliveryItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryItem
     */
    select?: DeliveryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryItem
     */
    omit?: DeliveryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryItemInclude<ExtArgs> | null
    /**
     * The data needed to update a DeliveryItem.
     */
    data: XOR<DeliveryItemUpdateInput, DeliveryItemUncheckedUpdateInput>
    /**
     * Choose, which DeliveryItem to update.
     */
    where: DeliveryItemWhereUniqueInput
  }

  /**
   * DeliveryItem updateMany
   */
  export type DeliveryItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DeliveryItems.
     */
    data: XOR<DeliveryItemUpdateManyMutationInput, DeliveryItemUncheckedUpdateManyInput>
    /**
     * Filter which DeliveryItems to update
     */
    where?: DeliveryItemWhereInput
    /**
     * Limit how many DeliveryItems to update.
     */
    limit?: number
  }

  /**
   * DeliveryItem updateManyAndReturn
   */
  export type DeliveryItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryItem
     */
    select?: DeliveryItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryItem
     */
    omit?: DeliveryItemOmit<ExtArgs> | null
    /**
     * The data used to update DeliveryItems.
     */
    data: XOR<DeliveryItemUpdateManyMutationInput, DeliveryItemUncheckedUpdateManyInput>
    /**
     * Filter which DeliveryItems to update
     */
    where?: DeliveryItemWhereInput
    /**
     * Limit how many DeliveryItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DeliveryItem upsert
   */
  export type DeliveryItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryItem
     */
    select?: DeliveryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryItem
     */
    omit?: DeliveryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryItemInclude<ExtArgs> | null
    /**
     * The filter to search for the DeliveryItem to update in case it exists.
     */
    where: DeliveryItemWhereUniqueInput
    /**
     * In case the DeliveryItem found by the `where` argument doesn't exist, create a new DeliveryItem with this data.
     */
    create: XOR<DeliveryItemCreateInput, DeliveryItemUncheckedCreateInput>
    /**
     * In case the DeliveryItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeliveryItemUpdateInput, DeliveryItemUncheckedUpdateInput>
  }

  /**
   * DeliveryItem delete
   */
  export type DeliveryItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryItem
     */
    select?: DeliveryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryItem
     */
    omit?: DeliveryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryItemInclude<ExtArgs> | null
    /**
     * Filter which DeliveryItem to delete.
     */
    where: DeliveryItemWhereUniqueInput
  }

  /**
   * DeliveryItem deleteMany
   */
  export type DeliveryItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeliveryItems to delete
     */
    where?: DeliveryItemWhereInput
    /**
     * Limit how many DeliveryItems to delete.
     */
    limit?: number
  }

  /**
   * DeliveryItem without action
   */
  export type DeliveryItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryItem
     */
    select?: DeliveryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryItem
     */
    omit?: DeliveryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryItemInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const DealerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    mobile: 'mobile',
    whatsapp: 'whatsapp',
    shopName: 'shopName',
    city: 'city',
    address: 'address',
    gstNumber: 'gstNumber',
    openingPendingBalance: 'openingPendingBalance',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DealerScalarFieldEnum = (typeof DealerScalarFieldEnum)[keyof typeof DealerScalarFieldEnum]


  export const CompanyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    brandName: 'brandName',
    contactPerson: 'contactPerson',
    mobile: 'mobile',
    address: 'address'
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const ClaimScalarFieldEnum: {
    id: 'id',
    claimNumber: 'claimNumber',
    date: 'date',
    dealerId: 'dealerId',
    customerName: 'customerName',
    customerMobile: 'customerMobile',
    companyId: 'companyId',
    batteryModel: 'batteryModel',
    oldSerialNumber: 'oldSerialNumber',
    batteryType: 'batteryType',
    warrantyCard: 'warrantyCard',
    saleDate: 'saleDate',
    problem: 'problem',
    status: 'status',
    remarks: 'remarks',
    photoUrl: 'photoUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    batchId: 'batchId'
  };

  export type ClaimScalarFieldEnum = (typeof ClaimScalarFieldEnum)[keyof typeof ClaimScalarFieldEnum]


  export const BatchScalarFieldEnum: {
    id: 'id',
    batchNumber: 'batchNumber',
    companyId: 'companyId',
    sentDate: 'sentDate',
    status: 'status',
    remarks: 'remarks'
  };

  export type BatchScalarFieldEnum = (typeof BatchScalarFieldEnum)[keyof typeof BatchScalarFieldEnum]


  export const DeliveryScalarFieldEnum: {
    id: 'id',
    deliveryNumber: 'deliveryNumber',
    date: 'date',
    dealerId: 'dealerId',
    quantity: 'quantity',
    remarks: 'remarks'
  };

  export type DeliveryScalarFieldEnum = (typeof DeliveryScalarFieldEnum)[keyof typeof DeliveryScalarFieldEnum]


  export const DeliveryItemScalarFieldEnum: {
    id: 'id',
    deliveryId: 'deliveryId',
    claimId: 'claimId',
    newSerialNumber: 'newSerialNumber'
  };

  export type DeliveryItemScalarFieldEnum = (typeof DeliveryItemScalarFieldEnum)[keyof typeof DeliveryItemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
  }

  export type DealerWhereInput = {
    AND?: DealerWhereInput | DealerWhereInput[]
    OR?: DealerWhereInput[]
    NOT?: DealerWhereInput | DealerWhereInput[]
    id?: StringFilter<"Dealer"> | string
    name?: StringFilter<"Dealer"> | string
    mobile?: StringFilter<"Dealer"> | string
    whatsapp?: StringNullableFilter<"Dealer"> | string | null
    shopName?: StringFilter<"Dealer"> | string
    city?: StringFilter<"Dealer"> | string
    address?: StringFilter<"Dealer"> | string
    gstNumber?: StringNullableFilter<"Dealer"> | string | null
    openingPendingBalance?: IntFilter<"Dealer"> | number
    createdAt?: DateTimeFilter<"Dealer"> | Date | string
    updatedAt?: DateTimeFilter<"Dealer"> | Date | string
    claims?: ClaimListRelationFilter
    deliveries?: DeliveryListRelationFilter
  }

  export type DealerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    mobile?: SortOrder
    whatsapp?: SortOrderInput | SortOrder
    shopName?: SortOrder
    city?: SortOrder
    address?: SortOrder
    gstNumber?: SortOrderInput | SortOrder
    openingPendingBalance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    claims?: ClaimOrderByRelationAggregateInput
    deliveries?: DeliveryOrderByRelationAggregateInput
  }

  export type DealerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DealerWhereInput | DealerWhereInput[]
    OR?: DealerWhereInput[]
    NOT?: DealerWhereInput | DealerWhereInput[]
    name?: StringFilter<"Dealer"> | string
    mobile?: StringFilter<"Dealer"> | string
    whatsapp?: StringNullableFilter<"Dealer"> | string | null
    shopName?: StringFilter<"Dealer"> | string
    city?: StringFilter<"Dealer"> | string
    address?: StringFilter<"Dealer"> | string
    gstNumber?: StringNullableFilter<"Dealer"> | string | null
    openingPendingBalance?: IntFilter<"Dealer"> | number
    createdAt?: DateTimeFilter<"Dealer"> | Date | string
    updatedAt?: DateTimeFilter<"Dealer"> | Date | string
    claims?: ClaimListRelationFilter
    deliveries?: DeliveryListRelationFilter
  }, "id">

  export type DealerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    mobile?: SortOrder
    whatsapp?: SortOrderInput | SortOrder
    shopName?: SortOrder
    city?: SortOrder
    address?: SortOrder
    gstNumber?: SortOrderInput | SortOrder
    openingPendingBalance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DealerCountOrderByAggregateInput
    _avg?: DealerAvgOrderByAggregateInput
    _max?: DealerMaxOrderByAggregateInput
    _min?: DealerMinOrderByAggregateInput
    _sum?: DealerSumOrderByAggregateInput
  }

  export type DealerScalarWhereWithAggregatesInput = {
    AND?: DealerScalarWhereWithAggregatesInput | DealerScalarWhereWithAggregatesInput[]
    OR?: DealerScalarWhereWithAggregatesInput[]
    NOT?: DealerScalarWhereWithAggregatesInput | DealerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Dealer"> | string
    name?: StringWithAggregatesFilter<"Dealer"> | string
    mobile?: StringWithAggregatesFilter<"Dealer"> | string
    whatsapp?: StringNullableWithAggregatesFilter<"Dealer"> | string | null
    shopName?: StringWithAggregatesFilter<"Dealer"> | string
    city?: StringWithAggregatesFilter<"Dealer"> | string
    address?: StringWithAggregatesFilter<"Dealer"> | string
    gstNumber?: StringNullableWithAggregatesFilter<"Dealer"> | string | null
    openingPendingBalance?: IntWithAggregatesFilter<"Dealer"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Dealer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Dealer"> | Date | string
  }

  export type CompanyWhereInput = {
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    id?: StringFilter<"Company"> | string
    name?: StringFilter<"Company"> | string
    brandName?: StringFilter<"Company"> | string
    contactPerson?: StringNullableFilter<"Company"> | string | null
    mobile?: StringNullableFilter<"Company"> | string | null
    address?: StringNullableFilter<"Company"> | string | null
    claims?: ClaimListRelationFilter
    batches?: BatchListRelationFilter
  }

  export type CompanyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    brandName?: SortOrder
    contactPerson?: SortOrderInput | SortOrder
    mobile?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    claims?: ClaimOrderByRelationAggregateInput
    batches?: BatchOrderByRelationAggregateInput
  }

  export type CompanyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    name?: StringFilter<"Company"> | string
    brandName?: StringFilter<"Company"> | string
    contactPerson?: StringNullableFilter<"Company"> | string | null
    mobile?: StringNullableFilter<"Company"> | string | null
    address?: StringNullableFilter<"Company"> | string | null
    claims?: ClaimListRelationFilter
    batches?: BatchListRelationFilter
  }, "id">

  export type CompanyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    brandName?: SortOrder
    contactPerson?: SortOrderInput | SortOrder
    mobile?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    _count?: CompanyCountOrderByAggregateInput
    _max?: CompanyMaxOrderByAggregateInput
    _min?: CompanyMinOrderByAggregateInput
  }

  export type CompanyScalarWhereWithAggregatesInput = {
    AND?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    OR?: CompanyScalarWhereWithAggregatesInput[]
    NOT?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Company"> | string
    name?: StringWithAggregatesFilter<"Company"> | string
    brandName?: StringWithAggregatesFilter<"Company"> | string
    contactPerson?: StringNullableWithAggregatesFilter<"Company"> | string | null
    mobile?: StringNullableWithAggregatesFilter<"Company"> | string | null
    address?: StringNullableWithAggregatesFilter<"Company"> | string | null
  }

  export type ClaimWhereInput = {
    AND?: ClaimWhereInput | ClaimWhereInput[]
    OR?: ClaimWhereInput[]
    NOT?: ClaimWhereInput | ClaimWhereInput[]
    id?: StringFilter<"Claim"> | string
    claimNumber?: StringFilter<"Claim"> | string
    date?: DateTimeFilter<"Claim"> | Date | string
    dealerId?: StringFilter<"Claim"> | string
    customerName?: StringNullableFilter<"Claim"> | string | null
    customerMobile?: StringNullableFilter<"Claim"> | string | null
    companyId?: StringFilter<"Claim"> | string
    batteryModel?: StringFilter<"Claim"> | string
    oldSerialNumber?: StringFilter<"Claim"> | string
    batteryType?: StringFilter<"Claim"> | string
    warrantyCard?: StringNullableFilter<"Claim"> | string | null
    saleDate?: DateTimeNullableFilter<"Claim"> | Date | string | null
    problem?: StringFilter<"Claim"> | string
    status?: StringFilter<"Claim"> | string
    remarks?: StringNullableFilter<"Claim"> | string | null
    photoUrl?: StringNullableFilter<"Claim"> | string | null
    createdAt?: DateTimeFilter<"Claim"> | Date | string
    updatedAt?: DateTimeFilter<"Claim"> | Date | string
    batchId?: StringNullableFilter<"Claim"> | string | null
    dealer?: XOR<DealerScalarRelationFilter, DealerWhereInput>
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    batch?: XOR<BatchNullableScalarRelationFilter, BatchWhereInput> | null
    deliveryItems?: DeliveryItemListRelationFilter
  }

  export type ClaimOrderByWithRelationInput = {
    id?: SortOrder
    claimNumber?: SortOrder
    date?: SortOrder
    dealerId?: SortOrder
    customerName?: SortOrderInput | SortOrder
    customerMobile?: SortOrderInput | SortOrder
    companyId?: SortOrder
    batteryModel?: SortOrder
    oldSerialNumber?: SortOrder
    batteryType?: SortOrder
    warrantyCard?: SortOrderInput | SortOrder
    saleDate?: SortOrderInput | SortOrder
    problem?: SortOrder
    status?: SortOrder
    remarks?: SortOrderInput | SortOrder
    photoUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    batchId?: SortOrderInput | SortOrder
    dealer?: DealerOrderByWithRelationInput
    company?: CompanyOrderByWithRelationInput
    batch?: BatchOrderByWithRelationInput
    deliveryItems?: DeliveryItemOrderByRelationAggregateInput
  }

  export type ClaimWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    claimNumber?: string
    AND?: ClaimWhereInput | ClaimWhereInput[]
    OR?: ClaimWhereInput[]
    NOT?: ClaimWhereInput | ClaimWhereInput[]
    date?: DateTimeFilter<"Claim"> | Date | string
    dealerId?: StringFilter<"Claim"> | string
    customerName?: StringNullableFilter<"Claim"> | string | null
    customerMobile?: StringNullableFilter<"Claim"> | string | null
    companyId?: StringFilter<"Claim"> | string
    batteryModel?: StringFilter<"Claim"> | string
    oldSerialNumber?: StringFilter<"Claim"> | string
    batteryType?: StringFilter<"Claim"> | string
    warrantyCard?: StringNullableFilter<"Claim"> | string | null
    saleDate?: DateTimeNullableFilter<"Claim"> | Date | string | null
    problem?: StringFilter<"Claim"> | string
    status?: StringFilter<"Claim"> | string
    remarks?: StringNullableFilter<"Claim"> | string | null
    photoUrl?: StringNullableFilter<"Claim"> | string | null
    createdAt?: DateTimeFilter<"Claim"> | Date | string
    updatedAt?: DateTimeFilter<"Claim"> | Date | string
    batchId?: StringNullableFilter<"Claim"> | string | null
    dealer?: XOR<DealerScalarRelationFilter, DealerWhereInput>
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    batch?: XOR<BatchNullableScalarRelationFilter, BatchWhereInput> | null
    deliveryItems?: DeliveryItemListRelationFilter
  }, "id" | "claimNumber">

  export type ClaimOrderByWithAggregationInput = {
    id?: SortOrder
    claimNumber?: SortOrder
    date?: SortOrder
    dealerId?: SortOrder
    customerName?: SortOrderInput | SortOrder
    customerMobile?: SortOrderInput | SortOrder
    companyId?: SortOrder
    batteryModel?: SortOrder
    oldSerialNumber?: SortOrder
    batteryType?: SortOrder
    warrantyCard?: SortOrderInput | SortOrder
    saleDate?: SortOrderInput | SortOrder
    problem?: SortOrder
    status?: SortOrder
    remarks?: SortOrderInput | SortOrder
    photoUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    batchId?: SortOrderInput | SortOrder
    _count?: ClaimCountOrderByAggregateInput
    _max?: ClaimMaxOrderByAggregateInput
    _min?: ClaimMinOrderByAggregateInput
  }

  export type ClaimScalarWhereWithAggregatesInput = {
    AND?: ClaimScalarWhereWithAggregatesInput | ClaimScalarWhereWithAggregatesInput[]
    OR?: ClaimScalarWhereWithAggregatesInput[]
    NOT?: ClaimScalarWhereWithAggregatesInput | ClaimScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Claim"> | string
    claimNumber?: StringWithAggregatesFilter<"Claim"> | string
    date?: DateTimeWithAggregatesFilter<"Claim"> | Date | string
    dealerId?: StringWithAggregatesFilter<"Claim"> | string
    customerName?: StringNullableWithAggregatesFilter<"Claim"> | string | null
    customerMobile?: StringNullableWithAggregatesFilter<"Claim"> | string | null
    companyId?: StringWithAggregatesFilter<"Claim"> | string
    batteryModel?: StringWithAggregatesFilter<"Claim"> | string
    oldSerialNumber?: StringWithAggregatesFilter<"Claim"> | string
    batteryType?: StringWithAggregatesFilter<"Claim"> | string
    warrantyCard?: StringNullableWithAggregatesFilter<"Claim"> | string | null
    saleDate?: DateTimeNullableWithAggregatesFilter<"Claim"> | Date | string | null
    problem?: StringWithAggregatesFilter<"Claim"> | string
    status?: StringWithAggregatesFilter<"Claim"> | string
    remarks?: StringNullableWithAggregatesFilter<"Claim"> | string | null
    photoUrl?: StringNullableWithAggregatesFilter<"Claim"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Claim"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Claim"> | Date | string
    batchId?: StringNullableWithAggregatesFilter<"Claim"> | string | null
  }

  export type BatchWhereInput = {
    AND?: BatchWhereInput | BatchWhereInput[]
    OR?: BatchWhereInput[]
    NOT?: BatchWhereInput | BatchWhereInput[]
    id?: StringFilter<"Batch"> | string
    batchNumber?: StringFilter<"Batch"> | string
    companyId?: StringFilter<"Batch"> | string
    sentDate?: DateTimeFilter<"Batch"> | Date | string
    status?: StringFilter<"Batch"> | string
    remarks?: StringNullableFilter<"Batch"> | string | null
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    claims?: ClaimListRelationFilter
  }

  export type BatchOrderByWithRelationInput = {
    id?: SortOrder
    batchNumber?: SortOrder
    companyId?: SortOrder
    sentDate?: SortOrder
    status?: SortOrder
    remarks?: SortOrderInput | SortOrder
    company?: CompanyOrderByWithRelationInput
    claims?: ClaimOrderByRelationAggregateInput
  }

  export type BatchWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    batchNumber?: string
    AND?: BatchWhereInput | BatchWhereInput[]
    OR?: BatchWhereInput[]
    NOT?: BatchWhereInput | BatchWhereInput[]
    companyId?: StringFilter<"Batch"> | string
    sentDate?: DateTimeFilter<"Batch"> | Date | string
    status?: StringFilter<"Batch"> | string
    remarks?: StringNullableFilter<"Batch"> | string | null
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    claims?: ClaimListRelationFilter
  }, "id" | "batchNumber">

  export type BatchOrderByWithAggregationInput = {
    id?: SortOrder
    batchNumber?: SortOrder
    companyId?: SortOrder
    sentDate?: SortOrder
    status?: SortOrder
    remarks?: SortOrderInput | SortOrder
    _count?: BatchCountOrderByAggregateInput
    _max?: BatchMaxOrderByAggregateInput
    _min?: BatchMinOrderByAggregateInput
  }

  export type BatchScalarWhereWithAggregatesInput = {
    AND?: BatchScalarWhereWithAggregatesInput | BatchScalarWhereWithAggregatesInput[]
    OR?: BatchScalarWhereWithAggregatesInput[]
    NOT?: BatchScalarWhereWithAggregatesInput | BatchScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Batch"> | string
    batchNumber?: StringWithAggregatesFilter<"Batch"> | string
    companyId?: StringWithAggregatesFilter<"Batch"> | string
    sentDate?: DateTimeWithAggregatesFilter<"Batch"> | Date | string
    status?: StringWithAggregatesFilter<"Batch"> | string
    remarks?: StringNullableWithAggregatesFilter<"Batch"> | string | null
  }

  export type DeliveryWhereInput = {
    AND?: DeliveryWhereInput | DeliveryWhereInput[]
    OR?: DeliveryWhereInput[]
    NOT?: DeliveryWhereInput | DeliveryWhereInput[]
    id?: StringFilter<"Delivery"> | string
    deliveryNumber?: StringFilter<"Delivery"> | string
    date?: DateTimeFilter<"Delivery"> | Date | string
    dealerId?: StringFilter<"Delivery"> | string
    quantity?: IntFilter<"Delivery"> | number
    remarks?: StringNullableFilter<"Delivery"> | string | null
    dealer?: XOR<DealerScalarRelationFilter, DealerWhereInput>
    items?: DeliveryItemListRelationFilter
  }

  export type DeliveryOrderByWithRelationInput = {
    id?: SortOrder
    deliveryNumber?: SortOrder
    date?: SortOrder
    dealerId?: SortOrder
    quantity?: SortOrder
    remarks?: SortOrderInput | SortOrder
    dealer?: DealerOrderByWithRelationInput
    items?: DeliveryItemOrderByRelationAggregateInput
  }

  export type DeliveryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    deliveryNumber?: string
    AND?: DeliveryWhereInput | DeliveryWhereInput[]
    OR?: DeliveryWhereInput[]
    NOT?: DeliveryWhereInput | DeliveryWhereInput[]
    date?: DateTimeFilter<"Delivery"> | Date | string
    dealerId?: StringFilter<"Delivery"> | string
    quantity?: IntFilter<"Delivery"> | number
    remarks?: StringNullableFilter<"Delivery"> | string | null
    dealer?: XOR<DealerScalarRelationFilter, DealerWhereInput>
    items?: DeliveryItemListRelationFilter
  }, "id" | "deliveryNumber">

  export type DeliveryOrderByWithAggregationInput = {
    id?: SortOrder
    deliveryNumber?: SortOrder
    date?: SortOrder
    dealerId?: SortOrder
    quantity?: SortOrder
    remarks?: SortOrderInput | SortOrder
    _count?: DeliveryCountOrderByAggregateInput
    _avg?: DeliveryAvgOrderByAggregateInput
    _max?: DeliveryMaxOrderByAggregateInput
    _min?: DeliveryMinOrderByAggregateInput
    _sum?: DeliverySumOrderByAggregateInput
  }

  export type DeliveryScalarWhereWithAggregatesInput = {
    AND?: DeliveryScalarWhereWithAggregatesInput | DeliveryScalarWhereWithAggregatesInput[]
    OR?: DeliveryScalarWhereWithAggregatesInput[]
    NOT?: DeliveryScalarWhereWithAggregatesInput | DeliveryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Delivery"> | string
    deliveryNumber?: StringWithAggregatesFilter<"Delivery"> | string
    date?: DateTimeWithAggregatesFilter<"Delivery"> | Date | string
    dealerId?: StringWithAggregatesFilter<"Delivery"> | string
    quantity?: IntWithAggregatesFilter<"Delivery"> | number
    remarks?: StringNullableWithAggregatesFilter<"Delivery"> | string | null
  }

  export type DeliveryItemWhereInput = {
    AND?: DeliveryItemWhereInput | DeliveryItemWhereInput[]
    OR?: DeliveryItemWhereInput[]
    NOT?: DeliveryItemWhereInput | DeliveryItemWhereInput[]
    id?: StringFilter<"DeliveryItem"> | string
    deliveryId?: StringFilter<"DeliveryItem"> | string
    claimId?: StringFilter<"DeliveryItem"> | string
    newSerialNumber?: StringNullableFilter<"DeliveryItem"> | string | null
    delivery?: XOR<DeliveryScalarRelationFilter, DeliveryWhereInput>
    claim?: XOR<ClaimScalarRelationFilter, ClaimWhereInput>
  }

  export type DeliveryItemOrderByWithRelationInput = {
    id?: SortOrder
    deliveryId?: SortOrder
    claimId?: SortOrder
    newSerialNumber?: SortOrderInput | SortOrder
    delivery?: DeliveryOrderByWithRelationInput
    claim?: ClaimOrderByWithRelationInput
  }

  export type DeliveryItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    claimId?: string
    AND?: DeliveryItemWhereInput | DeliveryItemWhereInput[]
    OR?: DeliveryItemWhereInput[]
    NOT?: DeliveryItemWhereInput | DeliveryItemWhereInput[]
    deliveryId?: StringFilter<"DeliveryItem"> | string
    newSerialNumber?: StringNullableFilter<"DeliveryItem"> | string | null
    delivery?: XOR<DeliveryScalarRelationFilter, DeliveryWhereInput>
    claim?: XOR<ClaimScalarRelationFilter, ClaimWhereInput>
  }, "id" | "claimId">

  export type DeliveryItemOrderByWithAggregationInput = {
    id?: SortOrder
    deliveryId?: SortOrder
    claimId?: SortOrder
    newSerialNumber?: SortOrderInput | SortOrder
    _count?: DeliveryItemCountOrderByAggregateInput
    _max?: DeliveryItemMaxOrderByAggregateInput
    _min?: DeliveryItemMinOrderByAggregateInput
  }

  export type DeliveryItemScalarWhereWithAggregatesInput = {
    AND?: DeliveryItemScalarWhereWithAggregatesInput | DeliveryItemScalarWhereWithAggregatesInput[]
    OR?: DeliveryItemScalarWhereWithAggregatesInput[]
    NOT?: DeliveryItemScalarWhereWithAggregatesInput | DeliveryItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DeliveryItem"> | string
    deliveryId?: StringWithAggregatesFilter<"DeliveryItem"> | string
    claimId?: StringWithAggregatesFilter<"DeliveryItem"> | string
    newSerialNumber?: StringNullableWithAggregatesFilter<"DeliveryItem"> | string | null
  }

  export type UserCreateInput = {
    id?: string
    username: string
    password: string
    role?: string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    password: string
    role?: string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    password: string
    role?: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type DealerCreateInput = {
    id?: string
    name: string
    mobile: string
    whatsapp?: string | null
    shopName: string
    city: string
    address: string
    gstNumber?: string | null
    openingPendingBalance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    claims?: ClaimCreateNestedManyWithoutDealerInput
    deliveries?: DeliveryCreateNestedManyWithoutDealerInput
  }

  export type DealerUncheckedCreateInput = {
    id?: string
    name: string
    mobile: string
    whatsapp?: string | null
    shopName: string
    city: string
    address: string
    gstNumber?: string | null
    openingPendingBalance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    claims?: ClaimUncheckedCreateNestedManyWithoutDealerInput
    deliveries?: DeliveryUncheckedCreateNestedManyWithoutDealerInput
  }

  export type DealerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    shopName?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    gstNumber?: NullableStringFieldUpdateOperationsInput | string | null
    openingPendingBalance?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    claims?: ClaimUpdateManyWithoutDealerNestedInput
    deliveries?: DeliveryUpdateManyWithoutDealerNestedInput
  }

  export type DealerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    shopName?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    gstNumber?: NullableStringFieldUpdateOperationsInput | string | null
    openingPendingBalance?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    claims?: ClaimUncheckedUpdateManyWithoutDealerNestedInput
    deliveries?: DeliveryUncheckedUpdateManyWithoutDealerNestedInput
  }

  export type DealerCreateManyInput = {
    id?: string
    name: string
    mobile: string
    whatsapp?: string | null
    shopName: string
    city: string
    address: string
    gstNumber?: string | null
    openingPendingBalance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DealerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    shopName?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    gstNumber?: NullableStringFieldUpdateOperationsInput | string | null
    openingPendingBalance?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DealerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    shopName?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    gstNumber?: NullableStringFieldUpdateOperationsInput | string | null
    openingPendingBalance?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyCreateInput = {
    id?: string
    name: string
    brandName: string
    contactPerson?: string | null
    mobile?: string | null
    address?: string | null
    claims?: ClaimCreateNestedManyWithoutCompanyInput
    batches?: BatchCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateInput = {
    id?: string
    name: string
    brandName: string
    contactPerson?: string | null
    mobile?: string | null
    address?: string | null
    claims?: ClaimUncheckedCreateNestedManyWithoutCompanyInput
    batches?: BatchUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brandName?: StringFieldUpdateOperationsInput | string
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    claims?: ClaimUpdateManyWithoutCompanyNestedInput
    batches?: BatchUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brandName?: StringFieldUpdateOperationsInput | string
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    claims?: ClaimUncheckedUpdateManyWithoutCompanyNestedInput
    batches?: BatchUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyCreateManyInput = {
    id?: string
    name: string
    brandName: string
    contactPerson?: string | null
    mobile?: string | null
    address?: string | null
  }

  export type CompanyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brandName?: StringFieldUpdateOperationsInput | string
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CompanyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brandName?: StringFieldUpdateOperationsInput | string
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClaimCreateInput = {
    id?: string
    claimNumber: string
    date?: Date | string
    customerName?: string | null
    customerMobile?: string | null
    batteryModel: string
    oldSerialNumber: string
    batteryType: string
    warrantyCard?: string | null
    saleDate?: Date | string | null
    problem: string
    status?: string
    remarks?: string | null
    photoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    dealer: DealerCreateNestedOneWithoutClaimsInput
    company: CompanyCreateNestedOneWithoutClaimsInput
    batch?: BatchCreateNestedOneWithoutClaimsInput
    deliveryItems?: DeliveryItemCreateNestedManyWithoutClaimInput
  }

  export type ClaimUncheckedCreateInput = {
    id?: string
    claimNumber: string
    date?: Date | string
    dealerId: string
    customerName?: string | null
    customerMobile?: string | null
    companyId: string
    batteryModel: string
    oldSerialNumber: string
    batteryType: string
    warrantyCard?: string | null
    saleDate?: Date | string | null
    problem: string
    status?: string
    remarks?: string | null
    photoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    batchId?: string | null
    deliveryItems?: DeliveryItemUncheckedCreateNestedManyWithoutClaimInput
  }

  export type ClaimUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    claimNumber?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerMobile?: NullableStringFieldUpdateOperationsInput | string | null
    batteryModel?: StringFieldUpdateOperationsInput | string
    oldSerialNumber?: StringFieldUpdateOperationsInput | string
    batteryType?: StringFieldUpdateOperationsInput | string
    warrantyCard?: NullableStringFieldUpdateOperationsInput | string | null
    saleDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    problem?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dealer?: DealerUpdateOneRequiredWithoutClaimsNestedInput
    company?: CompanyUpdateOneRequiredWithoutClaimsNestedInput
    batch?: BatchUpdateOneWithoutClaimsNestedInput
    deliveryItems?: DeliveryItemUpdateManyWithoutClaimNestedInput
  }

  export type ClaimUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    claimNumber?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    dealerId?: StringFieldUpdateOperationsInput | string
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerMobile?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: StringFieldUpdateOperationsInput | string
    batteryModel?: StringFieldUpdateOperationsInput | string
    oldSerialNumber?: StringFieldUpdateOperationsInput | string
    batteryType?: StringFieldUpdateOperationsInput | string
    warrantyCard?: NullableStringFieldUpdateOperationsInput | string | null
    saleDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    problem?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    batchId?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryItems?: DeliveryItemUncheckedUpdateManyWithoutClaimNestedInput
  }

  export type ClaimCreateManyInput = {
    id?: string
    claimNumber: string
    date?: Date | string
    dealerId: string
    customerName?: string | null
    customerMobile?: string | null
    companyId: string
    batteryModel: string
    oldSerialNumber: string
    batteryType: string
    warrantyCard?: string | null
    saleDate?: Date | string | null
    problem: string
    status?: string
    remarks?: string | null
    photoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    batchId?: string | null
  }

  export type ClaimUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    claimNumber?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerMobile?: NullableStringFieldUpdateOperationsInput | string | null
    batteryModel?: StringFieldUpdateOperationsInput | string
    oldSerialNumber?: StringFieldUpdateOperationsInput | string
    batteryType?: StringFieldUpdateOperationsInput | string
    warrantyCard?: NullableStringFieldUpdateOperationsInput | string | null
    saleDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    problem?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClaimUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    claimNumber?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    dealerId?: StringFieldUpdateOperationsInput | string
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerMobile?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: StringFieldUpdateOperationsInput | string
    batteryModel?: StringFieldUpdateOperationsInput | string
    oldSerialNumber?: StringFieldUpdateOperationsInput | string
    batteryType?: StringFieldUpdateOperationsInput | string
    warrantyCard?: NullableStringFieldUpdateOperationsInput | string | null
    saleDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    problem?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    batchId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BatchCreateInput = {
    id?: string
    batchNumber: string
    sentDate?: Date | string
    status?: string
    remarks?: string | null
    company: CompanyCreateNestedOneWithoutBatchesInput
    claims?: ClaimCreateNestedManyWithoutBatchInput
  }

  export type BatchUncheckedCreateInput = {
    id?: string
    batchNumber: string
    companyId: string
    sentDate?: Date | string
    status?: string
    remarks?: string | null
    claims?: ClaimUncheckedCreateNestedManyWithoutBatchInput
  }

  export type BatchUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    batchNumber?: StringFieldUpdateOperationsInput | string
    sentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    company?: CompanyUpdateOneRequiredWithoutBatchesNestedInput
    claims?: ClaimUpdateManyWithoutBatchNestedInput
  }

  export type BatchUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    batchNumber?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    sentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    claims?: ClaimUncheckedUpdateManyWithoutBatchNestedInput
  }

  export type BatchCreateManyInput = {
    id?: string
    batchNumber: string
    companyId: string
    sentDate?: Date | string
    status?: string
    remarks?: string | null
  }

  export type BatchUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    batchNumber?: StringFieldUpdateOperationsInput | string
    sentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BatchUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    batchNumber?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    sentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DeliveryCreateInput = {
    id?: string
    deliveryNumber: string
    date?: Date | string
    quantity?: number
    remarks?: string | null
    dealer: DealerCreateNestedOneWithoutDeliveriesInput
    items?: DeliveryItemCreateNestedManyWithoutDeliveryInput
  }

  export type DeliveryUncheckedCreateInput = {
    id?: string
    deliveryNumber: string
    date?: Date | string
    dealerId: string
    quantity?: number
    remarks?: string | null
    items?: DeliveryItemUncheckedCreateNestedManyWithoutDeliveryInput
  }

  export type DeliveryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    deliveryNumber?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    dealer?: DealerUpdateOneRequiredWithoutDeliveriesNestedInput
    items?: DeliveryItemUpdateManyWithoutDeliveryNestedInput
  }

  export type DeliveryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    deliveryNumber?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    dealerId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    items?: DeliveryItemUncheckedUpdateManyWithoutDeliveryNestedInput
  }

  export type DeliveryCreateManyInput = {
    id?: string
    deliveryNumber: string
    date?: Date | string
    dealerId: string
    quantity?: number
    remarks?: string | null
  }

  export type DeliveryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    deliveryNumber?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DeliveryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    deliveryNumber?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    dealerId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DeliveryItemCreateInput = {
    id?: string
    newSerialNumber?: string | null
    delivery: DeliveryCreateNestedOneWithoutItemsInput
    claim: ClaimCreateNestedOneWithoutDeliveryItemsInput
  }

  export type DeliveryItemUncheckedCreateInput = {
    id?: string
    deliveryId: string
    claimId: string
    newSerialNumber?: string | null
  }

  export type DeliveryItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    newSerialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    delivery?: DeliveryUpdateOneRequiredWithoutItemsNestedInput
    claim?: ClaimUpdateOneRequiredWithoutDeliveryItemsNestedInput
  }

  export type DeliveryItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    deliveryId?: StringFieldUpdateOperationsInput | string
    claimId?: StringFieldUpdateOperationsInput | string
    newSerialNumber?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DeliveryItemCreateManyInput = {
    id?: string
    deliveryId: string
    claimId: string
    newSerialNumber?: string | null
  }

  export type DeliveryItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    newSerialNumber?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DeliveryItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    deliveryId?: StringFieldUpdateOperationsInput | string
    claimId?: StringFieldUpdateOperationsInput | string
    newSerialNumber?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ClaimListRelationFilter = {
    every?: ClaimWhereInput
    some?: ClaimWhereInput
    none?: ClaimWhereInput
  }

  export type DeliveryListRelationFilter = {
    every?: DeliveryWhereInput
    some?: DeliveryWhereInput
    none?: DeliveryWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ClaimOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DeliveryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DealerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    mobile?: SortOrder
    whatsapp?: SortOrder
    shopName?: SortOrder
    city?: SortOrder
    address?: SortOrder
    gstNumber?: SortOrder
    openingPendingBalance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DealerAvgOrderByAggregateInput = {
    openingPendingBalance?: SortOrder
  }

  export type DealerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    mobile?: SortOrder
    whatsapp?: SortOrder
    shopName?: SortOrder
    city?: SortOrder
    address?: SortOrder
    gstNumber?: SortOrder
    openingPendingBalance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DealerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    mobile?: SortOrder
    whatsapp?: SortOrder
    shopName?: SortOrder
    city?: SortOrder
    address?: SortOrder
    gstNumber?: SortOrder
    openingPendingBalance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DealerSumOrderByAggregateInput = {
    openingPendingBalance?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BatchListRelationFilter = {
    every?: BatchWhereInput
    some?: BatchWhereInput
    none?: BatchWhereInput
  }

  export type BatchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompanyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    brandName?: SortOrder
    contactPerson?: SortOrder
    mobile?: SortOrder
    address?: SortOrder
  }

  export type CompanyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    brandName?: SortOrder
    contactPerson?: SortOrder
    mobile?: SortOrder
    address?: SortOrder
  }

  export type CompanyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    brandName?: SortOrder
    contactPerson?: SortOrder
    mobile?: SortOrder
    address?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DealerScalarRelationFilter = {
    is?: DealerWhereInput
    isNot?: DealerWhereInput
  }

  export type CompanyScalarRelationFilter = {
    is?: CompanyWhereInput
    isNot?: CompanyWhereInput
  }

  export type BatchNullableScalarRelationFilter = {
    is?: BatchWhereInput | null
    isNot?: BatchWhereInput | null
  }

  export type DeliveryItemListRelationFilter = {
    every?: DeliveryItemWhereInput
    some?: DeliveryItemWhereInput
    none?: DeliveryItemWhereInput
  }

  export type DeliveryItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClaimCountOrderByAggregateInput = {
    id?: SortOrder
    claimNumber?: SortOrder
    date?: SortOrder
    dealerId?: SortOrder
    customerName?: SortOrder
    customerMobile?: SortOrder
    companyId?: SortOrder
    batteryModel?: SortOrder
    oldSerialNumber?: SortOrder
    batteryType?: SortOrder
    warrantyCard?: SortOrder
    saleDate?: SortOrder
    problem?: SortOrder
    status?: SortOrder
    remarks?: SortOrder
    photoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    batchId?: SortOrder
  }

  export type ClaimMaxOrderByAggregateInput = {
    id?: SortOrder
    claimNumber?: SortOrder
    date?: SortOrder
    dealerId?: SortOrder
    customerName?: SortOrder
    customerMobile?: SortOrder
    companyId?: SortOrder
    batteryModel?: SortOrder
    oldSerialNumber?: SortOrder
    batteryType?: SortOrder
    warrantyCard?: SortOrder
    saleDate?: SortOrder
    problem?: SortOrder
    status?: SortOrder
    remarks?: SortOrder
    photoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    batchId?: SortOrder
  }

  export type ClaimMinOrderByAggregateInput = {
    id?: SortOrder
    claimNumber?: SortOrder
    date?: SortOrder
    dealerId?: SortOrder
    customerName?: SortOrder
    customerMobile?: SortOrder
    companyId?: SortOrder
    batteryModel?: SortOrder
    oldSerialNumber?: SortOrder
    batteryType?: SortOrder
    warrantyCard?: SortOrder
    saleDate?: SortOrder
    problem?: SortOrder
    status?: SortOrder
    remarks?: SortOrder
    photoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    batchId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BatchCountOrderByAggregateInput = {
    id?: SortOrder
    batchNumber?: SortOrder
    companyId?: SortOrder
    sentDate?: SortOrder
    status?: SortOrder
    remarks?: SortOrder
  }

  export type BatchMaxOrderByAggregateInput = {
    id?: SortOrder
    batchNumber?: SortOrder
    companyId?: SortOrder
    sentDate?: SortOrder
    status?: SortOrder
    remarks?: SortOrder
  }

  export type BatchMinOrderByAggregateInput = {
    id?: SortOrder
    batchNumber?: SortOrder
    companyId?: SortOrder
    sentDate?: SortOrder
    status?: SortOrder
    remarks?: SortOrder
  }

  export type DeliveryCountOrderByAggregateInput = {
    id?: SortOrder
    deliveryNumber?: SortOrder
    date?: SortOrder
    dealerId?: SortOrder
    quantity?: SortOrder
    remarks?: SortOrder
  }

  export type DeliveryAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type DeliveryMaxOrderByAggregateInput = {
    id?: SortOrder
    deliveryNumber?: SortOrder
    date?: SortOrder
    dealerId?: SortOrder
    quantity?: SortOrder
    remarks?: SortOrder
  }

  export type DeliveryMinOrderByAggregateInput = {
    id?: SortOrder
    deliveryNumber?: SortOrder
    date?: SortOrder
    dealerId?: SortOrder
    quantity?: SortOrder
    remarks?: SortOrder
  }

  export type DeliverySumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type DeliveryScalarRelationFilter = {
    is?: DeliveryWhereInput
    isNot?: DeliveryWhereInput
  }

  export type ClaimScalarRelationFilter = {
    is?: ClaimWhereInput
    isNot?: ClaimWhereInput
  }

  export type DeliveryItemCountOrderByAggregateInput = {
    id?: SortOrder
    deliveryId?: SortOrder
    claimId?: SortOrder
    newSerialNumber?: SortOrder
  }

  export type DeliveryItemMaxOrderByAggregateInput = {
    id?: SortOrder
    deliveryId?: SortOrder
    claimId?: SortOrder
    newSerialNumber?: SortOrder
  }

  export type DeliveryItemMinOrderByAggregateInput = {
    id?: SortOrder
    deliveryId?: SortOrder
    claimId?: SortOrder
    newSerialNumber?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ClaimCreateNestedManyWithoutDealerInput = {
    create?: XOR<ClaimCreateWithoutDealerInput, ClaimUncheckedCreateWithoutDealerInput> | ClaimCreateWithoutDealerInput[] | ClaimUncheckedCreateWithoutDealerInput[]
    connectOrCreate?: ClaimCreateOrConnectWithoutDealerInput | ClaimCreateOrConnectWithoutDealerInput[]
    createMany?: ClaimCreateManyDealerInputEnvelope
    connect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
  }

  export type DeliveryCreateNestedManyWithoutDealerInput = {
    create?: XOR<DeliveryCreateWithoutDealerInput, DeliveryUncheckedCreateWithoutDealerInput> | DeliveryCreateWithoutDealerInput[] | DeliveryUncheckedCreateWithoutDealerInput[]
    connectOrCreate?: DeliveryCreateOrConnectWithoutDealerInput | DeliveryCreateOrConnectWithoutDealerInput[]
    createMany?: DeliveryCreateManyDealerInputEnvelope
    connect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
  }

  export type ClaimUncheckedCreateNestedManyWithoutDealerInput = {
    create?: XOR<ClaimCreateWithoutDealerInput, ClaimUncheckedCreateWithoutDealerInput> | ClaimCreateWithoutDealerInput[] | ClaimUncheckedCreateWithoutDealerInput[]
    connectOrCreate?: ClaimCreateOrConnectWithoutDealerInput | ClaimCreateOrConnectWithoutDealerInput[]
    createMany?: ClaimCreateManyDealerInputEnvelope
    connect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
  }

  export type DeliveryUncheckedCreateNestedManyWithoutDealerInput = {
    create?: XOR<DeliveryCreateWithoutDealerInput, DeliveryUncheckedCreateWithoutDealerInput> | DeliveryCreateWithoutDealerInput[] | DeliveryUncheckedCreateWithoutDealerInput[]
    connectOrCreate?: DeliveryCreateOrConnectWithoutDealerInput | DeliveryCreateOrConnectWithoutDealerInput[]
    createMany?: DeliveryCreateManyDealerInputEnvelope
    connect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ClaimUpdateManyWithoutDealerNestedInput = {
    create?: XOR<ClaimCreateWithoutDealerInput, ClaimUncheckedCreateWithoutDealerInput> | ClaimCreateWithoutDealerInput[] | ClaimUncheckedCreateWithoutDealerInput[]
    connectOrCreate?: ClaimCreateOrConnectWithoutDealerInput | ClaimCreateOrConnectWithoutDealerInput[]
    upsert?: ClaimUpsertWithWhereUniqueWithoutDealerInput | ClaimUpsertWithWhereUniqueWithoutDealerInput[]
    createMany?: ClaimCreateManyDealerInputEnvelope
    set?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    disconnect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    delete?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    connect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    update?: ClaimUpdateWithWhereUniqueWithoutDealerInput | ClaimUpdateWithWhereUniqueWithoutDealerInput[]
    updateMany?: ClaimUpdateManyWithWhereWithoutDealerInput | ClaimUpdateManyWithWhereWithoutDealerInput[]
    deleteMany?: ClaimScalarWhereInput | ClaimScalarWhereInput[]
  }

  export type DeliveryUpdateManyWithoutDealerNestedInput = {
    create?: XOR<DeliveryCreateWithoutDealerInput, DeliveryUncheckedCreateWithoutDealerInput> | DeliveryCreateWithoutDealerInput[] | DeliveryUncheckedCreateWithoutDealerInput[]
    connectOrCreate?: DeliveryCreateOrConnectWithoutDealerInput | DeliveryCreateOrConnectWithoutDealerInput[]
    upsert?: DeliveryUpsertWithWhereUniqueWithoutDealerInput | DeliveryUpsertWithWhereUniqueWithoutDealerInput[]
    createMany?: DeliveryCreateManyDealerInputEnvelope
    set?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    disconnect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    delete?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    connect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    update?: DeliveryUpdateWithWhereUniqueWithoutDealerInput | DeliveryUpdateWithWhereUniqueWithoutDealerInput[]
    updateMany?: DeliveryUpdateManyWithWhereWithoutDealerInput | DeliveryUpdateManyWithWhereWithoutDealerInput[]
    deleteMany?: DeliveryScalarWhereInput | DeliveryScalarWhereInput[]
  }

  export type ClaimUncheckedUpdateManyWithoutDealerNestedInput = {
    create?: XOR<ClaimCreateWithoutDealerInput, ClaimUncheckedCreateWithoutDealerInput> | ClaimCreateWithoutDealerInput[] | ClaimUncheckedCreateWithoutDealerInput[]
    connectOrCreate?: ClaimCreateOrConnectWithoutDealerInput | ClaimCreateOrConnectWithoutDealerInput[]
    upsert?: ClaimUpsertWithWhereUniqueWithoutDealerInput | ClaimUpsertWithWhereUniqueWithoutDealerInput[]
    createMany?: ClaimCreateManyDealerInputEnvelope
    set?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    disconnect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    delete?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    connect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    update?: ClaimUpdateWithWhereUniqueWithoutDealerInput | ClaimUpdateWithWhereUniqueWithoutDealerInput[]
    updateMany?: ClaimUpdateManyWithWhereWithoutDealerInput | ClaimUpdateManyWithWhereWithoutDealerInput[]
    deleteMany?: ClaimScalarWhereInput | ClaimScalarWhereInput[]
  }

  export type DeliveryUncheckedUpdateManyWithoutDealerNestedInput = {
    create?: XOR<DeliveryCreateWithoutDealerInput, DeliveryUncheckedCreateWithoutDealerInput> | DeliveryCreateWithoutDealerInput[] | DeliveryUncheckedCreateWithoutDealerInput[]
    connectOrCreate?: DeliveryCreateOrConnectWithoutDealerInput | DeliveryCreateOrConnectWithoutDealerInput[]
    upsert?: DeliveryUpsertWithWhereUniqueWithoutDealerInput | DeliveryUpsertWithWhereUniqueWithoutDealerInput[]
    createMany?: DeliveryCreateManyDealerInputEnvelope
    set?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    disconnect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    delete?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    connect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    update?: DeliveryUpdateWithWhereUniqueWithoutDealerInput | DeliveryUpdateWithWhereUniqueWithoutDealerInput[]
    updateMany?: DeliveryUpdateManyWithWhereWithoutDealerInput | DeliveryUpdateManyWithWhereWithoutDealerInput[]
    deleteMany?: DeliveryScalarWhereInput | DeliveryScalarWhereInput[]
  }

  export type ClaimCreateNestedManyWithoutCompanyInput = {
    create?: XOR<ClaimCreateWithoutCompanyInput, ClaimUncheckedCreateWithoutCompanyInput> | ClaimCreateWithoutCompanyInput[] | ClaimUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ClaimCreateOrConnectWithoutCompanyInput | ClaimCreateOrConnectWithoutCompanyInput[]
    createMany?: ClaimCreateManyCompanyInputEnvelope
    connect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
  }

  export type BatchCreateNestedManyWithoutCompanyInput = {
    create?: XOR<BatchCreateWithoutCompanyInput, BatchUncheckedCreateWithoutCompanyInput> | BatchCreateWithoutCompanyInput[] | BatchUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: BatchCreateOrConnectWithoutCompanyInput | BatchCreateOrConnectWithoutCompanyInput[]
    createMany?: BatchCreateManyCompanyInputEnvelope
    connect?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
  }

  export type ClaimUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<ClaimCreateWithoutCompanyInput, ClaimUncheckedCreateWithoutCompanyInput> | ClaimCreateWithoutCompanyInput[] | ClaimUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ClaimCreateOrConnectWithoutCompanyInput | ClaimCreateOrConnectWithoutCompanyInput[]
    createMany?: ClaimCreateManyCompanyInputEnvelope
    connect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
  }

  export type BatchUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<BatchCreateWithoutCompanyInput, BatchUncheckedCreateWithoutCompanyInput> | BatchCreateWithoutCompanyInput[] | BatchUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: BatchCreateOrConnectWithoutCompanyInput | BatchCreateOrConnectWithoutCompanyInput[]
    createMany?: BatchCreateManyCompanyInputEnvelope
    connect?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
  }

  export type ClaimUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<ClaimCreateWithoutCompanyInput, ClaimUncheckedCreateWithoutCompanyInput> | ClaimCreateWithoutCompanyInput[] | ClaimUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ClaimCreateOrConnectWithoutCompanyInput | ClaimCreateOrConnectWithoutCompanyInput[]
    upsert?: ClaimUpsertWithWhereUniqueWithoutCompanyInput | ClaimUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: ClaimCreateManyCompanyInputEnvelope
    set?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    disconnect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    delete?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    connect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    update?: ClaimUpdateWithWhereUniqueWithoutCompanyInput | ClaimUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: ClaimUpdateManyWithWhereWithoutCompanyInput | ClaimUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: ClaimScalarWhereInput | ClaimScalarWhereInput[]
  }

  export type BatchUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<BatchCreateWithoutCompanyInput, BatchUncheckedCreateWithoutCompanyInput> | BatchCreateWithoutCompanyInput[] | BatchUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: BatchCreateOrConnectWithoutCompanyInput | BatchCreateOrConnectWithoutCompanyInput[]
    upsert?: BatchUpsertWithWhereUniqueWithoutCompanyInput | BatchUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: BatchCreateManyCompanyInputEnvelope
    set?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
    disconnect?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
    delete?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
    connect?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
    update?: BatchUpdateWithWhereUniqueWithoutCompanyInput | BatchUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: BatchUpdateManyWithWhereWithoutCompanyInput | BatchUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: BatchScalarWhereInput | BatchScalarWhereInput[]
  }

  export type ClaimUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<ClaimCreateWithoutCompanyInput, ClaimUncheckedCreateWithoutCompanyInput> | ClaimCreateWithoutCompanyInput[] | ClaimUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ClaimCreateOrConnectWithoutCompanyInput | ClaimCreateOrConnectWithoutCompanyInput[]
    upsert?: ClaimUpsertWithWhereUniqueWithoutCompanyInput | ClaimUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: ClaimCreateManyCompanyInputEnvelope
    set?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    disconnect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    delete?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    connect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    update?: ClaimUpdateWithWhereUniqueWithoutCompanyInput | ClaimUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: ClaimUpdateManyWithWhereWithoutCompanyInput | ClaimUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: ClaimScalarWhereInput | ClaimScalarWhereInput[]
  }

  export type BatchUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<BatchCreateWithoutCompanyInput, BatchUncheckedCreateWithoutCompanyInput> | BatchCreateWithoutCompanyInput[] | BatchUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: BatchCreateOrConnectWithoutCompanyInput | BatchCreateOrConnectWithoutCompanyInput[]
    upsert?: BatchUpsertWithWhereUniqueWithoutCompanyInput | BatchUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: BatchCreateManyCompanyInputEnvelope
    set?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
    disconnect?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
    delete?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
    connect?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
    update?: BatchUpdateWithWhereUniqueWithoutCompanyInput | BatchUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: BatchUpdateManyWithWhereWithoutCompanyInput | BatchUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: BatchScalarWhereInput | BatchScalarWhereInput[]
  }

  export type DealerCreateNestedOneWithoutClaimsInput = {
    create?: XOR<DealerCreateWithoutClaimsInput, DealerUncheckedCreateWithoutClaimsInput>
    connectOrCreate?: DealerCreateOrConnectWithoutClaimsInput
    connect?: DealerWhereUniqueInput
  }

  export type CompanyCreateNestedOneWithoutClaimsInput = {
    create?: XOR<CompanyCreateWithoutClaimsInput, CompanyUncheckedCreateWithoutClaimsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutClaimsInput
    connect?: CompanyWhereUniqueInput
  }

  export type BatchCreateNestedOneWithoutClaimsInput = {
    create?: XOR<BatchCreateWithoutClaimsInput, BatchUncheckedCreateWithoutClaimsInput>
    connectOrCreate?: BatchCreateOrConnectWithoutClaimsInput
    connect?: BatchWhereUniqueInput
  }

  export type DeliveryItemCreateNestedManyWithoutClaimInput = {
    create?: XOR<DeliveryItemCreateWithoutClaimInput, DeliveryItemUncheckedCreateWithoutClaimInput> | DeliveryItemCreateWithoutClaimInput[] | DeliveryItemUncheckedCreateWithoutClaimInput[]
    connectOrCreate?: DeliveryItemCreateOrConnectWithoutClaimInput | DeliveryItemCreateOrConnectWithoutClaimInput[]
    createMany?: DeliveryItemCreateManyClaimInputEnvelope
    connect?: DeliveryItemWhereUniqueInput | DeliveryItemWhereUniqueInput[]
  }

  export type DeliveryItemUncheckedCreateNestedManyWithoutClaimInput = {
    create?: XOR<DeliveryItemCreateWithoutClaimInput, DeliveryItemUncheckedCreateWithoutClaimInput> | DeliveryItemCreateWithoutClaimInput[] | DeliveryItemUncheckedCreateWithoutClaimInput[]
    connectOrCreate?: DeliveryItemCreateOrConnectWithoutClaimInput | DeliveryItemCreateOrConnectWithoutClaimInput[]
    createMany?: DeliveryItemCreateManyClaimInputEnvelope
    connect?: DeliveryItemWhereUniqueInput | DeliveryItemWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DealerUpdateOneRequiredWithoutClaimsNestedInput = {
    create?: XOR<DealerCreateWithoutClaimsInput, DealerUncheckedCreateWithoutClaimsInput>
    connectOrCreate?: DealerCreateOrConnectWithoutClaimsInput
    upsert?: DealerUpsertWithoutClaimsInput
    connect?: DealerWhereUniqueInput
    update?: XOR<XOR<DealerUpdateToOneWithWhereWithoutClaimsInput, DealerUpdateWithoutClaimsInput>, DealerUncheckedUpdateWithoutClaimsInput>
  }

  export type CompanyUpdateOneRequiredWithoutClaimsNestedInput = {
    create?: XOR<CompanyCreateWithoutClaimsInput, CompanyUncheckedCreateWithoutClaimsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutClaimsInput
    upsert?: CompanyUpsertWithoutClaimsInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutClaimsInput, CompanyUpdateWithoutClaimsInput>, CompanyUncheckedUpdateWithoutClaimsInput>
  }

  export type BatchUpdateOneWithoutClaimsNestedInput = {
    create?: XOR<BatchCreateWithoutClaimsInput, BatchUncheckedCreateWithoutClaimsInput>
    connectOrCreate?: BatchCreateOrConnectWithoutClaimsInput
    upsert?: BatchUpsertWithoutClaimsInput
    disconnect?: BatchWhereInput | boolean
    delete?: BatchWhereInput | boolean
    connect?: BatchWhereUniqueInput
    update?: XOR<XOR<BatchUpdateToOneWithWhereWithoutClaimsInput, BatchUpdateWithoutClaimsInput>, BatchUncheckedUpdateWithoutClaimsInput>
  }

  export type DeliveryItemUpdateManyWithoutClaimNestedInput = {
    create?: XOR<DeliveryItemCreateWithoutClaimInput, DeliveryItemUncheckedCreateWithoutClaimInput> | DeliveryItemCreateWithoutClaimInput[] | DeliveryItemUncheckedCreateWithoutClaimInput[]
    connectOrCreate?: DeliveryItemCreateOrConnectWithoutClaimInput | DeliveryItemCreateOrConnectWithoutClaimInput[]
    upsert?: DeliveryItemUpsertWithWhereUniqueWithoutClaimInput | DeliveryItemUpsertWithWhereUniqueWithoutClaimInput[]
    createMany?: DeliveryItemCreateManyClaimInputEnvelope
    set?: DeliveryItemWhereUniqueInput | DeliveryItemWhereUniqueInput[]
    disconnect?: DeliveryItemWhereUniqueInput | DeliveryItemWhereUniqueInput[]
    delete?: DeliveryItemWhereUniqueInput | DeliveryItemWhereUniqueInput[]
    connect?: DeliveryItemWhereUniqueInput | DeliveryItemWhereUniqueInput[]
    update?: DeliveryItemUpdateWithWhereUniqueWithoutClaimInput | DeliveryItemUpdateWithWhereUniqueWithoutClaimInput[]
    updateMany?: DeliveryItemUpdateManyWithWhereWithoutClaimInput | DeliveryItemUpdateManyWithWhereWithoutClaimInput[]
    deleteMany?: DeliveryItemScalarWhereInput | DeliveryItemScalarWhereInput[]
  }

  export type DeliveryItemUncheckedUpdateManyWithoutClaimNestedInput = {
    create?: XOR<DeliveryItemCreateWithoutClaimInput, DeliveryItemUncheckedCreateWithoutClaimInput> | DeliveryItemCreateWithoutClaimInput[] | DeliveryItemUncheckedCreateWithoutClaimInput[]
    connectOrCreate?: DeliveryItemCreateOrConnectWithoutClaimInput | DeliveryItemCreateOrConnectWithoutClaimInput[]
    upsert?: DeliveryItemUpsertWithWhereUniqueWithoutClaimInput | DeliveryItemUpsertWithWhereUniqueWithoutClaimInput[]
    createMany?: DeliveryItemCreateManyClaimInputEnvelope
    set?: DeliveryItemWhereUniqueInput | DeliveryItemWhereUniqueInput[]
    disconnect?: DeliveryItemWhereUniqueInput | DeliveryItemWhereUniqueInput[]
    delete?: DeliveryItemWhereUniqueInput | DeliveryItemWhereUniqueInput[]
    connect?: DeliveryItemWhereUniqueInput | DeliveryItemWhereUniqueInput[]
    update?: DeliveryItemUpdateWithWhereUniqueWithoutClaimInput | DeliveryItemUpdateWithWhereUniqueWithoutClaimInput[]
    updateMany?: DeliveryItemUpdateManyWithWhereWithoutClaimInput | DeliveryItemUpdateManyWithWhereWithoutClaimInput[]
    deleteMany?: DeliveryItemScalarWhereInput | DeliveryItemScalarWhereInput[]
  }

  export type CompanyCreateNestedOneWithoutBatchesInput = {
    create?: XOR<CompanyCreateWithoutBatchesInput, CompanyUncheckedCreateWithoutBatchesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutBatchesInput
    connect?: CompanyWhereUniqueInput
  }

  export type ClaimCreateNestedManyWithoutBatchInput = {
    create?: XOR<ClaimCreateWithoutBatchInput, ClaimUncheckedCreateWithoutBatchInput> | ClaimCreateWithoutBatchInput[] | ClaimUncheckedCreateWithoutBatchInput[]
    connectOrCreate?: ClaimCreateOrConnectWithoutBatchInput | ClaimCreateOrConnectWithoutBatchInput[]
    createMany?: ClaimCreateManyBatchInputEnvelope
    connect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
  }

  export type ClaimUncheckedCreateNestedManyWithoutBatchInput = {
    create?: XOR<ClaimCreateWithoutBatchInput, ClaimUncheckedCreateWithoutBatchInput> | ClaimCreateWithoutBatchInput[] | ClaimUncheckedCreateWithoutBatchInput[]
    connectOrCreate?: ClaimCreateOrConnectWithoutBatchInput | ClaimCreateOrConnectWithoutBatchInput[]
    createMany?: ClaimCreateManyBatchInputEnvelope
    connect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
  }

  export type CompanyUpdateOneRequiredWithoutBatchesNestedInput = {
    create?: XOR<CompanyCreateWithoutBatchesInput, CompanyUncheckedCreateWithoutBatchesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutBatchesInput
    upsert?: CompanyUpsertWithoutBatchesInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutBatchesInput, CompanyUpdateWithoutBatchesInput>, CompanyUncheckedUpdateWithoutBatchesInput>
  }

  export type ClaimUpdateManyWithoutBatchNestedInput = {
    create?: XOR<ClaimCreateWithoutBatchInput, ClaimUncheckedCreateWithoutBatchInput> | ClaimCreateWithoutBatchInput[] | ClaimUncheckedCreateWithoutBatchInput[]
    connectOrCreate?: ClaimCreateOrConnectWithoutBatchInput | ClaimCreateOrConnectWithoutBatchInput[]
    upsert?: ClaimUpsertWithWhereUniqueWithoutBatchInput | ClaimUpsertWithWhereUniqueWithoutBatchInput[]
    createMany?: ClaimCreateManyBatchInputEnvelope
    set?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    disconnect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    delete?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    connect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    update?: ClaimUpdateWithWhereUniqueWithoutBatchInput | ClaimUpdateWithWhereUniqueWithoutBatchInput[]
    updateMany?: ClaimUpdateManyWithWhereWithoutBatchInput | ClaimUpdateManyWithWhereWithoutBatchInput[]
    deleteMany?: ClaimScalarWhereInput | ClaimScalarWhereInput[]
  }

  export type ClaimUncheckedUpdateManyWithoutBatchNestedInput = {
    create?: XOR<ClaimCreateWithoutBatchInput, ClaimUncheckedCreateWithoutBatchInput> | ClaimCreateWithoutBatchInput[] | ClaimUncheckedCreateWithoutBatchInput[]
    connectOrCreate?: ClaimCreateOrConnectWithoutBatchInput | ClaimCreateOrConnectWithoutBatchInput[]
    upsert?: ClaimUpsertWithWhereUniqueWithoutBatchInput | ClaimUpsertWithWhereUniqueWithoutBatchInput[]
    createMany?: ClaimCreateManyBatchInputEnvelope
    set?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    disconnect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    delete?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    connect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    update?: ClaimUpdateWithWhereUniqueWithoutBatchInput | ClaimUpdateWithWhereUniqueWithoutBatchInput[]
    updateMany?: ClaimUpdateManyWithWhereWithoutBatchInput | ClaimUpdateManyWithWhereWithoutBatchInput[]
    deleteMany?: ClaimScalarWhereInput | ClaimScalarWhereInput[]
  }

  export type DealerCreateNestedOneWithoutDeliveriesInput = {
    create?: XOR<DealerCreateWithoutDeliveriesInput, DealerUncheckedCreateWithoutDeliveriesInput>
    connectOrCreate?: DealerCreateOrConnectWithoutDeliveriesInput
    connect?: DealerWhereUniqueInput
  }

  export type DeliveryItemCreateNestedManyWithoutDeliveryInput = {
    create?: XOR<DeliveryItemCreateWithoutDeliveryInput, DeliveryItemUncheckedCreateWithoutDeliveryInput> | DeliveryItemCreateWithoutDeliveryInput[] | DeliveryItemUncheckedCreateWithoutDeliveryInput[]
    connectOrCreate?: DeliveryItemCreateOrConnectWithoutDeliveryInput | DeliveryItemCreateOrConnectWithoutDeliveryInput[]
    createMany?: DeliveryItemCreateManyDeliveryInputEnvelope
    connect?: DeliveryItemWhereUniqueInput | DeliveryItemWhereUniqueInput[]
  }

  export type DeliveryItemUncheckedCreateNestedManyWithoutDeliveryInput = {
    create?: XOR<DeliveryItemCreateWithoutDeliveryInput, DeliveryItemUncheckedCreateWithoutDeliveryInput> | DeliveryItemCreateWithoutDeliveryInput[] | DeliveryItemUncheckedCreateWithoutDeliveryInput[]
    connectOrCreate?: DeliveryItemCreateOrConnectWithoutDeliveryInput | DeliveryItemCreateOrConnectWithoutDeliveryInput[]
    createMany?: DeliveryItemCreateManyDeliveryInputEnvelope
    connect?: DeliveryItemWhereUniqueInput | DeliveryItemWhereUniqueInput[]
  }

  export type DealerUpdateOneRequiredWithoutDeliveriesNestedInput = {
    create?: XOR<DealerCreateWithoutDeliveriesInput, DealerUncheckedCreateWithoutDeliveriesInput>
    connectOrCreate?: DealerCreateOrConnectWithoutDeliveriesInput
    upsert?: DealerUpsertWithoutDeliveriesInput
    connect?: DealerWhereUniqueInput
    update?: XOR<XOR<DealerUpdateToOneWithWhereWithoutDeliveriesInput, DealerUpdateWithoutDeliveriesInput>, DealerUncheckedUpdateWithoutDeliveriesInput>
  }

  export type DeliveryItemUpdateManyWithoutDeliveryNestedInput = {
    create?: XOR<DeliveryItemCreateWithoutDeliveryInput, DeliveryItemUncheckedCreateWithoutDeliveryInput> | DeliveryItemCreateWithoutDeliveryInput[] | DeliveryItemUncheckedCreateWithoutDeliveryInput[]
    connectOrCreate?: DeliveryItemCreateOrConnectWithoutDeliveryInput | DeliveryItemCreateOrConnectWithoutDeliveryInput[]
    upsert?: DeliveryItemUpsertWithWhereUniqueWithoutDeliveryInput | DeliveryItemUpsertWithWhereUniqueWithoutDeliveryInput[]
    createMany?: DeliveryItemCreateManyDeliveryInputEnvelope
    set?: DeliveryItemWhereUniqueInput | DeliveryItemWhereUniqueInput[]
    disconnect?: DeliveryItemWhereUniqueInput | DeliveryItemWhereUniqueInput[]
    delete?: DeliveryItemWhereUniqueInput | DeliveryItemWhereUniqueInput[]
    connect?: DeliveryItemWhereUniqueInput | DeliveryItemWhereUniqueInput[]
    update?: DeliveryItemUpdateWithWhereUniqueWithoutDeliveryInput | DeliveryItemUpdateWithWhereUniqueWithoutDeliveryInput[]
    updateMany?: DeliveryItemUpdateManyWithWhereWithoutDeliveryInput | DeliveryItemUpdateManyWithWhereWithoutDeliveryInput[]
    deleteMany?: DeliveryItemScalarWhereInput | DeliveryItemScalarWhereInput[]
  }

  export type DeliveryItemUncheckedUpdateManyWithoutDeliveryNestedInput = {
    create?: XOR<DeliveryItemCreateWithoutDeliveryInput, DeliveryItemUncheckedCreateWithoutDeliveryInput> | DeliveryItemCreateWithoutDeliveryInput[] | DeliveryItemUncheckedCreateWithoutDeliveryInput[]
    connectOrCreate?: DeliveryItemCreateOrConnectWithoutDeliveryInput | DeliveryItemCreateOrConnectWithoutDeliveryInput[]
    upsert?: DeliveryItemUpsertWithWhereUniqueWithoutDeliveryInput | DeliveryItemUpsertWithWhereUniqueWithoutDeliveryInput[]
    createMany?: DeliveryItemCreateManyDeliveryInputEnvelope
    set?: DeliveryItemWhereUniqueInput | DeliveryItemWhereUniqueInput[]
    disconnect?: DeliveryItemWhereUniqueInput | DeliveryItemWhereUniqueInput[]
    delete?: DeliveryItemWhereUniqueInput | DeliveryItemWhereUniqueInput[]
    connect?: DeliveryItemWhereUniqueInput | DeliveryItemWhereUniqueInput[]
    update?: DeliveryItemUpdateWithWhereUniqueWithoutDeliveryInput | DeliveryItemUpdateWithWhereUniqueWithoutDeliveryInput[]
    updateMany?: DeliveryItemUpdateManyWithWhereWithoutDeliveryInput | DeliveryItemUpdateManyWithWhereWithoutDeliveryInput[]
    deleteMany?: DeliveryItemScalarWhereInput | DeliveryItemScalarWhereInput[]
  }

  export type DeliveryCreateNestedOneWithoutItemsInput = {
    create?: XOR<DeliveryCreateWithoutItemsInput, DeliveryUncheckedCreateWithoutItemsInput>
    connectOrCreate?: DeliveryCreateOrConnectWithoutItemsInput
    connect?: DeliveryWhereUniqueInput
  }

  export type ClaimCreateNestedOneWithoutDeliveryItemsInput = {
    create?: XOR<ClaimCreateWithoutDeliveryItemsInput, ClaimUncheckedCreateWithoutDeliveryItemsInput>
    connectOrCreate?: ClaimCreateOrConnectWithoutDeliveryItemsInput
    connect?: ClaimWhereUniqueInput
  }

  export type DeliveryUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<DeliveryCreateWithoutItemsInput, DeliveryUncheckedCreateWithoutItemsInput>
    connectOrCreate?: DeliveryCreateOrConnectWithoutItemsInput
    upsert?: DeliveryUpsertWithoutItemsInput
    connect?: DeliveryWhereUniqueInput
    update?: XOR<XOR<DeliveryUpdateToOneWithWhereWithoutItemsInput, DeliveryUpdateWithoutItemsInput>, DeliveryUncheckedUpdateWithoutItemsInput>
  }

  export type ClaimUpdateOneRequiredWithoutDeliveryItemsNestedInput = {
    create?: XOR<ClaimCreateWithoutDeliveryItemsInput, ClaimUncheckedCreateWithoutDeliveryItemsInput>
    connectOrCreate?: ClaimCreateOrConnectWithoutDeliveryItemsInput
    upsert?: ClaimUpsertWithoutDeliveryItemsInput
    connect?: ClaimWhereUniqueInput
    update?: XOR<XOR<ClaimUpdateToOneWithWhereWithoutDeliveryItemsInput, ClaimUpdateWithoutDeliveryItemsInput>, ClaimUncheckedUpdateWithoutDeliveryItemsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ClaimCreateWithoutDealerInput = {
    id?: string
    claimNumber: string
    date?: Date | string
    customerName?: string | null
    customerMobile?: string | null
    batteryModel: string
    oldSerialNumber: string
    batteryType: string
    warrantyCard?: string | null
    saleDate?: Date | string | null
    problem: string
    status?: string
    remarks?: string | null
    photoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutClaimsInput
    batch?: BatchCreateNestedOneWithoutClaimsInput
    deliveryItems?: DeliveryItemCreateNestedManyWithoutClaimInput
  }

  export type ClaimUncheckedCreateWithoutDealerInput = {
    id?: string
    claimNumber: string
    date?: Date | string
    customerName?: string | null
    customerMobile?: string | null
    companyId: string
    batteryModel: string
    oldSerialNumber: string
    batteryType: string
    warrantyCard?: string | null
    saleDate?: Date | string | null
    problem: string
    status?: string
    remarks?: string | null
    photoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    batchId?: string | null
    deliveryItems?: DeliveryItemUncheckedCreateNestedManyWithoutClaimInput
  }

  export type ClaimCreateOrConnectWithoutDealerInput = {
    where: ClaimWhereUniqueInput
    create: XOR<ClaimCreateWithoutDealerInput, ClaimUncheckedCreateWithoutDealerInput>
  }

  export type ClaimCreateManyDealerInputEnvelope = {
    data: ClaimCreateManyDealerInput | ClaimCreateManyDealerInput[]
  }

  export type DeliveryCreateWithoutDealerInput = {
    id?: string
    deliveryNumber: string
    date?: Date | string
    quantity?: number
    remarks?: string | null
    items?: DeliveryItemCreateNestedManyWithoutDeliveryInput
  }

  export type DeliveryUncheckedCreateWithoutDealerInput = {
    id?: string
    deliveryNumber: string
    date?: Date | string
    quantity?: number
    remarks?: string | null
    items?: DeliveryItemUncheckedCreateNestedManyWithoutDeliveryInput
  }

  export type DeliveryCreateOrConnectWithoutDealerInput = {
    where: DeliveryWhereUniqueInput
    create: XOR<DeliveryCreateWithoutDealerInput, DeliveryUncheckedCreateWithoutDealerInput>
  }

  export type DeliveryCreateManyDealerInputEnvelope = {
    data: DeliveryCreateManyDealerInput | DeliveryCreateManyDealerInput[]
  }

  export type ClaimUpsertWithWhereUniqueWithoutDealerInput = {
    where: ClaimWhereUniqueInput
    update: XOR<ClaimUpdateWithoutDealerInput, ClaimUncheckedUpdateWithoutDealerInput>
    create: XOR<ClaimCreateWithoutDealerInput, ClaimUncheckedCreateWithoutDealerInput>
  }

  export type ClaimUpdateWithWhereUniqueWithoutDealerInput = {
    where: ClaimWhereUniqueInput
    data: XOR<ClaimUpdateWithoutDealerInput, ClaimUncheckedUpdateWithoutDealerInput>
  }

  export type ClaimUpdateManyWithWhereWithoutDealerInput = {
    where: ClaimScalarWhereInput
    data: XOR<ClaimUpdateManyMutationInput, ClaimUncheckedUpdateManyWithoutDealerInput>
  }

  export type ClaimScalarWhereInput = {
    AND?: ClaimScalarWhereInput | ClaimScalarWhereInput[]
    OR?: ClaimScalarWhereInput[]
    NOT?: ClaimScalarWhereInput | ClaimScalarWhereInput[]
    id?: StringFilter<"Claim"> | string
    claimNumber?: StringFilter<"Claim"> | string
    date?: DateTimeFilter<"Claim"> | Date | string
    dealerId?: StringFilter<"Claim"> | string
    customerName?: StringNullableFilter<"Claim"> | string | null
    customerMobile?: StringNullableFilter<"Claim"> | string | null
    companyId?: StringFilter<"Claim"> | string
    batteryModel?: StringFilter<"Claim"> | string
    oldSerialNumber?: StringFilter<"Claim"> | string
    batteryType?: StringFilter<"Claim"> | string
    warrantyCard?: StringNullableFilter<"Claim"> | string | null
    saleDate?: DateTimeNullableFilter<"Claim"> | Date | string | null
    problem?: StringFilter<"Claim"> | string
    status?: StringFilter<"Claim"> | string
    remarks?: StringNullableFilter<"Claim"> | string | null
    photoUrl?: StringNullableFilter<"Claim"> | string | null
    createdAt?: DateTimeFilter<"Claim"> | Date | string
    updatedAt?: DateTimeFilter<"Claim"> | Date | string
    batchId?: StringNullableFilter<"Claim"> | string | null
  }

  export type DeliveryUpsertWithWhereUniqueWithoutDealerInput = {
    where: DeliveryWhereUniqueInput
    update: XOR<DeliveryUpdateWithoutDealerInput, DeliveryUncheckedUpdateWithoutDealerInput>
    create: XOR<DeliveryCreateWithoutDealerInput, DeliveryUncheckedCreateWithoutDealerInput>
  }

  export type DeliveryUpdateWithWhereUniqueWithoutDealerInput = {
    where: DeliveryWhereUniqueInput
    data: XOR<DeliveryUpdateWithoutDealerInput, DeliveryUncheckedUpdateWithoutDealerInput>
  }

  export type DeliveryUpdateManyWithWhereWithoutDealerInput = {
    where: DeliveryScalarWhereInput
    data: XOR<DeliveryUpdateManyMutationInput, DeliveryUncheckedUpdateManyWithoutDealerInput>
  }

  export type DeliveryScalarWhereInput = {
    AND?: DeliveryScalarWhereInput | DeliveryScalarWhereInput[]
    OR?: DeliveryScalarWhereInput[]
    NOT?: DeliveryScalarWhereInput | DeliveryScalarWhereInput[]
    id?: StringFilter<"Delivery"> | string
    deliveryNumber?: StringFilter<"Delivery"> | string
    date?: DateTimeFilter<"Delivery"> | Date | string
    dealerId?: StringFilter<"Delivery"> | string
    quantity?: IntFilter<"Delivery"> | number
    remarks?: StringNullableFilter<"Delivery"> | string | null
  }

  export type ClaimCreateWithoutCompanyInput = {
    id?: string
    claimNumber: string
    date?: Date | string
    customerName?: string | null
    customerMobile?: string | null
    batteryModel: string
    oldSerialNumber: string
    batteryType: string
    warrantyCard?: string | null
    saleDate?: Date | string | null
    problem: string
    status?: string
    remarks?: string | null
    photoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    dealer: DealerCreateNestedOneWithoutClaimsInput
    batch?: BatchCreateNestedOneWithoutClaimsInput
    deliveryItems?: DeliveryItemCreateNestedManyWithoutClaimInput
  }

  export type ClaimUncheckedCreateWithoutCompanyInput = {
    id?: string
    claimNumber: string
    date?: Date | string
    dealerId: string
    customerName?: string | null
    customerMobile?: string | null
    batteryModel: string
    oldSerialNumber: string
    batteryType: string
    warrantyCard?: string | null
    saleDate?: Date | string | null
    problem: string
    status?: string
    remarks?: string | null
    photoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    batchId?: string | null
    deliveryItems?: DeliveryItemUncheckedCreateNestedManyWithoutClaimInput
  }

  export type ClaimCreateOrConnectWithoutCompanyInput = {
    where: ClaimWhereUniqueInput
    create: XOR<ClaimCreateWithoutCompanyInput, ClaimUncheckedCreateWithoutCompanyInput>
  }

  export type ClaimCreateManyCompanyInputEnvelope = {
    data: ClaimCreateManyCompanyInput | ClaimCreateManyCompanyInput[]
  }

  export type BatchCreateWithoutCompanyInput = {
    id?: string
    batchNumber: string
    sentDate?: Date | string
    status?: string
    remarks?: string | null
    claims?: ClaimCreateNestedManyWithoutBatchInput
  }

  export type BatchUncheckedCreateWithoutCompanyInput = {
    id?: string
    batchNumber: string
    sentDate?: Date | string
    status?: string
    remarks?: string | null
    claims?: ClaimUncheckedCreateNestedManyWithoutBatchInput
  }

  export type BatchCreateOrConnectWithoutCompanyInput = {
    where: BatchWhereUniqueInput
    create: XOR<BatchCreateWithoutCompanyInput, BatchUncheckedCreateWithoutCompanyInput>
  }

  export type BatchCreateManyCompanyInputEnvelope = {
    data: BatchCreateManyCompanyInput | BatchCreateManyCompanyInput[]
  }

  export type ClaimUpsertWithWhereUniqueWithoutCompanyInput = {
    where: ClaimWhereUniqueInput
    update: XOR<ClaimUpdateWithoutCompanyInput, ClaimUncheckedUpdateWithoutCompanyInput>
    create: XOR<ClaimCreateWithoutCompanyInput, ClaimUncheckedCreateWithoutCompanyInput>
  }

  export type ClaimUpdateWithWhereUniqueWithoutCompanyInput = {
    where: ClaimWhereUniqueInput
    data: XOR<ClaimUpdateWithoutCompanyInput, ClaimUncheckedUpdateWithoutCompanyInput>
  }

  export type ClaimUpdateManyWithWhereWithoutCompanyInput = {
    where: ClaimScalarWhereInput
    data: XOR<ClaimUpdateManyMutationInput, ClaimUncheckedUpdateManyWithoutCompanyInput>
  }

  export type BatchUpsertWithWhereUniqueWithoutCompanyInput = {
    where: BatchWhereUniqueInput
    update: XOR<BatchUpdateWithoutCompanyInput, BatchUncheckedUpdateWithoutCompanyInput>
    create: XOR<BatchCreateWithoutCompanyInput, BatchUncheckedCreateWithoutCompanyInput>
  }

  export type BatchUpdateWithWhereUniqueWithoutCompanyInput = {
    where: BatchWhereUniqueInput
    data: XOR<BatchUpdateWithoutCompanyInput, BatchUncheckedUpdateWithoutCompanyInput>
  }

  export type BatchUpdateManyWithWhereWithoutCompanyInput = {
    where: BatchScalarWhereInput
    data: XOR<BatchUpdateManyMutationInput, BatchUncheckedUpdateManyWithoutCompanyInput>
  }

  export type BatchScalarWhereInput = {
    AND?: BatchScalarWhereInput | BatchScalarWhereInput[]
    OR?: BatchScalarWhereInput[]
    NOT?: BatchScalarWhereInput | BatchScalarWhereInput[]
    id?: StringFilter<"Batch"> | string
    batchNumber?: StringFilter<"Batch"> | string
    companyId?: StringFilter<"Batch"> | string
    sentDate?: DateTimeFilter<"Batch"> | Date | string
    status?: StringFilter<"Batch"> | string
    remarks?: StringNullableFilter<"Batch"> | string | null
  }

  export type DealerCreateWithoutClaimsInput = {
    id?: string
    name: string
    mobile: string
    whatsapp?: string | null
    shopName: string
    city: string
    address: string
    gstNumber?: string | null
    openingPendingBalance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deliveries?: DeliveryCreateNestedManyWithoutDealerInput
  }

  export type DealerUncheckedCreateWithoutClaimsInput = {
    id?: string
    name: string
    mobile: string
    whatsapp?: string | null
    shopName: string
    city: string
    address: string
    gstNumber?: string | null
    openingPendingBalance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deliveries?: DeliveryUncheckedCreateNestedManyWithoutDealerInput
  }

  export type DealerCreateOrConnectWithoutClaimsInput = {
    where: DealerWhereUniqueInput
    create: XOR<DealerCreateWithoutClaimsInput, DealerUncheckedCreateWithoutClaimsInput>
  }

  export type CompanyCreateWithoutClaimsInput = {
    id?: string
    name: string
    brandName: string
    contactPerson?: string | null
    mobile?: string | null
    address?: string | null
    batches?: BatchCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutClaimsInput = {
    id?: string
    name: string
    brandName: string
    contactPerson?: string | null
    mobile?: string | null
    address?: string | null
    batches?: BatchUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutClaimsInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutClaimsInput, CompanyUncheckedCreateWithoutClaimsInput>
  }

  export type BatchCreateWithoutClaimsInput = {
    id?: string
    batchNumber: string
    sentDate?: Date | string
    status?: string
    remarks?: string | null
    company: CompanyCreateNestedOneWithoutBatchesInput
  }

  export type BatchUncheckedCreateWithoutClaimsInput = {
    id?: string
    batchNumber: string
    companyId: string
    sentDate?: Date | string
    status?: string
    remarks?: string | null
  }

  export type BatchCreateOrConnectWithoutClaimsInput = {
    where: BatchWhereUniqueInput
    create: XOR<BatchCreateWithoutClaimsInput, BatchUncheckedCreateWithoutClaimsInput>
  }

  export type DeliveryItemCreateWithoutClaimInput = {
    id?: string
    newSerialNumber?: string | null
    delivery: DeliveryCreateNestedOneWithoutItemsInput
  }

  export type DeliveryItemUncheckedCreateWithoutClaimInput = {
    id?: string
    deliveryId: string
    newSerialNumber?: string | null
  }

  export type DeliveryItemCreateOrConnectWithoutClaimInput = {
    where: DeliveryItemWhereUniqueInput
    create: XOR<DeliveryItemCreateWithoutClaimInput, DeliveryItemUncheckedCreateWithoutClaimInput>
  }

  export type DeliveryItemCreateManyClaimInputEnvelope = {
    data: DeliveryItemCreateManyClaimInput | DeliveryItemCreateManyClaimInput[]
  }

  export type DealerUpsertWithoutClaimsInput = {
    update: XOR<DealerUpdateWithoutClaimsInput, DealerUncheckedUpdateWithoutClaimsInput>
    create: XOR<DealerCreateWithoutClaimsInput, DealerUncheckedCreateWithoutClaimsInput>
    where?: DealerWhereInput
  }

  export type DealerUpdateToOneWithWhereWithoutClaimsInput = {
    where?: DealerWhereInput
    data: XOR<DealerUpdateWithoutClaimsInput, DealerUncheckedUpdateWithoutClaimsInput>
  }

  export type DealerUpdateWithoutClaimsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    shopName?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    gstNumber?: NullableStringFieldUpdateOperationsInput | string | null
    openingPendingBalance?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveries?: DeliveryUpdateManyWithoutDealerNestedInput
  }

  export type DealerUncheckedUpdateWithoutClaimsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    shopName?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    gstNumber?: NullableStringFieldUpdateOperationsInput | string | null
    openingPendingBalance?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveries?: DeliveryUncheckedUpdateManyWithoutDealerNestedInput
  }

  export type CompanyUpsertWithoutClaimsInput = {
    update: XOR<CompanyUpdateWithoutClaimsInput, CompanyUncheckedUpdateWithoutClaimsInput>
    create: XOR<CompanyCreateWithoutClaimsInput, CompanyUncheckedCreateWithoutClaimsInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutClaimsInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutClaimsInput, CompanyUncheckedUpdateWithoutClaimsInput>
  }

  export type CompanyUpdateWithoutClaimsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brandName?: StringFieldUpdateOperationsInput | string
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    batches?: BatchUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutClaimsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brandName?: StringFieldUpdateOperationsInput | string
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    batches?: BatchUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type BatchUpsertWithoutClaimsInput = {
    update: XOR<BatchUpdateWithoutClaimsInput, BatchUncheckedUpdateWithoutClaimsInput>
    create: XOR<BatchCreateWithoutClaimsInput, BatchUncheckedCreateWithoutClaimsInput>
    where?: BatchWhereInput
  }

  export type BatchUpdateToOneWithWhereWithoutClaimsInput = {
    where?: BatchWhereInput
    data: XOR<BatchUpdateWithoutClaimsInput, BatchUncheckedUpdateWithoutClaimsInput>
  }

  export type BatchUpdateWithoutClaimsInput = {
    id?: StringFieldUpdateOperationsInput | string
    batchNumber?: StringFieldUpdateOperationsInput | string
    sentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    company?: CompanyUpdateOneRequiredWithoutBatchesNestedInput
  }

  export type BatchUncheckedUpdateWithoutClaimsInput = {
    id?: StringFieldUpdateOperationsInput | string
    batchNumber?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    sentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DeliveryItemUpsertWithWhereUniqueWithoutClaimInput = {
    where: DeliveryItemWhereUniqueInput
    update: XOR<DeliveryItemUpdateWithoutClaimInput, DeliveryItemUncheckedUpdateWithoutClaimInput>
    create: XOR<DeliveryItemCreateWithoutClaimInput, DeliveryItemUncheckedCreateWithoutClaimInput>
  }

  export type DeliveryItemUpdateWithWhereUniqueWithoutClaimInput = {
    where: DeliveryItemWhereUniqueInput
    data: XOR<DeliveryItemUpdateWithoutClaimInput, DeliveryItemUncheckedUpdateWithoutClaimInput>
  }

  export type DeliveryItemUpdateManyWithWhereWithoutClaimInput = {
    where: DeliveryItemScalarWhereInput
    data: XOR<DeliveryItemUpdateManyMutationInput, DeliveryItemUncheckedUpdateManyWithoutClaimInput>
  }

  export type DeliveryItemScalarWhereInput = {
    AND?: DeliveryItemScalarWhereInput | DeliveryItemScalarWhereInput[]
    OR?: DeliveryItemScalarWhereInput[]
    NOT?: DeliveryItemScalarWhereInput | DeliveryItemScalarWhereInput[]
    id?: StringFilter<"DeliveryItem"> | string
    deliveryId?: StringFilter<"DeliveryItem"> | string
    claimId?: StringFilter<"DeliveryItem"> | string
    newSerialNumber?: StringNullableFilter<"DeliveryItem"> | string | null
  }

  export type CompanyCreateWithoutBatchesInput = {
    id?: string
    name: string
    brandName: string
    contactPerson?: string | null
    mobile?: string | null
    address?: string | null
    claims?: ClaimCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutBatchesInput = {
    id?: string
    name: string
    brandName: string
    contactPerson?: string | null
    mobile?: string | null
    address?: string | null
    claims?: ClaimUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutBatchesInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutBatchesInput, CompanyUncheckedCreateWithoutBatchesInput>
  }

  export type ClaimCreateWithoutBatchInput = {
    id?: string
    claimNumber: string
    date?: Date | string
    customerName?: string | null
    customerMobile?: string | null
    batteryModel: string
    oldSerialNumber: string
    batteryType: string
    warrantyCard?: string | null
    saleDate?: Date | string | null
    problem: string
    status?: string
    remarks?: string | null
    photoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    dealer: DealerCreateNestedOneWithoutClaimsInput
    company: CompanyCreateNestedOneWithoutClaimsInput
    deliveryItems?: DeliveryItemCreateNestedManyWithoutClaimInput
  }

  export type ClaimUncheckedCreateWithoutBatchInput = {
    id?: string
    claimNumber: string
    date?: Date | string
    dealerId: string
    customerName?: string | null
    customerMobile?: string | null
    companyId: string
    batteryModel: string
    oldSerialNumber: string
    batteryType: string
    warrantyCard?: string | null
    saleDate?: Date | string | null
    problem: string
    status?: string
    remarks?: string | null
    photoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deliveryItems?: DeliveryItemUncheckedCreateNestedManyWithoutClaimInput
  }

  export type ClaimCreateOrConnectWithoutBatchInput = {
    where: ClaimWhereUniqueInput
    create: XOR<ClaimCreateWithoutBatchInput, ClaimUncheckedCreateWithoutBatchInput>
  }

  export type ClaimCreateManyBatchInputEnvelope = {
    data: ClaimCreateManyBatchInput | ClaimCreateManyBatchInput[]
  }

  export type CompanyUpsertWithoutBatchesInput = {
    update: XOR<CompanyUpdateWithoutBatchesInput, CompanyUncheckedUpdateWithoutBatchesInput>
    create: XOR<CompanyCreateWithoutBatchesInput, CompanyUncheckedCreateWithoutBatchesInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutBatchesInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutBatchesInput, CompanyUncheckedUpdateWithoutBatchesInput>
  }

  export type CompanyUpdateWithoutBatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brandName?: StringFieldUpdateOperationsInput | string
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    claims?: ClaimUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutBatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brandName?: StringFieldUpdateOperationsInput | string
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    claims?: ClaimUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type ClaimUpsertWithWhereUniqueWithoutBatchInput = {
    where: ClaimWhereUniqueInput
    update: XOR<ClaimUpdateWithoutBatchInput, ClaimUncheckedUpdateWithoutBatchInput>
    create: XOR<ClaimCreateWithoutBatchInput, ClaimUncheckedCreateWithoutBatchInput>
  }

  export type ClaimUpdateWithWhereUniqueWithoutBatchInput = {
    where: ClaimWhereUniqueInput
    data: XOR<ClaimUpdateWithoutBatchInput, ClaimUncheckedUpdateWithoutBatchInput>
  }

  export type ClaimUpdateManyWithWhereWithoutBatchInput = {
    where: ClaimScalarWhereInput
    data: XOR<ClaimUpdateManyMutationInput, ClaimUncheckedUpdateManyWithoutBatchInput>
  }

  export type DealerCreateWithoutDeliveriesInput = {
    id?: string
    name: string
    mobile: string
    whatsapp?: string | null
    shopName: string
    city: string
    address: string
    gstNumber?: string | null
    openingPendingBalance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    claims?: ClaimCreateNestedManyWithoutDealerInput
  }

  export type DealerUncheckedCreateWithoutDeliveriesInput = {
    id?: string
    name: string
    mobile: string
    whatsapp?: string | null
    shopName: string
    city: string
    address: string
    gstNumber?: string | null
    openingPendingBalance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    claims?: ClaimUncheckedCreateNestedManyWithoutDealerInput
  }

  export type DealerCreateOrConnectWithoutDeliveriesInput = {
    where: DealerWhereUniqueInput
    create: XOR<DealerCreateWithoutDeliveriesInput, DealerUncheckedCreateWithoutDeliveriesInput>
  }

  export type DeliveryItemCreateWithoutDeliveryInput = {
    id?: string
    newSerialNumber?: string | null
    claim: ClaimCreateNestedOneWithoutDeliveryItemsInput
  }

  export type DeliveryItemUncheckedCreateWithoutDeliveryInput = {
    id?: string
    claimId: string
    newSerialNumber?: string | null
  }

  export type DeliveryItemCreateOrConnectWithoutDeliveryInput = {
    where: DeliveryItemWhereUniqueInput
    create: XOR<DeliveryItemCreateWithoutDeliveryInput, DeliveryItemUncheckedCreateWithoutDeliveryInput>
  }

  export type DeliveryItemCreateManyDeliveryInputEnvelope = {
    data: DeliveryItemCreateManyDeliveryInput | DeliveryItemCreateManyDeliveryInput[]
  }

  export type DealerUpsertWithoutDeliveriesInput = {
    update: XOR<DealerUpdateWithoutDeliveriesInput, DealerUncheckedUpdateWithoutDeliveriesInput>
    create: XOR<DealerCreateWithoutDeliveriesInput, DealerUncheckedCreateWithoutDeliveriesInput>
    where?: DealerWhereInput
  }

  export type DealerUpdateToOneWithWhereWithoutDeliveriesInput = {
    where?: DealerWhereInput
    data: XOR<DealerUpdateWithoutDeliveriesInput, DealerUncheckedUpdateWithoutDeliveriesInput>
  }

  export type DealerUpdateWithoutDeliveriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    shopName?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    gstNumber?: NullableStringFieldUpdateOperationsInput | string | null
    openingPendingBalance?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    claims?: ClaimUpdateManyWithoutDealerNestedInput
  }

  export type DealerUncheckedUpdateWithoutDeliveriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    shopName?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    gstNumber?: NullableStringFieldUpdateOperationsInput | string | null
    openingPendingBalance?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    claims?: ClaimUncheckedUpdateManyWithoutDealerNestedInput
  }

  export type DeliveryItemUpsertWithWhereUniqueWithoutDeliveryInput = {
    where: DeliveryItemWhereUniqueInput
    update: XOR<DeliveryItemUpdateWithoutDeliveryInput, DeliveryItemUncheckedUpdateWithoutDeliveryInput>
    create: XOR<DeliveryItemCreateWithoutDeliveryInput, DeliveryItemUncheckedCreateWithoutDeliveryInput>
  }

  export type DeliveryItemUpdateWithWhereUniqueWithoutDeliveryInput = {
    where: DeliveryItemWhereUniqueInput
    data: XOR<DeliveryItemUpdateWithoutDeliveryInput, DeliveryItemUncheckedUpdateWithoutDeliveryInput>
  }

  export type DeliveryItemUpdateManyWithWhereWithoutDeliveryInput = {
    where: DeliveryItemScalarWhereInput
    data: XOR<DeliveryItemUpdateManyMutationInput, DeliveryItemUncheckedUpdateManyWithoutDeliveryInput>
  }

  export type DeliveryCreateWithoutItemsInput = {
    id?: string
    deliveryNumber: string
    date?: Date | string
    quantity?: number
    remarks?: string | null
    dealer: DealerCreateNestedOneWithoutDeliveriesInput
  }

  export type DeliveryUncheckedCreateWithoutItemsInput = {
    id?: string
    deliveryNumber: string
    date?: Date | string
    dealerId: string
    quantity?: number
    remarks?: string | null
  }

  export type DeliveryCreateOrConnectWithoutItemsInput = {
    where: DeliveryWhereUniqueInput
    create: XOR<DeliveryCreateWithoutItemsInput, DeliveryUncheckedCreateWithoutItemsInput>
  }

  export type ClaimCreateWithoutDeliveryItemsInput = {
    id?: string
    claimNumber: string
    date?: Date | string
    customerName?: string | null
    customerMobile?: string | null
    batteryModel: string
    oldSerialNumber: string
    batteryType: string
    warrantyCard?: string | null
    saleDate?: Date | string | null
    problem: string
    status?: string
    remarks?: string | null
    photoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    dealer: DealerCreateNestedOneWithoutClaimsInput
    company: CompanyCreateNestedOneWithoutClaimsInput
    batch?: BatchCreateNestedOneWithoutClaimsInput
  }

  export type ClaimUncheckedCreateWithoutDeliveryItemsInput = {
    id?: string
    claimNumber: string
    date?: Date | string
    dealerId: string
    customerName?: string | null
    customerMobile?: string | null
    companyId: string
    batteryModel: string
    oldSerialNumber: string
    batteryType: string
    warrantyCard?: string | null
    saleDate?: Date | string | null
    problem: string
    status?: string
    remarks?: string | null
    photoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    batchId?: string | null
  }

  export type ClaimCreateOrConnectWithoutDeliveryItemsInput = {
    where: ClaimWhereUniqueInput
    create: XOR<ClaimCreateWithoutDeliveryItemsInput, ClaimUncheckedCreateWithoutDeliveryItemsInput>
  }

  export type DeliveryUpsertWithoutItemsInput = {
    update: XOR<DeliveryUpdateWithoutItemsInput, DeliveryUncheckedUpdateWithoutItemsInput>
    create: XOR<DeliveryCreateWithoutItemsInput, DeliveryUncheckedCreateWithoutItemsInput>
    where?: DeliveryWhereInput
  }

  export type DeliveryUpdateToOneWithWhereWithoutItemsInput = {
    where?: DeliveryWhereInput
    data: XOR<DeliveryUpdateWithoutItemsInput, DeliveryUncheckedUpdateWithoutItemsInput>
  }

  export type DeliveryUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    deliveryNumber?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    dealer?: DealerUpdateOneRequiredWithoutDeliveriesNestedInput
  }

  export type DeliveryUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    deliveryNumber?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    dealerId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClaimUpsertWithoutDeliveryItemsInput = {
    update: XOR<ClaimUpdateWithoutDeliveryItemsInput, ClaimUncheckedUpdateWithoutDeliveryItemsInput>
    create: XOR<ClaimCreateWithoutDeliveryItemsInput, ClaimUncheckedCreateWithoutDeliveryItemsInput>
    where?: ClaimWhereInput
  }

  export type ClaimUpdateToOneWithWhereWithoutDeliveryItemsInput = {
    where?: ClaimWhereInput
    data: XOR<ClaimUpdateWithoutDeliveryItemsInput, ClaimUncheckedUpdateWithoutDeliveryItemsInput>
  }

  export type ClaimUpdateWithoutDeliveryItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    claimNumber?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerMobile?: NullableStringFieldUpdateOperationsInput | string | null
    batteryModel?: StringFieldUpdateOperationsInput | string
    oldSerialNumber?: StringFieldUpdateOperationsInput | string
    batteryType?: StringFieldUpdateOperationsInput | string
    warrantyCard?: NullableStringFieldUpdateOperationsInput | string | null
    saleDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    problem?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dealer?: DealerUpdateOneRequiredWithoutClaimsNestedInput
    company?: CompanyUpdateOneRequiredWithoutClaimsNestedInput
    batch?: BatchUpdateOneWithoutClaimsNestedInput
  }

  export type ClaimUncheckedUpdateWithoutDeliveryItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    claimNumber?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    dealerId?: StringFieldUpdateOperationsInput | string
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerMobile?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: StringFieldUpdateOperationsInput | string
    batteryModel?: StringFieldUpdateOperationsInput | string
    oldSerialNumber?: StringFieldUpdateOperationsInput | string
    batteryType?: StringFieldUpdateOperationsInput | string
    warrantyCard?: NullableStringFieldUpdateOperationsInput | string | null
    saleDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    problem?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    batchId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClaimCreateManyDealerInput = {
    id?: string
    claimNumber: string
    date?: Date | string
    customerName?: string | null
    customerMobile?: string | null
    companyId: string
    batteryModel: string
    oldSerialNumber: string
    batteryType: string
    warrantyCard?: string | null
    saleDate?: Date | string | null
    problem: string
    status?: string
    remarks?: string | null
    photoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    batchId?: string | null
  }

  export type DeliveryCreateManyDealerInput = {
    id?: string
    deliveryNumber: string
    date?: Date | string
    quantity?: number
    remarks?: string | null
  }

  export type ClaimUpdateWithoutDealerInput = {
    id?: StringFieldUpdateOperationsInput | string
    claimNumber?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerMobile?: NullableStringFieldUpdateOperationsInput | string | null
    batteryModel?: StringFieldUpdateOperationsInput | string
    oldSerialNumber?: StringFieldUpdateOperationsInput | string
    batteryType?: StringFieldUpdateOperationsInput | string
    warrantyCard?: NullableStringFieldUpdateOperationsInput | string | null
    saleDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    problem?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutClaimsNestedInput
    batch?: BatchUpdateOneWithoutClaimsNestedInput
    deliveryItems?: DeliveryItemUpdateManyWithoutClaimNestedInput
  }

  export type ClaimUncheckedUpdateWithoutDealerInput = {
    id?: StringFieldUpdateOperationsInput | string
    claimNumber?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerMobile?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: StringFieldUpdateOperationsInput | string
    batteryModel?: StringFieldUpdateOperationsInput | string
    oldSerialNumber?: StringFieldUpdateOperationsInput | string
    batteryType?: StringFieldUpdateOperationsInput | string
    warrantyCard?: NullableStringFieldUpdateOperationsInput | string | null
    saleDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    problem?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    batchId?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryItems?: DeliveryItemUncheckedUpdateManyWithoutClaimNestedInput
  }

  export type ClaimUncheckedUpdateManyWithoutDealerInput = {
    id?: StringFieldUpdateOperationsInput | string
    claimNumber?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerMobile?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: StringFieldUpdateOperationsInput | string
    batteryModel?: StringFieldUpdateOperationsInput | string
    oldSerialNumber?: StringFieldUpdateOperationsInput | string
    batteryType?: StringFieldUpdateOperationsInput | string
    warrantyCard?: NullableStringFieldUpdateOperationsInput | string | null
    saleDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    problem?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    batchId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DeliveryUpdateWithoutDealerInput = {
    id?: StringFieldUpdateOperationsInput | string
    deliveryNumber?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    items?: DeliveryItemUpdateManyWithoutDeliveryNestedInput
  }

  export type DeliveryUncheckedUpdateWithoutDealerInput = {
    id?: StringFieldUpdateOperationsInput | string
    deliveryNumber?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    items?: DeliveryItemUncheckedUpdateManyWithoutDeliveryNestedInput
  }

  export type DeliveryUncheckedUpdateManyWithoutDealerInput = {
    id?: StringFieldUpdateOperationsInput | string
    deliveryNumber?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClaimCreateManyCompanyInput = {
    id?: string
    claimNumber: string
    date?: Date | string
    dealerId: string
    customerName?: string | null
    customerMobile?: string | null
    batteryModel: string
    oldSerialNumber: string
    batteryType: string
    warrantyCard?: string | null
    saleDate?: Date | string | null
    problem: string
    status?: string
    remarks?: string | null
    photoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    batchId?: string | null
  }

  export type BatchCreateManyCompanyInput = {
    id?: string
    batchNumber: string
    sentDate?: Date | string
    status?: string
    remarks?: string | null
  }

  export type ClaimUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    claimNumber?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerMobile?: NullableStringFieldUpdateOperationsInput | string | null
    batteryModel?: StringFieldUpdateOperationsInput | string
    oldSerialNumber?: StringFieldUpdateOperationsInput | string
    batteryType?: StringFieldUpdateOperationsInput | string
    warrantyCard?: NullableStringFieldUpdateOperationsInput | string | null
    saleDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    problem?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dealer?: DealerUpdateOneRequiredWithoutClaimsNestedInput
    batch?: BatchUpdateOneWithoutClaimsNestedInput
    deliveryItems?: DeliveryItemUpdateManyWithoutClaimNestedInput
  }

  export type ClaimUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    claimNumber?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    dealerId?: StringFieldUpdateOperationsInput | string
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerMobile?: NullableStringFieldUpdateOperationsInput | string | null
    batteryModel?: StringFieldUpdateOperationsInput | string
    oldSerialNumber?: StringFieldUpdateOperationsInput | string
    batteryType?: StringFieldUpdateOperationsInput | string
    warrantyCard?: NullableStringFieldUpdateOperationsInput | string | null
    saleDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    problem?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    batchId?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryItems?: DeliveryItemUncheckedUpdateManyWithoutClaimNestedInput
  }

  export type ClaimUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    claimNumber?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    dealerId?: StringFieldUpdateOperationsInput | string
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerMobile?: NullableStringFieldUpdateOperationsInput | string | null
    batteryModel?: StringFieldUpdateOperationsInput | string
    oldSerialNumber?: StringFieldUpdateOperationsInput | string
    batteryType?: StringFieldUpdateOperationsInput | string
    warrantyCard?: NullableStringFieldUpdateOperationsInput | string | null
    saleDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    problem?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    batchId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BatchUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    batchNumber?: StringFieldUpdateOperationsInput | string
    sentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    claims?: ClaimUpdateManyWithoutBatchNestedInput
  }

  export type BatchUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    batchNumber?: StringFieldUpdateOperationsInput | string
    sentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    claims?: ClaimUncheckedUpdateManyWithoutBatchNestedInput
  }

  export type BatchUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    batchNumber?: StringFieldUpdateOperationsInput | string
    sentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DeliveryItemCreateManyClaimInput = {
    id?: string
    deliveryId: string
    newSerialNumber?: string | null
  }

  export type DeliveryItemUpdateWithoutClaimInput = {
    id?: StringFieldUpdateOperationsInput | string
    newSerialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    delivery?: DeliveryUpdateOneRequiredWithoutItemsNestedInput
  }

  export type DeliveryItemUncheckedUpdateWithoutClaimInput = {
    id?: StringFieldUpdateOperationsInput | string
    deliveryId?: StringFieldUpdateOperationsInput | string
    newSerialNumber?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DeliveryItemUncheckedUpdateManyWithoutClaimInput = {
    id?: StringFieldUpdateOperationsInput | string
    deliveryId?: StringFieldUpdateOperationsInput | string
    newSerialNumber?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClaimCreateManyBatchInput = {
    id?: string
    claimNumber: string
    date?: Date | string
    dealerId: string
    customerName?: string | null
    customerMobile?: string | null
    companyId: string
    batteryModel: string
    oldSerialNumber: string
    batteryType: string
    warrantyCard?: string | null
    saleDate?: Date | string | null
    problem: string
    status?: string
    remarks?: string | null
    photoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClaimUpdateWithoutBatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    claimNumber?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerMobile?: NullableStringFieldUpdateOperationsInput | string | null
    batteryModel?: StringFieldUpdateOperationsInput | string
    oldSerialNumber?: StringFieldUpdateOperationsInput | string
    batteryType?: StringFieldUpdateOperationsInput | string
    warrantyCard?: NullableStringFieldUpdateOperationsInput | string | null
    saleDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    problem?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dealer?: DealerUpdateOneRequiredWithoutClaimsNestedInput
    company?: CompanyUpdateOneRequiredWithoutClaimsNestedInput
    deliveryItems?: DeliveryItemUpdateManyWithoutClaimNestedInput
  }

  export type ClaimUncheckedUpdateWithoutBatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    claimNumber?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    dealerId?: StringFieldUpdateOperationsInput | string
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerMobile?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: StringFieldUpdateOperationsInput | string
    batteryModel?: StringFieldUpdateOperationsInput | string
    oldSerialNumber?: StringFieldUpdateOperationsInput | string
    batteryType?: StringFieldUpdateOperationsInput | string
    warrantyCard?: NullableStringFieldUpdateOperationsInput | string | null
    saleDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    problem?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveryItems?: DeliveryItemUncheckedUpdateManyWithoutClaimNestedInput
  }

  export type ClaimUncheckedUpdateManyWithoutBatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    claimNumber?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    dealerId?: StringFieldUpdateOperationsInput | string
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerMobile?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: StringFieldUpdateOperationsInput | string
    batteryModel?: StringFieldUpdateOperationsInput | string
    oldSerialNumber?: StringFieldUpdateOperationsInput | string
    batteryType?: StringFieldUpdateOperationsInput | string
    warrantyCard?: NullableStringFieldUpdateOperationsInput | string | null
    saleDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    problem?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeliveryItemCreateManyDeliveryInput = {
    id?: string
    claimId: string
    newSerialNumber?: string | null
  }

  export type DeliveryItemUpdateWithoutDeliveryInput = {
    id?: StringFieldUpdateOperationsInput | string
    newSerialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    claim?: ClaimUpdateOneRequiredWithoutDeliveryItemsNestedInput
  }

  export type DeliveryItemUncheckedUpdateWithoutDeliveryInput = {
    id?: StringFieldUpdateOperationsInput | string
    claimId?: StringFieldUpdateOperationsInput | string
    newSerialNumber?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DeliveryItemUncheckedUpdateManyWithoutDeliveryInput = {
    id?: StringFieldUpdateOperationsInput | string
    claimId?: StringFieldUpdateOperationsInput | string
    newSerialNumber?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}