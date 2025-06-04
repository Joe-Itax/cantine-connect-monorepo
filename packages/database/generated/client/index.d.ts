
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Parent
 * 
 */
export type Parent = $Result.DefaultSelection<Prisma.$ParentPayload>
/**
 * Model EnrolledStudent
 * 
 */
export type EnrolledStudent = $Result.DefaultSelection<Prisma.$EnrolledStudentPayload>
/**
 * Model CanteenStudent
 * 
 */
export type CanteenStudent = $Result.DefaultSelection<Prisma.$CanteenStudentPayload>
/**
 * Model Abonnement
 * 
 */
export type Abonnement = $Result.DefaultSelection<Prisma.$AbonnementPayload>
/**
 * Model Repas
 * 
 */
export type Repas = $Result.DefaultSelection<Prisma.$RepasPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  admin: 'admin',
  parent: 'parent',
  agent: 'agent'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const StatusSubscription: {
  actif: 'actif',
  expiré: 'expiré'
};

export type StatusSubscription = (typeof StatusSubscription)[keyof typeof StatusSubscription]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type StatusSubscription = $Enums.StatusSubscription

export const StatusSubscription: typeof $Enums.StatusSubscription

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.parent`: Exposes CRUD operations for the **Parent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Parents
    * const parents = await prisma.parent.findMany()
    * ```
    */
  get parent(): Prisma.ParentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.enrolledStudent`: Exposes CRUD operations for the **EnrolledStudent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EnrolledStudents
    * const enrolledStudents = await prisma.enrolledStudent.findMany()
    * ```
    */
  get enrolledStudent(): Prisma.EnrolledStudentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.canteenStudent`: Exposes CRUD operations for the **CanteenStudent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CanteenStudents
    * const canteenStudents = await prisma.canteenStudent.findMany()
    * ```
    */
  get canteenStudent(): Prisma.CanteenStudentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.abonnement`: Exposes CRUD operations for the **Abonnement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Abonnements
    * const abonnements = await prisma.abonnement.findMany()
    * ```
    */
  get abonnement(): Prisma.AbonnementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.repas`: Exposes CRUD operations for the **Repas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Repas
    * const repas = await prisma.repas.findMany()
    * ```
    */
  get repas(): Prisma.RepasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
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
    User: 'User',
    Parent: 'Parent',
    EnrolledStudent: 'EnrolledStudent',
    CanteenStudent: 'CanteenStudent',
    Abonnement: 'Abonnement',
    Repas: 'Repas',
    Notification: 'Notification'
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
      modelProps: "user" | "parent" | "enrolledStudent" | "canteenStudent" | "abonnement" | "repas" | "notification"
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
      Parent: {
        payload: Prisma.$ParentPayload<ExtArgs>
        fields: Prisma.ParentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload>
          }
          findFirst: {
            args: Prisma.ParentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload>
          }
          findMany: {
            args: Prisma.ParentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload>[]
          }
          create: {
            args: Prisma.ParentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload>
          }
          createMany: {
            args: Prisma.ParentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload>[]
          }
          delete: {
            args: Prisma.ParentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload>
          }
          update: {
            args: Prisma.ParentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload>
          }
          deleteMany: {
            args: Prisma.ParentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload>[]
          }
          upsert: {
            args: Prisma.ParentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload>
          }
          aggregate: {
            args: Prisma.ParentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParent>
          }
          groupBy: {
            args: Prisma.ParentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParentCountArgs<ExtArgs>
            result: $Utils.Optional<ParentCountAggregateOutputType> | number
          }
        }
      }
      EnrolledStudent: {
        payload: Prisma.$EnrolledStudentPayload<ExtArgs>
        fields: Prisma.EnrolledStudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EnrolledStudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrolledStudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EnrolledStudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrolledStudentPayload>
          }
          findFirst: {
            args: Prisma.EnrolledStudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrolledStudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EnrolledStudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrolledStudentPayload>
          }
          findMany: {
            args: Prisma.EnrolledStudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrolledStudentPayload>[]
          }
          create: {
            args: Prisma.EnrolledStudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrolledStudentPayload>
          }
          createMany: {
            args: Prisma.EnrolledStudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EnrolledStudentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrolledStudentPayload>[]
          }
          delete: {
            args: Prisma.EnrolledStudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrolledStudentPayload>
          }
          update: {
            args: Prisma.EnrolledStudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrolledStudentPayload>
          }
          deleteMany: {
            args: Prisma.EnrolledStudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EnrolledStudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EnrolledStudentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrolledStudentPayload>[]
          }
          upsert: {
            args: Prisma.EnrolledStudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrolledStudentPayload>
          }
          aggregate: {
            args: Prisma.EnrolledStudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEnrolledStudent>
          }
          groupBy: {
            args: Prisma.EnrolledStudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnrolledStudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.EnrolledStudentCountArgs<ExtArgs>
            result: $Utils.Optional<EnrolledStudentCountAggregateOutputType> | number
          }
        }
      }
      CanteenStudent: {
        payload: Prisma.$CanteenStudentPayload<ExtArgs>
        fields: Prisma.CanteenStudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CanteenStudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CanteenStudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CanteenStudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CanteenStudentPayload>
          }
          findFirst: {
            args: Prisma.CanteenStudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CanteenStudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CanteenStudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CanteenStudentPayload>
          }
          findMany: {
            args: Prisma.CanteenStudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CanteenStudentPayload>[]
          }
          create: {
            args: Prisma.CanteenStudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CanteenStudentPayload>
          }
          createMany: {
            args: Prisma.CanteenStudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CanteenStudentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CanteenStudentPayload>[]
          }
          delete: {
            args: Prisma.CanteenStudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CanteenStudentPayload>
          }
          update: {
            args: Prisma.CanteenStudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CanteenStudentPayload>
          }
          deleteMany: {
            args: Prisma.CanteenStudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CanteenStudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CanteenStudentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CanteenStudentPayload>[]
          }
          upsert: {
            args: Prisma.CanteenStudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CanteenStudentPayload>
          }
          aggregate: {
            args: Prisma.CanteenStudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCanteenStudent>
          }
          groupBy: {
            args: Prisma.CanteenStudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CanteenStudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CanteenStudentCountArgs<ExtArgs>
            result: $Utils.Optional<CanteenStudentCountAggregateOutputType> | number
          }
        }
      }
      Abonnement: {
        payload: Prisma.$AbonnementPayload<ExtArgs>
        fields: Prisma.AbonnementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AbonnementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbonnementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AbonnementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbonnementPayload>
          }
          findFirst: {
            args: Prisma.AbonnementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbonnementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AbonnementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbonnementPayload>
          }
          findMany: {
            args: Prisma.AbonnementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbonnementPayload>[]
          }
          create: {
            args: Prisma.AbonnementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbonnementPayload>
          }
          createMany: {
            args: Prisma.AbonnementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AbonnementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbonnementPayload>[]
          }
          delete: {
            args: Prisma.AbonnementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbonnementPayload>
          }
          update: {
            args: Prisma.AbonnementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbonnementPayload>
          }
          deleteMany: {
            args: Prisma.AbonnementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AbonnementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AbonnementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbonnementPayload>[]
          }
          upsert: {
            args: Prisma.AbonnementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbonnementPayload>
          }
          aggregate: {
            args: Prisma.AbonnementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAbonnement>
          }
          groupBy: {
            args: Prisma.AbonnementGroupByArgs<ExtArgs>
            result: $Utils.Optional<AbonnementGroupByOutputType>[]
          }
          count: {
            args: Prisma.AbonnementCountArgs<ExtArgs>
            result: $Utils.Optional<AbonnementCountAggregateOutputType> | number
          }
        }
      }
      Repas: {
        payload: Prisma.$RepasPayload<ExtArgs>
        fields: Prisma.RepasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RepasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RepasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepasPayload>
          }
          findFirst: {
            args: Prisma.RepasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RepasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepasPayload>
          }
          findMany: {
            args: Prisma.RepasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepasPayload>[]
          }
          create: {
            args: Prisma.RepasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepasPayload>
          }
          createMany: {
            args: Prisma.RepasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RepasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepasPayload>[]
          }
          delete: {
            args: Prisma.RepasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepasPayload>
          }
          update: {
            args: Prisma.RepasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepasPayload>
          }
          deleteMany: {
            args: Prisma.RepasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RepasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RepasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepasPayload>[]
          }
          upsert: {
            args: Prisma.RepasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepasPayload>
          }
          aggregate: {
            args: Prisma.RepasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRepas>
          }
          groupBy: {
            args: Prisma.RepasGroupByArgs<ExtArgs>
            result: $Utils.Optional<RepasGroupByOutputType>[]
          }
          count: {
            args: Prisma.RepasCountArgs<ExtArgs>
            result: $Utils.Optional<RepasCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
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
    user?: UserOmit
    parent?: ParentOmit
    enrolledStudent?: EnrolledStudentOmit
    canteenStudent?: CanteenStudentOmit
    abonnement?: AbonnementOmit
    repas?: RepasOmit
    notification?: NotificationOmit
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
   * Count Type ParentCountOutputType
   */

  export type ParentCountOutputType = {
    canteenStudents: number
  }

  export type ParentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    canteenStudents?: boolean | ParentCountOutputTypeCountCanteenStudentsArgs
  }

  // Custom InputTypes
  /**
   * ParentCountOutputType without action
   */
  export type ParentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentCountOutputType
     */
    select?: ParentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ParentCountOutputType without action
   */
  export type ParentCountOutputTypeCountCanteenStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CanteenStudentWhereInput
  }


  /**
   * Count Type CanteenStudentCountOutputType
   */

  export type CanteenStudentCountOutputType = {
    abonnements: number
    notifications: number
    repas: number
  }

  export type CanteenStudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    abonnements?: boolean | CanteenStudentCountOutputTypeCountAbonnementsArgs
    notifications?: boolean | CanteenStudentCountOutputTypeCountNotificationsArgs
    repas?: boolean | CanteenStudentCountOutputTypeCountRepasArgs
  }

  // Custom InputTypes
  /**
   * CanteenStudentCountOutputType without action
   */
  export type CanteenStudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CanteenStudentCountOutputType
     */
    select?: CanteenStudentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CanteenStudentCountOutputType without action
   */
  export type CanteenStudentCountOutputTypeCountAbonnementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AbonnementWhereInput
  }

  /**
   * CanteenStudentCountOutputType without action
   */
  export type CanteenStudentCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }

  /**
   * CanteenStudentCountOutputType without action
   */
  export type CanteenStudentCountOutputTypeCountRepasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RepasWhereInput
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
    email: string | null
    password: string | null
    role: $Enums.UserRole | null
    name: string | null
    searchableName: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    role: $Enums.UserRole | null
    name: string | null
    searchableName: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    role: number
    name: number
    searchableName: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    name?: true
    searchableName?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    name?: true
    searchableName?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    name?: true
    searchableName?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
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
    email: string
    password: string | null
    role: $Enums.UserRole
    name: string
    searchableName: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
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
    email?: boolean
    password?: boolean
    role?: boolean
    name?: boolean
    searchableName?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parent?: boolean | User$parentArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    name?: boolean
    searchableName?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    name?: boolean
    searchableName?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    name?: boolean
    searchableName?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "role" | "name" | "searchableName" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | User$parentArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      parent: Prisma.$ParentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string | null
      role: $Enums.UserRole
      name: string
      searchableName: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
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
    parent<T extends User$parentArgs<ExtArgs> = {}>(args?: Subset<T, User$parentArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly name: FieldRef<"User", 'String'>
    readonly searchableName: FieldRef<"User", 'String'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
    skipDuplicates?: boolean
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
    skipDuplicates?: boolean
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
   * User.parent
   */
  export type User$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    where?: ParentWhereInput
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Parent
   */

  export type AggregateParent = {
    _count: ParentCountAggregateOutputType | null
    _min: ParentMinAggregateOutputType | null
    _max: ParentMaxAggregateOutputType | null
  }

  export type ParentMinAggregateOutputType = {
    id: string | null
  }

  export type ParentMaxAggregateOutputType = {
    id: string | null
  }

  export type ParentCountAggregateOutputType = {
    id: number
    _all: number
  }


  export type ParentMinAggregateInputType = {
    id?: true
  }

  export type ParentMaxAggregateInputType = {
    id?: true
  }

  export type ParentCountAggregateInputType = {
    id?: true
    _all?: true
  }

  export type ParentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parent to aggregate.
     */
    where?: ParentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parents to fetch.
     */
    orderBy?: ParentOrderByWithRelationInput | ParentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Parents
    **/
    _count?: true | ParentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParentMaxAggregateInputType
  }

  export type GetParentAggregateType<T extends ParentAggregateArgs> = {
        [P in keyof T & keyof AggregateParent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParent[P]>
      : GetScalarType<T[P], AggregateParent[P]>
  }




  export type ParentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParentWhereInput
    orderBy?: ParentOrderByWithAggregationInput | ParentOrderByWithAggregationInput[]
    by: ParentScalarFieldEnum[] | ParentScalarFieldEnum
    having?: ParentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParentCountAggregateInputType | true
    _min?: ParentMinAggregateInputType
    _max?: ParentMaxAggregateInputType
  }

  export type ParentGroupByOutputType = {
    id: string
    _count: ParentCountAggregateOutputType | null
    _min: ParentMinAggregateOutputType | null
    _max: ParentMaxAggregateOutputType | null
  }

  type GetParentGroupByPayload<T extends ParentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParentGroupByOutputType[P]>
            : GetScalarType<T[P], ParentGroupByOutputType[P]>
        }
      >
    >


  export type ParentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    canteenStudents?: boolean | Parent$canteenStudentsArgs<ExtArgs>
    _count?: boolean | ParentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parent"]>

  export type ParentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parent"]>

  export type ParentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parent"]>

  export type ParentSelectScalar = {
    id?: boolean
  }

  export type ParentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id", ExtArgs["result"]["parent"]>
  export type ParentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    canteenStudents?: boolean | Parent$canteenStudentsArgs<ExtArgs>
    _count?: boolean | ParentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ParentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ParentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ParentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Parent"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      canteenStudents: Prisma.$CanteenStudentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
    }, ExtArgs["result"]["parent"]>
    composites: {}
  }

  type ParentGetPayload<S extends boolean | null | undefined | ParentDefaultArgs> = $Result.GetResult<Prisma.$ParentPayload, S>

  type ParentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParentCountAggregateInputType | true
    }

  export interface ParentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Parent'], meta: { name: 'Parent' } }
    /**
     * Find zero or one Parent that matches the filter.
     * @param {ParentFindUniqueArgs} args - Arguments to find a Parent
     * @example
     * // Get one Parent
     * const parent = await prisma.parent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParentFindUniqueArgs>(args: SelectSubset<T, ParentFindUniqueArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Parent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParentFindUniqueOrThrowArgs} args - Arguments to find a Parent
     * @example
     * // Get one Parent
     * const parent = await prisma.parent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParentFindUniqueOrThrowArgs>(args: SelectSubset<T, ParentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Parent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentFindFirstArgs} args - Arguments to find a Parent
     * @example
     * // Get one Parent
     * const parent = await prisma.parent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParentFindFirstArgs>(args?: SelectSubset<T, ParentFindFirstArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Parent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentFindFirstOrThrowArgs} args - Arguments to find a Parent
     * @example
     * // Get one Parent
     * const parent = await prisma.parent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParentFindFirstOrThrowArgs>(args?: SelectSubset<T, ParentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Parents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Parents
     * const parents = await prisma.parent.findMany()
     * 
     * // Get first 10 Parents
     * const parents = await prisma.parent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const parentWithIdOnly = await prisma.parent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParentFindManyArgs>(args?: SelectSubset<T, ParentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Parent.
     * @param {ParentCreateArgs} args - Arguments to create a Parent.
     * @example
     * // Create one Parent
     * const Parent = await prisma.parent.create({
     *   data: {
     *     // ... data to create a Parent
     *   }
     * })
     * 
     */
    create<T extends ParentCreateArgs>(args: SelectSubset<T, ParentCreateArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Parents.
     * @param {ParentCreateManyArgs} args - Arguments to create many Parents.
     * @example
     * // Create many Parents
     * const parent = await prisma.parent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParentCreateManyArgs>(args?: SelectSubset<T, ParentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Parents and returns the data saved in the database.
     * @param {ParentCreateManyAndReturnArgs} args - Arguments to create many Parents.
     * @example
     * // Create many Parents
     * const parent = await prisma.parent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Parents and only return the `id`
     * const parentWithIdOnly = await prisma.parent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParentCreateManyAndReturnArgs>(args?: SelectSubset<T, ParentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Parent.
     * @param {ParentDeleteArgs} args - Arguments to delete one Parent.
     * @example
     * // Delete one Parent
     * const Parent = await prisma.parent.delete({
     *   where: {
     *     // ... filter to delete one Parent
     *   }
     * })
     * 
     */
    delete<T extends ParentDeleteArgs>(args: SelectSubset<T, ParentDeleteArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Parent.
     * @param {ParentUpdateArgs} args - Arguments to update one Parent.
     * @example
     * // Update one Parent
     * const parent = await prisma.parent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParentUpdateArgs>(args: SelectSubset<T, ParentUpdateArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Parents.
     * @param {ParentDeleteManyArgs} args - Arguments to filter Parents to delete.
     * @example
     * // Delete a few Parents
     * const { count } = await prisma.parent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParentDeleteManyArgs>(args?: SelectSubset<T, ParentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Parents
     * const parent = await prisma.parent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParentUpdateManyArgs>(args: SelectSubset<T, ParentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parents and returns the data updated in the database.
     * @param {ParentUpdateManyAndReturnArgs} args - Arguments to update many Parents.
     * @example
     * // Update many Parents
     * const parent = await prisma.parent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Parents and only return the `id`
     * const parentWithIdOnly = await prisma.parent.updateManyAndReturn({
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
    updateManyAndReturn<T extends ParentUpdateManyAndReturnArgs>(args: SelectSubset<T, ParentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Parent.
     * @param {ParentUpsertArgs} args - Arguments to update or create a Parent.
     * @example
     * // Update or create a Parent
     * const parent = await prisma.parent.upsert({
     *   create: {
     *     // ... data to create a Parent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Parent we want to update
     *   }
     * })
     */
    upsert<T extends ParentUpsertArgs>(args: SelectSubset<T, ParentUpsertArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Parents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentCountArgs} args - Arguments to filter Parents to count.
     * @example
     * // Count the number of Parents
     * const count = await prisma.parent.count({
     *   where: {
     *     // ... the filter for the Parents we want to count
     *   }
     * })
    **/
    count<T extends ParentCountArgs>(
      args?: Subset<T, ParentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Parent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ParentAggregateArgs>(args: Subset<T, ParentAggregateArgs>): Prisma.PrismaPromise<GetParentAggregateType<T>>

    /**
     * Group by Parent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentGroupByArgs} args - Group by arguments.
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
      T extends ParentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParentGroupByArgs['orderBy'] }
        : { orderBy?: ParentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ParentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Parent model
   */
  readonly fields: ParentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Parent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    canteenStudents<T extends Parent$canteenStudentsArgs<ExtArgs> = {}>(args?: Subset<T, Parent$canteenStudentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CanteenStudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Parent model
   */
  interface ParentFieldRefs {
    readonly id: FieldRef<"Parent", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Parent findUnique
   */
  export type ParentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * Filter, which Parent to fetch.
     */
    where: ParentWhereUniqueInput
  }

  /**
   * Parent findUniqueOrThrow
   */
  export type ParentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * Filter, which Parent to fetch.
     */
    where: ParentWhereUniqueInput
  }

  /**
   * Parent findFirst
   */
  export type ParentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * Filter, which Parent to fetch.
     */
    where?: ParentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parents to fetch.
     */
    orderBy?: ParentOrderByWithRelationInput | ParentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parents.
     */
    cursor?: ParentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parents.
     */
    distinct?: ParentScalarFieldEnum | ParentScalarFieldEnum[]
  }

  /**
   * Parent findFirstOrThrow
   */
  export type ParentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * Filter, which Parent to fetch.
     */
    where?: ParentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parents to fetch.
     */
    orderBy?: ParentOrderByWithRelationInput | ParentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parents.
     */
    cursor?: ParentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parents.
     */
    distinct?: ParentScalarFieldEnum | ParentScalarFieldEnum[]
  }

  /**
   * Parent findMany
   */
  export type ParentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * Filter, which Parents to fetch.
     */
    where?: ParentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parents to fetch.
     */
    orderBy?: ParentOrderByWithRelationInput | ParentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Parents.
     */
    cursor?: ParentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parents.
     */
    skip?: number
    distinct?: ParentScalarFieldEnum | ParentScalarFieldEnum[]
  }

  /**
   * Parent create
   */
  export type ParentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * The data needed to create a Parent.
     */
    data: XOR<ParentCreateInput, ParentUncheckedCreateInput>
  }

  /**
   * Parent createMany
   */
  export type ParentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Parents.
     */
    data: ParentCreateManyInput | ParentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Parent createManyAndReturn
   */
  export type ParentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * The data used to create many Parents.
     */
    data: ParentCreateManyInput | ParentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Parent update
   */
  export type ParentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * The data needed to update a Parent.
     */
    data: XOR<ParentUpdateInput, ParentUncheckedUpdateInput>
    /**
     * Choose, which Parent to update.
     */
    where: ParentWhereUniqueInput
  }

  /**
   * Parent updateMany
   */
  export type ParentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Parents.
     */
    data: XOR<ParentUpdateManyMutationInput, ParentUncheckedUpdateManyInput>
    /**
     * Filter which Parents to update
     */
    where?: ParentWhereInput
    /**
     * Limit how many Parents to update.
     */
    limit?: number
  }

  /**
   * Parent updateManyAndReturn
   */
  export type ParentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * The data used to update Parents.
     */
    data: XOR<ParentUpdateManyMutationInput, ParentUncheckedUpdateManyInput>
    /**
     * Filter which Parents to update
     */
    where?: ParentWhereInput
    /**
     * Limit how many Parents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Parent upsert
   */
  export type ParentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * The filter to search for the Parent to update in case it exists.
     */
    where: ParentWhereUniqueInput
    /**
     * In case the Parent found by the `where` argument doesn't exist, create a new Parent with this data.
     */
    create: XOR<ParentCreateInput, ParentUncheckedCreateInput>
    /**
     * In case the Parent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParentUpdateInput, ParentUncheckedUpdateInput>
  }

  /**
   * Parent delete
   */
  export type ParentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * Filter which Parent to delete.
     */
    where: ParentWhereUniqueInput
  }

  /**
   * Parent deleteMany
   */
  export type ParentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parents to delete
     */
    where?: ParentWhereInput
    /**
     * Limit how many Parents to delete.
     */
    limit?: number
  }

  /**
   * Parent.canteenStudents
   */
  export type Parent$canteenStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CanteenStudent
     */
    select?: CanteenStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CanteenStudent
     */
    omit?: CanteenStudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CanteenStudentInclude<ExtArgs> | null
    where?: CanteenStudentWhereInput
    orderBy?: CanteenStudentOrderByWithRelationInput | CanteenStudentOrderByWithRelationInput[]
    cursor?: CanteenStudentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CanteenStudentScalarFieldEnum | CanteenStudentScalarFieldEnum[]
  }

  /**
   * Parent without action
   */
  export type ParentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
  }


  /**
   * Model EnrolledStudent
   */

  export type AggregateEnrolledStudent = {
    _count: EnrolledStudentCountAggregateOutputType | null
    _min: EnrolledStudentMinAggregateOutputType | null
    _max: EnrolledStudentMaxAggregateOutputType | null
  }

  export type EnrolledStudentMinAggregateOutputType = {
    id: string | null
    name: string | null
    searchableName: string | null
    class: string | null
    gender: string | null
    matricule: string | null
    isRegisteredToCanteen: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EnrolledStudentMaxAggregateOutputType = {
    id: string | null
    name: string | null
    searchableName: string | null
    class: string | null
    gender: string | null
    matricule: string | null
    isRegisteredToCanteen: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EnrolledStudentCountAggregateOutputType = {
    id: number
    name: number
    searchableName: number
    class: number
    gender: number
    matricule: number
    isRegisteredToCanteen: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EnrolledStudentMinAggregateInputType = {
    id?: true
    name?: true
    searchableName?: true
    class?: true
    gender?: true
    matricule?: true
    isRegisteredToCanteen?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EnrolledStudentMaxAggregateInputType = {
    id?: true
    name?: true
    searchableName?: true
    class?: true
    gender?: true
    matricule?: true
    isRegisteredToCanteen?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EnrolledStudentCountAggregateInputType = {
    id?: true
    name?: true
    searchableName?: true
    class?: true
    gender?: true
    matricule?: true
    isRegisteredToCanteen?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EnrolledStudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EnrolledStudent to aggregate.
     */
    where?: EnrolledStudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnrolledStudents to fetch.
     */
    orderBy?: EnrolledStudentOrderByWithRelationInput | EnrolledStudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EnrolledStudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnrolledStudents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnrolledStudents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EnrolledStudents
    **/
    _count?: true | EnrolledStudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnrolledStudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnrolledStudentMaxAggregateInputType
  }

  export type GetEnrolledStudentAggregateType<T extends EnrolledStudentAggregateArgs> = {
        [P in keyof T & keyof AggregateEnrolledStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnrolledStudent[P]>
      : GetScalarType<T[P], AggregateEnrolledStudent[P]>
  }




  export type EnrolledStudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrolledStudentWhereInput
    orderBy?: EnrolledStudentOrderByWithAggregationInput | EnrolledStudentOrderByWithAggregationInput[]
    by: EnrolledStudentScalarFieldEnum[] | EnrolledStudentScalarFieldEnum
    having?: EnrolledStudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnrolledStudentCountAggregateInputType | true
    _min?: EnrolledStudentMinAggregateInputType
    _max?: EnrolledStudentMaxAggregateInputType
  }

  export type EnrolledStudentGroupByOutputType = {
    id: string
    name: string
    searchableName: string
    class: string
    gender: string
    matricule: string
    isRegisteredToCanteen: boolean
    createdAt: Date
    updatedAt: Date
    _count: EnrolledStudentCountAggregateOutputType | null
    _min: EnrolledStudentMinAggregateOutputType | null
    _max: EnrolledStudentMaxAggregateOutputType | null
  }

  type GetEnrolledStudentGroupByPayload<T extends EnrolledStudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnrolledStudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnrolledStudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnrolledStudentGroupByOutputType[P]>
            : GetScalarType<T[P], EnrolledStudentGroupByOutputType[P]>
        }
      >
    >


  export type EnrolledStudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    searchableName?: boolean
    class?: boolean
    gender?: boolean
    matricule?: boolean
    isRegisteredToCanteen?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    canteenStudent?: boolean | EnrolledStudent$canteenStudentArgs<ExtArgs>
  }, ExtArgs["result"]["enrolledStudent"]>

  export type EnrolledStudentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    searchableName?: boolean
    class?: boolean
    gender?: boolean
    matricule?: boolean
    isRegisteredToCanteen?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["enrolledStudent"]>

  export type EnrolledStudentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    searchableName?: boolean
    class?: boolean
    gender?: boolean
    matricule?: boolean
    isRegisteredToCanteen?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["enrolledStudent"]>

  export type EnrolledStudentSelectScalar = {
    id?: boolean
    name?: boolean
    searchableName?: boolean
    class?: boolean
    gender?: boolean
    matricule?: boolean
    isRegisteredToCanteen?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EnrolledStudentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "searchableName" | "class" | "gender" | "matricule" | "isRegisteredToCanteen" | "createdAt" | "updatedAt", ExtArgs["result"]["enrolledStudent"]>
  export type EnrolledStudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    canteenStudent?: boolean | EnrolledStudent$canteenStudentArgs<ExtArgs>
  }
  export type EnrolledStudentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EnrolledStudentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EnrolledStudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EnrolledStudent"
    objects: {
      canteenStudent: Prisma.$CanteenStudentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      searchableName: string
      class: string
      gender: string
      matricule: string
      isRegisteredToCanteen: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["enrolledStudent"]>
    composites: {}
  }

  type EnrolledStudentGetPayload<S extends boolean | null | undefined | EnrolledStudentDefaultArgs> = $Result.GetResult<Prisma.$EnrolledStudentPayload, S>

  type EnrolledStudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EnrolledStudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnrolledStudentCountAggregateInputType | true
    }

  export interface EnrolledStudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EnrolledStudent'], meta: { name: 'EnrolledStudent' } }
    /**
     * Find zero or one EnrolledStudent that matches the filter.
     * @param {EnrolledStudentFindUniqueArgs} args - Arguments to find a EnrolledStudent
     * @example
     * // Get one EnrolledStudent
     * const enrolledStudent = await prisma.enrolledStudent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EnrolledStudentFindUniqueArgs>(args: SelectSubset<T, EnrolledStudentFindUniqueArgs<ExtArgs>>): Prisma__EnrolledStudentClient<$Result.GetResult<Prisma.$EnrolledStudentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EnrolledStudent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EnrolledStudentFindUniqueOrThrowArgs} args - Arguments to find a EnrolledStudent
     * @example
     * // Get one EnrolledStudent
     * const enrolledStudent = await prisma.enrolledStudent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EnrolledStudentFindUniqueOrThrowArgs>(args: SelectSubset<T, EnrolledStudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EnrolledStudentClient<$Result.GetResult<Prisma.$EnrolledStudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EnrolledStudent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrolledStudentFindFirstArgs} args - Arguments to find a EnrolledStudent
     * @example
     * // Get one EnrolledStudent
     * const enrolledStudent = await prisma.enrolledStudent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EnrolledStudentFindFirstArgs>(args?: SelectSubset<T, EnrolledStudentFindFirstArgs<ExtArgs>>): Prisma__EnrolledStudentClient<$Result.GetResult<Prisma.$EnrolledStudentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EnrolledStudent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrolledStudentFindFirstOrThrowArgs} args - Arguments to find a EnrolledStudent
     * @example
     * // Get one EnrolledStudent
     * const enrolledStudent = await prisma.enrolledStudent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EnrolledStudentFindFirstOrThrowArgs>(args?: SelectSubset<T, EnrolledStudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__EnrolledStudentClient<$Result.GetResult<Prisma.$EnrolledStudentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EnrolledStudents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrolledStudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EnrolledStudents
     * const enrolledStudents = await prisma.enrolledStudent.findMany()
     * 
     * // Get first 10 EnrolledStudents
     * const enrolledStudents = await prisma.enrolledStudent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const enrolledStudentWithIdOnly = await prisma.enrolledStudent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EnrolledStudentFindManyArgs>(args?: SelectSubset<T, EnrolledStudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrolledStudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EnrolledStudent.
     * @param {EnrolledStudentCreateArgs} args - Arguments to create a EnrolledStudent.
     * @example
     * // Create one EnrolledStudent
     * const EnrolledStudent = await prisma.enrolledStudent.create({
     *   data: {
     *     // ... data to create a EnrolledStudent
     *   }
     * })
     * 
     */
    create<T extends EnrolledStudentCreateArgs>(args: SelectSubset<T, EnrolledStudentCreateArgs<ExtArgs>>): Prisma__EnrolledStudentClient<$Result.GetResult<Prisma.$EnrolledStudentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EnrolledStudents.
     * @param {EnrolledStudentCreateManyArgs} args - Arguments to create many EnrolledStudents.
     * @example
     * // Create many EnrolledStudents
     * const enrolledStudent = await prisma.enrolledStudent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EnrolledStudentCreateManyArgs>(args?: SelectSubset<T, EnrolledStudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EnrolledStudents and returns the data saved in the database.
     * @param {EnrolledStudentCreateManyAndReturnArgs} args - Arguments to create many EnrolledStudents.
     * @example
     * // Create many EnrolledStudents
     * const enrolledStudent = await prisma.enrolledStudent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EnrolledStudents and only return the `id`
     * const enrolledStudentWithIdOnly = await prisma.enrolledStudent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EnrolledStudentCreateManyAndReturnArgs>(args?: SelectSubset<T, EnrolledStudentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrolledStudentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EnrolledStudent.
     * @param {EnrolledStudentDeleteArgs} args - Arguments to delete one EnrolledStudent.
     * @example
     * // Delete one EnrolledStudent
     * const EnrolledStudent = await prisma.enrolledStudent.delete({
     *   where: {
     *     // ... filter to delete one EnrolledStudent
     *   }
     * })
     * 
     */
    delete<T extends EnrolledStudentDeleteArgs>(args: SelectSubset<T, EnrolledStudentDeleteArgs<ExtArgs>>): Prisma__EnrolledStudentClient<$Result.GetResult<Prisma.$EnrolledStudentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EnrolledStudent.
     * @param {EnrolledStudentUpdateArgs} args - Arguments to update one EnrolledStudent.
     * @example
     * // Update one EnrolledStudent
     * const enrolledStudent = await prisma.enrolledStudent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EnrolledStudentUpdateArgs>(args: SelectSubset<T, EnrolledStudentUpdateArgs<ExtArgs>>): Prisma__EnrolledStudentClient<$Result.GetResult<Prisma.$EnrolledStudentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EnrolledStudents.
     * @param {EnrolledStudentDeleteManyArgs} args - Arguments to filter EnrolledStudents to delete.
     * @example
     * // Delete a few EnrolledStudents
     * const { count } = await prisma.enrolledStudent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EnrolledStudentDeleteManyArgs>(args?: SelectSubset<T, EnrolledStudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EnrolledStudents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrolledStudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EnrolledStudents
     * const enrolledStudent = await prisma.enrolledStudent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EnrolledStudentUpdateManyArgs>(args: SelectSubset<T, EnrolledStudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EnrolledStudents and returns the data updated in the database.
     * @param {EnrolledStudentUpdateManyAndReturnArgs} args - Arguments to update many EnrolledStudents.
     * @example
     * // Update many EnrolledStudents
     * const enrolledStudent = await prisma.enrolledStudent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EnrolledStudents and only return the `id`
     * const enrolledStudentWithIdOnly = await prisma.enrolledStudent.updateManyAndReturn({
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
    updateManyAndReturn<T extends EnrolledStudentUpdateManyAndReturnArgs>(args: SelectSubset<T, EnrolledStudentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrolledStudentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EnrolledStudent.
     * @param {EnrolledStudentUpsertArgs} args - Arguments to update or create a EnrolledStudent.
     * @example
     * // Update or create a EnrolledStudent
     * const enrolledStudent = await prisma.enrolledStudent.upsert({
     *   create: {
     *     // ... data to create a EnrolledStudent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EnrolledStudent we want to update
     *   }
     * })
     */
    upsert<T extends EnrolledStudentUpsertArgs>(args: SelectSubset<T, EnrolledStudentUpsertArgs<ExtArgs>>): Prisma__EnrolledStudentClient<$Result.GetResult<Prisma.$EnrolledStudentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EnrolledStudents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrolledStudentCountArgs} args - Arguments to filter EnrolledStudents to count.
     * @example
     * // Count the number of EnrolledStudents
     * const count = await prisma.enrolledStudent.count({
     *   where: {
     *     // ... the filter for the EnrolledStudents we want to count
     *   }
     * })
    **/
    count<T extends EnrolledStudentCountArgs>(
      args?: Subset<T, EnrolledStudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnrolledStudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EnrolledStudent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrolledStudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EnrolledStudentAggregateArgs>(args: Subset<T, EnrolledStudentAggregateArgs>): Prisma.PrismaPromise<GetEnrolledStudentAggregateType<T>>

    /**
     * Group by EnrolledStudent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrolledStudentGroupByArgs} args - Group by arguments.
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
      T extends EnrolledStudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EnrolledStudentGroupByArgs['orderBy'] }
        : { orderBy?: EnrolledStudentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EnrolledStudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnrolledStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EnrolledStudent model
   */
  readonly fields: EnrolledStudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EnrolledStudent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EnrolledStudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    canteenStudent<T extends EnrolledStudent$canteenStudentArgs<ExtArgs> = {}>(args?: Subset<T, EnrolledStudent$canteenStudentArgs<ExtArgs>>): Prisma__CanteenStudentClient<$Result.GetResult<Prisma.$CanteenStudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the EnrolledStudent model
   */
  interface EnrolledStudentFieldRefs {
    readonly id: FieldRef<"EnrolledStudent", 'String'>
    readonly name: FieldRef<"EnrolledStudent", 'String'>
    readonly searchableName: FieldRef<"EnrolledStudent", 'String'>
    readonly class: FieldRef<"EnrolledStudent", 'String'>
    readonly gender: FieldRef<"EnrolledStudent", 'String'>
    readonly matricule: FieldRef<"EnrolledStudent", 'String'>
    readonly isRegisteredToCanteen: FieldRef<"EnrolledStudent", 'Boolean'>
    readonly createdAt: FieldRef<"EnrolledStudent", 'DateTime'>
    readonly updatedAt: FieldRef<"EnrolledStudent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EnrolledStudent findUnique
   */
  export type EnrolledStudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrolledStudent
     */
    select?: EnrolledStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnrolledStudent
     */
    omit?: EnrolledStudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrolledStudentInclude<ExtArgs> | null
    /**
     * Filter, which EnrolledStudent to fetch.
     */
    where: EnrolledStudentWhereUniqueInput
  }

  /**
   * EnrolledStudent findUniqueOrThrow
   */
  export type EnrolledStudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrolledStudent
     */
    select?: EnrolledStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnrolledStudent
     */
    omit?: EnrolledStudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrolledStudentInclude<ExtArgs> | null
    /**
     * Filter, which EnrolledStudent to fetch.
     */
    where: EnrolledStudentWhereUniqueInput
  }

  /**
   * EnrolledStudent findFirst
   */
  export type EnrolledStudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrolledStudent
     */
    select?: EnrolledStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnrolledStudent
     */
    omit?: EnrolledStudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrolledStudentInclude<ExtArgs> | null
    /**
     * Filter, which EnrolledStudent to fetch.
     */
    where?: EnrolledStudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnrolledStudents to fetch.
     */
    orderBy?: EnrolledStudentOrderByWithRelationInput | EnrolledStudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EnrolledStudents.
     */
    cursor?: EnrolledStudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnrolledStudents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnrolledStudents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EnrolledStudents.
     */
    distinct?: EnrolledStudentScalarFieldEnum | EnrolledStudentScalarFieldEnum[]
  }

  /**
   * EnrolledStudent findFirstOrThrow
   */
  export type EnrolledStudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrolledStudent
     */
    select?: EnrolledStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnrolledStudent
     */
    omit?: EnrolledStudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrolledStudentInclude<ExtArgs> | null
    /**
     * Filter, which EnrolledStudent to fetch.
     */
    where?: EnrolledStudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnrolledStudents to fetch.
     */
    orderBy?: EnrolledStudentOrderByWithRelationInput | EnrolledStudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EnrolledStudents.
     */
    cursor?: EnrolledStudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnrolledStudents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnrolledStudents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EnrolledStudents.
     */
    distinct?: EnrolledStudentScalarFieldEnum | EnrolledStudentScalarFieldEnum[]
  }

  /**
   * EnrolledStudent findMany
   */
  export type EnrolledStudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrolledStudent
     */
    select?: EnrolledStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnrolledStudent
     */
    omit?: EnrolledStudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrolledStudentInclude<ExtArgs> | null
    /**
     * Filter, which EnrolledStudents to fetch.
     */
    where?: EnrolledStudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnrolledStudents to fetch.
     */
    orderBy?: EnrolledStudentOrderByWithRelationInput | EnrolledStudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EnrolledStudents.
     */
    cursor?: EnrolledStudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnrolledStudents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnrolledStudents.
     */
    skip?: number
    distinct?: EnrolledStudentScalarFieldEnum | EnrolledStudentScalarFieldEnum[]
  }

  /**
   * EnrolledStudent create
   */
  export type EnrolledStudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrolledStudent
     */
    select?: EnrolledStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnrolledStudent
     */
    omit?: EnrolledStudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrolledStudentInclude<ExtArgs> | null
    /**
     * The data needed to create a EnrolledStudent.
     */
    data: XOR<EnrolledStudentCreateInput, EnrolledStudentUncheckedCreateInput>
  }

  /**
   * EnrolledStudent createMany
   */
  export type EnrolledStudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EnrolledStudents.
     */
    data: EnrolledStudentCreateManyInput | EnrolledStudentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EnrolledStudent createManyAndReturn
   */
  export type EnrolledStudentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrolledStudent
     */
    select?: EnrolledStudentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EnrolledStudent
     */
    omit?: EnrolledStudentOmit<ExtArgs> | null
    /**
     * The data used to create many EnrolledStudents.
     */
    data: EnrolledStudentCreateManyInput | EnrolledStudentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EnrolledStudent update
   */
  export type EnrolledStudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrolledStudent
     */
    select?: EnrolledStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnrolledStudent
     */
    omit?: EnrolledStudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrolledStudentInclude<ExtArgs> | null
    /**
     * The data needed to update a EnrolledStudent.
     */
    data: XOR<EnrolledStudentUpdateInput, EnrolledStudentUncheckedUpdateInput>
    /**
     * Choose, which EnrolledStudent to update.
     */
    where: EnrolledStudentWhereUniqueInput
  }

  /**
   * EnrolledStudent updateMany
   */
  export type EnrolledStudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EnrolledStudents.
     */
    data: XOR<EnrolledStudentUpdateManyMutationInput, EnrolledStudentUncheckedUpdateManyInput>
    /**
     * Filter which EnrolledStudents to update
     */
    where?: EnrolledStudentWhereInput
    /**
     * Limit how many EnrolledStudents to update.
     */
    limit?: number
  }

  /**
   * EnrolledStudent updateManyAndReturn
   */
  export type EnrolledStudentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrolledStudent
     */
    select?: EnrolledStudentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EnrolledStudent
     */
    omit?: EnrolledStudentOmit<ExtArgs> | null
    /**
     * The data used to update EnrolledStudents.
     */
    data: XOR<EnrolledStudentUpdateManyMutationInput, EnrolledStudentUncheckedUpdateManyInput>
    /**
     * Filter which EnrolledStudents to update
     */
    where?: EnrolledStudentWhereInput
    /**
     * Limit how many EnrolledStudents to update.
     */
    limit?: number
  }

  /**
   * EnrolledStudent upsert
   */
  export type EnrolledStudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrolledStudent
     */
    select?: EnrolledStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnrolledStudent
     */
    omit?: EnrolledStudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrolledStudentInclude<ExtArgs> | null
    /**
     * The filter to search for the EnrolledStudent to update in case it exists.
     */
    where: EnrolledStudentWhereUniqueInput
    /**
     * In case the EnrolledStudent found by the `where` argument doesn't exist, create a new EnrolledStudent with this data.
     */
    create: XOR<EnrolledStudentCreateInput, EnrolledStudentUncheckedCreateInput>
    /**
     * In case the EnrolledStudent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EnrolledStudentUpdateInput, EnrolledStudentUncheckedUpdateInput>
  }

  /**
   * EnrolledStudent delete
   */
  export type EnrolledStudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrolledStudent
     */
    select?: EnrolledStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnrolledStudent
     */
    omit?: EnrolledStudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrolledStudentInclude<ExtArgs> | null
    /**
     * Filter which EnrolledStudent to delete.
     */
    where: EnrolledStudentWhereUniqueInput
  }

  /**
   * EnrolledStudent deleteMany
   */
  export type EnrolledStudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EnrolledStudents to delete
     */
    where?: EnrolledStudentWhereInput
    /**
     * Limit how many EnrolledStudents to delete.
     */
    limit?: number
  }

  /**
   * EnrolledStudent.canteenStudent
   */
  export type EnrolledStudent$canteenStudentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CanteenStudent
     */
    select?: CanteenStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CanteenStudent
     */
    omit?: CanteenStudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CanteenStudentInclude<ExtArgs> | null
    where?: CanteenStudentWhereInput
  }

  /**
   * EnrolledStudent without action
   */
  export type EnrolledStudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrolledStudent
     */
    select?: EnrolledStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnrolledStudent
     */
    omit?: EnrolledStudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrolledStudentInclude<ExtArgs> | null
  }


  /**
   * Model CanteenStudent
   */

  export type AggregateCanteenStudent = {
    _count: CanteenStudentCountAggregateOutputType | null
    _min: CanteenStudentMinAggregateOutputType | null
    _max: CanteenStudentMaxAggregateOutputType | null
  }

  export type CanteenStudentMinAggregateOutputType = {
    id: string | null
    enrolledStudentId: string | null
    matriculeHashe: string | null
    parentId: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CanteenStudentMaxAggregateOutputType = {
    id: string | null
    enrolledStudentId: string | null
    matriculeHashe: string | null
    parentId: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CanteenStudentCountAggregateOutputType = {
    id: number
    enrolledStudentId: number
    matriculeHashe: number
    parentId: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CanteenStudentMinAggregateInputType = {
    id?: true
    enrolledStudentId?: true
    matriculeHashe?: true
    parentId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CanteenStudentMaxAggregateInputType = {
    id?: true
    enrolledStudentId?: true
    matriculeHashe?: true
    parentId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CanteenStudentCountAggregateInputType = {
    id?: true
    enrolledStudentId?: true
    matriculeHashe?: true
    parentId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CanteenStudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CanteenStudent to aggregate.
     */
    where?: CanteenStudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CanteenStudents to fetch.
     */
    orderBy?: CanteenStudentOrderByWithRelationInput | CanteenStudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CanteenStudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CanteenStudents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CanteenStudents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CanteenStudents
    **/
    _count?: true | CanteenStudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CanteenStudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CanteenStudentMaxAggregateInputType
  }

  export type GetCanteenStudentAggregateType<T extends CanteenStudentAggregateArgs> = {
        [P in keyof T & keyof AggregateCanteenStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCanteenStudent[P]>
      : GetScalarType<T[P], AggregateCanteenStudent[P]>
  }




  export type CanteenStudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CanteenStudentWhereInput
    orderBy?: CanteenStudentOrderByWithAggregationInput | CanteenStudentOrderByWithAggregationInput[]
    by: CanteenStudentScalarFieldEnum[] | CanteenStudentScalarFieldEnum
    having?: CanteenStudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CanteenStudentCountAggregateInputType | true
    _min?: CanteenStudentMinAggregateInputType
    _max?: CanteenStudentMaxAggregateInputType
  }

  export type CanteenStudentGroupByOutputType = {
    id: string
    enrolledStudentId: string
    matriculeHashe: string
    parentId: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: CanteenStudentCountAggregateOutputType | null
    _min: CanteenStudentMinAggregateOutputType | null
    _max: CanteenStudentMaxAggregateOutputType | null
  }

  type GetCanteenStudentGroupByPayload<T extends CanteenStudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CanteenStudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CanteenStudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CanteenStudentGroupByOutputType[P]>
            : GetScalarType<T[P], CanteenStudentGroupByOutputType[P]>
        }
      >
    >


  export type CanteenStudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    enrolledStudentId?: boolean
    matriculeHashe?: boolean
    parentId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    abonnements?: boolean | CanteenStudent$abonnementsArgs<ExtArgs>
    notifications?: boolean | CanteenStudent$notificationsArgs<ExtArgs>
    repas?: boolean | CanteenStudent$repasArgs<ExtArgs>
    parent?: boolean | ParentDefaultArgs<ExtArgs>
    enrolledStudent?: boolean | EnrolledStudentDefaultArgs<ExtArgs>
    _count?: boolean | CanteenStudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["canteenStudent"]>

  export type CanteenStudentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    enrolledStudentId?: boolean
    matriculeHashe?: boolean
    parentId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parent?: boolean | ParentDefaultArgs<ExtArgs>
    enrolledStudent?: boolean | EnrolledStudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["canteenStudent"]>

  export type CanteenStudentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    enrolledStudentId?: boolean
    matriculeHashe?: boolean
    parentId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parent?: boolean | ParentDefaultArgs<ExtArgs>
    enrolledStudent?: boolean | EnrolledStudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["canteenStudent"]>

  export type CanteenStudentSelectScalar = {
    id?: boolean
    enrolledStudentId?: boolean
    matriculeHashe?: boolean
    parentId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CanteenStudentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "enrolledStudentId" | "matriculeHashe" | "parentId" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["canteenStudent"]>
  export type CanteenStudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    abonnements?: boolean | CanteenStudent$abonnementsArgs<ExtArgs>
    notifications?: boolean | CanteenStudent$notificationsArgs<ExtArgs>
    repas?: boolean | CanteenStudent$repasArgs<ExtArgs>
    parent?: boolean | ParentDefaultArgs<ExtArgs>
    enrolledStudent?: boolean | EnrolledStudentDefaultArgs<ExtArgs>
    _count?: boolean | CanteenStudentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CanteenStudentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | ParentDefaultArgs<ExtArgs>
    enrolledStudent?: boolean | EnrolledStudentDefaultArgs<ExtArgs>
  }
  export type CanteenStudentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | ParentDefaultArgs<ExtArgs>
    enrolledStudent?: boolean | EnrolledStudentDefaultArgs<ExtArgs>
  }

  export type $CanteenStudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CanteenStudent"
    objects: {
      abonnements: Prisma.$AbonnementPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
      repas: Prisma.$RepasPayload<ExtArgs>[]
      parent: Prisma.$ParentPayload<ExtArgs>
      enrolledStudent: Prisma.$EnrolledStudentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      enrolledStudentId: string
      matriculeHashe: string
      parentId: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["canteenStudent"]>
    composites: {}
  }

  type CanteenStudentGetPayload<S extends boolean | null | undefined | CanteenStudentDefaultArgs> = $Result.GetResult<Prisma.$CanteenStudentPayload, S>

  type CanteenStudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CanteenStudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CanteenStudentCountAggregateInputType | true
    }

  export interface CanteenStudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CanteenStudent'], meta: { name: 'CanteenStudent' } }
    /**
     * Find zero or one CanteenStudent that matches the filter.
     * @param {CanteenStudentFindUniqueArgs} args - Arguments to find a CanteenStudent
     * @example
     * // Get one CanteenStudent
     * const canteenStudent = await prisma.canteenStudent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CanteenStudentFindUniqueArgs>(args: SelectSubset<T, CanteenStudentFindUniqueArgs<ExtArgs>>): Prisma__CanteenStudentClient<$Result.GetResult<Prisma.$CanteenStudentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CanteenStudent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CanteenStudentFindUniqueOrThrowArgs} args - Arguments to find a CanteenStudent
     * @example
     * // Get one CanteenStudent
     * const canteenStudent = await prisma.canteenStudent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CanteenStudentFindUniqueOrThrowArgs>(args: SelectSubset<T, CanteenStudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CanteenStudentClient<$Result.GetResult<Prisma.$CanteenStudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CanteenStudent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CanteenStudentFindFirstArgs} args - Arguments to find a CanteenStudent
     * @example
     * // Get one CanteenStudent
     * const canteenStudent = await prisma.canteenStudent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CanteenStudentFindFirstArgs>(args?: SelectSubset<T, CanteenStudentFindFirstArgs<ExtArgs>>): Prisma__CanteenStudentClient<$Result.GetResult<Prisma.$CanteenStudentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CanteenStudent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CanteenStudentFindFirstOrThrowArgs} args - Arguments to find a CanteenStudent
     * @example
     * // Get one CanteenStudent
     * const canteenStudent = await prisma.canteenStudent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CanteenStudentFindFirstOrThrowArgs>(args?: SelectSubset<T, CanteenStudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CanteenStudentClient<$Result.GetResult<Prisma.$CanteenStudentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CanteenStudents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CanteenStudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CanteenStudents
     * const canteenStudents = await prisma.canteenStudent.findMany()
     * 
     * // Get first 10 CanteenStudents
     * const canteenStudents = await prisma.canteenStudent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const canteenStudentWithIdOnly = await prisma.canteenStudent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CanteenStudentFindManyArgs>(args?: SelectSubset<T, CanteenStudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CanteenStudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CanteenStudent.
     * @param {CanteenStudentCreateArgs} args - Arguments to create a CanteenStudent.
     * @example
     * // Create one CanteenStudent
     * const CanteenStudent = await prisma.canteenStudent.create({
     *   data: {
     *     // ... data to create a CanteenStudent
     *   }
     * })
     * 
     */
    create<T extends CanteenStudentCreateArgs>(args: SelectSubset<T, CanteenStudentCreateArgs<ExtArgs>>): Prisma__CanteenStudentClient<$Result.GetResult<Prisma.$CanteenStudentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CanteenStudents.
     * @param {CanteenStudentCreateManyArgs} args - Arguments to create many CanteenStudents.
     * @example
     * // Create many CanteenStudents
     * const canteenStudent = await prisma.canteenStudent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CanteenStudentCreateManyArgs>(args?: SelectSubset<T, CanteenStudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CanteenStudents and returns the data saved in the database.
     * @param {CanteenStudentCreateManyAndReturnArgs} args - Arguments to create many CanteenStudents.
     * @example
     * // Create many CanteenStudents
     * const canteenStudent = await prisma.canteenStudent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CanteenStudents and only return the `id`
     * const canteenStudentWithIdOnly = await prisma.canteenStudent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CanteenStudentCreateManyAndReturnArgs>(args?: SelectSubset<T, CanteenStudentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CanteenStudentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CanteenStudent.
     * @param {CanteenStudentDeleteArgs} args - Arguments to delete one CanteenStudent.
     * @example
     * // Delete one CanteenStudent
     * const CanteenStudent = await prisma.canteenStudent.delete({
     *   where: {
     *     // ... filter to delete one CanteenStudent
     *   }
     * })
     * 
     */
    delete<T extends CanteenStudentDeleteArgs>(args: SelectSubset<T, CanteenStudentDeleteArgs<ExtArgs>>): Prisma__CanteenStudentClient<$Result.GetResult<Prisma.$CanteenStudentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CanteenStudent.
     * @param {CanteenStudentUpdateArgs} args - Arguments to update one CanteenStudent.
     * @example
     * // Update one CanteenStudent
     * const canteenStudent = await prisma.canteenStudent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CanteenStudentUpdateArgs>(args: SelectSubset<T, CanteenStudentUpdateArgs<ExtArgs>>): Prisma__CanteenStudentClient<$Result.GetResult<Prisma.$CanteenStudentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CanteenStudents.
     * @param {CanteenStudentDeleteManyArgs} args - Arguments to filter CanteenStudents to delete.
     * @example
     * // Delete a few CanteenStudents
     * const { count } = await prisma.canteenStudent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CanteenStudentDeleteManyArgs>(args?: SelectSubset<T, CanteenStudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CanteenStudents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CanteenStudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CanteenStudents
     * const canteenStudent = await prisma.canteenStudent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CanteenStudentUpdateManyArgs>(args: SelectSubset<T, CanteenStudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CanteenStudents and returns the data updated in the database.
     * @param {CanteenStudentUpdateManyAndReturnArgs} args - Arguments to update many CanteenStudents.
     * @example
     * // Update many CanteenStudents
     * const canteenStudent = await prisma.canteenStudent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CanteenStudents and only return the `id`
     * const canteenStudentWithIdOnly = await prisma.canteenStudent.updateManyAndReturn({
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
    updateManyAndReturn<T extends CanteenStudentUpdateManyAndReturnArgs>(args: SelectSubset<T, CanteenStudentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CanteenStudentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CanteenStudent.
     * @param {CanteenStudentUpsertArgs} args - Arguments to update or create a CanteenStudent.
     * @example
     * // Update or create a CanteenStudent
     * const canteenStudent = await prisma.canteenStudent.upsert({
     *   create: {
     *     // ... data to create a CanteenStudent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CanteenStudent we want to update
     *   }
     * })
     */
    upsert<T extends CanteenStudentUpsertArgs>(args: SelectSubset<T, CanteenStudentUpsertArgs<ExtArgs>>): Prisma__CanteenStudentClient<$Result.GetResult<Prisma.$CanteenStudentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CanteenStudents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CanteenStudentCountArgs} args - Arguments to filter CanteenStudents to count.
     * @example
     * // Count the number of CanteenStudents
     * const count = await prisma.canteenStudent.count({
     *   where: {
     *     // ... the filter for the CanteenStudents we want to count
     *   }
     * })
    **/
    count<T extends CanteenStudentCountArgs>(
      args?: Subset<T, CanteenStudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CanteenStudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CanteenStudent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CanteenStudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CanteenStudentAggregateArgs>(args: Subset<T, CanteenStudentAggregateArgs>): Prisma.PrismaPromise<GetCanteenStudentAggregateType<T>>

    /**
     * Group by CanteenStudent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CanteenStudentGroupByArgs} args - Group by arguments.
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
      T extends CanteenStudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CanteenStudentGroupByArgs['orderBy'] }
        : { orderBy?: CanteenStudentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CanteenStudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCanteenStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CanteenStudent model
   */
  readonly fields: CanteenStudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CanteenStudent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CanteenStudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    abonnements<T extends CanteenStudent$abonnementsArgs<ExtArgs> = {}>(args?: Subset<T, CanteenStudent$abonnementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbonnementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends CanteenStudent$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, CanteenStudent$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    repas<T extends CanteenStudent$repasArgs<ExtArgs> = {}>(args?: Subset<T, CanteenStudent$repasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    parent<T extends ParentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParentDefaultArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    enrolledStudent<T extends EnrolledStudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EnrolledStudentDefaultArgs<ExtArgs>>): Prisma__EnrolledStudentClient<$Result.GetResult<Prisma.$EnrolledStudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CanteenStudent model
   */
  interface CanteenStudentFieldRefs {
    readonly id: FieldRef<"CanteenStudent", 'String'>
    readonly enrolledStudentId: FieldRef<"CanteenStudent", 'String'>
    readonly matriculeHashe: FieldRef<"CanteenStudent", 'String'>
    readonly parentId: FieldRef<"CanteenStudent", 'String'>
    readonly isActive: FieldRef<"CanteenStudent", 'Boolean'>
    readonly createdAt: FieldRef<"CanteenStudent", 'DateTime'>
    readonly updatedAt: FieldRef<"CanteenStudent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CanteenStudent findUnique
   */
  export type CanteenStudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CanteenStudent
     */
    select?: CanteenStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CanteenStudent
     */
    omit?: CanteenStudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CanteenStudentInclude<ExtArgs> | null
    /**
     * Filter, which CanteenStudent to fetch.
     */
    where: CanteenStudentWhereUniqueInput
  }

  /**
   * CanteenStudent findUniqueOrThrow
   */
  export type CanteenStudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CanteenStudent
     */
    select?: CanteenStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CanteenStudent
     */
    omit?: CanteenStudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CanteenStudentInclude<ExtArgs> | null
    /**
     * Filter, which CanteenStudent to fetch.
     */
    where: CanteenStudentWhereUniqueInput
  }

  /**
   * CanteenStudent findFirst
   */
  export type CanteenStudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CanteenStudent
     */
    select?: CanteenStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CanteenStudent
     */
    omit?: CanteenStudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CanteenStudentInclude<ExtArgs> | null
    /**
     * Filter, which CanteenStudent to fetch.
     */
    where?: CanteenStudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CanteenStudents to fetch.
     */
    orderBy?: CanteenStudentOrderByWithRelationInput | CanteenStudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CanteenStudents.
     */
    cursor?: CanteenStudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CanteenStudents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CanteenStudents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CanteenStudents.
     */
    distinct?: CanteenStudentScalarFieldEnum | CanteenStudentScalarFieldEnum[]
  }

  /**
   * CanteenStudent findFirstOrThrow
   */
  export type CanteenStudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CanteenStudent
     */
    select?: CanteenStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CanteenStudent
     */
    omit?: CanteenStudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CanteenStudentInclude<ExtArgs> | null
    /**
     * Filter, which CanteenStudent to fetch.
     */
    where?: CanteenStudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CanteenStudents to fetch.
     */
    orderBy?: CanteenStudentOrderByWithRelationInput | CanteenStudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CanteenStudents.
     */
    cursor?: CanteenStudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CanteenStudents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CanteenStudents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CanteenStudents.
     */
    distinct?: CanteenStudentScalarFieldEnum | CanteenStudentScalarFieldEnum[]
  }

  /**
   * CanteenStudent findMany
   */
  export type CanteenStudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CanteenStudent
     */
    select?: CanteenStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CanteenStudent
     */
    omit?: CanteenStudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CanteenStudentInclude<ExtArgs> | null
    /**
     * Filter, which CanteenStudents to fetch.
     */
    where?: CanteenStudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CanteenStudents to fetch.
     */
    orderBy?: CanteenStudentOrderByWithRelationInput | CanteenStudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CanteenStudents.
     */
    cursor?: CanteenStudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CanteenStudents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CanteenStudents.
     */
    skip?: number
    distinct?: CanteenStudentScalarFieldEnum | CanteenStudentScalarFieldEnum[]
  }

  /**
   * CanteenStudent create
   */
  export type CanteenStudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CanteenStudent
     */
    select?: CanteenStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CanteenStudent
     */
    omit?: CanteenStudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CanteenStudentInclude<ExtArgs> | null
    /**
     * The data needed to create a CanteenStudent.
     */
    data: XOR<CanteenStudentCreateInput, CanteenStudentUncheckedCreateInput>
  }

  /**
   * CanteenStudent createMany
   */
  export type CanteenStudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CanteenStudents.
     */
    data: CanteenStudentCreateManyInput | CanteenStudentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CanteenStudent createManyAndReturn
   */
  export type CanteenStudentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CanteenStudent
     */
    select?: CanteenStudentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CanteenStudent
     */
    omit?: CanteenStudentOmit<ExtArgs> | null
    /**
     * The data used to create many CanteenStudents.
     */
    data: CanteenStudentCreateManyInput | CanteenStudentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CanteenStudentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CanteenStudent update
   */
  export type CanteenStudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CanteenStudent
     */
    select?: CanteenStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CanteenStudent
     */
    omit?: CanteenStudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CanteenStudentInclude<ExtArgs> | null
    /**
     * The data needed to update a CanteenStudent.
     */
    data: XOR<CanteenStudentUpdateInput, CanteenStudentUncheckedUpdateInput>
    /**
     * Choose, which CanteenStudent to update.
     */
    where: CanteenStudentWhereUniqueInput
  }

  /**
   * CanteenStudent updateMany
   */
  export type CanteenStudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CanteenStudents.
     */
    data: XOR<CanteenStudentUpdateManyMutationInput, CanteenStudentUncheckedUpdateManyInput>
    /**
     * Filter which CanteenStudents to update
     */
    where?: CanteenStudentWhereInput
    /**
     * Limit how many CanteenStudents to update.
     */
    limit?: number
  }

  /**
   * CanteenStudent updateManyAndReturn
   */
  export type CanteenStudentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CanteenStudent
     */
    select?: CanteenStudentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CanteenStudent
     */
    omit?: CanteenStudentOmit<ExtArgs> | null
    /**
     * The data used to update CanteenStudents.
     */
    data: XOR<CanteenStudentUpdateManyMutationInput, CanteenStudentUncheckedUpdateManyInput>
    /**
     * Filter which CanteenStudents to update
     */
    where?: CanteenStudentWhereInput
    /**
     * Limit how many CanteenStudents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CanteenStudentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CanteenStudent upsert
   */
  export type CanteenStudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CanteenStudent
     */
    select?: CanteenStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CanteenStudent
     */
    omit?: CanteenStudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CanteenStudentInclude<ExtArgs> | null
    /**
     * The filter to search for the CanteenStudent to update in case it exists.
     */
    where: CanteenStudentWhereUniqueInput
    /**
     * In case the CanteenStudent found by the `where` argument doesn't exist, create a new CanteenStudent with this data.
     */
    create: XOR<CanteenStudentCreateInput, CanteenStudentUncheckedCreateInput>
    /**
     * In case the CanteenStudent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CanteenStudentUpdateInput, CanteenStudentUncheckedUpdateInput>
  }

  /**
   * CanteenStudent delete
   */
  export type CanteenStudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CanteenStudent
     */
    select?: CanteenStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CanteenStudent
     */
    omit?: CanteenStudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CanteenStudentInclude<ExtArgs> | null
    /**
     * Filter which CanteenStudent to delete.
     */
    where: CanteenStudentWhereUniqueInput
  }

  /**
   * CanteenStudent deleteMany
   */
  export type CanteenStudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CanteenStudents to delete
     */
    where?: CanteenStudentWhereInput
    /**
     * Limit how many CanteenStudents to delete.
     */
    limit?: number
  }

  /**
   * CanteenStudent.abonnements
   */
  export type CanteenStudent$abonnementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Abonnement
     */
    select?: AbonnementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Abonnement
     */
    omit?: AbonnementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbonnementInclude<ExtArgs> | null
    where?: AbonnementWhereInput
    orderBy?: AbonnementOrderByWithRelationInput | AbonnementOrderByWithRelationInput[]
    cursor?: AbonnementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AbonnementScalarFieldEnum | AbonnementScalarFieldEnum[]
  }

  /**
   * CanteenStudent.notifications
   */
  export type CanteenStudent$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * CanteenStudent.repas
   */
  export type CanteenStudent$repasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repas
     */
    select?: RepasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repas
     */
    omit?: RepasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepasInclude<ExtArgs> | null
    where?: RepasWhereInput
    orderBy?: RepasOrderByWithRelationInput | RepasOrderByWithRelationInput[]
    cursor?: RepasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RepasScalarFieldEnum | RepasScalarFieldEnum[]
  }

  /**
   * CanteenStudent without action
   */
  export type CanteenStudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CanteenStudent
     */
    select?: CanteenStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CanteenStudent
     */
    omit?: CanteenStudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CanteenStudentInclude<ExtArgs> | null
  }


  /**
   * Model Abonnement
   */

  export type AggregateAbonnement = {
    _count: AbonnementCountAggregateOutputType | null
    _avg: AbonnementAvgAggregateOutputType | null
    _sum: AbonnementSumAggregateOutputType | null
    _min: AbonnementMinAggregateOutputType | null
    _max: AbonnementMaxAggregateOutputType | null
  }

  export type AbonnementAvgAggregateOutputType = {
    duration: number | null
    price: number | null
    id: number | null
  }

  export type AbonnementSumAggregateOutputType = {
    duration: number | null
    price: number | null
    id: number | null
  }

  export type AbonnementMinAggregateOutputType = {
    duration: number | null
    price: number | null
    startDate: Date | null
    endDate: Date | null
    status: $Enums.StatusSubscription | null
    type: string | null
    createdAt: Date | null
    updatedAt: Date | null
    canteenStudentId: string | null
    id: number | null
  }

  export type AbonnementMaxAggregateOutputType = {
    duration: number | null
    price: number | null
    startDate: Date | null
    endDate: Date | null
    status: $Enums.StatusSubscription | null
    type: string | null
    createdAt: Date | null
    updatedAt: Date | null
    canteenStudentId: string | null
    id: number | null
  }

  export type AbonnementCountAggregateOutputType = {
    duration: number
    price: number
    startDate: number
    endDate: number
    status: number
    type: number
    createdAt: number
    updatedAt: number
    canteenStudentId: number
    id: number
    _all: number
  }


  export type AbonnementAvgAggregateInputType = {
    duration?: true
    price?: true
    id?: true
  }

  export type AbonnementSumAggregateInputType = {
    duration?: true
    price?: true
    id?: true
  }

  export type AbonnementMinAggregateInputType = {
    duration?: true
    price?: true
    startDate?: true
    endDate?: true
    status?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    canteenStudentId?: true
    id?: true
  }

  export type AbonnementMaxAggregateInputType = {
    duration?: true
    price?: true
    startDate?: true
    endDate?: true
    status?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    canteenStudentId?: true
    id?: true
  }

  export type AbonnementCountAggregateInputType = {
    duration?: true
    price?: true
    startDate?: true
    endDate?: true
    status?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    canteenStudentId?: true
    id?: true
    _all?: true
  }

  export type AbonnementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Abonnement to aggregate.
     */
    where?: AbonnementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Abonnements to fetch.
     */
    orderBy?: AbonnementOrderByWithRelationInput | AbonnementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AbonnementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Abonnements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Abonnements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Abonnements
    **/
    _count?: true | AbonnementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AbonnementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AbonnementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AbonnementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AbonnementMaxAggregateInputType
  }

  export type GetAbonnementAggregateType<T extends AbonnementAggregateArgs> = {
        [P in keyof T & keyof AggregateAbonnement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAbonnement[P]>
      : GetScalarType<T[P], AggregateAbonnement[P]>
  }




  export type AbonnementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AbonnementWhereInput
    orderBy?: AbonnementOrderByWithAggregationInput | AbonnementOrderByWithAggregationInput[]
    by: AbonnementScalarFieldEnum[] | AbonnementScalarFieldEnum
    having?: AbonnementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AbonnementCountAggregateInputType | true
    _avg?: AbonnementAvgAggregateInputType
    _sum?: AbonnementSumAggregateInputType
    _min?: AbonnementMinAggregateInputType
    _max?: AbonnementMaxAggregateInputType
  }

  export type AbonnementGroupByOutputType = {
    duration: number | null
    price: number | null
    startDate: Date | null
    endDate: Date | null
    status: $Enums.StatusSubscription | null
    type: string | null
    createdAt: Date
    updatedAt: Date
    canteenStudentId: string
    id: number
    _count: AbonnementCountAggregateOutputType | null
    _avg: AbonnementAvgAggregateOutputType | null
    _sum: AbonnementSumAggregateOutputType | null
    _min: AbonnementMinAggregateOutputType | null
    _max: AbonnementMaxAggregateOutputType | null
  }

  type GetAbonnementGroupByPayload<T extends AbonnementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AbonnementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AbonnementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AbonnementGroupByOutputType[P]>
            : GetScalarType<T[P], AbonnementGroupByOutputType[P]>
        }
      >
    >


  export type AbonnementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    duration?: boolean
    price?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    canteenStudentId?: boolean
    id?: boolean
    canteenStudent?: boolean | CanteenStudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["abonnement"]>

  export type AbonnementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    duration?: boolean
    price?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    canteenStudentId?: boolean
    id?: boolean
    canteenStudent?: boolean | CanteenStudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["abonnement"]>

  export type AbonnementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    duration?: boolean
    price?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    canteenStudentId?: boolean
    id?: boolean
    canteenStudent?: boolean | CanteenStudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["abonnement"]>

  export type AbonnementSelectScalar = {
    duration?: boolean
    price?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    canteenStudentId?: boolean
    id?: boolean
  }

  export type AbonnementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"duration" | "price" | "startDate" | "endDate" | "status" | "type" | "createdAt" | "updatedAt" | "canteenStudentId" | "id", ExtArgs["result"]["abonnement"]>
  export type AbonnementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    canteenStudent?: boolean | CanteenStudentDefaultArgs<ExtArgs>
  }
  export type AbonnementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    canteenStudent?: boolean | CanteenStudentDefaultArgs<ExtArgs>
  }
  export type AbonnementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    canteenStudent?: boolean | CanteenStudentDefaultArgs<ExtArgs>
  }

  export type $AbonnementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Abonnement"
    objects: {
      canteenStudent: Prisma.$CanteenStudentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      duration: number | null
      price: number | null
      startDate: Date | null
      endDate: Date | null
      status: $Enums.StatusSubscription | null
      type: string | null
      createdAt: Date
      updatedAt: Date
      canteenStudentId: string
      id: number
    }, ExtArgs["result"]["abonnement"]>
    composites: {}
  }

  type AbonnementGetPayload<S extends boolean | null | undefined | AbonnementDefaultArgs> = $Result.GetResult<Prisma.$AbonnementPayload, S>

  type AbonnementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AbonnementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AbonnementCountAggregateInputType | true
    }

  export interface AbonnementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Abonnement'], meta: { name: 'Abonnement' } }
    /**
     * Find zero or one Abonnement that matches the filter.
     * @param {AbonnementFindUniqueArgs} args - Arguments to find a Abonnement
     * @example
     * // Get one Abonnement
     * const abonnement = await prisma.abonnement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AbonnementFindUniqueArgs>(args: SelectSubset<T, AbonnementFindUniqueArgs<ExtArgs>>): Prisma__AbonnementClient<$Result.GetResult<Prisma.$AbonnementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Abonnement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AbonnementFindUniqueOrThrowArgs} args - Arguments to find a Abonnement
     * @example
     * // Get one Abonnement
     * const abonnement = await prisma.abonnement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AbonnementFindUniqueOrThrowArgs>(args: SelectSubset<T, AbonnementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AbonnementClient<$Result.GetResult<Prisma.$AbonnementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Abonnement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbonnementFindFirstArgs} args - Arguments to find a Abonnement
     * @example
     * // Get one Abonnement
     * const abonnement = await prisma.abonnement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AbonnementFindFirstArgs>(args?: SelectSubset<T, AbonnementFindFirstArgs<ExtArgs>>): Prisma__AbonnementClient<$Result.GetResult<Prisma.$AbonnementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Abonnement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbonnementFindFirstOrThrowArgs} args - Arguments to find a Abonnement
     * @example
     * // Get one Abonnement
     * const abonnement = await prisma.abonnement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AbonnementFindFirstOrThrowArgs>(args?: SelectSubset<T, AbonnementFindFirstOrThrowArgs<ExtArgs>>): Prisma__AbonnementClient<$Result.GetResult<Prisma.$AbonnementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Abonnements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbonnementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Abonnements
     * const abonnements = await prisma.abonnement.findMany()
     * 
     * // Get first 10 Abonnements
     * const abonnements = await prisma.abonnement.findMany({ take: 10 })
     * 
     * // Only select the `duration`
     * const abonnementWithDurationOnly = await prisma.abonnement.findMany({ select: { duration: true } })
     * 
     */
    findMany<T extends AbonnementFindManyArgs>(args?: SelectSubset<T, AbonnementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbonnementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Abonnement.
     * @param {AbonnementCreateArgs} args - Arguments to create a Abonnement.
     * @example
     * // Create one Abonnement
     * const Abonnement = await prisma.abonnement.create({
     *   data: {
     *     // ... data to create a Abonnement
     *   }
     * })
     * 
     */
    create<T extends AbonnementCreateArgs>(args: SelectSubset<T, AbonnementCreateArgs<ExtArgs>>): Prisma__AbonnementClient<$Result.GetResult<Prisma.$AbonnementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Abonnements.
     * @param {AbonnementCreateManyArgs} args - Arguments to create many Abonnements.
     * @example
     * // Create many Abonnements
     * const abonnement = await prisma.abonnement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AbonnementCreateManyArgs>(args?: SelectSubset<T, AbonnementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Abonnements and returns the data saved in the database.
     * @param {AbonnementCreateManyAndReturnArgs} args - Arguments to create many Abonnements.
     * @example
     * // Create many Abonnements
     * const abonnement = await prisma.abonnement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Abonnements and only return the `duration`
     * const abonnementWithDurationOnly = await prisma.abonnement.createManyAndReturn({
     *   select: { duration: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AbonnementCreateManyAndReturnArgs>(args?: SelectSubset<T, AbonnementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbonnementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Abonnement.
     * @param {AbonnementDeleteArgs} args - Arguments to delete one Abonnement.
     * @example
     * // Delete one Abonnement
     * const Abonnement = await prisma.abonnement.delete({
     *   where: {
     *     // ... filter to delete one Abonnement
     *   }
     * })
     * 
     */
    delete<T extends AbonnementDeleteArgs>(args: SelectSubset<T, AbonnementDeleteArgs<ExtArgs>>): Prisma__AbonnementClient<$Result.GetResult<Prisma.$AbonnementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Abonnement.
     * @param {AbonnementUpdateArgs} args - Arguments to update one Abonnement.
     * @example
     * // Update one Abonnement
     * const abonnement = await prisma.abonnement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AbonnementUpdateArgs>(args: SelectSubset<T, AbonnementUpdateArgs<ExtArgs>>): Prisma__AbonnementClient<$Result.GetResult<Prisma.$AbonnementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Abonnements.
     * @param {AbonnementDeleteManyArgs} args - Arguments to filter Abonnements to delete.
     * @example
     * // Delete a few Abonnements
     * const { count } = await prisma.abonnement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AbonnementDeleteManyArgs>(args?: SelectSubset<T, AbonnementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Abonnements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbonnementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Abonnements
     * const abonnement = await prisma.abonnement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AbonnementUpdateManyArgs>(args: SelectSubset<T, AbonnementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Abonnements and returns the data updated in the database.
     * @param {AbonnementUpdateManyAndReturnArgs} args - Arguments to update many Abonnements.
     * @example
     * // Update many Abonnements
     * const abonnement = await prisma.abonnement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Abonnements and only return the `duration`
     * const abonnementWithDurationOnly = await prisma.abonnement.updateManyAndReturn({
     *   select: { duration: true },
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
    updateManyAndReturn<T extends AbonnementUpdateManyAndReturnArgs>(args: SelectSubset<T, AbonnementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbonnementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Abonnement.
     * @param {AbonnementUpsertArgs} args - Arguments to update or create a Abonnement.
     * @example
     * // Update or create a Abonnement
     * const abonnement = await prisma.abonnement.upsert({
     *   create: {
     *     // ... data to create a Abonnement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Abonnement we want to update
     *   }
     * })
     */
    upsert<T extends AbonnementUpsertArgs>(args: SelectSubset<T, AbonnementUpsertArgs<ExtArgs>>): Prisma__AbonnementClient<$Result.GetResult<Prisma.$AbonnementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Abonnements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbonnementCountArgs} args - Arguments to filter Abonnements to count.
     * @example
     * // Count the number of Abonnements
     * const count = await prisma.abonnement.count({
     *   where: {
     *     // ... the filter for the Abonnements we want to count
     *   }
     * })
    **/
    count<T extends AbonnementCountArgs>(
      args?: Subset<T, AbonnementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AbonnementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Abonnement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbonnementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AbonnementAggregateArgs>(args: Subset<T, AbonnementAggregateArgs>): Prisma.PrismaPromise<GetAbonnementAggregateType<T>>

    /**
     * Group by Abonnement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbonnementGroupByArgs} args - Group by arguments.
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
      T extends AbonnementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AbonnementGroupByArgs['orderBy'] }
        : { orderBy?: AbonnementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AbonnementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAbonnementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Abonnement model
   */
  readonly fields: AbonnementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Abonnement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AbonnementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    canteenStudent<T extends CanteenStudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CanteenStudentDefaultArgs<ExtArgs>>): Prisma__CanteenStudentClient<$Result.GetResult<Prisma.$CanteenStudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Abonnement model
   */
  interface AbonnementFieldRefs {
    readonly duration: FieldRef<"Abonnement", 'Int'>
    readonly price: FieldRef<"Abonnement", 'Float'>
    readonly startDate: FieldRef<"Abonnement", 'DateTime'>
    readonly endDate: FieldRef<"Abonnement", 'DateTime'>
    readonly status: FieldRef<"Abonnement", 'StatusSubscription'>
    readonly type: FieldRef<"Abonnement", 'String'>
    readonly createdAt: FieldRef<"Abonnement", 'DateTime'>
    readonly updatedAt: FieldRef<"Abonnement", 'DateTime'>
    readonly canteenStudentId: FieldRef<"Abonnement", 'String'>
    readonly id: FieldRef<"Abonnement", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Abonnement findUnique
   */
  export type AbonnementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Abonnement
     */
    select?: AbonnementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Abonnement
     */
    omit?: AbonnementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbonnementInclude<ExtArgs> | null
    /**
     * Filter, which Abonnement to fetch.
     */
    where: AbonnementWhereUniqueInput
  }

  /**
   * Abonnement findUniqueOrThrow
   */
  export type AbonnementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Abonnement
     */
    select?: AbonnementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Abonnement
     */
    omit?: AbonnementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbonnementInclude<ExtArgs> | null
    /**
     * Filter, which Abonnement to fetch.
     */
    where: AbonnementWhereUniqueInput
  }

  /**
   * Abonnement findFirst
   */
  export type AbonnementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Abonnement
     */
    select?: AbonnementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Abonnement
     */
    omit?: AbonnementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbonnementInclude<ExtArgs> | null
    /**
     * Filter, which Abonnement to fetch.
     */
    where?: AbonnementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Abonnements to fetch.
     */
    orderBy?: AbonnementOrderByWithRelationInput | AbonnementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Abonnements.
     */
    cursor?: AbonnementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Abonnements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Abonnements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Abonnements.
     */
    distinct?: AbonnementScalarFieldEnum | AbonnementScalarFieldEnum[]
  }

  /**
   * Abonnement findFirstOrThrow
   */
  export type AbonnementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Abonnement
     */
    select?: AbonnementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Abonnement
     */
    omit?: AbonnementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbonnementInclude<ExtArgs> | null
    /**
     * Filter, which Abonnement to fetch.
     */
    where?: AbonnementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Abonnements to fetch.
     */
    orderBy?: AbonnementOrderByWithRelationInput | AbonnementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Abonnements.
     */
    cursor?: AbonnementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Abonnements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Abonnements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Abonnements.
     */
    distinct?: AbonnementScalarFieldEnum | AbonnementScalarFieldEnum[]
  }

  /**
   * Abonnement findMany
   */
  export type AbonnementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Abonnement
     */
    select?: AbonnementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Abonnement
     */
    omit?: AbonnementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbonnementInclude<ExtArgs> | null
    /**
     * Filter, which Abonnements to fetch.
     */
    where?: AbonnementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Abonnements to fetch.
     */
    orderBy?: AbonnementOrderByWithRelationInput | AbonnementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Abonnements.
     */
    cursor?: AbonnementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Abonnements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Abonnements.
     */
    skip?: number
    distinct?: AbonnementScalarFieldEnum | AbonnementScalarFieldEnum[]
  }

  /**
   * Abonnement create
   */
  export type AbonnementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Abonnement
     */
    select?: AbonnementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Abonnement
     */
    omit?: AbonnementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbonnementInclude<ExtArgs> | null
    /**
     * The data needed to create a Abonnement.
     */
    data: XOR<AbonnementCreateInput, AbonnementUncheckedCreateInput>
  }

  /**
   * Abonnement createMany
   */
  export type AbonnementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Abonnements.
     */
    data: AbonnementCreateManyInput | AbonnementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Abonnement createManyAndReturn
   */
  export type AbonnementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Abonnement
     */
    select?: AbonnementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Abonnement
     */
    omit?: AbonnementOmit<ExtArgs> | null
    /**
     * The data used to create many Abonnements.
     */
    data: AbonnementCreateManyInput | AbonnementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbonnementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Abonnement update
   */
  export type AbonnementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Abonnement
     */
    select?: AbonnementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Abonnement
     */
    omit?: AbonnementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbonnementInclude<ExtArgs> | null
    /**
     * The data needed to update a Abonnement.
     */
    data: XOR<AbonnementUpdateInput, AbonnementUncheckedUpdateInput>
    /**
     * Choose, which Abonnement to update.
     */
    where: AbonnementWhereUniqueInput
  }

  /**
   * Abonnement updateMany
   */
  export type AbonnementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Abonnements.
     */
    data: XOR<AbonnementUpdateManyMutationInput, AbonnementUncheckedUpdateManyInput>
    /**
     * Filter which Abonnements to update
     */
    where?: AbonnementWhereInput
    /**
     * Limit how many Abonnements to update.
     */
    limit?: number
  }

  /**
   * Abonnement updateManyAndReturn
   */
  export type AbonnementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Abonnement
     */
    select?: AbonnementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Abonnement
     */
    omit?: AbonnementOmit<ExtArgs> | null
    /**
     * The data used to update Abonnements.
     */
    data: XOR<AbonnementUpdateManyMutationInput, AbonnementUncheckedUpdateManyInput>
    /**
     * Filter which Abonnements to update
     */
    where?: AbonnementWhereInput
    /**
     * Limit how many Abonnements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbonnementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Abonnement upsert
   */
  export type AbonnementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Abonnement
     */
    select?: AbonnementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Abonnement
     */
    omit?: AbonnementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbonnementInclude<ExtArgs> | null
    /**
     * The filter to search for the Abonnement to update in case it exists.
     */
    where: AbonnementWhereUniqueInput
    /**
     * In case the Abonnement found by the `where` argument doesn't exist, create a new Abonnement with this data.
     */
    create: XOR<AbonnementCreateInput, AbonnementUncheckedCreateInput>
    /**
     * In case the Abonnement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AbonnementUpdateInput, AbonnementUncheckedUpdateInput>
  }

  /**
   * Abonnement delete
   */
  export type AbonnementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Abonnement
     */
    select?: AbonnementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Abonnement
     */
    omit?: AbonnementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbonnementInclude<ExtArgs> | null
    /**
     * Filter which Abonnement to delete.
     */
    where: AbonnementWhereUniqueInput
  }

  /**
   * Abonnement deleteMany
   */
  export type AbonnementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Abonnements to delete
     */
    where?: AbonnementWhereInput
    /**
     * Limit how many Abonnements to delete.
     */
    limit?: number
  }

  /**
   * Abonnement without action
   */
  export type AbonnementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Abonnement
     */
    select?: AbonnementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Abonnement
     */
    omit?: AbonnementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbonnementInclude<ExtArgs> | null
  }


  /**
   * Model Repas
   */

  export type AggregateRepas = {
    _count: RepasCountAggregateOutputType | null
    _avg: RepasAvgAggregateOutputType | null
    _sum: RepasSumAggregateOutputType | null
    _min: RepasMinAggregateOutputType | null
    _max: RepasMaxAggregateOutputType | null
  }

  export type RepasAvgAggregateOutputType = {
    id: number | null
  }

  export type RepasSumAggregateOutputType = {
    id: number | null
  }

  export type RepasMinAggregateOutputType = {
    id: number | null
    canteenStudentId: string | null
    date: Date | null
    status: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RepasMaxAggregateOutputType = {
    id: number | null
    canteenStudentId: string | null
    date: Date | null
    status: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RepasCountAggregateOutputType = {
    id: number
    canteenStudentId: number
    date: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RepasAvgAggregateInputType = {
    id?: true
  }

  export type RepasSumAggregateInputType = {
    id?: true
  }

  export type RepasMinAggregateInputType = {
    id?: true
    canteenStudentId?: true
    date?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RepasMaxAggregateInputType = {
    id?: true
    canteenStudentId?: true
    date?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RepasCountAggregateInputType = {
    id?: true
    canteenStudentId?: true
    date?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RepasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Repas to aggregate.
     */
    where?: RepasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Repas to fetch.
     */
    orderBy?: RepasOrderByWithRelationInput | RepasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RepasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Repas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Repas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Repas
    **/
    _count?: true | RepasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RepasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RepasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RepasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RepasMaxAggregateInputType
  }

  export type GetRepasAggregateType<T extends RepasAggregateArgs> = {
        [P in keyof T & keyof AggregateRepas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRepas[P]>
      : GetScalarType<T[P], AggregateRepas[P]>
  }




  export type RepasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RepasWhereInput
    orderBy?: RepasOrderByWithAggregationInput | RepasOrderByWithAggregationInput[]
    by: RepasScalarFieldEnum[] | RepasScalarFieldEnum
    having?: RepasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RepasCountAggregateInputType | true
    _avg?: RepasAvgAggregateInputType
    _sum?: RepasSumAggregateInputType
    _min?: RepasMinAggregateInputType
    _max?: RepasMaxAggregateInputType
  }

  export type RepasGroupByOutputType = {
    id: number
    canteenStudentId: string
    date: Date
    status: boolean | null
    createdAt: Date
    updatedAt: Date
    _count: RepasCountAggregateOutputType | null
    _avg: RepasAvgAggregateOutputType | null
    _sum: RepasSumAggregateOutputType | null
    _min: RepasMinAggregateOutputType | null
    _max: RepasMaxAggregateOutputType | null
  }

  type GetRepasGroupByPayload<T extends RepasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RepasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RepasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RepasGroupByOutputType[P]>
            : GetScalarType<T[P], RepasGroupByOutputType[P]>
        }
      >
    >


  export type RepasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    canteenStudentId?: boolean
    date?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | CanteenStudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["repas"]>

  export type RepasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    canteenStudentId?: boolean
    date?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | CanteenStudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["repas"]>

  export type RepasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    canteenStudentId?: boolean
    date?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | CanteenStudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["repas"]>

  export type RepasSelectScalar = {
    id?: boolean
    canteenStudentId?: boolean
    date?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RepasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "canteenStudentId" | "date" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["repas"]>
  export type RepasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | CanteenStudentDefaultArgs<ExtArgs>
  }
  export type RepasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | CanteenStudentDefaultArgs<ExtArgs>
  }
  export type RepasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | CanteenStudentDefaultArgs<ExtArgs>
  }

  export type $RepasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Repas"
    objects: {
      student: Prisma.$CanteenStudentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      canteenStudentId: string
      date: Date
      status: boolean | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["repas"]>
    composites: {}
  }

  type RepasGetPayload<S extends boolean | null | undefined | RepasDefaultArgs> = $Result.GetResult<Prisma.$RepasPayload, S>

  type RepasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RepasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RepasCountAggregateInputType | true
    }

  export interface RepasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Repas'], meta: { name: 'Repas' } }
    /**
     * Find zero or one Repas that matches the filter.
     * @param {RepasFindUniqueArgs} args - Arguments to find a Repas
     * @example
     * // Get one Repas
     * const repas = await prisma.repas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RepasFindUniqueArgs>(args: SelectSubset<T, RepasFindUniqueArgs<ExtArgs>>): Prisma__RepasClient<$Result.GetResult<Prisma.$RepasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Repas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RepasFindUniqueOrThrowArgs} args - Arguments to find a Repas
     * @example
     * // Get one Repas
     * const repas = await prisma.repas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RepasFindUniqueOrThrowArgs>(args: SelectSubset<T, RepasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RepasClient<$Result.GetResult<Prisma.$RepasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Repas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepasFindFirstArgs} args - Arguments to find a Repas
     * @example
     * // Get one Repas
     * const repas = await prisma.repas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RepasFindFirstArgs>(args?: SelectSubset<T, RepasFindFirstArgs<ExtArgs>>): Prisma__RepasClient<$Result.GetResult<Prisma.$RepasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Repas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepasFindFirstOrThrowArgs} args - Arguments to find a Repas
     * @example
     * // Get one Repas
     * const repas = await prisma.repas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RepasFindFirstOrThrowArgs>(args?: SelectSubset<T, RepasFindFirstOrThrowArgs<ExtArgs>>): Prisma__RepasClient<$Result.GetResult<Prisma.$RepasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Repas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Repas
     * const repas = await prisma.repas.findMany()
     * 
     * // Get first 10 Repas
     * const repas = await prisma.repas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const repasWithIdOnly = await prisma.repas.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RepasFindManyArgs>(args?: SelectSubset<T, RepasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Repas.
     * @param {RepasCreateArgs} args - Arguments to create a Repas.
     * @example
     * // Create one Repas
     * const Repas = await prisma.repas.create({
     *   data: {
     *     // ... data to create a Repas
     *   }
     * })
     * 
     */
    create<T extends RepasCreateArgs>(args: SelectSubset<T, RepasCreateArgs<ExtArgs>>): Prisma__RepasClient<$Result.GetResult<Prisma.$RepasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Repas.
     * @param {RepasCreateManyArgs} args - Arguments to create many Repas.
     * @example
     * // Create many Repas
     * const repas = await prisma.repas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RepasCreateManyArgs>(args?: SelectSubset<T, RepasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Repas and returns the data saved in the database.
     * @param {RepasCreateManyAndReturnArgs} args - Arguments to create many Repas.
     * @example
     * // Create many Repas
     * const repas = await prisma.repas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Repas and only return the `id`
     * const repasWithIdOnly = await prisma.repas.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RepasCreateManyAndReturnArgs>(args?: SelectSubset<T, RepasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Repas.
     * @param {RepasDeleteArgs} args - Arguments to delete one Repas.
     * @example
     * // Delete one Repas
     * const Repas = await prisma.repas.delete({
     *   where: {
     *     // ... filter to delete one Repas
     *   }
     * })
     * 
     */
    delete<T extends RepasDeleteArgs>(args: SelectSubset<T, RepasDeleteArgs<ExtArgs>>): Prisma__RepasClient<$Result.GetResult<Prisma.$RepasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Repas.
     * @param {RepasUpdateArgs} args - Arguments to update one Repas.
     * @example
     * // Update one Repas
     * const repas = await prisma.repas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RepasUpdateArgs>(args: SelectSubset<T, RepasUpdateArgs<ExtArgs>>): Prisma__RepasClient<$Result.GetResult<Prisma.$RepasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Repas.
     * @param {RepasDeleteManyArgs} args - Arguments to filter Repas to delete.
     * @example
     * // Delete a few Repas
     * const { count } = await prisma.repas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RepasDeleteManyArgs>(args?: SelectSubset<T, RepasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Repas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Repas
     * const repas = await prisma.repas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RepasUpdateManyArgs>(args: SelectSubset<T, RepasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Repas and returns the data updated in the database.
     * @param {RepasUpdateManyAndReturnArgs} args - Arguments to update many Repas.
     * @example
     * // Update many Repas
     * const repas = await prisma.repas.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Repas and only return the `id`
     * const repasWithIdOnly = await prisma.repas.updateManyAndReturn({
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
    updateManyAndReturn<T extends RepasUpdateManyAndReturnArgs>(args: SelectSubset<T, RepasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Repas.
     * @param {RepasUpsertArgs} args - Arguments to update or create a Repas.
     * @example
     * // Update or create a Repas
     * const repas = await prisma.repas.upsert({
     *   create: {
     *     // ... data to create a Repas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Repas we want to update
     *   }
     * })
     */
    upsert<T extends RepasUpsertArgs>(args: SelectSubset<T, RepasUpsertArgs<ExtArgs>>): Prisma__RepasClient<$Result.GetResult<Prisma.$RepasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Repas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepasCountArgs} args - Arguments to filter Repas to count.
     * @example
     * // Count the number of Repas
     * const count = await prisma.repas.count({
     *   where: {
     *     // ... the filter for the Repas we want to count
     *   }
     * })
    **/
    count<T extends RepasCountArgs>(
      args?: Subset<T, RepasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RepasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Repas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RepasAggregateArgs>(args: Subset<T, RepasAggregateArgs>): Prisma.PrismaPromise<GetRepasAggregateType<T>>

    /**
     * Group by Repas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepasGroupByArgs} args - Group by arguments.
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
      T extends RepasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RepasGroupByArgs['orderBy'] }
        : { orderBy?: RepasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RepasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRepasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Repas model
   */
  readonly fields: RepasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Repas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RepasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends CanteenStudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CanteenStudentDefaultArgs<ExtArgs>>): Prisma__CanteenStudentClient<$Result.GetResult<Prisma.$CanteenStudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Repas model
   */
  interface RepasFieldRefs {
    readonly id: FieldRef<"Repas", 'Int'>
    readonly canteenStudentId: FieldRef<"Repas", 'String'>
    readonly date: FieldRef<"Repas", 'DateTime'>
    readonly status: FieldRef<"Repas", 'Boolean'>
    readonly createdAt: FieldRef<"Repas", 'DateTime'>
    readonly updatedAt: FieldRef<"Repas", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Repas findUnique
   */
  export type RepasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repas
     */
    select?: RepasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repas
     */
    omit?: RepasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepasInclude<ExtArgs> | null
    /**
     * Filter, which Repas to fetch.
     */
    where: RepasWhereUniqueInput
  }

  /**
   * Repas findUniqueOrThrow
   */
  export type RepasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repas
     */
    select?: RepasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repas
     */
    omit?: RepasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepasInclude<ExtArgs> | null
    /**
     * Filter, which Repas to fetch.
     */
    where: RepasWhereUniqueInput
  }

  /**
   * Repas findFirst
   */
  export type RepasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repas
     */
    select?: RepasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repas
     */
    omit?: RepasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepasInclude<ExtArgs> | null
    /**
     * Filter, which Repas to fetch.
     */
    where?: RepasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Repas to fetch.
     */
    orderBy?: RepasOrderByWithRelationInput | RepasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Repas.
     */
    cursor?: RepasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Repas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Repas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Repas.
     */
    distinct?: RepasScalarFieldEnum | RepasScalarFieldEnum[]
  }

  /**
   * Repas findFirstOrThrow
   */
  export type RepasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repas
     */
    select?: RepasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repas
     */
    omit?: RepasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepasInclude<ExtArgs> | null
    /**
     * Filter, which Repas to fetch.
     */
    where?: RepasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Repas to fetch.
     */
    orderBy?: RepasOrderByWithRelationInput | RepasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Repas.
     */
    cursor?: RepasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Repas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Repas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Repas.
     */
    distinct?: RepasScalarFieldEnum | RepasScalarFieldEnum[]
  }

  /**
   * Repas findMany
   */
  export type RepasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repas
     */
    select?: RepasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repas
     */
    omit?: RepasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepasInclude<ExtArgs> | null
    /**
     * Filter, which Repas to fetch.
     */
    where?: RepasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Repas to fetch.
     */
    orderBy?: RepasOrderByWithRelationInput | RepasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Repas.
     */
    cursor?: RepasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Repas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Repas.
     */
    skip?: number
    distinct?: RepasScalarFieldEnum | RepasScalarFieldEnum[]
  }

  /**
   * Repas create
   */
  export type RepasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repas
     */
    select?: RepasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repas
     */
    omit?: RepasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepasInclude<ExtArgs> | null
    /**
     * The data needed to create a Repas.
     */
    data: XOR<RepasCreateInput, RepasUncheckedCreateInput>
  }

  /**
   * Repas createMany
   */
  export type RepasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Repas.
     */
    data: RepasCreateManyInput | RepasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Repas createManyAndReturn
   */
  export type RepasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repas
     */
    select?: RepasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Repas
     */
    omit?: RepasOmit<ExtArgs> | null
    /**
     * The data used to create many Repas.
     */
    data: RepasCreateManyInput | RepasCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepasIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Repas update
   */
  export type RepasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repas
     */
    select?: RepasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repas
     */
    omit?: RepasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepasInclude<ExtArgs> | null
    /**
     * The data needed to update a Repas.
     */
    data: XOR<RepasUpdateInput, RepasUncheckedUpdateInput>
    /**
     * Choose, which Repas to update.
     */
    where: RepasWhereUniqueInput
  }

  /**
   * Repas updateMany
   */
  export type RepasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Repas.
     */
    data: XOR<RepasUpdateManyMutationInput, RepasUncheckedUpdateManyInput>
    /**
     * Filter which Repas to update
     */
    where?: RepasWhereInput
    /**
     * Limit how many Repas to update.
     */
    limit?: number
  }

  /**
   * Repas updateManyAndReturn
   */
  export type RepasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repas
     */
    select?: RepasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Repas
     */
    omit?: RepasOmit<ExtArgs> | null
    /**
     * The data used to update Repas.
     */
    data: XOR<RepasUpdateManyMutationInput, RepasUncheckedUpdateManyInput>
    /**
     * Filter which Repas to update
     */
    where?: RepasWhereInput
    /**
     * Limit how many Repas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepasIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Repas upsert
   */
  export type RepasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repas
     */
    select?: RepasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repas
     */
    omit?: RepasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepasInclude<ExtArgs> | null
    /**
     * The filter to search for the Repas to update in case it exists.
     */
    where: RepasWhereUniqueInput
    /**
     * In case the Repas found by the `where` argument doesn't exist, create a new Repas with this data.
     */
    create: XOR<RepasCreateInput, RepasUncheckedCreateInput>
    /**
     * In case the Repas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RepasUpdateInput, RepasUncheckedUpdateInput>
  }

  /**
   * Repas delete
   */
  export type RepasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repas
     */
    select?: RepasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repas
     */
    omit?: RepasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepasInclude<ExtArgs> | null
    /**
     * Filter which Repas to delete.
     */
    where: RepasWhereUniqueInput
  }

  /**
   * Repas deleteMany
   */
  export type RepasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Repas to delete
     */
    where?: RepasWhereInput
    /**
     * Limit how many Repas to delete.
     */
    limit?: number
  }

  /**
   * Repas without action
   */
  export type RepasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repas
     */
    select?: RepasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repas
     */
    omit?: RepasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepasInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationAvgAggregateOutputType = {
    id: number | null
  }

  export type NotificationSumAggregateOutputType = {
    id: number | null
  }

  export type NotificationMinAggregateOutputType = {
    id: number | null
    canteenStudentId: string | null
    message: string | null
    read: boolean | null
    type: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: number | null
    canteenStudentId: string | null
    message: string | null
    read: boolean | null
    type: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    canteenStudentId: number
    message: number
    read: number
    type: number
    details: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NotificationAvgAggregateInputType = {
    id?: true
  }

  export type NotificationSumAggregateInputType = {
    id?: true
  }

  export type NotificationMinAggregateInputType = {
    id?: true
    canteenStudentId?: true
    message?: true
    read?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    canteenStudentId?: true
    message?: true
    read?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    canteenStudentId?: true
    message?: true
    read?: true
    type?: true
    details?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _avg?: NotificationAvgAggregateInputType
    _sum?: NotificationSumAggregateInputType
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: number
    canteenStudentId: string
    message: string
    read: boolean
    type: string
    details: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    canteenStudentId?: boolean
    message?: boolean
    read?: boolean
    type?: boolean
    details?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    canteenStudent?: boolean | CanteenStudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    canteenStudentId?: boolean
    message?: boolean
    read?: boolean
    type?: boolean
    details?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    canteenStudent?: boolean | CanteenStudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    canteenStudentId?: boolean
    message?: boolean
    read?: boolean
    type?: boolean
    details?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    canteenStudent?: boolean | CanteenStudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    canteenStudentId?: boolean
    message?: boolean
    read?: boolean
    type?: boolean
    details?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "canteenStudentId" | "message" | "read" | "type" | "details" | "createdAt" | "updatedAt", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    canteenStudent?: boolean | CanteenStudentDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    canteenStudent?: boolean | CanteenStudentDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    canteenStudent?: boolean | CanteenStudentDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      canteenStudent: Prisma.$CanteenStudentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      canteenStudentId: string
      message: string
      read: boolean
      type: string
      details: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
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
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
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
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    canteenStudent<T extends CanteenStudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CanteenStudentDefaultArgs<ExtArgs>>): Prisma__CanteenStudentClient<$Result.GetResult<Prisma.$CanteenStudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'Int'>
    readonly canteenStudentId: FieldRef<"Notification", 'String'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly read: FieldRef<"Notification", 'Boolean'>
    readonly type: FieldRef<"Notification", 'String'>
    readonly details: FieldRef<"Notification", 'Json'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
    readonly updatedAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    role: 'role',
    name: 'name',
    searchableName: 'searchableName',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ParentScalarFieldEnum: {
    id: 'id'
  };

  export type ParentScalarFieldEnum = (typeof ParentScalarFieldEnum)[keyof typeof ParentScalarFieldEnum]


  export const EnrolledStudentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    searchableName: 'searchableName',
    class: 'class',
    gender: 'gender',
    matricule: 'matricule',
    isRegisteredToCanteen: 'isRegisteredToCanteen',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EnrolledStudentScalarFieldEnum = (typeof EnrolledStudentScalarFieldEnum)[keyof typeof EnrolledStudentScalarFieldEnum]


  export const CanteenStudentScalarFieldEnum: {
    id: 'id',
    enrolledStudentId: 'enrolledStudentId',
    matriculeHashe: 'matriculeHashe',
    parentId: 'parentId',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CanteenStudentScalarFieldEnum = (typeof CanteenStudentScalarFieldEnum)[keyof typeof CanteenStudentScalarFieldEnum]


  export const AbonnementScalarFieldEnum: {
    duration: 'duration',
    price: 'price',
    startDate: 'startDate',
    endDate: 'endDate',
    status: 'status',
    type: 'type',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    canteenStudentId: 'canteenStudentId',
    id: 'id'
  };

  export type AbonnementScalarFieldEnum = (typeof AbonnementScalarFieldEnum)[keyof typeof AbonnementScalarFieldEnum]


  export const RepasScalarFieldEnum: {
    id: 'id',
    canteenStudentId: 'canteenStudentId',
    date: 'date',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RepasScalarFieldEnum = (typeof RepasScalarFieldEnum)[keyof typeof RepasScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    canteenStudentId: 'canteenStudentId',
    message: 'message',
    read: 'read',
    type: 'type',
    details: 'details',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'StatusSubscription'
   */
  export type EnumStatusSubscriptionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusSubscription'>
    


  /**
   * Reference to a field of type 'StatusSubscription[]'
   */
  export type ListEnumStatusSubscriptionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusSubscription[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    name?: StringFilter<"User"> | string
    searchableName?: StringFilter<"User"> | string
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    parent?: XOR<ParentNullableScalarRelationFilter, ParentWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrder
    name?: SortOrder
    searchableName?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parent?: ParentOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    name?: StringFilter<"User"> | string
    searchableName?: StringFilter<"User"> | string
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    parent?: XOR<ParentNullableScalarRelationFilter, ParentWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrder
    name?: SortOrder
    searchableName?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    name?: StringWithAggregatesFilter<"User"> | string
    searchableName?: StringWithAggregatesFilter<"User"> | string
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ParentWhereInput = {
    AND?: ParentWhereInput | ParentWhereInput[]
    OR?: ParentWhereInput[]
    NOT?: ParentWhereInput | ParentWhereInput[]
    id?: StringFilter<"Parent"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    canteenStudents?: CanteenStudentListRelationFilter
  }

  export type ParentOrderByWithRelationInput = {
    id?: SortOrder
    user?: UserOrderByWithRelationInput
    canteenStudents?: CanteenStudentOrderByRelationAggregateInput
  }

  export type ParentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ParentWhereInput | ParentWhereInput[]
    OR?: ParentWhereInput[]
    NOT?: ParentWhereInput | ParentWhereInput[]
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    canteenStudents?: CanteenStudentListRelationFilter
  }, "id" | "id">

  export type ParentOrderByWithAggregationInput = {
    id?: SortOrder
    _count?: ParentCountOrderByAggregateInput
    _max?: ParentMaxOrderByAggregateInput
    _min?: ParentMinOrderByAggregateInput
  }

  export type ParentScalarWhereWithAggregatesInput = {
    AND?: ParentScalarWhereWithAggregatesInput | ParentScalarWhereWithAggregatesInput[]
    OR?: ParentScalarWhereWithAggregatesInput[]
    NOT?: ParentScalarWhereWithAggregatesInput | ParentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Parent"> | string
  }

  export type EnrolledStudentWhereInput = {
    AND?: EnrolledStudentWhereInput | EnrolledStudentWhereInput[]
    OR?: EnrolledStudentWhereInput[]
    NOT?: EnrolledStudentWhereInput | EnrolledStudentWhereInput[]
    id?: StringFilter<"EnrolledStudent"> | string
    name?: StringFilter<"EnrolledStudent"> | string
    searchableName?: StringFilter<"EnrolledStudent"> | string
    class?: StringFilter<"EnrolledStudent"> | string
    gender?: StringFilter<"EnrolledStudent"> | string
    matricule?: StringFilter<"EnrolledStudent"> | string
    isRegisteredToCanteen?: BoolFilter<"EnrolledStudent"> | boolean
    createdAt?: DateTimeFilter<"EnrolledStudent"> | Date | string
    updatedAt?: DateTimeFilter<"EnrolledStudent"> | Date | string
    canteenStudent?: XOR<CanteenStudentNullableScalarRelationFilter, CanteenStudentWhereInput> | null
  }

  export type EnrolledStudentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    searchableName?: SortOrder
    class?: SortOrder
    gender?: SortOrder
    matricule?: SortOrder
    isRegisteredToCanteen?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    canteenStudent?: CanteenStudentOrderByWithRelationInput
  }

  export type EnrolledStudentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    matricule?: string
    AND?: EnrolledStudentWhereInput | EnrolledStudentWhereInput[]
    OR?: EnrolledStudentWhereInput[]
    NOT?: EnrolledStudentWhereInput | EnrolledStudentWhereInput[]
    name?: StringFilter<"EnrolledStudent"> | string
    searchableName?: StringFilter<"EnrolledStudent"> | string
    class?: StringFilter<"EnrolledStudent"> | string
    gender?: StringFilter<"EnrolledStudent"> | string
    isRegisteredToCanteen?: BoolFilter<"EnrolledStudent"> | boolean
    createdAt?: DateTimeFilter<"EnrolledStudent"> | Date | string
    updatedAt?: DateTimeFilter<"EnrolledStudent"> | Date | string
    canteenStudent?: XOR<CanteenStudentNullableScalarRelationFilter, CanteenStudentWhereInput> | null
  }, "id" | "matricule">

  export type EnrolledStudentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    searchableName?: SortOrder
    class?: SortOrder
    gender?: SortOrder
    matricule?: SortOrder
    isRegisteredToCanteen?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EnrolledStudentCountOrderByAggregateInput
    _max?: EnrolledStudentMaxOrderByAggregateInput
    _min?: EnrolledStudentMinOrderByAggregateInput
  }

  export type EnrolledStudentScalarWhereWithAggregatesInput = {
    AND?: EnrolledStudentScalarWhereWithAggregatesInput | EnrolledStudentScalarWhereWithAggregatesInput[]
    OR?: EnrolledStudentScalarWhereWithAggregatesInput[]
    NOT?: EnrolledStudentScalarWhereWithAggregatesInput | EnrolledStudentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EnrolledStudent"> | string
    name?: StringWithAggregatesFilter<"EnrolledStudent"> | string
    searchableName?: StringWithAggregatesFilter<"EnrolledStudent"> | string
    class?: StringWithAggregatesFilter<"EnrolledStudent"> | string
    gender?: StringWithAggregatesFilter<"EnrolledStudent"> | string
    matricule?: StringWithAggregatesFilter<"EnrolledStudent"> | string
    isRegisteredToCanteen?: BoolWithAggregatesFilter<"EnrolledStudent"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"EnrolledStudent"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EnrolledStudent"> | Date | string
  }

  export type CanteenStudentWhereInput = {
    AND?: CanteenStudentWhereInput | CanteenStudentWhereInput[]
    OR?: CanteenStudentWhereInput[]
    NOT?: CanteenStudentWhereInput | CanteenStudentWhereInput[]
    id?: StringFilter<"CanteenStudent"> | string
    enrolledStudentId?: StringFilter<"CanteenStudent"> | string
    matriculeHashe?: StringFilter<"CanteenStudent"> | string
    parentId?: StringFilter<"CanteenStudent"> | string
    isActive?: BoolFilter<"CanteenStudent"> | boolean
    createdAt?: DateTimeFilter<"CanteenStudent"> | Date | string
    updatedAt?: DateTimeFilter<"CanteenStudent"> | Date | string
    abonnements?: AbonnementListRelationFilter
    notifications?: NotificationListRelationFilter
    repas?: RepasListRelationFilter
    parent?: XOR<ParentScalarRelationFilter, ParentWhereInput>
    enrolledStudent?: XOR<EnrolledStudentScalarRelationFilter, EnrolledStudentWhereInput>
  }

  export type CanteenStudentOrderByWithRelationInput = {
    id?: SortOrder
    enrolledStudentId?: SortOrder
    matriculeHashe?: SortOrder
    parentId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    abonnements?: AbonnementOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
    repas?: RepasOrderByRelationAggregateInput
    parent?: ParentOrderByWithRelationInput
    enrolledStudent?: EnrolledStudentOrderByWithRelationInput
  }

  export type CanteenStudentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    enrolledStudentId?: string
    matriculeHashe?: string
    AND?: CanteenStudentWhereInput | CanteenStudentWhereInput[]
    OR?: CanteenStudentWhereInput[]
    NOT?: CanteenStudentWhereInput | CanteenStudentWhereInput[]
    parentId?: StringFilter<"CanteenStudent"> | string
    isActive?: BoolFilter<"CanteenStudent"> | boolean
    createdAt?: DateTimeFilter<"CanteenStudent"> | Date | string
    updatedAt?: DateTimeFilter<"CanteenStudent"> | Date | string
    abonnements?: AbonnementListRelationFilter
    notifications?: NotificationListRelationFilter
    repas?: RepasListRelationFilter
    parent?: XOR<ParentScalarRelationFilter, ParentWhereInput>
    enrolledStudent?: XOR<EnrolledStudentScalarRelationFilter, EnrolledStudentWhereInput>
  }, "id" | "enrolledStudentId" | "matriculeHashe">

  export type CanteenStudentOrderByWithAggregationInput = {
    id?: SortOrder
    enrolledStudentId?: SortOrder
    matriculeHashe?: SortOrder
    parentId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CanteenStudentCountOrderByAggregateInput
    _max?: CanteenStudentMaxOrderByAggregateInput
    _min?: CanteenStudentMinOrderByAggregateInput
  }

  export type CanteenStudentScalarWhereWithAggregatesInput = {
    AND?: CanteenStudentScalarWhereWithAggregatesInput | CanteenStudentScalarWhereWithAggregatesInput[]
    OR?: CanteenStudentScalarWhereWithAggregatesInput[]
    NOT?: CanteenStudentScalarWhereWithAggregatesInput | CanteenStudentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CanteenStudent"> | string
    enrolledStudentId?: StringWithAggregatesFilter<"CanteenStudent"> | string
    matriculeHashe?: StringWithAggregatesFilter<"CanteenStudent"> | string
    parentId?: StringWithAggregatesFilter<"CanteenStudent"> | string
    isActive?: BoolWithAggregatesFilter<"CanteenStudent"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"CanteenStudent"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CanteenStudent"> | Date | string
  }

  export type AbonnementWhereInput = {
    AND?: AbonnementWhereInput | AbonnementWhereInput[]
    OR?: AbonnementWhereInput[]
    NOT?: AbonnementWhereInput | AbonnementWhereInput[]
    duration?: IntNullableFilter<"Abonnement"> | number | null
    price?: FloatNullableFilter<"Abonnement"> | number | null
    startDate?: DateTimeNullableFilter<"Abonnement"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Abonnement"> | Date | string | null
    status?: EnumStatusSubscriptionNullableFilter<"Abonnement"> | $Enums.StatusSubscription | null
    type?: StringNullableFilter<"Abonnement"> | string | null
    createdAt?: DateTimeFilter<"Abonnement"> | Date | string
    updatedAt?: DateTimeFilter<"Abonnement"> | Date | string
    canteenStudentId?: StringFilter<"Abonnement"> | string
    id?: IntFilter<"Abonnement"> | number
    canteenStudent?: XOR<CanteenStudentScalarRelationFilter, CanteenStudentWhereInput>
  }

  export type AbonnementOrderByWithRelationInput = {
    duration?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    canteenStudentId?: SortOrder
    id?: SortOrder
    canteenStudent?: CanteenStudentOrderByWithRelationInput
  }

  export type AbonnementWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AbonnementWhereInput | AbonnementWhereInput[]
    OR?: AbonnementWhereInput[]
    NOT?: AbonnementWhereInput | AbonnementWhereInput[]
    duration?: IntNullableFilter<"Abonnement"> | number | null
    price?: FloatNullableFilter<"Abonnement"> | number | null
    startDate?: DateTimeNullableFilter<"Abonnement"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Abonnement"> | Date | string | null
    status?: EnumStatusSubscriptionNullableFilter<"Abonnement"> | $Enums.StatusSubscription | null
    type?: StringNullableFilter<"Abonnement"> | string | null
    createdAt?: DateTimeFilter<"Abonnement"> | Date | string
    updatedAt?: DateTimeFilter<"Abonnement"> | Date | string
    canteenStudentId?: StringFilter<"Abonnement"> | string
    canteenStudent?: XOR<CanteenStudentScalarRelationFilter, CanteenStudentWhereInput>
  }, "id">

  export type AbonnementOrderByWithAggregationInput = {
    duration?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    canteenStudentId?: SortOrder
    id?: SortOrder
    _count?: AbonnementCountOrderByAggregateInput
    _avg?: AbonnementAvgOrderByAggregateInput
    _max?: AbonnementMaxOrderByAggregateInput
    _min?: AbonnementMinOrderByAggregateInput
    _sum?: AbonnementSumOrderByAggregateInput
  }

  export type AbonnementScalarWhereWithAggregatesInput = {
    AND?: AbonnementScalarWhereWithAggregatesInput | AbonnementScalarWhereWithAggregatesInput[]
    OR?: AbonnementScalarWhereWithAggregatesInput[]
    NOT?: AbonnementScalarWhereWithAggregatesInput | AbonnementScalarWhereWithAggregatesInput[]
    duration?: IntNullableWithAggregatesFilter<"Abonnement"> | number | null
    price?: FloatNullableWithAggregatesFilter<"Abonnement"> | number | null
    startDate?: DateTimeNullableWithAggregatesFilter<"Abonnement"> | Date | string | null
    endDate?: DateTimeNullableWithAggregatesFilter<"Abonnement"> | Date | string | null
    status?: EnumStatusSubscriptionNullableWithAggregatesFilter<"Abonnement"> | $Enums.StatusSubscription | null
    type?: StringNullableWithAggregatesFilter<"Abonnement"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Abonnement"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Abonnement"> | Date | string
    canteenStudentId?: StringWithAggregatesFilter<"Abonnement"> | string
    id?: IntWithAggregatesFilter<"Abonnement"> | number
  }

  export type RepasWhereInput = {
    AND?: RepasWhereInput | RepasWhereInput[]
    OR?: RepasWhereInput[]
    NOT?: RepasWhereInput | RepasWhereInput[]
    id?: IntFilter<"Repas"> | number
    canteenStudentId?: StringFilter<"Repas"> | string
    date?: DateTimeFilter<"Repas"> | Date | string
    status?: BoolNullableFilter<"Repas"> | boolean | null
    createdAt?: DateTimeFilter<"Repas"> | Date | string
    updatedAt?: DateTimeFilter<"Repas"> | Date | string
    student?: XOR<CanteenStudentScalarRelationFilter, CanteenStudentWhereInput>
  }

  export type RepasOrderByWithRelationInput = {
    id?: SortOrder
    canteenStudentId?: SortOrder
    date?: SortOrder
    status?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    student?: CanteenStudentOrderByWithRelationInput
  }

  export type RepasWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RepasWhereInput | RepasWhereInput[]
    OR?: RepasWhereInput[]
    NOT?: RepasWhereInput | RepasWhereInput[]
    canteenStudentId?: StringFilter<"Repas"> | string
    date?: DateTimeFilter<"Repas"> | Date | string
    status?: BoolNullableFilter<"Repas"> | boolean | null
    createdAt?: DateTimeFilter<"Repas"> | Date | string
    updatedAt?: DateTimeFilter<"Repas"> | Date | string
    student?: XOR<CanteenStudentScalarRelationFilter, CanteenStudentWhereInput>
  }, "id">

  export type RepasOrderByWithAggregationInput = {
    id?: SortOrder
    canteenStudentId?: SortOrder
    date?: SortOrder
    status?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RepasCountOrderByAggregateInput
    _avg?: RepasAvgOrderByAggregateInput
    _max?: RepasMaxOrderByAggregateInput
    _min?: RepasMinOrderByAggregateInput
    _sum?: RepasSumOrderByAggregateInput
  }

  export type RepasScalarWhereWithAggregatesInput = {
    AND?: RepasScalarWhereWithAggregatesInput | RepasScalarWhereWithAggregatesInput[]
    OR?: RepasScalarWhereWithAggregatesInput[]
    NOT?: RepasScalarWhereWithAggregatesInput | RepasScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Repas"> | number
    canteenStudentId?: StringWithAggregatesFilter<"Repas"> | string
    date?: DateTimeWithAggregatesFilter<"Repas"> | Date | string
    status?: BoolNullableWithAggregatesFilter<"Repas"> | boolean | null
    createdAt?: DateTimeWithAggregatesFilter<"Repas"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Repas"> | Date | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: IntFilter<"Notification"> | number
    canteenStudentId?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    read?: BoolFilter<"Notification"> | boolean
    type?: StringFilter<"Notification"> | string
    details?: JsonNullableFilter<"Notification">
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    updatedAt?: DateTimeFilter<"Notification"> | Date | string
    canteenStudent?: XOR<CanteenStudentScalarRelationFilter, CanteenStudentWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    canteenStudentId?: SortOrder
    message?: SortOrder
    read?: SortOrder
    type?: SortOrder
    details?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    canteenStudent?: CanteenStudentOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    canteenStudentId?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    read?: BoolFilter<"Notification"> | boolean
    type?: StringFilter<"Notification"> | string
    details?: JsonNullableFilter<"Notification">
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    updatedAt?: DateTimeFilter<"Notification"> | Date | string
    canteenStudent?: XOR<CanteenStudentScalarRelationFilter, CanteenStudentWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    canteenStudentId?: SortOrder
    message?: SortOrder
    read?: SortOrder
    type?: SortOrder
    details?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _avg?: NotificationAvgOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
    _sum?: NotificationSumOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Notification"> | number
    canteenStudentId?: StringWithAggregatesFilter<"Notification"> | string
    message?: StringWithAggregatesFilter<"Notification"> | string
    read?: BoolWithAggregatesFilter<"Notification"> | boolean
    type?: StringWithAggregatesFilter<"Notification"> | string
    details?: JsonNullableWithAggregatesFilter<"Notification">
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password?: string | null
    role: $Enums.UserRole
    name: string
    searchableName?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: ParentCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password?: string | null
    role: $Enums.UserRole
    name: string
    searchableName?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: ParentUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    name?: StringFieldUpdateOperationsInput | string
    searchableName?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: ParentUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    name?: StringFieldUpdateOperationsInput | string
    searchableName?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: ParentUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password?: string | null
    role: $Enums.UserRole
    name: string
    searchableName?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    name?: StringFieldUpdateOperationsInput | string
    searchableName?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    name?: StringFieldUpdateOperationsInput | string
    searchableName?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParentCreateInput = {
    user: UserCreateNestedOneWithoutParentInput
    canteenStudents?: CanteenStudentCreateNestedManyWithoutParentInput
  }

  export type ParentUncheckedCreateInput = {
    id: string
    canteenStudents?: CanteenStudentUncheckedCreateNestedManyWithoutParentInput
  }

  export type ParentUpdateInput = {
    user?: UserUpdateOneRequiredWithoutParentNestedInput
    canteenStudents?: CanteenStudentUpdateManyWithoutParentNestedInput
  }

  export type ParentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    canteenStudents?: CanteenStudentUncheckedUpdateManyWithoutParentNestedInput
  }

  export type ParentCreateManyInput = {
    id: string
  }

  export type ParentUpdateManyMutationInput = {

  }

  export type ParentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type EnrolledStudentCreateInput = {
    id?: string
    name: string
    searchableName?: string
    class: string
    gender: string
    matricule: string
    isRegisteredToCanteen?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    canteenStudent?: CanteenStudentCreateNestedOneWithoutEnrolledStudentInput
  }

  export type EnrolledStudentUncheckedCreateInput = {
    id?: string
    name: string
    searchableName?: string
    class: string
    gender: string
    matricule: string
    isRegisteredToCanteen?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    canteenStudent?: CanteenStudentUncheckedCreateNestedOneWithoutEnrolledStudentInput
  }

  export type EnrolledStudentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    searchableName?: StringFieldUpdateOperationsInput | string
    class?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    matricule?: StringFieldUpdateOperationsInput | string
    isRegisteredToCanteen?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    canteenStudent?: CanteenStudentUpdateOneWithoutEnrolledStudentNestedInput
  }

  export type EnrolledStudentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    searchableName?: StringFieldUpdateOperationsInput | string
    class?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    matricule?: StringFieldUpdateOperationsInput | string
    isRegisteredToCanteen?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    canteenStudent?: CanteenStudentUncheckedUpdateOneWithoutEnrolledStudentNestedInput
  }

  export type EnrolledStudentCreateManyInput = {
    id?: string
    name: string
    searchableName?: string
    class: string
    gender: string
    matricule: string
    isRegisteredToCanteen?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EnrolledStudentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    searchableName?: StringFieldUpdateOperationsInput | string
    class?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    matricule?: StringFieldUpdateOperationsInput | string
    isRegisteredToCanteen?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrolledStudentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    searchableName?: StringFieldUpdateOperationsInput | string
    class?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    matricule?: StringFieldUpdateOperationsInput | string
    isRegisteredToCanteen?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CanteenStudentCreateInput = {
    id?: string
    matriculeHashe: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    abonnements?: AbonnementCreateNestedManyWithoutCanteenStudentInput
    notifications?: NotificationCreateNestedManyWithoutCanteenStudentInput
    repas?: RepasCreateNestedManyWithoutStudentInput
    parent: ParentCreateNestedOneWithoutCanteenStudentsInput
    enrolledStudent: EnrolledStudentCreateNestedOneWithoutCanteenStudentInput
  }

  export type CanteenStudentUncheckedCreateInput = {
    id?: string
    enrolledStudentId: string
    matriculeHashe: string
    parentId: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    abonnements?: AbonnementUncheckedCreateNestedManyWithoutCanteenStudentInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutCanteenStudentInput
    repas?: RepasUncheckedCreateNestedManyWithoutStudentInput
  }

  export type CanteenStudentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    matriculeHashe?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    abonnements?: AbonnementUpdateManyWithoutCanteenStudentNestedInput
    notifications?: NotificationUpdateManyWithoutCanteenStudentNestedInput
    repas?: RepasUpdateManyWithoutStudentNestedInput
    parent?: ParentUpdateOneRequiredWithoutCanteenStudentsNestedInput
    enrolledStudent?: EnrolledStudentUpdateOneRequiredWithoutCanteenStudentNestedInput
  }

  export type CanteenStudentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    enrolledStudentId?: StringFieldUpdateOperationsInput | string
    matriculeHashe?: StringFieldUpdateOperationsInput | string
    parentId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    abonnements?: AbonnementUncheckedUpdateManyWithoutCanteenStudentNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutCanteenStudentNestedInput
    repas?: RepasUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type CanteenStudentCreateManyInput = {
    id?: string
    enrolledStudentId: string
    matriculeHashe: string
    parentId: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CanteenStudentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    matriculeHashe?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CanteenStudentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    enrolledStudentId?: StringFieldUpdateOperationsInput | string
    matriculeHashe?: StringFieldUpdateOperationsInput | string
    parentId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AbonnementCreateInput = {
    duration?: number | null
    price?: number | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    status?: $Enums.StatusSubscription | null
    type?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    canteenStudent: CanteenStudentCreateNestedOneWithoutAbonnementsInput
  }

  export type AbonnementUncheckedCreateInput = {
    duration?: number | null
    price?: number | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    status?: $Enums.StatusSubscription | null
    type?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    canteenStudentId: string
    id?: number
  }

  export type AbonnementUpdateInput = {
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumStatusSubscriptionFieldUpdateOperationsInput | $Enums.StatusSubscription | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    canteenStudent?: CanteenStudentUpdateOneRequiredWithoutAbonnementsNestedInput
  }

  export type AbonnementUncheckedUpdateInput = {
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumStatusSubscriptionFieldUpdateOperationsInput | $Enums.StatusSubscription | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    canteenStudentId?: StringFieldUpdateOperationsInput | string
    id?: IntFieldUpdateOperationsInput | number
  }

  export type AbonnementCreateManyInput = {
    duration?: number | null
    price?: number | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    status?: $Enums.StatusSubscription | null
    type?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    canteenStudentId: string
    id?: number
  }

  export type AbonnementUpdateManyMutationInput = {
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumStatusSubscriptionFieldUpdateOperationsInput | $Enums.StatusSubscription | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AbonnementUncheckedUpdateManyInput = {
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumStatusSubscriptionFieldUpdateOperationsInput | $Enums.StatusSubscription | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    canteenStudentId?: StringFieldUpdateOperationsInput | string
    id?: IntFieldUpdateOperationsInput | number
  }

  export type RepasCreateInput = {
    date?: Date | string
    status?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    student: CanteenStudentCreateNestedOneWithoutRepasInput
  }

  export type RepasUncheckedCreateInput = {
    id?: number
    canteenStudentId: string
    date?: Date | string
    status?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RepasUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: CanteenStudentUpdateOneRequiredWithoutRepasNestedInput
  }

  export type RepasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    canteenStudentId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RepasCreateManyInput = {
    id?: number
    canteenStudentId: string
    date?: Date | string
    status?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RepasUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RepasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    canteenStudentId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateInput = {
    message: string
    read?: boolean
    type: string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    canteenStudent: CanteenStudentCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: number
    canteenStudentId: string
    message: string
    read?: boolean
    type: string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationUpdateInput = {
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    type?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    canteenStudent?: CanteenStudentUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    canteenStudentId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    type?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: number
    canteenStudentId: string
    message: string
    read?: boolean
    type: string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    type?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    canteenStudentId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    type?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ParentNullableScalarRelationFilter = {
    is?: ParentWhereInput | null
    isNot?: ParentWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    name?: SortOrder
    searchableName?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    name?: SortOrder
    searchableName?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    name?: SortOrder
    searchableName?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CanteenStudentListRelationFilter = {
    every?: CanteenStudentWhereInput
    some?: CanteenStudentWhereInput
    none?: CanteenStudentWhereInput
  }

  export type CanteenStudentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ParentCountOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ParentMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ParentMinOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CanteenStudentNullableScalarRelationFilter = {
    is?: CanteenStudentWhereInput | null
    isNot?: CanteenStudentWhereInput | null
  }

  export type EnrolledStudentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    searchableName?: SortOrder
    class?: SortOrder
    gender?: SortOrder
    matricule?: SortOrder
    isRegisteredToCanteen?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnrolledStudentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    searchableName?: SortOrder
    class?: SortOrder
    gender?: SortOrder
    matricule?: SortOrder
    isRegisteredToCanteen?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnrolledStudentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    searchableName?: SortOrder
    class?: SortOrder
    gender?: SortOrder
    matricule?: SortOrder
    isRegisteredToCanteen?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AbonnementListRelationFilter = {
    every?: AbonnementWhereInput
    some?: AbonnementWhereInput
    none?: AbonnementWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type RepasListRelationFilter = {
    every?: RepasWhereInput
    some?: RepasWhereInput
    none?: RepasWhereInput
  }

  export type ParentScalarRelationFilter = {
    is?: ParentWhereInput
    isNot?: ParentWhereInput
  }

  export type EnrolledStudentScalarRelationFilter = {
    is?: EnrolledStudentWhereInput
    isNot?: EnrolledStudentWhereInput
  }

  export type AbonnementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RepasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CanteenStudentCountOrderByAggregateInput = {
    id?: SortOrder
    enrolledStudentId?: SortOrder
    matriculeHashe?: SortOrder
    parentId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CanteenStudentMaxOrderByAggregateInput = {
    id?: SortOrder
    enrolledStudentId?: SortOrder
    matriculeHashe?: SortOrder
    parentId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CanteenStudentMinOrderByAggregateInput = {
    id?: SortOrder
    enrolledStudentId?: SortOrder
    matriculeHashe?: SortOrder
    parentId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumStatusSubscriptionNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusSubscription | EnumStatusSubscriptionFieldRefInput<$PrismaModel> | null
    in?: $Enums.StatusSubscription[] | ListEnumStatusSubscriptionFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.StatusSubscription[] | ListEnumStatusSubscriptionFieldRefInput<$PrismaModel> | null
    not?: NestedEnumStatusSubscriptionNullableFilter<$PrismaModel> | $Enums.StatusSubscription | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type CanteenStudentScalarRelationFilter = {
    is?: CanteenStudentWhereInput
    isNot?: CanteenStudentWhereInput
  }

  export type AbonnementCountOrderByAggregateInput = {
    duration?: SortOrder
    price?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    canteenStudentId?: SortOrder
    id?: SortOrder
  }

  export type AbonnementAvgOrderByAggregateInput = {
    duration?: SortOrder
    price?: SortOrder
    id?: SortOrder
  }

  export type AbonnementMaxOrderByAggregateInput = {
    duration?: SortOrder
    price?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    canteenStudentId?: SortOrder
    id?: SortOrder
  }

  export type AbonnementMinOrderByAggregateInput = {
    duration?: SortOrder
    price?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    canteenStudentId?: SortOrder
    id?: SortOrder
  }

  export type AbonnementSumOrderByAggregateInput = {
    duration?: SortOrder
    price?: SortOrder
    id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumStatusSubscriptionNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusSubscription | EnumStatusSubscriptionFieldRefInput<$PrismaModel> | null
    in?: $Enums.StatusSubscription[] | ListEnumStatusSubscriptionFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.StatusSubscription[] | ListEnumStatusSubscriptionFieldRefInput<$PrismaModel> | null
    not?: NestedEnumStatusSubscriptionNullableWithAggregatesFilter<$PrismaModel> | $Enums.StatusSubscription | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumStatusSubscriptionNullableFilter<$PrismaModel>
    _max?: NestedEnumStatusSubscriptionNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type RepasCountOrderByAggregateInput = {
    id?: SortOrder
    canteenStudentId?: SortOrder
    date?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RepasAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RepasMaxOrderByAggregateInput = {
    id?: SortOrder
    canteenStudentId?: SortOrder
    date?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RepasMinOrderByAggregateInput = {
    id?: SortOrder
    canteenStudentId?: SortOrder
    date?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RepasSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    canteenStudentId?: SortOrder
    message?: SortOrder
    read?: SortOrder
    type?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    canteenStudentId?: SortOrder
    message?: SortOrder
    read?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    canteenStudentId?: SortOrder
    message?: SortOrder
    read?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationSumOrderByAggregateInput = {
    id?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type ParentCreateNestedOneWithoutUserInput = {
    create?: XOR<ParentCreateWithoutUserInput, ParentUncheckedCreateWithoutUserInput>
    connectOrCreate?: ParentCreateOrConnectWithoutUserInput
    connect?: ParentWhereUniqueInput
  }

  export type ParentUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ParentCreateWithoutUserInput, ParentUncheckedCreateWithoutUserInput>
    connectOrCreate?: ParentCreateOrConnectWithoutUserInput
    connect?: ParentWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ParentUpdateOneWithoutUserNestedInput = {
    create?: XOR<ParentCreateWithoutUserInput, ParentUncheckedCreateWithoutUserInput>
    connectOrCreate?: ParentCreateOrConnectWithoutUserInput
    upsert?: ParentUpsertWithoutUserInput
    disconnect?: ParentWhereInput | boolean
    delete?: ParentWhereInput | boolean
    connect?: ParentWhereUniqueInput
    update?: XOR<XOR<ParentUpdateToOneWithWhereWithoutUserInput, ParentUpdateWithoutUserInput>, ParentUncheckedUpdateWithoutUserInput>
  }

  export type ParentUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ParentCreateWithoutUserInput, ParentUncheckedCreateWithoutUserInput>
    connectOrCreate?: ParentCreateOrConnectWithoutUserInput
    upsert?: ParentUpsertWithoutUserInput
    disconnect?: ParentWhereInput | boolean
    delete?: ParentWhereInput | boolean
    connect?: ParentWhereUniqueInput
    update?: XOR<XOR<ParentUpdateToOneWithWhereWithoutUserInput, ParentUpdateWithoutUserInput>, ParentUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutParentInput = {
    create?: XOR<UserCreateWithoutParentInput, UserUncheckedCreateWithoutParentInput>
    connectOrCreate?: UserCreateOrConnectWithoutParentInput
    connect?: UserWhereUniqueInput
  }

  export type CanteenStudentCreateNestedManyWithoutParentInput = {
    create?: XOR<CanteenStudentCreateWithoutParentInput, CanteenStudentUncheckedCreateWithoutParentInput> | CanteenStudentCreateWithoutParentInput[] | CanteenStudentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CanteenStudentCreateOrConnectWithoutParentInput | CanteenStudentCreateOrConnectWithoutParentInput[]
    createMany?: CanteenStudentCreateManyParentInputEnvelope
    connect?: CanteenStudentWhereUniqueInput | CanteenStudentWhereUniqueInput[]
  }

  export type CanteenStudentUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<CanteenStudentCreateWithoutParentInput, CanteenStudentUncheckedCreateWithoutParentInput> | CanteenStudentCreateWithoutParentInput[] | CanteenStudentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CanteenStudentCreateOrConnectWithoutParentInput | CanteenStudentCreateOrConnectWithoutParentInput[]
    createMany?: CanteenStudentCreateManyParentInputEnvelope
    connect?: CanteenStudentWhereUniqueInput | CanteenStudentWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutParentNestedInput = {
    create?: XOR<UserCreateWithoutParentInput, UserUncheckedCreateWithoutParentInput>
    connectOrCreate?: UserCreateOrConnectWithoutParentInput
    upsert?: UserUpsertWithoutParentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutParentInput, UserUpdateWithoutParentInput>, UserUncheckedUpdateWithoutParentInput>
  }

  export type CanteenStudentUpdateManyWithoutParentNestedInput = {
    create?: XOR<CanteenStudentCreateWithoutParentInput, CanteenStudentUncheckedCreateWithoutParentInput> | CanteenStudentCreateWithoutParentInput[] | CanteenStudentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CanteenStudentCreateOrConnectWithoutParentInput | CanteenStudentCreateOrConnectWithoutParentInput[]
    upsert?: CanteenStudentUpsertWithWhereUniqueWithoutParentInput | CanteenStudentUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: CanteenStudentCreateManyParentInputEnvelope
    set?: CanteenStudentWhereUniqueInput | CanteenStudentWhereUniqueInput[]
    disconnect?: CanteenStudentWhereUniqueInput | CanteenStudentWhereUniqueInput[]
    delete?: CanteenStudentWhereUniqueInput | CanteenStudentWhereUniqueInput[]
    connect?: CanteenStudentWhereUniqueInput | CanteenStudentWhereUniqueInput[]
    update?: CanteenStudentUpdateWithWhereUniqueWithoutParentInput | CanteenStudentUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: CanteenStudentUpdateManyWithWhereWithoutParentInput | CanteenStudentUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: CanteenStudentScalarWhereInput | CanteenStudentScalarWhereInput[]
  }

  export type CanteenStudentUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<CanteenStudentCreateWithoutParentInput, CanteenStudentUncheckedCreateWithoutParentInput> | CanteenStudentCreateWithoutParentInput[] | CanteenStudentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CanteenStudentCreateOrConnectWithoutParentInput | CanteenStudentCreateOrConnectWithoutParentInput[]
    upsert?: CanteenStudentUpsertWithWhereUniqueWithoutParentInput | CanteenStudentUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: CanteenStudentCreateManyParentInputEnvelope
    set?: CanteenStudentWhereUniqueInput | CanteenStudentWhereUniqueInput[]
    disconnect?: CanteenStudentWhereUniqueInput | CanteenStudentWhereUniqueInput[]
    delete?: CanteenStudentWhereUniqueInput | CanteenStudentWhereUniqueInput[]
    connect?: CanteenStudentWhereUniqueInput | CanteenStudentWhereUniqueInput[]
    update?: CanteenStudentUpdateWithWhereUniqueWithoutParentInput | CanteenStudentUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: CanteenStudentUpdateManyWithWhereWithoutParentInput | CanteenStudentUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: CanteenStudentScalarWhereInput | CanteenStudentScalarWhereInput[]
  }

  export type CanteenStudentCreateNestedOneWithoutEnrolledStudentInput = {
    create?: XOR<CanteenStudentCreateWithoutEnrolledStudentInput, CanteenStudentUncheckedCreateWithoutEnrolledStudentInput>
    connectOrCreate?: CanteenStudentCreateOrConnectWithoutEnrolledStudentInput
    connect?: CanteenStudentWhereUniqueInput
  }

  export type CanteenStudentUncheckedCreateNestedOneWithoutEnrolledStudentInput = {
    create?: XOR<CanteenStudentCreateWithoutEnrolledStudentInput, CanteenStudentUncheckedCreateWithoutEnrolledStudentInput>
    connectOrCreate?: CanteenStudentCreateOrConnectWithoutEnrolledStudentInput
    connect?: CanteenStudentWhereUniqueInput
  }

  export type CanteenStudentUpdateOneWithoutEnrolledStudentNestedInput = {
    create?: XOR<CanteenStudentCreateWithoutEnrolledStudentInput, CanteenStudentUncheckedCreateWithoutEnrolledStudentInput>
    connectOrCreate?: CanteenStudentCreateOrConnectWithoutEnrolledStudentInput
    upsert?: CanteenStudentUpsertWithoutEnrolledStudentInput
    disconnect?: CanteenStudentWhereInput | boolean
    delete?: CanteenStudentWhereInput | boolean
    connect?: CanteenStudentWhereUniqueInput
    update?: XOR<XOR<CanteenStudentUpdateToOneWithWhereWithoutEnrolledStudentInput, CanteenStudentUpdateWithoutEnrolledStudentInput>, CanteenStudentUncheckedUpdateWithoutEnrolledStudentInput>
  }

  export type CanteenStudentUncheckedUpdateOneWithoutEnrolledStudentNestedInput = {
    create?: XOR<CanteenStudentCreateWithoutEnrolledStudentInput, CanteenStudentUncheckedCreateWithoutEnrolledStudentInput>
    connectOrCreate?: CanteenStudentCreateOrConnectWithoutEnrolledStudentInput
    upsert?: CanteenStudentUpsertWithoutEnrolledStudentInput
    disconnect?: CanteenStudentWhereInput | boolean
    delete?: CanteenStudentWhereInput | boolean
    connect?: CanteenStudentWhereUniqueInput
    update?: XOR<XOR<CanteenStudentUpdateToOneWithWhereWithoutEnrolledStudentInput, CanteenStudentUpdateWithoutEnrolledStudentInput>, CanteenStudentUncheckedUpdateWithoutEnrolledStudentInput>
  }

  export type AbonnementCreateNestedManyWithoutCanteenStudentInput = {
    create?: XOR<AbonnementCreateWithoutCanteenStudentInput, AbonnementUncheckedCreateWithoutCanteenStudentInput> | AbonnementCreateWithoutCanteenStudentInput[] | AbonnementUncheckedCreateWithoutCanteenStudentInput[]
    connectOrCreate?: AbonnementCreateOrConnectWithoutCanteenStudentInput | AbonnementCreateOrConnectWithoutCanteenStudentInput[]
    createMany?: AbonnementCreateManyCanteenStudentInputEnvelope
    connect?: AbonnementWhereUniqueInput | AbonnementWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutCanteenStudentInput = {
    create?: XOR<NotificationCreateWithoutCanteenStudentInput, NotificationUncheckedCreateWithoutCanteenStudentInput> | NotificationCreateWithoutCanteenStudentInput[] | NotificationUncheckedCreateWithoutCanteenStudentInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutCanteenStudentInput | NotificationCreateOrConnectWithoutCanteenStudentInput[]
    createMany?: NotificationCreateManyCanteenStudentInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type RepasCreateNestedManyWithoutStudentInput = {
    create?: XOR<RepasCreateWithoutStudentInput, RepasUncheckedCreateWithoutStudentInput> | RepasCreateWithoutStudentInput[] | RepasUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: RepasCreateOrConnectWithoutStudentInput | RepasCreateOrConnectWithoutStudentInput[]
    createMany?: RepasCreateManyStudentInputEnvelope
    connect?: RepasWhereUniqueInput | RepasWhereUniqueInput[]
  }

  export type ParentCreateNestedOneWithoutCanteenStudentsInput = {
    create?: XOR<ParentCreateWithoutCanteenStudentsInput, ParentUncheckedCreateWithoutCanteenStudentsInput>
    connectOrCreate?: ParentCreateOrConnectWithoutCanteenStudentsInput
    connect?: ParentWhereUniqueInput
  }

  export type EnrolledStudentCreateNestedOneWithoutCanteenStudentInput = {
    create?: XOR<EnrolledStudentCreateWithoutCanteenStudentInput, EnrolledStudentUncheckedCreateWithoutCanteenStudentInput>
    connectOrCreate?: EnrolledStudentCreateOrConnectWithoutCanteenStudentInput
    connect?: EnrolledStudentWhereUniqueInput
  }

  export type AbonnementUncheckedCreateNestedManyWithoutCanteenStudentInput = {
    create?: XOR<AbonnementCreateWithoutCanteenStudentInput, AbonnementUncheckedCreateWithoutCanteenStudentInput> | AbonnementCreateWithoutCanteenStudentInput[] | AbonnementUncheckedCreateWithoutCanteenStudentInput[]
    connectOrCreate?: AbonnementCreateOrConnectWithoutCanteenStudentInput | AbonnementCreateOrConnectWithoutCanteenStudentInput[]
    createMany?: AbonnementCreateManyCanteenStudentInputEnvelope
    connect?: AbonnementWhereUniqueInput | AbonnementWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutCanteenStudentInput = {
    create?: XOR<NotificationCreateWithoutCanteenStudentInput, NotificationUncheckedCreateWithoutCanteenStudentInput> | NotificationCreateWithoutCanteenStudentInput[] | NotificationUncheckedCreateWithoutCanteenStudentInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutCanteenStudentInput | NotificationCreateOrConnectWithoutCanteenStudentInput[]
    createMany?: NotificationCreateManyCanteenStudentInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type RepasUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<RepasCreateWithoutStudentInput, RepasUncheckedCreateWithoutStudentInput> | RepasCreateWithoutStudentInput[] | RepasUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: RepasCreateOrConnectWithoutStudentInput | RepasCreateOrConnectWithoutStudentInput[]
    createMany?: RepasCreateManyStudentInputEnvelope
    connect?: RepasWhereUniqueInput | RepasWhereUniqueInput[]
  }

  export type AbonnementUpdateManyWithoutCanteenStudentNestedInput = {
    create?: XOR<AbonnementCreateWithoutCanteenStudentInput, AbonnementUncheckedCreateWithoutCanteenStudentInput> | AbonnementCreateWithoutCanteenStudentInput[] | AbonnementUncheckedCreateWithoutCanteenStudentInput[]
    connectOrCreate?: AbonnementCreateOrConnectWithoutCanteenStudentInput | AbonnementCreateOrConnectWithoutCanteenStudentInput[]
    upsert?: AbonnementUpsertWithWhereUniqueWithoutCanteenStudentInput | AbonnementUpsertWithWhereUniqueWithoutCanteenStudentInput[]
    createMany?: AbonnementCreateManyCanteenStudentInputEnvelope
    set?: AbonnementWhereUniqueInput | AbonnementWhereUniqueInput[]
    disconnect?: AbonnementWhereUniqueInput | AbonnementWhereUniqueInput[]
    delete?: AbonnementWhereUniqueInput | AbonnementWhereUniqueInput[]
    connect?: AbonnementWhereUniqueInput | AbonnementWhereUniqueInput[]
    update?: AbonnementUpdateWithWhereUniqueWithoutCanteenStudentInput | AbonnementUpdateWithWhereUniqueWithoutCanteenStudentInput[]
    updateMany?: AbonnementUpdateManyWithWhereWithoutCanteenStudentInput | AbonnementUpdateManyWithWhereWithoutCanteenStudentInput[]
    deleteMany?: AbonnementScalarWhereInput | AbonnementScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutCanteenStudentNestedInput = {
    create?: XOR<NotificationCreateWithoutCanteenStudentInput, NotificationUncheckedCreateWithoutCanteenStudentInput> | NotificationCreateWithoutCanteenStudentInput[] | NotificationUncheckedCreateWithoutCanteenStudentInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutCanteenStudentInput | NotificationCreateOrConnectWithoutCanteenStudentInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutCanteenStudentInput | NotificationUpsertWithWhereUniqueWithoutCanteenStudentInput[]
    createMany?: NotificationCreateManyCanteenStudentInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutCanteenStudentInput | NotificationUpdateWithWhereUniqueWithoutCanteenStudentInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutCanteenStudentInput | NotificationUpdateManyWithWhereWithoutCanteenStudentInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type RepasUpdateManyWithoutStudentNestedInput = {
    create?: XOR<RepasCreateWithoutStudentInput, RepasUncheckedCreateWithoutStudentInput> | RepasCreateWithoutStudentInput[] | RepasUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: RepasCreateOrConnectWithoutStudentInput | RepasCreateOrConnectWithoutStudentInput[]
    upsert?: RepasUpsertWithWhereUniqueWithoutStudentInput | RepasUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: RepasCreateManyStudentInputEnvelope
    set?: RepasWhereUniqueInput | RepasWhereUniqueInput[]
    disconnect?: RepasWhereUniqueInput | RepasWhereUniqueInput[]
    delete?: RepasWhereUniqueInput | RepasWhereUniqueInput[]
    connect?: RepasWhereUniqueInput | RepasWhereUniqueInput[]
    update?: RepasUpdateWithWhereUniqueWithoutStudentInput | RepasUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: RepasUpdateManyWithWhereWithoutStudentInput | RepasUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: RepasScalarWhereInput | RepasScalarWhereInput[]
  }

  export type ParentUpdateOneRequiredWithoutCanteenStudentsNestedInput = {
    create?: XOR<ParentCreateWithoutCanteenStudentsInput, ParentUncheckedCreateWithoutCanteenStudentsInput>
    connectOrCreate?: ParentCreateOrConnectWithoutCanteenStudentsInput
    upsert?: ParentUpsertWithoutCanteenStudentsInput
    connect?: ParentWhereUniqueInput
    update?: XOR<XOR<ParentUpdateToOneWithWhereWithoutCanteenStudentsInput, ParentUpdateWithoutCanteenStudentsInput>, ParentUncheckedUpdateWithoutCanteenStudentsInput>
  }

  export type EnrolledStudentUpdateOneRequiredWithoutCanteenStudentNestedInput = {
    create?: XOR<EnrolledStudentCreateWithoutCanteenStudentInput, EnrolledStudentUncheckedCreateWithoutCanteenStudentInput>
    connectOrCreate?: EnrolledStudentCreateOrConnectWithoutCanteenStudentInput
    upsert?: EnrolledStudentUpsertWithoutCanteenStudentInput
    connect?: EnrolledStudentWhereUniqueInput
    update?: XOR<XOR<EnrolledStudentUpdateToOneWithWhereWithoutCanteenStudentInput, EnrolledStudentUpdateWithoutCanteenStudentInput>, EnrolledStudentUncheckedUpdateWithoutCanteenStudentInput>
  }

  export type AbonnementUncheckedUpdateManyWithoutCanteenStudentNestedInput = {
    create?: XOR<AbonnementCreateWithoutCanteenStudentInput, AbonnementUncheckedCreateWithoutCanteenStudentInput> | AbonnementCreateWithoutCanteenStudentInput[] | AbonnementUncheckedCreateWithoutCanteenStudentInput[]
    connectOrCreate?: AbonnementCreateOrConnectWithoutCanteenStudentInput | AbonnementCreateOrConnectWithoutCanteenStudentInput[]
    upsert?: AbonnementUpsertWithWhereUniqueWithoutCanteenStudentInput | AbonnementUpsertWithWhereUniqueWithoutCanteenStudentInput[]
    createMany?: AbonnementCreateManyCanteenStudentInputEnvelope
    set?: AbonnementWhereUniqueInput | AbonnementWhereUniqueInput[]
    disconnect?: AbonnementWhereUniqueInput | AbonnementWhereUniqueInput[]
    delete?: AbonnementWhereUniqueInput | AbonnementWhereUniqueInput[]
    connect?: AbonnementWhereUniqueInput | AbonnementWhereUniqueInput[]
    update?: AbonnementUpdateWithWhereUniqueWithoutCanteenStudentInput | AbonnementUpdateWithWhereUniqueWithoutCanteenStudentInput[]
    updateMany?: AbonnementUpdateManyWithWhereWithoutCanteenStudentInput | AbonnementUpdateManyWithWhereWithoutCanteenStudentInput[]
    deleteMany?: AbonnementScalarWhereInput | AbonnementScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutCanteenStudentNestedInput = {
    create?: XOR<NotificationCreateWithoutCanteenStudentInput, NotificationUncheckedCreateWithoutCanteenStudentInput> | NotificationCreateWithoutCanteenStudentInput[] | NotificationUncheckedCreateWithoutCanteenStudentInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutCanteenStudentInput | NotificationCreateOrConnectWithoutCanteenStudentInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutCanteenStudentInput | NotificationUpsertWithWhereUniqueWithoutCanteenStudentInput[]
    createMany?: NotificationCreateManyCanteenStudentInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutCanteenStudentInput | NotificationUpdateWithWhereUniqueWithoutCanteenStudentInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutCanteenStudentInput | NotificationUpdateManyWithWhereWithoutCanteenStudentInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type RepasUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<RepasCreateWithoutStudentInput, RepasUncheckedCreateWithoutStudentInput> | RepasCreateWithoutStudentInput[] | RepasUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: RepasCreateOrConnectWithoutStudentInput | RepasCreateOrConnectWithoutStudentInput[]
    upsert?: RepasUpsertWithWhereUniqueWithoutStudentInput | RepasUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: RepasCreateManyStudentInputEnvelope
    set?: RepasWhereUniqueInput | RepasWhereUniqueInput[]
    disconnect?: RepasWhereUniqueInput | RepasWhereUniqueInput[]
    delete?: RepasWhereUniqueInput | RepasWhereUniqueInput[]
    connect?: RepasWhereUniqueInput | RepasWhereUniqueInput[]
    update?: RepasUpdateWithWhereUniqueWithoutStudentInput | RepasUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: RepasUpdateManyWithWhereWithoutStudentInput | RepasUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: RepasScalarWhereInput | RepasScalarWhereInput[]
  }

  export type CanteenStudentCreateNestedOneWithoutAbonnementsInput = {
    create?: XOR<CanteenStudentCreateWithoutAbonnementsInput, CanteenStudentUncheckedCreateWithoutAbonnementsInput>
    connectOrCreate?: CanteenStudentCreateOrConnectWithoutAbonnementsInput
    connect?: CanteenStudentWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableEnumStatusSubscriptionFieldUpdateOperationsInput = {
    set?: $Enums.StatusSubscription | null
  }

  export type CanteenStudentUpdateOneRequiredWithoutAbonnementsNestedInput = {
    create?: XOR<CanteenStudentCreateWithoutAbonnementsInput, CanteenStudentUncheckedCreateWithoutAbonnementsInput>
    connectOrCreate?: CanteenStudentCreateOrConnectWithoutAbonnementsInput
    upsert?: CanteenStudentUpsertWithoutAbonnementsInput
    connect?: CanteenStudentWhereUniqueInput
    update?: XOR<XOR<CanteenStudentUpdateToOneWithWhereWithoutAbonnementsInput, CanteenStudentUpdateWithoutAbonnementsInput>, CanteenStudentUncheckedUpdateWithoutAbonnementsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CanteenStudentCreateNestedOneWithoutRepasInput = {
    create?: XOR<CanteenStudentCreateWithoutRepasInput, CanteenStudentUncheckedCreateWithoutRepasInput>
    connectOrCreate?: CanteenStudentCreateOrConnectWithoutRepasInput
    connect?: CanteenStudentWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type CanteenStudentUpdateOneRequiredWithoutRepasNestedInput = {
    create?: XOR<CanteenStudentCreateWithoutRepasInput, CanteenStudentUncheckedCreateWithoutRepasInput>
    connectOrCreate?: CanteenStudentCreateOrConnectWithoutRepasInput
    upsert?: CanteenStudentUpsertWithoutRepasInput
    connect?: CanteenStudentWhereUniqueInput
    update?: XOR<XOR<CanteenStudentUpdateToOneWithWhereWithoutRepasInput, CanteenStudentUpdateWithoutRepasInput>, CanteenStudentUncheckedUpdateWithoutRepasInput>
  }

  export type CanteenStudentCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<CanteenStudentCreateWithoutNotificationsInput, CanteenStudentUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: CanteenStudentCreateOrConnectWithoutNotificationsInput
    connect?: CanteenStudentWhereUniqueInput
  }

  export type CanteenStudentUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<CanteenStudentCreateWithoutNotificationsInput, CanteenStudentUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: CanteenStudentCreateOrConnectWithoutNotificationsInput
    upsert?: CanteenStudentUpsertWithoutNotificationsInput
    connect?: CanteenStudentWhereUniqueInput
    update?: XOR<XOR<CanteenStudentUpdateToOneWithWhereWithoutNotificationsInput, CanteenStudentUpdateWithoutNotificationsInput>, CanteenStudentUncheckedUpdateWithoutNotificationsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumStatusSubscriptionNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusSubscription | EnumStatusSubscriptionFieldRefInput<$PrismaModel> | null
    in?: $Enums.StatusSubscription[] | ListEnumStatusSubscriptionFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.StatusSubscription[] | ListEnumStatusSubscriptionFieldRefInput<$PrismaModel> | null
    not?: NestedEnumStatusSubscriptionNullableFilter<$PrismaModel> | $Enums.StatusSubscription | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumStatusSubscriptionNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusSubscription | EnumStatusSubscriptionFieldRefInput<$PrismaModel> | null
    in?: $Enums.StatusSubscription[] | ListEnumStatusSubscriptionFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.StatusSubscription[] | ListEnumStatusSubscriptionFieldRefInput<$PrismaModel> | null
    not?: NestedEnumStatusSubscriptionNullableWithAggregatesFilter<$PrismaModel> | $Enums.StatusSubscription | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumStatusSubscriptionNullableFilter<$PrismaModel>
    _max?: NestedEnumStatusSubscriptionNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ParentCreateWithoutUserInput = {
    canteenStudents?: CanteenStudentCreateNestedManyWithoutParentInput
  }

  export type ParentUncheckedCreateWithoutUserInput = {
    canteenStudents?: CanteenStudentUncheckedCreateNestedManyWithoutParentInput
  }

  export type ParentCreateOrConnectWithoutUserInput = {
    where: ParentWhereUniqueInput
    create: XOR<ParentCreateWithoutUserInput, ParentUncheckedCreateWithoutUserInput>
  }

  export type ParentUpsertWithoutUserInput = {
    update: XOR<ParentUpdateWithoutUserInput, ParentUncheckedUpdateWithoutUserInput>
    create: XOR<ParentCreateWithoutUserInput, ParentUncheckedCreateWithoutUserInput>
    where?: ParentWhereInput
  }

  export type ParentUpdateToOneWithWhereWithoutUserInput = {
    where?: ParentWhereInput
    data: XOR<ParentUpdateWithoutUserInput, ParentUncheckedUpdateWithoutUserInput>
  }

  export type ParentUpdateWithoutUserInput = {
    canteenStudents?: CanteenStudentUpdateManyWithoutParentNestedInput
  }

  export type ParentUncheckedUpdateWithoutUserInput = {
    canteenStudents?: CanteenStudentUncheckedUpdateManyWithoutParentNestedInput
  }

  export type UserCreateWithoutParentInput = {
    id?: string
    email: string
    password?: string | null
    role: $Enums.UserRole
    name: string
    searchableName?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutParentInput = {
    id?: string
    email: string
    password?: string | null
    role: $Enums.UserRole
    name: string
    searchableName?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutParentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutParentInput, UserUncheckedCreateWithoutParentInput>
  }

  export type CanteenStudentCreateWithoutParentInput = {
    id?: string
    matriculeHashe: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    abonnements?: AbonnementCreateNestedManyWithoutCanteenStudentInput
    notifications?: NotificationCreateNestedManyWithoutCanteenStudentInput
    repas?: RepasCreateNestedManyWithoutStudentInput
    enrolledStudent: EnrolledStudentCreateNestedOneWithoutCanteenStudentInput
  }

  export type CanteenStudentUncheckedCreateWithoutParentInput = {
    id?: string
    enrolledStudentId: string
    matriculeHashe: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    abonnements?: AbonnementUncheckedCreateNestedManyWithoutCanteenStudentInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutCanteenStudentInput
    repas?: RepasUncheckedCreateNestedManyWithoutStudentInput
  }

  export type CanteenStudentCreateOrConnectWithoutParentInput = {
    where: CanteenStudentWhereUniqueInput
    create: XOR<CanteenStudentCreateWithoutParentInput, CanteenStudentUncheckedCreateWithoutParentInput>
  }

  export type CanteenStudentCreateManyParentInputEnvelope = {
    data: CanteenStudentCreateManyParentInput | CanteenStudentCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutParentInput = {
    update: XOR<UserUpdateWithoutParentInput, UserUncheckedUpdateWithoutParentInput>
    create: XOR<UserCreateWithoutParentInput, UserUncheckedCreateWithoutParentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutParentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutParentInput, UserUncheckedUpdateWithoutParentInput>
  }

  export type UserUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    name?: StringFieldUpdateOperationsInput | string
    searchableName?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    name?: StringFieldUpdateOperationsInput | string
    searchableName?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CanteenStudentUpsertWithWhereUniqueWithoutParentInput = {
    where: CanteenStudentWhereUniqueInput
    update: XOR<CanteenStudentUpdateWithoutParentInput, CanteenStudentUncheckedUpdateWithoutParentInput>
    create: XOR<CanteenStudentCreateWithoutParentInput, CanteenStudentUncheckedCreateWithoutParentInput>
  }

  export type CanteenStudentUpdateWithWhereUniqueWithoutParentInput = {
    where: CanteenStudentWhereUniqueInput
    data: XOR<CanteenStudentUpdateWithoutParentInput, CanteenStudentUncheckedUpdateWithoutParentInput>
  }

  export type CanteenStudentUpdateManyWithWhereWithoutParentInput = {
    where: CanteenStudentScalarWhereInput
    data: XOR<CanteenStudentUpdateManyMutationInput, CanteenStudentUncheckedUpdateManyWithoutParentInput>
  }

  export type CanteenStudentScalarWhereInput = {
    AND?: CanteenStudentScalarWhereInput | CanteenStudentScalarWhereInput[]
    OR?: CanteenStudentScalarWhereInput[]
    NOT?: CanteenStudentScalarWhereInput | CanteenStudentScalarWhereInput[]
    id?: StringFilter<"CanteenStudent"> | string
    enrolledStudentId?: StringFilter<"CanteenStudent"> | string
    matriculeHashe?: StringFilter<"CanteenStudent"> | string
    parentId?: StringFilter<"CanteenStudent"> | string
    isActive?: BoolFilter<"CanteenStudent"> | boolean
    createdAt?: DateTimeFilter<"CanteenStudent"> | Date | string
    updatedAt?: DateTimeFilter<"CanteenStudent"> | Date | string
  }

  export type CanteenStudentCreateWithoutEnrolledStudentInput = {
    id?: string
    matriculeHashe: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    abonnements?: AbonnementCreateNestedManyWithoutCanteenStudentInput
    notifications?: NotificationCreateNestedManyWithoutCanteenStudentInput
    repas?: RepasCreateNestedManyWithoutStudentInput
    parent: ParentCreateNestedOneWithoutCanteenStudentsInput
  }

  export type CanteenStudentUncheckedCreateWithoutEnrolledStudentInput = {
    id?: string
    matriculeHashe: string
    parentId: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    abonnements?: AbonnementUncheckedCreateNestedManyWithoutCanteenStudentInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutCanteenStudentInput
    repas?: RepasUncheckedCreateNestedManyWithoutStudentInput
  }

  export type CanteenStudentCreateOrConnectWithoutEnrolledStudentInput = {
    where: CanteenStudentWhereUniqueInput
    create: XOR<CanteenStudentCreateWithoutEnrolledStudentInput, CanteenStudentUncheckedCreateWithoutEnrolledStudentInput>
  }

  export type CanteenStudentUpsertWithoutEnrolledStudentInput = {
    update: XOR<CanteenStudentUpdateWithoutEnrolledStudentInput, CanteenStudentUncheckedUpdateWithoutEnrolledStudentInput>
    create: XOR<CanteenStudentCreateWithoutEnrolledStudentInput, CanteenStudentUncheckedCreateWithoutEnrolledStudentInput>
    where?: CanteenStudentWhereInput
  }

  export type CanteenStudentUpdateToOneWithWhereWithoutEnrolledStudentInput = {
    where?: CanteenStudentWhereInput
    data: XOR<CanteenStudentUpdateWithoutEnrolledStudentInput, CanteenStudentUncheckedUpdateWithoutEnrolledStudentInput>
  }

  export type CanteenStudentUpdateWithoutEnrolledStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    matriculeHashe?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    abonnements?: AbonnementUpdateManyWithoutCanteenStudentNestedInput
    notifications?: NotificationUpdateManyWithoutCanteenStudentNestedInput
    repas?: RepasUpdateManyWithoutStudentNestedInput
    parent?: ParentUpdateOneRequiredWithoutCanteenStudentsNestedInput
  }

  export type CanteenStudentUncheckedUpdateWithoutEnrolledStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    matriculeHashe?: StringFieldUpdateOperationsInput | string
    parentId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    abonnements?: AbonnementUncheckedUpdateManyWithoutCanteenStudentNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutCanteenStudentNestedInput
    repas?: RepasUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type AbonnementCreateWithoutCanteenStudentInput = {
    duration?: number | null
    price?: number | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    status?: $Enums.StatusSubscription | null
    type?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AbonnementUncheckedCreateWithoutCanteenStudentInput = {
    duration?: number | null
    price?: number | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    status?: $Enums.StatusSubscription | null
    type?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    id?: number
  }

  export type AbonnementCreateOrConnectWithoutCanteenStudentInput = {
    where: AbonnementWhereUniqueInput
    create: XOR<AbonnementCreateWithoutCanteenStudentInput, AbonnementUncheckedCreateWithoutCanteenStudentInput>
  }

  export type AbonnementCreateManyCanteenStudentInputEnvelope = {
    data: AbonnementCreateManyCanteenStudentInput | AbonnementCreateManyCanteenStudentInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutCanteenStudentInput = {
    message: string
    read?: boolean
    type: string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationUncheckedCreateWithoutCanteenStudentInput = {
    id?: number
    message: string
    read?: boolean
    type: string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutCanteenStudentInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutCanteenStudentInput, NotificationUncheckedCreateWithoutCanteenStudentInput>
  }

  export type NotificationCreateManyCanteenStudentInputEnvelope = {
    data: NotificationCreateManyCanteenStudentInput | NotificationCreateManyCanteenStudentInput[]
    skipDuplicates?: boolean
  }

  export type RepasCreateWithoutStudentInput = {
    date?: Date | string
    status?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RepasUncheckedCreateWithoutStudentInput = {
    id?: number
    date?: Date | string
    status?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RepasCreateOrConnectWithoutStudentInput = {
    where: RepasWhereUniqueInput
    create: XOR<RepasCreateWithoutStudentInput, RepasUncheckedCreateWithoutStudentInput>
  }

  export type RepasCreateManyStudentInputEnvelope = {
    data: RepasCreateManyStudentInput | RepasCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type ParentCreateWithoutCanteenStudentsInput = {
    user: UserCreateNestedOneWithoutParentInput
  }

  export type ParentUncheckedCreateWithoutCanteenStudentsInput = {
    id: string
  }

  export type ParentCreateOrConnectWithoutCanteenStudentsInput = {
    where: ParentWhereUniqueInput
    create: XOR<ParentCreateWithoutCanteenStudentsInput, ParentUncheckedCreateWithoutCanteenStudentsInput>
  }

  export type EnrolledStudentCreateWithoutCanteenStudentInput = {
    id?: string
    name: string
    searchableName?: string
    class: string
    gender: string
    matricule: string
    isRegisteredToCanteen?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EnrolledStudentUncheckedCreateWithoutCanteenStudentInput = {
    id?: string
    name: string
    searchableName?: string
    class: string
    gender: string
    matricule: string
    isRegisteredToCanteen?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EnrolledStudentCreateOrConnectWithoutCanteenStudentInput = {
    where: EnrolledStudentWhereUniqueInput
    create: XOR<EnrolledStudentCreateWithoutCanteenStudentInput, EnrolledStudentUncheckedCreateWithoutCanteenStudentInput>
  }

  export type AbonnementUpsertWithWhereUniqueWithoutCanteenStudentInput = {
    where: AbonnementWhereUniqueInput
    update: XOR<AbonnementUpdateWithoutCanteenStudentInput, AbonnementUncheckedUpdateWithoutCanteenStudentInput>
    create: XOR<AbonnementCreateWithoutCanteenStudentInput, AbonnementUncheckedCreateWithoutCanteenStudentInput>
  }

  export type AbonnementUpdateWithWhereUniqueWithoutCanteenStudentInput = {
    where: AbonnementWhereUniqueInput
    data: XOR<AbonnementUpdateWithoutCanteenStudentInput, AbonnementUncheckedUpdateWithoutCanteenStudentInput>
  }

  export type AbonnementUpdateManyWithWhereWithoutCanteenStudentInput = {
    where: AbonnementScalarWhereInput
    data: XOR<AbonnementUpdateManyMutationInput, AbonnementUncheckedUpdateManyWithoutCanteenStudentInput>
  }

  export type AbonnementScalarWhereInput = {
    AND?: AbonnementScalarWhereInput | AbonnementScalarWhereInput[]
    OR?: AbonnementScalarWhereInput[]
    NOT?: AbonnementScalarWhereInput | AbonnementScalarWhereInput[]
    duration?: IntNullableFilter<"Abonnement"> | number | null
    price?: FloatNullableFilter<"Abonnement"> | number | null
    startDate?: DateTimeNullableFilter<"Abonnement"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Abonnement"> | Date | string | null
    status?: EnumStatusSubscriptionNullableFilter<"Abonnement"> | $Enums.StatusSubscription | null
    type?: StringNullableFilter<"Abonnement"> | string | null
    createdAt?: DateTimeFilter<"Abonnement"> | Date | string
    updatedAt?: DateTimeFilter<"Abonnement"> | Date | string
    canteenStudentId?: StringFilter<"Abonnement"> | string
    id?: IntFilter<"Abonnement"> | number
  }

  export type NotificationUpsertWithWhereUniqueWithoutCanteenStudentInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutCanteenStudentInput, NotificationUncheckedUpdateWithoutCanteenStudentInput>
    create: XOR<NotificationCreateWithoutCanteenStudentInput, NotificationUncheckedCreateWithoutCanteenStudentInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutCanteenStudentInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutCanteenStudentInput, NotificationUncheckedUpdateWithoutCanteenStudentInput>
  }

  export type NotificationUpdateManyWithWhereWithoutCanteenStudentInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutCanteenStudentInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: IntFilter<"Notification"> | number
    canteenStudentId?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    read?: BoolFilter<"Notification"> | boolean
    type?: StringFilter<"Notification"> | string
    details?: JsonNullableFilter<"Notification">
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    updatedAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type RepasUpsertWithWhereUniqueWithoutStudentInput = {
    where: RepasWhereUniqueInput
    update: XOR<RepasUpdateWithoutStudentInput, RepasUncheckedUpdateWithoutStudentInput>
    create: XOR<RepasCreateWithoutStudentInput, RepasUncheckedCreateWithoutStudentInput>
  }

  export type RepasUpdateWithWhereUniqueWithoutStudentInput = {
    where: RepasWhereUniqueInput
    data: XOR<RepasUpdateWithoutStudentInput, RepasUncheckedUpdateWithoutStudentInput>
  }

  export type RepasUpdateManyWithWhereWithoutStudentInput = {
    where: RepasScalarWhereInput
    data: XOR<RepasUpdateManyMutationInput, RepasUncheckedUpdateManyWithoutStudentInput>
  }

  export type RepasScalarWhereInput = {
    AND?: RepasScalarWhereInput | RepasScalarWhereInput[]
    OR?: RepasScalarWhereInput[]
    NOT?: RepasScalarWhereInput | RepasScalarWhereInput[]
    id?: IntFilter<"Repas"> | number
    canteenStudentId?: StringFilter<"Repas"> | string
    date?: DateTimeFilter<"Repas"> | Date | string
    status?: BoolNullableFilter<"Repas"> | boolean | null
    createdAt?: DateTimeFilter<"Repas"> | Date | string
    updatedAt?: DateTimeFilter<"Repas"> | Date | string
  }

  export type ParentUpsertWithoutCanteenStudentsInput = {
    update: XOR<ParentUpdateWithoutCanteenStudentsInput, ParentUncheckedUpdateWithoutCanteenStudentsInput>
    create: XOR<ParentCreateWithoutCanteenStudentsInput, ParentUncheckedCreateWithoutCanteenStudentsInput>
    where?: ParentWhereInput
  }

  export type ParentUpdateToOneWithWhereWithoutCanteenStudentsInput = {
    where?: ParentWhereInput
    data: XOR<ParentUpdateWithoutCanteenStudentsInput, ParentUncheckedUpdateWithoutCanteenStudentsInput>
  }

  export type ParentUpdateWithoutCanteenStudentsInput = {
    user?: UserUpdateOneRequiredWithoutParentNestedInput
  }

  export type ParentUncheckedUpdateWithoutCanteenStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type EnrolledStudentUpsertWithoutCanteenStudentInput = {
    update: XOR<EnrolledStudentUpdateWithoutCanteenStudentInput, EnrolledStudentUncheckedUpdateWithoutCanteenStudentInput>
    create: XOR<EnrolledStudentCreateWithoutCanteenStudentInput, EnrolledStudentUncheckedCreateWithoutCanteenStudentInput>
    where?: EnrolledStudentWhereInput
  }

  export type EnrolledStudentUpdateToOneWithWhereWithoutCanteenStudentInput = {
    where?: EnrolledStudentWhereInput
    data: XOR<EnrolledStudentUpdateWithoutCanteenStudentInput, EnrolledStudentUncheckedUpdateWithoutCanteenStudentInput>
  }

  export type EnrolledStudentUpdateWithoutCanteenStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    searchableName?: StringFieldUpdateOperationsInput | string
    class?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    matricule?: StringFieldUpdateOperationsInput | string
    isRegisteredToCanteen?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrolledStudentUncheckedUpdateWithoutCanteenStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    searchableName?: StringFieldUpdateOperationsInput | string
    class?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    matricule?: StringFieldUpdateOperationsInput | string
    isRegisteredToCanteen?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CanteenStudentCreateWithoutAbonnementsInput = {
    id?: string
    matriculeHashe: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    notifications?: NotificationCreateNestedManyWithoutCanteenStudentInput
    repas?: RepasCreateNestedManyWithoutStudentInput
    parent: ParentCreateNestedOneWithoutCanteenStudentsInput
    enrolledStudent: EnrolledStudentCreateNestedOneWithoutCanteenStudentInput
  }

  export type CanteenStudentUncheckedCreateWithoutAbonnementsInput = {
    id?: string
    enrolledStudentId: string
    matriculeHashe: string
    parentId: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    notifications?: NotificationUncheckedCreateNestedManyWithoutCanteenStudentInput
    repas?: RepasUncheckedCreateNestedManyWithoutStudentInput
  }

  export type CanteenStudentCreateOrConnectWithoutAbonnementsInput = {
    where: CanteenStudentWhereUniqueInput
    create: XOR<CanteenStudentCreateWithoutAbonnementsInput, CanteenStudentUncheckedCreateWithoutAbonnementsInput>
  }

  export type CanteenStudentUpsertWithoutAbonnementsInput = {
    update: XOR<CanteenStudentUpdateWithoutAbonnementsInput, CanteenStudentUncheckedUpdateWithoutAbonnementsInput>
    create: XOR<CanteenStudentCreateWithoutAbonnementsInput, CanteenStudentUncheckedCreateWithoutAbonnementsInput>
    where?: CanteenStudentWhereInput
  }

  export type CanteenStudentUpdateToOneWithWhereWithoutAbonnementsInput = {
    where?: CanteenStudentWhereInput
    data: XOR<CanteenStudentUpdateWithoutAbonnementsInput, CanteenStudentUncheckedUpdateWithoutAbonnementsInput>
  }

  export type CanteenStudentUpdateWithoutAbonnementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    matriculeHashe?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifications?: NotificationUpdateManyWithoutCanteenStudentNestedInput
    repas?: RepasUpdateManyWithoutStudentNestedInput
    parent?: ParentUpdateOneRequiredWithoutCanteenStudentsNestedInput
    enrolledStudent?: EnrolledStudentUpdateOneRequiredWithoutCanteenStudentNestedInput
  }

  export type CanteenStudentUncheckedUpdateWithoutAbonnementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    enrolledStudentId?: StringFieldUpdateOperationsInput | string
    matriculeHashe?: StringFieldUpdateOperationsInput | string
    parentId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifications?: NotificationUncheckedUpdateManyWithoutCanteenStudentNestedInput
    repas?: RepasUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type CanteenStudentCreateWithoutRepasInput = {
    id?: string
    matriculeHashe: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    abonnements?: AbonnementCreateNestedManyWithoutCanteenStudentInput
    notifications?: NotificationCreateNestedManyWithoutCanteenStudentInput
    parent: ParentCreateNestedOneWithoutCanteenStudentsInput
    enrolledStudent: EnrolledStudentCreateNestedOneWithoutCanteenStudentInput
  }

  export type CanteenStudentUncheckedCreateWithoutRepasInput = {
    id?: string
    enrolledStudentId: string
    matriculeHashe: string
    parentId: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    abonnements?: AbonnementUncheckedCreateNestedManyWithoutCanteenStudentInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutCanteenStudentInput
  }

  export type CanteenStudentCreateOrConnectWithoutRepasInput = {
    where: CanteenStudentWhereUniqueInput
    create: XOR<CanteenStudentCreateWithoutRepasInput, CanteenStudentUncheckedCreateWithoutRepasInput>
  }

  export type CanteenStudentUpsertWithoutRepasInput = {
    update: XOR<CanteenStudentUpdateWithoutRepasInput, CanteenStudentUncheckedUpdateWithoutRepasInput>
    create: XOR<CanteenStudentCreateWithoutRepasInput, CanteenStudentUncheckedCreateWithoutRepasInput>
    where?: CanteenStudentWhereInput
  }

  export type CanteenStudentUpdateToOneWithWhereWithoutRepasInput = {
    where?: CanteenStudentWhereInput
    data: XOR<CanteenStudentUpdateWithoutRepasInput, CanteenStudentUncheckedUpdateWithoutRepasInput>
  }

  export type CanteenStudentUpdateWithoutRepasInput = {
    id?: StringFieldUpdateOperationsInput | string
    matriculeHashe?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    abonnements?: AbonnementUpdateManyWithoutCanteenStudentNestedInput
    notifications?: NotificationUpdateManyWithoutCanteenStudentNestedInput
    parent?: ParentUpdateOneRequiredWithoutCanteenStudentsNestedInput
    enrolledStudent?: EnrolledStudentUpdateOneRequiredWithoutCanteenStudentNestedInput
  }

  export type CanteenStudentUncheckedUpdateWithoutRepasInput = {
    id?: StringFieldUpdateOperationsInput | string
    enrolledStudentId?: StringFieldUpdateOperationsInput | string
    matriculeHashe?: StringFieldUpdateOperationsInput | string
    parentId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    abonnements?: AbonnementUncheckedUpdateManyWithoutCanteenStudentNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutCanteenStudentNestedInput
  }

  export type CanteenStudentCreateWithoutNotificationsInput = {
    id?: string
    matriculeHashe: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    abonnements?: AbonnementCreateNestedManyWithoutCanteenStudentInput
    repas?: RepasCreateNestedManyWithoutStudentInput
    parent: ParentCreateNestedOneWithoutCanteenStudentsInput
    enrolledStudent: EnrolledStudentCreateNestedOneWithoutCanteenStudentInput
  }

  export type CanteenStudentUncheckedCreateWithoutNotificationsInput = {
    id?: string
    enrolledStudentId: string
    matriculeHashe: string
    parentId: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    abonnements?: AbonnementUncheckedCreateNestedManyWithoutCanteenStudentInput
    repas?: RepasUncheckedCreateNestedManyWithoutStudentInput
  }

  export type CanteenStudentCreateOrConnectWithoutNotificationsInput = {
    where: CanteenStudentWhereUniqueInput
    create: XOR<CanteenStudentCreateWithoutNotificationsInput, CanteenStudentUncheckedCreateWithoutNotificationsInput>
  }

  export type CanteenStudentUpsertWithoutNotificationsInput = {
    update: XOR<CanteenStudentUpdateWithoutNotificationsInput, CanteenStudentUncheckedUpdateWithoutNotificationsInput>
    create: XOR<CanteenStudentCreateWithoutNotificationsInput, CanteenStudentUncheckedCreateWithoutNotificationsInput>
    where?: CanteenStudentWhereInput
  }

  export type CanteenStudentUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: CanteenStudentWhereInput
    data: XOR<CanteenStudentUpdateWithoutNotificationsInput, CanteenStudentUncheckedUpdateWithoutNotificationsInput>
  }

  export type CanteenStudentUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    matriculeHashe?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    abonnements?: AbonnementUpdateManyWithoutCanteenStudentNestedInput
    repas?: RepasUpdateManyWithoutStudentNestedInput
    parent?: ParentUpdateOneRequiredWithoutCanteenStudentsNestedInput
    enrolledStudent?: EnrolledStudentUpdateOneRequiredWithoutCanteenStudentNestedInput
  }

  export type CanteenStudentUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    enrolledStudentId?: StringFieldUpdateOperationsInput | string
    matriculeHashe?: StringFieldUpdateOperationsInput | string
    parentId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    abonnements?: AbonnementUncheckedUpdateManyWithoutCanteenStudentNestedInput
    repas?: RepasUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type CanteenStudentCreateManyParentInput = {
    id?: string
    enrolledStudentId: string
    matriculeHashe: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CanteenStudentUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    matriculeHashe?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    abonnements?: AbonnementUpdateManyWithoutCanteenStudentNestedInput
    notifications?: NotificationUpdateManyWithoutCanteenStudentNestedInput
    repas?: RepasUpdateManyWithoutStudentNestedInput
    enrolledStudent?: EnrolledStudentUpdateOneRequiredWithoutCanteenStudentNestedInput
  }

  export type CanteenStudentUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    enrolledStudentId?: StringFieldUpdateOperationsInput | string
    matriculeHashe?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    abonnements?: AbonnementUncheckedUpdateManyWithoutCanteenStudentNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutCanteenStudentNestedInput
    repas?: RepasUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type CanteenStudentUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    enrolledStudentId?: StringFieldUpdateOperationsInput | string
    matriculeHashe?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AbonnementCreateManyCanteenStudentInput = {
    duration?: number | null
    price?: number | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    status?: $Enums.StatusSubscription | null
    type?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    id?: number
  }

  export type NotificationCreateManyCanteenStudentInput = {
    id?: number
    message: string
    read?: boolean
    type: string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RepasCreateManyStudentInput = {
    id?: number
    date?: Date | string
    status?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AbonnementUpdateWithoutCanteenStudentInput = {
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumStatusSubscriptionFieldUpdateOperationsInput | $Enums.StatusSubscription | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AbonnementUncheckedUpdateWithoutCanteenStudentInput = {
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumStatusSubscriptionFieldUpdateOperationsInput | $Enums.StatusSubscription | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: IntFieldUpdateOperationsInput | number
  }

  export type AbonnementUncheckedUpdateManyWithoutCanteenStudentInput = {
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumStatusSubscriptionFieldUpdateOperationsInput | $Enums.StatusSubscription | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: IntFieldUpdateOperationsInput | number
  }

  export type NotificationUpdateWithoutCanteenStudentInput = {
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    type?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateWithoutCanteenStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    type?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutCanteenStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    type?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RepasUpdateWithoutStudentInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RepasUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RepasUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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