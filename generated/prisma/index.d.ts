
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model calendar
 * 
 */
export type calendar = $Result.DefaultSelection<Prisma.$calendarPayload>
/**
 * Model data
 * 
 */
export type data = $Result.DefaultSelection<Prisma.$dataPayload>
/**
 * Model location
 * 
 */
export type location = $Result.DefaultSelection<Prisma.$locationPayload>
/**
 * Model pandemie
 * 
 */
export type pandemie = $Result.DefaultSelection<Prisma.$pandemiePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Calendars
 * const calendars = await prisma.calendar.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Calendars
   * const calendars = await prisma.calendar.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.calendar`: Exposes CRUD operations for the **calendar** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Calendars
    * const calendars = await prisma.calendar.findMany()
    * ```
    */
  get calendar(): Prisma.calendarDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.data`: Exposes CRUD operations for the **data** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Data
    * const data = await prisma.data.findMany()
    * ```
    */
  get data(): Prisma.dataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.location`: Exposes CRUD operations for the **location** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Locations
    * const locations = await prisma.location.findMany()
    * ```
    */
  get location(): Prisma.locationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pandemie`: Exposes CRUD operations for the **pandemie** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pandemies
    * const pandemies = await prisma.pandemie.findMany()
    * ```
    */
  get pandemie(): Prisma.pandemieDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    calendar: 'calendar',
    data: 'data',
    location: 'location',
    pandemie: 'pandemie'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "calendar" | "data" | "location" | "pandemie"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      calendar: {
        payload: Prisma.$calendarPayload<ExtArgs>
        fields: Prisma.calendarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.calendarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$calendarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.calendarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$calendarPayload>
          }
          findFirst: {
            args: Prisma.calendarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$calendarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.calendarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$calendarPayload>
          }
          findMany: {
            args: Prisma.calendarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$calendarPayload>[]
          }
          create: {
            args: Prisma.calendarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$calendarPayload>
          }
          createMany: {
            args: Prisma.calendarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.calendarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$calendarPayload>
          }
          update: {
            args: Prisma.calendarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$calendarPayload>
          }
          deleteMany: {
            args: Prisma.calendarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.calendarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.calendarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$calendarPayload>
          }
          aggregate: {
            args: Prisma.CalendarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCalendar>
          }
          groupBy: {
            args: Prisma.calendarGroupByArgs<ExtArgs>
            result: $Utils.Optional<CalendarGroupByOutputType>[]
          }
          count: {
            args: Prisma.calendarCountArgs<ExtArgs>
            result: $Utils.Optional<CalendarCountAggregateOutputType> | number
          }
        }
      }
      data: {
        payload: Prisma.$dataPayload<ExtArgs>
        fields: Prisma.dataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.dataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.dataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dataPayload>
          }
          findFirst: {
            args: Prisma.dataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.dataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dataPayload>
          }
          findMany: {
            args: Prisma.dataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dataPayload>[]
          }
          create: {
            args: Prisma.dataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dataPayload>
          }
          createMany: {
            args: Prisma.dataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.dataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dataPayload>
          }
          update: {
            args: Prisma.dataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dataPayload>
          }
          deleteMany: {
            args: Prisma.dataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.dataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.dataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dataPayload>
          }
          aggregate: {
            args: Prisma.DataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateData>
          }
          groupBy: {
            args: Prisma.dataGroupByArgs<ExtArgs>
            result: $Utils.Optional<DataGroupByOutputType>[]
          }
          count: {
            args: Prisma.dataCountArgs<ExtArgs>
            result: $Utils.Optional<DataCountAggregateOutputType> | number
          }
        }
      }
      location: {
        payload: Prisma.$locationPayload<ExtArgs>
        fields: Prisma.locationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.locationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$locationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.locationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$locationPayload>
          }
          findFirst: {
            args: Prisma.locationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$locationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.locationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$locationPayload>
          }
          findMany: {
            args: Prisma.locationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$locationPayload>[]
          }
          create: {
            args: Prisma.locationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$locationPayload>
          }
          createMany: {
            args: Prisma.locationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.locationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$locationPayload>
          }
          update: {
            args: Prisma.locationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$locationPayload>
          }
          deleteMany: {
            args: Prisma.locationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.locationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.locationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$locationPayload>
          }
          aggregate: {
            args: Prisma.LocationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocation>
          }
          groupBy: {
            args: Prisma.locationGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocationGroupByOutputType>[]
          }
          count: {
            args: Prisma.locationCountArgs<ExtArgs>
            result: $Utils.Optional<LocationCountAggregateOutputType> | number
          }
        }
      }
      pandemie: {
        payload: Prisma.$pandemiePayload<ExtArgs>
        fields: Prisma.pandemieFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pandemieFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pandemiePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pandemieFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pandemiePayload>
          }
          findFirst: {
            args: Prisma.pandemieFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pandemiePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pandemieFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pandemiePayload>
          }
          findMany: {
            args: Prisma.pandemieFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pandemiePayload>[]
          }
          create: {
            args: Prisma.pandemieCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pandemiePayload>
          }
          createMany: {
            args: Prisma.pandemieCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.pandemieDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pandemiePayload>
          }
          update: {
            args: Prisma.pandemieUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pandemiePayload>
          }
          deleteMany: {
            args: Prisma.pandemieDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pandemieUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.pandemieUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pandemiePayload>
          }
          aggregate: {
            args: Prisma.PandemieAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePandemie>
          }
          groupBy: {
            args: Prisma.pandemieGroupByArgs<ExtArgs>
            result: $Utils.Optional<PandemieGroupByOutputType>[]
          }
          count: {
            args: Prisma.pandemieCountArgs<ExtArgs>
            result: $Utils.Optional<PandemieCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    calendar?: calendarOmit
    data?: dataOmit
    location?: locationOmit
    pandemie?: pandemieOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type CalendarCountOutputType
   */

  export type CalendarCountOutputType = {
    data: number
  }

  export type CalendarCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    data?: boolean | CalendarCountOutputTypeCountDataArgs
  }

  // Custom InputTypes
  /**
   * CalendarCountOutputType without action
   */
  export type CalendarCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarCountOutputType
     */
    select?: CalendarCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CalendarCountOutputType without action
   */
  export type CalendarCountOutputTypeCountDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: dataWhereInput
  }


  /**
   * Count Type LocationCountOutputType
   */

  export type LocationCountOutputType = {
    data: number
  }

  export type LocationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    data?: boolean | LocationCountOutputTypeCountDataArgs
  }

  // Custom InputTypes
  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationCountOutputType
     */
    select?: LocationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeCountDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: dataWhereInput
  }


  /**
   * Count Type PandemieCountOutputType
   */

  export type PandemieCountOutputType = {
    data: number
  }

  export type PandemieCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    data?: boolean | PandemieCountOutputTypeCountDataArgs
  }

  // Custom InputTypes
  /**
   * PandemieCountOutputType without action
   */
  export type PandemieCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PandemieCountOutputType
     */
    select?: PandemieCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PandemieCountOutputType without action
   */
  export type PandemieCountOutputTypeCountDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: dataWhereInput
  }


  /**
   * Models
   */

  /**
   * Model calendar
   */

  export type AggregateCalendar = {
    _count: CalendarCountAggregateOutputType | null
    _avg: CalendarAvgAggregateOutputType | null
    _sum: CalendarSumAggregateOutputType | null
    _min: CalendarMinAggregateOutputType | null
    _max: CalendarMaxAggregateOutputType | null
  }

  export type CalendarAvgAggregateOutputType = {
    id: number | null
  }

  export type CalendarSumAggregateOutputType = {
    id: number | null
  }

  export type CalendarMinAggregateOutputType = {
    id: number | null
    date_value: Date | null
  }

  export type CalendarMaxAggregateOutputType = {
    id: number | null
    date_value: Date | null
  }

  export type CalendarCountAggregateOutputType = {
    id: number
    date_value: number
    _all: number
  }


  export type CalendarAvgAggregateInputType = {
    id?: true
  }

  export type CalendarSumAggregateInputType = {
    id?: true
  }

  export type CalendarMinAggregateInputType = {
    id?: true
    date_value?: true
  }

  export type CalendarMaxAggregateInputType = {
    id?: true
    date_value?: true
  }

  export type CalendarCountAggregateInputType = {
    id?: true
    date_value?: true
    _all?: true
  }

  export type CalendarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which calendar to aggregate.
     */
    where?: calendarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of calendars to fetch.
     */
    orderBy?: calendarOrderByWithRelationInput | calendarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: calendarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` calendars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` calendars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned calendars
    **/
    _count?: true | CalendarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CalendarAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CalendarSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CalendarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CalendarMaxAggregateInputType
  }

  export type GetCalendarAggregateType<T extends CalendarAggregateArgs> = {
        [P in keyof T & keyof AggregateCalendar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCalendar[P]>
      : GetScalarType<T[P], AggregateCalendar[P]>
  }




  export type calendarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: calendarWhereInput
    orderBy?: calendarOrderByWithAggregationInput | calendarOrderByWithAggregationInput[]
    by: CalendarScalarFieldEnum[] | CalendarScalarFieldEnum
    having?: calendarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CalendarCountAggregateInputType | true
    _avg?: CalendarAvgAggregateInputType
    _sum?: CalendarSumAggregateInputType
    _min?: CalendarMinAggregateInputType
    _max?: CalendarMaxAggregateInputType
  }

  export type CalendarGroupByOutputType = {
    id: number
    date_value: Date
    _count: CalendarCountAggregateOutputType | null
    _avg: CalendarAvgAggregateOutputType | null
    _sum: CalendarSumAggregateOutputType | null
    _min: CalendarMinAggregateOutputType | null
    _max: CalendarMaxAggregateOutputType | null
  }

  type GetCalendarGroupByPayload<T extends calendarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CalendarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CalendarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CalendarGroupByOutputType[P]>
            : GetScalarType<T[P], CalendarGroupByOutputType[P]>
        }
      >
    >


  export type calendarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date_value?: boolean
    data?: boolean | calendar$dataArgs<ExtArgs>
    _count?: boolean | CalendarCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["calendar"]>



  export type calendarSelectScalar = {
    id?: boolean
    date_value?: boolean
  }

  export type calendarOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date_value", ExtArgs["result"]["calendar"]>
  export type calendarInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    data?: boolean | calendar$dataArgs<ExtArgs>
    _count?: boolean | CalendarCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $calendarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "calendar"
    objects: {
      data: Prisma.$dataPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date_value: Date
    }, ExtArgs["result"]["calendar"]>
    composites: {}
  }

  type calendarGetPayload<S extends boolean | null | undefined | calendarDefaultArgs> = $Result.GetResult<Prisma.$calendarPayload, S>

  type calendarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<calendarFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CalendarCountAggregateInputType | true
    }

  export interface calendarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['calendar'], meta: { name: 'calendar' } }
    /**
     * Find zero or one Calendar that matches the filter.
     * @param {calendarFindUniqueArgs} args - Arguments to find a Calendar
     * @example
     * // Get one Calendar
     * const calendar = await prisma.calendar.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends calendarFindUniqueArgs>(args: SelectSubset<T, calendarFindUniqueArgs<ExtArgs>>): Prisma__calendarClient<$Result.GetResult<Prisma.$calendarPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Calendar that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {calendarFindUniqueOrThrowArgs} args - Arguments to find a Calendar
     * @example
     * // Get one Calendar
     * const calendar = await prisma.calendar.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends calendarFindUniqueOrThrowArgs>(args: SelectSubset<T, calendarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__calendarClient<$Result.GetResult<Prisma.$calendarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Calendar that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {calendarFindFirstArgs} args - Arguments to find a Calendar
     * @example
     * // Get one Calendar
     * const calendar = await prisma.calendar.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends calendarFindFirstArgs>(args?: SelectSubset<T, calendarFindFirstArgs<ExtArgs>>): Prisma__calendarClient<$Result.GetResult<Prisma.$calendarPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Calendar that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {calendarFindFirstOrThrowArgs} args - Arguments to find a Calendar
     * @example
     * // Get one Calendar
     * const calendar = await prisma.calendar.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends calendarFindFirstOrThrowArgs>(args?: SelectSubset<T, calendarFindFirstOrThrowArgs<ExtArgs>>): Prisma__calendarClient<$Result.GetResult<Prisma.$calendarPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Calendars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {calendarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Calendars
     * const calendars = await prisma.calendar.findMany()
     * 
     * // Get first 10 Calendars
     * const calendars = await prisma.calendar.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const calendarWithIdOnly = await prisma.calendar.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends calendarFindManyArgs>(args?: SelectSubset<T, calendarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$calendarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Calendar.
     * @param {calendarCreateArgs} args - Arguments to create a Calendar.
     * @example
     * // Create one Calendar
     * const Calendar = await prisma.calendar.create({
     *   data: {
     *     // ... data to create a Calendar
     *   }
     * })
     * 
     */
    create<T extends calendarCreateArgs>(args: SelectSubset<T, calendarCreateArgs<ExtArgs>>): Prisma__calendarClient<$Result.GetResult<Prisma.$calendarPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Calendars.
     * @param {calendarCreateManyArgs} args - Arguments to create many Calendars.
     * @example
     * // Create many Calendars
     * const calendar = await prisma.calendar.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends calendarCreateManyArgs>(args?: SelectSubset<T, calendarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Calendar.
     * @param {calendarDeleteArgs} args - Arguments to delete one Calendar.
     * @example
     * // Delete one Calendar
     * const Calendar = await prisma.calendar.delete({
     *   where: {
     *     // ... filter to delete one Calendar
     *   }
     * })
     * 
     */
    delete<T extends calendarDeleteArgs>(args: SelectSubset<T, calendarDeleteArgs<ExtArgs>>): Prisma__calendarClient<$Result.GetResult<Prisma.$calendarPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Calendar.
     * @param {calendarUpdateArgs} args - Arguments to update one Calendar.
     * @example
     * // Update one Calendar
     * const calendar = await prisma.calendar.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends calendarUpdateArgs>(args: SelectSubset<T, calendarUpdateArgs<ExtArgs>>): Prisma__calendarClient<$Result.GetResult<Prisma.$calendarPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Calendars.
     * @param {calendarDeleteManyArgs} args - Arguments to filter Calendars to delete.
     * @example
     * // Delete a few Calendars
     * const { count } = await prisma.calendar.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends calendarDeleteManyArgs>(args?: SelectSubset<T, calendarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Calendars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {calendarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Calendars
     * const calendar = await prisma.calendar.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends calendarUpdateManyArgs>(args: SelectSubset<T, calendarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Calendar.
     * @param {calendarUpsertArgs} args - Arguments to update or create a Calendar.
     * @example
     * // Update or create a Calendar
     * const calendar = await prisma.calendar.upsert({
     *   create: {
     *     // ... data to create a Calendar
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Calendar we want to update
     *   }
     * })
     */
    upsert<T extends calendarUpsertArgs>(args: SelectSubset<T, calendarUpsertArgs<ExtArgs>>): Prisma__calendarClient<$Result.GetResult<Prisma.$calendarPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Calendars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {calendarCountArgs} args - Arguments to filter Calendars to count.
     * @example
     * // Count the number of Calendars
     * const count = await prisma.calendar.count({
     *   where: {
     *     // ... the filter for the Calendars we want to count
     *   }
     * })
    **/
    count<T extends calendarCountArgs>(
      args?: Subset<T, calendarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CalendarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Calendar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CalendarAggregateArgs>(args: Subset<T, CalendarAggregateArgs>): Prisma.PrismaPromise<GetCalendarAggregateType<T>>

    /**
     * Group by Calendar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {calendarGroupByArgs} args - Group by arguments.
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
      T extends calendarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: calendarGroupByArgs['orderBy'] }
        : { orderBy?: calendarGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, calendarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCalendarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the calendar model
   */
  readonly fields: calendarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for calendar.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__calendarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    data<T extends calendar$dataArgs<ExtArgs> = {}>(args?: Subset<T, calendar$dataArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the calendar model
   */
  interface calendarFieldRefs {
    readonly id: FieldRef<"calendar", 'Int'>
    readonly date_value: FieldRef<"calendar", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * calendar findUnique
   */
  export type calendarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calendar
     */
    select?: calendarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the calendar
     */
    omit?: calendarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: calendarInclude<ExtArgs> | null
    /**
     * Filter, which calendar to fetch.
     */
    where: calendarWhereUniqueInput
  }

  /**
   * calendar findUniqueOrThrow
   */
  export type calendarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calendar
     */
    select?: calendarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the calendar
     */
    omit?: calendarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: calendarInclude<ExtArgs> | null
    /**
     * Filter, which calendar to fetch.
     */
    where: calendarWhereUniqueInput
  }

  /**
   * calendar findFirst
   */
  export type calendarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calendar
     */
    select?: calendarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the calendar
     */
    omit?: calendarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: calendarInclude<ExtArgs> | null
    /**
     * Filter, which calendar to fetch.
     */
    where?: calendarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of calendars to fetch.
     */
    orderBy?: calendarOrderByWithRelationInput | calendarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for calendars.
     */
    cursor?: calendarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` calendars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` calendars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of calendars.
     */
    distinct?: CalendarScalarFieldEnum | CalendarScalarFieldEnum[]
  }

  /**
   * calendar findFirstOrThrow
   */
  export type calendarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calendar
     */
    select?: calendarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the calendar
     */
    omit?: calendarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: calendarInclude<ExtArgs> | null
    /**
     * Filter, which calendar to fetch.
     */
    where?: calendarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of calendars to fetch.
     */
    orderBy?: calendarOrderByWithRelationInput | calendarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for calendars.
     */
    cursor?: calendarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` calendars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` calendars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of calendars.
     */
    distinct?: CalendarScalarFieldEnum | CalendarScalarFieldEnum[]
  }

  /**
   * calendar findMany
   */
  export type calendarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calendar
     */
    select?: calendarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the calendar
     */
    omit?: calendarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: calendarInclude<ExtArgs> | null
    /**
     * Filter, which calendars to fetch.
     */
    where?: calendarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of calendars to fetch.
     */
    orderBy?: calendarOrderByWithRelationInput | calendarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing calendars.
     */
    cursor?: calendarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` calendars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` calendars.
     */
    skip?: number
    distinct?: CalendarScalarFieldEnum | CalendarScalarFieldEnum[]
  }

  /**
   * calendar create
   */
  export type calendarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calendar
     */
    select?: calendarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the calendar
     */
    omit?: calendarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: calendarInclude<ExtArgs> | null
    /**
     * The data needed to create a calendar.
     */
    data: XOR<calendarCreateInput, calendarUncheckedCreateInput>
  }

  /**
   * calendar createMany
   */
  export type calendarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many calendars.
     */
    data: calendarCreateManyInput | calendarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * calendar update
   */
  export type calendarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calendar
     */
    select?: calendarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the calendar
     */
    omit?: calendarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: calendarInclude<ExtArgs> | null
    /**
     * The data needed to update a calendar.
     */
    data: XOR<calendarUpdateInput, calendarUncheckedUpdateInput>
    /**
     * Choose, which calendar to update.
     */
    where: calendarWhereUniqueInput
  }

  /**
   * calendar updateMany
   */
  export type calendarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update calendars.
     */
    data: XOR<calendarUpdateManyMutationInput, calendarUncheckedUpdateManyInput>
    /**
     * Filter which calendars to update
     */
    where?: calendarWhereInput
    /**
     * Limit how many calendars to update.
     */
    limit?: number
  }

  /**
   * calendar upsert
   */
  export type calendarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calendar
     */
    select?: calendarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the calendar
     */
    omit?: calendarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: calendarInclude<ExtArgs> | null
    /**
     * The filter to search for the calendar to update in case it exists.
     */
    where: calendarWhereUniqueInput
    /**
     * In case the calendar found by the `where` argument doesn't exist, create a new calendar with this data.
     */
    create: XOR<calendarCreateInput, calendarUncheckedCreateInput>
    /**
     * In case the calendar was found with the provided `where` argument, update it with this data.
     */
    update: XOR<calendarUpdateInput, calendarUncheckedUpdateInput>
  }

  /**
   * calendar delete
   */
  export type calendarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calendar
     */
    select?: calendarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the calendar
     */
    omit?: calendarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: calendarInclude<ExtArgs> | null
    /**
     * Filter which calendar to delete.
     */
    where: calendarWhereUniqueInput
  }

  /**
   * calendar deleteMany
   */
  export type calendarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which calendars to delete
     */
    where?: calendarWhereInput
    /**
     * Limit how many calendars to delete.
     */
    limit?: number
  }

  /**
   * calendar.data
   */
  export type calendar$dataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data
     */
    select?: dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the data
     */
    omit?: dataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dataInclude<ExtArgs> | null
    where?: dataWhereInput
    orderBy?: dataOrderByWithRelationInput | dataOrderByWithRelationInput[]
    cursor?: dataWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DataScalarFieldEnum | DataScalarFieldEnum[]
  }

  /**
   * calendar without action
   */
  export type calendarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calendar
     */
    select?: calendarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the calendar
     */
    omit?: calendarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: calendarInclude<ExtArgs> | null
  }


  /**
   * Model data
   */

  export type AggregateData = {
    _count: DataCountAggregateOutputType | null
    _avg: DataAvgAggregateOutputType | null
    _sum: DataSumAggregateOutputType | null
    _min: DataMinAggregateOutputType | null
    _max: DataMaxAggregateOutputType | null
  }

  export type DataAvgAggregateOutputType = {
    id: number | null
    total_cases: number | null
    total_deaths: number | null
    new_cases: number | null
    new_deaths: number | null
    id_location: number | null
    id_pandemie: number | null
    id_calendar: number | null
  }

  export type DataSumAggregateOutputType = {
    id: number | null
    total_cases: number | null
    total_deaths: number | null
    new_cases: number | null
    new_deaths: number | null
    id_location: number | null
    id_pandemie: number | null
    id_calendar: number | null
  }

  export type DataMinAggregateOutputType = {
    id: number | null
    total_cases: number | null
    total_deaths: number | null
    new_cases: number | null
    new_deaths: number | null
    id_location: number | null
    id_pandemie: number | null
    id_calendar: number | null
  }

  export type DataMaxAggregateOutputType = {
    id: number | null
    total_cases: number | null
    total_deaths: number | null
    new_cases: number | null
    new_deaths: number | null
    id_location: number | null
    id_pandemie: number | null
    id_calendar: number | null
  }

  export type DataCountAggregateOutputType = {
    id: number
    total_cases: number
    total_deaths: number
    new_cases: number
    new_deaths: number
    id_location: number
    id_pandemie: number
    id_calendar: number
    _all: number
  }


  export type DataAvgAggregateInputType = {
    id?: true
    total_cases?: true
    total_deaths?: true
    new_cases?: true
    new_deaths?: true
    id_location?: true
    id_pandemie?: true
    id_calendar?: true
  }

  export type DataSumAggregateInputType = {
    id?: true
    total_cases?: true
    total_deaths?: true
    new_cases?: true
    new_deaths?: true
    id_location?: true
    id_pandemie?: true
    id_calendar?: true
  }

  export type DataMinAggregateInputType = {
    id?: true
    total_cases?: true
    total_deaths?: true
    new_cases?: true
    new_deaths?: true
    id_location?: true
    id_pandemie?: true
    id_calendar?: true
  }

  export type DataMaxAggregateInputType = {
    id?: true
    total_cases?: true
    total_deaths?: true
    new_cases?: true
    new_deaths?: true
    id_location?: true
    id_pandemie?: true
    id_calendar?: true
  }

  export type DataCountAggregateInputType = {
    id?: true
    total_cases?: true
    total_deaths?: true
    new_cases?: true
    new_deaths?: true
    id_location?: true
    id_pandemie?: true
    id_calendar?: true
    _all?: true
  }

  export type DataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which data to aggregate.
     */
    where?: dataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of data to fetch.
     */
    orderBy?: dataOrderByWithRelationInput | dataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: dataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` data from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` data.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned data
    **/
    _count?: true | DataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DataMaxAggregateInputType
  }

  export type GetDataAggregateType<T extends DataAggregateArgs> = {
        [P in keyof T & keyof AggregateData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateData[P]>
      : GetScalarType<T[P], AggregateData[P]>
  }




  export type dataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: dataWhereInput
    orderBy?: dataOrderByWithAggregationInput | dataOrderByWithAggregationInput[]
    by: DataScalarFieldEnum[] | DataScalarFieldEnum
    having?: dataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DataCountAggregateInputType | true
    _avg?: DataAvgAggregateInputType
    _sum?: DataSumAggregateInputType
    _min?: DataMinAggregateInputType
    _max?: DataMaxAggregateInputType
  }

  export type DataGroupByOutputType = {
    id: number
    total_cases: number
    total_deaths: number
    new_cases: number
    new_deaths: number
    id_location: number
    id_pandemie: number
    id_calendar: number
    _count: DataCountAggregateOutputType | null
    _avg: DataAvgAggregateOutputType | null
    _sum: DataSumAggregateOutputType | null
    _min: DataMinAggregateOutputType | null
    _max: DataMaxAggregateOutputType | null
  }

  type GetDataGroupByPayload<T extends dataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DataGroupByOutputType[P]>
            : GetScalarType<T[P], DataGroupByOutputType[P]>
        }
      >
    >


  export type dataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    total_cases?: boolean
    total_deaths?: boolean
    new_cases?: boolean
    new_deaths?: boolean
    id_location?: boolean
    id_pandemie?: boolean
    id_calendar?: boolean
    calendar?: boolean | calendarDefaultArgs<ExtArgs>
    location?: boolean | locationDefaultArgs<ExtArgs>
    pandemie?: boolean | pandemieDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["data"]>



  export type dataSelectScalar = {
    id?: boolean
    total_cases?: boolean
    total_deaths?: boolean
    new_cases?: boolean
    new_deaths?: boolean
    id_location?: boolean
    id_pandemie?: boolean
    id_calendar?: boolean
  }

  export type dataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "total_cases" | "total_deaths" | "new_cases" | "new_deaths" | "id_location" | "id_pandemie" | "id_calendar", ExtArgs["result"]["data"]>
  export type dataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    calendar?: boolean | calendarDefaultArgs<ExtArgs>
    location?: boolean | locationDefaultArgs<ExtArgs>
    pandemie?: boolean | pandemieDefaultArgs<ExtArgs>
  }

  export type $dataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "data"
    objects: {
      calendar: Prisma.$calendarPayload<ExtArgs>
      location: Prisma.$locationPayload<ExtArgs>
      pandemie: Prisma.$pandemiePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      total_cases: number
      total_deaths: number
      new_cases: number
      new_deaths: number
      id_location: number
      id_pandemie: number
      id_calendar: number
    }, ExtArgs["result"]["data"]>
    composites: {}
  }

  type dataGetPayload<S extends boolean | null | undefined | dataDefaultArgs> = $Result.GetResult<Prisma.$dataPayload, S>

  type dataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<dataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DataCountAggregateInputType | true
    }

  export interface dataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['data'], meta: { name: 'data' } }
    /**
     * Find zero or one Data that matches the filter.
     * @param {dataFindUniqueArgs} args - Arguments to find a Data
     * @example
     * // Get one Data
     * const data = await prisma.data.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends dataFindUniqueArgs>(args: SelectSubset<T, dataFindUniqueArgs<ExtArgs>>): Prisma__dataClient<$Result.GetResult<Prisma.$dataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Data that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {dataFindUniqueOrThrowArgs} args - Arguments to find a Data
     * @example
     * // Get one Data
     * const data = await prisma.data.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends dataFindUniqueOrThrowArgs>(args: SelectSubset<T, dataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__dataClient<$Result.GetResult<Prisma.$dataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Data that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dataFindFirstArgs} args - Arguments to find a Data
     * @example
     * // Get one Data
     * const data = await prisma.data.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends dataFindFirstArgs>(args?: SelectSubset<T, dataFindFirstArgs<ExtArgs>>): Prisma__dataClient<$Result.GetResult<Prisma.$dataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Data that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dataFindFirstOrThrowArgs} args - Arguments to find a Data
     * @example
     * // Get one Data
     * const data = await prisma.data.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends dataFindFirstOrThrowArgs>(args?: SelectSubset<T, dataFindFirstOrThrowArgs<ExtArgs>>): Prisma__dataClient<$Result.GetResult<Prisma.$dataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Data that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Data
     * const data = await prisma.data.findMany()
     * 
     * // Get first 10 Data
     * const data = await prisma.data.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dataWithIdOnly = await prisma.data.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends dataFindManyArgs>(args?: SelectSubset<T, dataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Data.
     * @param {dataCreateArgs} args - Arguments to create a Data.
     * @example
     * // Create one Data
     * const Data = await prisma.data.create({
     *   data: {
     *     // ... data to create a Data
     *   }
     * })
     * 
     */
    create<T extends dataCreateArgs>(args: SelectSubset<T, dataCreateArgs<ExtArgs>>): Prisma__dataClient<$Result.GetResult<Prisma.$dataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Data.
     * @param {dataCreateManyArgs} args - Arguments to create many Data.
     * @example
     * // Create many Data
     * const data = await prisma.data.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends dataCreateManyArgs>(args?: SelectSubset<T, dataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Data.
     * @param {dataDeleteArgs} args - Arguments to delete one Data.
     * @example
     * // Delete one Data
     * const Data = await prisma.data.delete({
     *   where: {
     *     // ... filter to delete one Data
     *   }
     * })
     * 
     */
    delete<T extends dataDeleteArgs>(args: SelectSubset<T, dataDeleteArgs<ExtArgs>>): Prisma__dataClient<$Result.GetResult<Prisma.$dataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Data.
     * @param {dataUpdateArgs} args - Arguments to update one Data.
     * @example
     * // Update one Data
     * const data = await prisma.data.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends dataUpdateArgs>(args: SelectSubset<T, dataUpdateArgs<ExtArgs>>): Prisma__dataClient<$Result.GetResult<Prisma.$dataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Data.
     * @param {dataDeleteManyArgs} args - Arguments to filter Data to delete.
     * @example
     * // Delete a few Data
     * const { count } = await prisma.data.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends dataDeleteManyArgs>(args?: SelectSubset<T, dataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Data
     * const data = await prisma.data.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends dataUpdateManyArgs>(args: SelectSubset<T, dataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Data.
     * @param {dataUpsertArgs} args - Arguments to update or create a Data.
     * @example
     * // Update or create a Data
     * const data = await prisma.data.upsert({
     *   create: {
     *     // ... data to create a Data
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Data we want to update
     *   }
     * })
     */
    upsert<T extends dataUpsertArgs>(args: SelectSubset<T, dataUpsertArgs<ExtArgs>>): Prisma__dataClient<$Result.GetResult<Prisma.$dataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dataCountArgs} args - Arguments to filter Data to count.
     * @example
     * // Count the number of Data
     * const count = await prisma.data.count({
     *   where: {
     *     // ... the filter for the Data we want to count
     *   }
     * })
    **/
    count<T extends dataCountArgs>(
      args?: Subset<T, dataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DataAggregateArgs>(args: Subset<T, DataAggregateArgs>): Prisma.PrismaPromise<GetDataAggregateType<T>>

    /**
     * Group by Data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dataGroupByArgs} args - Group by arguments.
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
      T extends dataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: dataGroupByArgs['orderBy'] }
        : { orderBy?: dataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, dataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the data model
   */
  readonly fields: dataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for data.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__dataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    calendar<T extends calendarDefaultArgs<ExtArgs> = {}>(args?: Subset<T, calendarDefaultArgs<ExtArgs>>): Prisma__calendarClient<$Result.GetResult<Prisma.$calendarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    location<T extends locationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, locationDefaultArgs<ExtArgs>>): Prisma__locationClient<$Result.GetResult<Prisma.$locationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pandemie<T extends pandemieDefaultArgs<ExtArgs> = {}>(args?: Subset<T, pandemieDefaultArgs<ExtArgs>>): Prisma__pandemieClient<$Result.GetResult<Prisma.$pandemiePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the data model
   */
  interface dataFieldRefs {
    readonly id: FieldRef<"data", 'Int'>
    readonly total_cases: FieldRef<"data", 'Int'>
    readonly total_deaths: FieldRef<"data", 'Int'>
    readonly new_cases: FieldRef<"data", 'Int'>
    readonly new_deaths: FieldRef<"data", 'Int'>
    readonly id_location: FieldRef<"data", 'Int'>
    readonly id_pandemie: FieldRef<"data", 'Int'>
    readonly id_calendar: FieldRef<"data", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * data findUnique
   */
  export type dataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data
     */
    select?: dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the data
     */
    omit?: dataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dataInclude<ExtArgs> | null
    /**
     * Filter, which data to fetch.
     */
    where: dataWhereUniqueInput
  }

  /**
   * data findUniqueOrThrow
   */
  export type dataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data
     */
    select?: dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the data
     */
    omit?: dataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dataInclude<ExtArgs> | null
    /**
     * Filter, which data to fetch.
     */
    where: dataWhereUniqueInput
  }

  /**
   * data findFirst
   */
  export type dataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data
     */
    select?: dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the data
     */
    omit?: dataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dataInclude<ExtArgs> | null
    /**
     * Filter, which data to fetch.
     */
    where?: dataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of data to fetch.
     */
    orderBy?: dataOrderByWithRelationInput | dataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for data.
     */
    cursor?: dataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` data from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` data.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of data.
     */
    distinct?: DataScalarFieldEnum | DataScalarFieldEnum[]
  }

  /**
   * data findFirstOrThrow
   */
  export type dataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data
     */
    select?: dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the data
     */
    omit?: dataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dataInclude<ExtArgs> | null
    /**
     * Filter, which data to fetch.
     */
    where?: dataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of data to fetch.
     */
    orderBy?: dataOrderByWithRelationInput | dataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for data.
     */
    cursor?: dataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` data from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` data.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of data.
     */
    distinct?: DataScalarFieldEnum | DataScalarFieldEnum[]
  }

  /**
   * data findMany
   */
  export type dataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data
     */
    select?: dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the data
     */
    omit?: dataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dataInclude<ExtArgs> | null
    /**
     * Filter, which data to fetch.
     */
    where?: dataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of data to fetch.
     */
    orderBy?: dataOrderByWithRelationInput | dataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing data.
     */
    cursor?: dataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` data from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` data.
     */
    skip?: number
    distinct?: DataScalarFieldEnum | DataScalarFieldEnum[]
  }

  /**
   * data create
   */
  export type dataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data
     */
    select?: dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the data
     */
    omit?: dataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dataInclude<ExtArgs> | null
    /**
     * The data needed to create a data.
     */
    data: XOR<dataCreateInput, dataUncheckedCreateInput>
  }

  /**
   * data createMany
   */
  export type dataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many data.
     */
    data: dataCreateManyInput | dataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * data update
   */
  export type dataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data
     */
    select?: dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the data
     */
    omit?: dataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dataInclude<ExtArgs> | null
    /**
     * The data needed to update a data.
     */
    data: XOR<dataUpdateInput, dataUncheckedUpdateInput>
    /**
     * Choose, which data to update.
     */
    where: dataWhereUniqueInput
  }

  /**
   * data updateMany
   */
  export type dataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update data.
     */
    data: XOR<dataUpdateManyMutationInput, dataUncheckedUpdateManyInput>
    /**
     * Filter which data to update
     */
    where?: dataWhereInput
    /**
     * Limit how many data to update.
     */
    limit?: number
  }

  /**
   * data upsert
   */
  export type dataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data
     */
    select?: dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the data
     */
    omit?: dataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dataInclude<ExtArgs> | null
    /**
     * The filter to search for the data to update in case it exists.
     */
    where: dataWhereUniqueInput
    /**
     * In case the data found by the `where` argument doesn't exist, create a new data with this data.
     */
    create: XOR<dataCreateInput, dataUncheckedCreateInput>
    /**
     * In case the data was found with the provided `where` argument, update it with this data.
     */
    update: XOR<dataUpdateInput, dataUncheckedUpdateInput>
  }

  /**
   * data delete
   */
  export type dataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data
     */
    select?: dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the data
     */
    omit?: dataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dataInclude<ExtArgs> | null
    /**
     * Filter which data to delete.
     */
    where: dataWhereUniqueInput
  }

  /**
   * data deleteMany
   */
  export type dataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which data to delete
     */
    where?: dataWhereInput
    /**
     * Limit how many data to delete.
     */
    limit?: number
  }

  /**
   * data without action
   */
  export type dataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data
     */
    select?: dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the data
     */
    omit?: dataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dataInclude<ExtArgs> | null
  }


  /**
   * Model location
   */

  export type AggregateLocation = {
    _count: LocationCountAggregateOutputType | null
    _avg: LocationAvgAggregateOutputType | null
    _sum: LocationSumAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  export type LocationAvgAggregateOutputType = {
    id: number | null
    latitude: Decimal | null
    longitude: Decimal | null
  }

  export type LocationSumAggregateOutputType = {
    id: number | null
    latitude: Decimal | null
    longitude: Decimal | null
  }

  export type LocationMinAggregateOutputType = {
    id: number | null
    country: string | null
    continent: string | null
    latitude: Decimal | null
    longitude: Decimal | null
  }

  export type LocationMaxAggregateOutputType = {
    id: number | null
    country: string | null
    continent: string | null
    latitude: Decimal | null
    longitude: Decimal | null
  }

  export type LocationCountAggregateOutputType = {
    id: number
    country: number
    continent: number
    latitude: number
    longitude: number
    _all: number
  }


  export type LocationAvgAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
  }

  export type LocationSumAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
  }

  export type LocationMinAggregateInputType = {
    id?: true
    country?: true
    continent?: true
    latitude?: true
    longitude?: true
  }

  export type LocationMaxAggregateInputType = {
    id?: true
    country?: true
    continent?: true
    latitude?: true
    longitude?: true
  }

  export type LocationCountAggregateInputType = {
    id?: true
    country?: true
    continent?: true
    latitude?: true
    longitude?: true
    _all?: true
  }

  export type LocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which location to aggregate.
     */
    where?: locationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of locations to fetch.
     */
    orderBy?: locationOrderByWithRelationInput | locationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: locationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned locations
    **/
    _count?: true | LocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LocationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LocationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocationMaxAggregateInputType
  }

  export type GetLocationAggregateType<T extends LocationAggregateArgs> = {
        [P in keyof T & keyof AggregateLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocation[P]>
      : GetScalarType<T[P], AggregateLocation[P]>
  }




  export type locationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: locationWhereInput
    orderBy?: locationOrderByWithAggregationInput | locationOrderByWithAggregationInput[]
    by: LocationScalarFieldEnum[] | LocationScalarFieldEnum
    having?: locationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocationCountAggregateInputType | true
    _avg?: LocationAvgAggregateInputType
    _sum?: LocationSumAggregateInputType
    _min?: LocationMinAggregateInputType
    _max?: LocationMaxAggregateInputType
  }

  export type LocationGroupByOutputType = {
    id: number
    country: string
    continent: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    _count: LocationCountAggregateOutputType | null
    _avg: LocationAvgAggregateOutputType | null
    _sum: LocationSumAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  type GetLocationGroupByPayload<T extends locationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocationGroupByOutputType[P]>
            : GetScalarType<T[P], LocationGroupByOutputType[P]>
        }
      >
    >


  export type locationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    country?: boolean
    continent?: boolean
    latitude?: boolean
    longitude?: boolean
    data?: boolean | location$dataArgs<ExtArgs>
    _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["location"]>



  export type locationSelectScalar = {
    id?: boolean
    country?: boolean
    continent?: boolean
    latitude?: boolean
    longitude?: boolean
  }

  export type locationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "country" | "continent" | "latitude" | "longitude", ExtArgs["result"]["location"]>
  export type locationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    data?: boolean | location$dataArgs<ExtArgs>
    _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $locationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "location"
    objects: {
      data: Prisma.$dataPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      country: string
      continent: string | null
      latitude: Prisma.Decimal | null
      longitude: Prisma.Decimal | null
    }, ExtArgs["result"]["location"]>
    composites: {}
  }

  type locationGetPayload<S extends boolean | null | undefined | locationDefaultArgs> = $Result.GetResult<Prisma.$locationPayload, S>

  type locationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<locationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocationCountAggregateInputType | true
    }

  export interface locationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['location'], meta: { name: 'location' } }
    /**
     * Find zero or one Location that matches the filter.
     * @param {locationFindUniqueArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends locationFindUniqueArgs>(args: SelectSubset<T, locationFindUniqueArgs<ExtArgs>>): Prisma__locationClient<$Result.GetResult<Prisma.$locationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Location that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {locationFindUniqueOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends locationFindUniqueOrThrowArgs>(args: SelectSubset<T, locationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__locationClient<$Result.GetResult<Prisma.$locationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Location that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {locationFindFirstArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends locationFindFirstArgs>(args?: SelectSubset<T, locationFindFirstArgs<ExtArgs>>): Prisma__locationClient<$Result.GetResult<Prisma.$locationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Location that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {locationFindFirstOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends locationFindFirstOrThrowArgs>(args?: SelectSubset<T, locationFindFirstOrThrowArgs<ExtArgs>>): Prisma__locationClient<$Result.GetResult<Prisma.$locationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Locations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {locationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Locations
     * const locations = await prisma.location.findMany()
     * 
     * // Get first 10 Locations
     * const locations = await prisma.location.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const locationWithIdOnly = await prisma.location.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends locationFindManyArgs>(args?: SelectSubset<T, locationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$locationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Location.
     * @param {locationCreateArgs} args - Arguments to create a Location.
     * @example
     * // Create one Location
     * const Location = await prisma.location.create({
     *   data: {
     *     // ... data to create a Location
     *   }
     * })
     * 
     */
    create<T extends locationCreateArgs>(args: SelectSubset<T, locationCreateArgs<ExtArgs>>): Prisma__locationClient<$Result.GetResult<Prisma.$locationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Locations.
     * @param {locationCreateManyArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const location = await prisma.location.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends locationCreateManyArgs>(args?: SelectSubset<T, locationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Location.
     * @param {locationDeleteArgs} args - Arguments to delete one Location.
     * @example
     * // Delete one Location
     * const Location = await prisma.location.delete({
     *   where: {
     *     // ... filter to delete one Location
     *   }
     * })
     * 
     */
    delete<T extends locationDeleteArgs>(args: SelectSubset<T, locationDeleteArgs<ExtArgs>>): Prisma__locationClient<$Result.GetResult<Prisma.$locationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Location.
     * @param {locationUpdateArgs} args - Arguments to update one Location.
     * @example
     * // Update one Location
     * const location = await prisma.location.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends locationUpdateArgs>(args: SelectSubset<T, locationUpdateArgs<ExtArgs>>): Prisma__locationClient<$Result.GetResult<Prisma.$locationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Locations.
     * @param {locationDeleteManyArgs} args - Arguments to filter Locations to delete.
     * @example
     * // Delete a few Locations
     * const { count } = await prisma.location.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends locationDeleteManyArgs>(args?: SelectSubset<T, locationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {locationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends locationUpdateManyArgs>(args: SelectSubset<T, locationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Location.
     * @param {locationUpsertArgs} args - Arguments to update or create a Location.
     * @example
     * // Update or create a Location
     * const location = await prisma.location.upsert({
     *   create: {
     *     // ... data to create a Location
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Location we want to update
     *   }
     * })
     */
    upsert<T extends locationUpsertArgs>(args: SelectSubset<T, locationUpsertArgs<ExtArgs>>): Prisma__locationClient<$Result.GetResult<Prisma.$locationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {locationCountArgs} args - Arguments to filter Locations to count.
     * @example
     * // Count the number of Locations
     * const count = await prisma.location.count({
     *   where: {
     *     // ... the filter for the Locations we want to count
     *   }
     * })
    **/
    count<T extends locationCountArgs>(
      args?: Subset<T, locationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LocationAggregateArgs>(args: Subset<T, LocationAggregateArgs>): Prisma.PrismaPromise<GetLocationAggregateType<T>>

    /**
     * Group by Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {locationGroupByArgs} args - Group by arguments.
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
      T extends locationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: locationGroupByArgs['orderBy'] }
        : { orderBy?: locationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, locationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the location model
   */
  readonly fields: locationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for location.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__locationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    data<T extends location$dataArgs<ExtArgs> = {}>(args?: Subset<T, location$dataArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the location model
   */
  interface locationFieldRefs {
    readonly id: FieldRef<"location", 'Int'>
    readonly country: FieldRef<"location", 'String'>
    readonly continent: FieldRef<"location", 'String'>
    readonly latitude: FieldRef<"location", 'Decimal'>
    readonly longitude: FieldRef<"location", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * location findUnique
   */
  export type locationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the location
     */
    select?: locationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the location
     */
    omit?: locationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: locationInclude<ExtArgs> | null
    /**
     * Filter, which location to fetch.
     */
    where: locationWhereUniqueInput
  }

  /**
   * location findUniqueOrThrow
   */
  export type locationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the location
     */
    select?: locationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the location
     */
    omit?: locationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: locationInclude<ExtArgs> | null
    /**
     * Filter, which location to fetch.
     */
    where: locationWhereUniqueInput
  }

  /**
   * location findFirst
   */
  export type locationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the location
     */
    select?: locationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the location
     */
    omit?: locationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: locationInclude<ExtArgs> | null
    /**
     * Filter, which location to fetch.
     */
    where?: locationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of locations to fetch.
     */
    orderBy?: locationOrderByWithRelationInput | locationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for locations.
     */
    cursor?: locationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * location findFirstOrThrow
   */
  export type locationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the location
     */
    select?: locationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the location
     */
    omit?: locationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: locationInclude<ExtArgs> | null
    /**
     * Filter, which location to fetch.
     */
    where?: locationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of locations to fetch.
     */
    orderBy?: locationOrderByWithRelationInput | locationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for locations.
     */
    cursor?: locationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * location findMany
   */
  export type locationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the location
     */
    select?: locationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the location
     */
    omit?: locationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: locationInclude<ExtArgs> | null
    /**
     * Filter, which locations to fetch.
     */
    where?: locationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of locations to fetch.
     */
    orderBy?: locationOrderByWithRelationInput | locationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing locations.
     */
    cursor?: locationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` locations.
     */
    skip?: number
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * location create
   */
  export type locationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the location
     */
    select?: locationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the location
     */
    omit?: locationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: locationInclude<ExtArgs> | null
    /**
     * The data needed to create a location.
     */
    data: XOR<locationCreateInput, locationUncheckedCreateInput>
  }

  /**
   * location createMany
   */
  export type locationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many locations.
     */
    data: locationCreateManyInput | locationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * location update
   */
  export type locationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the location
     */
    select?: locationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the location
     */
    omit?: locationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: locationInclude<ExtArgs> | null
    /**
     * The data needed to update a location.
     */
    data: XOR<locationUpdateInput, locationUncheckedUpdateInput>
    /**
     * Choose, which location to update.
     */
    where: locationWhereUniqueInput
  }

  /**
   * location updateMany
   */
  export type locationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update locations.
     */
    data: XOR<locationUpdateManyMutationInput, locationUncheckedUpdateManyInput>
    /**
     * Filter which locations to update
     */
    where?: locationWhereInput
    /**
     * Limit how many locations to update.
     */
    limit?: number
  }

  /**
   * location upsert
   */
  export type locationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the location
     */
    select?: locationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the location
     */
    omit?: locationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: locationInclude<ExtArgs> | null
    /**
     * The filter to search for the location to update in case it exists.
     */
    where: locationWhereUniqueInput
    /**
     * In case the location found by the `where` argument doesn't exist, create a new location with this data.
     */
    create: XOR<locationCreateInput, locationUncheckedCreateInput>
    /**
     * In case the location was found with the provided `where` argument, update it with this data.
     */
    update: XOR<locationUpdateInput, locationUncheckedUpdateInput>
  }

  /**
   * location delete
   */
  export type locationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the location
     */
    select?: locationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the location
     */
    omit?: locationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: locationInclude<ExtArgs> | null
    /**
     * Filter which location to delete.
     */
    where: locationWhereUniqueInput
  }

  /**
   * location deleteMany
   */
  export type locationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which locations to delete
     */
    where?: locationWhereInput
    /**
     * Limit how many locations to delete.
     */
    limit?: number
  }

  /**
   * location.data
   */
  export type location$dataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data
     */
    select?: dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the data
     */
    omit?: dataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dataInclude<ExtArgs> | null
    where?: dataWhereInput
    orderBy?: dataOrderByWithRelationInput | dataOrderByWithRelationInput[]
    cursor?: dataWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DataScalarFieldEnum | DataScalarFieldEnum[]
  }

  /**
   * location without action
   */
  export type locationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the location
     */
    select?: locationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the location
     */
    omit?: locationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: locationInclude<ExtArgs> | null
  }


  /**
   * Model pandemie
   */

  export type AggregatePandemie = {
    _count: PandemieCountAggregateOutputType | null
    _avg: PandemieAvgAggregateOutputType | null
    _sum: PandemieSumAggregateOutputType | null
    _min: PandemieMinAggregateOutputType | null
    _max: PandemieMaxAggregateOutputType | null
  }

  export type PandemieAvgAggregateOutputType = {
    id: number | null
  }

  export type PandemieSumAggregateOutputType = {
    id: number | null
  }

  export type PandemieMinAggregateOutputType = {
    id: number | null
    type: string | null
  }

  export type PandemieMaxAggregateOutputType = {
    id: number | null
    type: string | null
  }

  export type PandemieCountAggregateOutputType = {
    id: number
    type: number
    _all: number
  }


  export type PandemieAvgAggregateInputType = {
    id?: true
  }

  export type PandemieSumAggregateInputType = {
    id?: true
  }

  export type PandemieMinAggregateInputType = {
    id?: true
    type?: true
  }

  export type PandemieMaxAggregateInputType = {
    id?: true
    type?: true
  }

  export type PandemieCountAggregateInputType = {
    id?: true
    type?: true
    _all?: true
  }

  export type PandemieAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pandemie to aggregate.
     */
    where?: pandemieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pandemies to fetch.
     */
    orderBy?: pandemieOrderByWithRelationInput | pandemieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pandemieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pandemies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pandemies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pandemies
    **/
    _count?: true | PandemieCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PandemieAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PandemieSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PandemieMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PandemieMaxAggregateInputType
  }

  export type GetPandemieAggregateType<T extends PandemieAggregateArgs> = {
        [P in keyof T & keyof AggregatePandemie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePandemie[P]>
      : GetScalarType<T[P], AggregatePandemie[P]>
  }




  export type pandemieGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pandemieWhereInput
    orderBy?: pandemieOrderByWithAggregationInput | pandemieOrderByWithAggregationInput[]
    by: PandemieScalarFieldEnum[] | PandemieScalarFieldEnum
    having?: pandemieScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PandemieCountAggregateInputType | true
    _avg?: PandemieAvgAggregateInputType
    _sum?: PandemieSumAggregateInputType
    _min?: PandemieMinAggregateInputType
    _max?: PandemieMaxAggregateInputType
  }

  export type PandemieGroupByOutputType = {
    id: number
    type: string | null
    _count: PandemieCountAggregateOutputType | null
    _avg: PandemieAvgAggregateOutputType | null
    _sum: PandemieSumAggregateOutputType | null
    _min: PandemieMinAggregateOutputType | null
    _max: PandemieMaxAggregateOutputType | null
  }

  type GetPandemieGroupByPayload<T extends pandemieGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PandemieGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PandemieGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PandemieGroupByOutputType[P]>
            : GetScalarType<T[P], PandemieGroupByOutputType[P]>
        }
      >
    >


  export type pandemieSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    data?: boolean | pandemie$dataArgs<ExtArgs>
    _count?: boolean | PandemieCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pandemie"]>



  export type pandemieSelectScalar = {
    id?: boolean
    type?: boolean
  }

  export type pandemieOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type", ExtArgs["result"]["pandemie"]>
  export type pandemieInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    data?: boolean | pandemie$dataArgs<ExtArgs>
    _count?: boolean | PandemieCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $pandemiePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pandemie"
    objects: {
      data: Prisma.$dataPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: string | null
    }, ExtArgs["result"]["pandemie"]>
    composites: {}
  }

  type pandemieGetPayload<S extends boolean | null | undefined | pandemieDefaultArgs> = $Result.GetResult<Prisma.$pandemiePayload, S>

  type pandemieCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<pandemieFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PandemieCountAggregateInputType | true
    }

  export interface pandemieDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pandemie'], meta: { name: 'pandemie' } }
    /**
     * Find zero or one Pandemie that matches the filter.
     * @param {pandemieFindUniqueArgs} args - Arguments to find a Pandemie
     * @example
     * // Get one Pandemie
     * const pandemie = await prisma.pandemie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pandemieFindUniqueArgs>(args: SelectSubset<T, pandemieFindUniqueArgs<ExtArgs>>): Prisma__pandemieClient<$Result.GetResult<Prisma.$pandemiePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pandemie that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pandemieFindUniqueOrThrowArgs} args - Arguments to find a Pandemie
     * @example
     * // Get one Pandemie
     * const pandemie = await prisma.pandemie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pandemieFindUniqueOrThrowArgs>(args: SelectSubset<T, pandemieFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pandemieClient<$Result.GetResult<Prisma.$pandemiePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pandemie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pandemieFindFirstArgs} args - Arguments to find a Pandemie
     * @example
     * // Get one Pandemie
     * const pandemie = await prisma.pandemie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pandemieFindFirstArgs>(args?: SelectSubset<T, pandemieFindFirstArgs<ExtArgs>>): Prisma__pandemieClient<$Result.GetResult<Prisma.$pandemiePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pandemie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pandemieFindFirstOrThrowArgs} args - Arguments to find a Pandemie
     * @example
     * // Get one Pandemie
     * const pandemie = await prisma.pandemie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pandemieFindFirstOrThrowArgs>(args?: SelectSubset<T, pandemieFindFirstOrThrowArgs<ExtArgs>>): Prisma__pandemieClient<$Result.GetResult<Prisma.$pandemiePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pandemies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pandemieFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pandemies
     * const pandemies = await prisma.pandemie.findMany()
     * 
     * // Get first 10 Pandemies
     * const pandemies = await prisma.pandemie.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pandemieWithIdOnly = await prisma.pandemie.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends pandemieFindManyArgs>(args?: SelectSubset<T, pandemieFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pandemiePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pandemie.
     * @param {pandemieCreateArgs} args - Arguments to create a Pandemie.
     * @example
     * // Create one Pandemie
     * const Pandemie = await prisma.pandemie.create({
     *   data: {
     *     // ... data to create a Pandemie
     *   }
     * })
     * 
     */
    create<T extends pandemieCreateArgs>(args: SelectSubset<T, pandemieCreateArgs<ExtArgs>>): Prisma__pandemieClient<$Result.GetResult<Prisma.$pandemiePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pandemies.
     * @param {pandemieCreateManyArgs} args - Arguments to create many Pandemies.
     * @example
     * // Create many Pandemies
     * const pandemie = await prisma.pandemie.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pandemieCreateManyArgs>(args?: SelectSubset<T, pandemieCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pandemie.
     * @param {pandemieDeleteArgs} args - Arguments to delete one Pandemie.
     * @example
     * // Delete one Pandemie
     * const Pandemie = await prisma.pandemie.delete({
     *   where: {
     *     // ... filter to delete one Pandemie
     *   }
     * })
     * 
     */
    delete<T extends pandemieDeleteArgs>(args: SelectSubset<T, pandemieDeleteArgs<ExtArgs>>): Prisma__pandemieClient<$Result.GetResult<Prisma.$pandemiePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pandemie.
     * @param {pandemieUpdateArgs} args - Arguments to update one Pandemie.
     * @example
     * // Update one Pandemie
     * const pandemie = await prisma.pandemie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pandemieUpdateArgs>(args: SelectSubset<T, pandemieUpdateArgs<ExtArgs>>): Prisma__pandemieClient<$Result.GetResult<Prisma.$pandemiePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pandemies.
     * @param {pandemieDeleteManyArgs} args - Arguments to filter Pandemies to delete.
     * @example
     * // Delete a few Pandemies
     * const { count } = await prisma.pandemie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pandemieDeleteManyArgs>(args?: SelectSubset<T, pandemieDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pandemies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pandemieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pandemies
     * const pandemie = await prisma.pandemie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pandemieUpdateManyArgs>(args: SelectSubset<T, pandemieUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pandemie.
     * @param {pandemieUpsertArgs} args - Arguments to update or create a Pandemie.
     * @example
     * // Update or create a Pandemie
     * const pandemie = await prisma.pandemie.upsert({
     *   create: {
     *     // ... data to create a Pandemie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pandemie we want to update
     *   }
     * })
     */
    upsert<T extends pandemieUpsertArgs>(args: SelectSubset<T, pandemieUpsertArgs<ExtArgs>>): Prisma__pandemieClient<$Result.GetResult<Prisma.$pandemiePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pandemies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pandemieCountArgs} args - Arguments to filter Pandemies to count.
     * @example
     * // Count the number of Pandemies
     * const count = await prisma.pandemie.count({
     *   where: {
     *     // ... the filter for the Pandemies we want to count
     *   }
     * })
    **/
    count<T extends pandemieCountArgs>(
      args?: Subset<T, pandemieCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PandemieCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pandemie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PandemieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PandemieAggregateArgs>(args: Subset<T, PandemieAggregateArgs>): Prisma.PrismaPromise<GetPandemieAggregateType<T>>

    /**
     * Group by Pandemie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pandemieGroupByArgs} args - Group by arguments.
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
      T extends pandemieGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pandemieGroupByArgs['orderBy'] }
        : { orderBy?: pandemieGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, pandemieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPandemieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pandemie model
   */
  readonly fields: pandemieFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pandemie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pandemieClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    data<T extends pandemie$dataArgs<ExtArgs> = {}>(args?: Subset<T, pandemie$dataArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the pandemie model
   */
  interface pandemieFieldRefs {
    readonly id: FieldRef<"pandemie", 'Int'>
    readonly type: FieldRef<"pandemie", 'String'>
  }
    

  // Custom InputTypes
  /**
   * pandemie findUnique
   */
  export type pandemieFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pandemie
     */
    select?: pandemieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pandemie
     */
    omit?: pandemieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pandemieInclude<ExtArgs> | null
    /**
     * Filter, which pandemie to fetch.
     */
    where: pandemieWhereUniqueInput
  }

  /**
   * pandemie findUniqueOrThrow
   */
  export type pandemieFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pandemie
     */
    select?: pandemieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pandemie
     */
    omit?: pandemieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pandemieInclude<ExtArgs> | null
    /**
     * Filter, which pandemie to fetch.
     */
    where: pandemieWhereUniqueInput
  }

  /**
   * pandemie findFirst
   */
  export type pandemieFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pandemie
     */
    select?: pandemieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pandemie
     */
    omit?: pandemieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pandemieInclude<ExtArgs> | null
    /**
     * Filter, which pandemie to fetch.
     */
    where?: pandemieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pandemies to fetch.
     */
    orderBy?: pandemieOrderByWithRelationInput | pandemieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pandemies.
     */
    cursor?: pandemieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pandemies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pandemies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pandemies.
     */
    distinct?: PandemieScalarFieldEnum | PandemieScalarFieldEnum[]
  }

  /**
   * pandemie findFirstOrThrow
   */
  export type pandemieFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pandemie
     */
    select?: pandemieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pandemie
     */
    omit?: pandemieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pandemieInclude<ExtArgs> | null
    /**
     * Filter, which pandemie to fetch.
     */
    where?: pandemieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pandemies to fetch.
     */
    orderBy?: pandemieOrderByWithRelationInput | pandemieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pandemies.
     */
    cursor?: pandemieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pandemies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pandemies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pandemies.
     */
    distinct?: PandemieScalarFieldEnum | PandemieScalarFieldEnum[]
  }

  /**
   * pandemie findMany
   */
  export type pandemieFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pandemie
     */
    select?: pandemieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pandemie
     */
    omit?: pandemieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pandemieInclude<ExtArgs> | null
    /**
     * Filter, which pandemies to fetch.
     */
    where?: pandemieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pandemies to fetch.
     */
    orderBy?: pandemieOrderByWithRelationInput | pandemieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pandemies.
     */
    cursor?: pandemieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pandemies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pandemies.
     */
    skip?: number
    distinct?: PandemieScalarFieldEnum | PandemieScalarFieldEnum[]
  }

  /**
   * pandemie create
   */
  export type pandemieCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pandemie
     */
    select?: pandemieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pandemie
     */
    omit?: pandemieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pandemieInclude<ExtArgs> | null
    /**
     * The data needed to create a pandemie.
     */
    data?: XOR<pandemieCreateInput, pandemieUncheckedCreateInput>
  }

  /**
   * pandemie createMany
   */
  export type pandemieCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pandemies.
     */
    data: pandemieCreateManyInput | pandemieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pandemie update
   */
  export type pandemieUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pandemie
     */
    select?: pandemieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pandemie
     */
    omit?: pandemieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pandemieInclude<ExtArgs> | null
    /**
     * The data needed to update a pandemie.
     */
    data: XOR<pandemieUpdateInput, pandemieUncheckedUpdateInput>
    /**
     * Choose, which pandemie to update.
     */
    where: pandemieWhereUniqueInput
  }

  /**
   * pandemie updateMany
   */
  export type pandemieUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pandemies.
     */
    data: XOR<pandemieUpdateManyMutationInput, pandemieUncheckedUpdateManyInput>
    /**
     * Filter which pandemies to update
     */
    where?: pandemieWhereInput
    /**
     * Limit how many pandemies to update.
     */
    limit?: number
  }

  /**
   * pandemie upsert
   */
  export type pandemieUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pandemie
     */
    select?: pandemieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pandemie
     */
    omit?: pandemieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pandemieInclude<ExtArgs> | null
    /**
     * The filter to search for the pandemie to update in case it exists.
     */
    where: pandemieWhereUniqueInput
    /**
     * In case the pandemie found by the `where` argument doesn't exist, create a new pandemie with this data.
     */
    create: XOR<pandemieCreateInput, pandemieUncheckedCreateInput>
    /**
     * In case the pandemie was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pandemieUpdateInput, pandemieUncheckedUpdateInput>
  }

  /**
   * pandemie delete
   */
  export type pandemieDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pandemie
     */
    select?: pandemieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pandemie
     */
    omit?: pandemieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pandemieInclude<ExtArgs> | null
    /**
     * Filter which pandemie to delete.
     */
    where: pandemieWhereUniqueInput
  }

  /**
   * pandemie deleteMany
   */
  export type pandemieDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pandemies to delete
     */
    where?: pandemieWhereInput
    /**
     * Limit how many pandemies to delete.
     */
    limit?: number
  }

  /**
   * pandemie.data
   */
  export type pandemie$dataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data
     */
    select?: dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the data
     */
    omit?: dataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dataInclude<ExtArgs> | null
    where?: dataWhereInput
    orderBy?: dataOrderByWithRelationInput | dataOrderByWithRelationInput[]
    cursor?: dataWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DataScalarFieldEnum | DataScalarFieldEnum[]
  }

  /**
   * pandemie without action
   */
  export type pandemieDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pandemie
     */
    select?: pandemieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pandemie
     */
    omit?: pandemieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pandemieInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CalendarScalarFieldEnum: {
    id: 'id',
    date_value: 'date_value'
  };

  export type CalendarScalarFieldEnum = (typeof CalendarScalarFieldEnum)[keyof typeof CalendarScalarFieldEnum]


  export const DataScalarFieldEnum: {
    id: 'id',
    total_cases: 'total_cases',
    total_deaths: 'total_deaths',
    new_cases: 'new_cases',
    new_deaths: 'new_deaths',
    id_location: 'id_location',
    id_pandemie: 'id_pandemie',
    id_calendar: 'id_calendar'
  };

  export type DataScalarFieldEnum = (typeof DataScalarFieldEnum)[keyof typeof DataScalarFieldEnum]


  export const LocationScalarFieldEnum: {
    id: 'id',
    country: 'country',
    continent: 'continent',
    latitude: 'latitude',
    longitude: 'longitude'
  };

  export type LocationScalarFieldEnum = (typeof LocationScalarFieldEnum)[keyof typeof LocationScalarFieldEnum]


  export const PandemieScalarFieldEnum: {
    id: 'id',
    type: 'type'
  };

  export type PandemieScalarFieldEnum = (typeof PandemieScalarFieldEnum)[keyof typeof PandemieScalarFieldEnum]


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


  export const locationOrderByRelevanceFieldEnum: {
    country: 'country',
    continent: 'continent'
  };

  export type locationOrderByRelevanceFieldEnum = (typeof locationOrderByRelevanceFieldEnum)[keyof typeof locationOrderByRelevanceFieldEnum]


  export const pandemieOrderByRelevanceFieldEnum: {
    type: 'type'
  };

  export type pandemieOrderByRelevanceFieldEnum = (typeof pandemieOrderByRelevanceFieldEnum)[keyof typeof pandemieOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type calendarWhereInput = {
    AND?: calendarWhereInput | calendarWhereInput[]
    OR?: calendarWhereInput[]
    NOT?: calendarWhereInput | calendarWhereInput[]
    id?: IntFilter<"calendar"> | number
    date_value?: DateTimeFilter<"calendar"> | Date | string
    data?: DataListRelationFilter
  }

  export type calendarOrderByWithRelationInput = {
    id?: SortOrder
    date_value?: SortOrder
    data?: dataOrderByRelationAggregateInput
  }

  export type calendarWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    date_value?: Date | string
    AND?: calendarWhereInput | calendarWhereInput[]
    OR?: calendarWhereInput[]
    NOT?: calendarWhereInput | calendarWhereInput[]
    data?: DataListRelationFilter
  }, "id" | "date_value">

  export type calendarOrderByWithAggregationInput = {
    id?: SortOrder
    date_value?: SortOrder
    _count?: calendarCountOrderByAggregateInput
    _avg?: calendarAvgOrderByAggregateInput
    _max?: calendarMaxOrderByAggregateInput
    _min?: calendarMinOrderByAggregateInput
    _sum?: calendarSumOrderByAggregateInput
  }

  export type calendarScalarWhereWithAggregatesInput = {
    AND?: calendarScalarWhereWithAggregatesInput | calendarScalarWhereWithAggregatesInput[]
    OR?: calendarScalarWhereWithAggregatesInput[]
    NOT?: calendarScalarWhereWithAggregatesInput | calendarScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"calendar"> | number
    date_value?: DateTimeWithAggregatesFilter<"calendar"> | Date | string
  }

  export type dataWhereInput = {
    AND?: dataWhereInput | dataWhereInput[]
    OR?: dataWhereInput[]
    NOT?: dataWhereInput | dataWhereInput[]
    id?: IntFilter<"data"> | number
    total_cases?: IntFilter<"data"> | number
    total_deaths?: IntFilter<"data"> | number
    new_cases?: IntFilter<"data"> | number
    new_deaths?: IntFilter<"data"> | number
    id_location?: IntFilter<"data"> | number
    id_pandemie?: IntFilter<"data"> | number
    id_calendar?: IntFilter<"data"> | number
    calendar?: XOR<CalendarScalarRelationFilter, calendarWhereInput>
    location?: XOR<LocationScalarRelationFilter, locationWhereInput>
    pandemie?: XOR<PandemieScalarRelationFilter, pandemieWhereInput>
  }

  export type dataOrderByWithRelationInput = {
    id?: SortOrder
    total_cases?: SortOrder
    total_deaths?: SortOrder
    new_cases?: SortOrder
    new_deaths?: SortOrder
    id_location?: SortOrder
    id_pandemie?: SortOrder
    id_calendar?: SortOrder
    calendar?: calendarOrderByWithRelationInput
    location?: locationOrderByWithRelationInput
    pandemie?: pandemieOrderByWithRelationInput
  }

  export type dataWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: dataWhereInput | dataWhereInput[]
    OR?: dataWhereInput[]
    NOT?: dataWhereInput | dataWhereInput[]
    total_cases?: IntFilter<"data"> | number
    total_deaths?: IntFilter<"data"> | number
    new_cases?: IntFilter<"data"> | number
    new_deaths?: IntFilter<"data"> | number
    id_location?: IntFilter<"data"> | number
    id_pandemie?: IntFilter<"data"> | number
    id_calendar?: IntFilter<"data"> | number
    calendar?: XOR<CalendarScalarRelationFilter, calendarWhereInput>
    location?: XOR<LocationScalarRelationFilter, locationWhereInput>
    pandemie?: XOR<PandemieScalarRelationFilter, pandemieWhereInput>
  }, "id">

  export type dataOrderByWithAggregationInput = {
    id?: SortOrder
    total_cases?: SortOrder
    total_deaths?: SortOrder
    new_cases?: SortOrder
    new_deaths?: SortOrder
    id_location?: SortOrder
    id_pandemie?: SortOrder
    id_calendar?: SortOrder
    _count?: dataCountOrderByAggregateInput
    _avg?: dataAvgOrderByAggregateInput
    _max?: dataMaxOrderByAggregateInput
    _min?: dataMinOrderByAggregateInput
    _sum?: dataSumOrderByAggregateInput
  }

  export type dataScalarWhereWithAggregatesInput = {
    AND?: dataScalarWhereWithAggregatesInput | dataScalarWhereWithAggregatesInput[]
    OR?: dataScalarWhereWithAggregatesInput[]
    NOT?: dataScalarWhereWithAggregatesInput | dataScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"data"> | number
    total_cases?: IntWithAggregatesFilter<"data"> | number
    total_deaths?: IntWithAggregatesFilter<"data"> | number
    new_cases?: IntWithAggregatesFilter<"data"> | number
    new_deaths?: IntWithAggregatesFilter<"data"> | number
    id_location?: IntWithAggregatesFilter<"data"> | number
    id_pandemie?: IntWithAggregatesFilter<"data"> | number
    id_calendar?: IntWithAggregatesFilter<"data"> | number
  }

  export type locationWhereInput = {
    AND?: locationWhereInput | locationWhereInput[]
    OR?: locationWhereInput[]
    NOT?: locationWhereInput | locationWhereInput[]
    id?: IntFilter<"location"> | number
    country?: StringFilter<"location"> | string
    continent?: StringNullableFilter<"location"> | string | null
    latitude?: DecimalNullableFilter<"location"> | Decimal | DecimalJsLike | number | string | null
    longitude?: DecimalNullableFilter<"location"> | Decimal | DecimalJsLike | number | string | null
    data?: DataListRelationFilter
  }

  export type locationOrderByWithRelationInput = {
    id?: SortOrder
    country?: SortOrder
    continent?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    data?: dataOrderByRelationAggregateInput
    _relevance?: locationOrderByRelevanceInput
  }

  export type locationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    country?: string
    AND?: locationWhereInput | locationWhereInput[]
    OR?: locationWhereInput[]
    NOT?: locationWhereInput | locationWhereInput[]
    continent?: StringNullableFilter<"location"> | string | null
    latitude?: DecimalNullableFilter<"location"> | Decimal | DecimalJsLike | number | string | null
    longitude?: DecimalNullableFilter<"location"> | Decimal | DecimalJsLike | number | string | null
    data?: DataListRelationFilter
  }, "id" | "country">

  export type locationOrderByWithAggregationInput = {
    id?: SortOrder
    country?: SortOrder
    continent?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    _count?: locationCountOrderByAggregateInput
    _avg?: locationAvgOrderByAggregateInput
    _max?: locationMaxOrderByAggregateInput
    _min?: locationMinOrderByAggregateInput
    _sum?: locationSumOrderByAggregateInput
  }

  export type locationScalarWhereWithAggregatesInput = {
    AND?: locationScalarWhereWithAggregatesInput | locationScalarWhereWithAggregatesInput[]
    OR?: locationScalarWhereWithAggregatesInput[]
    NOT?: locationScalarWhereWithAggregatesInput | locationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"location"> | number
    country?: StringWithAggregatesFilter<"location"> | string
    continent?: StringNullableWithAggregatesFilter<"location"> | string | null
    latitude?: DecimalNullableWithAggregatesFilter<"location"> | Decimal | DecimalJsLike | number | string | null
    longitude?: DecimalNullableWithAggregatesFilter<"location"> | Decimal | DecimalJsLike | number | string | null
  }

  export type pandemieWhereInput = {
    AND?: pandemieWhereInput | pandemieWhereInput[]
    OR?: pandemieWhereInput[]
    NOT?: pandemieWhereInput | pandemieWhereInput[]
    id?: IntFilter<"pandemie"> | number
    type?: StringNullableFilter<"pandemie"> | string | null
    data?: DataListRelationFilter
  }

  export type pandemieOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrderInput | SortOrder
    data?: dataOrderByRelationAggregateInput
    _relevance?: pandemieOrderByRelevanceInput
  }

  export type pandemieWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    type?: string
    AND?: pandemieWhereInput | pandemieWhereInput[]
    OR?: pandemieWhereInput[]
    NOT?: pandemieWhereInput | pandemieWhereInput[]
    data?: DataListRelationFilter
  }, "id" | "type">

  export type pandemieOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrderInput | SortOrder
    _count?: pandemieCountOrderByAggregateInput
    _avg?: pandemieAvgOrderByAggregateInput
    _max?: pandemieMaxOrderByAggregateInput
    _min?: pandemieMinOrderByAggregateInput
    _sum?: pandemieSumOrderByAggregateInput
  }

  export type pandemieScalarWhereWithAggregatesInput = {
    AND?: pandemieScalarWhereWithAggregatesInput | pandemieScalarWhereWithAggregatesInput[]
    OR?: pandemieScalarWhereWithAggregatesInput[]
    NOT?: pandemieScalarWhereWithAggregatesInput | pandemieScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"pandemie"> | number
    type?: StringNullableWithAggregatesFilter<"pandemie"> | string | null
  }

  export type calendarCreateInput = {
    date_value: Date | string
    data?: dataCreateNestedManyWithoutCalendarInput
  }

  export type calendarUncheckedCreateInput = {
    id?: number
    date_value: Date | string
    data?: dataUncheckedCreateNestedManyWithoutCalendarInput
  }

  export type calendarUpdateInput = {
    date_value?: DateTimeFieldUpdateOperationsInput | Date | string
    data?: dataUpdateManyWithoutCalendarNestedInput
  }

  export type calendarUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date_value?: DateTimeFieldUpdateOperationsInput | Date | string
    data?: dataUncheckedUpdateManyWithoutCalendarNestedInput
  }

  export type calendarCreateManyInput = {
    id?: number
    date_value: Date | string
  }

  export type calendarUpdateManyMutationInput = {
    date_value?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type calendarUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date_value?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type dataCreateInput = {
    id?: number
    total_cases: number
    total_deaths: number
    new_cases: number
    new_deaths: number
    calendar: calendarCreateNestedOneWithoutDataInput
    location: locationCreateNestedOneWithoutDataInput
    pandemie: pandemieCreateNestedOneWithoutDataInput
  }

  export type dataUncheckedCreateInput = {
    id?: number
    total_cases: number
    total_deaths: number
    new_cases: number
    new_deaths: number
    id_location: number
    id_pandemie: number
    id_calendar: number
  }

  export type dataUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    total_cases?: IntFieldUpdateOperationsInput | number
    total_deaths?: IntFieldUpdateOperationsInput | number
    new_cases?: IntFieldUpdateOperationsInput | number
    new_deaths?: IntFieldUpdateOperationsInput | number
    calendar?: calendarUpdateOneRequiredWithoutDataNestedInput
    location?: locationUpdateOneRequiredWithoutDataNestedInput
    pandemie?: pandemieUpdateOneRequiredWithoutDataNestedInput
  }

  export type dataUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    total_cases?: IntFieldUpdateOperationsInput | number
    total_deaths?: IntFieldUpdateOperationsInput | number
    new_cases?: IntFieldUpdateOperationsInput | number
    new_deaths?: IntFieldUpdateOperationsInput | number
    id_location?: IntFieldUpdateOperationsInput | number
    id_pandemie?: IntFieldUpdateOperationsInput | number
    id_calendar?: IntFieldUpdateOperationsInput | number
  }

  export type dataCreateManyInput = {
    id?: number
    total_cases: number
    total_deaths: number
    new_cases: number
    new_deaths: number
    id_location: number
    id_pandemie: number
    id_calendar: number
  }

  export type dataUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    total_cases?: IntFieldUpdateOperationsInput | number
    total_deaths?: IntFieldUpdateOperationsInput | number
    new_cases?: IntFieldUpdateOperationsInput | number
    new_deaths?: IntFieldUpdateOperationsInput | number
  }

  export type dataUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    total_cases?: IntFieldUpdateOperationsInput | number
    total_deaths?: IntFieldUpdateOperationsInput | number
    new_cases?: IntFieldUpdateOperationsInput | number
    new_deaths?: IntFieldUpdateOperationsInput | number
    id_location?: IntFieldUpdateOperationsInput | number
    id_pandemie?: IntFieldUpdateOperationsInput | number
    id_calendar?: IntFieldUpdateOperationsInput | number
  }

  export type locationCreateInput = {
    country: string
    continent?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    data?: dataCreateNestedManyWithoutLocationInput
  }

  export type locationUncheckedCreateInput = {
    id?: number
    country: string
    continent?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    data?: dataUncheckedCreateNestedManyWithoutLocationInput
  }

  export type locationUpdateInput = {
    country?: StringFieldUpdateOperationsInput | string
    continent?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    data?: dataUpdateManyWithoutLocationNestedInput
  }

  export type locationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    country?: StringFieldUpdateOperationsInput | string
    continent?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    data?: dataUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type locationCreateManyInput = {
    id?: number
    country: string
    continent?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
  }

  export type locationUpdateManyMutationInput = {
    country?: StringFieldUpdateOperationsInput | string
    continent?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type locationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    country?: StringFieldUpdateOperationsInput | string
    continent?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type pandemieCreateInput = {
    type?: string | null
    data?: dataCreateNestedManyWithoutPandemieInput
  }

  export type pandemieUncheckedCreateInput = {
    id?: number
    type?: string | null
    data?: dataUncheckedCreateNestedManyWithoutPandemieInput
  }

  export type pandemieUpdateInput = {
    type?: NullableStringFieldUpdateOperationsInput | string | null
    data?: dataUpdateManyWithoutPandemieNestedInput
  }

  export type pandemieUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: NullableStringFieldUpdateOperationsInput | string | null
    data?: dataUncheckedUpdateManyWithoutPandemieNestedInput
  }

  export type pandemieCreateManyInput = {
    id?: number
    type?: string | null
  }

  export type pandemieUpdateManyMutationInput = {
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type pandemieUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type DataListRelationFilter = {
    every?: dataWhereInput
    some?: dataWhereInput
    none?: dataWhereInput
  }

  export type dataOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type calendarCountOrderByAggregateInput = {
    id?: SortOrder
    date_value?: SortOrder
  }

  export type calendarAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type calendarMaxOrderByAggregateInput = {
    id?: SortOrder
    date_value?: SortOrder
  }

  export type calendarMinOrderByAggregateInput = {
    id?: SortOrder
    date_value?: SortOrder
  }

  export type calendarSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type CalendarScalarRelationFilter = {
    is?: calendarWhereInput
    isNot?: calendarWhereInput
  }

  export type LocationScalarRelationFilter = {
    is?: locationWhereInput
    isNot?: locationWhereInput
  }

  export type PandemieScalarRelationFilter = {
    is?: pandemieWhereInput
    isNot?: pandemieWhereInput
  }

  export type dataCountOrderByAggregateInput = {
    id?: SortOrder
    total_cases?: SortOrder
    total_deaths?: SortOrder
    new_cases?: SortOrder
    new_deaths?: SortOrder
    id_location?: SortOrder
    id_pandemie?: SortOrder
    id_calendar?: SortOrder
  }

  export type dataAvgOrderByAggregateInput = {
    id?: SortOrder
    total_cases?: SortOrder
    total_deaths?: SortOrder
    new_cases?: SortOrder
    new_deaths?: SortOrder
    id_location?: SortOrder
    id_pandemie?: SortOrder
    id_calendar?: SortOrder
  }

  export type dataMaxOrderByAggregateInput = {
    id?: SortOrder
    total_cases?: SortOrder
    total_deaths?: SortOrder
    new_cases?: SortOrder
    new_deaths?: SortOrder
    id_location?: SortOrder
    id_pandemie?: SortOrder
    id_calendar?: SortOrder
  }

  export type dataMinOrderByAggregateInput = {
    id?: SortOrder
    total_cases?: SortOrder
    total_deaths?: SortOrder
    new_cases?: SortOrder
    new_deaths?: SortOrder
    id_location?: SortOrder
    id_pandemie?: SortOrder
    id_calendar?: SortOrder
  }

  export type dataSumOrderByAggregateInput = {
    id?: SortOrder
    total_cases?: SortOrder
    total_deaths?: SortOrder
    new_cases?: SortOrder
    new_deaths?: SortOrder
    id_location?: SortOrder
    id_pandemie?: SortOrder
    id_calendar?: SortOrder
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
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
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
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type locationOrderByRelevanceInput = {
    fields: locationOrderByRelevanceFieldEnum | locationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type locationCountOrderByAggregateInput = {
    id?: SortOrder
    country?: SortOrder
    continent?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type locationAvgOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type locationMaxOrderByAggregateInput = {
    id?: SortOrder
    country?: SortOrder
    continent?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type locationMinOrderByAggregateInput = {
    id?: SortOrder
    country?: SortOrder
    continent?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type locationSumOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
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
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type pandemieOrderByRelevanceInput = {
    fields: pandemieOrderByRelevanceFieldEnum | pandemieOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type pandemieCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
  }

  export type pandemieAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type pandemieMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
  }

  export type pandemieMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
  }

  export type pandemieSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type dataCreateNestedManyWithoutCalendarInput = {
    create?: XOR<dataCreateWithoutCalendarInput, dataUncheckedCreateWithoutCalendarInput> | dataCreateWithoutCalendarInput[] | dataUncheckedCreateWithoutCalendarInput[]
    connectOrCreate?: dataCreateOrConnectWithoutCalendarInput | dataCreateOrConnectWithoutCalendarInput[]
    createMany?: dataCreateManyCalendarInputEnvelope
    connect?: dataWhereUniqueInput | dataWhereUniqueInput[]
  }

  export type dataUncheckedCreateNestedManyWithoutCalendarInput = {
    create?: XOR<dataCreateWithoutCalendarInput, dataUncheckedCreateWithoutCalendarInput> | dataCreateWithoutCalendarInput[] | dataUncheckedCreateWithoutCalendarInput[]
    connectOrCreate?: dataCreateOrConnectWithoutCalendarInput | dataCreateOrConnectWithoutCalendarInput[]
    createMany?: dataCreateManyCalendarInputEnvelope
    connect?: dataWhereUniqueInput | dataWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type dataUpdateManyWithoutCalendarNestedInput = {
    create?: XOR<dataCreateWithoutCalendarInput, dataUncheckedCreateWithoutCalendarInput> | dataCreateWithoutCalendarInput[] | dataUncheckedCreateWithoutCalendarInput[]
    connectOrCreate?: dataCreateOrConnectWithoutCalendarInput | dataCreateOrConnectWithoutCalendarInput[]
    upsert?: dataUpsertWithWhereUniqueWithoutCalendarInput | dataUpsertWithWhereUniqueWithoutCalendarInput[]
    createMany?: dataCreateManyCalendarInputEnvelope
    set?: dataWhereUniqueInput | dataWhereUniqueInput[]
    disconnect?: dataWhereUniqueInput | dataWhereUniqueInput[]
    delete?: dataWhereUniqueInput | dataWhereUniqueInput[]
    connect?: dataWhereUniqueInput | dataWhereUniqueInput[]
    update?: dataUpdateWithWhereUniqueWithoutCalendarInput | dataUpdateWithWhereUniqueWithoutCalendarInput[]
    updateMany?: dataUpdateManyWithWhereWithoutCalendarInput | dataUpdateManyWithWhereWithoutCalendarInput[]
    deleteMany?: dataScalarWhereInput | dataScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type dataUncheckedUpdateManyWithoutCalendarNestedInput = {
    create?: XOR<dataCreateWithoutCalendarInput, dataUncheckedCreateWithoutCalendarInput> | dataCreateWithoutCalendarInput[] | dataUncheckedCreateWithoutCalendarInput[]
    connectOrCreate?: dataCreateOrConnectWithoutCalendarInput | dataCreateOrConnectWithoutCalendarInput[]
    upsert?: dataUpsertWithWhereUniqueWithoutCalendarInput | dataUpsertWithWhereUniqueWithoutCalendarInput[]
    createMany?: dataCreateManyCalendarInputEnvelope
    set?: dataWhereUniqueInput | dataWhereUniqueInput[]
    disconnect?: dataWhereUniqueInput | dataWhereUniqueInput[]
    delete?: dataWhereUniqueInput | dataWhereUniqueInput[]
    connect?: dataWhereUniqueInput | dataWhereUniqueInput[]
    update?: dataUpdateWithWhereUniqueWithoutCalendarInput | dataUpdateWithWhereUniqueWithoutCalendarInput[]
    updateMany?: dataUpdateManyWithWhereWithoutCalendarInput | dataUpdateManyWithWhereWithoutCalendarInput[]
    deleteMany?: dataScalarWhereInput | dataScalarWhereInput[]
  }

  export type calendarCreateNestedOneWithoutDataInput = {
    create?: XOR<calendarCreateWithoutDataInput, calendarUncheckedCreateWithoutDataInput>
    connectOrCreate?: calendarCreateOrConnectWithoutDataInput
    connect?: calendarWhereUniqueInput
  }

  export type locationCreateNestedOneWithoutDataInput = {
    create?: XOR<locationCreateWithoutDataInput, locationUncheckedCreateWithoutDataInput>
    connectOrCreate?: locationCreateOrConnectWithoutDataInput
    connect?: locationWhereUniqueInput
  }

  export type pandemieCreateNestedOneWithoutDataInput = {
    create?: XOR<pandemieCreateWithoutDataInput, pandemieUncheckedCreateWithoutDataInput>
    connectOrCreate?: pandemieCreateOrConnectWithoutDataInput
    connect?: pandemieWhereUniqueInput
  }

  export type calendarUpdateOneRequiredWithoutDataNestedInput = {
    create?: XOR<calendarCreateWithoutDataInput, calendarUncheckedCreateWithoutDataInput>
    connectOrCreate?: calendarCreateOrConnectWithoutDataInput
    upsert?: calendarUpsertWithoutDataInput
    connect?: calendarWhereUniqueInput
    update?: XOR<XOR<calendarUpdateToOneWithWhereWithoutDataInput, calendarUpdateWithoutDataInput>, calendarUncheckedUpdateWithoutDataInput>
  }

  export type locationUpdateOneRequiredWithoutDataNestedInput = {
    create?: XOR<locationCreateWithoutDataInput, locationUncheckedCreateWithoutDataInput>
    connectOrCreate?: locationCreateOrConnectWithoutDataInput
    upsert?: locationUpsertWithoutDataInput
    connect?: locationWhereUniqueInput
    update?: XOR<XOR<locationUpdateToOneWithWhereWithoutDataInput, locationUpdateWithoutDataInput>, locationUncheckedUpdateWithoutDataInput>
  }

  export type pandemieUpdateOneRequiredWithoutDataNestedInput = {
    create?: XOR<pandemieCreateWithoutDataInput, pandemieUncheckedCreateWithoutDataInput>
    connectOrCreate?: pandemieCreateOrConnectWithoutDataInput
    upsert?: pandemieUpsertWithoutDataInput
    connect?: pandemieWhereUniqueInput
    update?: XOR<XOR<pandemieUpdateToOneWithWhereWithoutDataInput, pandemieUpdateWithoutDataInput>, pandemieUncheckedUpdateWithoutDataInput>
  }

  export type dataCreateNestedManyWithoutLocationInput = {
    create?: XOR<dataCreateWithoutLocationInput, dataUncheckedCreateWithoutLocationInput> | dataCreateWithoutLocationInput[] | dataUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: dataCreateOrConnectWithoutLocationInput | dataCreateOrConnectWithoutLocationInput[]
    createMany?: dataCreateManyLocationInputEnvelope
    connect?: dataWhereUniqueInput | dataWhereUniqueInput[]
  }

  export type dataUncheckedCreateNestedManyWithoutLocationInput = {
    create?: XOR<dataCreateWithoutLocationInput, dataUncheckedCreateWithoutLocationInput> | dataCreateWithoutLocationInput[] | dataUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: dataCreateOrConnectWithoutLocationInput | dataCreateOrConnectWithoutLocationInput[]
    createMany?: dataCreateManyLocationInputEnvelope
    connect?: dataWhereUniqueInput | dataWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type dataUpdateManyWithoutLocationNestedInput = {
    create?: XOR<dataCreateWithoutLocationInput, dataUncheckedCreateWithoutLocationInput> | dataCreateWithoutLocationInput[] | dataUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: dataCreateOrConnectWithoutLocationInput | dataCreateOrConnectWithoutLocationInput[]
    upsert?: dataUpsertWithWhereUniqueWithoutLocationInput | dataUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: dataCreateManyLocationInputEnvelope
    set?: dataWhereUniqueInput | dataWhereUniqueInput[]
    disconnect?: dataWhereUniqueInput | dataWhereUniqueInput[]
    delete?: dataWhereUniqueInput | dataWhereUniqueInput[]
    connect?: dataWhereUniqueInput | dataWhereUniqueInput[]
    update?: dataUpdateWithWhereUniqueWithoutLocationInput | dataUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: dataUpdateManyWithWhereWithoutLocationInput | dataUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: dataScalarWhereInput | dataScalarWhereInput[]
  }

  export type dataUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: XOR<dataCreateWithoutLocationInput, dataUncheckedCreateWithoutLocationInput> | dataCreateWithoutLocationInput[] | dataUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: dataCreateOrConnectWithoutLocationInput | dataCreateOrConnectWithoutLocationInput[]
    upsert?: dataUpsertWithWhereUniqueWithoutLocationInput | dataUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: dataCreateManyLocationInputEnvelope
    set?: dataWhereUniqueInput | dataWhereUniqueInput[]
    disconnect?: dataWhereUniqueInput | dataWhereUniqueInput[]
    delete?: dataWhereUniqueInput | dataWhereUniqueInput[]
    connect?: dataWhereUniqueInput | dataWhereUniqueInput[]
    update?: dataUpdateWithWhereUniqueWithoutLocationInput | dataUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: dataUpdateManyWithWhereWithoutLocationInput | dataUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: dataScalarWhereInput | dataScalarWhereInput[]
  }

  export type dataCreateNestedManyWithoutPandemieInput = {
    create?: XOR<dataCreateWithoutPandemieInput, dataUncheckedCreateWithoutPandemieInput> | dataCreateWithoutPandemieInput[] | dataUncheckedCreateWithoutPandemieInput[]
    connectOrCreate?: dataCreateOrConnectWithoutPandemieInput | dataCreateOrConnectWithoutPandemieInput[]
    createMany?: dataCreateManyPandemieInputEnvelope
    connect?: dataWhereUniqueInput | dataWhereUniqueInput[]
  }

  export type dataUncheckedCreateNestedManyWithoutPandemieInput = {
    create?: XOR<dataCreateWithoutPandemieInput, dataUncheckedCreateWithoutPandemieInput> | dataCreateWithoutPandemieInput[] | dataUncheckedCreateWithoutPandemieInput[]
    connectOrCreate?: dataCreateOrConnectWithoutPandemieInput | dataCreateOrConnectWithoutPandemieInput[]
    createMany?: dataCreateManyPandemieInputEnvelope
    connect?: dataWhereUniqueInput | dataWhereUniqueInput[]
  }

  export type dataUpdateManyWithoutPandemieNestedInput = {
    create?: XOR<dataCreateWithoutPandemieInput, dataUncheckedCreateWithoutPandemieInput> | dataCreateWithoutPandemieInput[] | dataUncheckedCreateWithoutPandemieInput[]
    connectOrCreate?: dataCreateOrConnectWithoutPandemieInput | dataCreateOrConnectWithoutPandemieInput[]
    upsert?: dataUpsertWithWhereUniqueWithoutPandemieInput | dataUpsertWithWhereUniqueWithoutPandemieInput[]
    createMany?: dataCreateManyPandemieInputEnvelope
    set?: dataWhereUniqueInput | dataWhereUniqueInput[]
    disconnect?: dataWhereUniqueInput | dataWhereUniqueInput[]
    delete?: dataWhereUniqueInput | dataWhereUniqueInput[]
    connect?: dataWhereUniqueInput | dataWhereUniqueInput[]
    update?: dataUpdateWithWhereUniqueWithoutPandemieInput | dataUpdateWithWhereUniqueWithoutPandemieInput[]
    updateMany?: dataUpdateManyWithWhereWithoutPandemieInput | dataUpdateManyWithWhereWithoutPandemieInput[]
    deleteMany?: dataScalarWhereInput | dataScalarWhereInput[]
  }

  export type dataUncheckedUpdateManyWithoutPandemieNestedInput = {
    create?: XOR<dataCreateWithoutPandemieInput, dataUncheckedCreateWithoutPandemieInput> | dataCreateWithoutPandemieInput[] | dataUncheckedCreateWithoutPandemieInput[]
    connectOrCreate?: dataCreateOrConnectWithoutPandemieInput | dataCreateOrConnectWithoutPandemieInput[]
    upsert?: dataUpsertWithWhereUniqueWithoutPandemieInput | dataUpsertWithWhereUniqueWithoutPandemieInput[]
    createMany?: dataCreateManyPandemieInputEnvelope
    set?: dataWhereUniqueInput | dataWhereUniqueInput[]
    disconnect?: dataWhereUniqueInput | dataWhereUniqueInput[]
    delete?: dataWhereUniqueInput | dataWhereUniqueInput[]
    connect?: dataWhereUniqueInput | dataWhereUniqueInput[]
    update?: dataUpdateWithWhereUniqueWithoutPandemieInput | dataUpdateWithWhereUniqueWithoutPandemieInput[]
    updateMany?: dataUpdateManyWithWhereWithoutPandemieInput | dataUpdateManyWithWhereWithoutPandemieInput[]
    deleteMany?: dataScalarWhereInput | dataScalarWhereInput[]
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
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
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
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
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
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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
    search?: string
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

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type dataCreateWithoutCalendarInput = {
    id?: number
    total_cases: number
    total_deaths: number
    new_cases: number
    new_deaths: number
    location: locationCreateNestedOneWithoutDataInput
    pandemie: pandemieCreateNestedOneWithoutDataInput
  }

  export type dataUncheckedCreateWithoutCalendarInput = {
    id?: number
    total_cases: number
    total_deaths: number
    new_cases: number
    new_deaths: number
    id_location: number
    id_pandemie: number
  }

  export type dataCreateOrConnectWithoutCalendarInput = {
    where: dataWhereUniqueInput
    create: XOR<dataCreateWithoutCalendarInput, dataUncheckedCreateWithoutCalendarInput>
  }

  export type dataCreateManyCalendarInputEnvelope = {
    data: dataCreateManyCalendarInput | dataCreateManyCalendarInput[]
    skipDuplicates?: boolean
  }

  export type dataUpsertWithWhereUniqueWithoutCalendarInput = {
    where: dataWhereUniqueInput
    update: XOR<dataUpdateWithoutCalendarInput, dataUncheckedUpdateWithoutCalendarInput>
    create: XOR<dataCreateWithoutCalendarInput, dataUncheckedCreateWithoutCalendarInput>
  }

  export type dataUpdateWithWhereUniqueWithoutCalendarInput = {
    where: dataWhereUniqueInput
    data: XOR<dataUpdateWithoutCalendarInput, dataUncheckedUpdateWithoutCalendarInput>
  }

  export type dataUpdateManyWithWhereWithoutCalendarInput = {
    where: dataScalarWhereInput
    data: XOR<dataUpdateManyMutationInput, dataUncheckedUpdateManyWithoutCalendarInput>
  }

  export type dataScalarWhereInput = {
    AND?: dataScalarWhereInput | dataScalarWhereInput[]
    OR?: dataScalarWhereInput[]
    NOT?: dataScalarWhereInput | dataScalarWhereInput[]
    id?: IntFilter<"data"> | number
    total_cases?: IntFilter<"data"> | number
    total_deaths?: IntFilter<"data"> | number
    new_cases?: IntFilter<"data"> | number
    new_deaths?: IntFilter<"data"> | number
    id_location?: IntFilter<"data"> | number
    id_pandemie?: IntFilter<"data"> | number
    id_calendar?: IntFilter<"data"> | number
  }

  export type calendarCreateWithoutDataInput = {
    date_value: Date | string
  }

  export type calendarUncheckedCreateWithoutDataInput = {
    id?: number
    date_value: Date | string
  }

  export type calendarCreateOrConnectWithoutDataInput = {
    where: calendarWhereUniqueInput
    create: XOR<calendarCreateWithoutDataInput, calendarUncheckedCreateWithoutDataInput>
  }

  export type locationCreateWithoutDataInput = {
    country: string
    continent?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
  }

  export type locationUncheckedCreateWithoutDataInput = {
    id?: number
    country: string
    continent?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
  }

  export type locationCreateOrConnectWithoutDataInput = {
    where: locationWhereUniqueInput
    create: XOR<locationCreateWithoutDataInput, locationUncheckedCreateWithoutDataInput>
  }

  export type pandemieCreateWithoutDataInput = {
    type?: string | null
  }

  export type pandemieUncheckedCreateWithoutDataInput = {
    id?: number
    type?: string | null
  }

  export type pandemieCreateOrConnectWithoutDataInput = {
    where: pandemieWhereUniqueInput
    create: XOR<pandemieCreateWithoutDataInput, pandemieUncheckedCreateWithoutDataInput>
  }

  export type calendarUpsertWithoutDataInput = {
    update: XOR<calendarUpdateWithoutDataInput, calendarUncheckedUpdateWithoutDataInput>
    create: XOR<calendarCreateWithoutDataInput, calendarUncheckedCreateWithoutDataInput>
    where?: calendarWhereInput
  }

  export type calendarUpdateToOneWithWhereWithoutDataInput = {
    where?: calendarWhereInput
    data: XOR<calendarUpdateWithoutDataInput, calendarUncheckedUpdateWithoutDataInput>
  }

  export type calendarUpdateWithoutDataInput = {
    date_value?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type calendarUncheckedUpdateWithoutDataInput = {
    id?: IntFieldUpdateOperationsInput | number
    date_value?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type locationUpsertWithoutDataInput = {
    update: XOR<locationUpdateWithoutDataInput, locationUncheckedUpdateWithoutDataInput>
    create: XOR<locationCreateWithoutDataInput, locationUncheckedCreateWithoutDataInput>
    where?: locationWhereInput
  }

  export type locationUpdateToOneWithWhereWithoutDataInput = {
    where?: locationWhereInput
    data: XOR<locationUpdateWithoutDataInput, locationUncheckedUpdateWithoutDataInput>
  }

  export type locationUpdateWithoutDataInput = {
    country?: StringFieldUpdateOperationsInput | string
    continent?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type locationUncheckedUpdateWithoutDataInput = {
    id?: IntFieldUpdateOperationsInput | number
    country?: StringFieldUpdateOperationsInput | string
    continent?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type pandemieUpsertWithoutDataInput = {
    update: XOR<pandemieUpdateWithoutDataInput, pandemieUncheckedUpdateWithoutDataInput>
    create: XOR<pandemieCreateWithoutDataInput, pandemieUncheckedCreateWithoutDataInput>
    where?: pandemieWhereInput
  }

  export type pandemieUpdateToOneWithWhereWithoutDataInput = {
    where?: pandemieWhereInput
    data: XOR<pandemieUpdateWithoutDataInput, pandemieUncheckedUpdateWithoutDataInput>
  }

  export type pandemieUpdateWithoutDataInput = {
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type pandemieUncheckedUpdateWithoutDataInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type dataCreateWithoutLocationInput = {
    id?: number
    total_cases: number
    total_deaths: number
    new_cases: number
    new_deaths: number
    calendar: calendarCreateNestedOneWithoutDataInput
    pandemie: pandemieCreateNestedOneWithoutDataInput
  }

  export type dataUncheckedCreateWithoutLocationInput = {
    id?: number
    total_cases: number
    total_deaths: number
    new_cases: number
    new_deaths: number
    id_pandemie: number
    id_calendar: number
  }

  export type dataCreateOrConnectWithoutLocationInput = {
    where: dataWhereUniqueInput
    create: XOR<dataCreateWithoutLocationInput, dataUncheckedCreateWithoutLocationInput>
  }

  export type dataCreateManyLocationInputEnvelope = {
    data: dataCreateManyLocationInput | dataCreateManyLocationInput[]
    skipDuplicates?: boolean
  }

  export type dataUpsertWithWhereUniqueWithoutLocationInput = {
    where: dataWhereUniqueInput
    update: XOR<dataUpdateWithoutLocationInput, dataUncheckedUpdateWithoutLocationInput>
    create: XOR<dataCreateWithoutLocationInput, dataUncheckedCreateWithoutLocationInput>
  }

  export type dataUpdateWithWhereUniqueWithoutLocationInput = {
    where: dataWhereUniqueInput
    data: XOR<dataUpdateWithoutLocationInput, dataUncheckedUpdateWithoutLocationInput>
  }

  export type dataUpdateManyWithWhereWithoutLocationInput = {
    where: dataScalarWhereInput
    data: XOR<dataUpdateManyMutationInput, dataUncheckedUpdateManyWithoutLocationInput>
  }

  export type dataCreateWithoutPandemieInput = {
    id?: number
    total_cases: number
    total_deaths: number
    new_cases: number
    new_deaths: number
    calendar: calendarCreateNestedOneWithoutDataInput
    location: locationCreateNestedOneWithoutDataInput
  }

  export type dataUncheckedCreateWithoutPandemieInput = {
    id?: number
    total_cases: number
    total_deaths: number
    new_cases: number
    new_deaths: number
    id_location: number
    id_calendar: number
  }

  export type dataCreateOrConnectWithoutPandemieInput = {
    where: dataWhereUniqueInput
    create: XOR<dataCreateWithoutPandemieInput, dataUncheckedCreateWithoutPandemieInput>
  }

  export type dataCreateManyPandemieInputEnvelope = {
    data: dataCreateManyPandemieInput | dataCreateManyPandemieInput[]
    skipDuplicates?: boolean
  }

  export type dataUpsertWithWhereUniqueWithoutPandemieInput = {
    where: dataWhereUniqueInput
    update: XOR<dataUpdateWithoutPandemieInput, dataUncheckedUpdateWithoutPandemieInput>
    create: XOR<dataCreateWithoutPandemieInput, dataUncheckedCreateWithoutPandemieInput>
  }

  export type dataUpdateWithWhereUniqueWithoutPandemieInput = {
    where: dataWhereUniqueInput
    data: XOR<dataUpdateWithoutPandemieInput, dataUncheckedUpdateWithoutPandemieInput>
  }

  export type dataUpdateManyWithWhereWithoutPandemieInput = {
    where: dataScalarWhereInput
    data: XOR<dataUpdateManyMutationInput, dataUncheckedUpdateManyWithoutPandemieInput>
  }

  export type dataCreateManyCalendarInput = {
    id?: number
    total_cases: number
    total_deaths: number
    new_cases: number
    new_deaths: number
    id_location: number
    id_pandemie: number
  }

  export type dataUpdateWithoutCalendarInput = {
    id?: IntFieldUpdateOperationsInput | number
    total_cases?: IntFieldUpdateOperationsInput | number
    total_deaths?: IntFieldUpdateOperationsInput | number
    new_cases?: IntFieldUpdateOperationsInput | number
    new_deaths?: IntFieldUpdateOperationsInput | number
    location?: locationUpdateOneRequiredWithoutDataNestedInput
    pandemie?: pandemieUpdateOneRequiredWithoutDataNestedInput
  }

  export type dataUncheckedUpdateWithoutCalendarInput = {
    id?: IntFieldUpdateOperationsInput | number
    total_cases?: IntFieldUpdateOperationsInput | number
    total_deaths?: IntFieldUpdateOperationsInput | number
    new_cases?: IntFieldUpdateOperationsInput | number
    new_deaths?: IntFieldUpdateOperationsInput | number
    id_location?: IntFieldUpdateOperationsInput | number
    id_pandemie?: IntFieldUpdateOperationsInput | number
  }

  export type dataUncheckedUpdateManyWithoutCalendarInput = {
    id?: IntFieldUpdateOperationsInput | number
    total_cases?: IntFieldUpdateOperationsInput | number
    total_deaths?: IntFieldUpdateOperationsInput | number
    new_cases?: IntFieldUpdateOperationsInput | number
    new_deaths?: IntFieldUpdateOperationsInput | number
    id_location?: IntFieldUpdateOperationsInput | number
    id_pandemie?: IntFieldUpdateOperationsInput | number
  }

  export type dataCreateManyLocationInput = {
    id?: number
    total_cases: number
    total_deaths: number
    new_cases: number
    new_deaths: number
    id_pandemie: number
    id_calendar: number
  }

  export type dataUpdateWithoutLocationInput = {
    id?: IntFieldUpdateOperationsInput | number
    total_cases?: IntFieldUpdateOperationsInput | number
    total_deaths?: IntFieldUpdateOperationsInput | number
    new_cases?: IntFieldUpdateOperationsInput | number
    new_deaths?: IntFieldUpdateOperationsInput | number
    calendar?: calendarUpdateOneRequiredWithoutDataNestedInput
    pandemie?: pandemieUpdateOneRequiredWithoutDataNestedInput
  }

  export type dataUncheckedUpdateWithoutLocationInput = {
    id?: IntFieldUpdateOperationsInput | number
    total_cases?: IntFieldUpdateOperationsInput | number
    total_deaths?: IntFieldUpdateOperationsInput | number
    new_cases?: IntFieldUpdateOperationsInput | number
    new_deaths?: IntFieldUpdateOperationsInput | number
    id_pandemie?: IntFieldUpdateOperationsInput | number
    id_calendar?: IntFieldUpdateOperationsInput | number
  }

  export type dataUncheckedUpdateManyWithoutLocationInput = {
    id?: IntFieldUpdateOperationsInput | number
    total_cases?: IntFieldUpdateOperationsInput | number
    total_deaths?: IntFieldUpdateOperationsInput | number
    new_cases?: IntFieldUpdateOperationsInput | number
    new_deaths?: IntFieldUpdateOperationsInput | number
    id_pandemie?: IntFieldUpdateOperationsInput | number
    id_calendar?: IntFieldUpdateOperationsInput | number
  }

  export type dataCreateManyPandemieInput = {
    id?: number
    total_cases: number
    total_deaths: number
    new_cases: number
    new_deaths: number
    id_location: number
    id_calendar: number
  }

  export type dataUpdateWithoutPandemieInput = {
    id?: IntFieldUpdateOperationsInput | number
    total_cases?: IntFieldUpdateOperationsInput | number
    total_deaths?: IntFieldUpdateOperationsInput | number
    new_cases?: IntFieldUpdateOperationsInput | number
    new_deaths?: IntFieldUpdateOperationsInput | number
    calendar?: calendarUpdateOneRequiredWithoutDataNestedInput
    location?: locationUpdateOneRequiredWithoutDataNestedInput
  }

  export type dataUncheckedUpdateWithoutPandemieInput = {
    id?: IntFieldUpdateOperationsInput | number
    total_cases?: IntFieldUpdateOperationsInput | number
    total_deaths?: IntFieldUpdateOperationsInput | number
    new_cases?: IntFieldUpdateOperationsInput | number
    new_deaths?: IntFieldUpdateOperationsInput | number
    id_location?: IntFieldUpdateOperationsInput | number
    id_calendar?: IntFieldUpdateOperationsInput | number
  }

  export type dataUncheckedUpdateManyWithoutPandemieInput = {
    id?: IntFieldUpdateOperationsInput | number
    total_cases?: IntFieldUpdateOperationsInput | number
    total_deaths?: IntFieldUpdateOperationsInput | number
    new_cases?: IntFieldUpdateOperationsInput | number
    new_deaths?: IntFieldUpdateOperationsInput | number
    id_location?: IntFieldUpdateOperationsInput | number
    id_calendar?: IntFieldUpdateOperationsInput | number
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