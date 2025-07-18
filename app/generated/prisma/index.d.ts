
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
 * Model UserProfile
 * 
 */
export type UserProfile = $Result.DefaultSelection<Prisma.$UserProfilePayload>
/**
 * Model UserToken
 * 
 */
export type UserToken = $Result.DefaultSelection<Prisma.$UserTokenPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model ProjectDetail
 * 
 */
export type ProjectDetail = $Result.DefaultSelection<Prisma.$ProjectDetailPayload>
/**
 * Model ProjectPhase
 * 
 */
export type ProjectPhase = $Result.DefaultSelection<Prisma.$ProjectPhasePayload>
/**
 * Model ProjectPhaseTask
 * 
 */
export type ProjectPhaseTask = $Result.DefaultSelection<Prisma.$ProjectPhaseTaskPayload>
/**
 * Model ConstructionPhase
 * 
 */
export type ConstructionPhase = $Result.DefaultSelection<Prisma.$ConstructionPhasePayload>
/**
 * Model ConstructionTask
 * 
 */
export type ConstructionTask = $Result.DefaultSelection<Prisma.$ConstructionTaskPayload>
/**
 * Model ProjectDocument
 * 
 */
export type ProjectDocument = $Result.DefaultSelection<Prisma.$ProjectDocumentPayload>
/**
 * Model Budget
 * 
 */
export type Budget = $Result.DefaultSelection<Prisma.$BudgetPayload>
/**
 * Model ExecutionCostEstimate
 * 
 */
export type ExecutionCostEstimate = $Result.DefaultSelection<Prisma.$ExecutionCostEstimatePayload>

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
   * `prisma.userProfile`: Exposes CRUD operations for the **UserProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserProfiles
    * const userProfiles = await prisma.userProfile.findMany()
    * ```
    */
  get userProfile(): Prisma.UserProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userToken`: Exposes CRUD operations for the **UserToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserTokens
    * const userTokens = await prisma.userToken.findMany()
    * ```
    */
  get userToken(): Prisma.UserTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectDetail`: Exposes CRUD operations for the **ProjectDetail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectDetails
    * const projectDetails = await prisma.projectDetail.findMany()
    * ```
    */
  get projectDetail(): Prisma.ProjectDetailDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectPhase`: Exposes CRUD operations for the **ProjectPhase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectPhases
    * const projectPhases = await prisma.projectPhase.findMany()
    * ```
    */
  get projectPhase(): Prisma.ProjectPhaseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectPhaseTask`: Exposes CRUD operations for the **ProjectPhaseTask** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectPhaseTasks
    * const projectPhaseTasks = await prisma.projectPhaseTask.findMany()
    * ```
    */
  get projectPhaseTask(): Prisma.ProjectPhaseTaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.constructionPhase`: Exposes CRUD operations for the **ConstructionPhase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ConstructionPhases
    * const constructionPhases = await prisma.constructionPhase.findMany()
    * ```
    */
  get constructionPhase(): Prisma.ConstructionPhaseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.constructionTask`: Exposes CRUD operations for the **ConstructionTask** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ConstructionTasks
    * const constructionTasks = await prisma.constructionTask.findMany()
    * ```
    */
  get constructionTask(): Prisma.ConstructionTaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectDocument`: Exposes CRUD operations for the **ProjectDocument** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectDocuments
    * const projectDocuments = await prisma.projectDocument.findMany()
    * ```
    */
  get projectDocument(): Prisma.ProjectDocumentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.budget`: Exposes CRUD operations for the **Budget** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Budgets
    * const budgets = await prisma.budget.findMany()
    * ```
    */
  get budget(): Prisma.BudgetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.executionCostEstimate`: Exposes CRUD operations for the **ExecutionCostEstimate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExecutionCostEstimates
    * const executionCostEstimates = await prisma.executionCostEstimate.findMany()
    * ```
    */
  get executionCostEstimate(): Prisma.ExecutionCostEstimateDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
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
    UserProfile: 'UserProfile',
    UserToken: 'UserToken',
    Project: 'Project',
    ProjectDetail: 'ProjectDetail',
    ProjectPhase: 'ProjectPhase',
    ProjectPhaseTask: 'ProjectPhaseTask',
    ConstructionPhase: 'ConstructionPhase',
    ConstructionTask: 'ConstructionTask',
    ProjectDocument: 'ProjectDocument',
    Budget: 'Budget',
    ExecutionCostEstimate: 'ExecutionCostEstimate'
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
      modelProps: "user" | "userProfile" | "userToken" | "project" | "projectDetail" | "projectPhase" | "projectPhaseTask" | "constructionPhase" | "constructionTask" | "projectDocument" | "budget" | "executionCostEstimate"
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
      UserProfile: {
        payload: Prisma.$UserProfilePayload<ExtArgs>
        fields: Prisma.UserProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findFirst: {
            args: Prisma.UserProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findMany: {
            args: Prisma.UserProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          create: {
            args: Prisma.UserProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          createMany: {
            args: Prisma.UserProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          delete: {
            args: Prisma.UserProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          update: {
            args: Prisma.UserProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          deleteMany: {
            args: Prisma.UserProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          upsert: {
            args: Prisma.UserProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          aggregate: {
            args: Prisma.UserProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserProfile>
          }
          groupBy: {
            args: Prisma.UserProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserProfileCountArgs<ExtArgs>
            result: $Utils.Optional<UserProfileCountAggregateOutputType> | number
          }
        }
      }
      UserToken: {
        payload: Prisma.$UserTokenPayload<ExtArgs>
        fields: Prisma.UserTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTokenPayload>
          }
          findFirst: {
            args: Prisma.UserTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTokenPayload>
          }
          findMany: {
            args: Prisma.UserTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTokenPayload>[]
          }
          create: {
            args: Prisma.UserTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTokenPayload>
          }
          createMany: {
            args: Prisma.UserTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTokenPayload>[]
          }
          delete: {
            args: Prisma.UserTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTokenPayload>
          }
          update: {
            args: Prisma.UserTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTokenPayload>
          }
          deleteMany: {
            args: Prisma.UserTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTokenPayload>[]
          }
          upsert: {
            args: Prisma.UserTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTokenPayload>
          }
          aggregate: {
            args: Prisma.UserTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserToken>
          }
          groupBy: {
            args: Prisma.UserTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserTokenCountArgs<ExtArgs>
            result: $Utils.Optional<UserTokenCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      ProjectDetail: {
        payload: Prisma.$ProjectDetailPayload<ExtArgs>
        fields: Prisma.ProjectDetailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectDetailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDetailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectDetailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDetailPayload>
          }
          findFirst: {
            args: Prisma.ProjectDetailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDetailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectDetailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDetailPayload>
          }
          findMany: {
            args: Prisma.ProjectDetailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDetailPayload>[]
          }
          create: {
            args: Prisma.ProjectDetailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDetailPayload>
          }
          createMany: {
            args: Prisma.ProjectDetailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectDetailCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDetailPayload>[]
          }
          delete: {
            args: Prisma.ProjectDetailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDetailPayload>
          }
          update: {
            args: Prisma.ProjectDetailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDetailPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDetailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectDetailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectDetailUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDetailPayload>[]
          }
          upsert: {
            args: Prisma.ProjectDetailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDetailPayload>
          }
          aggregate: {
            args: Prisma.ProjectDetailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectDetail>
          }
          groupBy: {
            args: Prisma.ProjectDetailGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectDetailGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectDetailCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectDetailCountAggregateOutputType> | number
          }
        }
      }
      ProjectPhase: {
        payload: Prisma.$ProjectPhasePayload<ExtArgs>
        fields: Prisma.ProjectPhaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectPhaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPhasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectPhaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPhasePayload>
          }
          findFirst: {
            args: Prisma.ProjectPhaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPhasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectPhaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPhasePayload>
          }
          findMany: {
            args: Prisma.ProjectPhaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPhasePayload>[]
          }
          create: {
            args: Prisma.ProjectPhaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPhasePayload>
          }
          createMany: {
            args: Prisma.ProjectPhaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectPhaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPhasePayload>[]
          }
          delete: {
            args: Prisma.ProjectPhaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPhasePayload>
          }
          update: {
            args: Prisma.ProjectPhaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPhasePayload>
          }
          deleteMany: {
            args: Prisma.ProjectPhaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectPhaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectPhaseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPhasePayload>[]
          }
          upsert: {
            args: Prisma.ProjectPhaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPhasePayload>
          }
          aggregate: {
            args: Prisma.ProjectPhaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectPhase>
          }
          groupBy: {
            args: Prisma.ProjectPhaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectPhaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectPhaseCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectPhaseCountAggregateOutputType> | number
          }
        }
      }
      ProjectPhaseTask: {
        payload: Prisma.$ProjectPhaseTaskPayload<ExtArgs>
        fields: Prisma.ProjectPhaseTaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectPhaseTaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPhaseTaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectPhaseTaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPhaseTaskPayload>
          }
          findFirst: {
            args: Prisma.ProjectPhaseTaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPhaseTaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectPhaseTaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPhaseTaskPayload>
          }
          findMany: {
            args: Prisma.ProjectPhaseTaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPhaseTaskPayload>[]
          }
          create: {
            args: Prisma.ProjectPhaseTaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPhaseTaskPayload>
          }
          createMany: {
            args: Prisma.ProjectPhaseTaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectPhaseTaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPhaseTaskPayload>[]
          }
          delete: {
            args: Prisma.ProjectPhaseTaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPhaseTaskPayload>
          }
          update: {
            args: Prisma.ProjectPhaseTaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPhaseTaskPayload>
          }
          deleteMany: {
            args: Prisma.ProjectPhaseTaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectPhaseTaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectPhaseTaskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPhaseTaskPayload>[]
          }
          upsert: {
            args: Prisma.ProjectPhaseTaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPhaseTaskPayload>
          }
          aggregate: {
            args: Prisma.ProjectPhaseTaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectPhaseTask>
          }
          groupBy: {
            args: Prisma.ProjectPhaseTaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectPhaseTaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectPhaseTaskCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectPhaseTaskCountAggregateOutputType> | number
          }
        }
      }
      ConstructionPhase: {
        payload: Prisma.$ConstructionPhasePayload<ExtArgs>
        fields: Prisma.ConstructionPhaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConstructionPhaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConstructionPhasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConstructionPhaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConstructionPhasePayload>
          }
          findFirst: {
            args: Prisma.ConstructionPhaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConstructionPhasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConstructionPhaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConstructionPhasePayload>
          }
          findMany: {
            args: Prisma.ConstructionPhaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConstructionPhasePayload>[]
          }
          create: {
            args: Prisma.ConstructionPhaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConstructionPhasePayload>
          }
          createMany: {
            args: Prisma.ConstructionPhaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConstructionPhaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConstructionPhasePayload>[]
          }
          delete: {
            args: Prisma.ConstructionPhaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConstructionPhasePayload>
          }
          update: {
            args: Prisma.ConstructionPhaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConstructionPhasePayload>
          }
          deleteMany: {
            args: Prisma.ConstructionPhaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConstructionPhaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConstructionPhaseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConstructionPhasePayload>[]
          }
          upsert: {
            args: Prisma.ConstructionPhaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConstructionPhasePayload>
          }
          aggregate: {
            args: Prisma.ConstructionPhaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConstructionPhase>
          }
          groupBy: {
            args: Prisma.ConstructionPhaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConstructionPhaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConstructionPhaseCountArgs<ExtArgs>
            result: $Utils.Optional<ConstructionPhaseCountAggregateOutputType> | number
          }
        }
      }
      ConstructionTask: {
        payload: Prisma.$ConstructionTaskPayload<ExtArgs>
        fields: Prisma.ConstructionTaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConstructionTaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConstructionTaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConstructionTaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConstructionTaskPayload>
          }
          findFirst: {
            args: Prisma.ConstructionTaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConstructionTaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConstructionTaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConstructionTaskPayload>
          }
          findMany: {
            args: Prisma.ConstructionTaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConstructionTaskPayload>[]
          }
          create: {
            args: Prisma.ConstructionTaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConstructionTaskPayload>
          }
          createMany: {
            args: Prisma.ConstructionTaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConstructionTaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConstructionTaskPayload>[]
          }
          delete: {
            args: Prisma.ConstructionTaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConstructionTaskPayload>
          }
          update: {
            args: Prisma.ConstructionTaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConstructionTaskPayload>
          }
          deleteMany: {
            args: Prisma.ConstructionTaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConstructionTaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConstructionTaskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConstructionTaskPayload>[]
          }
          upsert: {
            args: Prisma.ConstructionTaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConstructionTaskPayload>
          }
          aggregate: {
            args: Prisma.ConstructionTaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConstructionTask>
          }
          groupBy: {
            args: Prisma.ConstructionTaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConstructionTaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConstructionTaskCountArgs<ExtArgs>
            result: $Utils.Optional<ConstructionTaskCountAggregateOutputType> | number
          }
        }
      }
      ProjectDocument: {
        payload: Prisma.$ProjectDocumentPayload<ExtArgs>
        fields: Prisma.ProjectDocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectDocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectDocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDocumentPayload>
          }
          findFirst: {
            args: Prisma.ProjectDocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectDocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDocumentPayload>
          }
          findMany: {
            args: Prisma.ProjectDocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDocumentPayload>[]
          }
          create: {
            args: Prisma.ProjectDocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDocumentPayload>
          }
          createMany: {
            args: Prisma.ProjectDocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectDocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDocumentPayload>[]
          }
          delete: {
            args: Prisma.ProjectDocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDocumentPayload>
          }
          update: {
            args: Prisma.ProjectDocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDocumentPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectDocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectDocumentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDocumentPayload>[]
          }
          upsert: {
            args: Prisma.ProjectDocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDocumentPayload>
          }
          aggregate: {
            args: Prisma.ProjectDocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectDocument>
          }
          groupBy: {
            args: Prisma.ProjectDocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectDocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectDocumentCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectDocumentCountAggregateOutputType> | number
          }
        }
      }
      Budget: {
        payload: Prisma.$BudgetPayload<ExtArgs>
        fields: Prisma.BudgetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BudgetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BudgetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>
          }
          findFirst: {
            args: Prisma.BudgetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BudgetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>
          }
          findMany: {
            args: Prisma.BudgetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>[]
          }
          create: {
            args: Prisma.BudgetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>
          }
          createMany: {
            args: Prisma.BudgetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BudgetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>[]
          }
          delete: {
            args: Prisma.BudgetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>
          }
          update: {
            args: Prisma.BudgetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>
          }
          deleteMany: {
            args: Prisma.BudgetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BudgetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BudgetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>[]
          }
          upsert: {
            args: Prisma.BudgetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>
          }
          aggregate: {
            args: Prisma.BudgetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBudget>
          }
          groupBy: {
            args: Prisma.BudgetGroupByArgs<ExtArgs>
            result: $Utils.Optional<BudgetGroupByOutputType>[]
          }
          count: {
            args: Prisma.BudgetCountArgs<ExtArgs>
            result: $Utils.Optional<BudgetCountAggregateOutputType> | number
          }
        }
      }
      ExecutionCostEstimate: {
        payload: Prisma.$ExecutionCostEstimatePayload<ExtArgs>
        fields: Prisma.ExecutionCostEstimateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExecutionCostEstimateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionCostEstimatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExecutionCostEstimateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionCostEstimatePayload>
          }
          findFirst: {
            args: Prisma.ExecutionCostEstimateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionCostEstimatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExecutionCostEstimateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionCostEstimatePayload>
          }
          findMany: {
            args: Prisma.ExecutionCostEstimateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionCostEstimatePayload>[]
          }
          create: {
            args: Prisma.ExecutionCostEstimateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionCostEstimatePayload>
          }
          createMany: {
            args: Prisma.ExecutionCostEstimateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExecutionCostEstimateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionCostEstimatePayload>[]
          }
          delete: {
            args: Prisma.ExecutionCostEstimateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionCostEstimatePayload>
          }
          update: {
            args: Prisma.ExecutionCostEstimateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionCostEstimatePayload>
          }
          deleteMany: {
            args: Prisma.ExecutionCostEstimateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExecutionCostEstimateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExecutionCostEstimateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionCostEstimatePayload>[]
          }
          upsert: {
            args: Prisma.ExecutionCostEstimateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionCostEstimatePayload>
          }
          aggregate: {
            args: Prisma.ExecutionCostEstimateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExecutionCostEstimate>
          }
          groupBy: {
            args: Prisma.ExecutionCostEstimateGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExecutionCostEstimateGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExecutionCostEstimateCountArgs<ExtArgs>
            result: $Utils.Optional<ExecutionCostEstimateCountAggregateOutputType> | number
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
    userProfile?: UserProfileOmit
    userToken?: UserTokenOmit
    project?: ProjectOmit
    projectDetail?: ProjectDetailOmit
    projectPhase?: ProjectPhaseOmit
    projectPhaseTask?: ProjectPhaseTaskOmit
    constructionPhase?: ConstructionPhaseOmit
    constructionTask?: ConstructionTaskOmit
    projectDocument?: ProjectDocumentOmit
    budget?: BudgetOmit
    executionCostEstimate?: ExecutionCostEstimateOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    tokens: number
    projects: number
    budgets: number
    uploadedDocs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tokens?: boolean | UserCountOutputTypeCountTokensArgs
    projects?: boolean | UserCountOutputTypeCountProjectsArgs
    budgets?: boolean | UserCountOutputTypeCountBudgetsArgs
    uploadedDocs?: boolean | UserCountOutputTypeCountUploadedDocsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserTokenWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBudgetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BudgetWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUploadedDocsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectDocumentWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    designPhases: number
    constructionPhases: number
    documents: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    designPhases?: boolean | ProjectCountOutputTypeCountDesignPhasesArgs
    constructionPhases?: boolean | ProjectCountOutputTypeCountConstructionPhasesArgs
    documents?: boolean | ProjectCountOutputTypeCountDocumentsArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountDesignPhasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectPhaseWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountConstructionPhasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConstructionPhaseWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectDocumentWhereInput
  }


  /**
   * Count Type ProjectPhaseCountOutputType
   */

  export type ProjectPhaseCountOutputType = {
    tasks: number
  }

  export type ProjectPhaseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | ProjectPhaseCountOutputTypeCountTasksArgs
  }

  // Custom InputTypes
  /**
   * ProjectPhaseCountOutputType without action
   */
  export type ProjectPhaseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPhaseCountOutputType
     */
    select?: ProjectPhaseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectPhaseCountOutputType without action
   */
  export type ProjectPhaseCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectPhaseTaskWhereInput
  }


  /**
   * Count Type ConstructionPhaseCountOutputType
   */

  export type ConstructionPhaseCountOutputType = {
    tasks: number
  }

  export type ConstructionPhaseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | ConstructionPhaseCountOutputTypeCountTasksArgs
  }

  // Custom InputTypes
  /**
   * ConstructionPhaseCountOutputType without action
   */
  export type ConstructionPhaseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConstructionPhaseCountOutputType
     */
    select?: ConstructionPhaseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConstructionPhaseCountOutputType without action
   */
  export type ConstructionPhaseCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConstructionTaskWhereInput
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
    emailVerified: boolean | null
    passwordHash: string | null
    accountStatus: string | null
    createdAt: Date | null
    lastLogin: Date | null
    userType: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    emailVerified: boolean | null
    passwordHash: string | null
    accountStatus: string | null
    createdAt: Date | null
    lastLogin: Date | null
    userType: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    emailVerified: number
    passwordHash: number
    accountStatus: number
    createdAt: number
    lastLogin: number
    userType: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    emailVerified?: true
    passwordHash?: true
    accountStatus?: true
    createdAt?: true
    lastLogin?: true
    userType?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    emailVerified?: true
    passwordHash?: true
    accountStatus?: true
    createdAt?: true
    lastLogin?: true
    userType?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    emailVerified?: true
    passwordHash?: true
    accountStatus?: true
    createdAt?: true
    lastLogin?: true
    userType?: true
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
    emailVerified: boolean | null
    passwordHash: string
    accountStatus: string | null
    createdAt: Date | null
    lastLogin: Date | null
    userType: string | null
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
    emailVerified?: boolean
    passwordHash?: boolean
    accountStatus?: boolean
    createdAt?: boolean
    lastLogin?: boolean
    userType?: boolean
    profile?: boolean | User$profileArgs<ExtArgs>
    tokens?: boolean | User$tokensArgs<ExtArgs>
    projects?: boolean | User$projectsArgs<ExtArgs>
    budgets?: boolean | User$budgetsArgs<ExtArgs>
    uploadedDocs?: boolean | User$uploadedDocsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    emailVerified?: boolean
    passwordHash?: boolean
    accountStatus?: boolean
    createdAt?: boolean
    lastLogin?: boolean
    userType?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    emailVerified?: boolean
    passwordHash?: boolean
    accountStatus?: boolean
    createdAt?: boolean
    lastLogin?: boolean
    userType?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    emailVerified?: boolean
    passwordHash?: boolean
    accountStatus?: boolean
    createdAt?: boolean
    lastLogin?: boolean
    userType?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "emailVerified" | "passwordHash" | "accountStatus" | "createdAt" | "lastLogin" | "userType", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | User$profileArgs<ExtArgs>
    tokens?: boolean | User$tokensArgs<ExtArgs>
    projects?: boolean | User$projectsArgs<ExtArgs>
    budgets?: boolean | User$budgetsArgs<ExtArgs>
    uploadedDocs?: boolean | User$uploadedDocsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      profile: Prisma.$UserProfilePayload<ExtArgs> | null
      tokens: Prisma.$UserTokenPayload<ExtArgs>[]
      projects: Prisma.$ProjectPayload<ExtArgs>[]
      budgets: Prisma.$BudgetPayload<ExtArgs>[]
      uploadedDocs: Prisma.$ProjectDocumentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      emailVerified: boolean | null
      passwordHash: string
      accountStatus: string | null
      createdAt: Date | null
      lastLogin: Date | null
      userType: string | null
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
    profile<T extends User$profileArgs<ExtArgs> = {}>(args?: Subset<T, User$profileArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tokens<T extends User$tokensArgs<ExtArgs> = {}>(args?: Subset<T, User$tokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projects<T extends User$projectsArgs<ExtArgs> = {}>(args?: Subset<T, User$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    budgets<T extends User$budgetsArgs<ExtArgs> = {}>(args?: Subset<T, User$budgetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    uploadedDocs<T extends User$uploadedDocsArgs<ExtArgs> = {}>(args?: Subset<T, User$uploadedDocsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly accountStatus: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly lastLogin: FieldRef<"User", 'DateTime'>
    readonly userType: FieldRef<"User", 'String'>
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
   * User.profile
   */
  export type User$profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    where?: UserProfileWhereInput
  }

  /**
   * User.tokens
   */
  export type User$tokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToken
     */
    select?: UserTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserToken
     */
    omit?: UserTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTokenInclude<ExtArgs> | null
    where?: UserTokenWhereInput
    orderBy?: UserTokenOrderByWithRelationInput | UserTokenOrderByWithRelationInput[]
    cursor?: UserTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserTokenScalarFieldEnum | UserTokenScalarFieldEnum[]
  }

  /**
   * User.projects
   */
  export type User$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * User.budgets
   */
  export type User$budgetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    where?: BudgetWhereInput
    orderBy?: BudgetOrderByWithRelationInput | BudgetOrderByWithRelationInput[]
    cursor?: BudgetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BudgetScalarFieldEnum | BudgetScalarFieldEnum[]
  }

  /**
   * User.uploadedDocs
   */
  export type User$uploadedDocsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDocument
     */
    select?: ProjectDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDocument
     */
    omit?: ProjectDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDocumentInclude<ExtArgs> | null
    where?: ProjectDocumentWhereInput
    orderBy?: ProjectDocumentOrderByWithRelationInput | ProjectDocumentOrderByWithRelationInput[]
    cursor?: ProjectDocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectDocumentScalarFieldEnum | ProjectDocumentScalarFieldEnum[]
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
   * Model UserProfile
   */

  export type AggregateUserProfile = {
    _count: UserProfileCountAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  export type UserProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    firstName: string | null
    lastName: string | null
    phone: string | null
    avatarUrl: string | null
    birthDate: Date | null
    gender: string | null
    identityDoc: string | null
    cpf: string | null
    occupation: string | null
    maritalStatus: string | null
    hasChildren: boolean | null
    ageGroup: string | null
    stylePreference: string | null
    referralSource: string | null
    privateNotes: string | null
  }

  export type UserProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    firstName: string | null
    lastName: string | null
    phone: string | null
    avatarUrl: string | null
    birthDate: Date | null
    gender: string | null
    identityDoc: string | null
    cpf: string | null
    occupation: string | null
    maritalStatus: string | null
    hasChildren: boolean | null
    ageGroup: string | null
    stylePreference: string | null
    referralSource: string | null
    privateNotes: string | null
  }

  export type UserProfileCountAggregateOutputType = {
    id: number
    userId: number
    firstName: number
    lastName: number
    phone: number
    avatarUrl: number
    birthDate: number
    gender: number
    identityDoc: number
    cpf: number
    occupation: number
    maritalStatus: number
    hasChildren: number
    ageGroup: number
    stylePreference: number
    referralSource: number
    privateNotes: number
    _all: number
  }


  export type UserProfileMinAggregateInputType = {
    id?: true
    userId?: true
    firstName?: true
    lastName?: true
    phone?: true
    avatarUrl?: true
    birthDate?: true
    gender?: true
    identityDoc?: true
    cpf?: true
    occupation?: true
    maritalStatus?: true
    hasChildren?: true
    ageGroup?: true
    stylePreference?: true
    referralSource?: true
    privateNotes?: true
  }

  export type UserProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    firstName?: true
    lastName?: true
    phone?: true
    avatarUrl?: true
    birthDate?: true
    gender?: true
    identityDoc?: true
    cpf?: true
    occupation?: true
    maritalStatus?: true
    hasChildren?: true
    ageGroup?: true
    stylePreference?: true
    referralSource?: true
    privateNotes?: true
  }

  export type UserProfileCountAggregateInputType = {
    id?: true
    userId?: true
    firstName?: true
    lastName?: true
    phone?: true
    avatarUrl?: true
    birthDate?: true
    gender?: true
    identityDoc?: true
    cpf?: true
    occupation?: true
    maritalStatus?: true
    hasChildren?: true
    ageGroup?: true
    stylePreference?: true
    referralSource?: true
    privateNotes?: true
    _all?: true
  }

  export type UserProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfile to aggregate.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserProfiles
    **/
    _count?: true | UserProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserProfileMaxAggregateInputType
  }

  export type GetUserProfileAggregateType<T extends UserProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateUserProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserProfile[P]>
      : GetScalarType<T[P], AggregateUserProfile[P]>
  }




  export type UserProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProfileWhereInput
    orderBy?: UserProfileOrderByWithAggregationInput | UserProfileOrderByWithAggregationInput[]
    by: UserProfileScalarFieldEnum[] | UserProfileScalarFieldEnum
    having?: UserProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserProfileCountAggregateInputType | true
    _min?: UserProfileMinAggregateInputType
    _max?: UserProfileMaxAggregateInputType
  }

  export type UserProfileGroupByOutputType = {
    id: string
    userId: string
    firstName: string | null
    lastName: string | null
    phone: string | null
    avatarUrl: string | null
    birthDate: Date | null
    gender: string | null
    identityDoc: string | null
    cpf: string | null
    occupation: string | null
    maritalStatus: string | null
    hasChildren: boolean | null
    ageGroup: string | null
    stylePreference: string | null
    referralSource: string | null
    privateNotes: string | null
    _count: UserProfileCountAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  type GetUserProfileGroupByPayload<T extends UserProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
            : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
        }
      >
    >


  export type UserProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    avatarUrl?: boolean
    birthDate?: boolean
    gender?: boolean
    identityDoc?: boolean
    cpf?: boolean
    occupation?: boolean
    maritalStatus?: boolean
    hasChildren?: boolean
    ageGroup?: boolean
    stylePreference?: boolean
    referralSource?: boolean
    privateNotes?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    avatarUrl?: boolean
    birthDate?: boolean
    gender?: boolean
    identityDoc?: boolean
    cpf?: boolean
    occupation?: boolean
    maritalStatus?: boolean
    hasChildren?: boolean
    ageGroup?: boolean
    stylePreference?: boolean
    referralSource?: boolean
    privateNotes?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    avatarUrl?: boolean
    birthDate?: boolean
    gender?: boolean
    identityDoc?: boolean
    cpf?: boolean
    occupation?: boolean
    maritalStatus?: boolean
    hasChildren?: boolean
    ageGroup?: boolean
    stylePreference?: boolean
    referralSource?: boolean
    privateNotes?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    avatarUrl?: boolean
    birthDate?: boolean
    gender?: boolean
    identityDoc?: boolean
    cpf?: boolean
    occupation?: boolean
    maritalStatus?: boolean
    hasChildren?: boolean
    ageGroup?: boolean
    stylePreference?: boolean
    referralSource?: boolean
    privateNotes?: boolean
  }

  export type UserProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "firstName" | "lastName" | "phone" | "avatarUrl" | "birthDate" | "gender" | "identityDoc" | "cpf" | "occupation" | "maritalStatus" | "hasChildren" | "ageGroup" | "stylePreference" | "referralSource" | "privateNotes", ExtArgs["result"]["userProfile"]>
  export type UserProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      firstName: string | null
      lastName: string | null
      phone: string | null
      avatarUrl: string | null
      birthDate: Date | null
      gender: string | null
      identityDoc: string | null
      cpf: string | null
      occupation: string | null
      maritalStatus: string | null
      hasChildren: boolean | null
      ageGroup: string | null
      stylePreference: string | null
      referralSource: string | null
      privateNotes: string | null
    }, ExtArgs["result"]["userProfile"]>
    composites: {}
  }

  type UserProfileGetPayload<S extends boolean | null | undefined | UserProfileDefaultArgs> = $Result.GetResult<Prisma.$UserProfilePayload, S>

  type UserProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserProfileCountAggregateInputType | true
    }

  export interface UserProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserProfile'], meta: { name: 'UserProfile' } }
    /**
     * Find zero or one UserProfile that matches the filter.
     * @param {UserProfileFindUniqueArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserProfileFindUniqueArgs>(args: SelectSubset<T, UserProfileFindUniqueArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserProfileFindUniqueOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, UserProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserProfileFindFirstArgs>(args?: SelectSubset<T, UserProfileFindFirstArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, UserProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserProfiles
     * const userProfiles = await prisma.userProfile.findMany()
     * 
     * // Get first 10 UserProfiles
     * const userProfiles = await prisma.userProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserProfileFindManyArgs>(args?: SelectSubset<T, UserProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserProfile.
     * @param {UserProfileCreateArgs} args - Arguments to create a UserProfile.
     * @example
     * // Create one UserProfile
     * const UserProfile = await prisma.userProfile.create({
     *   data: {
     *     // ... data to create a UserProfile
     *   }
     * })
     * 
     */
    create<T extends UserProfileCreateArgs>(args: SelectSubset<T, UserProfileCreateArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserProfiles.
     * @param {UserProfileCreateManyArgs} args - Arguments to create many UserProfiles.
     * @example
     * // Create many UserProfiles
     * const userProfile = await prisma.userProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserProfileCreateManyArgs>(args?: SelectSubset<T, UserProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserProfiles and returns the data saved in the database.
     * @param {UserProfileCreateManyAndReturnArgs} args - Arguments to create many UserProfiles.
     * @example
     * // Create many UserProfiles
     * const userProfile = await prisma.userProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserProfiles and only return the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, UserProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserProfile.
     * @param {UserProfileDeleteArgs} args - Arguments to delete one UserProfile.
     * @example
     * // Delete one UserProfile
     * const UserProfile = await prisma.userProfile.delete({
     *   where: {
     *     // ... filter to delete one UserProfile
     *   }
     * })
     * 
     */
    delete<T extends UserProfileDeleteArgs>(args: SelectSubset<T, UserProfileDeleteArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserProfile.
     * @param {UserProfileUpdateArgs} args - Arguments to update one UserProfile.
     * @example
     * // Update one UserProfile
     * const userProfile = await prisma.userProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserProfileUpdateArgs>(args: SelectSubset<T, UserProfileUpdateArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserProfiles.
     * @param {UserProfileDeleteManyArgs} args - Arguments to filter UserProfiles to delete.
     * @example
     * // Delete a few UserProfiles
     * const { count } = await prisma.userProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserProfileDeleteManyArgs>(args?: SelectSubset<T, UserProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserProfileUpdateManyArgs>(args: SelectSubset<T, UserProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles and returns the data updated in the database.
     * @param {UserProfileUpdateManyAndReturnArgs} args - Arguments to update many UserProfiles.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserProfiles and only return the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, UserProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserProfile.
     * @param {UserProfileUpsertArgs} args - Arguments to update or create a UserProfile.
     * @example
     * // Update or create a UserProfile
     * const userProfile = await prisma.userProfile.upsert({
     *   create: {
     *     // ... data to create a UserProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserProfile we want to update
     *   }
     * })
     */
    upsert<T extends UserProfileUpsertArgs>(args: SelectSubset<T, UserProfileUpsertArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileCountArgs} args - Arguments to filter UserProfiles to count.
     * @example
     * // Count the number of UserProfiles
     * const count = await prisma.userProfile.count({
     *   where: {
     *     // ... the filter for the UserProfiles we want to count
     *   }
     * })
    **/
    count<T extends UserProfileCountArgs>(
      args?: Subset<T, UserProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserProfileAggregateArgs>(args: Subset<T, UserProfileAggregateArgs>): Prisma.PrismaPromise<GetUserProfileAggregateType<T>>

    /**
     * Group by UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileGroupByArgs} args - Group by arguments.
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
      T extends UserProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserProfileGroupByArgs['orderBy'] }
        : { orderBy?: UserProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserProfile model
   */
  readonly fields: UserProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserProfile model
   */
  interface UserProfileFieldRefs {
    readonly id: FieldRef<"UserProfile", 'String'>
    readonly userId: FieldRef<"UserProfile", 'String'>
    readonly firstName: FieldRef<"UserProfile", 'String'>
    readonly lastName: FieldRef<"UserProfile", 'String'>
    readonly phone: FieldRef<"UserProfile", 'String'>
    readonly avatarUrl: FieldRef<"UserProfile", 'String'>
    readonly birthDate: FieldRef<"UserProfile", 'DateTime'>
    readonly gender: FieldRef<"UserProfile", 'String'>
    readonly identityDoc: FieldRef<"UserProfile", 'String'>
    readonly cpf: FieldRef<"UserProfile", 'String'>
    readonly occupation: FieldRef<"UserProfile", 'String'>
    readonly maritalStatus: FieldRef<"UserProfile", 'String'>
    readonly hasChildren: FieldRef<"UserProfile", 'Boolean'>
    readonly ageGroup: FieldRef<"UserProfile", 'String'>
    readonly stylePreference: FieldRef<"UserProfile", 'String'>
    readonly referralSource: FieldRef<"UserProfile", 'String'>
    readonly privateNotes: FieldRef<"UserProfile", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserProfile findUnique
   */
  export type UserProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile findUniqueOrThrow
   */
  export type UserProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile findFirst
   */
  export type UserProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile findFirstOrThrow
   */
  export type UserProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile findMany
   */
  export type UserProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfiles to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile create
   */
  export type UserProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a UserProfile.
     */
    data: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
  }

  /**
   * UserProfile createMany
   */
  export type UserProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserProfile createManyAndReturn
   */
  export type UserProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserProfile update
   */
  export type UserProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a UserProfile.
     */
    data: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
    /**
     * Choose, which UserProfile to update.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile updateMany
   */
  export type UserProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to update.
     */
    limit?: number
  }

  /**
   * UserProfile updateManyAndReturn
   */
  export type UserProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserProfile upsert
   */
  export type UserProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the UserProfile to update in case it exists.
     */
    where: UserProfileWhereUniqueInput
    /**
     * In case the UserProfile found by the `where` argument doesn't exist, create a new UserProfile with this data.
     */
    create: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
    /**
     * In case the UserProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
  }

  /**
   * UserProfile delete
   */
  export type UserProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter which UserProfile to delete.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile deleteMany
   */
  export type UserProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfiles to delete
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to delete.
     */
    limit?: number
  }

  /**
   * UserProfile without action
   */
  export type UserProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
  }


  /**
   * Model UserToken
   */

  export type AggregateUserToken = {
    _count: UserTokenCountAggregateOutputType | null
    _min: UserTokenMinAggregateOutputType | null
    _max: UserTokenMaxAggregateOutputType | null
  }

  export type UserTokenMinAggregateOutputType = {
    id: string | null
    userId: string | null
    tokenType: string | null
    token: string | null
    tokenExpiry: Date | null
    createdAt: Date | null
  }

  export type UserTokenMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    tokenType: string | null
    token: string | null
    tokenExpiry: Date | null
    createdAt: Date | null
  }

  export type UserTokenCountAggregateOutputType = {
    id: number
    userId: number
    tokenType: number
    token: number
    tokenExpiry: number
    createdAt: number
    _all: number
  }


  export type UserTokenMinAggregateInputType = {
    id?: true
    userId?: true
    tokenType?: true
    token?: true
    tokenExpiry?: true
    createdAt?: true
  }

  export type UserTokenMaxAggregateInputType = {
    id?: true
    userId?: true
    tokenType?: true
    token?: true
    tokenExpiry?: true
    createdAt?: true
  }

  export type UserTokenCountAggregateInputType = {
    id?: true
    userId?: true
    tokenType?: true
    token?: true
    tokenExpiry?: true
    createdAt?: true
    _all?: true
  }

  export type UserTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserToken to aggregate.
     */
    where?: UserTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTokens to fetch.
     */
    orderBy?: UserTokenOrderByWithRelationInput | UserTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserTokens
    **/
    _count?: true | UserTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserTokenMaxAggregateInputType
  }

  export type GetUserTokenAggregateType<T extends UserTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateUserToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserToken[P]>
      : GetScalarType<T[P], AggregateUserToken[P]>
  }




  export type UserTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserTokenWhereInput
    orderBy?: UserTokenOrderByWithAggregationInput | UserTokenOrderByWithAggregationInput[]
    by: UserTokenScalarFieldEnum[] | UserTokenScalarFieldEnum
    having?: UserTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserTokenCountAggregateInputType | true
    _min?: UserTokenMinAggregateInputType
    _max?: UserTokenMaxAggregateInputType
  }

  export type UserTokenGroupByOutputType = {
    id: string
    userId: string
    tokenType: string | null
    token: string
    tokenExpiry: Date | null
    createdAt: Date | null
    _count: UserTokenCountAggregateOutputType | null
    _min: UserTokenMinAggregateOutputType | null
    _max: UserTokenMaxAggregateOutputType | null
  }

  type GetUserTokenGroupByPayload<T extends UserTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserTokenGroupByOutputType[P]>
            : GetScalarType<T[P], UserTokenGroupByOutputType[P]>
        }
      >
    >


  export type UserTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tokenType?: boolean
    token?: boolean
    tokenExpiry?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userToken"]>

  export type UserTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tokenType?: boolean
    token?: boolean
    tokenExpiry?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userToken"]>

  export type UserTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tokenType?: boolean
    token?: boolean
    tokenExpiry?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userToken"]>

  export type UserTokenSelectScalar = {
    id?: boolean
    userId?: boolean
    tokenType?: boolean
    token?: boolean
    tokenExpiry?: boolean
    createdAt?: boolean
  }

  export type UserTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "tokenType" | "token" | "tokenExpiry" | "createdAt", ExtArgs["result"]["userToken"]>
  export type UserTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserTokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      tokenType: string | null
      token: string
      tokenExpiry: Date | null
      createdAt: Date | null
    }, ExtArgs["result"]["userToken"]>
    composites: {}
  }

  type UserTokenGetPayload<S extends boolean | null | undefined | UserTokenDefaultArgs> = $Result.GetResult<Prisma.$UserTokenPayload, S>

  type UserTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserTokenCountAggregateInputType | true
    }

  export interface UserTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserToken'], meta: { name: 'UserToken' } }
    /**
     * Find zero or one UserToken that matches the filter.
     * @param {UserTokenFindUniqueArgs} args - Arguments to find a UserToken
     * @example
     * // Get one UserToken
     * const userToken = await prisma.userToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserTokenFindUniqueArgs>(args: SelectSubset<T, UserTokenFindUniqueArgs<ExtArgs>>): Prisma__UserTokenClient<$Result.GetResult<Prisma.$UserTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserTokenFindUniqueOrThrowArgs} args - Arguments to find a UserToken
     * @example
     * // Get one UserToken
     * const userToken = await prisma.userToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, UserTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserTokenClient<$Result.GetResult<Prisma.$UserTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTokenFindFirstArgs} args - Arguments to find a UserToken
     * @example
     * // Get one UserToken
     * const userToken = await prisma.userToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserTokenFindFirstArgs>(args?: SelectSubset<T, UserTokenFindFirstArgs<ExtArgs>>): Prisma__UserTokenClient<$Result.GetResult<Prisma.$UserTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTokenFindFirstOrThrowArgs} args - Arguments to find a UserToken
     * @example
     * // Get one UserToken
     * const userToken = await prisma.userToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, UserTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserTokenClient<$Result.GetResult<Prisma.$UserTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserTokens
     * const userTokens = await prisma.userToken.findMany()
     * 
     * // Get first 10 UserTokens
     * const userTokens = await prisma.userToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userTokenWithIdOnly = await prisma.userToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserTokenFindManyArgs>(args?: SelectSubset<T, UserTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserToken.
     * @param {UserTokenCreateArgs} args - Arguments to create a UserToken.
     * @example
     * // Create one UserToken
     * const UserToken = await prisma.userToken.create({
     *   data: {
     *     // ... data to create a UserToken
     *   }
     * })
     * 
     */
    create<T extends UserTokenCreateArgs>(args: SelectSubset<T, UserTokenCreateArgs<ExtArgs>>): Prisma__UserTokenClient<$Result.GetResult<Prisma.$UserTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserTokens.
     * @param {UserTokenCreateManyArgs} args - Arguments to create many UserTokens.
     * @example
     * // Create many UserTokens
     * const userToken = await prisma.userToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserTokenCreateManyArgs>(args?: SelectSubset<T, UserTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserTokens and returns the data saved in the database.
     * @param {UserTokenCreateManyAndReturnArgs} args - Arguments to create many UserTokens.
     * @example
     * // Create many UserTokens
     * const userToken = await prisma.userToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserTokens and only return the `id`
     * const userTokenWithIdOnly = await prisma.userToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, UserTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserToken.
     * @param {UserTokenDeleteArgs} args - Arguments to delete one UserToken.
     * @example
     * // Delete one UserToken
     * const UserToken = await prisma.userToken.delete({
     *   where: {
     *     // ... filter to delete one UserToken
     *   }
     * })
     * 
     */
    delete<T extends UserTokenDeleteArgs>(args: SelectSubset<T, UserTokenDeleteArgs<ExtArgs>>): Prisma__UserTokenClient<$Result.GetResult<Prisma.$UserTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserToken.
     * @param {UserTokenUpdateArgs} args - Arguments to update one UserToken.
     * @example
     * // Update one UserToken
     * const userToken = await prisma.userToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserTokenUpdateArgs>(args: SelectSubset<T, UserTokenUpdateArgs<ExtArgs>>): Prisma__UserTokenClient<$Result.GetResult<Prisma.$UserTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserTokens.
     * @param {UserTokenDeleteManyArgs} args - Arguments to filter UserTokens to delete.
     * @example
     * // Delete a few UserTokens
     * const { count } = await prisma.userToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserTokenDeleteManyArgs>(args?: SelectSubset<T, UserTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserTokens
     * const userToken = await prisma.userToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserTokenUpdateManyArgs>(args: SelectSubset<T, UserTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserTokens and returns the data updated in the database.
     * @param {UserTokenUpdateManyAndReturnArgs} args - Arguments to update many UserTokens.
     * @example
     * // Update many UserTokens
     * const userToken = await prisma.userToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserTokens and only return the `id`
     * const userTokenWithIdOnly = await prisma.userToken.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, UserTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserToken.
     * @param {UserTokenUpsertArgs} args - Arguments to update or create a UserToken.
     * @example
     * // Update or create a UserToken
     * const userToken = await prisma.userToken.upsert({
     *   create: {
     *     // ... data to create a UserToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserToken we want to update
     *   }
     * })
     */
    upsert<T extends UserTokenUpsertArgs>(args: SelectSubset<T, UserTokenUpsertArgs<ExtArgs>>): Prisma__UserTokenClient<$Result.GetResult<Prisma.$UserTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTokenCountArgs} args - Arguments to filter UserTokens to count.
     * @example
     * // Count the number of UserTokens
     * const count = await prisma.userToken.count({
     *   where: {
     *     // ... the filter for the UserTokens we want to count
     *   }
     * })
    **/
    count<T extends UserTokenCountArgs>(
      args?: Subset<T, UserTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserTokenAggregateArgs>(args: Subset<T, UserTokenAggregateArgs>): Prisma.PrismaPromise<GetUserTokenAggregateType<T>>

    /**
     * Group by UserToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTokenGroupByArgs} args - Group by arguments.
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
      T extends UserTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserTokenGroupByArgs['orderBy'] }
        : { orderBy?: UserTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserToken model
   */
  readonly fields: UserTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserToken model
   */
  interface UserTokenFieldRefs {
    readonly id: FieldRef<"UserToken", 'String'>
    readonly userId: FieldRef<"UserToken", 'String'>
    readonly tokenType: FieldRef<"UserToken", 'String'>
    readonly token: FieldRef<"UserToken", 'String'>
    readonly tokenExpiry: FieldRef<"UserToken", 'DateTime'>
    readonly createdAt: FieldRef<"UserToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserToken findUnique
   */
  export type UserTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToken
     */
    select?: UserTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserToken
     */
    omit?: UserTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTokenInclude<ExtArgs> | null
    /**
     * Filter, which UserToken to fetch.
     */
    where: UserTokenWhereUniqueInput
  }

  /**
   * UserToken findUniqueOrThrow
   */
  export type UserTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToken
     */
    select?: UserTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserToken
     */
    omit?: UserTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTokenInclude<ExtArgs> | null
    /**
     * Filter, which UserToken to fetch.
     */
    where: UserTokenWhereUniqueInput
  }

  /**
   * UserToken findFirst
   */
  export type UserTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToken
     */
    select?: UserTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserToken
     */
    omit?: UserTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTokenInclude<ExtArgs> | null
    /**
     * Filter, which UserToken to fetch.
     */
    where?: UserTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTokens to fetch.
     */
    orderBy?: UserTokenOrderByWithRelationInput | UserTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserTokens.
     */
    cursor?: UserTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserTokens.
     */
    distinct?: UserTokenScalarFieldEnum | UserTokenScalarFieldEnum[]
  }

  /**
   * UserToken findFirstOrThrow
   */
  export type UserTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToken
     */
    select?: UserTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserToken
     */
    omit?: UserTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTokenInclude<ExtArgs> | null
    /**
     * Filter, which UserToken to fetch.
     */
    where?: UserTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTokens to fetch.
     */
    orderBy?: UserTokenOrderByWithRelationInput | UserTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserTokens.
     */
    cursor?: UserTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserTokens.
     */
    distinct?: UserTokenScalarFieldEnum | UserTokenScalarFieldEnum[]
  }

  /**
   * UserToken findMany
   */
  export type UserTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToken
     */
    select?: UserTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserToken
     */
    omit?: UserTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTokenInclude<ExtArgs> | null
    /**
     * Filter, which UserTokens to fetch.
     */
    where?: UserTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTokens to fetch.
     */
    orderBy?: UserTokenOrderByWithRelationInput | UserTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserTokens.
     */
    cursor?: UserTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTokens.
     */
    skip?: number
    distinct?: UserTokenScalarFieldEnum | UserTokenScalarFieldEnum[]
  }

  /**
   * UserToken create
   */
  export type UserTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToken
     */
    select?: UserTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserToken
     */
    omit?: UserTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a UserToken.
     */
    data: XOR<UserTokenCreateInput, UserTokenUncheckedCreateInput>
  }

  /**
   * UserToken createMany
   */
  export type UserTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserTokens.
     */
    data: UserTokenCreateManyInput | UserTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserToken createManyAndReturn
   */
  export type UserTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToken
     */
    select?: UserTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserToken
     */
    omit?: UserTokenOmit<ExtArgs> | null
    /**
     * The data used to create many UserTokens.
     */
    data: UserTokenCreateManyInput | UserTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserToken update
   */
  export type UserTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToken
     */
    select?: UserTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserToken
     */
    omit?: UserTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a UserToken.
     */
    data: XOR<UserTokenUpdateInput, UserTokenUncheckedUpdateInput>
    /**
     * Choose, which UserToken to update.
     */
    where: UserTokenWhereUniqueInput
  }

  /**
   * UserToken updateMany
   */
  export type UserTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserTokens.
     */
    data: XOR<UserTokenUpdateManyMutationInput, UserTokenUncheckedUpdateManyInput>
    /**
     * Filter which UserTokens to update
     */
    where?: UserTokenWhereInput
    /**
     * Limit how many UserTokens to update.
     */
    limit?: number
  }

  /**
   * UserToken updateManyAndReturn
   */
  export type UserTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToken
     */
    select?: UserTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserToken
     */
    omit?: UserTokenOmit<ExtArgs> | null
    /**
     * The data used to update UserTokens.
     */
    data: XOR<UserTokenUpdateManyMutationInput, UserTokenUncheckedUpdateManyInput>
    /**
     * Filter which UserTokens to update
     */
    where?: UserTokenWhereInput
    /**
     * Limit how many UserTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserToken upsert
   */
  export type UserTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToken
     */
    select?: UserTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserToken
     */
    omit?: UserTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the UserToken to update in case it exists.
     */
    where: UserTokenWhereUniqueInput
    /**
     * In case the UserToken found by the `where` argument doesn't exist, create a new UserToken with this data.
     */
    create: XOR<UserTokenCreateInput, UserTokenUncheckedCreateInput>
    /**
     * In case the UserToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserTokenUpdateInput, UserTokenUncheckedUpdateInput>
  }

  /**
   * UserToken delete
   */
  export type UserTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToken
     */
    select?: UserTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserToken
     */
    omit?: UserTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTokenInclude<ExtArgs> | null
    /**
     * Filter which UserToken to delete.
     */
    where: UserTokenWhereUniqueInput
  }

  /**
   * UserToken deleteMany
   */
  export type UserTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserTokens to delete
     */
    where?: UserTokenWhereInput
    /**
     * Limit how many UserTokens to delete.
     */
    limit?: number
  }

  /**
   * UserToken without action
   */
  export type UserTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToken
     */
    select?: UserTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserToken
     */
    omit?: UserTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTokenInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    investmentExpectation: Decimal | null
    area: Decimal | null
    initialBudget: Decimal | null
    expectedBudget: Decimal | null
    actualBudget: Decimal | null
  }

  export type ProjectSumAggregateOutputType = {
    investmentExpectation: Decimal | null
    area: Decimal | null
    initialBudget: Decimal | null
    expectedBudget: Decimal | null
    actualBudget: Decimal | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    clientId: string | null
    slug: string | null
    title: string | null
    status: string | null
    projectType: string | null
    developmentType: string | null
    investmentExpectation: Decimal | null
    area: Decimal | null
    initialBudget: Decimal | null
    expectedBudget: Decimal | null
    actualBudget: Decimal | null
    createdAt: Date | null
    startDate: Date | null
    expectedEndDate: Date | null
    endDate: Date | null
    coverUrl: string | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    clientId: string | null
    slug: string | null
    title: string | null
    status: string | null
    projectType: string | null
    developmentType: string | null
    investmentExpectation: Decimal | null
    area: Decimal | null
    initialBudget: Decimal | null
    expectedBudget: Decimal | null
    actualBudget: Decimal | null
    createdAt: Date | null
    startDate: Date | null
    expectedEndDate: Date | null
    endDate: Date | null
    coverUrl: string | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    clientId: number
    slug: number
    title: number
    status: number
    projectType: number
    developmentType: number
    investmentExpectation: number
    area: number
    initialBudget: number
    expectedBudget: number
    actualBudget: number
    createdAt: number
    startDate: number
    expectedEndDate: number
    endDate: number
    coverUrl: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    investmentExpectation?: true
    area?: true
    initialBudget?: true
    expectedBudget?: true
    actualBudget?: true
  }

  export type ProjectSumAggregateInputType = {
    investmentExpectation?: true
    area?: true
    initialBudget?: true
    expectedBudget?: true
    actualBudget?: true
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    clientId?: true
    slug?: true
    title?: true
    status?: true
    projectType?: true
    developmentType?: true
    investmentExpectation?: true
    area?: true
    initialBudget?: true
    expectedBudget?: true
    actualBudget?: true
    createdAt?: true
    startDate?: true
    expectedEndDate?: true
    endDate?: true
    coverUrl?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    clientId?: true
    slug?: true
    title?: true
    status?: true
    projectType?: true
    developmentType?: true
    investmentExpectation?: true
    area?: true
    initialBudget?: true
    expectedBudget?: true
    actualBudget?: true
    createdAt?: true
    startDate?: true
    expectedEndDate?: true
    endDate?: true
    coverUrl?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    clientId?: true
    slug?: true
    title?: true
    status?: true
    projectType?: true
    developmentType?: true
    investmentExpectation?: true
    area?: true
    initialBudget?: true
    expectedBudget?: true
    actualBudget?: true
    createdAt?: true
    startDate?: true
    expectedEndDate?: true
    endDate?: true
    coverUrl?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    clientId: string | null
    slug: string
    title: string
    status: string | null
    projectType: string | null
    developmentType: string | null
    investmentExpectation: Decimal | null
    area: Decimal | null
    initialBudget: Decimal | null
    expectedBudget: Decimal | null
    actualBudget: Decimal | null
    createdAt: Date | null
    startDate: Date | null
    expectedEndDate: Date | null
    endDate: Date | null
    coverUrl: string | null
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    slug?: boolean
    title?: boolean
    status?: boolean
    projectType?: boolean
    developmentType?: boolean
    investmentExpectation?: boolean
    area?: boolean
    initialBudget?: boolean
    expectedBudget?: boolean
    actualBudget?: boolean
    createdAt?: boolean
    startDate?: boolean
    expectedEndDate?: boolean
    endDate?: boolean
    coverUrl?: boolean
    client?: boolean | Project$clientArgs<ExtArgs>
    details?: boolean | Project$detailsArgs<ExtArgs>
    designPhases?: boolean | Project$designPhasesArgs<ExtArgs>
    constructionPhases?: boolean | Project$constructionPhasesArgs<ExtArgs>
    documents?: boolean | Project$documentsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    slug?: boolean
    title?: boolean
    status?: boolean
    projectType?: boolean
    developmentType?: boolean
    investmentExpectation?: boolean
    area?: boolean
    initialBudget?: boolean
    expectedBudget?: boolean
    actualBudget?: boolean
    createdAt?: boolean
    startDate?: boolean
    expectedEndDate?: boolean
    endDate?: boolean
    coverUrl?: boolean
    client?: boolean | Project$clientArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    slug?: boolean
    title?: boolean
    status?: boolean
    projectType?: boolean
    developmentType?: boolean
    investmentExpectation?: boolean
    area?: boolean
    initialBudget?: boolean
    expectedBudget?: boolean
    actualBudget?: boolean
    createdAt?: boolean
    startDate?: boolean
    expectedEndDate?: boolean
    endDate?: boolean
    coverUrl?: boolean
    client?: boolean | Project$clientArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    clientId?: boolean
    slug?: boolean
    title?: boolean
    status?: boolean
    projectType?: boolean
    developmentType?: boolean
    investmentExpectation?: boolean
    area?: boolean
    initialBudget?: boolean
    expectedBudget?: boolean
    actualBudget?: boolean
    createdAt?: boolean
    startDate?: boolean
    expectedEndDate?: boolean
    endDate?: boolean
    coverUrl?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientId" | "slug" | "title" | "status" | "projectType" | "developmentType" | "investmentExpectation" | "area" | "initialBudget" | "expectedBudget" | "actualBudget" | "createdAt" | "startDate" | "expectedEndDate" | "endDate" | "coverUrl", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | Project$clientArgs<ExtArgs>
    details?: boolean | Project$detailsArgs<ExtArgs>
    designPhases?: boolean | Project$designPhasesArgs<ExtArgs>
    constructionPhases?: boolean | Project$constructionPhasesArgs<ExtArgs>
    documents?: boolean | Project$documentsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | Project$clientArgs<ExtArgs>
  }
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | Project$clientArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      client: Prisma.$UserPayload<ExtArgs> | null
      details: Prisma.$ProjectDetailPayload<ExtArgs> | null
      designPhases: Prisma.$ProjectPhasePayload<ExtArgs>[]
      constructionPhases: Prisma.$ConstructionPhasePayload<ExtArgs>[]
      documents: Prisma.$ProjectDocumentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clientId: string | null
      slug: string
      title: string
      status: string | null
      projectType: string | null
      developmentType: string | null
      investmentExpectation: Prisma.Decimal | null
      area: Prisma.Decimal | null
      initialBudget: Prisma.Decimal | null
      expectedBudget: Prisma.Decimal | null
      actualBudget: Prisma.Decimal | null
      createdAt: Date | null
      startDate: Date | null
      expectedEndDate: Date | null
      endDate: Date | null
      coverUrl: string | null
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
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
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends Project$clientArgs<ExtArgs> = {}>(args?: Subset<T, Project$clientArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    details<T extends Project$detailsArgs<ExtArgs> = {}>(args?: Subset<T, Project$detailsArgs<ExtArgs>>): Prisma__ProjectDetailClient<$Result.GetResult<Prisma.$ProjectDetailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    designPhases<T extends Project$designPhasesArgs<ExtArgs> = {}>(args?: Subset<T, Project$designPhasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPhasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    constructionPhases<T extends Project$constructionPhasesArgs<ExtArgs> = {}>(args?: Subset<T, Project$constructionPhasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConstructionPhasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    documents<T extends Project$documentsArgs<ExtArgs> = {}>(args?: Subset<T, Project$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly clientId: FieldRef<"Project", 'String'>
    readonly slug: FieldRef<"Project", 'String'>
    readonly title: FieldRef<"Project", 'String'>
    readonly status: FieldRef<"Project", 'String'>
    readonly projectType: FieldRef<"Project", 'String'>
    readonly developmentType: FieldRef<"Project", 'String'>
    readonly investmentExpectation: FieldRef<"Project", 'Decimal'>
    readonly area: FieldRef<"Project", 'Decimal'>
    readonly initialBudget: FieldRef<"Project", 'Decimal'>
    readonly expectedBudget: FieldRef<"Project", 'Decimal'>
    readonly actualBudget: FieldRef<"Project", 'Decimal'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly startDate: FieldRef<"Project", 'DateTime'>
    readonly expectedEndDate: FieldRef<"Project", 'DateTime'>
    readonly endDate: FieldRef<"Project", 'DateTime'>
    readonly coverUrl: FieldRef<"Project", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.client
   */
  export type Project$clientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * Project.details
   */
  export type Project$detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDetail
     */
    select?: ProjectDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDetail
     */
    omit?: ProjectDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDetailInclude<ExtArgs> | null
    where?: ProjectDetailWhereInput
  }

  /**
   * Project.designPhases
   */
  export type Project$designPhasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPhase
     */
    select?: ProjectPhaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectPhase
     */
    omit?: ProjectPhaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPhaseInclude<ExtArgs> | null
    where?: ProjectPhaseWhereInput
    orderBy?: ProjectPhaseOrderByWithRelationInput | ProjectPhaseOrderByWithRelationInput[]
    cursor?: ProjectPhaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectPhaseScalarFieldEnum | ProjectPhaseScalarFieldEnum[]
  }

  /**
   * Project.constructionPhases
   */
  export type Project$constructionPhasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConstructionPhase
     */
    select?: ConstructionPhaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConstructionPhase
     */
    omit?: ConstructionPhaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConstructionPhaseInclude<ExtArgs> | null
    where?: ConstructionPhaseWhereInput
    orderBy?: ConstructionPhaseOrderByWithRelationInput | ConstructionPhaseOrderByWithRelationInput[]
    cursor?: ConstructionPhaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConstructionPhaseScalarFieldEnum | ConstructionPhaseScalarFieldEnum[]
  }

  /**
   * Project.documents
   */
  export type Project$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDocument
     */
    select?: ProjectDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDocument
     */
    omit?: ProjectDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDocumentInclude<ExtArgs> | null
    where?: ProjectDocumentWhereInput
    orderBy?: ProjectDocumentOrderByWithRelationInput | ProjectDocumentOrderByWithRelationInput[]
    cursor?: ProjectDocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectDocumentScalarFieldEnum | ProjectDocumentScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model ProjectDetail
   */

  export type AggregateProjectDetail = {
    _count: ProjectDetailCountAggregateOutputType | null
    _min: ProjectDetailMinAggregateOutputType | null
    _max: ProjectDetailMaxAggregateOutputType | null
  }

  export type ProjectDetailMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    type: string | null
    standard: string | null
    technicalManager: string | null
    postalCode: string | null
    country: string | null
    state: string | null
    city: string | null
    neighborhood: string | null
    street: string | null
    number: string | null
    complement: string | null
  }

  export type ProjectDetailMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    type: string | null
    standard: string | null
    technicalManager: string | null
    postalCode: string | null
    country: string | null
    state: string | null
    city: string | null
    neighborhood: string | null
    street: string | null
    number: string | null
    complement: string | null
  }

  export type ProjectDetailCountAggregateOutputType = {
    id: number
    projectId: number
    type: number
    standard: number
    technicalManager: number
    postalCode: number
    country: number
    state: number
    city: number
    neighborhood: number
    street: number
    number: number
    complement: number
    _all: number
  }


  export type ProjectDetailMinAggregateInputType = {
    id?: true
    projectId?: true
    type?: true
    standard?: true
    technicalManager?: true
    postalCode?: true
    country?: true
    state?: true
    city?: true
    neighborhood?: true
    street?: true
    number?: true
    complement?: true
  }

  export type ProjectDetailMaxAggregateInputType = {
    id?: true
    projectId?: true
    type?: true
    standard?: true
    technicalManager?: true
    postalCode?: true
    country?: true
    state?: true
    city?: true
    neighborhood?: true
    street?: true
    number?: true
    complement?: true
  }

  export type ProjectDetailCountAggregateInputType = {
    id?: true
    projectId?: true
    type?: true
    standard?: true
    technicalManager?: true
    postalCode?: true
    country?: true
    state?: true
    city?: true
    neighborhood?: true
    street?: true
    number?: true
    complement?: true
    _all?: true
  }

  export type ProjectDetailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectDetail to aggregate.
     */
    where?: ProjectDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectDetails to fetch.
     */
    orderBy?: ProjectDetailOrderByWithRelationInput | ProjectDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectDetails
    **/
    _count?: true | ProjectDetailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectDetailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectDetailMaxAggregateInputType
  }

  export type GetProjectDetailAggregateType<T extends ProjectDetailAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectDetail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectDetail[P]>
      : GetScalarType<T[P], AggregateProjectDetail[P]>
  }




  export type ProjectDetailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectDetailWhereInput
    orderBy?: ProjectDetailOrderByWithAggregationInput | ProjectDetailOrderByWithAggregationInput[]
    by: ProjectDetailScalarFieldEnum[] | ProjectDetailScalarFieldEnum
    having?: ProjectDetailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectDetailCountAggregateInputType | true
    _min?: ProjectDetailMinAggregateInputType
    _max?: ProjectDetailMaxAggregateInputType
  }

  export type ProjectDetailGroupByOutputType = {
    id: string
    projectId: string
    type: string | null
    standard: string | null
    technicalManager: string | null
    postalCode: string | null
    country: string | null
    state: string | null
    city: string | null
    neighborhood: string | null
    street: string | null
    number: string | null
    complement: string | null
    _count: ProjectDetailCountAggregateOutputType | null
    _min: ProjectDetailMinAggregateOutputType | null
    _max: ProjectDetailMaxAggregateOutputType | null
  }

  type GetProjectDetailGroupByPayload<T extends ProjectDetailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectDetailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectDetailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectDetailGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectDetailGroupByOutputType[P]>
        }
      >
    >


  export type ProjectDetailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    type?: boolean
    standard?: boolean
    technicalManager?: boolean
    postalCode?: boolean
    country?: boolean
    state?: boolean
    city?: boolean
    neighborhood?: boolean
    street?: boolean
    number?: boolean
    complement?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectDetail"]>

  export type ProjectDetailSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    type?: boolean
    standard?: boolean
    technicalManager?: boolean
    postalCode?: boolean
    country?: boolean
    state?: boolean
    city?: boolean
    neighborhood?: boolean
    street?: boolean
    number?: boolean
    complement?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectDetail"]>

  export type ProjectDetailSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    type?: boolean
    standard?: boolean
    technicalManager?: boolean
    postalCode?: boolean
    country?: boolean
    state?: boolean
    city?: boolean
    neighborhood?: boolean
    street?: boolean
    number?: boolean
    complement?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectDetail"]>

  export type ProjectDetailSelectScalar = {
    id?: boolean
    projectId?: boolean
    type?: boolean
    standard?: boolean
    technicalManager?: boolean
    postalCode?: boolean
    country?: boolean
    state?: boolean
    city?: boolean
    neighborhood?: boolean
    street?: boolean
    number?: boolean
    complement?: boolean
  }

  export type ProjectDetailOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "type" | "standard" | "technicalManager" | "postalCode" | "country" | "state" | "city" | "neighborhood" | "street" | "number" | "complement", ExtArgs["result"]["projectDetail"]>
  export type ProjectDetailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ProjectDetailIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ProjectDetailIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $ProjectDetailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectDetail"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      type: string | null
      standard: string | null
      technicalManager: string | null
      postalCode: string | null
      country: string | null
      state: string | null
      city: string | null
      neighborhood: string | null
      street: string | null
      number: string | null
      complement: string | null
    }, ExtArgs["result"]["projectDetail"]>
    composites: {}
  }

  type ProjectDetailGetPayload<S extends boolean | null | undefined | ProjectDetailDefaultArgs> = $Result.GetResult<Prisma.$ProjectDetailPayload, S>

  type ProjectDetailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectDetailFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectDetailCountAggregateInputType | true
    }

  export interface ProjectDetailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectDetail'], meta: { name: 'ProjectDetail' } }
    /**
     * Find zero or one ProjectDetail that matches the filter.
     * @param {ProjectDetailFindUniqueArgs} args - Arguments to find a ProjectDetail
     * @example
     * // Get one ProjectDetail
     * const projectDetail = await prisma.projectDetail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectDetailFindUniqueArgs>(args: SelectSubset<T, ProjectDetailFindUniqueArgs<ExtArgs>>): Prisma__ProjectDetailClient<$Result.GetResult<Prisma.$ProjectDetailPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectDetail that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectDetailFindUniqueOrThrowArgs} args - Arguments to find a ProjectDetail
     * @example
     * // Get one ProjectDetail
     * const projectDetail = await prisma.projectDetail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectDetailFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectDetailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectDetailClient<$Result.GetResult<Prisma.$ProjectDetailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectDetail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectDetailFindFirstArgs} args - Arguments to find a ProjectDetail
     * @example
     * // Get one ProjectDetail
     * const projectDetail = await prisma.projectDetail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectDetailFindFirstArgs>(args?: SelectSubset<T, ProjectDetailFindFirstArgs<ExtArgs>>): Prisma__ProjectDetailClient<$Result.GetResult<Prisma.$ProjectDetailPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectDetail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectDetailFindFirstOrThrowArgs} args - Arguments to find a ProjectDetail
     * @example
     * // Get one ProjectDetail
     * const projectDetail = await prisma.projectDetail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectDetailFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectDetailFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectDetailClient<$Result.GetResult<Prisma.$ProjectDetailPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectDetailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectDetails
     * const projectDetails = await prisma.projectDetail.findMany()
     * 
     * // Get first 10 ProjectDetails
     * const projectDetails = await prisma.projectDetail.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectDetailWithIdOnly = await prisma.projectDetail.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectDetailFindManyArgs>(args?: SelectSubset<T, ProjectDetailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectDetail.
     * @param {ProjectDetailCreateArgs} args - Arguments to create a ProjectDetail.
     * @example
     * // Create one ProjectDetail
     * const ProjectDetail = await prisma.projectDetail.create({
     *   data: {
     *     // ... data to create a ProjectDetail
     *   }
     * })
     * 
     */
    create<T extends ProjectDetailCreateArgs>(args: SelectSubset<T, ProjectDetailCreateArgs<ExtArgs>>): Prisma__ProjectDetailClient<$Result.GetResult<Prisma.$ProjectDetailPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectDetails.
     * @param {ProjectDetailCreateManyArgs} args - Arguments to create many ProjectDetails.
     * @example
     * // Create many ProjectDetails
     * const projectDetail = await prisma.projectDetail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectDetailCreateManyArgs>(args?: SelectSubset<T, ProjectDetailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectDetails and returns the data saved in the database.
     * @param {ProjectDetailCreateManyAndReturnArgs} args - Arguments to create many ProjectDetails.
     * @example
     * // Create many ProjectDetails
     * const projectDetail = await prisma.projectDetail.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectDetails and only return the `id`
     * const projectDetailWithIdOnly = await prisma.projectDetail.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectDetailCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectDetailCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectDetailPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProjectDetail.
     * @param {ProjectDetailDeleteArgs} args - Arguments to delete one ProjectDetail.
     * @example
     * // Delete one ProjectDetail
     * const ProjectDetail = await prisma.projectDetail.delete({
     *   where: {
     *     // ... filter to delete one ProjectDetail
     *   }
     * })
     * 
     */
    delete<T extends ProjectDetailDeleteArgs>(args: SelectSubset<T, ProjectDetailDeleteArgs<ExtArgs>>): Prisma__ProjectDetailClient<$Result.GetResult<Prisma.$ProjectDetailPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectDetail.
     * @param {ProjectDetailUpdateArgs} args - Arguments to update one ProjectDetail.
     * @example
     * // Update one ProjectDetail
     * const projectDetail = await prisma.projectDetail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectDetailUpdateArgs>(args: SelectSubset<T, ProjectDetailUpdateArgs<ExtArgs>>): Prisma__ProjectDetailClient<$Result.GetResult<Prisma.$ProjectDetailPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectDetails.
     * @param {ProjectDetailDeleteManyArgs} args - Arguments to filter ProjectDetails to delete.
     * @example
     * // Delete a few ProjectDetails
     * const { count } = await prisma.projectDetail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDetailDeleteManyArgs>(args?: SelectSubset<T, ProjectDetailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectDetailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectDetails
     * const projectDetail = await prisma.projectDetail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectDetailUpdateManyArgs>(args: SelectSubset<T, ProjectDetailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectDetails and returns the data updated in the database.
     * @param {ProjectDetailUpdateManyAndReturnArgs} args - Arguments to update many ProjectDetails.
     * @example
     * // Update many ProjectDetails
     * const projectDetail = await prisma.projectDetail.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProjectDetails and only return the `id`
     * const projectDetailWithIdOnly = await prisma.projectDetail.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProjectDetailUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectDetailUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectDetailPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProjectDetail.
     * @param {ProjectDetailUpsertArgs} args - Arguments to update or create a ProjectDetail.
     * @example
     * // Update or create a ProjectDetail
     * const projectDetail = await prisma.projectDetail.upsert({
     *   create: {
     *     // ... data to create a ProjectDetail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectDetail we want to update
     *   }
     * })
     */
    upsert<T extends ProjectDetailUpsertArgs>(args: SelectSubset<T, ProjectDetailUpsertArgs<ExtArgs>>): Prisma__ProjectDetailClient<$Result.GetResult<Prisma.$ProjectDetailPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectDetailCountArgs} args - Arguments to filter ProjectDetails to count.
     * @example
     * // Count the number of ProjectDetails
     * const count = await prisma.projectDetail.count({
     *   where: {
     *     // ... the filter for the ProjectDetails we want to count
     *   }
     * })
    **/
    count<T extends ProjectDetailCountArgs>(
      args?: Subset<T, ProjectDetailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectDetailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectDetailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectDetailAggregateArgs>(args: Subset<T, ProjectDetailAggregateArgs>): Prisma.PrismaPromise<GetProjectDetailAggregateType<T>>

    /**
     * Group by ProjectDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectDetailGroupByArgs} args - Group by arguments.
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
      T extends ProjectDetailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectDetailGroupByArgs['orderBy'] }
        : { orderBy?: ProjectDetailGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectDetailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectDetailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectDetail model
   */
  readonly fields: ProjectDetailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectDetail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectDetailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProjectDetail model
   */
  interface ProjectDetailFieldRefs {
    readonly id: FieldRef<"ProjectDetail", 'String'>
    readonly projectId: FieldRef<"ProjectDetail", 'String'>
    readonly type: FieldRef<"ProjectDetail", 'String'>
    readonly standard: FieldRef<"ProjectDetail", 'String'>
    readonly technicalManager: FieldRef<"ProjectDetail", 'String'>
    readonly postalCode: FieldRef<"ProjectDetail", 'String'>
    readonly country: FieldRef<"ProjectDetail", 'String'>
    readonly state: FieldRef<"ProjectDetail", 'String'>
    readonly city: FieldRef<"ProjectDetail", 'String'>
    readonly neighborhood: FieldRef<"ProjectDetail", 'String'>
    readonly street: FieldRef<"ProjectDetail", 'String'>
    readonly number: FieldRef<"ProjectDetail", 'String'>
    readonly complement: FieldRef<"ProjectDetail", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProjectDetail findUnique
   */
  export type ProjectDetailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDetail
     */
    select?: ProjectDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDetail
     */
    omit?: ProjectDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDetailInclude<ExtArgs> | null
    /**
     * Filter, which ProjectDetail to fetch.
     */
    where: ProjectDetailWhereUniqueInput
  }

  /**
   * ProjectDetail findUniqueOrThrow
   */
  export type ProjectDetailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDetail
     */
    select?: ProjectDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDetail
     */
    omit?: ProjectDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDetailInclude<ExtArgs> | null
    /**
     * Filter, which ProjectDetail to fetch.
     */
    where: ProjectDetailWhereUniqueInput
  }

  /**
   * ProjectDetail findFirst
   */
  export type ProjectDetailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDetail
     */
    select?: ProjectDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDetail
     */
    omit?: ProjectDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDetailInclude<ExtArgs> | null
    /**
     * Filter, which ProjectDetail to fetch.
     */
    where?: ProjectDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectDetails to fetch.
     */
    orderBy?: ProjectDetailOrderByWithRelationInput | ProjectDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectDetails.
     */
    cursor?: ProjectDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectDetails.
     */
    distinct?: ProjectDetailScalarFieldEnum | ProjectDetailScalarFieldEnum[]
  }

  /**
   * ProjectDetail findFirstOrThrow
   */
  export type ProjectDetailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDetail
     */
    select?: ProjectDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDetail
     */
    omit?: ProjectDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDetailInclude<ExtArgs> | null
    /**
     * Filter, which ProjectDetail to fetch.
     */
    where?: ProjectDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectDetails to fetch.
     */
    orderBy?: ProjectDetailOrderByWithRelationInput | ProjectDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectDetails.
     */
    cursor?: ProjectDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectDetails.
     */
    distinct?: ProjectDetailScalarFieldEnum | ProjectDetailScalarFieldEnum[]
  }

  /**
   * ProjectDetail findMany
   */
  export type ProjectDetailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDetail
     */
    select?: ProjectDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDetail
     */
    omit?: ProjectDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDetailInclude<ExtArgs> | null
    /**
     * Filter, which ProjectDetails to fetch.
     */
    where?: ProjectDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectDetails to fetch.
     */
    orderBy?: ProjectDetailOrderByWithRelationInput | ProjectDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectDetails.
     */
    cursor?: ProjectDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectDetails.
     */
    skip?: number
    distinct?: ProjectDetailScalarFieldEnum | ProjectDetailScalarFieldEnum[]
  }

  /**
   * ProjectDetail create
   */
  export type ProjectDetailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDetail
     */
    select?: ProjectDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDetail
     */
    omit?: ProjectDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDetailInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectDetail.
     */
    data: XOR<ProjectDetailCreateInput, ProjectDetailUncheckedCreateInput>
  }

  /**
   * ProjectDetail createMany
   */
  export type ProjectDetailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectDetails.
     */
    data: ProjectDetailCreateManyInput | ProjectDetailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectDetail createManyAndReturn
   */
  export type ProjectDetailCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDetail
     */
    select?: ProjectDetailSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDetail
     */
    omit?: ProjectDetailOmit<ExtArgs> | null
    /**
     * The data used to create many ProjectDetails.
     */
    data: ProjectDetailCreateManyInput | ProjectDetailCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDetailIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectDetail update
   */
  export type ProjectDetailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDetail
     */
    select?: ProjectDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDetail
     */
    omit?: ProjectDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDetailInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectDetail.
     */
    data: XOR<ProjectDetailUpdateInput, ProjectDetailUncheckedUpdateInput>
    /**
     * Choose, which ProjectDetail to update.
     */
    where: ProjectDetailWhereUniqueInput
  }

  /**
   * ProjectDetail updateMany
   */
  export type ProjectDetailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectDetails.
     */
    data: XOR<ProjectDetailUpdateManyMutationInput, ProjectDetailUncheckedUpdateManyInput>
    /**
     * Filter which ProjectDetails to update
     */
    where?: ProjectDetailWhereInput
    /**
     * Limit how many ProjectDetails to update.
     */
    limit?: number
  }

  /**
   * ProjectDetail updateManyAndReturn
   */
  export type ProjectDetailUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDetail
     */
    select?: ProjectDetailSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDetail
     */
    omit?: ProjectDetailOmit<ExtArgs> | null
    /**
     * The data used to update ProjectDetails.
     */
    data: XOR<ProjectDetailUpdateManyMutationInput, ProjectDetailUncheckedUpdateManyInput>
    /**
     * Filter which ProjectDetails to update
     */
    where?: ProjectDetailWhereInput
    /**
     * Limit how many ProjectDetails to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDetailIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectDetail upsert
   */
  export type ProjectDetailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDetail
     */
    select?: ProjectDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDetail
     */
    omit?: ProjectDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDetailInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectDetail to update in case it exists.
     */
    where: ProjectDetailWhereUniqueInput
    /**
     * In case the ProjectDetail found by the `where` argument doesn't exist, create a new ProjectDetail with this data.
     */
    create: XOR<ProjectDetailCreateInput, ProjectDetailUncheckedCreateInput>
    /**
     * In case the ProjectDetail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectDetailUpdateInput, ProjectDetailUncheckedUpdateInput>
  }

  /**
   * ProjectDetail delete
   */
  export type ProjectDetailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDetail
     */
    select?: ProjectDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDetail
     */
    omit?: ProjectDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDetailInclude<ExtArgs> | null
    /**
     * Filter which ProjectDetail to delete.
     */
    where: ProjectDetailWhereUniqueInput
  }

  /**
   * ProjectDetail deleteMany
   */
  export type ProjectDetailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectDetails to delete
     */
    where?: ProjectDetailWhereInput
    /**
     * Limit how many ProjectDetails to delete.
     */
    limit?: number
  }

  /**
   * ProjectDetail without action
   */
  export type ProjectDetailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDetail
     */
    select?: ProjectDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDetail
     */
    omit?: ProjectDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDetailInclude<ExtArgs> | null
  }


  /**
   * Model ProjectPhase
   */

  export type AggregateProjectPhase = {
    _count: ProjectPhaseCountAggregateOutputType | null
    _avg: ProjectPhaseAvgAggregateOutputType | null
    _sum: ProjectPhaseSumAggregateOutputType | null
    _min: ProjectPhaseMinAggregateOutputType | null
    _max: ProjectPhaseMaxAggregateOutputType | null
  }

  export type ProjectPhaseAvgAggregateOutputType = {
    order: number | null
  }

  export type ProjectPhaseSumAggregateOutputType = {
    order: number | null
  }

  export type ProjectPhaseMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    name: string | null
    status: string | null
    startDate: Date | null
    expectedEndDate: Date | null
    endDate: Date | null
    notes: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectPhaseMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    name: string | null
    status: string | null
    startDate: Date | null
    expectedEndDate: Date | null
    endDate: Date | null
    notes: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectPhaseCountAggregateOutputType = {
    id: number
    projectId: number
    name: number
    status: number
    startDate: number
    expectedEndDate: number
    endDate: number
    notes: number
    order: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectPhaseAvgAggregateInputType = {
    order?: true
  }

  export type ProjectPhaseSumAggregateInputType = {
    order?: true
  }

  export type ProjectPhaseMinAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    status?: true
    startDate?: true
    expectedEndDate?: true
    endDate?: true
    notes?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectPhaseMaxAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    status?: true
    startDate?: true
    expectedEndDate?: true
    endDate?: true
    notes?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectPhaseCountAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    status?: true
    startDate?: true
    expectedEndDate?: true
    endDate?: true
    notes?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectPhaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectPhase to aggregate.
     */
    where?: ProjectPhaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectPhases to fetch.
     */
    orderBy?: ProjectPhaseOrderByWithRelationInput | ProjectPhaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectPhaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectPhases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectPhases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectPhases
    **/
    _count?: true | ProjectPhaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectPhaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectPhaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectPhaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectPhaseMaxAggregateInputType
  }

  export type GetProjectPhaseAggregateType<T extends ProjectPhaseAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectPhase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectPhase[P]>
      : GetScalarType<T[P], AggregateProjectPhase[P]>
  }




  export type ProjectPhaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectPhaseWhereInput
    orderBy?: ProjectPhaseOrderByWithAggregationInput | ProjectPhaseOrderByWithAggregationInput[]
    by: ProjectPhaseScalarFieldEnum[] | ProjectPhaseScalarFieldEnum
    having?: ProjectPhaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectPhaseCountAggregateInputType | true
    _avg?: ProjectPhaseAvgAggregateInputType
    _sum?: ProjectPhaseSumAggregateInputType
    _min?: ProjectPhaseMinAggregateInputType
    _max?: ProjectPhaseMaxAggregateInputType
  }

  export type ProjectPhaseGroupByOutputType = {
    id: string
    projectId: string
    name: string
    status: string | null
    startDate: Date | null
    expectedEndDate: Date | null
    endDate: Date | null
    notes: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
    _count: ProjectPhaseCountAggregateOutputType | null
    _avg: ProjectPhaseAvgAggregateOutputType | null
    _sum: ProjectPhaseSumAggregateOutputType | null
    _min: ProjectPhaseMinAggregateOutputType | null
    _max: ProjectPhaseMaxAggregateOutputType | null
  }

  type GetProjectPhaseGroupByPayload<T extends ProjectPhaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectPhaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectPhaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectPhaseGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectPhaseGroupByOutputType[P]>
        }
      >
    >


  export type ProjectPhaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    name?: boolean
    status?: boolean
    startDate?: boolean
    expectedEndDate?: boolean
    endDate?: boolean
    notes?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    tasks?: boolean | ProjectPhase$tasksArgs<ExtArgs>
    _count?: boolean | ProjectPhaseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectPhase"]>

  export type ProjectPhaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    name?: boolean
    status?: boolean
    startDate?: boolean
    expectedEndDate?: boolean
    endDate?: boolean
    notes?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectPhase"]>

  export type ProjectPhaseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    name?: boolean
    status?: boolean
    startDate?: boolean
    expectedEndDate?: boolean
    endDate?: boolean
    notes?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectPhase"]>

  export type ProjectPhaseSelectScalar = {
    id?: boolean
    projectId?: boolean
    name?: boolean
    status?: boolean
    startDate?: boolean
    expectedEndDate?: boolean
    endDate?: boolean
    notes?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectPhaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "name" | "status" | "startDate" | "expectedEndDate" | "endDate" | "notes" | "order" | "createdAt" | "updatedAt", ExtArgs["result"]["projectPhase"]>
  export type ProjectPhaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    tasks?: boolean | ProjectPhase$tasksArgs<ExtArgs>
    _count?: boolean | ProjectPhaseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectPhaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ProjectPhaseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $ProjectPhasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectPhase"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      tasks: Prisma.$ProjectPhaseTaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      name: string
      status: string | null
      startDate: Date | null
      expectedEndDate: Date | null
      endDate: Date | null
      notes: string | null
      order: number | null
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["projectPhase"]>
    composites: {}
  }

  type ProjectPhaseGetPayload<S extends boolean | null | undefined | ProjectPhaseDefaultArgs> = $Result.GetResult<Prisma.$ProjectPhasePayload, S>

  type ProjectPhaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectPhaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectPhaseCountAggregateInputType | true
    }

  export interface ProjectPhaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectPhase'], meta: { name: 'ProjectPhase' } }
    /**
     * Find zero or one ProjectPhase that matches the filter.
     * @param {ProjectPhaseFindUniqueArgs} args - Arguments to find a ProjectPhase
     * @example
     * // Get one ProjectPhase
     * const projectPhase = await prisma.projectPhase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectPhaseFindUniqueArgs>(args: SelectSubset<T, ProjectPhaseFindUniqueArgs<ExtArgs>>): Prisma__ProjectPhaseClient<$Result.GetResult<Prisma.$ProjectPhasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectPhase that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectPhaseFindUniqueOrThrowArgs} args - Arguments to find a ProjectPhase
     * @example
     * // Get one ProjectPhase
     * const projectPhase = await prisma.projectPhase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectPhaseFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectPhaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectPhaseClient<$Result.GetResult<Prisma.$ProjectPhasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectPhase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectPhaseFindFirstArgs} args - Arguments to find a ProjectPhase
     * @example
     * // Get one ProjectPhase
     * const projectPhase = await prisma.projectPhase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectPhaseFindFirstArgs>(args?: SelectSubset<T, ProjectPhaseFindFirstArgs<ExtArgs>>): Prisma__ProjectPhaseClient<$Result.GetResult<Prisma.$ProjectPhasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectPhase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectPhaseFindFirstOrThrowArgs} args - Arguments to find a ProjectPhase
     * @example
     * // Get one ProjectPhase
     * const projectPhase = await prisma.projectPhase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectPhaseFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectPhaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectPhaseClient<$Result.GetResult<Prisma.$ProjectPhasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectPhases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectPhaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectPhases
     * const projectPhases = await prisma.projectPhase.findMany()
     * 
     * // Get first 10 ProjectPhases
     * const projectPhases = await prisma.projectPhase.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectPhaseWithIdOnly = await prisma.projectPhase.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectPhaseFindManyArgs>(args?: SelectSubset<T, ProjectPhaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPhasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectPhase.
     * @param {ProjectPhaseCreateArgs} args - Arguments to create a ProjectPhase.
     * @example
     * // Create one ProjectPhase
     * const ProjectPhase = await prisma.projectPhase.create({
     *   data: {
     *     // ... data to create a ProjectPhase
     *   }
     * })
     * 
     */
    create<T extends ProjectPhaseCreateArgs>(args: SelectSubset<T, ProjectPhaseCreateArgs<ExtArgs>>): Prisma__ProjectPhaseClient<$Result.GetResult<Prisma.$ProjectPhasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectPhases.
     * @param {ProjectPhaseCreateManyArgs} args - Arguments to create many ProjectPhases.
     * @example
     * // Create many ProjectPhases
     * const projectPhase = await prisma.projectPhase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectPhaseCreateManyArgs>(args?: SelectSubset<T, ProjectPhaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectPhases and returns the data saved in the database.
     * @param {ProjectPhaseCreateManyAndReturnArgs} args - Arguments to create many ProjectPhases.
     * @example
     * // Create many ProjectPhases
     * const projectPhase = await prisma.projectPhase.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectPhases and only return the `id`
     * const projectPhaseWithIdOnly = await prisma.projectPhase.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectPhaseCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectPhaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPhasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProjectPhase.
     * @param {ProjectPhaseDeleteArgs} args - Arguments to delete one ProjectPhase.
     * @example
     * // Delete one ProjectPhase
     * const ProjectPhase = await prisma.projectPhase.delete({
     *   where: {
     *     // ... filter to delete one ProjectPhase
     *   }
     * })
     * 
     */
    delete<T extends ProjectPhaseDeleteArgs>(args: SelectSubset<T, ProjectPhaseDeleteArgs<ExtArgs>>): Prisma__ProjectPhaseClient<$Result.GetResult<Prisma.$ProjectPhasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectPhase.
     * @param {ProjectPhaseUpdateArgs} args - Arguments to update one ProjectPhase.
     * @example
     * // Update one ProjectPhase
     * const projectPhase = await prisma.projectPhase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectPhaseUpdateArgs>(args: SelectSubset<T, ProjectPhaseUpdateArgs<ExtArgs>>): Prisma__ProjectPhaseClient<$Result.GetResult<Prisma.$ProjectPhasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectPhases.
     * @param {ProjectPhaseDeleteManyArgs} args - Arguments to filter ProjectPhases to delete.
     * @example
     * // Delete a few ProjectPhases
     * const { count } = await prisma.projectPhase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectPhaseDeleteManyArgs>(args?: SelectSubset<T, ProjectPhaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectPhases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectPhaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectPhases
     * const projectPhase = await prisma.projectPhase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectPhaseUpdateManyArgs>(args: SelectSubset<T, ProjectPhaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectPhases and returns the data updated in the database.
     * @param {ProjectPhaseUpdateManyAndReturnArgs} args - Arguments to update many ProjectPhases.
     * @example
     * // Update many ProjectPhases
     * const projectPhase = await prisma.projectPhase.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProjectPhases and only return the `id`
     * const projectPhaseWithIdOnly = await prisma.projectPhase.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProjectPhaseUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectPhaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPhasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProjectPhase.
     * @param {ProjectPhaseUpsertArgs} args - Arguments to update or create a ProjectPhase.
     * @example
     * // Update or create a ProjectPhase
     * const projectPhase = await prisma.projectPhase.upsert({
     *   create: {
     *     // ... data to create a ProjectPhase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectPhase we want to update
     *   }
     * })
     */
    upsert<T extends ProjectPhaseUpsertArgs>(args: SelectSubset<T, ProjectPhaseUpsertArgs<ExtArgs>>): Prisma__ProjectPhaseClient<$Result.GetResult<Prisma.$ProjectPhasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectPhases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectPhaseCountArgs} args - Arguments to filter ProjectPhases to count.
     * @example
     * // Count the number of ProjectPhases
     * const count = await prisma.projectPhase.count({
     *   where: {
     *     // ... the filter for the ProjectPhases we want to count
     *   }
     * })
    **/
    count<T extends ProjectPhaseCountArgs>(
      args?: Subset<T, ProjectPhaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectPhaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectPhase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectPhaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectPhaseAggregateArgs>(args: Subset<T, ProjectPhaseAggregateArgs>): Prisma.PrismaPromise<GetProjectPhaseAggregateType<T>>

    /**
     * Group by ProjectPhase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectPhaseGroupByArgs} args - Group by arguments.
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
      T extends ProjectPhaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectPhaseGroupByArgs['orderBy'] }
        : { orderBy?: ProjectPhaseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectPhaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectPhaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectPhase model
   */
  readonly fields: ProjectPhaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectPhase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectPhaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tasks<T extends ProjectPhase$tasksArgs<ExtArgs> = {}>(args?: Subset<T, ProjectPhase$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPhaseTaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ProjectPhase model
   */
  interface ProjectPhaseFieldRefs {
    readonly id: FieldRef<"ProjectPhase", 'String'>
    readonly projectId: FieldRef<"ProjectPhase", 'String'>
    readonly name: FieldRef<"ProjectPhase", 'String'>
    readonly status: FieldRef<"ProjectPhase", 'String'>
    readonly startDate: FieldRef<"ProjectPhase", 'DateTime'>
    readonly expectedEndDate: FieldRef<"ProjectPhase", 'DateTime'>
    readonly endDate: FieldRef<"ProjectPhase", 'DateTime'>
    readonly notes: FieldRef<"ProjectPhase", 'String'>
    readonly order: FieldRef<"ProjectPhase", 'Int'>
    readonly createdAt: FieldRef<"ProjectPhase", 'DateTime'>
    readonly updatedAt: FieldRef<"ProjectPhase", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProjectPhase findUnique
   */
  export type ProjectPhaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPhase
     */
    select?: ProjectPhaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectPhase
     */
    omit?: ProjectPhaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPhaseInclude<ExtArgs> | null
    /**
     * Filter, which ProjectPhase to fetch.
     */
    where: ProjectPhaseWhereUniqueInput
  }

  /**
   * ProjectPhase findUniqueOrThrow
   */
  export type ProjectPhaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPhase
     */
    select?: ProjectPhaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectPhase
     */
    omit?: ProjectPhaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPhaseInclude<ExtArgs> | null
    /**
     * Filter, which ProjectPhase to fetch.
     */
    where: ProjectPhaseWhereUniqueInput
  }

  /**
   * ProjectPhase findFirst
   */
  export type ProjectPhaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPhase
     */
    select?: ProjectPhaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectPhase
     */
    omit?: ProjectPhaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPhaseInclude<ExtArgs> | null
    /**
     * Filter, which ProjectPhase to fetch.
     */
    where?: ProjectPhaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectPhases to fetch.
     */
    orderBy?: ProjectPhaseOrderByWithRelationInput | ProjectPhaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectPhases.
     */
    cursor?: ProjectPhaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectPhases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectPhases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectPhases.
     */
    distinct?: ProjectPhaseScalarFieldEnum | ProjectPhaseScalarFieldEnum[]
  }

  /**
   * ProjectPhase findFirstOrThrow
   */
  export type ProjectPhaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPhase
     */
    select?: ProjectPhaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectPhase
     */
    omit?: ProjectPhaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPhaseInclude<ExtArgs> | null
    /**
     * Filter, which ProjectPhase to fetch.
     */
    where?: ProjectPhaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectPhases to fetch.
     */
    orderBy?: ProjectPhaseOrderByWithRelationInput | ProjectPhaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectPhases.
     */
    cursor?: ProjectPhaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectPhases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectPhases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectPhases.
     */
    distinct?: ProjectPhaseScalarFieldEnum | ProjectPhaseScalarFieldEnum[]
  }

  /**
   * ProjectPhase findMany
   */
  export type ProjectPhaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPhase
     */
    select?: ProjectPhaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectPhase
     */
    omit?: ProjectPhaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPhaseInclude<ExtArgs> | null
    /**
     * Filter, which ProjectPhases to fetch.
     */
    where?: ProjectPhaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectPhases to fetch.
     */
    orderBy?: ProjectPhaseOrderByWithRelationInput | ProjectPhaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectPhases.
     */
    cursor?: ProjectPhaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectPhases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectPhases.
     */
    skip?: number
    distinct?: ProjectPhaseScalarFieldEnum | ProjectPhaseScalarFieldEnum[]
  }

  /**
   * ProjectPhase create
   */
  export type ProjectPhaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPhase
     */
    select?: ProjectPhaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectPhase
     */
    omit?: ProjectPhaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPhaseInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectPhase.
     */
    data: XOR<ProjectPhaseCreateInput, ProjectPhaseUncheckedCreateInput>
  }

  /**
   * ProjectPhase createMany
   */
  export type ProjectPhaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectPhases.
     */
    data: ProjectPhaseCreateManyInput | ProjectPhaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectPhase createManyAndReturn
   */
  export type ProjectPhaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPhase
     */
    select?: ProjectPhaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectPhase
     */
    omit?: ProjectPhaseOmit<ExtArgs> | null
    /**
     * The data used to create many ProjectPhases.
     */
    data: ProjectPhaseCreateManyInput | ProjectPhaseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPhaseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectPhase update
   */
  export type ProjectPhaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPhase
     */
    select?: ProjectPhaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectPhase
     */
    omit?: ProjectPhaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPhaseInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectPhase.
     */
    data: XOR<ProjectPhaseUpdateInput, ProjectPhaseUncheckedUpdateInput>
    /**
     * Choose, which ProjectPhase to update.
     */
    where: ProjectPhaseWhereUniqueInput
  }

  /**
   * ProjectPhase updateMany
   */
  export type ProjectPhaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectPhases.
     */
    data: XOR<ProjectPhaseUpdateManyMutationInput, ProjectPhaseUncheckedUpdateManyInput>
    /**
     * Filter which ProjectPhases to update
     */
    where?: ProjectPhaseWhereInput
    /**
     * Limit how many ProjectPhases to update.
     */
    limit?: number
  }

  /**
   * ProjectPhase updateManyAndReturn
   */
  export type ProjectPhaseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPhase
     */
    select?: ProjectPhaseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectPhase
     */
    omit?: ProjectPhaseOmit<ExtArgs> | null
    /**
     * The data used to update ProjectPhases.
     */
    data: XOR<ProjectPhaseUpdateManyMutationInput, ProjectPhaseUncheckedUpdateManyInput>
    /**
     * Filter which ProjectPhases to update
     */
    where?: ProjectPhaseWhereInput
    /**
     * Limit how many ProjectPhases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPhaseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectPhase upsert
   */
  export type ProjectPhaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPhase
     */
    select?: ProjectPhaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectPhase
     */
    omit?: ProjectPhaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPhaseInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectPhase to update in case it exists.
     */
    where: ProjectPhaseWhereUniqueInput
    /**
     * In case the ProjectPhase found by the `where` argument doesn't exist, create a new ProjectPhase with this data.
     */
    create: XOR<ProjectPhaseCreateInput, ProjectPhaseUncheckedCreateInput>
    /**
     * In case the ProjectPhase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectPhaseUpdateInput, ProjectPhaseUncheckedUpdateInput>
  }

  /**
   * ProjectPhase delete
   */
  export type ProjectPhaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPhase
     */
    select?: ProjectPhaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectPhase
     */
    omit?: ProjectPhaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPhaseInclude<ExtArgs> | null
    /**
     * Filter which ProjectPhase to delete.
     */
    where: ProjectPhaseWhereUniqueInput
  }

  /**
   * ProjectPhase deleteMany
   */
  export type ProjectPhaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectPhases to delete
     */
    where?: ProjectPhaseWhereInput
    /**
     * Limit how many ProjectPhases to delete.
     */
    limit?: number
  }

  /**
   * ProjectPhase.tasks
   */
  export type ProjectPhase$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPhaseTask
     */
    select?: ProjectPhaseTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectPhaseTask
     */
    omit?: ProjectPhaseTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPhaseTaskInclude<ExtArgs> | null
    where?: ProjectPhaseTaskWhereInput
    orderBy?: ProjectPhaseTaskOrderByWithRelationInput | ProjectPhaseTaskOrderByWithRelationInput[]
    cursor?: ProjectPhaseTaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectPhaseTaskScalarFieldEnum | ProjectPhaseTaskScalarFieldEnum[]
  }

  /**
   * ProjectPhase without action
   */
  export type ProjectPhaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPhase
     */
    select?: ProjectPhaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectPhase
     */
    omit?: ProjectPhaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPhaseInclude<ExtArgs> | null
  }


  /**
   * Model ProjectPhaseTask
   */

  export type AggregateProjectPhaseTask = {
    _count: ProjectPhaseTaskCountAggregateOutputType | null
    _avg: ProjectPhaseTaskAvgAggregateOutputType | null
    _sum: ProjectPhaseTaskSumAggregateOutputType | null
    _min: ProjectPhaseTaskMinAggregateOutputType | null
    _max: ProjectPhaseTaskMaxAggregateOutputType | null
  }

  export type ProjectPhaseTaskAvgAggregateOutputType = {
    priority: number | null
  }

  export type ProjectPhaseTaskSumAggregateOutputType = {
    priority: number | null
  }

  export type ProjectPhaseTaskMinAggregateOutputType = {
    id: string | null
    phaseId: string | null
    name: string | null
    status: string | null
    responsible: string | null
    startDate: Date | null
    expectedEndDate: Date | null
    endDate: Date | null
    notes: string | null
    priority: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectPhaseTaskMaxAggregateOutputType = {
    id: string | null
    phaseId: string | null
    name: string | null
    status: string | null
    responsible: string | null
    startDate: Date | null
    expectedEndDate: Date | null
    endDate: Date | null
    notes: string | null
    priority: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectPhaseTaskCountAggregateOutputType = {
    id: number
    phaseId: number
    name: number
    status: number
    responsible: number
    startDate: number
    expectedEndDate: number
    endDate: number
    notes: number
    priority: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectPhaseTaskAvgAggregateInputType = {
    priority?: true
  }

  export type ProjectPhaseTaskSumAggregateInputType = {
    priority?: true
  }

  export type ProjectPhaseTaskMinAggregateInputType = {
    id?: true
    phaseId?: true
    name?: true
    status?: true
    responsible?: true
    startDate?: true
    expectedEndDate?: true
    endDate?: true
    notes?: true
    priority?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectPhaseTaskMaxAggregateInputType = {
    id?: true
    phaseId?: true
    name?: true
    status?: true
    responsible?: true
    startDate?: true
    expectedEndDate?: true
    endDate?: true
    notes?: true
    priority?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectPhaseTaskCountAggregateInputType = {
    id?: true
    phaseId?: true
    name?: true
    status?: true
    responsible?: true
    startDate?: true
    expectedEndDate?: true
    endDate?: true
    notes?: true
    priority?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectPhaseTaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectPhaseTask to aggregate.
     */
    where?: ProjectPhaseTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectPhaseTasks to fetch.
     */
    orderBy?: ProjectPhaseTaskOrderByWithRelationInput | ProjectPhaseTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectPhaseTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectPhaseTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectPhaseTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectPhaseTasks
    **/
    _count?: true | ProjectPhaseTaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectPhaseTaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectPhaseTaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectPhaseTaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectPhaseTaskMaxAggregateInputType
  }

  export type GetProjectPhaseTaskAggregateType<T extends ProjectPhaseTaskAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectPhaseTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectPhaseTask[P]>
      : GetScalarType<T[P], AggregateProjectPhaseTask[P]>
  }




  export type ProjectPhaseTaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectPhaseTaskWhereInput
    orderBy?: ProjectPhaseTaskOrderByWithAggregationInput | ProjectPhaseTaskOrderByWithAggregationInput[]
    by: ProjectPhaseTaskScalarFieldEnum[] | ProjectPhaseTaskScalarFieldEnum
    having?: ProjectPhaseTaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectPhaseTaskCountAggregateInputType | true
    _avg?: ProjectPhaseTaskAvgAggregateInputType
    _sum?: ProjectPhaseTaskSumAggregateInputType
    _min?: ProjectPhaseTaskMinAggregateInputType
    _max?: ProjectPhaseTaskMaxAggregateInputType
  }

  export type ProjectPhaseTaskGroupByOutputType = {
    id: string
    phaseId: string
    name: string
    status: string | null
    responsible: string | null
    startDate: Date | null
    expectedEndDate: Date | null
    endDate: Date | null
    notes: string | null
    priority: number | null
    createdAt: Date | null
    updatedAt: Date | null
    _count: ProjectPhaseTaskCountAggregateOutputType | null
    _avg: ProjectPhaseTaskAvgAggregateOutputType | null
    _sum: ProjectPhaseTaskSumAggregateOutputType | null
    _min: ProjectPhaseTaskMinAggregateOutputType | null
    _max: ProjectPhaseTaskMaxAggregateOutputType | null
  }

  type GetProjectPhaseTaskGroupByPayload<T extends ProjectPhaseTaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectPhaseTaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectPhaseTaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectPhaseTaskGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectPhaseTaskGroupByOutputType[P]>
        }
      >
    >


  export type ProjectPhaseTaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phaseId?: boolean
    name?: boolean
    status?: boolean
    responsible?: boolean
    startDate?: boolean
    expectedEndDate?: boolean
    endDate?: boolean
    notes?: boolean
    priority?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    phase?: boolean | ProjectPhaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectPhaseTask"]>

  export type ProjectPhaseTaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phaseId?: boolean
    name?: boolean
    status?: boolean
    responsible?: boolean
    startDate?: boolean
    expectedEndDate?: boolean
    endDate?: boolean
    notes?: boolean
    priority?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    phase?: boolean | ProjectPhaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectPhaseTask"]>

  export type ProjectPhaseTaskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phaseId?: boolean
    name?: boolean
    status?: boolean
    responsible?: boolean
    startDate?: boolean
    expectedEndDate?: boolean
    endDate?: boolean
    notes?: boolean
    priority?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    phase?: boolean | ProjectPhaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectPhaseTask"]>

  export type ProjectPhaseTaskSelectScalar = {
    id?: boolean
    phaseId?: boolean
    name?: boolean
    status?: boolean
    responsible?: boolean
    startDate?: boolean
    expectedEndDate?: boolean
    endDate?: boolean
    notes?: boolean
    priority?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectPhaseTaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "phaseId" | "name" | "status" | "responsible" | "startDate" | "expectedEndDate" | "endDate" | "notes" | "priority" | "createdAt" | "updatedAt", ExtArgs["result"]["projectPhaseTask"]>
  export type ProjectPhaseTaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    phase?: boolean | ProjectPhaseDefaultArgs<ExtArgs>
  }
  export type ProjectPhaseTaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    phase?: boolean | ProjectPhaseDefaultArgs<ExtArgs>
  }
  export type ProjectPhaseTaskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    phase?: boolean | ProjectPhaseDefaultArgs<ExtArgs>
  }

  export type $ProjectPhaseTaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectPhaseTask"
    objects: {
      phase: Prisma.$ProjectPhasePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      phaseId: string
      name: string
      status: string | null
      responsible: string | null
      startDate: Date | null
      expectedEndDate: Date | null
      endDate: Date | null
      notes: string | null
      priority: number | null
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["projectPhaseTask"]>
    composites: {}
  }

  type ProjectPhaseTaskGetPayload<S extends boolean | null | undefined | ProjectPhaseTaskDefaultArgs> = $Result.GetResult<Prisma.$ProjectPhaseTaskPayload, S>

  type ProjectPhaseTaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectPhaseTaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectPhaseTaskCountAggregateInputType | true
    }

  export interface ProjectPhaseTaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectPhaseTask'], meta: { name: 'ProjectPhaseTask' } }
    /**
     * Find zero or one ProjectPhaseTask that matches the filter.
     * @param {ProjectPhaseTaskFindUniqueArgs} args - Arguments to find a ProjectPhaseTask
     * @example
     * // Get one ProjectPhaseTask
     * const projectPhaseTask = await prisma.projectPhaseTask.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectPhaseTaskFindUniqueArgs>(args: SelectSubset<T, ProjectPhaseTaskFindUniqueArgs<ExtArgs>>): Prisma__ProjectPhaseTaskClient<$Result.GetResult<Prisma.$ProjectPhaseTaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectPhaseTask that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectPhaseTaskFindUniqueOrThrowArgs} args - Arguments to find a ProjectPhaseTask
     * @example
     * // Get one ProjectPhaseTask
     * const projectPhaseTask = await prisma.projectPhaseTask.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectPhaseTaskFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectPhaseTaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectPhaseTaskClient<$Result.GetResult<Prisma.$ProjectPhaseTaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectPhaseTask that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectPhaseTaskFindFirstArgs} args - Arguments to find a ProjectPhaseTask
     * @example
     * // Get one ProjectPhaseTask
     * const projectPhaseTask = await prisma.projectPhaseTask.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectPhaseTaskFindFirstArgs>(args?: SelectSubset<T, ProjectPhaseTaskFindFirstArgs<ExtArgs>>): Prisma__ProjectPhaseTaskClient<$Result.GetResult<Prisma.$ProjectPhaseTaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectPhaseTask that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectPhaseTaskFindFirstOrThrowArgs} args - Arguments to find a ProjectPhaseTask
     * @example
     * // Get one ProjectPhaseTask
     * const projectPhaseTask = await prisma.projectPhaseTask.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectPhaseTaskFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectPhaseTaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectPhaseTaskClient<$Result.GetResult<Prisma.$ProjectPhaseTaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectPhaseTasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectPhaseTaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectPhaseTasks
     * const projectPhaseTasks = await prisma.projectPhaseTask.findMany()
     * 
     * // Get first 10 ProjectPhaseTasks
     * const projectPhaseTasks = await prisma.projectPhaseTask.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectPhaseTaskWithIdOnly = await prisma.projectPhaseTask.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectPhaseTaskFindManyArgs>(args?: SelectSubset<T, ProjectPhaseTaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPhaseTaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectPhaseTask.
     * @param {ProjectPhaseTaskCreateArgs} args - Arguments to create a ProjectPhaseTask.
     * @example
     * // Create one ProjectPhaseTask
     * const ProjectPhaseTask = await prisma.projectPhaseTask.create({
     *   data: {
     *     // ... data to create a ProjectPhaseTask
     *   }
     * })
     * 
     */
    create<T extends ProjectPhaseTaskCreateArgs>(args: SelectSubset<T, ProjectPhaseTaskCreateArgs<ExtArgs>>): Prisma__ProjectPhaseTaskClient<$Result.GetResult<Prisma.$ProjectPhaseTaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectPhaseTasks.
     * @param {ProjectPhaseTaskCreateManyArgs} args - Arguments to create many ProjectPhaseTasks.
     * @example
     * // Create many ProjectPhaseTasks
     * const projectPhaseTask = await prisma.projectPhaseTask.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectPhaseTaskCreateManyArgs>(args?: SelectSubset<T, ProjectPhaseTaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectPhaseTasks and returns the data saved in the database.
     * @param {ProjectPhaseTaskCreateManyAndReturnArgs} args - Arguments to create many ProjectPhaseTasks.
     * @example
     * // Create many ProjectPhaseTasks
     * const projectPhaseTask = await prisma.projectPhaseTask.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectPhaseTasks and only return the `id`
     * const projectPhaseTaskWithIdOnly = await prisma.projectPhaseTask.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectPhaseTaskCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectPhaseTaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPhaseTaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProjectPhaseTask.
     * @param {ProjectPhaseTaskDeleteArgs} args - Arguments to delete one ProjectPhaseTask.
     * @example
     * // Delete one ProjectPhaseTask
     * const ProjectPhaseTask = await prisma.projectPhaseTask.delete({
     *   where: {
     *     // ... filter to delete one ProjectPhaseTask
     *   }
     * })
     * 
     */
    delete<T extends ProjectPhaseTaskDeleteArgs>(args: SelectSubset<T, ProjectPhaseTaskDeleteArgs<ExtArgs>>): Prisma__ProjectPhaseTaskClient<$Result.GetResult<Prisma.$ProjectPhaseTaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectPhaseTask.
     * @param {ProjectPhaseTaskUpdateArgs} args - Arguments to update one ProjectPhaseTask.
     * @example
     * // Update one ProjectPhaseTask
     * const projectPhaseTask = await prisma.projectPhaseTask.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectPhaseTaskUpdateArgs>(args: SelectSubset<T, ProjectPhaseTaskUpdateArgs<ExtArgs>>): Prisma__ProjectPhaseTaskClient<$Result.GetResult<Prisma.$ProjectPhaseTaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectPhaseTasks.
     * @param {ProjectPhaseTaskDeleteManyArgs} args - Arguments to filter ProjectPhaseTasks to delete.
     * @example
     * // Delete a few ProjectPhaseTasks
     * const { count } = await prisma.projectPhaseTask.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectPhaseTaskDeleteManyArgs>(args?: SelectSubset<T, ProjectPhaseTaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectPhaseTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectPhaseTaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectPhaseTasks
     * const projectPhaseTask = await prisma.projectPhaseTask.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectPhaseTaskUpdateManyArgs>(args: SelectSubset<T, ProjectPhaseTaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectPhaseTasks and returns the data updated in the database.
     * @param {ProjectPhaseTaskUpdateManyAndReturnArgs} args - Arguments to update many ProjectPhaseTasks.
     * @example
     * // Update many ProjectPhaseTasks
     * const projectPhaseTask = await prisma.projectPhaseTask.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProjectPhaseTasks and only return the `id`
     * const projectPhaseTaskWithIdOnly = await prisma.projectPhaseTask.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProjectPhaseTaskUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectPhaseTaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPhaseTaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProjectPhaseTask.
     * @param {ProjectPhaseTaskUpsertArgs} args - Arguments to update or create a ProjectPhaseTask.
     * @example
     * // Update or create a ProjectPhaseTask
     * const projectPhaseTask = await prisma.projectPhaseTask.upsert({
     *   create: {
     *     // ... data to create a ProjectPhaseTask
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectPhaseTask we want to update
     *   }
     * })
     */
    upsert<T extends ProjectPhaseTaskUpsertArgs>(args: SelectSubset<T, ProjectPhaseTaskUpsertArgs<ExtArgs>>): Prisma__ProjectPhaseTaskClient<$Result.GetResult<Prisma.$ProjectPhaseTaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectPhaseTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectPhaseTaskCountArgs} args - Arguments to filter ProjectPhaseTasks to count.
     * @example
     * // Count the number of ProjectPhaseTasks
     * const count = await prisma.projectPhaseTask.count({
     *   where: {
     *     // ... the filter for the ProjectPhaseTasks we want to count
     *   }
     * })
    **/
    count<T extends ProjectPhaseTaskCountArgs>(
      args?: Subset<T, ProjectPhaseTaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectPhaseTaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectPhaseTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectPhaseTaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectPhaseTaskAggregateArgs>(args: Subset<T, ProjectPhaseTaskAggregateArgs>): Prisma.PrismaPromise<GetProjectPhaseTaskAggregateType<T>>

    /**
     * Group by ProjectPhaseTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectPhaseTaskGroupByArgs} args - Group by arguments.
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
      T extends ProjectPhaseTaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectPhaseTaskGroupByArgs['orderBy'] }
        : { orderBy?: ProjectPhaseTaskGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectPhaseTaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectPhaseTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectPhaseTask model
   */
  readonly fields: ProjectPhaseTaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectPhaseTask.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectPhaseTaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    phase<T extends ProjectPhaseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectPhaseDefaultArgs<ExtArgs>>): Prisma__ProjectPhaseClient<$Result.GetResult<Prisma.$ProjectPhasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProjectPhaseTask model
   */
  interface ProjectPhaseTaskFieldRefs {
    readonly id: FieldRef<"ProjectPhaseTask", 'String'>
    readonly phaseId: FieldRef<"ProjectPhaseTask", 'String'>
    readonly name: FieldRef<"ProjectPhaseTask", 'String'>
    readonly status: FieldRef<"ProjectPhaseTask", 'String'>
    readonly responsible: FieldRef<"ProjectPhaseTask", 'String'>
    readonly startDate: FieldRef<"ProjectPhaseTask", 'DateTime'>
    readonly expectedEndDate: FieldRef<"ProjectPhaseTask", 'DateTime'>
    readonly endDate: FieldRef<"ProjectPhaseTask", 'DateTime'>
    readonly notes: FieldRef<"ProjectPhaseTask", 'String'>
    readonly priority: FieldRef<"ProjectPhaseTask", 'Int'>
    readonly createdAt: FieldRef<"ProjectPhaseTask", 'DateTime'>
    readonly updatedAt: FieldRef<"ProjectPhaseTask", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProjectPhaseTask findUnique
   */
  export type ProjectPhaseTaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPhaseTask
     */
    select?: ProjectPhaseTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectPhaseTask
     */
    omit?: ProjectPhaseTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPhaseTaskInclude<ExtArgs> | null
    /**
     * Filter, which ProjectPhaseTask to fetch.
     */
    where: ProjectPhaseTaskWhereUniqueInput
  }

  /**
   * ProjectPhaseTask findUniqueOrThrow
   */
  export type ProjectPhaseTaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPhaseTask
     */
    select?: ProjectPhaseTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectPhaseTask
     */
    omit?: ProjectPhaseTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPhaseTaskInclude<ExtArgs> | null
    /**
     * Filter, which ProjectPhaseTask to fetch.
     */
    where: ProjectPhaseTaskWhereUniqueInput
  }

  /**
   * ProjectPhaseTask findFirst
   */
  export type ProjectPhaseTaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPhaseTask
     */
    select?: ProjectPhaseTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectPhaseTask
     */
    omit?: ProjectPhaseTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPhaseTaskInclude<ExtArgs> | null
    /**
     * Filter, which ProjectPhaseTask to fetch.
     */
    where?: ProjectPhaseTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectPhaseTasks to fetch.
     */
    orderBy?: ProjectPhaseTaskOrderByWithRelationInput | ProjectPhaseTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectPhaseTasks.
     */
    cursor?: ProjectPhaseTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectPhaseTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectPhaseTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectPhaseTasks.
     */
    distinct?: ProjectPhaseTaskScalarFieldEnum | ProjectPhaseTaskScalarFieldEnum[]
  }

  /**
   * ProjectPhaseTask findFirstOrThrow
   */
  export type ProjectPhaseTaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPhaseTask
     */
    select?: ProjectPhaseTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectPhaseTask
     */
    omit?: ProjectPhaseTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPhaseTaskInclude<ExtArgs> | null
    /**
     * Filter, which ProjectPhaseTask to fetch.
     */
    where?: ProjectPhaseTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectPhaseTasks to fetch.
     */
    orderBy?: ProjectPhaseTaskOrderByWithRelationInput | ProjectPhaseTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectPhaseTasks.
     */
    cursor?: ProjectPhaseTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectPhaseTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectPhaseTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectPhaseTasks.
     */
    distinct?: ProjectPhaseTaskScalarFieldEnum | ProjectPhaseTaskScalarFieldEnum[]
  }

  /**
   * ProjectPhaseTask findMany
   */
  export type ProjectPhaseTaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPhaseTask
     */
    select?: ProjectPhaseTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectPhaseTask
     */
    omit?: ProjectPhaseTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPhaseTaskInclude<ExtArgs> | null
    /**
     * Filter, which ProjectPhaseTasks to fetch.
     */
    where?: ProjectPhaseTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectPhaseTasks to fetch.
     */
    orderBy?: ProjectPhaseTaskOrderByWithRelationInput | ProjectPhaseTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectPhaseTasks.
     */
    cursor?: ProjectPhaseTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectPhaseTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectPhaseTasks.
     */
    skip?: number
    distinct?: ProjectPhaseTaskScalarFieldEnum | ProjectPhaseTaskScalarFieldEnum[]
  }

  /**
   * ProjectPhaseTask create
   */
  export type ProjectPhaseTaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPhaseTask
     */
    select?: ProjectPhaseTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectPhaseTask
     */
    omit?: ProjectPhaseTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPhaseTaskInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectPhaseTask.
     */
    data: XOR<ProjectPhaseTaskCreateInput, ProjectPhaseTaskUncheckedCreateInput>
  }

  /**
   * ProjectPhaseTask createMany
   */
  export type ProjectPhaseTaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectPhaseTasks.
     */
    data: ProjectPhaseTaskCreateManyInput | ProjectPhaseTaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectPhaseTask createManyAndReturn
   */
  export type ProjectPhaseTaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPhaseTask
     */
    select?: ProjectPhaseTaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectPhaseTask
     */
    omit?: ProjectPhaseTaskOmit<ExtArgs> | null
    /**
     * The data used to create many ProjectPhaseTasks.
     */
    data: ProjectPhaseTaskCreateManyInput | ProjectPhaseTaskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPhaseTaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectPhaseTask update
   */
  export type ProjectPhaseTaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPhaseTask
     */
    select?: ProjectPhaseTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectPhaseTask
     */
    omit?: ProjectPhaseTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPhaseTaskInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectPhaseTask.
     */
    data: XOR<ProjectPhaseTaskUpdateInput, ProjectPhaseTaskUncheckedUpdateInput>
    /**
     * Choose, which ProjectPhaseTask to update.
     */
    where: ProjectPhaseTaskWhereUniqueInput
  }

  /**
   * ProjectPhaseTask updateMany
   */
  export type ProjectPhaseTaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectPhaseTasks.
     */
    data: XOR<ProjectPhaseTaskUpdateManyMutationInput, ProjectPhaseTaskUncheckedUpdateManyInput>
    /**
     * Filter which ProjectPhaseTasks to update
     */
    where?: ProjectPhaseTaskWhereInput
    /**
     * Limit how many ProjectPhaseTasks to update.
     */
    limit?: number
  }

  /**
   * ProjectPhaseTask updateManyAndReturn
   */
  export type ProjectPhaseTaskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPhaseTask
     */
    select?: ProjectPhaseTaskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectPhaseTask
     */
    omit?: ProjectPhaseTaskOmit<ExtArgs> | null
    /**
     * The data used to update ProjectPhaseTasks.
     */
    data: XOR<ProjectPhaseTaskUpdateManyMutationInput, ProjectPhaseTaskUncheckedUpdateManyInput>
    /**
     * Filter which ProjectPhaseTasks to update
     */
    where?: ProjectPhaseTaskWhereInput
    /**
     * Limit how many ProjectPhaseTasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPhaseTaskIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectPhaseTask upsert
   */
  export type ProjectPhaseTaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPhaseTask
     */
    select?: ProjectPhaseTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectPhaseTask
     */
    omit?: ProjectPhaseTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPhaseTaskInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectPhaseTask to update in case it exists.
     */
    where: ProjectPhaseTaskWhereUniqueInput
    /**
     * In case the ProjectPhaseTask found by the `where` argument doesn't exist, create a new ProjectPhaseTask with this data.
     */
    create: XOR<ProjectPhaseTaskCreateInput, ProjectPhaseTaskUncheckedCreateInput>
    /**
     * In case the ProjectPhaseTask was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectPhaseTaskUpdateInput, ProjectPhaseTaskUncheckedUpdateInput>
  }

  /**
   * ProjectPhaseTask delete
   */
  export type ProjectPhaseTaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPhaseTask
     */
    select?: ProjectPhaseTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectPhaseTask
     */
    omit?: ProjectPhaseTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPhaseTaskInclude<ExtArgs> | null
    /**
     * Filter which ProjectPhaseTask to delete.
     */
    where: ProjectPhaseTaskWhereUniqueInput
  }

  /**
   * ProjectPhaseTask deleteMany
   */
  export type ProjectPhaseTaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectPhaseTasks to delete
     */
    where?: ProjectPhaseTaskWhereInput
    /**
     * Limit how many ProjectPhaseTasks to delete.
     */
    limit?: number
  }

  /**
   * ProjectPhaseTask without action
   */
  export type ProjectPhaseTaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPhaseTask
     */
    select?: ProjectPhaseTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectPhaseTask
     */
    omit?: ProjectPhaseTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPhaseTaskInclude<ExtArgs> | null
  }


  /**
   * Model ConstructionPhase
   */

  export type AggregateConstructionPhase = {
    _count: ConstructionPhaseCountAggregateOutputType | null
    _avg: ConstructionPhaseAvgAggregateOutputType | null
    _sum: ConstructionPhaseSumAggregateOutputType | null
    _min: ConstructionPhaseMinAggregateOutputType | null
    _max: ConstructionPhaseMaxAggregateOutputType | null
  }

  export type ConstructionPhaseAvgAggregateOutputType = {
    budget: Decimal | null
    actualCost: Decimal | null
    order: number | null
  }

  export type ConstructionPhaseSumAggregateOutputType = {
    budget: Decimal | null
    actualCost: Decimal | null
    order: number | null
  }

  export type ConstructionPhaseMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    name: string | null
    status: string | null
    startDate: Date | null
    expectedEndDate: Date | null
    endDate: Date | null
    budget: Decimal | null
    actualCost: Decimal | null
    notes: string | null
    responsible: string | null
    order: number | null
  }

  export type ConstructionPhaseMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    name: string | null
    status: string | null
    startDate: Date | null
    expectedEndDate: Date | null
    endDate: Date | null
    budget: Decimal | null
    actualCost: Decimal | null
    notes: string | null
    responsible: string | null
    order: number | null
  }

  export type ConstructionPhaseCountAggregateOutputType = {
    id: number
    projectId: number
    name: number
    status: number
    startDate: number
    expectedEndDate: number
    endDate: number
    budget: number
    actualCost: number
    notes: number
    responsible: number
    order: number
    _all: number
  }


  export type ConstructionPhaseAvgAggregateInputType = {
    budget?: true
    actualCost?: true
    order?: true
  }

  export type ConstructionPhaseSumAggregateInputType = {
    budget?: true
    actualCost?: true
    order?: true
  }

  export type ConstructionPhaseMinAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    status?: true
    startDate?: true
    expectedEndDate?: true
    endDate?: true
    budget?: true
    actualCost?: true
    notes?: true
    responsible?: true
    order?: true
  }

  export type ConstructionPhaseMaxAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    status?: true
    startDate?: true
    expectedEndDate?: true
    endDate?: true
    budget?: true
    actualCost?: true
    notes?: true
    responsible?: true
    order?: true
  }

  export type ConstructionPhaseCountAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    status?: true
    startDate?: true
    expectedEndDate?: true
    endDate?: true
    budget?: true
    actualCost?: true
    notes?: true
    responsible?: true
    order?: true
    _all?: true
  }

  export type ConstructionPhaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConstructionPhase to aggregate.
     */
    where?: ConstructionPhaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConstructionPhases to fetch.
     */
    orderBy?: ConstructionPhaseOrderByWithRelationInput | ConstructionPhaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConstructionPhaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConstructionPhases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConstructionPhases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ConstructionPhases
    **/
    _count?: true | ConstructionPhaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConstructionPhaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConstructionPhaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConstructionPhaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConstructionPhaseMaxAggregateInputType
  }

  export type GetConstructionPhaseAggregateType<T extends ConstructionPhaseAggregateArgs> = {
        [P in keyof T & keyof AggregateConstructionPhase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConstructionPhase[P]>
      : GetScalarType<T[P], AggregateConstructionPhase[P]>
  }




  export type ConstructionPhaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConstructionPhaseWhereInput
    orderBy?: ConstructionPhaseOrderByWithAggregationInput | ConstructionPhaseOrderByWithAggregationInput[]
    by: ConstructionPhaseScalarFieldEnum[] | ConstructionPhaseScalarFieldEnum
    having?: ConstructionPhaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConstructionPhaseCountAggregateInputType | true
    _avg?: ConstructionPhaseAvgAggregateInputType
    _sum?: ConstructionPhaseSumAggregateInputType
    _min?: ConstructionPhaseMinAggregateInputType
    _max?: ConstructionPhaseMaxAggregateInputType
  }

  export type ConstructionPhaseGroupByOutputType = {
    id: string
    projectId: string
    name: string
    status: string
    startDate: Date | null
    expectedEndDate: Date | null
    endDate: Date | null
    budget: Decimal | null
    actualCost: Decimal | null
    notes: string | null
    responsible: string | null
    order: number | null
    _count: ConstructionPhaseCountAggregateOutputType | null
    _avg: ConstructionPhaseAvgAggregateOutputType | null
    _sum: ConstructionPhaseSumAggregateOutputType | null
    _min: ConstructionPhaseMinAggregateOutputType | null
    _max: ConstructionPhaseMaxAggregateOutputType | null
  }

  type GetConstructionPhaseGroupByPayload<T extends ConstructionPhaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConstructionPhaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConstructionPhaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConstructionPhaseGroupByOutputType[P]>
            : GetScalarType<T[P], ConstructionPhaseGroupByOutputType[P]>
        }
      >
    >


  export type ConstructionPhaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    name?: boolean
    status?: boolean
    startDate?: boolean
    expectedEndDate?: boolean
    endDate?: boolean
    budget?: boolean
    actualCost?: boolean
    notes?: boolean
    responsible?: boolean
    order?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    tasks?: boolean | ConstructionPhase$tasksArgs<ExtArgs>
    _count?: boolean | ConstructionPhaseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["constructionPhase"]>

  export type ConstructionPhaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    name?: boolean
    status?: boolean
    startDate?: boolean
    expectedEndDate?: boolean
    endDate?: boolean
    budget?: boolean
    actualCost?: boolean
    notes?: boolean
    responsible?: boolean
    order?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["constructionPhase"]>

  export type ConstructionPhaseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    name?: boolean
    status?: boolean
    startDate?: boolean
    expectedEndDate?: boolean
    endDate?: boolean
    budget?: boolean
    actualCost?: boolean
    notes?: boolean
    responsible?: boolean
    order?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["constructionPhase"]>

  export type ConstructionPhaseSelectScalar = {
    id?: boolean
    projectId?: boolean
    name?: boolean
    status?: boolean
    startDate?: boolean
    expectedEndDate?: boolean
    endDate?: boolean
    budget?: boolean
    actualCost?: boolean
    notes?: boolean
    responsible?: boolean
    order?: boolean
  }

  export type ConstructionPhaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "name" | "status" | "startDate" | "expectedEndDate" | "endDate" | "budget" | "actualCost" | "notes" | "responsible" | "order", ExtArgs["result"]["constructionPhase"]>
  export type ConstructionPhaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    tasks?: boolean | ConstructionPhase$tasksArgs<ExtArgs>
    _count?: boolean | ConstructionPhaseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ConstructionPhaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ConstructionPhaseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $ConstructionPhasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ConstructionPhase"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      tasks: Prisma.$ConstructionTaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      name: string
      status: string
      startDate: Date | null
      expectedEndDate: Date | null
      endDate: Date | null
      budget: Prisma.Decimal | null
      actualCost: Prisma.Decimal | null
      notes: string | null
      responsible: string | null
      order: number | null
    }, ExtArgs["result"]["constructionPhase"]>
    composites: {}
  }

  type ConstructionPhaseGetPayload<S extends boolean | null | undefined | ConstructionPhaseDefaultArgs> = $Result.GetResult<Prisma.$ConstructionPhasePayload, S>

  type ConstructionPhaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConstructionPhaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConstructionPhaseCountAggregateInputType | true
    }

  export interface ConstructionPhaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ConstructionPhase'], meta: { name: 'ConstructionPhase' } }
    /**
     * Find zero or one ConstructionPhase that matches the filter.
     * @param {ConstructionPhaseFindUniqueArgs} args - Arguments to find a ConstructionPhase
     * @example
     * // Get one ConstructionPhase
     * const constructionPhase = await prisma.constructionPhase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConstructionPhaseFindUniqueArgs>(args: SelectSubset<T, ConstructionPhaseFindUniqueArgs<ExtArgs>>): Prisma__ConstructionPhaseClient<$Result.GetResult<Prisma.$ConstructionPhasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ConstructionPhase that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConstructionPhaseFindUniqueOrThrowArgs} args - Arguments to find a ConstructionPhase
     * @example
     * // Get one ConstructionPhase
     * const constructionPhase = await prisma.constructionPhase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConstructionPhaseFindUniqueOrThrowArgs>(args: SelectSubset<T, ConstructionPhaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConstructionPhaseClient<$Result.GetResult<Prisma.$ConstructionPhasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConstructionPhase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConstructionPhaseFindFirstArgs} args - Arguments to find a ConstructionPhase
     * @example
     * // Get one ConstructionPhase
     * const constructionPhase = await prisma.constructionPhase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConstructionPhaseFindFirstArgs>(args?: SelectSubset<T, ConstructionPhaseFindFirstArgs<ExtArgs>>): Prisma__ConstructionPhaseClient<$Result.GetResult<Prisma.$ConstructionPhasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConstructionPhase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConstructionPhaseFindFirstOrThrowArgs} args - Arguments to find a ConstructionPhase
     * @example
     * // Get one ConstructionPhase
     * const constructionPhase = await prisma.constructionPhase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConstructionPhaseFindFirstOrThrowArgs>(args?: SelectSubset<T, ConstructionPhaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConstructionPhaseClient<$Result.GetResult<Prisma.$ConstructionPhasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ConstructionPhases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConstructionPhaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ConstructionPhases
     * const constructionPhases = await prisma.constructionPhase.findMany()
     * 
     * // Get first 10 ConstructionPhases
     * const constructionPhases = await prisma.constructionPhase.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const constructionPhaseWithIdOnly = await prisma.constructionPhase.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConstructionPhaseFindManyArgs>(args?: SelectSubset<T, ConstructionPhaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConstructionPhasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ConstructionPhase.
     * @param {ConstructionPhaseCreateArgs} args - Arguments to create a ConstructionPhase.
     * @example
     * // Create one ConstructionPhase
     * const ConstructionPhase = await prisma.constructionPhase.create({
     *   data: {
     *     // ... data to create a ConstructionPhase
     *   }
     * })
     * 
     */
    create<T extends ConstructionPhaseCreateArgs>(args: SelectSubset<T, ConstructionPhaseCreateArgs<ExtArgs>>): Prisma__ConstructionPhaseClient<$Result.GetResult<Prisma.$ConstructionPhasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ConstructionPhases.
     * @param {ConstructionPhaseCreateManyArgs} args - Arguments to create many ConstructionPhases.
     * @example
     * // Create many ConstructionPhases
     * const constructionPhase = await prisma.constructionPhase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConstructionPhaseCreateManyArgs>(args?: SelectSubset<T, ConstructionPhaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ConstructionPhases and returns the data saved in the database.
     * @param {ConstructionPhaseCreateManyAndReturnArgs} args - Arguments to create many ConstructionPhases.
     * @example
     * // Create many ConstructionPhases
     * const constructionPhase = await prisma.constructionPhase.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ConstructionPhases and only return the `id`
     * const constructionPhaseWithIdOnly = await prisma.constructionPhase.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConstructionPhaseCreateManyAndReturnArgs>(args?: SelectSubset<T, ConstructionPhaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConstructionPhasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ConstructionPhase.
     * @param {ConstructionPhaseDeleteArgs} args - Arguments to delete one ConstructionPhase.
     * @example
     * // Delete one ConstructionPhase
     * const ConstructionPhase = await prisma.constructionPhase.delete({
     *   where: {
     *     // ... filter to delete one ConstructionPhase
     *   }
     * })
     * 
     */
    delete<T extends ConstructionPhaseDeleteArgs>(args: SelectSubset<T, ConstructionPhaseDeleteArgs<ExtArgs>>): Prisma__ConstructionPhaseClient<$Result.GetResult<Prisma.$ConstructionPhasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ConstructionPhase.
     * @param {ConstructionPhaseUpdateArgs} args - Arguments to update one ConstructionPhase.
     * @example
     * // Update one ConstructionPhase
     * const constructionPhase = await prisma.constructionPhase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConstructionPhaseUpdateArgs>(args: SelectSubset<T, ConstructionPhaseUpdateArgs<ExtArgs>>): Prisma__ConstructionPhaseClient<$Result.GetResult<Prisma.$ConstructionPhasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ConstructionPhases.
     * @param {ConstructionPhaseDeleteManyArgs} args - Arguments to filter ConstructionPhases to delete.
     * @example
     * // Delete a few ConstructionPhases
     * const { count } = await prisma.constructionPhase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConstructionPhaseDeleteManyArgs>(args?: SelectSubset<T, ConstructionPhaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConstructionPhases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConstructionPhaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ConstructionPhases
     * const constructionPhase = await prisma.constructionPhase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConstructionPhaseUpdateManyArgs>(args: SelectSubset<T, ConstructionPhaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConstructionPhases and returns the data updated in the database.
     * @param {ConstructionPhaseUpdateManyAndReturnArgs} args - Arguments to update many ConstructionPhases.
     * @example
     * // Update many ConstructionPhases
     * const constructionPhase = await prisma.constructionPhase.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ConstructionPhases and only return the `id`
     * const constructionPhaseWithIdOnly = await prisma.constructionPhase.updateManyAndReturn({
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
    updateManyAndReturn<T extends ConstructionPhaseUpdateManyAndReturnArgs>(args: SelectSubset<T, ConstructionPhaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConstructionPhasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ConstructionPhase.
     * @param {ConstructionPhaseUpsertArgs} args - Arguments to update or create a ConstructionPhase.
     * @example
     * // Update or create a ConstructionPhase
     * const constructionPhase = await prisma.constructionPhase.upsert({
     *   create: {
     *     // ... data to create a ConstructionPhase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ConstructionPhase we want to update
     *   }
     * })
     */
    upsert<T extends ConstructionPhaseUpsertArgs>(args: SelectSubset<T, ConstructionPhaseUpsertArgs<ExtArgs>>): Prisma__ConstructionPhaseClient<$Result.GetResult<Prisma.$ConstructionPhasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ConstructionPhases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConstructionPhaseCountArgs} args - Arguments to filter ConstructionPhases to count.
     * @example
     * // Count the number of ConstructionPhases
     * const count = await prisma.constructionPhase.count({
     *   where: {
     *     // ... the filter for the ConstructionPhases we want to count
     *   }
     * })
    **/
    count<T extends ConstructionPhaseCountArgs>(
      args?: Subset<T, ConstructionPhaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConstructionPhaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ConstructionPhase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConstructionPhaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConstructionPhaseAggregateArgs>(args: Subset<T, ConstructionPhaseAggregateArgs>): Prisma.PrismaPromise<GetConstructionPhaseAggregateType<T>>

    /**
     * Group by ConstructionPhase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConstructionPhaseGroupByArgs} args - Group by arguments.
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
      T extends ConstructionPhaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConstructionPhaseGroupByArgs['orderBy'] }
        : { orderBy?: ConstructionPhaseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConstructionPhaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConstructionPhaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ConstructionPhase model
   */
  readonly fields: ConstructionPhaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ConstructionPhase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConstructionPhaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tasks<T extends ConstructionPhase$tasksArgs<ExtArgs> = {}>(args?: Subset<T, ConstructionPhase$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConstructionTaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ConstructionPhase model
   */
  interface ConstructionPhaseFieldRefs {
    readonly id: FieldRef<"ConstructionPhase", 'String'>
    readonly projectId: FieldRef<"ConstructionPhase", 'String'>
    readonly name: FieldRef<"ConstructionPhase", 'String'>
    readonly status: FieldRef<"ConstructionPhase", 'String'>
    readonly startDate: FieldRef<"ConstructionPhase", 'DateTime'>
    readonly expectedEndDate: FieldRef<"ConstructionPhase", 'DateTime'>
    readonly endDate: FieldRef<"ConstructionPhase", 'DateTime'>
    readonly budget: FieldRef<"ConstructionPhase", 'Decimal'>
    readonly actualCost: FieldRef<"ConstructionPhase", 'Decimal'>
    readonly notes: FieldRef<"ConstructionPhase", 'String'>
    readonly responsible: FieldRef<"ConstructionPhase", 'String'>
    readonly order: FieldRef<"ConstructionPhase", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ConstructionPhase findUnique
   */
  export type ConstructionPhaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConstructionPhase
     */
    select?: ConstructionPhaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConstructionPhase
     */
    omit?: ConstructionPhaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConstructionPhaseInclude<ExtArgs> | null
    /**
     * Filter, which ConstructionPhase to fetch.
     */
    where: ConstructionPhaseWhereUniqueInput
  }

  /**
   * ConstructionPhase findUniqueOrThrow
   */
  export type ConstructionPhaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConstructionPhase
     */
    select?: ConstructionPhaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConstructionPhase
     */
    omit?: ConstructionPhaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConstructionPhaseInclude<ExtArgs> | null
    /**
     * Filter, which ConstructionPhase to fetch.
     */
    where: ConstructionPhaseWhereUniqueInput
  }

  /**
   * ConstructionPhase findFirst
   */
  export type ConstructionPhaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConstructionPhase
     */
    select?: ConstructionPhaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConstructionPhase
     */
    omit?: ConstructionPhaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConstructionPhaseInclude<ExtArgs> | null
    /**
     * Filter, which ConstructionPhase to fetch.
     */
    where?: ConstructionPhaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConstructionPhases to fetch.
     */
    orderBy?: ConstructionPhaseOrderByWithRelationInput | ConstructionPhaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConstructionPhases.
     */
    cursor?: ConstructionPhaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConstructionPhases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConstructionPhases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConstructionPhases.
     */
    distinct?: ConstructionPhaseScalarFieldEnum | ConstructionPhaseScalarFieldEnum[]
  }

  /**
   * ConstructionPhase findFirstOrThrow
   */
  export type ConstructionPhaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConstructionPhase
     */
    select?: ConstructionPhaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConstructionPhase
     */
    omit?: ConstructionPhaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConstructionPhaseInclude<ExtArgs> | null
    /**
     * Filter, which ConstructionPhase to fetch.
     */
    where?: ConstructionPhaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConstructionPhases to fetch.
     */
    orderBy?: ConstructionPhaseOrderByWithRelationInput | ConstructionPhaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConstructionPhases.
     */
    cursor?: ConstructionPhaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConstructionPhases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConstructionPhases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConstructionPhases.
     */
    distinct?: ConstructionPhaseScalarFieldEnum | ConstructionPhaseScalarFieldEnum[]
  }

  /**
   * ConstructionPhase findMany
   */
  export type ConstructionPhaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConstructionPhase
     */
    select?: ConstructionPhaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConstructionPhase
     */
    omit?: ConstructionPhaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConstructionPhaseInclude<ExtArgs> | null
    /**
     * Filter, which ConstructionPhases to fetch.
     */
    where?: ConstructionPhaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConstructionPhases to fetch.
     */
    orderBy?: ConstructionPhaseOrderByWithRelationInput | ConstructionPhaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ConstructionPhases.
     */
    cursor?: ConstructionPhaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConstructionPhases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConstructionPhases.
     */
    skip?: number
    distinct?: ConstructionPhaseScalarFieldEnum | ConstructionPhaseScalarFieldEnum[]
  }

  /**
   * ConstructionPhase create
   */
  export type ConstructionPhaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConstructionPhase
     */
    select?: ConstructionPhaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConstructionPhase
     */
    omit?: ConstructionPhaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConstructionPhaseInclude<ExtArgs> | null
    /**
     * The data needed to create a ConstructionPhase.
     */
    data: XOR<ConstructionPhaseCreateInput, ConstructionPhaseUncheckedCreateInput>
  }

  /**
   * ConstructionPhase createMany
   */
  export type ConstructionPhaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ConstructionPhases.
     */
    data: ConstructionPhaseCreateManyInput | ConstructionPhaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ConstructionPhase createManyAndReturn
   */
  export type ConstructionPhaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConstructionPhase
     */
    select?: ConstructionPhaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConstructionPhase
     */
    omit?: ConstructionPhaseOmit<ExtArgs> | null
    /**
     * The data used to create many ConstructionPhases.
     */
    data: ConstructionPhaseCreateManyInput | ConstructionPhaseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConstructionPhaseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ConstructionPhase update
   */
  export type ConstructionPhaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConstructionPhase
     */
    select?: ConstructionPhaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConstructionPhase
     */
    omit?: ConstructionPhaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConstructionPhaseInclude<ExtArgs> | null
    /**
     * The data needed to update a ConstructionPhase.
     */
    data: XOR<ConstructionPhaseUpdateInput, ConstructionPhaseUncheckedUpdateInput>
    /**
     * Choose, which ConstructionPhase to update.
     */
    where: ConstructionPhaseWhereUniqueInput
  }

  /**
   * ConstructionPhase updateMany
   */
  export type ConstructionPhaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ConstructionPhases.
     */
    data: XOR<ConstructionPhaseUpdateManyMutationInput, ConstructionPhaseUncheckedUpdateManyInput>
    /**
     * Filter which ConstructionPhases to update
     */
    where?: ConstructionPhaseWhereInput
    /**
     * Limit how many ConstructionPhases to update.
     */
    limit?: number
  }

  /**
   * ConstructionPhase updateManyAndReturn
   */
  export type ConstructionPhaseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConstructionPhase
     */
    select?: ConstructionPhaseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConstructionPhase
     */
    omit?: ConstructionPhaseOmit<ExtArgs> | null
    /**
     * The data used to update ConstructionPhases.
     */
    data: XOR<ConstructionPhaseUpdateManyMutationInput, ConstructionPhaseUncheckedUpdateManyInput>
    /**
     * Filter which ConstructionPhases to update
     */
    where?: ConstructionPhaseWhereInput
    /**
     * Limit how many ConstructionPhases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConstructionPhaseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ConstructionPhase upsert
   */
  export type ConstructionPhaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConstructionPhase
     */
    select?: ConstructionPhaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConstructionPhase
     */
    omit?: ConstructionPhaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConstructionPhaseInclude<ExtArgs> | null
    /**
     * The filter to search for the ConstructionPhase to update in case it exists.
     */
    where: ConstructionPhaseWhereUniqueInput
    /**
     * In case the ConstructionPhase found by the `where` argument doesn't exist, create a new ConstructionPhase with this data.
     */
    create: XOR<ConstructionPhaseCreateInput, ConstructionPhaseUncheckedCreateInput>
    /**
     * In case the ConstructionPhase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConstructionPhaseUpdateInput, ConstructionPhaseUncheckedUpdateInput>
  }

  /**
   * ConstructionPhase delete
   */
  export type ConstructionPhaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConstructionPhase
     */
    select?: ConstructionPhaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConstructionPhase
     */
    omit?: ConstructionPhaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConstructionPhaseInclude<ExtArgs> | null
    /**
     * Filter which ConstructionPhase to delete.
     */
    where: ConstructionPhaseWhereUniqueInput
  }

  /**
   * ConstructionPhase deleteMany
   */
  export type ConstructionPhaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConstructionPhases to delete
     */
    where?: ConstructionPhaseWhereInput
    /**
     * Limit how many ConstructionPhases to delete.
     */
    limit?: number
  }

  /**
   * ConstructionPhase.tasks
   */
  export type ConstructionPhase$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConstructionTask
     */
    select?: ConstructionTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConstructionTask
     */
    omit?: ConstructionTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConstructionTaskInclude<ExtArgs> | null
    where?: ConstructionTaskWhereInput
    orderBy?: ConstructionTaskOrderByWithRelationInput | ConstructionTaskOrderByWithRelationInput[]
    cursor?: ConstructionTaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConstructionTaskScalarFieldEnum | ConstructionTaskScalarFieldEnum[]
  }

  /**
   * ConstructionPhase without action
   */
  export type ConstructionPhaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConstructionPhase
     */
    select?: ConstructionPhaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConstructionPhase
     */
    omit?: ConstructionPhaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConstructionPhaseInclude<ExtArgs> | null
  }


  /**
   * Model ConstructionTask
   */

  export type AggregateConstructionTask = {
    _count: ConstructionTaskCountAggregateOutputType | null
    _avg: ConstructionTaskAvgAggregateOutputType | null
    _sum: ConstructionTaskSumAggregateOutputType | null
    _min: ConstructionTaskMinAggregateOutputType | null
    _max: ConstructionTaskMaxAggregateOutputType | null
  }

  export type ConstructionTaskAvgAggregateOutputType = {
    budget: Decimal | null
    actualCost: Decimal | null
    priority: number | null
  }

  export type ConstructionTaskSumAggregateOutputType = {
    budget: Decimal | null
    actualCost: Decimal | null
    priority: number | null
  }

  export type ConstructionTaskMinAggregateOutputType = {
    id: string | null
    phaseId: string | null
    name: string | null
    status: string | null
    budget: Decimal | null
    actualCost: Decimal | null
    startDate: Date | null
    expectedEndDate: Date | null
    endDate: Date | null
    notes: string | null
    responsible: string | null
    priority: number | null
  }

  export type ConstructionTaskMaxAggregateOutputType = {
    id: string | null
    phaseId: string | null
    name: string | null
    status: string | null
    budget: Decimal | null
    actualCost: Decimal | null
    startDate: Date | null
    expectedEndDate: Date | null
    endDate: Date | null
    notes: string | null
    responsible: string | null
    priority: number | null
  }

  export type ConstructionTaskCountAggregateOutputType = {
    id: number
    phaseId: number
    name: number
    status: number
    budget: number
    actualCost: number
    startDate: number
    expectedEndDate: number
    endDate: number
    notes: number
    responsible: number
    priority: number
    _all: number
  }


  export type ConstructionTaskAvgAggregateInputType = {
    budget?: true
    actualCost?: true
    priority?: true
  }

  export type ConstructionTaskSumAggregateInputType = {
    budget?: true
    actualCost?: true
    priority?: true
  }

  export type ConstructionTaskMinAggregateInputType = {
    id?: true
    phaseId?: true
    name?: true
    status?: true
    budget?: true
    actualCost?: true
    startDate?: true
    expectedEndDate?: true
    endDate?: true
    notes?: true
    responsible?: true
    priority?: true
  }

  export type ConstructionTaskMaxAggregateInputType = {
    id?: true
    phaseId?: true
    name?: true
    status?: true
    budget?: true
    actualCost?: true
    startDate?: true
    expectedEndDate?: true
    endDate?: true
    notes?: true
    responsible?: true
    priority?: true
  }

  export type ConstructionTaskCountAggregateInputType = {
    id?: true
    phaseId?: true
    name?: true
    status?: true
    budget?: true
    actualCost?: true
    startDate?: true
    expectedEndDate?: true
    endDate?: true
    notes?: true
    responsible?: true
    priority?: true
    _all?: true
  }

  export type ConstructionTaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConstructionTask to aggregate.
     */
    where?: ConstructionTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConstructionTasks to fetch.
     */
    orderBy?: ConstructionTaskOrderByWithRelationInput | ConstructionTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConstructionTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConstructionTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConstructionTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ConstructionTasks
    **/
    _count?: true | ConstructionTaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConstructionTaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConstructionTaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConstructionTaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConstructionTaskMaxAggregateInputType
  }

  export type GetConstructionTaskAggregateType<T extends ConstructionTaskAggregateArgs> = {
        [P in keyof T & keyof AggregateConstructionTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConstructionTask[P]>
      : GetScalarType<T[P], AggregateConstructionTask[P]>
  }




  export type ConstructionTaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConstructionTaskWhereInput
    orderBy?: ConstructionTaskOrderByWithAggregationInput | ConstructionTaskOrderByWithAggregationInput[]
    by: ConstructionTaskScalarFieldEnum[] | ConstructionTaskScalarFieldEnum
    having?: ConstructionTaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConstructionTaskCountAggregateInputType | true
    _avg?: ConstructionTaskAvgAggregateInputType
    _sum?: ConstructionTaskSumAggregateInputType
    _min?: ConstructionTaskMinAggregateInputType
    _max?: ConstructionTaskMaxAggregateInputType
  }

  export type ConstructionTaskGroupByOutputType = {
    id: string
    phaseId: string
    name: string
    status: string
    budget: Decimal | null
    actualCost: Decimal | null
    startDate: Date | null
    expectedEndDate: Date | null
    endDate: Date | null
    notes: string | null
    responsible: string | null
    priority: number | null
    _count: ConstructionTaskCountAggregateOutputType | null
    _avg: ConstructionTaskAvgAggregateOutputType | null
    _sum: ConstructionTaskSumAggregateOutputType | null
    _min: ConstructionTaskMinAggregateOutputType | null
    _max: ConstructionTaskMaxAggregateOutputType | null
  }

  type GetConstructionTaskGroupByPayload<T extends ConstructionTaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConstructionTaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConstructionTaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConstructionTaskGroupByOutputType[P]>
            : GetScalarType<T[P], ConstructionTaskGroupByOutputType[P]>
        }
      >
    >


  export type ConstructionTaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phaseId?: boolean
    name?: boolean
    status?: boolean
    budget?: boolean
    actualCost?: boolean
    startDate?: boolean
    expectedEndDate?: boolean
    endDate?: boolean
    notes?: boolean
    responsible?: boolean
    priority?: boolean
    phase?: boolean | ConstructionPhaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["constructionTask"]>

  export type ConstructionTaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phaseId?: boolean
    name?: boolean
    status?: boolean
    budget?: boolean
    actualCost?: boolean
    startDate?: boolean
    expectedEndDate?: boolean
    endDate?: boolean
    notes?: boolean
    responsible?: boolean
    priority?: boolean
    phase?: boolean | ConstructionPhaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["constructionTask"]>

  export type ConstructionTaskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phaseId?: boolean
    name?: boolean
    status?: boolean
    budget?: boolean
    actualCost?: boolean
    startDate?: boolean
    expectedEndDate?: boolean
    endDate?: boolean
    notes?: boolean
    responsible?: boolean
    priority?: boolean
    phase?: boolean | ConstructionPhaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["constructionTask"]>

  export type ConstructionTaskSelectScalar = {
    id?: boolean
    phaseId?: boolean
    name?: boolean
    status?: boolean
    budget?: boolean
    actualCost?: boolean
    startDate?: boolean
    expectedEndDate?: boolean
    endDate?: boolean
    notes?: boolean
    responsible?: boolean
    priority?: boolean
  }

  export type ConstructionTaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "phaseId" | "name" | "status" | "budget" | "actualCost" | "startDate" | "expectedEndDate" | "endDate" | "notes" | "responsible" | "priority", ExtArgs["result"]["constructionTask"]>
  export type ConstructionTaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    phase?: boolean | ConstructionPhaseDefaultArgs<ExtArgs>
  }
  export type ConstructionTaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    phase?: boolean | ConstructionPhaseDefaultArgs<ExtArgs>
  }
  export type ConstructionTaskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    phase?: boolean | ConstructionPhaseDefaultArgs<ExtArgs>
  }

  export type $ConstructionTaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ConstructionTask"
    objects: {
      phase: Prisma.$ConstructionPhasePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      phaseId: string
      name: string
      status: string
      budget: Prisma.Decimal | null
      actualCost: Prisma.Decimal | null
      startDate: Date | null
      expectedEndDate: Date | null
      endDate: Date | null
      notes: string | null
      responsible: string | null
      priority: number | null
    }, ExtArgs["result"]["constructionTask"]>
    composites: {}
  }

  type ConstructionTaskGetPayload<S extends boolean | null | undefined | ConstructionTaskDefaultArgs> = $Result.GetResult<Prisma.$ConstructionTaskPayload, S>

  type ConstructionTaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConstructionTaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConstructionTaskCountAggregateInputType | true
    }

  export interface ConstructionTaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ConstructionTask'], meta: { name: 'ConstructionTask' } }
    /**
     * Find zero or one ConstructionTask that matches the filter.
     * @param {ConstructionTaskFindUniqueArgs} args - Arguments to find a ConstructionTask
     * @example
     * // Get one ConstructionTask
     * const constructionTask = await prisma.constructionTask.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConstructionTaskFindUniqueArgs>(args: SelectSubset<T, ConstructionTaskFindUniqueArgs<ExtArgs>>): Prisma__ConstructionTaskClient<$Result.GetResult<Prisma.$ConstructionTaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ConstructionTask that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConstructionTaskFindUniqueOrThrowArgs} args - Arguments to find a ConstructionTask
     * @example
     * // Get one ConstructionTask
     * const constructionTask = await prisma.constructionTask.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConstructionTaskFindUniqueOrThrowArgs>(args: SelectSubset<T, ConstructionTaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConstructionTaskClient<$Result.GetResult<Prisma.$ConstructionTaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConstructionTask that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConstructionTaskFindFirstArgs} args - Arguments to find a ConstructionTask
     * @example
     * // Get one ConstructionTask
     * const constructionTask = await prisma.constructionTask.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConstructionTaskFindFirstArgs>(args?: SelectSubset<T, ConstructionTaskFindFirstArgs<ExtArgs>>): Prisma__ConstructionTaskClient<$Result.GetResult<Prisma.$ConstructionTaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConstructionTask that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConstructionTaskFindFirstOrThrowArgs} args - Arguments to find a ConstructionTask
     * @example
     * // Get one ConstructionTask
     * const constructionTask = await prisma.constructionTask.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConstructionTaskFindFirstOrThrowArgs>(args?: SelectSubset<T, ConstructionTaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConstructionTaskClient<$Result.GetResult<Prisma.$ConstructionTaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ConstructionTasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConstructionTaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ConstructionTasks
     * const constructionTasks = await prisma.constructionTask.findMany()
     * 
     * // Get first 10 ConstructionTasks
     * const constructionTasks = await prisma.constructionTask.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const constructionTaskWithIdOnly = await prisma.constructionTask.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConstructionTaskFindManyArgs>(args?: SelectSubset<T, ConstructionTaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConstructionTaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ConstructionTask.
     * @param {ConstructionTaskCreateArgs} args - Arguments to create a ConstructionTask.
     * @example
     * // Create one ConstructionTask
     * const ConstructionTask = await prisma.constructionTask.create({
     *   data: {
     *     // ... data to create a ConstructionTask
     *   }
     * })
     * 
     */
    create<T extends ConstructionTaskCreateArgs>(args: SelectSubset<T, ConstructionTaskCreateArgs<ExtArgs>>): Prisma__ConstructionTaskClient<$Result.GetResult<Prisma.$ConstructionTaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ConstructionTasks.
     * @param {ConstructionTaskCreateManyArgs} args - Arguments to create many ConstructionTasks.
     * @example
     * // Create many ConstructionTasks
     * const constructionTask = await prisma.constructionTask.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConstructionTaskCreateManyArgs>(args?: SelectSubset<T, ConstructionTaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ConstructionTasks and returns the data saved in the database.
     * @param {ConstructionTaskCreateManyAndReturnArgs} args - Arguments to create many ConstructionTasks.
     * @example
     * // Create many ConstructionTasks
     * const constructionTask = await prisma.constructionTask.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ConstructionTasks and only return the `id`
     * const constructionTaskWithIdOnly = await prisma.constructionTask.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConstructionTaskCreateManyAndReturnArgs>(args?: SelectSubset<T, ConstructionTaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConstructionTaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ConstructionTask.
     * @param {ConstructionTaskDeleteArgs} args - Arguments to delete one ConstructionTask.
     * @example
     * // Delete one ConstructionTask
     * const ConstructionTask = await prisma.constructionTask.delete({
     *   where: {
     *     // ... filter to delete one ConstructionTask
     *   }
     * })
     * 
     */
    delete<T extends ConstructionTaskDeleteArgs>(args: SelectSubset<T, ConstructionTaskDeleteArgs<ExtArgs>>): Prisma__ConstructionTaskClient<$Result.GetResult<Prisma.$ConstructionTaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ConstructionTask.
     * @param {ConstructionTaskUpdateArgs} args - Arguments to update one ConstructionTask.
     * @example
     * // Update one ConstructionTask
     * const constructionTask = await prisma.constructionTask.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConstructionTaskUpdateArgs>(args: SelectSubset<T, ConstructionTaskUpdateArgs<ExtArgs>>): Prisma__ConstructionTaskClient<$Result.GetResult<Prisma.$ConstructionTaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ConstructionTasks.
     * @param {ConstructionTaskDeleteManyArgs} args - Arguments to filter ConstructionTasks to delete.
     * @example
     * // Delete a few ConstructionTasks
     * const { count } = await prisma.constructionTask.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConstructionTaskDeleteManyArgs>(args?: SelectSubset<T, ConstructionTaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConstructionTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConstructionTaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ConstructionTasks
     * const constructionTask = await prisma.constructionTask.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConstructionTaskUpdateManyArgs>(args: SelectSubset<T, ConstructionTaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConstructionTasks and returns the data updated in the database.
     * @param {ConstructionTaskUpdateManyAndReturnArgs} args - Arguments to update many ConstructionTasks.
     * @example
     * // Update many ConstructionTasks
     * const constructionTask = await prisma.constructionTask.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ConstructionTasks and only return the `id`
     * const constructionTaskWithIdOnly = await prisma.constructionTask.updateManyAndReturn({
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
    updateManyAndReturn<T extends ConstructionTaskUpdateManyAndReturnArgs>(args: SelectSubset<T, ConstructionTaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConstructionTaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ConstructionTask.
     * @param {ConstructionTaskUpsertArgs} args - Arguments to update or create a ConstructionTask.
     * @example
     * // Update or create a ConstructionTask
     * const constructionTask = await prisma.constructionTask.upsert({
     *   create: {
     *     // ... data to create a ConstructionTask
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ConstructionTask we want to update
     *   }
     * })
     */
    upsert<T extends ConstructionTaskUpsertArgs>(args: SelectSubset<T, ConstructionTaskUpsertArgs<ExtArgs>>): Prisma__ConstructionTaskClient<$Result.GetResult<Prisma.$ConstructionTaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ConstructionTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConstructionTaskCountArgs} args - Arguments to filter ConstructionTasks to count.
     * @example
     * // Count the number of ConstructionTasks
     * const count = await prisma.constructionTask.count({
     *   where: {
     *     // ... the filter for the ConstructionTasks we want to count
     *   }
     * })
    **/
    count<T extends ConstructionTaskCountArgs>(
      args?: Subset<T, ConstructionTaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConstructionTaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ConstructionTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConstructionTaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConstructionTaskAggregateArgs>(args: Subset<T, ConstructionTaskAggregateArgs>): Prisma.PrismaPromise<GetConstructionTaskAggregateType<T>>

    /**
     * Group by ConstructionTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConstructionTaskGroupByArgs} args - Group by arguments.
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
      T extends ConstructionTaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConstructionTaskGroupByArgs['orderBy'] }
        : { orderBy?: ConstructionTaskGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConstructionTaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConstructionTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ConstructionTask model
   */
  readonly fields: ConstructionTaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ConstructionTask.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConstructionTaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    phase<T extends ConstructionPhaseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConstructionPhaseDefaultArgs<ExtArgs>>): Prisma__ConstructionPhaseClient<$Result.GetResult<Prisma.$ConstructionPhasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ConstructionTask model
   */
  interface ConstructionTaskFieldRefs {
    readonly id: FieldRef<"ConstructionTask", 'String'>
    readonly phaseId: FieldRef<"ConstructionTask", 'String'>
    readonly name: FieldRef<"ConstructionTask", 'String'>
    readonly status: FieldRef<"ConstructionTask", 'String'>
    readonly budget: FieldRef<"ConstructionTask", 'Decimal'>
    readonly actualCost: FieldRef<"ConstructionTask", 'Decimal'>
    readonly startDate: FieldRef<"ConstructionTask", 'DateTime'>
    readonly expectedEndDate: FieldRef<"ConstructionTask", 'DateTime'>
    readonly endDate: FieldRef<"ConstructionTask", 'DateTime'>
    readonly notes: FieldRef<"ConstructionTask", 'String'>
    readonly responsible: FieldRef<"ConstructionTask", 'String'>
    readonly priority: FieldRef<"ConstructionTask", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ConstructionTask findUnique
   */
  export type ConstructionTaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConstructionTask
     */
    select?: ConstructionTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConstructionTask
     */
    omit?: ConstructionTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConstructionTaskInclude<ExtArgs> | null
    /**
     * Filter, which ConstructionTask to fetch.
     */
    where: ConstructionTaskWhereUniqueInput
  }

  /**
   * ConstructionTask findUniqueOrThrow
   */
  export type ConstructionTaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConstructionTask
     */
    select?: ConstructionTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConstructionTask
     */
    omit?: ConstructionTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConstructionTaskInclude<ExtArgs> | null
    /**
     * Filter, which ConstructionTask to fetch.
     */
    where: ConstructionTaskWhereUniqueInput
  }

  /**
   * ConstructionTask findFirst
   */
  export type ConstructionTaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConstructionTask
     */
    select?: ConstructionTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConstructionTask
     */
    omit?: ConstructionTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConstructionTaskInclude<ExtArgs> | null
    /**
     * Filter, which ConstructionTask to fetch.
     */
    where?: ConstructionTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConstructionTasks to fetch.
     */
    orderBy?: ConstructionTaskOrderByWithRelationInput | ConstructionTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConstructionTasks.
     */
    cursor?: ConstructionTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConstructionTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConstructionTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConstructionTasks.
     */
    distinct?: ConstructionTaskScalarFieldEnum | ConstructionTaskScalarFieldEnum[]
  }

  /**
   * ConstructionTask findFirstOrThrow
   */
  export type ConstructionTaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConstructionTask
     */
    select?: ConstructionTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConstructionTask
     */
    omit?: ConstructionTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConstructionTaskInclude<ExtArgs> | null
    /**
     * Filter, which ConstructionTask to fetch.
     */
    where?: ConstructionTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConstructionTasks to fetch.
     */
    orderBy?: ConstructionTaskOrderByWithRelationInput | ConstructionTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConstructionTasks.
     */
    cursor?: ConstructionTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConstructionTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConstructionTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConstructionTasks.
     */
    distinct?: ConstructionTaskScalarFieldEnum | ConstructionTaskScalarFieldEnum[]
  }

  /**
   * ConstructionTask findMany
   */
  export type ConstructionTaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConstructionTask
     */
    select?: ConstructionTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConstructionTask
     */
    omit?: ConstructionTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConstructionTaskInclude<ExtArgs> | null
    /**
     * Filter, which ConstructionTasks to fetch.
     */
    where?: ConstructionTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConstructionTasks to fetch.
     */
    orderBy?: ConstructionTaskOrderByWithRelationInput | ConstructionTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ConstructionTasks.
     */
    cursor?: ConstructionTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConstructionTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConstructionTasks.
     */
    skip?: number
    distinct?: ConstructionTaskScalarFieldEnum | ConstructionTaskScalarFieldEnum[]
  }

  /**
   * ConstructionTask create
   */
  export type ConstructionTaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConstructionTask
     */
    select?: ConstructionTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConstructionTask
     */
    omit?: ConstructionTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConstructionTaskInclude<ExtArgs> | null
    /**
     * The data needed to create a ConstructionTask.
     */
    data: XOR<ConstructionTaskCreateInput, ConstructionTaskUncheckedCreateInput>
  }

  /**
   * ConstructionTask createMany
   */
  export type ConstructionTaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ConstructionTasks.
     */
    data: ConstructionTaskCreateManyInput | ConstructionTaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ConstructionTask createManyAndReturn
   */
  export type ConstructionTaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConstructionTask
     */
    select?: ConstructionTaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConstructionTask
     */
    omit?: ConstructionTaskOmit<ExtArgs> | null
    /**
     * The data used to create many ConstructionTasks.
     */
    data: ConstructionTaskCreateManyInput | ConstructionTaskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConstructionTaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ConstructionTask update
   */
  export type ConstructionTaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConstructionTask
     */
    select?: ConstructionTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConstructionTask
     */
    omit?: ConstructionTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConstructionTaskInclude<ExtArgs> | null
    /**
     * The data needed to update a ConstructionTask.
     */
    data: XOR<ConstructionTaskUpdateInput, ConstructionTaskUncheckedUpdateInput>
    /**
     * Choose, which ConstructionTask to update.
     */
    where: ConstructionTaskWhereUniqueInput
  }

  /**
   * ConstructionTask updateMany
   */
  export type ConstructionTaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ConstructionTasks.
     */
    data: XOR<ConstructionTaskUpdateManyMutationInput, ConstructionTaskUncheckedUpdateManyInput>
    /**
     * Filter which ConstructionTasks to update
     */
    where?: ConstructionTaskWhereInput
    /**
     * Limit how many ConstructionTasks to update.
     */
    limit?: number
  }

  /**
   * ConstructionTask updateManyAndReturn
   */
  export type ConstructionTaskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConstructionTask
     */
    select?: ConstructionTaskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConstructionTask
     */
    omit?: ConstructionTaskOmit<ExtArgs> | null
    /**
     * The data used to update ConstructionTasks.
     */
    data: XOR<ConstructionTaskUpdateManyMutationInput, ConstructionTaskUncheckedUpdateManyInput>
    /**
     * Filter which ConstructionTasks to update
     */
    where?: ConstructionTaskWhereInput
    /**
     * Limit how many ConstructionTasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConstructionTaskIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ConstructionTask upsert
   */
  export type ConstructionTaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConstructionTask
     */
    select?: ConstructionTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConstructionTask
     */
    omit?: ConstructionTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConstructionTaskInclude<ExtArgs> | null
    /**
     * The filter to search for the ConstructionTask to update in case it exists.
     */
    where: ConstructionTaskWhereUniqueInput
    /**
     * In case the ConstructionTask found by the `where` argument doesn't exist, create a new ConstructionTask with this data.
     */
    create: XOR<ConstructionTaskCreateInput, ConstructionTaskUncheckedCreateInput>
    /**
     * In case the ConstructionTask was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConstructionTaskUpdateInput, ConstructionTaskUncheckedUpdateInput>
  }

  /**
   * ConstructionTask delete
   */
  export type ConstructionTaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConstructionTask
     */
    select?: ConstructionTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConstructionTask
     */
    omit?: ConstructionTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConstructionTaskInclude<ExtArgs> | null
    /**
     * Filter which ConstructionTask to delete.
     */
    where: ConstructionTaskWhereUniqueInput
  }

  /**
   * ConstructionTask deleteMany
   */
  export type ConstructionTaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConstructionTasks to delete
     */
    where?: ConstructionTaskWhereInput
    /**
     * Limit how many ConstructionTasks to delete.
     */
    limit?: number
  }

  /**
   * ConstructionTask without action
   */
  export type ConstructionTaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConstructionTask
     */
    select?: ConstructionTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConstructionTask
     */
    omit?: ConstructionTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConstructionTaskInclude<ExtArgs> | null
  }


  /**
   * Model ProjectDocument
   */

  export type AggregateProjectDocument = {
    _count: ProjectDocumentCountAggregateOutputType | null
    _min: ProjectDocumentMinAggregateOutputType | null
    _max: ProjectDocumentMaxAggregateOutputType | null
  }

  export type ProjectDocumentMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    name: string | null
    type: string | null
    link: string | null
    notes: string | null
    uploadedAt: Date | null
    uploadedById: string | null
    visibleToClient: boolean | null
    description: string | null
  }

  export type ProjectDocumentMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    name: string | null
    type: string | null
    link: string | null
    notes: string | null
    uploadedAt: Date | null
    uploadedById: string | null
    visibleToClient: boolean | null
    description: string | null
  }

  export type ProjectDocumentCountAggregateOutputType = {
    id: number
    projectId: number
    name: number
    type: number
    link: number
    notes: number
    uploadedAt: number
    uploadedById: number
    visibleToClient: number
    description: number
    _all: number
  }


  export type ProjectDocumentMinAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    type?: true
    link?: true
    notes?: true
    uploadedAt?: true
    uploadedById?: true
    visibleToClient?: true
    description?: true
  }

  export type ProjectDocumentMaxAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    type?: true
    link?: true
    notes?: true
    uploadedAt?: true
    uploadedById?: true
    visibleToClient?: true
    description?: true
  }

  export type ProjectDocumentCountAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    type?: true
    link?: true
    notes?: true
    uploadedAt?: true
    uploadedById?: true
    visibleToClient?: true
    description?: true
    _all?: true
  }

  export type ProjectDocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectDocument to aggregate.
     */
    where?: ProjectDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectDocuments to fetch.
     */
    orderBy?: ProjectDocumentOrderByWithRelationInput | ProjectDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectDocuments
    **/
    _count?: true | ProjectDocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectDocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectDocumentMaxAggregateInputType
  }

  export type GetProjectDocumentAggregateType<T extends ProjectDocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectDocument[P]>
      : GetScalarType<T[P], AggregateProjectDocument[P]>
  }




  export type ProjectDocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectDocumentWhereInput
    orderBy?: ProjectDocumentOrderByWithAggregationInput | ProjectDocumentOrderByWithAggregationInput[]
    by: ProjectDocumentScalarFieldEnum[] | ProjectDocumentScalarFieldEnum
    having?: ProjectDocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectDocumentCountAggregateInputType | true
    _min?: ProjectDocumentMinAggregateInputType
    _max?: ProjectDocumentMaxAggregateInputType
  }

  export type ProjectDocumentGroupByOutputType = {
    id: string
    projectId: string
    name: string
    type: string
    link: string
    notes: string | null
    uploadedAt: Date | null
    uploadedById: string | null
    visibleToClient: boolean | null
    description: string | null
    _count: ProjectDocumentCountAggregateOutputType | null
    _min: ProjectDocumentMinAggregateOutputType | null
    _max: ProjectDocumentMaxAggregateOutputType | null
  }

  type GetProjectDocumentGroupByPayload<T extends ProjectDocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectDocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectDocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectDocumentGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectDocumentGroupByOutputType[P]>
        }
      >
    >


  export type ProjectDocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    name?: boolean
    type?: boolean
    link?: boolean
    notes?: boolean
    uploadedAt?: boolean
    uploadedById?: boolean
    visibleToClient?: boolean
    description?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    uploadedBy?: boolean | ProjectDocument$uploadedByArgs<ExtArgs>
  }, ExtArgs["result"]["projectDocument"]>

  export type ProjectDocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    name?: boolean
    type?: boolean
    link?: boolean
    notes?: boolean
    uploadedAt?: boolean
    uploadedById?: boolean
    visibleToClient?: boolean
    description?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    uploadedBy?: boolean | ProjectDocument$uploadedByArgs<ExtArgs>
  }, ExtArgs["result"]["projectDocument"]>

  export type ProjectDocumentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    name?: boolean
    type?: boolean
    link?: boolean
    notes?: boolean
    uploadedAt?: boolean
    uploadedById?: boolean
    visibleToClient?: boolean
    description?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    uploadedBy?: boolean | ProjectDocument$uploadedByArgs<ExtArgs>
  }, ExtArgs["result"]["projectDocument"]>

  export type ProjectDocumentSelectScalar = {
    id?: boolean
    projectId?: boolean
    name?: boolean
    type?: boolean
    link?: boolean
    notes?: boolean
    uploadedAt?: boolean
    uploadedById?: boolean
    visibleToClient?: boolean
    description?: boolean
  }

  export type ProjectDocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "name" | "type" | "link" | "notes" | "uploadedAt" | "uploadedById" | "visibleToClient" | "description", ExtArgs["result"]["projectDocument"]>
  export type ProjectDocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    uploadedBy?: boolean | ProjectDocument$uploadedByArgs<ExtArgs>
  }
  export type ProjectDocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    uploadedBy?: boolean | ProjectDocument$uploadedByArgs<ExtArgs>
  }
  export type ProjectDocumentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    uploadedBy?: boolean | ProjectDocument$uploadedByArgs<ExtArgs>
  }

  export type $ProjectDocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectDocument"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      uploadedBy: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      name: string
      type: string
      link: string
      notes: string | null
      uploadedAt: Date | null
      uploadedById: string | null
      visibleToClient: boolean | null
      description: string | null
    }, ExtArgs["result"]["projectDocument"]>
    composites: {}
  }

  type ProjectDocumentGetPayload<S extends boolean | null | undefined | ProjectDocumentDefaultArgs> = $Result.GetResult<Prisma.$ProjectDocumentPayload, S>

  type ProjectDocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectDocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectDocumentCountAggregateInputType | true
    }

  export interface ProjectDocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectDocument'], meta: { name: 'ProjectDocument' } }
    /**
     * Find zero or one ProjectDocument that matches the filter.
     * @param {ProjectDocumentFindUniqueArgs} args - Arguments to find a ProjectDocument
     * @example
     * // Get one ProjectDocument
     * const projectDocument = await prisma.projectDocument.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectDocumentFindUniqueArgs>(args: SelectSubset<T, ProjectDocumentFindUniqueArgs<ExtArgs>>): Prisma__ProjectDocumentClient<$Result.GetResult<Prisma.$ProjectDocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectDocument that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectDocumentFindUniqueOrThrowArgs} args - Arguments to find a ProjectDocument
     * @example
     * // Get one ProjectDocument
     * const projectDocument = await prisma.projectDocument.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectDocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectDocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectDocumentClient<$Result.GetResult<Prisma.$ProjectDocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectDocument that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectDocumentFindFirstArgs} args - Arguments to find a ProjectDocument
     * @example
     * // Get one ProjectDocument
     * const projectDocument = await prisma.projectDocument.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectDocumentFindFirstArgs>(args?: SelectSubset<T, ProjectDocumentFindFirstArgs<ExtArgs>>): Prisma__ProjectDocumentClient<$Result.GetResult<Prisma.$ProjectDocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectDocument that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectDocumentFindFirstOrThrowArgs} args - Arguments to find a ProjectDocument
     * @example
     * // Get one ProjectDocument
     * const projectDocument = await prisma.projectDocument.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectDocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectDocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectDocumentClient<$Result.GetResult<Prisma.$ProjectDocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectDocuments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectDocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectDocuments
     * const projectDocuments = await prisma.projectDocument.findMany()
     * 
     * // Get first 10 ProjectDocuments
     * const projectDocuments = await prisma.projectDocument.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectDocumentWithIdOnly = await prisma.projectDocument.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectDocumentFindManyArgs>(args?: SelectSubset<T, ProjectDocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectDocument.
     * @param {ProjectDocumentCreateArgs} args - Arguments to create a ProjectDocument.
     * @example
     * // Create one ProjectDocument
     * const ProjectDocument = await prisma.projectDocument.create({
     *   data: {
     *     // ... data to create a ProjectDocument
     *   }
     * })
     * 
     */
    create<T extends ProjectDocumentCreateArgs>(args: SelectSubset<T, ProjectDocumentCreateArgs<ExtArgs>>): Prisma__ProjectDocumentClient<$Result.GetResult<Prisma.$ProjectDocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectDocuments.
     * @param {ProjectDocumentCreateManyArgs} args - Arguments to create many ProjectDocuments.
     * @example
     * // Create many ProjectDocuments
     * const projectDocument = await prisma.projectDocument.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectDocumentCreateManyArgs>(args?: SelectSubset<T, ProjectDocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectDocuments and returns the data saved in the database.
     * @param {ProjectDocumentCreateManyAndReturnArgs} args - Arguments to create many ProjectDocuments.
     * @example
     * // Create many ProjectDocuments
     * const projectDocument = await prisma.projectDocument.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectDocuments and only return the `id`
     * const projectDocumentWithIdOnly = await prisma.projectDocument.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectDocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectDocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectDocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProjectDocument.
     * @param {ProjectDocumentDeleteArgs} args - Arguments to delete one ProjectDocument.
     * @example
     * // Delete one ProjectDocument
     * const ProjectDocument = await prisma.projectDocument.delete({
     *   where: {
     *     // ... filter to delete one ProjectDocument
     *   }
     * })
     * 
     */
    delete<T extends ProjectDocumentDeleteArgs>(args: SelectSubset<T, ProjectDocumentDeleteArgs<ExtArgs>>): Prisma__ProjectDocumentClient<$Result.GetResult<Prisma.$ProjectDocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectDocument.
     * @param {ProjectDocumentUpdateArgs} args - Arguments to update one ProjectDocument.
     * @example
     * // Update one ProjectDocument
     * const projectDocument = await prisma.projectDocument.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectDocumentUpdateArgs>(args: SelectSubset<T, ProjectDocumentUpdateArgs<ExtArgs>>): Prisma__ProjectDocumentClient<$Result.GetResult<Prisma.$ProjectDocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectDocuments.
     * @param {ProjectDocumentDeleteManyArgs} args - Arguments to filter ProjectDocuments to delete.
     * @example
     * // Delete a few ProjectDocuments
     * const { count } = await prisma.projectDocument.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDocumentDeleteManyArgs>(args?: SelectSubset<T, ProjectDocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectDocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectDocuments
     * const projectDocument = await prisma.projectDocument.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectDocumentUpdateManyArgs>(args: SelectSubset<T, ProjectDocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectDocuments and returns the data updated in the database.
     * @param {ProjectDocumentUpdateManyAndReturnArgs} args - Arguments to update many ProjectDocuments.
     * @example
     * // Update many ProjectDocuments
     * const projectDocument = await prisma.projectDocument.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProjectDocuments and only return the `id`
     * const projectDocumentWithIdOnly = await prisma.projectDocument.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProjectDocumentUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectDocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectDocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProjectDocument.
     * @param {ProjectDocumentUpsertArgs} args - Arguments to update or create a ProjectDocument.
     * @example
     * // Update or create a ProjectDocument
     * const projectDocument = await prisma.projectDocument.upsert({
     *   create: {
     *     // ... data to create a ProjectDocument
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectDocument we want to update
     *   }
     * })
     */
    upsert<T extends ProjectDocumentUpsertArgs>(args: SelectSubset<T, ProjectDocumentUpsertArgs<ExtArgs>>): Prisma__ProjectDocumentClient<$Result.GetResult<Prisma.$ProjectDocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectDocumentCountArgs} args - Arguments to filter ProjectDocuments to count.
     * @example
     * // Count the number of ProjectDocuments
     * const count = await prisma.projectDocument.count({
     *   where: {
     *     // ... the filter for the ProjectDocuments we want to count
     *   }
     * })
    **/
    count<T extends ProjectDocumentCountArgs>(
      args?: Subset<T, ProjectDocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectDocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectDocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectDocumentAggregateArgs>(args: Subset<T, ProjectDocumentAggregateArgs>): Prisma.PrismaPromise<GetProjectDocumentAggregateType<T>>

    /**
     * Group by ProjectDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectDocumentGroupByArgs} args - Group by arguments.
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
      T extends ProjectDocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectDocumentGroupByArgs['orderBy'] }
        : { orderBy?: ProjectDocumentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectDocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectDocument model
   */
  readonly fields: ProjectDocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectDocument.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectDocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    uploadedBy<T extends ProjectDocument$uploadedByArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDocument$uploadedByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProjectDocument model
   */
  interface ProjectDocumentFieldRefs {
    readonly id: FieldRef<"ProjectDocument", 'String'>
    readonly projectId: FieldRef<"ProjectDocument", 'String'>
    readonly name: FieldRef<"ProjectDocument", 'String'>
    readonly type: FieldRef<"ProjectDocument", 'String'>
    readonly link: FieldRef<"ProjectDocument", 'String'>
    readonly notes: FieldRef<"ProjectDocument", 'String'>
    readonly uploadedAt: FieldRef<"ProjectDocument", 'DateTime'>
    readonly uploadedById: FieldRef<"ProjectDocument", 'String'>
    readonly visibleToClient: FieldRef<"ProjectDocument", 'Boolean'>
    readonly description: FieldRef<"ProjectDocument", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProjectDocument findUnique
   */
  export type ProjectDocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDocument
     */
    select?: ProjectDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDocument
     */
    omit?: ProjectDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDocumentInclude<ExtArgs> | null
    /**
     * Filter, which ProjectDocument to fetch.
     */
    where: ProjectDocumentWhereUniqueInput
  }

  /**
   * ProjectDocument findUniqueOrThrow
   */
  export type ProjectDocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDocument
     */
    select?: ProjectDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDocument
     */
    omit?: ProjectDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDocumentInclude<ExtArgs> | null
    /**
     * Filter, which ProjectDocument to fetch.
     */
    where: ProjectDocumentWhereUniqueInput
  }

  /**
   * ProjectDocument findFirst
   */
  export type ProjectDocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDocument
     */
    select?: ProjectDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDocument
     */
    omit?: ProjectDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDocumentInclude<ExtArgs> | null
    /**
     * Filter, which ProjectDocument to fetch.
     */
    where?: ProjectDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectDocuments to fetch.
     */
    orderBy?: ProjectDocumentOrderByWithRelationInput | ProjectDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectDocuments.
     */
    cursor?: ProjectDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectDocuments.
     */
    distinct?: ProjectDocumentScalarFieldEnum | ProjectDocumentScalarFieldEnum[]
  }

  /**
   * ProjectDocument findFirstOrThrow
   */
  export type ProjectDocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDocument
     */
    select?: ProjectDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDocument
     */
    omit?: ProjectDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDocumentInclude<ExtArgs> | null
    /**
     * Filter, which ProjectDocument to fetch.
     */
    where?: ProjectDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectDocuments to fetch.
     */
    orderBy?: ProjectDocumentOrderByWithRelationInput | ProjectDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectDocuments.
     */
    cursor?: ProjectDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectDocuments.
     */
    distinct?: ProjectDocumentScalarFieldEnum | ProjectDocumentScalarFieldEnum[]
  }

  /**
   * ProjectDocument findMany
   */
  export type ProjectDocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDocument
     */
    select?: ProjectDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDocument
     */
    omit?: ProjectDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDocumentInclude<ExtArgs> | null
    /**
     * Filter, which ProjectDocuments to fetch.
     */
    where?: ProjectDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectDocuments to fetch.
     */
    orderBy?: ProjectDocumentOrderByWithRelationInput | ProjectDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectDocuments.
     */
    cursor?: ProjectDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectDocuments.
     */
    skip?: number
    distinct?: ProjectDocumentScalarFieldEnum | ProjectDocumentScalarFieldEnum[]
  }

  /**
   * ProjectDocument create
   */
  export type ProjectDocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDocument
     */
    select?: ProjectDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDocument
     */
    omit?: ProjectDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectDocument.
     */
    data: XOR<ProjectDocumentCreateInput, ProjectDocumentUncheckedCreateInput>
  }

  /**
   * ProjectDocument createMany
   */
  export type ProjectDocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectDocuments.
     */
    data: ProjectDocumentCreateManyInput | ProjectDocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectDocument createManyAndReturn
   */
  export type ProjectDocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDocument
     */
    select?: ProjectDocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDocument
     */
    omit?: ProjectDocumentOmit<ExtArgs> | null
    /**
     * The data used to create many ProjectDocuments.
     */
    data: ProjectDocumentCreateManyInput | ProjectDocumentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDocumentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectDocument update
   */
  export type ProjectDocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDocument
     */
    select?: ProjectDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDocument
     */
    omit?: ProjectDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectDocument.
     */
    data: XOR<ProjectDocumentUpdateInput, ProjectDocumentUncheckedUpdateInput>
    /**
     * Choose, which ProjectDocument to update.
     */
    where: ProjectDocumentWhereUniqueInput
  }

  /**
   * ProjectDocument updateMany
   */
  export type ProjectDocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectDocuments.
     */
    data: XOR<ProjectDocumentUpdateManyMutationInput, ProjectDocumentUncheckedUpdateManyInput>
    /**
     * Filter which ProjectDocuments to update
     */
    where?: ProjectDocumentWhereInput
    /**
     * Limit how many ProjectDocuments to update.
     */
    limit?: number
  }

  /**
   * ProjectDocument updateManyAndReturn
   */
  export type ProjectDocumentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDocument
     */
    select?: ProjectDocumentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDocument
     */
    omit?: ProjectDocumentOmit<ExtArgs> | null
    /**
     * The data used to update ProjectDocuments.
     */
    data: XOR<ProjectDocumentUpdateManyMutationInput, ProjectDocumentUncheckedUpdateManyInput>
    /**
     * Filter which ProjectDocuments to update
     */
    where?: ProjectDocumentWhereInput
    /**
     * Limit how many ProjectDocuments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDocumentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectDocument upsert
   */
  export type ProjectDocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDocument
     */
    select?: ProjectDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDocument
     */
    omit?: ProjectDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectDocument to update in case it exists.
     */
    where: ProjectDocumentWhereUniqueInput
    /**
     * In case the ProjectDocument found by the `where` argument doesn't exist, create a new ProjectDocument with this data.
     */
    create: XOR<ProjectDocumentCreateInput, ProjectDocumentUncheckedCreateInput>
    /**
     * In case the ProjectDocument was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectDocumentUpdateInput, ProjectDocumentUncheckedUpdateInput>
  }

  /**
   * ProjectDocument delete
   */
  export type ProjectDocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDocument
     */
    select?: ProjectDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDocument
     */
    omit?: ProjectDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDocumentInclude<ExtArgs> | null
    /**
     * Filter which ProjectDocument to delete.
     */
    where: ProjectDocumentWhereUniqueInput
  }

  /**
   * ProjectDocument deleteMany
   */
  export type ProjectDocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectDocuments to delete
     */
    where?: ProjectDocumentWhereInput
    /**
     * Limit how many ProjectDocuments to delete.
     */
    limit?: number
  }

  /**
   * ProjectDocument.uploadedBy
   */
  export type ProjectDocument$uploadedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * ProjectDocument without action
   */
  export type ProjectDocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDocument
     */
    select?: ProjectDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDocument
     */
    omit?: ProjectDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDocumentInclude<ExtArgs> | null
  }


  /**
   * Model Budget
   */

  export type AggregateBudget = {
    _count: BudgetCountAggregateOutputType | null
    _avg: BudgetAvgAggregateOutputType | null
    _sum: BudgetSumAggregateOutputType | null
    _min: BudgetMinAggregateOutputType | null
    _max: BudgetMaxAggregateOutputType | null
  }

  export type BudgetAvgAggregateOutputType = {
    totalValue: Decimal | null
    version: number | null
  }

  export type BudgetSumAggregateOutputType = {
    totalValue: Decimal | null
    version: number | null
  }

  export type BudgetMinAggregateOutputType = {
    id: string | null
    clientId: string | null
    totalValue: Decimal | null
    status: string | null
    version: number | null
    sentAt: Date | null
    acceptedAt: Date | null
    paymentTerms: string | null
    summary: string | null
    notes: string | null
    fileUrl: string | null
    title: string | null
  }

  export type BudgetMaxAggregateOutputType = {
    id: string | null
    clientId: string | null
    totalValue: Decimal | null
    status: string | null
    version: number | null
    sentAt: Date | null
    acceptedAt: Date | null
    paymentTerms: string | null
    summary: string | null
    notes: string | null
    fileUrl: string | null
    title: string | null
  }

  export type BudgetCountAggregateOutputType = {
    id: number
    clientId: number
    totalValue: number
    status: number
    version: number
    sentAt: number
    acceptedAt: number
    paymentTerms: number
    summary: number
    notes: number
    fileUrl: number
    title: number
    _all: number
  }


  export type BudgetAvgAggregateInputType = {
    totalValue?: true
    version?: true
  }

  export type BudgetSumAggregateInputType = {
    totalValue?: true
    version?: true
  }

  export type BudgetMinAggregateInputType = {
    id?: true
    clientId?: true
    totalValue?: true
    status?: true
    version?: true
    sentAt?: true
    acceptedAt?: true
    paymentTerms?: true
    summary?: true
    notes?: true
    fileUrl?: true
    title?: true
  }

  export type BudgetMaxAggregateInputType = {
    id?: true
    clientId?: true
    totalValue?: true
    status?: true
    version?: true
    sentAt?: true
    acceptedAt?: true
    paymentTerms?: true
    summary?: true
    notes?: true
    fileUrl?: true
    title?: true
  }

  export type BudgetCountAggregateInputType = {
    id?: true
    clientId?: true
    totalValue?: true
    status?: true
    version?: true
    sentAt?: true
    acceptedAt?: true
    paymentTerms?: true
    summary?: true
    notes?: true
    fileUrl?: true
    title?: true
    _all?: true
  }

  export type BudgetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Budget to aggregate.
     */
    where?: BudgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Budgets to fetch.
     */
    orderBy?: BudgetOrderByWithRelationInput | BudgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BudgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Budgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Budgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Budgets
    **/
    _count?: true | BudgetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BudgetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BudgetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BudgetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BudgetMaxAggregateInputType
  }

  export type GetBudgetAggregateType<T extends BudgetAggregateArgs> = {
        [P in keyof T & keyof AggregateBudget]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBudget[P]>
      : GetScalarType<T[P], AggregateBudget[P]>
  }




  export type BudgetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BudgetWhereInput
    orderBy?: BudgetOrderByWithAggregationInput | BudgetOrderByWithAggregationInput[]
    by: BudgetScalarFieldEnum[] | BudgetScalarFieldEnum
    having?: BudgetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BudgetCountAggregateInputType | true
    _avg?: BudgetAvgAggregateInputType
    _sum?: BudgetSumAggregateInputType
    _min?: BudgetMinAggregateInputType
    _max?: BudgetMaxAggregateInputType
  }

  export type BudgetGroupByOutputType = {
    id: string
    clientId: string | null
    totalValue: Decimal
    status: string | null
    version: number | null
    sentAt: Date | null
    acceptedAt: Date | null
    paymentTerms: string | null
    summary: string | null
    notes: string | null
    fileUrl: string | null
    title: string | null
    _count: BudgetCountAggregateOutputType | null
    _avg: BudgetAvgAggregateOutputType | null
    _sum: BudgetSumAggregateOutputType | null
    _min: BudgetMinAggregateOutputType | null
    _max: BudgetMaxAggregateOutputType | null
  }

  type GetBudgetGroupByPayload<T extends BudgetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BudgetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BudgetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BudgetGroupByOutputType[P]>
            : GetScalarType<T[P], BudgetGroupByOutputType[P]>
        }
      >
    >


  export type BudgetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    totalValue?: boolean
    status?: boolean
    version?: boolean
    sentAt?: boolean
    acceptedAt?: boolean
    paymentTerms?: boolean
    summary?: boolean
    notes?: boolean
    fileUrl?: boolean
    title?: boolean
    client?: boolean | Budget$clientArgs<ExtArgs>
  }, ExtArgs["result"]["budget"]>

  export type BudgetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    totalValue?: boolean
    status?: boolean
    version?: boolean
    sentAt?: boolean
    acceptedAt?: boolean
    paymentTerms?: boolean
    summary?: boolean
    notes?: boolean
    fileUrl?: boolean
    title?: boolean
    client?: boolean | Budget$clientArgs<ExtArgs>
  }, ExtArgs["result"]["budget"]>

  export type BudgetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    totalValue?: boolean
    status?: boolean
    version?: boolean
    sentAt?: boolean
    acceptedAt?: boolean
    paymentTerms?: boolean
    summary?: boolean
    notes?: boolean
    fileUrl?: boolean
    title?: boolean
    client?: boolean | Budget$clientArgs<ExtArgs>
  }, ExtArgs["result"]["budget"]>

  export type BudgetSelectScalar = {
    id?: boolean
    clientId?: boolean
    totalValue?: boolean
    status?: boolean
    version?: boolean
    sentAt?: boolean
    acceptedAt?: boolean
    paymentTerms?: boolean
    summary?: boolean
    notes?: boolean
    fileUrl?: boolean
    title?: boolean
  }

  export type BudgetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientId" | "totalValue" | "status" | "version" | "sentAt" | "acceptedAt" | "paymentTerms" | "summary" | "notes" | "fileUrl" | "title", ExtArgs["result"]["budget"]>
  export type BudgetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | Budget$clientArgs<ExtArgs>
  }
  export type BudgetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | Budget$clientArgs<ExtArgs>
  }
  export type BudgetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | Budget$clientArgs<ExtArgs>
  }

  export type $BudgetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Budget"
    objects: {
      client: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clientId: string | null
      totalValue: Prisma.Decimal
      status: string | null
      version: number | null
      sentAt: Date | null
      acceptedAt: Date | null
      paymentTerms: string | null
      summary: string | null
      notes: string | null
      fileUrl: string | null
      title: string | null
    }, ExtArgs["result"]["budget"]>
    composites: {}
  }

  type BudgetGetPayload<S extends boolean | null | undefined | BudgetDefaultArgs> = $Result.GetResult<Prisma.$BudgetPayload, S>

  type BudgetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BudgetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BudgetCountAggregateInputType | true
    }

  export interface BudgetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Budget'], meta: { name: 'Budget' } }
    /**
     * Find zero or one Budget that matches the filter.
     * @param {BudgetFindUniqueArgs} args - Arguments to find a Budget
     * @example
     * // Get one Budget
     * const budget = await prisma.budget.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BudgetFindUniqueArgs>(args: SelectSubset<T, BudgetFindUniqueArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Budget that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BudgetFindUniqueOrThrowArgs} args - Arguments to find a Budget
     * @example
     * // Get one Budget
     * const budget = await prisma.budget.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BudgetFindUniqueOrThrowArgs>(args: SelectSubset<T, BudgetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Budget that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetFindFirstArgs} args - Arguments to find a Budget
     * @example
     * // Get one Budget
     * const budget = await prisma.budget.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BudgetFindFirstArgs>(args?: SelectSubset<T, BudgetFindFirstArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Budget that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetFindFirstOrThrowArgs} args - Arguments to find a Budget
     * @example
     * // Get one Budget
     * const budget = await prisma.budget.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BudgetFindFirstOrThrowArgs>(args?: SelectSubset<T, BudgetFindFirstOrThrowArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Budgets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Budgets
     * const budgets = await prisma.budget.findMany()
     * 
     * // Get first 10 Budgets
     * const budgets = await prisma.budget.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const budgetWithIdOnly = await prisma.budget.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BudgetFindManyArgs>(args?: SelectSubset<T, BudgetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Budget.
     * @param {BudgetCreateArgs} args - Arguments to create a Budget.
     * @example
     * // Create one Budget
     * const Budget = await prisma.budget.create({
     *   data: {
     *     // ... data to create a Budget
     *   }
     * })
     * 
     */
    create<T extends BudgetCreateArgs>(args: SelectSubset<T, BudgetCreateArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Budgets.
     * @param {BudgetCreateManyArgs} args - Arguments to create many Budgets.
     * @example
     * // Create many Budgets
     * const budget = await prisma.budget.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BudgetCreateManyArgs>(args?: SelectSubset<T, BudgetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Budgets and returns the data saved in the database.
     * @param {BudgetCreateManyAndReturnArgs} args - Arguments to create many Budgets.
     * @example
     * // Create many Budgets
     * const budget = await prisma.budget.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Budgets and only return the `id`
     * const budgetWithIdOnly = await prisma.budget.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BudgetCreateManyAndReturnArgs>(args?: SelectSubset<T, BudgetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Budget.
     * @param {BudgetDeleteArgs} args - Arguments to delete one Budget.
     * @example
     * // Delete one Budget
     * const Budget = await prisma.budget.delete({
     *   where: {
     *     // ... filter to delete one Budget
     *   }
     * })
     * 
     */
    delete<T extends BudgetDeleteArgs>(args: SelectSubset<T, BudgetDeleteArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Budget.
     * @param {BudgetUpdateArgs} args - Arguments to update one Budget.
     * @example
     * // Update one Budget
     * const budget = await prisma.budget.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BudgetUpdateArgs>(args: SelectSubset<T, BudgetUpdateArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Budgets.
     * @param {BudgetDeleteManyArgs} args - Arguments to filter Budgets to delete.
     * @example
     * // Delete a few Budgets
     * const { count } = await prisma.budget.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BudgetDeleteManyArgs>(args?: SelectSubset<T, BudgetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Budgets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Budgets
     * const budget = await prisma.budget.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BudgetUpdateManyArgs>(args: SelectSubset<T, BudgetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Budgets and returns the data updated in the database.
     * @param {BudgetUpdateManyAndReturnArgs} args - Arguments to update many Budgets.
     * @example
     * // Update many Budgets
     * const budget = await prisma.budget.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Budgets and only return the `id`
     * const budgetWithIdOnly = await prisma.budget.updateManyAndReturn({
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
    updateManyAndReturn<T extends BudgetUpdateManyAndReturnArgs>(args: SelectSubset<T, BudgetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Budget.
     * @param {BudgetUpsertArgs} args - Arguments to update or create a Budget.
     * @example
     * // Update or create a Budget
     * const budget = await prisma.budget.upsert({
     *   create: {
     *     // ... data to create a Budget
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Budget we want to update
     *   }
     * })
     */
    upsert<T extends BudgetUpsertArgs>(args: SelectSubset<T, BudgetUpsertArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Budgets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetCountArgs} args - Arguments to filter Budgets to count.
     * @example
     * // Count the number of Budgets
     * const count = await prisma.budget.count({
     *   where: {
     *     // ... the filter for the Budgets we want to count
     *   }
     * })
    **/
    count<T extends BudgetCountArgs>(
      args?: Subset<T, BudgetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BudgetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Budget.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BudgetAggregateArgs>(args: Subset<T, BudgetAggregateArgs>): Prisma.PrismaPromise<GetBudgetAggregateType<T>>

    /**
     * Group by Budget.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetGroupByArgs} args - Group by arguments.
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
      T extends BudgetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BudgetGroupByArgs['orderBy'] }
        : { orderBy?: BudgetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BudgetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBudgetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Budget model
   */
  readonly fields: BudgetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Budget.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BudgetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends Budget$clientArgs<ExtArgs> = {}>(args?: Subset<T, Budget$clientArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Budget model
   */
  interface BudgetFieldRefs {
    readonly id: FieldRef<"Budget", 'String'>
    readonly clientId: FieldRef<"Budget", 'String'>
    readonly totalValue: FieldRef<"Budget", 'Decimal'>
    readonly status: FieldRef<"Budget", 'String'>
    readonly version: FieldRef<"Budget", 'Int'>
    readonly sentAt: FieldRef<"Budget", 'DateTime'>
    readonly acceptedAt: FieldRef<"Budget", 'DateTime'>
    readonly paymentTerms: FieldRef<"Budget", 'String'>
    readonly summary: FieldRef<"Budget", 'String'>
    readonly notes: FieldRef<"Budget", 'String'>
    readonly fileUrl: FieldRef<"Budget", 'String'>
    readonly title: FieldRef<"Budget", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Budget findUnique
   */
  export type BudgetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    /**
     * Filter, which Budget to fetch.
     */
    where: BudgetWhereUniqueInput
  }

  /**
   * Budget findUniqueOrThrow
   */
  export type BudgetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    /**
     * Filter, which Budget to fetch.
     */
    where: BudgetWhereUniqueInput
  }

  /**
   * Budget findFirst
   */
  export type BudgetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    /**
     * Filter, which Budget to fetch.
     */
    where?: BudgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Budgets to fetch.
     */
    orderBy?: BudgetOrderByWithRelationInput | BudgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Budgets.
     */
    cursor?: BudgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Budgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Budgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Budgets.
     */
    distinct?: BudgetScalarFieldEnum | BudgetScalarFieldEnum[]
  }

  /**
   * Budget findFirstOrThrow
   */
  export type BudgetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    /**
     * Filter, which Budget to fetch.
     */
    where?: BudgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Budgets to fetch.
     */
    orderBy?: BudgetOrderByWithRelationInput | BudgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Budgets.
     */
    cursor?: BudgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Budgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Budgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Budgets.
     */
    distinct?: BudgetScalarFieldEnum | BudgetScalarFieldEnum[]
  }

  /**
   * Budget findMany
   */
  export type BudgetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    /**
     * Filter, which Budgets to fetch.
     */
    where?: BudgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Budgets to fetch.
     */
    orderBy?: BudgetOrderByWithRelationInput | BudgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Budgets.
     */
    cursor?: BudgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Budgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Budgets.
     */
    skip?: number
    distinct?: BudgetScalarFieldEnum | BudgetScalarFieldEnum[]
  }

  /**
   * Budget create
   */
  export type BudgetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    /**
     * The data needed to create a Budget.
     */
    data: XOR<BudgetCreateInput, BudgetUncheckedCreateInput>
  }

  /**
   * Budget createMany
   */
  export type BudgetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Budgets.
     */
    data: BudgetCreateManyInput | BudgetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Budget createManyAndReturn
   */
  export type BudgetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * The data used to create many Budgets.
     */
    data: BudgetCreateManyInput | BudgetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Budget update
   */
  export type BudgetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    /**
     * The data needed to update a Budget.
     */
    data: XOR<BudgetUpdateInput, BudgetUncheckedUpdateInput>
    /**
     * Choose, which Budget to update.
     */
    where: BudgetWhereUniqueInput
  }

  /**
   * Budget updateMany
   */
  export type BudgetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Budgets.
     */
    data: XOR<BudgetUpdateManyMutationInput, BudgetUncheckedUpdateManyInput>
    /**
     * Filter which Budgets to update
     */
    where?: BudgetWhereInput
    /**
     * Limit how many Budgets to update.
     */
    limit?: number
  }

  /**
   * Budget updateManyAndReturn
   */
  export type BudgetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * The data used to update Budgets.
     */
    data: XOR<BudgetUpdateManyMutationInput, BudgetUncheckedUpdateManyInput>
    /**
     * Filter which Budgets to update
     */
    where?: BudgetWhereInput
    /**
     * Limit how many Budgets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Budget upsert
   */
  export type BudgetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    /**
     * The filter to search for the Budget to update in case it exists.
     */
    where: BudgetWhereUniqueInput
    /**
     * In case the Budget found by the `where` argument doesn't exist, create a new Budget with this data.
     */
    create: XOR<BudgetCreateInput, BudgetUncheckedCreateInput>
    /**
     * In case the Budget was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BudgetUpdateInput, BudgetUncheckedUpdateInput>
  }

  /**
   * Budget delete
   */
  export type BudgetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    /**
     * Filter which Budget to delete.
     */
    where: BudgetWhereUniqueInput
  }

  /**
   * Budget deleteMany
   */
  export type BudgetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Budgets to delete
     */
    where?: BudgetWhereInput
    /**
     * Limit how many Budgets to delete.
     */
    limit?: number
  }

  /**
   * Budget.client
   */
  export type Budget$clientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * Budget without action
   */
  export type BudgetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
  }


  /**
   * Model ExecutionCostEstimate
   */

  export type AggregateExecutionCostEstimate = {
    _count: ExecutionCostEstimateCountAggregateOutputType | null
    _avg: ExecutionCostEstimateAvgAggregateOutputType | null
    _sum: ExecutionCostEstimateSumAggregateOutputType | null
    _min: ExecutionCostEstimateMinAggregateOutputType | null
    _max: ExecutionCostEstimateMaxAggregateOutputType | null
  }

  export type ExecutionCostEstimateAvgAggregateOutputType = {
    id: number | null
    cme: Decimal | null
    r: Decimal | null
    re: Decimal | null
    ur: Decimal | null
    eur: Decimal | null
    min: Decimal | null
  }

  export type ExecutionCostEstimateSumAggregateOutputType = {
    id: number | null
    cme: Decimal | null
    r: Decimal | null
    re: Decimal | null
    ur: Decimal | null
    eur: Decimal | null
    min: Decimal | null
  }

  export type ExecutionCostEstimateMinAggregateOutputType = {
    id: number | null
    item: string | null
    cme: Decimal | null
    r: Decimal | null
    re: Decimal | null
    ur: Decimal | null
    eur: Decimal | null
    min: Decimal | null
  }

  export type ExecutionCostEstimateMaxAggregateOutputType = {
    id: number | null
    item: string | null
    cme: Decimal | null
    r: Decimal | null
    re: Decimal | null
    ur: Decimal | null
    eur: Decimal | null
    min: Decimal | null
  }

  export type ExecutionCostEstimateCountAggregateOutputType = {
    id: number
    item: number
    cme: number
    r: number
    re: number
    ur: number
    eur: number
    min: number
    _all: number
  }


  export type ExecutionCostEstimateAvgAggregateInputType = {
    id?: true
    cme?: true
    r?: true
    re?: true
    ur?: true
    eur?: true
    min?: true
  }

  export type ExecutionCostEstimateSumAggregateInputType = {
    id?: true
    cme?: true
    r?: true
    re?: true
    ur?: true
    eur?: true
    min?: true
  }

  export type ExecutionCostEstimateMinAggregateInputType = {
    id?: true
    item?: true
    cme?: true
    r?: true
    re?: true
    ur?: true
    eur?: true
    min?: true
  }

  export type ExecutionCostEstimateMaxAggregateInputType = {
    id?: true
    item?: true
    cme?: true
    r?: true
    re?: true
    ur?: true
    eur?: true
    min?: true
  }

  export type ExecutionCostEstimateCountAggregateInputType = {
    id?: true
    item?: true
    cme?: true
    r?: true
    re?: true
    ur?: true
    eur?: true
    min?: true
    _all?: true
  }

  export type ExecutionCostEstimateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExecutionCostEstimate to aggregate.
     */
    where?: ExecutionCostEstimateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExecutionCostEstimates to fetch.
     */
    orderBy?: ExecutionCostEstimateOrderByWithRelationInput | ExecutionCostEstimateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExecutionCostEstimateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExecutionCostEstimates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExecutionCostEstimates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExecutionCostEstimates
    **/
    _count?: true | ExecutionCostEstimateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExecutionCostEstimateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExecutionCostEstimateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExecutionCostEstimateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExecutionCostEstimateMaxAggregateInputType
  }

  export type GetExecutionCostEstimateAggregateType<T extends ExecutionCostEstimateAggregateArgs> = {
        [P in keyof T & keyof AggregateExecutionCostEstimate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExecutionCostEstimate[P]>
      : GetScalarType<T[P], AggregateExecutionCostEstimate[P]>
  }




  export type ExecutionCostEstimateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExecutionCostEstimateWhereInput
    orderBy?: ExecutionCostEstimateOrderByWithAggregationInput | ExecutionCostEstimateOrderByWithAggregationInput[]
    by: ExecutionCostEstimateScalarFieldEnum[] | ExecutionCostEstimateScalarFieldEnum
    having?: ExecutionCostEstimateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExecutionCostEstimateCountAggregateInputType | true
    _avg?: ExecutionCostEstimateAvgAggregateInputType
    _sum?: ExecutionCostEstimateSumAggregateInputType
    _min?: ExecutionCostEstimateMinAggregateInputType
    _max?: ExecutionCostEstimateMaxAggregateInputType
  }

  export type ExecutionCostEstimateGroupByOutputType = {
    id: number
    item: string
    cme: Decimal | null
    r: Decimal | null
    re: Decimal | null
    ur: Decimal | null
    eur: Decimal | null
    min: Decimal | null
    _count: ExecutionCostEstimateCountAggregateOutputType | null
    _avg: ExecutionCostEstimateAvgAggregateOutputType | null
    _sum: ExecutionCostEstimateSumAggregateOutputType | null
    _min: ExecutionCostEstimateMinAggregateOutputType | null
    _max: ExecutionCostEstimateMaxAggregateOutputType | null
  }

  type GetExecutionCostEstimateGroupByPayload<T extends ExecutionCostEstimateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExecutionCostEstimateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExecutionCostEstimateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExecutionCostEstimateGroupByOutputType[P]>
            : GetScalarType<T[P], ExecutionCostEstimateGroupByOutputType[P]>
        }
      >
    >


  export type ExecutionCostEstimateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    item?: boolean
    cme?: boolean
    r?: boolean
    re?: boolean
    ur?: boolean
    eur?: boolean
    min?: boolean
  }, ExtArgs["result"]["executionCostEstimate"]>

  export type ExecutionCostEstimateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    item?: boolean
    cme?: boolean
    r?: boolean
    re?: boolean
    ur?: boolean
    eur?: boolean
    min?: boolean
  }, ExtArgs["result"]["executionCostEstimate"]>

  export type ExecutionCostEstimateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    item?: boolean
    cme?: boolean
    r?: boolean
    re?: boolean
    ur?: boolean
    eur?: boolean
    min?: boolean
  }, ExtArgs["result"]["executionCostEstimate"]>

  export type ExecutionCostEstimateSelectScalar = {
    id?: boolean
    item?: boolean
    cme?: boolean
    r?: boolean
    re?: boolean
    ur?: boolean
    eur?: boolean
    min?: boolean
  }

  export type ExecutionCostEstimateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "item" | "cme" | "r" | "re" | "ur" | "eur" | "min", ExtArgs["result"]["executionCostEstimate"]>

  export type $ExecutionCostEstimatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExecutionCostEstimate"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      item: string
      cme: Prisma.Decimal | null
      r: Prisma.Decimal | null
      re: Prisma.Decimal | null
      ur: Prisma.Decimal | null
      eur: Prisma.Decimal | null
      min: Prisma.Decimal | null
    }, ExtArgs["result"]["executionCostEstimate"]>
    composites: {}
  }

  type ExecutionCostEstimateGetPayload<S extends boolean | null | undefined | ExecutionCostEstimateDefaultArgs> = $Result.GetResult<Prisma.$ExecutionCostEstimatePayload, S>

  type ExecutionCostEstimateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExecutionCostEstimateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExecutionCostEstimateCountAggregateInputType | true
    }

  export interface ExecutionCostEstimateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExecutionCostEstimate'], meta: { name: 'ExecutionCostEstimate' } }
    /**
     * Find zero or one ExecutionCostEstimate that matches the filter.
     * @param {ExecutionCostEstimateFindUniqueArgs} args - Arguments to find a ExecutionCostEstimate
     * @example
     * // Get one ExecutionCostEstimate
     * const executionCostEstimate = await prisma.executionCostEstimate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExecutionCostEstimateFindUniqueArgs>(args: SelectSubset<T, ExecutionCostEstimateFindUniqueArgs<ExtArgs>>): Prisma__ExecutionCostEstimateClient<$Result.GetResult<Prisma.$ExecutionCostEstimatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExecutionCostEstimate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExecutionCostEstimateFindUniqueOrThrowArgs} args - Arguments to find a ExecutionCostEstimate
     * @example
     * // Get one ExecutionCostEstimate
     * const executionCostEstimate = await prisma.executionCostEstimate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExecutionCostEstimateFindUniqueOrThrowArgs>(args: SelectSubset<T, ExecutionCostEstimateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExecutionCostEstimateClient<$Result.GetResult<Prisma.$ExecutionCostEstimatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExecutionCostEstimate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionCostEstimateFindFirstArgs} args - Arguments to find a ExecutionCostEstimate
     * @example
     * // Get one ExecutionCostEstimate
     * const executionCostEstimate = await prisma.executionCostEstimate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExecutionCostEstimateFindFirstArgs>(args?: SelectSubset<T, ExecutionCostEstimateFindFirstArgs<ExtArgs>>): Prisma__ExecutionCostEstimateClient<$Result.GetResult<Prisma.$ExecutionCostEstimatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExecutionCostEstimate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionCostEstimateFindFirstOrThrowArgs} args - Arguments to find a ExecutionCostEstimate
     * @example
     * // Get one ExecutionCostEstimate
     * const executionCostEstimate = await prisma.executionCostEstimate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExecutionCostEstimateFindFirstOrThrowArgs>(args?: SelectSubset<T, ExecutionCostEstimateFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExecutionCostEstimateClient<$Result.GetResult<Prisma.$ExecutionCostEstimatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExecutionCostEstimates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionCostEstimateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExecutionCostEstimates
     * const executionCostEstimates = await prisma.executionCostEstimate.findMany()
     * 
     * // Get first 10 ExecutionCostEstimates
     * const executionCostEstimates = await prisma.executionCostEstimate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const executionCostEstimateWithIdOnly = await prisma.executionCostEstimate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExecutionCostEstimateFindManyArgs>(args?: SelectSubset<T, ExecutionCostEstimateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExecutionCostEstimatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExecutionCostEstimate.
     * @param {ExecutionCostEstimateCreateArgs} args - Arguments to create a ExecutionCostEstimate.
     * @example
     * // Create one ExecutionCostEstimate
     * const ExecutionCostEstimate = await prisma.executionCostEstimate.create({
     *   data: {
     *     // ... data to create a ExecutionCostEstimate
     *   }
     * })
     * 
     */
    create<T extends ExecutionCostEstimateCreateArgs>(args: SelectSubset<T, ExecutionCostEstimateCreateArgs<ExtArgs>>): Prisma__ExecutionCostEstimateClient<$Result.GetResult<Prisma.$ExecutionCostEstimatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExecutionCostEstimates.
     * @param {ExecutionCostEstimateCreateManyArgs} args - Arguments to create many ExecutionCostEstimates.
     * @example
     * // Create many ExecutionCostEstimates
     * const executionCostEstimate = await prisma.executionCostEstimate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExecutionCostEstimateCreateManyArgs>(args?: SelectSubset<T, ExecutionCostEstimateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExecutionCostEstimates and returns the data saved in the database.
     * @param {ExecutionCostEstimateCreateManyAndReturnArgs} args - Arguments to create many ExecutionCostEstimates.
     * @example
     * // Create many ExecutionCostEstimates
     * const executionCostEstimate = await prisma.executionCostEstimate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExecutionCostEstimates and only return the `id`
     * const executionCostEstimateWithIdOnly = await prisma.executionCostEstimate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExecutionCostEstimateCreateManyAndReturnArgs>(args?: SelectSubset<T, ExecutionCostEstimateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExecutionCostEstimatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExecutionCostEstimate.
     * @param {ExecutionCostEstimateDeleteArgs} args - Arguments to delete one ExecutionCostEstimate.
     * @example
     * // Delete one ExecutionCostEstimate
     * const ExecutionCostEstimate = await prisma.executionCostEstimate.delete({
     *   where: {
     *     // ... filter to delete one ExecutionCostEstimate
     *   }
     * })
     * 
     */
    delete<T extends ExecutionCostEstimateDeleteArgs>(args: SelectSubset<T, ExecutionCostEstimateDeleteArgs<ExtArgs>>): Prisma__ExecutionCostEstimateClient<$Result.GetResult<Prisma.$ExecutionCostEstimatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExecutionCostEstimate.
     * @param {ExecutionCostEstimateUpdateArgs} args - Arguments to update one ExecutionCostEstimate.
     * @example
     * // Update one ExecutionCostEstimate
     * const executionCostEstimate = await prisma.executionCostEstimate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExecutionCostEstimateUpdateArgs>(args: SelectSubset<T, ExecutionCostEstimateUpdateArgs<ExtArgs>>): Prisma__ExecutionCostEstimateClient<$Result.GetResult<Prisma.$ExecutionCostEstimatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExecutionCostEstimates.
     * @param {ExecutionCostEstimateDeleteManyArgs} args - Arguments to filter ExecutionCostEstimates to delete.
     * @example
     * // Delete a few ExecutionCostEstimates
     * const { count } = await prisma.executionCostEstimate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExecutionCostEstimateDeleteManyArgs>(args?: SelectSubset<T, ExecutionCostEstimateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExecutionCostEstimates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionCostEstimateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExecutionCostEstimates
     * const executionCostEstimate = await prisma.executionCostEstimate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExecutionCostEstimateUpdateManyArgs>(args: SelectSubset<T, ExecutionCostEstimateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExecutionCostEstimates and returns the data updated in the database.
     * @param {ExecutionCostEstimateUpdateManyAndReturnArgs} args - Arguments to update many ExecutionCostEstimates.
     * @example
     * // Update many ExecutionCostEstimates
     * const executionCostEstimate = await prisma.executionCostEstimate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExecutionCostEstimates and only return the `id`
     * const executionCostEstimateWithIdOnly = await prisma.executionCostEstimate.updateManyAndReturn({
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
    updateManyAndReturn<T extends ExecutionCostEstimateUpdateManyAndReturnArgs>(args: SelectSubset<T, ExecutionCostEstimateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExecutionCostEstimatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExecutionCostEstimate.
     * @param {ExecutionCostEstimateUpsertArgs} args - Arguments to update or create a ExecutionCostEstimate.
     * @example
     * // Update or create a ExecutionCostEstimate
     * const executionCostEstimate = await prisma.executionCostEstimate.upsert({
     *   create: {
     *     // ... data to create a ExecutionCostEstimate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExecutionCostEstimate we want to update
     *   }
     * })
     */
    upsert<T extends ExecutionCostEstimateUpsertArgs>(args: SelectSubset<T, ExecutionCostEstimateUpsertArgs<ExtArgs>>): Prisma__ExecutionCostEstimateClient<$Result.GetResult<Prisma.$ExecutionCostEstimatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExecutionCostEstimates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionCostEstimateCountArgs} args - Arguments to filter ExecutionCostEstimates to count.
     * @example
     * // Count the number of ExecutionCostEstimates
     * const count = await prisma.executionCostEstimate.count({
     *   where: {
     *     // ... the filter for the ExecutionCostEstimates we want to count
     *   }
     * })
    **/
    count<T extends ExecutionCostEstimateCountArgs>(
      args?: Subset<T, ExecutionCostEstimateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExecutionCostEstimateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExecutionCostEstimate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionCostEstimateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExecutionCostEstimateAggregateArgs>(args: Subset<T, ExecutionCostEstimateAggregateArgs>): Prisma.PrismaPromise<GetExecutionCostEstimateAggregateType<T>>

    /**
     * Group by ExecutionCostEstimate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionCostEstimateGroupByArgs} args - Group by arguments.
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
      T extends ExecutionCostEstimateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExecutionCostEstimateGroupByArgs['orderBy'] }
        : { orderBy?: ExecutionCostEstimateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExecutionCostEstimateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExecutionCostEstimateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExecutionCostEstimate model
   */
  readonly fields: ExecutionCostEstimateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExecutionCostEstimate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExecutionCostEstimateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ExecutionCostEstimate model
   */
  interface ExecutionCostEstimateFieldRefs {
    readonly id: FieldRef<"ExecutionCostEstimate", 'Int'>
    readonly item: FieldRef<"ExecutionCostEstimate", 'String'>
    readonly cme: FieldRef<"ExecutionCostEstimate", 'Decimal'>
    readonly r: FieldRef<"ExecutionCostEstimate", 'Decimal'>
    readonly re: FieldRef<"ExecutionCostEstimate", 'Decimal'>
    readonly ur: FieldRef<"ExecutionCostEstimate", 'Decimal'>
    readonly eur: FieldRef<"ExecutionCostEstimate", 'Decimal'>
    readonly min: FieldRef<"ExecutionCostEstimate", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * ExecutionCostEstimate findUnique
   */
  export type ExecutionCostEstimateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionCostEstimate
     */
    select?: ExecutionCostEstimateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionCostEstimate
     */
    omit?: ExecutionCostEstimateOmit<ExtArgs> | null
    /**
     * Filter, which ExecutionCostEstimate to fetch.
     */
    where: ExecutionCostEstimateWhereUniqueInput
  }

  /**
   * ExecutionCostEstimate findUniqueOrThrow
   */
  export type ExecutionCostEstimateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionCostEstimate
     */
    select?: ExecutionCostEstimateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionCostEstimate
     */
    omit?: ExecutionCostEstimateOmit<ExtArgs> | null
    /**
     * Filter, which ExecutionCostEstimate to fetch.
     */
    where: ExecutionCostEstimateWhereUniqueInput
  }

  /**
   * ExecutionCostEstimate findFirst
   */
  export type ExecutionCostEstimateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionCostEstimate
     */
    select?: ExecutionCostEstimateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionCostEstimate
     */
    omit?: ExecutionCostEstimateOmit<ExtArgs> | null
    /**
     * Filter, which ExecutionCostEstimate to fetch.
     */
    where?: ExecutionCostEstimateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExecutionCostEstimates to fetch.
     */
    orderBy?: ExecutionCostEstimateOrderByWithRelationInput | ExecutionCostEstimateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExecutionCostEstimates.
     */
    cursor?: ExecutionCostEstimateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExecutionCostEstimates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExecutionCostEstimates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExecutionCostEstimates.
     */
    distinct?: ExecutionCostEstimateScalarFieldEnum | ExecutionCostEstimateScalarFieldEnum[]
  }

  /**
   * ExecutionCostEstimate findFirstOrThrow
   */
  export type ExecutionCostEstimateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionCostEstimate
     */
    select?: ExecutionCostEstimateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionCostEstimate
     */
    omit?: ExecutionCostEstimateOmit<ExtArgs> | null
    /**
     * Filter, which ExecutionCostEstimate to fetch.
     */
    where?: ExecutionCostEstimateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExecutionCostEstimates to fetch.
     */
    orderBy?: ExecutionCostEstimateOrderByWithRelationInput | ExecutionCostEstimateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExecutionCostEstimates.
     */
    cursor?: ExecutionCostEstimateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExecutionCostEstimates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExecutionCostEstimates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExecutionCostEstimates.
     */
    distinct?: ExecutionCostEstimateScalarFieldEnum | ExecutionCostEstimateScalarFieldEnum[]
  }

  /**
   * ExecutionCostEstimate findMany
   */
  export type ExecutionCostEstimateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionCostEstimate
     */
    select?: ExecutionCostEstimateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionCostEstimate
     */
    omit?: ExecutionCostEstimateOmit<ExtArgs> | null
    /**
     * Filter, which ExecutionCostEstimates to fetch.
     */
    where?: ExecutionCostEstimateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExecutionCostEstimates to fetch.
     */
    orderBy?: ExecutionCostEstimateOrderByWithRelationInput | ExecutionCostEstimateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExecutionCostEstimates.
     */
    cursor?: ExecutionCostEstimateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExecutionCostEstimates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExecutionCostEstimates.
     */
    skip?: number
    distinct?: ExecutionCostEstimateScalarFieldEnum | ExecutionCostEstimateScalarFieldEnum[]
  }

  /**
   * ExecutionCostEstimate create
   */
  export type ExecutionCostEstimateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionCostEstimate
     */
    select?: ExecutionCostEstimateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionCostEstimate
     */
    omit?: ExecutionCostEstimateOmit<ExtArgs> | null
    /**
     * The data needed to create a ExecutionCostEstimate.
     */
    data: XOR<ExecutionCostEstimateCreateInput, ExecutionCostEstimateUncheckedCreateInput>
  }

  /**
   * ExecutionCostEstimate createMany
   */
  export type ExecutionCostEstimateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExecutionCostEstimates.
     */
    data: ExecutionCostEstimateCreateManyInput | ExecutionCostEstimateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExecutionCostEstimate createManyAndReturn
   */
  export type ExecutionCostEstimateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionCostEstimate
     */
    select?: ExecutionCostEstimateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionCostEstimate
     */
    omit?: ExecutionCostEstimateOmit<ExtArgs> | null
    /**
     * The data used to create many ExecutionCostEstimates.
     */
    data: ExecutionCostEstimateCreateManyInput | ExecutionCostEstimateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExecutionCostEstimate update
   */
  export type ExecutionCostEstimateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionCostEstimate
     */
    select?: ExecutionCostEstimateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionCostEstimate
     */
    omit?: ExecutionCostEstimateOmit<ExtArgs> | null
    /**
     * The data needed to update a ExecutionCostEstimate.
     */
    data: XOR<ExecutionCostEstimateUpdateInput, ExecutionCostEstimateUncheckedUpdateInput>
    /**
     * Choose, which ExecutionCostEstimate to update.
     */
    where: ExecutionCostEstimateWhereUniqueInput
  }

  /**
   * ExecutionCostEstimate updateMany
   */
  export type ExecutionCostEstimateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExecutionCostEstimates.
     */
    data: XOR<ExecutionCostEstimateUpdateManyMutationInput, ExecutionCostEstimateUncheckedUpdateManyInput>
    /**
     * Filter which ExecutionCostEstimates to update
     */
    where?: ExecutionCostEstimateWhereInput
    /**
     * Limit how many ExecutionCostEstimates to update.
     */
    limit?: number
  }

  /**
   * ExecutionCostEstimate updateManyAndReturn
   */
  export type ExecutionCostEstimateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionCostEstimate
     */
    select?: ExecutionCostEstimateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionCostEstimate
     */
    omit?: ExecutionCostEstimateOmit<ExtArgs> | null
    /**
     * The data used to update ExecutionCostEstimates.
     */
    data: XOR<ExecutionCostEstimateUpdateManyMutationInput, ExecutionCostEstimateUncheckedUpdateManyInput>
    /**
     * Filter which ExecutionCostEstimates to update
     */
    where?: ExecutionCostEstimateWhereInput
    /**
     * Limit how many ExecutionCostEstimates to update.
     */
    limit?: number
  }

  /**
   * ExecutionCostEstimate upsert
   */
  export type ExecutionCostEstimateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionCostEstimate
     */
    select?: ExecutionCostEstimateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionCostEstimate
     */
    omit?: ExecutionCostEstimateOmit<ExtArgs> | null
    /**
     * The filter to search for the ExecutionCostEstimate to update in case it exists.
     */
    where: ExecutionCostEstimateWhereUniqueInput
    /**
     * In case the ExecutionCostEstimate found by the `where` argument doesn't exist, create a new ExecutionCostEstimate with this data.
     */
    create: XOR<ExecutionCostEstimateCreateInput, ExecutionCostEstimateUncheckedCreateInput>
    /**
     * In case the ExecutionCostEstimate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExecutionCostEstimateUpdateInput, ExecutionCostEstimateUncheckedUpdateInput>
  }

  /**
   * ExecutionCostEstimate delete
   */
  export type ExecutionCostEstimateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionCostEstimate
     */
    select?: ExecutionCostEstimateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionCostEstimate
     */
    omit?: ExecutionCostEstimateOmit<ExtArgs> | null
    /**
     * Filter which ExecutionCostEstimate to delete.
     */
    where: ExecutionCostEstimateWhereUniqueInput
  }

  /**
   * ExecutionCostEstimate deleteMany
   */
  export type ExecutionCostEstimateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExecutionCostEstimates to delete
     */
    where?: ExecutionCostEstimateWhereInput
    /**
     * Limit how many ExecutionCostEstimates to delete.
     */
    limit?: number
  }

  /**
   * ExecutionCostEstimate without action
   */
  export type ExecutionCostEstimateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionCostEstimate
     */
    select?: ExecutionCostEstimateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionCostEstimate
     */
    omit?: ExecutionCostEstimateOmit<ExtArgs> | null
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
    emailVerified: 'emailVerified',
    passwordHash: 'passwordHash',
    accountStatus: 'accountStatus',
    createdAt: 'createdAt',
    lastLogin: 'lastLogin',
    userType: 'userType'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    firstName: 'firstName',
    lastName: 'lastName',
    phone: 'phone',
    avatarUrl: 'avatarUrl',
    birthDate: 'birthDate',
    gender: 'gender',
    identityDoc: 'identityDoc',
    cpf: 'cpf',
    occupation: 'occupation',
    maritalStatus: 'maritalStatus',
    hasChildren: 'hasChildren',
    ageGroup: 'ageGroup',
    stylePreference: 'stylePreference',
    referralSource: 'referralSource',
    privateNotes: 'privateNotes'
  };

  export type UserProfileScalarFieldEnum = (typeof UserProfileScalarFieldEnum)[keyof typeof UserProfileScalarFieldEnum]


  export const UserTokenScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    tokenType: 'tokenType',
    token: 'token',
    tokenExpiry: 'tokenExpiry',
    createdAt: 'createdAt'
  };

  export type UserTokenScalarFieldEnum = (typeof UserTokenScalarFieldEnum)[keyof typeof UserTokenScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    clientId: 'clientId',
    slug: 'slug',
    title: 'title',
    status: 'status',
    projectType: 'projectType',
    developmentType: 'developmentType',
    investmentExpectation: 'investmentExpectation',
    area: 'area',
    initialBudget: 'initialBudget',
    expectedBudget: 'expectedBudget',
    actualBudget: 'actualBudget',
    createdAt: 'createdAt',
    startDate: 'startDate',
    expectedEndDate: 'expectedEndDate',
    endDate: 'endDate',
    coverUrl: 'coverUrl'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const ProjectDetailScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    type: 'type',
    standard: 'standard',
    technicalManager: 'technicalManager',
    postalCode: 'postalCode',
    country: 'country',
    state: 'state',
    city: 'city',
    neighborhood: 'neighborhood',
    street: 'street',
    number: 'number',
    complement: 'complement'
  };

  export type ProjectDetailScalarFieldEnum = (typeof ProjectDetailScalarFieldEnum)[keyof typeof ProjectDetailScalarFieldEnum]


  export const ProjectPhaseScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    name: 'name',
    status: 'status',
    startDate: 'startDate',
    expectedEndDate: 'expectedEndDate',
    endDate: 'endDate',
    notes: 'notes',
    order: 'order',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectPhaseScalarFieldEnum = (typeof ProjectPhaseScalarFieldEnum)[keyof typeof ProjectPhaseScalarFieldEnum]


  export const ProjectPhaseTaskScalarFieldEnum: {
    id: 'id',
    phaseId: 'phaseId',
    name: 'name',
    status: 'status',
    responsible: 'responsible',
    startDate: 'startDate',
    expectedEndDate: 'expectedEndDate',
    endDate: 'endDate',
    notes: 'notes',
    priority: 'priority',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectPhaseTaskScalarFieldEnum = (typeof ProjectPhaseTaskScalarFieldEnum)[keyof typeof ProjectPhaseTaskScalarFieldEnum]


  export const ConstructionPhaseScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    name: 'name',
    status: 'status',
    startDate: 'startDate',
    expectedEndDate: 'expectedEndDate',
    endDate: 'endDate',
    budget: 'budget',
    actualCost: 'actualCost',
    notes: 'notes',
    responsible: 'responsible',
    order: 'order'
  };

  export type ConstructionPhaseScalarFieldEnum = (typeof ConstructionPhaseScalarFieldEnum)[keyof typeof ConstructionPhaseScalarFieldEnum]


  export const ConstructionTaskScalarFieldEnum: {
    id: 'id',
    phaseId: 'phaseId',
    name: 'name',
    status: 'status',
    budget: 'budget',
    actualCost: 'actualCost',
    startDate: 'startDate',
    expectedEndDate: 'expectedEndDate',
    endDate: 'endDate',
    notes: 'notes',
    responsible: 'responsible',
    priority: 'priority'
  };

  export type ConstructionTaskScalarFieldEnum = (typeof ConstructionTaskScalarFieldEnum)[keyof typeof ConstructionTaskScalarFieldEnum]


  export const ProjectDocumentScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    name: 'name',
    type: 'type',
    link: 'link',
    notes: 'notes',
    uploadedAt: 'uploadedAt',
    uploadedById: 'uploadedById',
    visibleToClient: 'visibleToClient',
    description: 'description'
  };

  export type ProjectDocumentScalarFieldEnum = (typeof ProjectDocumentScalarFieldEnum)[keyof typeof ProjectDocumentScalarFieldEnum]


  export const BudgetScalarFieldEnum: {
    id: 'id',
    clientId: 'clientId',
    totalValue: 'totalValue',
    status: 'status',
    version: 'version',
    sentAt: 'sentAt',
    acceptedAt: 'acceptedAt',
    paymentTerms: 'paymentTerms',
    summary: 'summary',
    notes: 'notes',
    fileUrl: 'fileUrl',
    title: 'title'
  };

  export type BudgetScalarFieldEnum = (typeof BudgetScalarFieldEnum)[keyof typeof BudgetScalarFieldEnum]


  export const ExecutionCostEstimateScalarFieldEnum: {
    id: 'id',
    item: 'item',
    cme: 'cme',
    r: 'r',
    re: 're',
    ur: 'ur',
    eur: 'eur',
    min: 'min'
  };

  export type ExecutionCostEstimateScalarFieldEnum = (typeof ExecutionCostEstimateScalarFieldEnum)[keyof typeof ExecutionCostEstimateScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


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
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    emailVerified?: BoolNullableFilter<"User"> | boolean | null
    passwordHash?: StringFilter<"User"> | string
    accountStatus?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeNullableFilter<"User"> | Date | string | null
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    userType?: StringNullableFilter<"User"> | string | null
    profile?: XOR<UserProfileNullableScalarRelationFilter, UserProfileWhereInput> | null
    tokens?: UserTokenListRelationFilter
    projects?: ProjectListRelationFilter
    budgets?: BudgetListRelationFilter
    uploadedDocs?: ProjectDocumentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    passwordHash?: SortOrder
    accountStatus?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    lastLogin?: SortOrderInput | SortOrder
    userType?: SortOrderInput | SortOrder
    profile?: UserProfileOrderByWithRelationInput
    tokens?: UserTokenOrderByRelationAggregateInput
    projects?: ProjectOrderByRelationAggregateInput
    budgets?: BudgetOrderByRelationAggregateInput
    uploadedDocs?: ProjectDocumentOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    emailVerified?: BoolNullableFilter<"User"> | boolean | null
    passwordHash?: StringFilter<"User"> | string
    accountStatus?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeNullableFilter<"User"> | Date | string | null
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    userType?: StringNullableFilter<"User"> | string | null
    profile?: XOR<UserProfileNullableScalarRelationFilter, UserProfileWhereInput> | null
    tokens?: UserTokenListRelationFilter
    projects?: ProjectListRelationFilter
    budgets?: BudgetListRelationFilter
    uploadedDocs?: ProjectDocumentListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    passwordHash?: SortOrder
    accountStatus?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    lastLogin?: SortOrderInput | SortOrder
    userType?: SortOrderInput | SortOrder
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
    emailVerified?: BoolNullableWithAggregatesFilter<"User"> | boolean | null
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    accountStatus?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    lastLogin?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    userType?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type UserProfileWhereInput = {
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    id?: StringFilter<"UserProfile"> | string
    userId?: StringFilter<"UserProfile"> | string
    firstName?: StringNullableFilter<"UserProfile"> | string | null
    lastName?: StringNullableFilter<"UserProfile"> | string | null
    phone?: StringNullableFilter<"UserProfile"> | string | null
    avatarUrl?: StringNullableFilter<"UserProfile"> | string | null
    birthDate?: DateTimeNullableFilter<"UserProfile"> | Date | string | null
    gender?: StringNullableFilter<"UserProfile"> | string | null
    identityDoc?: StringNullableFilter<"UserProfile"> | string | null
    cpf?: StringNullableFilter<"UserProfile"> | string | null
    occupation?: StringNullableFilter<"UserProfile"> | string | null
    maritalStatus?: StringNullableFilter<"UserProfile"> | string | null
    hasChildren?: BoolNullableFilter<"UserProfile"> | boolean | null
    ageGroup?: StringNullableFilter<"UserProfile"> | string | null
    stylePreference?: StringNullableFilter<"UserProfile"> | string | null
    referralSource?: StringNullableFilter<"UserProfile"> | string | null
    privateNotes?: StringNullableFilter<"UserProfile"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    birthDate?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    identityDoc?: SortOrderInput | SortOrder
    cpf?: SortOrderInput | SortOrder
    occupation?: SortOrderInput | SortOrder
    maritalStatus?: SortOrderInput | SortOrder
    hasChildren?: SortOrderInput | SortOrder
    ageGroup?: SortOrderInput | SortOrder
    stylePreference?: SortOrderInput | SortOrder
    referralSource?: SortOrderInput | SortOrder
    privateNotes?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    firstName?: StringNullableFilter<"UserProfile"> | string | null
    lastName?: StringNullableFilter<"UserProfile"> | string | null
    phone?: StringNullableFilter<"UserProfile"> | string | null
    avatarUrl?: StringNullableFilter<"UserProfile"> | string | null
    birthDate?: DateTimeNullableFilter<"UserProfile"> | Date | string | null
    gender?: StringNullableFilter<"UserProfile"> | string | null
    identityDoc?: StringNullableFilter<"UserProfile"> | string | null
    cpf?: StringNullableFilter<"UserProfile"> | string | null
    occupation?: StringNullableFilter<"UserProfile"> | string | null
    maritalStatus?: StringNullableFilter<"UserProfile"> | string | null
    hasChildren?: BoolNullableFilter<"UserProfile"> | boolean | null
    ageGroup?: StringNullableFilter<"UserProfile"> | string | null
    stylePreference?: StringNullableFilter<"UserProfile"> | string | null
    referralSource?: StringNullableFilter<"UserProfile"> | string | null
    privateNotes?: StringNullableFilter<"UserProfile"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type UserProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    birthDate?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    identityDoc?: SortOrderInput | SortOrder
    cpf?: SortOrderInput | SortOrder
    occupation?: SortOrderInput | SortOrder
    maritalStatus?: SortOrderInput | SortOrder
    hasChildren?: SortOrderInput | SortOrder
    ageGroup?: SortOrderInput | SortOrder
    stylePreference?: SortOrderInput | SortOrder
    referralSource?: SortOrderInput | SortOrder
    privateNotes?: SortOrderInput | SortOrder
    _count?: UserProfileCountOrderByAggregateInput
    _max?: UserProfileMaxOrderByAggregateInput
    _min?: UserProfileMinOrderByAggregateInput
  }

  export type UserProfileScalarWhereWithAggregatesInput = {
    AND?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    OR?: UserProfileScalarWhereWithAggregatesInput[]
    NOT?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserProfile"> | string
    userId?: StringWithAggregatesFilter<"UserProfile"> | string
    firstName?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    phone?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    avatarUrl?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    birthDate?: DateTimeNullableWithAggregatesFilter<"UserProfile"> | Date | string | null
    gender?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    identityDoc?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    cpf?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    occupation?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    maritalStatus?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    hasChildren?: BoolNullableWithAggregatesFilter<"UserProfile"> | boolean | null
    ageGroup?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    stylePreference?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    referralSource?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    privateNotes?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
  }

  export type UserTokenWhereInput = {
    AND?: UserTokenWhereInput | UserTokenWhereInput[]
    OR?: UserTokenWhereInput[]
    NOT?: UserTokenWhereInput | UserTokenWhereInput[]
    id?: StringFilter<"UserToken"> | string
    userId?: StringFilter<"UserToken"> | string
    tokenType?: StringNullableFilter<"UserToken"> | string | null
    token?: StringFilter<"UserToken"> | string
    tokenExpiry?: DateTimeNullableFilter<"UserToken"> | Date | string | null
    createdAt?: DateTimeNullableFilter<"UserToken"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserTokenOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenType?: SortOrderInput | SortOrder
    token?: SortOrder
    tokenExpiry?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserTokenWhereInput | UserTokenWhereInput[]
    OR?: UserTokenWhereInput[]
    NOT?: UserTokenWhereInput | UserTokenWhereInput[]
    userId?: StringFilter<"UserToken"> | string
    tokenType?: StringNullableFilter<"UserToken"> | string | null
    token?: StringFilter<"UserToken"> | string
    tokenExpiry?: DateTimeNullableFilter<"UserToken"> | Date | string | null
    createdAt?: DateTimeNullableFilter<"UserToken"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type UserTokenOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenType?: SortOrderInput | SortOrder
    token?: SortOrder
    tokenExpiry?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    _count?: UserTokenCountOrderByAggregateInput
    _max?: UserTokenMaxOrderByAggregateInput
    _min?: UserTokenMinOrderByAggregateInput
  }

  export type UserTokenScalarWhereWithAggregatesInput = {
    AND?: UserTokenScalarWhereWithAggregatesInput | UserTokenScalarWhereWithAggregatesInput[]
    OR?: UserTokenScalarWhereWithAggregatesInput[]
    NOT?: UserTokenScalarWhereWithAggregatesInput | UserTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserToken"> | string
    userId?: StringWithAggregatesFilter<"UserToken"> | string
    tokenType?: StringNullableWithAggregatesFilter<"UserToken"> | string | null
    token?: StringWithAggregatesFilter<"UserToken"> | string
    tokenExpiry?: DateTimeNullableWithAggregatesFilter<"UserToken"> | Date | string | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"UserToken"> | Date | string | null
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    clientId?: StringNullableFilter<"Project"> | string | null
    slug?: StringFilter<"Project"> | string
    title?: StringFilter<"Project"> | string
    status?: StringNullableFilter<"Project"> | string | null
    projectType?: StringNullableFilter<"Project"> | string | null
    developmentType?: StringNullableFilter<"Project"> | string | null
    investmentExpectation?: DecimalNullableFilter<"Project"> | Decimal | DecimalJsLike | number | string | null
    area?: DecimalNullableFilter<"Project"> | Decimal | DecimalJsLike | number | string | null
    initialBudget?: DecimalNullableFilter<"Project"> | Decimal | DecimalJsLike | number | string | null
    expectedBudget?: DecimalNullableFilter<"Project"> | Decimal | DecimalJsLike | number | string | null
    actualBudget?: DecimalNullableFilter<"Project"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeNullableFilter<"Project"> | Date | string | null
    startDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    expectedEndDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    coverUrl?: StringNullableFilter<"Project"> | string | null
    client?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    details?: XOR<ProjectDetailNullableScalarRelationFilter, ProjectDetailWhereInput> | null
    designPhases?: ProjectPhaseListRelationFilter
    constructionPhases?: ConstructionPhaseListRelationFilter
    documents?: ProjectDocumentListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrderInput | SortOrder
    slug?: SortOrder
    title?: SortOrder
    status?: SortOrderInput | SortOrder
    projectType?: SortOrderInput | SortOrder
    developmentType?: SortOrderInput | SortOrder
    investmentExpectation?: SortOrderInput | SortOrder
    area?: SortOrderInput | SortOrder
    initialBudget?: SortOrderInput | SortOrder
    expectedBudget?: SortOrderInput | SortOrder
    actualBudget?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    expectedEndDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    coverUrl?: SortOrderInput | SortOrder
    client?: UserOrderByWithRelationInput
    details?: ProjectDetailOrderByWithRelationInput
    designPhases?: ProjectPhaseOrderByRelationAggregateInput
    constructionPhases?: ConstructionPhaseOrderByRelationAggregateInput
    documents?: ProjectDocumentOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    clientId?: StringNullableFilter<"Project"> | string | null
    title?: StringFilter<"Project"> | string
    status?: StringNullableFilter<"Project"> | string | null
    projectType?: StringNullableFilter<"Project"> | string | null
    developmentType?: StringNullableFilter<"Project"> | string | null
    investmentExpectation?: DecimalNullableFilter<"Project"> | Decimal | DecimalJsLike | number | string | null
    area?: DecimalNullableFilter<"Project"> | Decimal | DecimalJsLike | number | string | null
    initialBudget?: DecimalNullableFilter<"Project"> | Decimal | DecimalJsLike | number | string | null
    expectedBudget?: DecimalNullableFilter<"Project"> | Decimal | DecimalJsLike | number | string | null
    actualBudget?: DecimalNullableFilter<"Project"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeNullableFilter<"Project"> | Date | string | null
    startDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    expectedEndDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    coverUrl?: StringNullableFilter<"Project"> | string | null
    client?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    details?: XOR<ProjectDetailNullableScalarRelationFilter, ProjectDetailWhereInput> | null
    designPhases?: ProjectPhaseListRelationFilter
    constructionPhases?: ConstructionPhaseListRelationFilter
    documents?: ProjectDocumentListRelationFilter
  }, "id" | "slug">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrderInput | SortOrder
    slug?: SortOrder
    title?: SortOrder
    status?: SortOrderInput | SortOrder
    projectType?: SortOrderInput | SortOrder
    developmentType?: SortOrderInput | SortOrder
    investmentExpectation?: SortOrderInput | SortOrder
    area?: SortOrderInput | SortOrder
    initialBudget?: SortOrderInput | SortOrder
    expectedBudget?: SortOrderInput | SortOrder
    actualBudget?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    expectedEndDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    coverUrl?: SortOrderInput | SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _avg?: ProjectAvgOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
    _sum?: ProjectSumOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    clientId?: StringNullableWithAggregatesFilter<"Project"> | string | null
    slug?: StringWithAggregatesFilter<"Project"> | string
    title?: StringWithAggregatesFilter<"Project"> | string
    status?: StringNullableWithAggregatesFilter<"Project"> | string | null
    projectType?: StringNullableWithAggregatesFilter<"Project"> | string | null
    developmentType?: StringNullableWithAggregatesFilter<"Project"> | string | null
    investmentExpectation?: DecimalNullableWithAggregatesFilter<"Project"> | Decimal | DecimalJsLike | number | string | null
    area?: DecimalNullableWithAggregatesFilter<"Project"> | Decimal | DecimalJsLike | number | string | null
    initialBudget?: DecimalNullableWithAggregatesFilter<"Project"> | Decimal | DecimalJsLike | number | string | null
    expectedBudget?: DecimalNullableWithAggregatesFilter<"Project"> | Decimal | DecimalJsLike | number | string | null
    actualBudget?: DecimalNullableWithAggregatesFilter<"Project"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"Project"> | Date | string | null
    startDate?: DateTimeNullableWithAggregatesFilter<"Project"> | Date | string | null
    expectedEndDate?: DateTimeNullableWithAggregatesFilter<"Project"> | Date | string | null
    endDate?: DateTimeNullableWithAggregatesFilter<"Project"> | Date | string | null
    coverUrl?: StringNullableWithAggregatesFilter<"Project"> | string | null
  }

  export type ProjectDetailWhereInput = {
    AND?: ProjectDetailWhereInput | ProjectDetailWhereInput[]
    OR?: ProjectDetailWhereInput[]
    NOT?: ProjectDetailWhereInput | ProjectDetailWhereInput[]
    id?: StringFilter<"ProjectDetail"> | string
    projectId?: StringFilter<"ProjectDetail"> | string
    type?: StringNullableFilter<"ProjectDetail"> | string | null
    standard?: StringNullableFilter<"ProjectDetail"> | string | null
    technicalManager?: StringNullableFilter<"ProjectDetail"> | string | null
    postalCode?: StringNullableFilter<"ProjectDetail"> | string | null
    country?: StringNullableFilter<"ProjectDetail"> | string | null
    state?: StringNullableFilter<"ProjectDetail"> | string | null
    city?: StringNullableFilter<"ProjectDetail"> | string | null
    neighborhood?: StringNullableFilter<"ProjectDetail"> | string | null
    street?: StringNullableFilter<"ProjectDetail"> | string | null
    number?: StringNullableFilter<"ProjectDetail"> | string | null
    complement?: StringNullableFilter<"ProjectDetail"> | string | null
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type ProjectDetailOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    type?: SortOrderInput | SortOrder
    standard?: SortOrderInput | SortOrder
    technicalManager?: SortOrderInput | SortOrder
    postalCode?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    neighborhood?: SortOrderInput | SortOrder
    street?: SortOrderInput | SortOrder
    number?: SortOrderInput | SortOrder
    complement?: SortOrderInput | SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type ProjectDetailWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    projectId?: string
    AND?: ProjectDetailWhereInput | ProjectDetailWhereInput[]
    OR?: ProjectDetailWhereInput[]
    NOT?: ProjectDetailWhereInput | ProjectDetailWhereInput[]
    type?: StringNullableFilter<"ProjectDetail"> | string | null
    standard?: StringNullableFilter<"ProjectDetail"> | string | null
    technicalManager?: StringNullableFilter<"ProjectDetail"> | string | null
    postalCode?: StringNullableFilter<"ProjectDetail"> | string | null
    country?: StringNullableFilter<"ProjectDetail"> | string | null
    state?: StringNullableFilter<"ProjectDetail"> | string | null
    city?: StringNullableFilter<"ProjectDetail"> | string | null
    neighborhood?: StringNullableFilter<"ProjectDetail"> | string | null
    street?: StringNullableFilter<"ProjectDetail"> | string | null
    number?: StringNullableFilter<"ProjectDetail"> | string | null
    complement?: StringNullableFilter<"ProjectDetail"> | string | null
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id" | "projectId">

  export type ProjectDetailOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    type?: SortOrderInput | SortOrder
    standard?: SortOrderInput | SortOrder
    technicalManager?: SortOrderInput | SortOrder
    postalCode?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    neighborhood?: SortOrderInput | SortOrder
    street?: SortOrderInput | SortOrder
    number?: SortOrderInput | SortOrder
    complement?: SortOrderInput | SortOrder
    _count?: ProjectDetailCountOrderByAggregateInput
    _max?: ProjectDetailMaxOrderByAggregateInput
    _min?: ProjectDetailMinOrderByAggregateInput
  }

  export type ProjectDetailScalarWhereWithAggregatesInput = {
    AND?: ProjectDetailScalarWhereWithAggregatesInput | ProjectDetailScalarWhereWithAggregatesInput[]
    OR?: ProjectDetailScalarWhereWithAggregatesInput[]
    NOT?: ProjectDetailScalarWhereWithAggregatesInput | ProjectDetailScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProjectDetail"> | string
    projectId?: StringWithAggregatesFilter<"ProjectDetail"> | string
    type?: StringNullableWithAggregatesFilter<"ProjectDetail"> | string | null
    standard?: StringNullableWithAggregatesFilter<"ProjectDetail"> | string | null
    technicalManager?: StringNullableWithAggregatesFilter<"ProjectDetail"> | string | null
    postalCode?: StringNullableWithAggregatesFilter<"ProjectDetail"> | string | null
    country?: StringNullableWithAggregatesFilter<"ProjectDetail"> | string | null
    state?: StringNullableWithAggregatesFilter<"ProjectDetail"> | string | null
    city?: StringNullableWithAggregatesFilter<"ProjectDetail"> | string | null
    neighborhood?: StringNullableWithAggregatesFilter<"ProjectDetail"> | string | null
    street?: StringNullableWithAggregatesFilter<"ProjectDetail"> | string | null
    number?: StringNullableWithAggregatesFilter<"ProjectDetail"> | string | null
    complement?: StringNullableWithAggregatesFilter<"ProjectDetail"> | string | null
  }

  export type ProjectPhaseWhereInput = {
    AND?: ProjectPhaseWhereInput | ProjectPhaseWhereInput[]
    OR?: ProjectPhaseWhereInput[]
    NOT?: ProjectPhaseWhereInput | ProjectPhaseWhereInput[]
    id?: StringFilter<"ProjectPhase"> | string
    projectId?: StringFilter<"ProjectPhase"> | string
    name?: StringFilter<"ProjectPhase"> | string
    status?: StringNullableFilter<"ProjectPhase"> | string | null
    startDate?: DateTimeNullableFilter<"ProjectPhase"> | Date | string | null
    expectedEndDate?: DateTimeNullableFilter<"ProjectPhase"> | Date | string | null
    endDate?: DateTimeNullableFilter<"ProjectPhase"> | Date | string | null
    notes?: StringNullableFilter<"ProjectPhase"> | string | null
    order?: IntNullableFilter<"ProjectPhase"> | number | null
    createdAt?: DateTimeNullableFilter<"ProjectPhase"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"ProjectPhase"> | Date | string | null
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    tasks?: ProjectPhaseTaskListRelationFilter
  }

  export type ProjectPhaseOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    status?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    expectedEndDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    order?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    project?: ProjectOrderByWithRelationInput
    tasks?: ProjectPhaseTaskOrderByRelationAggregateInput
  }

  export type ProjectPhaseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectPhaseWhereInput | ProjectPhaseWhereInput[]
    OR?: ProjectPhaseWhereInput[]
    NOT?: ProjectPhaseWhereInput | ProjectPhaseWhereInput[]
    projectId?: StringFilter<"ProjectPhase"> | string
    name?: StringFilter<"ProjectPhase"> | string
    status?: StringNullableFilter<"ProjectPhase"> | string | null
    startDate?: DateTimeNullableFilter<"ProjectPhase"> | Date | string | null
    expectedEndDate?: DateTimeNullableFilter<"ProjectPhase"> | Date | string | null
    endDate?: DateTimeNullableFilter<"ProjectPhase"> | Date | string | null
    notes?: StringNullableFilter<"ProjectPhase"> | string | null
    order?: IntNullableFilter<"ProjectPhase"> | number | null
    createdAt?: DateTimeNullableFilter<"ProjectPhase"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"ProjectPhase"> | Date | string | null
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    tasks?: ProjectPhaseTaskListRelationFilter
  }, "id">

  export type ProjectPhaseOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    status?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    expectedEndDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    order?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: ProjectPhaseCountOrderByAggregateInput
    _avg?: ProjectPhaseAvgOrderByAggregateInput
    _max?: ProjectPhaseMaxOrderByAggregateInput
    _min?: ProjectPhaseMinOrderByAggregateInput
    _sum?: ProjectPhaseSumOrderByAggregateInput
  }

  export type ProjectPhaseScalarWhereWithAggregatesInput = {
    AND?: ProjectPhaseScalarWhereWithAggregatesInput | ProjectPhaseScalarWhereWithAggregatesInput[]
    OR?: ProjectPhaseScalarWhereWithAggregatesInput[]
    NOT?: ProjectPhaseScalarWhereWithAggregatesInput | ProjectPhaseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProjectPhase"> | string
    projectId?: StringWithAggregatesFilter<"ProjectPhase"> | string
    name?: StringWithAggregatesFilter<"ProjectPhase"> | string
    status?: StringNullableWithAggregatesFilter<"ProjectPhase"> | string | null
    startDate?: DateTimeNullableWithAggregatesFilter<"ProjectPhase"> | Date | string | null
    expectedEndDate?: DateTimeNullableWithAggregatesFilter<"ProjectPhase"> | Date | string | null
    endDate?: DateTimeNullableWithAggregatesFilter<"ProjectPhase"> | Date | string | null
    notes?: StringNullableWithAggregatesFilter<"ProjectPhase"> | string | null
    order?: IntNullableWithAggregatesFilter<"ProjectPhase"> | number | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"ProjectPhase"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"ProjectPhase"> | Date | string | null
  }

  export type ProjectPhaseTaskWhereInput = {
    AND?: ProjectPhaseTaskWhereInput | ProjectPhaseTaskWhereInput[]
    OR?: ProjectPhaseTaskWhereInput[]
    NOT?: ProjectPhaseTaskWhereInput | ProjectPhaseTaskWhereInput[]
    id?: StringFilter<"ProjectPhaseTask"> | string
    phaseId?: StringFilter<"ProjectPhaseTask"> | string
    name?: StringFilter<"ProjectPhaseTask"> | string
    status?: StringNullableFilter<"ProjectPhaseTask"> | string | null
    responsible?: StringNullableFilter<"ProjectPhaseTask"> | string | null
    startDate?: DateTimeNullableFilter<"ProjectPhaseTask"> | Date | string | null
    expectedEndDate?: DateTimeNullableFilter<"ProjectPhaseTask"> | Date | string | null
    endDate?: DateTimeNullableFilter<"ProjectPhaseTask"> | Date | string | null
    notes?: StringNullableFilter<"ProjectPhaseTask"> | string | null
    priority?: IntNullableFilter<"ProjectPhaseTask"> | number | null
    createdAt?: DateTimeNullableFilter<"ProjectPhaseTask"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"ProjectPhaseTask"> | Date | string | null
    phase?: XOR<ProjectPhaseScalarRelationFilter, ProjectPhaseWhereInput>
  }

  export type ProjectPhaseTaskOrderByWithRelationInput = {
    id?: SortOrder
    phaseId?: SortOrder
    name?: SortOrder
    status?: SortOrderInput | SortOrder
    responsible?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    expectedEndDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    priority?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    phase?: ProjectPhaseOrderByWithRelationInput
  }

  export type ProjectPhaseTaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectPhaseTaskWhereInput | ProjectPhaseTaskWhereInput[]
    OR?: ProjectPhaseTaskWhereInput[]
    NOT?: ProjectPhaseTaskWhereInput | ProjectPhaseTaskWhereInput[]
    phaseId?: StringFilter<"ProjectPhaseTask"> | string
    name?: StringFilter<"ProjectPhaseTask"> | string
    status?: StringNullableFilter<"ProjectPhaseTask"> | string | null
    responsible?: StringNullableFilter<"ProjectPhaseTask"> | string | null
    startDate?: DateTimeNullableFilter<"ProjectPhaseTask"> | Date | string | null
    expectedEndDate?: DateTimeNullableFilter<"ProjectPhaseTask"> | Date | string | null
    endDate?: DateTimeNullableFilter<"ProjectPhaseTask"> | Date | string | null
    notes?: StringNullableFilter<"ProjectPhaseTask"> | string | null
    priority?: IntNullableFilter<"ProjectPhaseTask"> | number | null
    createdAt?: DateTimeNullableFilter<"ProjectPhaseTask"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"ProjectPhaseTask"> | Date | string | null
    phase?: XOR<ProjectPhaseScalarRelationFilter, ProjectPhaseWhereInput>
  }, "id">

  export type ProjectPhaseTaskOrderByWithAggregationInput = {
    id?: SortOrder
    phaseId?: SortOrder
    name?: SortOrder
    status?: SortOrderInput | SortOrder
    responsible?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    expectedEndDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    priority?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: ProjectPhaseTaskCountOrderByAggregateInput
    _avg?: ProjectPhaseTaskAvgOrderByAggregateInput
    _max?: ProjectPhaseTaskMaxOrderByAggregateInput
    _min?: ProjectPhaseTaskMinOrderByAggregateInput
    _sum?: ProjectPhaseTaskSumOrderByAggregateInput
  }

  export type ProjectPhaseTaskScalarWhereWithAggregatesInput = {
    AND?: ProjectPhaseTaskScalarWhereWithAggregatesInput | ProjectPhaseTaskScalarWhereWithAggregatesInput[]
    OR?: ProjectPhaseTaskScalarWhereWithAggregatesInput[]
    NOT?: ProjectPhaseTaskScalarWhereWithAggregatesInput | ProjectPhaseTaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProjectPhaseTask"> | string
    phaseId?: StringWithAggregatesFilter<"ProjectPhaseTask"> | string
    name?: StringWithAggregatesFilter<"ProjectPhaseTask"> | string
    status?: StringNullableWithAggregatesFilter<"ProjectPhaseTask"> | string | null
    responsible?: StringNullableWithAggregatesFilter<"ProjectPhaseTask"> | string | null
    startDate?: DateTimeNullableWithAggregatesFilter<"ProjectPhaseTask"> | Date | string | null
    expectedEndDate?: DateTimeNullableWithAggregatesFilter<"ProjectPhaseTask"> | Date | string | null
    endDate?: DateTimeNullableWithAggregatesFilter<"ProjectPhaseTask"> | Date | string | null
    notes?: StringNullableWithAggregatesFilter<"ProjectPhaseTask"> | string | null
    priority?: IntNullableWithAggregatesFilter<"ProjectPhaseTask"> | number | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"ProjectPhaseTask"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"ProjectPhaseTask"> | Date | string | null
  }

  export type ConstructionPhaseWhereInput = {
    AND?: ConstructionPhaseWhereInput | ConstructionPhaseWhereInput[]
    OR?: ConstructionPhaseWhereInput[]
    NOT?: ConstructionPhaseWhereInput | ConstructionPhaseWhereInput[]
    id?: StringFilter<"ConstructionPhase"> | string
    projectId?: StringFilter<"ConstructionPhase"> | string
    name?: StringFilter<"ConstructionPhase"> | string
    status?: StringFilter<"ConstructionPhase"> | string
    startDate?: DateTimeNullableFilter<"ConstructionPhase"> | Date | string | null
    expectedEndDate?: DateTimeNullableFilter<"ConstructionPhase"> | Date | string | null
    endDate?: DateTimeNullableFilter<"ConstructionPhase"> | Date | string | null
    budget?: DecimalNullableFilter<"ConstructionPhase"> | Decimal | DecimalJsLike | number | string | null
    actualCost?: DecimalNullableFilter<"ConstructionPhase"> | Decimal | DecimalJsLike | number | string | null
    notes?: StringNullableFilter<"ConstructionPhase"> | string | null
    responsible?: StringNullableFilter<"ConstructionPhase"> | string | null
    order?: IntNullableFilter<"ConstructionPhase"> | number | null
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    tasks?: ConstructionTaskListRelationFilter
  }

  export type ConstructionPhaseOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    status?: SortOrder
    startDate?: SortOrderInput | SortOrder
    expectedEndDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    budget?: SortOrderInput | SortOrder
    actualCost?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    responsible?: SortOrderInput | SortOrder
    order?: SortOrderInput | SortOrder
    project?: ProjectOrderByWithRelationInput
    tasks?: ConstructionTaskOrderByRelationAggregateInput
  }

  export type ConstructionPhaseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ConstructionPhaseWhereInput | ConstructionPhaseWhereInput[]
    OR?: ConstructionPhaseWhereInput[]
    NOT?: ConstructionPhaseWhereInput | ConstructionPhaseWhereInput[]
    projectId?: StringFilter<"ConstructionPhase"> | string
    name?: StringFilter<"ConstructionPhase"> | string
    status?: StringFilter<"ConstructionPhase"> | string
    startDate?: DateTimeNullableFilter<"ConstructionPhase"> | Date | string | null
    expectedEndDate?: DateTimeNullableFilter<"ConstructionPhase"> | Date | string | null
    endDate?: DateTimeNullableFilter<"ConstructionPhase"> | Date | string | null
    budget?: DecimalNullableFilter<"ConstructionPhase"> | Decimal | DecimalJsLike | number | string | null
    actualCost?: DecimalNullableFilter<"ConstructionPhase"> | Decimal | DecimalJsLike | number | string | null
    notes?: StringNullableFilter<"ConstructionPhase"> | string | null
    responsible?: StringNullableFilter<"ConstructionPhase"> | string | null
    order?: IntNullableFilter<"ConstructionPhase"> | number | null
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    tasks?: ConstructionTaskListRelationFilter
  }, "id">

  export type ConstructionPhaseOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    status?: SortOrder
    startDate?: SortOrderInput | SortOrder
    expectedEndDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    budget?: SortOrderInput | SortOrder
    actualCost?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    responsible?: SortOrderInput | SortOrder
    order?: SortOrderInput | SortOrder
    _count?: ConstructionPhaseCountOrderByAggregateInput
    _avg?: ConstructionPhaseAvgOrderByAggregateInput
    _max?: ConstructionPhaseMaxOrderByAggregateInput
    _min?: ConstructionPhaseMinOrderByAggregateInput
    _sum?: ConstructionPhaseSumOrderByAggregateInput
  }

  export type ConstructionPhaseScalarWhereWithAggregatesInput = {
    AND?: ConstructionPhaseScalarWhereWithAggregatesInput | ConstructionPhaseScalarWhereWithAggregatesInput[]
    OR?: ConstructionPhaseScalarWhereWithAggregatesInput[]
    NOT?: ConstructionPhaseScalarWhereWithAggregatesInput | ConstructionPhaseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ConstructionPhase"> | string
    projectId?: StringWithAggregatesFilter<"ConstructionPhase"> | string
    name?: StringWithAggregatesFilter<"ConstructionPhase"> | string
    status?: StringWithAggregatesFilter<"ConstructionPhase"> | string
    startDate?: DateTimeNullableWithAggregatesFilter<"ConstructionPhase"> | Date | string | null
    expectedEndDate?: DateTimeNullableWithAggregatesFilter<"ConstructionPhase"> | Date | string | null
    endDate?: DateTimeNullableWithAggregatesFilter<"ConstructionPhase"> | Date | string | null
    budget?: DecimalNullableWithAggregatesFilter<"ConstructionPhase"> | Decimal | DecimalJsLike | number | string | null
    actualCost?: DecimalNullableWithAggregatesFilter<"ConstructionPhase"> | Decimal | DecimalJsLike | number | string | null
    notes?: StringNullableWithAggregatesFilter<"ConstructionPhase"> | string | null
    responsible?: StringNullableWithAggregatesFilter<"ConstructionPhase"> | string | null
    order?: IntNullableWithAggregatesFilter<"ConstructionPhase"> | number | null
  }

  export type ConstructionTaskWhereInput = {
    AND?: ConstructionTaskWhereInput | ConstructionTaskWhereInput[]
    OR?: ConstructionTaskWhereInput[]
    NOT?: ConstructionTaskWhereInput | ConstructionTaskWhereInput[]
    id?: StringFilter<"ConstructionTask"> | string
    phaseId?: StringFilter<"ConstructionTask"> | string
    name?: StringFilter<"ConstructionTask"> | string
    status?: StringFilter<"ConstructionTask"> | string
    budget?: DecimalNullableFilter<"ConstructionTask"> | Decimal | DecimalJsLike | number | string | null
    actualCost?: DecimalNullableFilter<"ConstructionTask"> | Decimal | DecimalJsLike | number | string | null
    startDate?: DateTimeNullableFilter<"ConstructionTask"> | Date | string | null
    expectedEndDate?: DateTimeNullableFilter<"ConstructionTask"> | Date | string | null
    endDate?: DateTimeNullableFilter<"ConstructionTask"> | Date | string | null
    notes?: StringNullableFilter<"ConstructionTask"> | string | null
    responsible?: StringNullableFilter<"ConstructionTask"> | string | null
    priority?: IntNullableFilter<"ConstructionTask"> | number | null
    phase?: XOR<ConstructionPhaseScalarRelationFilter, ConstructionPhaseWhereInput>
  }

  export type ConstructionTaskOrderByWithRelationInput = {
    id?: SortOrder
    phaseId?: SortOrder
    name?: SortOrder
    status?: SortOrder
    budget?: SortOrderInput | SortOrder
    actualCost?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    expectedEndDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    responsible?: SortOrderInput | SortOrder
    priority?: SortOrderInput | SortOrder
    phase?: ConstructionPhaseOrderByWithRelationInput
  }

  export type ConstructionTaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ConstructionTaskWhereInput | ConstructionTaskWhereInput[]
    OR?: ConstructionTaskWhereInput[]
    NOT?: ConstructionTaskWhereInput | ConstructionTaskWhereInput[]
    phaseId?: StringFilter<"ConstructionTask"> | string
    name?: StringFilter<"ConstructionTask"> | string
    status?: StringFilter<"ConstructionTask"> | string
    budget?: DecimalNullableFilter<"ConstructionTask"> | Decimal | DecimalJsLike | number | string | null
    actualCost?: DecimalNullableFilter<"ConstructionTask"> | Decimal | DecimalJsLike | number | string | null
    startDate?: DateTimeNullableFilter<"ConstructionTask"> | Date | string | null
    expectedEndDate?: DateTimeNullableFilter<"ConstructionTask"> | Date | string | null
    endDate?: DateTimeNullableFilter<"ConstructionTask"> | Date | string | null
    notes?: StringNullableFilter<"ConstructionTask"> | string | null
    responsible?: StringNullableFilter<"ConstructionTask"> | string | null
    priority?: IntNullableFilter<"ConstructionTask"> | number | null
    phase?: XOR<ConstructionPhaseScalarRelationFilter, ConstructionPhaseWhereInput>
  }, "id">

  export type ConstructionTaskOrderByWithAggregationInput = {
    id?: SortOrder
    phaseId?: SortOrder
    name?: SortOrder
    status?: SortOrder
    budget?: SortOrderInput | SortOrder
    actualCost?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    expectedEndDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    responsible?: SortOrderInput | SortOrder
    priority?: SortOrderInput | SortOrder
    _count?: ConstructionTaskCountOrderByAggregateInput
    _avg?: ConstructionTaskAvgOrderByAggregateInput
    _max?: ConstructionTaskMaxOrderByAggregateInput
    _min?: ConstructionTaskMinOrderByAggregateInput
    _sum?: ConstructionTaskSumOrderByAggregateInput
  }

  export type ConstructionTaskScalarWhereWithAggregatesInput = {
    AND?: ConstructionTaskScalarWhereWithAggregatesInput | ConstructionTaskScalarWhereWithAggregatesInput[]
    OR?: ConstructionTaskScalarWhereWithAggregatesInput[]
    NOT?: ConstructionTaskScalarWhereWithAggregatesInput | ConstructionTaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ConstructionTask"> | string
    phaseId?: StringWithAggregatesFilter<"ConstructionTask"> | string
    name?: StringWithAggregatesFilter<"ConstructionTask"> | string
    status?: StringWithAggregatesFilter<"ConstructionTask"> | string
    budget?: DecimalNullableWithAggregatesFilter<"ConstructionTask"> | Decimal | DecimalJsLike | number | string | null
    actualCost?: DecimalNullableWithAggregatesFilter<"ConstructionTask"> | Decimal | DecimalJsLike | number | string | null
    startDate?: DateTimeNullableWithAggregatesFilter<"ConstructionTask"> | Date | string | null
    expectedEndDate?: DateTimeNullableWithAggregatesFilter<"ConstructionTask"> | Date | string | null
    endDate?: DateTimeNullableWithAggregatesFilter<"ConstructionTask"> | Date | string | null
    notes?: StringNullableWithAggregatesFilter<"ConstructionTask"> | string | null
    responsible?: StringNullableWithAggregatesFilter<"ConstructionTask"> | string | null
    priority?: IntNullableWithAggregatesFilter<"ConstructionTask"> | number | null
  }

  export type ProjectDocumentWhereInput = {
    AND?: ProjectDocumentWhereInput | ProjectDocumentWhereInput[]
    OR?: ProjectDocumentWhereInput[]
    NOT?: ProjectDocumentWhereInput | ProjectDocumentWhereInput[]
    id?: StringFilter<"ProjectDocument"> | string
    projectId?: StringFilter<"ProjectDocument"> | string
    name?: StringFilter<"ProjectDocument"> | string
    type?: StringFilter<"ProjectDocument"> | string
    link?: StringFilter<"ProjectDocument"> | string
    notes?: StringNullableFilter<"ProjectDocument"> | string | null
    uploadedAt?: DateTimeNullableFilter<"ProjectDocument"> | Date | string | null
    uploadedById?: StringNullableFilter<"ProjectDocument"> | string | null
    visibleToClient?: BoolNullableFilter<"ProjectDocument"> | boolean | null
    description?: StringNullableFilter<"ProjectDocument"> | string | null
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    uploadedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type ProjectDocumentOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    link?: SortOrder
    notes?: SortOrderInput | SortOrder
    uploadedAt?: SortOrderInput | SortOrder
    uploadedById?: SortOrderInput | SortOrder
    visibleToClient?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    project?: ProjectOrderByWithRelationInput
    uploadedBy?: UserOrderByWithRelationInput
  }

  export type ProjectDocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectDocumentWhereInput | ProjectDocumentWhereInput[]
    OR?: ProjectDocumentWhereInput[]
    NOT?: ProjectDocumentWhereInput | ProjectDocumentWhereInput[]
    projectId?: StringFilter<"ProjectDocument"> | string
    name?: StringFilter<"ProjectDocument"> | string
    type?: StringFilter<"ProjectDocument"> | string
    link?: StringFilter<"ProjectDocument"> | string
    notes?: StringNullableFilter<"ProjectDocument"> | string | null
    uploadedAt?: DateTimeNullableFilter<"ProjectDocument"> | Date | string | null
    uploadedById?: StringNullableFilter<"ProjectDocument"> | string | null
    visibleToClient?: BoolNullableFilter<"ProjectDocument"> | boolean | null
    description?: StringNullableFilter<"ProjectDocument"> | string | null
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    uploadedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type ProjectDocumentOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    link?: SortOrder
    notes?: SortOrderInput | SortOrder
    uploadedAt?: SortOrderInput | SortOrder
    uploadedById?: SortOrderInput | SortOrder
    visibleToClient?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    _count?: ProjectDocumentCountOrderByAggregateInput
    _max?: ProjectDocumentMaxOrderByAggregateInput
    _min?: ProjectDocumentMinOrderByAggregateInput
  }

  export type ProjectDocumentScalarWhereWithAggregatesInput = {
    AND?: ProjectDocumentScalarWhereWithAggregatesInput | ProjectDocumentScalarWhereWithAggregatesInput[]
    OR?: ProjectDocumentScalarWhereWithAggregatesInput[]
    NOT?: ProjectDocumentScalarWhereWithAggregatesInput | ProjectDocumentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProjectDocument"> | string
    projectId?: StringWithAggregatesFilter<"ProjectDocument"> | string
    name?: StringWithAggregatesFilter<"ProjectDocument"> | string
    type?: StringWithAggregatesFilter<"ProjectDocument"> | string
    link?: StringWithAggregatesFilter<"ProjectDocument"> | string
    notes?: StringNullableWithAggregatesFilter<"ProjectDocument"> | string | null
    uploadedAt?: DateTimeNullableWithAggregatesFilter<"ProjectDocument"> | Date | string | null
    uploadedById?: StringNullableWithAggregatesFilter<"ProjectDocument"> | string | null
    visibleToClient?: BoolNullableWithAggregatesFilter<"ProjectDocument"> | boolean | null
    description?: StringNullableWithAggregatesFilter<"ProjectDocument"> | string | null
  }

  export type BudgetWhereInput = {
    AND?: BudgetWhereInput | BudgetWhereInput[]
    OR?: BudgetWhereInput[]
    NOT?: BudgetWhereInput | BudgetWhereInput[]
    id?: StringFilter<"Budget"> | string
    clientId?: StringNullableFilter<"Budget"> | string | null
    totalValue?: DecimalFilter<"Budget"> | Decimal | DecimalJsLike | number | string
    status?: StringNullableFilter<"Budget"> | string | null
    version?: IntNullableFilter<"Budget"> | number | null
    sentAt?: DateTimeNullableFilter<"Budget"> | Date | string | null
    acceptedAt?: DateTimeNullableFilter<"Budget"> | Date | string | null
    paymentTerms?: StringNullableFilter<"Budget"> | string | null
    summary?: StringNullableFilter<"Budget"> | string | null
    notes?: StringNullableFilter<"Budget"> | string | null
    fileUrl?: StringNullableFilter<"Budget"> | string | null
    title?: StringNullableFilter<"Budget"> | string | null
    client?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type BudgetOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrderInput | SortOrder
    totalValue?: SortOrder
    status?: SortOrderInput | SortOrder
    version?: SortOrderInput | SortOrder
    sentAt?: SortOrderInput | SortOrder
    acceptedAt?: SortOrderInput | SortOrder
    paymentTerms?: SortOrderInput | SortOrder
    summary?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    fileUrl?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    client?: UserOrderByWithRelationInput
  }

  export type BudgetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BudgetWhereInput | BudgetWhereInput[]
    OR?: BudgetWhereInput[]
    NOT?: BudgetWhereInput | BudgetWhereInput[]
    clientId?: StringNullableFilter<"Budget"> | string | null
    totalValue?: DecimalFilter<"Budget"> | Decimal | DecimalJsLike | number | string
    status?: StringNullableFilter<"Budget"> | string | null
    version?: IntNullableFilter<"Budget"> | number | null
    sentAt?: DateTimeNullableFilter<"Budget"> | Date | string | null
    acceptedAt?: DateTimeNullableFilter<"Budget"> | Date | string | null
    paymentTerms?: StringNullableFilter<"Budget"> | string | null
    summary?: StringNullableFilter<"Budget"> | string | null
    notes?: StringNullableFilter<"Budget"> | string | null
    fileUrl?: StringNullableFilter<"Budget"> | string | null
    title?: StringNullableFilter<"Budget"> | string | null
    client?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type BudgetOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrderInput | SortOrder
    totalValue?: SortOrder
    status?: SortOrderInput | SortOrder
    version?: SortOrderInput | SortOrder
    sentAt?: SortOrderInput | SortOrder
    acceptedAt?: SortOrderInput | SortOrder
    paymentTerms?: SortOrderInput | SortOrder
    summary?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    fileUrl?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    _count?: BudgetCountOrderByAggregateInput
    _avg?: BudgetAvgOrderByAggregateInput
    _max?: BudgetMaxOrderByAggregateInput
    _min?: BudgetMinOrderByAggregateInput
    _sum?: BudgetSumOrderByAggregateInput
  }

  export type BudgetScalarWhereWithAggregatesInput = {
    AND?: BudgetScalarWhereWithAggregatesInput | BudgetScalarWhereWithAggregatesInput[]
    OR?: BudgetScalarWhereWithAggregatesInput[]
    NOT?: BudgetScalarWhereWithAggregatesInput | BudgetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Budget"> | string
    clientId?: StringNullableWithAggregatesFilter<"Budget"> | string | null
    totalValue?: DecimalWithAggregatesFilter<"Budget"> | Decimal | DecimalJsLike | number | string
    status?: StringNullableWithAggregatesFilter<"Budget"> | string | null
    version?: IntNullableWithAggregatesFilter<"Budget"> | number | null
    sentAt?: DateTimeNullableWithAggregatesFilter<"Budget"> | Date | string | null
    acceptedAt?: DateTimeNullableWithAggregatesFilter<"Budget"> | Date | string | null
    paymentTerms?: StringNullableWithAggregatesFilter<"Budget"> | string | null
    summary?: StringNullableWithAggregatesFilter<"Budget"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Budget"> | string | null
    fileUrl?: StringNullableWithAggregatesFilter<"Budget"> | string | null
    title?: StringNullableWithAggregatesFilter<"Budget"> | string | null
  }

  export type ExecutionCostEstimateWhereInput = {
    AND?: ExecutionCostEstimateWhereInput | ExecutionCostEstimateWhereInput[]
    OR?: ExecutionCostEstimateWhereInput[]
    NOT?: ExecutionCostEstimateWhereInput | ExecutionCostEstimateWhereInput[]
    id?: IntFilter<"ExecutionCostEstimate"> | number
    item?: StringFilter<"ExecutionCostEstimate"> | string
    cme?: DecimalNullableFilter<"ExecutionCostEstimate"> | Decimal | DecimalJsLike | number | string | null
    r?: DecimalNullableFilter<"ExecutionCostEstimate"> | Decimal | DecimalJsLike | number | string | null
    re?: DecimalNullableFilter<"ExecutionCostEstimate"> | Decimal | DecimalJsLike | number | string | null
    ur?: DecimalNullableFilter<"ExecutionCostEstimate"> | Decimal | DecimalJsLike | number | string | null
    eur?: DecimalNullableFilter<"ExecutionCostEstimate"> | Decimal | DecimalJsLike | number | string | null
    min?: DecimalNullableFilter<"ExecutionCostEstimate"> | Decimal | DecimalJsLike | number | string | null
  }

  export type ExecutionCostEstimateOrderByWithRelationInput = {
    id?: SortOrder
    item?: SortOrder
    cme?: SortOrderInput | SortOrder
    r?: SortOrderInput | SortOrder
    re?: SortOrderInput | SortOrder
    ur?: SortOrderInput | SortOrder
    eur?: SortOrderInput | SortOrder
    min?: SortOrderInput | SortOrder
  }

  export type ExecutionCostEstimateWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ExecutionCostEstimateWhereInput | ExecutionCostEstimateWhereInput[]
    OR?: ExecutionCostEstimateWhereInput[]
    NOT?: ExecutionCostEstimateWhereInput | ExecutionCostEstimateWhereInput[]
    item?: StringFilter<"ExecutionCostEstimate"> | string
    cme?: DecimalNullableFilter<"ExecutionCostEstimate"> | Decimal | DecimalJsLike | number | string | null
    r?: DecimalNullableFilter<"ExecutionCostEstimate"> | Decimal | DecimalJsLike | number | string | null
    re?: DecimalNullableFilter<"ExecutionCostEstimate"> | Decimal | DecimalJsLike | number | string | null
    ur?: DecimalNullableFilter<"ExecutionCostEstimate"> | Decimal | DecimalJsLike | number | string | null
    eur?: DecimalNullableFilter<"ExecutionCostEstimate"> | Decimal | DecimalJsLike | number | string | null
    min?: DecimalNullableFilter<"ExecutionCostEstimate"> | Decimal | DecimalJsLike | number | string | null
  }, "id">

  export type ExecutionCostEstimateOrderByWithAggregationInput = {
    id?: SortOrder
    item?: SortOrder
    cme?: SortOrderInput | SortOrder
    r?: SortOrderInput | SortOrder
    re?: SortOrderInput | SortOrder
    ur?: SortOrderInput | SortOrder
    eur?: SortOrderInput | SortOrder
    min?: SortOrderInput | SortOrder
    _count?: ExecutionCostEstimateCountOrderByAggregateInput
    _avg?: ExecutionCostEstimateAvgOrderByAggregateInput
    _max?: ExecutionCostEstimateMaxOrderByAggregateInput
    _min?: ExecutionCostEstimateMinOrderByAggregateInput
    _sum?: ExecutionCostEstimateSumOrderByAggregateInput
  }

  export type ExecutionCostEstimateScalarWhereWithAggregatesInput = {
    AND?: ExecutionCostEstimateScalarWhereWithAggregatesInput | ExecutionCostEstimateScalarWhereWithAggregatesInput[]
    OR?: ExecutionCostEstimateScalarWhereWithAggregatesInput[]
    NOT?: ExecutionCostEstimateScalarWhereWithAggregatesInput | ExecutionCostEstimateScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ExecutionCostEstimate"> | number
    item?: StringWithAggregatesFilter<"ExecutionCostEstimate"> | string
    cme?: DecimalNullableWithAggregatesFilter<"ExecutionCostEstimate"> | Decimal | DecimalJsLike | number | string | null
    r?: DecimalNullableWithAggregatesFilter<"ExecutionCostEstimate"> | Decimal | DecimalJsLike | number | string | null
    re?: DecimalNullableWithAggregatesFilter<"ExecutionCostEstimate"> | Decimal | DecimalJsLike | number | string | null
    ur?: DecimalNullableWithAggregatesFilter<"ExecutionCostEstimate"> | Decimal | DecimalJsLike | number | string | null
    eur?: DecimalNullableWithAggregatesFilter<"ExecutionCostEstimate"> | Decimal | DecimalJsLike | number | string | null
    min?: DecimalNullableWithAggregatesFilter<"ExecutionCostEstimate"> | Decimal | DecimalJsLike | number | string | null
  }

  export type UserCreateInput = {
    id?: string
    email: string
    emailVerified?: boolean | null
    passwordHash: string
    accountStatus?: string | null
    createdAt?: Date | string | null
    lastLogin?: Date | string | null
    userType?: string | null
    profile?: UserProfileCreateNestedOneWithoutUserInput
    tokens?: UserTokenCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutClientInput
    budgets?: BudgetCreateNestedManyWithoutClientInput
    uploadedDocs?: ProjectDocumentCreateNestedManyWithoutUploadedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    emailVerified?: boolean | null
    passwordHash: string
    accountStatus?: string | null
    createdAt?: Date | string | null
    lastLogin?: Date | string | null
    userType?: string | null
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    tokens?: UserTokenUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutClientInput
    budgets?: BudgetUncheckedCreateNestedManyWithoutClientInput
    uploadedDocs?: ProjectDocumentUncheckedCreateNestedManyWithoutUploadedByInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    accountStatus?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userType?: NullableStringFieldUpdateOperationsInput | string | null
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    tokens?: UserTokenUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutClientNestedInput
    budgets?: BudgetUpdateManyWithoutClientNestedInput
    uploadedDocs?: ProjectDocumentUpdateManyWithoutUploadedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    accountStatus?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userType?: NullableStringFieldUpdateOperationsInput | string | null
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    tokens?: UserTokenUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutClientNestedInput
    budgets?: BudgetUncheckedUpdateManyWithoutClientNestedInput
    uploadedDocs?: ProjectDocumentUncheckedUpdateManyWithoutUploadedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    emailVerified?: boolean | null
    passwordHash: string
    accountStatus?: string | null
    createdAt?: Date | string | null
    lastLogin?: Date | string | null
    userType?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    accountStatus?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userType?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    accountStatus?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userType?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserProfileCreateInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    phone?: string | null
    avatarUrl?: string | null
    birthDate?: Date | string | null
    gender?: string | null
    identityDoc?: string | null
    cpf?: string | null
    occupation?: string | null
    maritalStatus?: string | null
    hasChildren?: boolean | null
    ageGroup?: string | null
    stylePreference?: string | null
    referralSource?: string | null
    privateNotes?: string | null
    user: UserCreateNestedOneWithoutProfileInput
  }

  export type UserProfileUncheckedCreateInput = {
    id?: string
    userId: string
    firstName?: string | null
    lastName?: string | null
    phone?: string | null
    avatarUrl?: string | null
    birthDate?: Date | string | null
    gender?: string | null
    identityDoc?: string | null
    cpf?: string | null
    occupation?: string | null
    maritalStatus?: string | null
    hasChildren?: boolean | null
    ageGroup?: string | null
    stylePreference?: string | null
    referralSource?: string | null
    privateNotes?: string | null
  }

  export type UserProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    identityDoc?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null
    hasChildren?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ageGroup?: NullableStringFieldUpdateOperationsInput | string | null
    stylePreference?: NullableStringFieldUpdateOperationsInput | string | null
    referralSource?: NullableStringFieldUpdateOperationsInput | string | null
    privateNotes?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
  }

  export type UserProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    identityDoc?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null
    hasChildren?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ageGroup?: NullableStringFieldUpdateOperationsInput | string | null
    stylePreference?: NullableStringFieldUpdateOperationsInput | string | null
    referralSource?: NullableStringFieldUpdateOperationsInput | string | null
    privateNotes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserProfileCreateManyInput = {
    id?: string
    userId: string
    firstName?: string | null
    lastName?: string | null
    phone?: string | null
    avatarUrl?: string | null
    birthDate?: Date | string | null
    gender?: string | null
    identityDoc?: string | null
    cpf?: string | null
    occupation?: string | null
    maritalStatus?: string | null
    hasChildren?: boolean | null
    ageGroup?: string | null
    stylePreference?: string | null
    referralSource?: string | null
    privateNotes?: string | null
  }

  export type UserProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    identityDoc?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null
    hasChildren?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ageGroup?: NullableStringFieldUpdateOperationsInput | string | null
    stylePreference?: NullableStringFieldUpdateOperationsInput | string | null
    referralSource?: NullableStringFieldUpdateOperationsInput | string | null
    privateNotes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    identityDoc?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null
    hasChildren?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ageGroup?: NullableStringFieldUpdateOperationsInput | string | null
    stylePreference?: NullableStringFieldUpdateOperationsInput | string | null
    referralSource?: NullableStringFieldUpdateOperationsInput | string | null
    privateNotes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserTokenCreateInput = {
    id?: string
    tokenType?: string | null
    token: string
    tokenExpiry?: Date | string | null
    createdAt?: Date | string | null
    user: UserCreateNestedOneWithoutTokensInput
  }

  export type UserTokenUncheckedCreateInput = {
    id?: string
    userId: string
    tokenType?: string | null
    token: string
    tokenExpiry?: Date | string | null
    createdAt?: Date | string | null
  }

  export type UserTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenType?: NullableStringFieldUpdateOperationsInput | string | null
    token?: StringFieldUpdateOperationsInput | string
    tokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutTokensNestedInput
  }

  export type UserTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tokenType?: NullableStringFieldUpdateOperationsInput | string | null
    token?: StringFieldUpdateOperationsInput | string
    tokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserTokenCreateManyInput = {
    id?: string
    userId: string
    tokenType?: string | null
    token: string
    tokenExpiry?: Date | string | null
    createdAt?: Date | string | null
  }

  export type UserTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenType?: NullableStringFieldUpdateOperationsInput | string | null
    token?: StringFieldUpdateOperationsInput | string
    tokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tokenType?: NullableStringFieldUpdateOperationsInput | string | null
    token?: StringFieldUpdateOperationsInput | string
    tokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProjectCreateInput = {
    id?: string
    slug: string
    title: string
    status?: string | null
    projectType?: string | null
    developmentType?: string | null
    investmentExpectation?: Decimal | DecimalJsLike | number | string | null
    area?: Decimal | DecimalJsLike | number | string | null
    initialBudget?: Decimal | DecimalJsLike | number | string | null
    expectedBudget?: Decimal | DecimalJsLike | number | string | null
    actualBudget?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string | null
    startDate?: Date | string | null
    expectedEndDate?: Date | string | null
    endDate?: Date | string | null
    coverUrl?: string | null
    client?: UserCreateNestedOneWithoutProjectsInput
    details?: ProjectDetailCreateNestedOneWithoutProjectInput
    designPhases?: ProjectPhaseCreateNestedManyWithoutProjectInput
    constructionPhases?: ConstructionPhaseCreateNestedManyWithoutProjectInput
    documents?: ProjectDocumentCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    clientId?: string | null
    slug: string
    title: string
    status?: string | null
    projectType?: string | null
    developmentType?: string | null
    investmentExpectation?: Decimal | DecimalJsLike | number | string | null
    area?: Decimal | DecimalJsLike | number | string | null
    initialBudget?: Decimal | DecimalJsLike | number | string | null
    expectedBudget?: Decimal | DecimalJsLike | number | string | null
    actualBudget?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string | null
    startDate?: Date | string | null
    expectedEndDate?: Date | string | null
    endDate?: Date | string | null
    coverUrl?: string | null
    details?: ProjectDetailUncheckedCreateNestedOneWithoutProjectInput
    designPhases?: ProjectPhaseUncheckedCreateNestedManyWithoutProjectInput
    constructionPhases?: ConstructionPhaseUncheckedCreateNestedManyWithoutProjectInput
    documents?: ProjectDocumentUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    projectType?: NullableStringFieldUpdateOperationsInput | string | null
    developmentType?: NullableStringFieldUpdateOperationsInput | string | null
    investmentExpectation?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    initialBudget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    expectedBudget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualBudget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expectedEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    client?: UserUpdateOneWithoutProjectsNestedInput
    details?: ProjectDetailUpdateOneWithoutProjectNestedInput
    designPhases?: ProjectPhaseUpdateManyWithoutProjectNestedInput
    constructionPhases?: ConstructionPhaseUpdateManyWithoutProjectNestedInput
    documents?: ProjectDocumentUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    projectType?: NullableStringFieldUpdateOperationsInput | string | null
    developmentType?: NullableStringFieldUpdateOperationsInput | string | null
    investmentExpectation?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    initialBudget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    expectedBudget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualBudget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expectedEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    details?: ProjectDetailUncheckedUpdateOneWithoutProjectNestedInput
    designPhases?: ProjectPhaseUncheckedUpdateManyWithoutProjectNestedInput
    constructionPhases?: ConstructionPhaseUncheckedUpdateManyWithoutProjectNestedInput
    documents?: ProjectDocumentUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: string
    clientId?: string | null
    slug: string
    title: string
    status?: string | null
    projectType?: string | null
    developmentType?: string | null
    investmentExpectation?: Decimal | DecimalJsLike | number | string | null
    area?: Decimal | DecimalJsLike | number | string | null
    initialBudget?: Decimal | DecimalJsLike | number | string | null
    expectedBudget?: Decimal | DecimalJsLike | number | string | null
    actualBudget?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string | null
    startDate?: Date | string | null
    expectedEndDate?: Date | string | null
    endDate?: Date | string | null
    coverUrl?: string | null
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    projectType?: NullableStringFieldUpdateOperationsInput | string | null
    developmentType?: NullableStringFieldUpdateOperationsInput | string | null
    investmentExpectation?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    initialBudget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    expectedBudget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualBudget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expectedEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    projectType?: NullableStringFieldUpdateOperationsInput | string | null
    developmentType?: NullableStringFieldUpdateOperationsInput | string | null
    investmentExpectation?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    initialBudget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    expectedBudget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualBudget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expectedEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectDetailCreateInput = {
    id?: string
    type?: string | null
    standard?: string | null
    technicalManager?: string | null
    postalCode?: string | null
    country?: string | null
    state?: string | null
    city?: string | null
    neighborhood?: string | null
    street?: string | null
    number?: string | null
    complement?: string | null
    project: ProjectCreateNestedOneWithoutDetailsInput
  }

  export type ProjectDetailUncheckedCreateInput = {
    id?: string
    projectId: string
    type?: string | null
    standard?: string | null
    technicalManager?: string | null
    postalCode?: string | null
    country?: string | null
    state?: string | null
    city?: string | null
    neighborhood?: string | null
    street?: string | null
    number?: string | null
    complement?: string | null
  }

  export type ProjectDetailUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: NullableStringFieldUpdateOperationsInput | string | null
    technicalManager?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    neighborhood?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    project?: ProjectUpdateOneRequiredWithoutDetailsNestedInput
  }

  export type ProjectDetailUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: NullableStringFieldUpdateOperationsInput | string | null
    technicalManager?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    neighborhood?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    complement?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectDetailCreateManyInput = {
    id?: string
    projectId: string
    type?: string | null
    standard?: string | null
    technicalManager?: string | null
    postalCode?: string | null
    country?: string | null
    state?: string | null
    city?: string | null
    neighborhood?: string | null
    street?: string | null
    number?: string | null
    complement?: string | null
  }

  export type ProjectDetailUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: NullableStringFieldUpdateOperationsInput | string | null
    technicalManager?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    neighborhood?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    complement?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectDetailUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: NullableStringFieldUpdateOperationsInput | string | null
    technicalManager?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    neighborhood?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    complement?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectPhaseCreateInput = {
    id?: string
    name: string
    status?: string | null
    startDate?: Date | string | null
    expectedEndDate?: Date | string | null
    endDate?: Date | string | null
    notes?: string | null
    order?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    project: ProjectCreateNestedOneWithoutDesignPhasesInput
    tasks?: ProjectPhaseTaskCreateNestedManyWithoutPhaseInput
  }

  export type ProjectPhaseUncheckedCreateInput = {
    id?: string
    projectId: string
    name: string
    status?: string | null
    startDate?: Date | string | null
    expectedEndDate?: Date | string | null
    endDate?: Date | string | null
    notes?: string | null
    order?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    tasks?: ProjectPhaseTaskUncheckedCreateNestedManyWithoutPhaseInput
  }

  export type ProjectPhaseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expectedEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    project?: ProjectUpdateOneRequiredWithoutDesignPhasesNestedInput
    tasks?: ProjectPhaseTaskUpdateManyWithoutPhaseNestedInput
  }

  export type ProjectPhaseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expectedEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tasks?: ProjectPhaseTaskUncheckedUpdateManyWithoutPhaseNestedInput
  }

  export type ProjectPhaseCreateManyInput = {
    id?: string
    projectId: string
    name: string
    status?: string | null
    startDate?: Date | string | null
    expectedEndDate?: Date | string | null
    endDate?: Date | string | null
    notes?: string | null
    order?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type ProjectPhaseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expectedEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProjectPhaseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expectedEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProjectPhaseTaskCreateInput = {
    id?: string
    name: string
    status?: string | null
    responsible?: string | null
    startDate?: Date | string | null
    expectedEndDate?: Date | string | null
    endDate?: Date | string | null
    notes?: string | null
    priority?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    phase: ProjectPhaseCreateNestedOneWithoutTasksInput
  }

  export type ProjectPhaseTaskUncheckedCreateInput = {
    id?: string
    phaseId: string
    name: string
    status?: string | null
    responsible?: string | null
    startDate?: Date | string | null
    expectedEndDate?: Date | string | null
    endDate?: Date | string | null
    notes?: string | null
    priority?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type ProjectPhaseTaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    responsible?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expectedEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phase?: ProjectPhaseUpdateOneRequiredWithoutTasksNestedInput
  }

  export type ProjectPhaseTaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phaseId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    responsible?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expectedEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProjectPhaseTaskCreateManyInput = {
    id?: string
    phaseId: string
    name: string
    status?: string | null
    responsible?: string | null
    startDate?: Date | string | null
    expectedEndDate?: Date | string | null
    endDate?: Date | string | null
    notes?: string | null
    priority?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type ProjectPhaseTaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    responsible?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expectedEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProjectPhaseTaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    phaseId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    responsible?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expectedEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ConstructionPhaseCreateInput = {
    id?: string
    name: string
    status: string
    startDate?: Date | string | null
    expectedEndDate?: Date | string | null
    endDate?: Date | string | null
    budget?: Decimal | DecimalJsLike | number | string | null
    actualCost?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
    responsible?: string | null
    order?: number | null
    project: ProjectCreateNestedOneWithoutConstructionPhasesInput
    tasks?: ConstructionTaskCreateNestedManyWithoutPhaseInput
  }

  export type ConstructionPhaseUncheckedCreateInput = {
    id?: string
    projectId: string
    name: string
    status: string
    startDate?: Date | string | null
    expectedEndDate?: Date | string | null
    endDate?: Date | string | null
    budget?: Decimal | DecimalJsLike | number | string | null
    actualCost?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
    responsible?: string | null
    order?: number | null
    tasks?: ConstructionTaskUncheckedCreateNestedManyWithoutPhaseInput
  }

  export type ConstructionPhaseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expectedEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    responsible?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    project?: ProjectUpdateOneRequiredWithoutConstructionPhasesNestedInput
    tasks?: ConstructionTaskUpdateManyWithoutPhaseNestedInput
  }

  export type ConstructionPhaseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expectedEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    responsible?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    tasks?: ConstructionTaskUncheckedUpdateManyWithoutPhaseNestedInput
  }

  export type ConstructionPhaseCreateManyInput = {
    id?: string
    projectId: string
    name: string
    status: string
    startDate?: Date | string | null
    expectedEndDate?: Date | string | null
    endDate?: Date | string | null
    budget?: Decimal | DecimalJsLike | number | string | null
    actualCost?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
    responsible?: string | null
    order?: number | null
  }

  export type ConstructionPhaseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expectedEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    responsible?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ConstructionPhaseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expectedEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    responsible?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ConstructionTaskCreateInput = {
    id?: string
    name: string
    status: string
    budget?: Decimal | DecimalJsLike | number | string | null
    actualCost?: Decimal | DecimalJsLike | number | string | null
    startDate?: Date | string | null
    expectedEndDate?: Date | string | null
    endDate?: Date | string | null
    notes?: string | null
    responsible?: string | null
    priority?: number | null
    phase: ConstructionPhaseCreateNestedOneWithoutTasksInput
  }

  export type ConstructionTaskUncheckedCreateInput = {
    id?: string
    phaseId: string
    name: string
    status: string
    budget?: Decimal | DecimalJsLike | number | string | null
    actualCost?: Decimal | DecimalJsLike | number | string | null
    startDate?: Date | string | null
    expectedEndDate?: Date | string | null
    endDate?: Date | string | null
    notes?: string | null
    responsible?: string | null
    priority?: number | null
  }

  export type ConstructionTaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expectedEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    responsible?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    phase?: ConstructionPhaseUpdateOneRequiredWithoutTasksNestedInput
  }

  export type ConstructionTaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phaseId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expectedEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    responsible?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ConstructionTaskCreateManyInput = {
    id?: string
    phaseId: string
    name: string
    status: string
    budget?: Decimal | DecimalJsLike | number | string | null
    actualCost?: Decimal | DecimalJsLike | number | string | null
    startDate?: Date | string | null
    expectedEndDate?: Date | string | null
    endDate?: Date | string | null
    notes?: string | null
    responsible?: string | null
    priority?: number | null
  }

  export type ConstructionTaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expectedEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    responsible?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ConstructionTaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    phaseId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expectedEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    responsible?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProjectDocumentCreateInput = {
    id?: string
    name: string
    type: string
    link: string
    notes?: string | null
    uploadedAt?: Date | string | null
    visibleToClient?: boolean | null
    description?: string | null
    project: ProjectCreateNestedOneWithoutDocumentsInput
    uploadedBy?: UserCreateNestedOneWithoutUploadedDocsInput
  }

  export type ProjectDocumentUncheckedCreateInput = {
    id?: string
    projectId: string
    name: string
    type: string
    link: string
    notes?: string | null
    uploadedAt?: Date | string | null
    uploadedById?: string | null
    visibleToClient?: boolean | null
    description?: string | null
  }

  export type ProjectDocumentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    visibleToClient?: NullableBoolFieldUpdateOperationsInput | boolean | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    project?: ProjectUpdateOneRequiredWithoutDocumentsNestedInput
    uploadedBy?: UserUpdateOneWithoutUploadedDocsNestedInput
  }

  export type ProjectDocumentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    uploadedById?: NullableStringFieldUpdateOperationsInput | string | null
    visibleToClient?: NullableBoolFieldUpdateOperationsInput | boolean | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectDocumentCreateManyInput = {
    id?: string
    projectId: string
    name: string
    type: string
    link: string
    notes?: string | null
    uploadedAt?: Date | string | null
    uploadedById?: string | null
    visibleToClient?: boolean | null
    description?: string | null
  }

  export type ProjectDocumentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    visibleToClient?: NullableBoolFieldUpdateOperationsInput | boolean | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectDocumentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    uploadedById?: NullableStringFieldUpdateOperationsInput | string | null
    visibleToClient?: NullableBoolFieldUpdateOperationsInput | boolean | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BudgetCreateInput = {
    id?: string
    totalValue: Decimal | DecimalJsLike | number | string
    status?: string | null
    version?: number | null
    sentAt?: Date | string | null
    acceptedAt?: Date | string | null
    paymentTerms?: string | null
    summary?: string | null
    notes?: string | null
    fileUrl?: string | null
    title?: string | null
    client?: UserCreateNestedOneWithoutBudgetsInput
  }

  export type BudgetUncheckedCreateInput = {
    id?: string
    clientId?: string | null
    totalValue: Decimal | DecimalJsLike | number | string
    status?: string | null
    version?: number | null
    sentAt?: Date | string | null
    acceptedAt?: Date | string | null
    paymentTerms?: string | null
    summary?: string | null
    notes?: string | null
    fileUrl?: string | null
    title?: string | null
  }

  export type BudgetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableIntFieldUpdateOperationsInput | number | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentTerms?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    client?: UserUpdateOneWithoutBudgetsNestedInput
  }

  export type BudgetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    totalValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableIntFieldUpdateOperationsInput | number | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentTerms?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BudgetCreateManyInput = {
    id?: string
    clientId?: string | null
    totalValue: Decimal | DecimalJsLike | number | string
    status?: string | null
    version?: number | null
    sentAt?: Date | string | null
    acceptedAt?: Date | string | null
    paymentTerms?: string | null
    summary?: string | null
    notes?: string | null
    fileUrl?: string | null
    title?: string | null
  }

  export type BudgetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableIntFieldUpdateOperationsInput | number | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentTerms?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BudgetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    totalValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableIntFieldUpdateOperationsInput | number | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentTerms?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExecutionCostEstimateCreateInput = {
    item: string
    cme?: Decimal | DecimalJsLike | number | string | null
    r?: Decimal | DecimalJsLike | number | string | null
    re?: Decimal | DecimalJsLike | number | string | null
    ur?: Decimal | DecimalJsLike | number | string | null
    eur?: Decimal | DecimalJsLike | number | string | null
    min?: Decimal | DecimalJsLike | number | string | null
  }

  export type ExecutionCostEstimateUncheckedCreateInput = {
    id?: number
    item: string
    cme?: Decimal | DecimalJsLike | number | string | null
    r?: Decimal | DecimalJsLike | number | string | null
    re?: Decimal | DecimalJsLike | number | string | null
    ur?: Decimal | DecimalJsLike | number | string | null
    eur?: Decimal | DecimalJsLike | number | string | null
    min?: Decimal | DecimalJsLike | number | string | null
  }

  export type ExecutionCostEstimateUpdateInput = {
    item?: StringFieldUpdateOperationsInput | string
    cme?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    r?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    re?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ur?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    eur?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    min?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type ExecutionCostEstimateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    item?: StringFieldUpdateOperationsInput | string
    cme?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    r?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    re?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ur?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    eur?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    min?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type ExecutionCostEstimateCreateManyInput = {
    id?: number
    item: string
    cme?: Decimal | DecimalJsLike | number | string | null
    r?: Decimal | DecimalJsLike | number | string | null
    re?: Decimal | DecimalJsLike | number | string | null
    ur?: Decimal | DecimalJsLike | number | string | null
    eur?: Decimal | DecimalJsLike | number | string | null
    min?: Decimal | DecimalJsLike | number | string | null
  }

  export type ExecutionCostEstimateUpdateManyMutationInput = {
    item?: StringFieldUpdateOperationsInput | string
    cme?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    r?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    re?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ur?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    eur?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    min?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type ExecutionCostEstimateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    item?: StringFieldUpdateOperationsInput | string
    cme?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    r?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    re?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ur?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    eur?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    min?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
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

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
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

  export type UserProfileNullableScalarRelationFilter = {
    is?: UserProfileWhereInput | null
    isNot?: UserProfileWhereInput | null
  }

  export type UserTokenListRelationFilter = {
    every?: UserTokenWhereInput
    some?: UserTokenWhereInput
    none?: UserTokenWhereInput
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type BudgetListRelationFilter = {
    every?: BudgetWhereInput
    some?: BudgetWhereInput
    none?: BudgetWhereInput
  }

  export type ProjectDocumentListRelationFilter = {
    every?: ProjectDocumentWhereInput
    some?: ProjectDocumentWhereInput
    none?: ProjectDocumentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BudgetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectDocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    passwordHash?: SortOrder
    accountStatus?: SortOrder
    createdAt?: SortOrder
    lastLogin?: SortOrder
    userType?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    passwordHash?: SortOrder
    accountStatus?: SortOrder
    createdAt?: SortOrder
    lastLogin?: SortOrder
    userType?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    passwordHash?: SortOrder
    accountStatus?: SortOrder
    createdAt?: SortOrder
    lastLogin?: SortOrder
    userType?: SortOrder
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

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    avatarUrl?: SortOrder
    birthDate?: SortOrder
    gender?: SortOrder
    identityDoc?: SortOrder
    cpf?: SortOrder
    occupation?: SortOrder
    maritalStatus?: SortOrder
    hasChildren?: SortOrder
    ageGroup?: SortOrder
    stylePreference?: SortOrder
    referralSource?: SortOrder
    privateNotes?: SortOrder
  }

  export type UserProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    avatarUrl?: SortOrder
    birthDate?: SortOrder
    gender?: SortOrder
    identityDoc?: SortOrder
    cpf?: SortOrder
    occupation?: SortOrder
    maritalStatus?: SortOrder
    hasChildren?: SortOrder
    ageGroup?: SortOrder
    stylePreference?: SortOrder
    referralSource?: SortOrder
    privateNotes?: SortOrder
  }

  export type UserProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    avatarUrl?: SortOrder
    birthDate?: SortOrder
    gender?: SortOrder
    identityDoc?: SortOrder
    cpf?: SortOrder
    occupation?: SortOrder
    maritalStatus?: SortOrder
    hasChildren?: SortOrder
    ageGroup?: SortOrder
    stylePreference?: SortOrder
    referralSource?: SortOrder
    privateNotes?: SortOrder
  }

  export type UserTokenCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenType?: SortOrder
    token?: SortOrder
    tokenExpiry?: SortOrder
    createdAt?: SortOrder
  }

  export type UserTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenType?: SortOrder
    token?: SortOrder
    tokenExpiry?: SortOrder
    createdAt?: SortOrder
  }

  export type UserTokenMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenType?: SortOrder
    token?: SortOrder
    tokenExpiry?: SortOrder
    createdAt?: SortOrder
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ProjectDetailNullableScalarRelationFilter = {
    is?: ProjectDetailWhereInput | null
    isNot?: ProjectDetailWhereInput | null
  }

  export type ProjectPhaseListRelationFilter = {
    every?: ProjectPhaseWhereInput
    some?: ProjectPhaseWhereInput
    none?: ProjectPhaseWhereInput
  }

  export type ConstructionPhaseListRelationFilter = {
    every?: ConstructionPhaseWhereInput
    some?: ConstructionPhaseWhereInput
    none?: ConstructionPhaseWhereInput
  }

  export type ProjectPhaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConstructionPhaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    status?: SortOrder
    projectType?: SortOrder
    developmentType?: SortOrder
    investmentExpectation?: SortOrder
    area?: SortOrder
    initialBudget?: SortOrder
    expectedBudget?: SortOrder
    actualBudget?: SortOrder
    createdAt?: SortOrder
    startDate?: SortOrder
    expectedEndDate?: SortOrder
    endDate?: SortOrder
    coverUrl?: SortOrder
  }

  export type ProjectAvgOrderByAggregateInput = {
    investmentExpectation?: SortOrder
    area?: SortOrder
    initialBudget?: SortOrder
    expectedBudget?: SortOrder
    actualBudget?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    status?: SortOrder
    projectType?: SortOrder
    developmentType?: SortOrder
    investmentExpectation?: SortOrder
    area?: SortOrder
    initialBudget?: SortOrder
    expectedBudget?: SortOrder
    actualBudget?: SortOrder
    createdAt?: SortOrder
    startDate?: SortOrder
    expectedEndDate?: SortOrder
    endDate?: SortOrder
    coverUrl?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    status?: SortOrder
    projectType?: SortOrder
    developmentType?: SortOrder
    investmentExpectation?: SortOrder
    area?: SortOrder
    initialBudget?: SortOrder
    expectedBudget?: SortOrder
    actualBudget?: SortOrder
    createdAt?: SortOrder
    startDate?: SortOrder
    expectedEndDate?: SortOrder
    endDate?: SortOrder
    coverUrl?: SortOrder
  }

  export type ProjectSumOrderByAggregateInput = {
    investmentExpectation?: SortOrder
    area?: SortOrder
    initialBudget?: SortOrder
    expectedBudget?: SortOrder
    actualBudget?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
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

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type ProjectDetailCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    type?: SortOrder
    standard?: SortOrder
    technicalManager?: SortOrder
    postalCode?: SortOrder
    country?: SortOrder
    state?: SortOrder
    city?: SortOrder
    neighborhood?: SortOrder
    street?: SortOrder
    number?: SortOrder
    complement?: SortOrder
  }

  export type ProjectDetailMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    type?: SortOrder
    standard?: SortOrder
    technicalManager?: SortOrder
    postalCode?: SortOrder
    country?: SortOrder
    state?: SortOrder
    city?: SortOrder
    neighborhood?: SortOrder
    street?: SortOrder
    number?: SortOrder
    complement?: SortOrder
  }

  export type ProjectDetailMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    type?: SortOrder
    standard?: SortOrder
    technicalManager?: SortOrder
    postalCode?: SortOrder
    country?: SortOrder
    state?: SortOrder
    city?: SortOrder
    neighborhood?: SortOrder
    street?: SortOrder
    number?: SortOrder
    complement?: SortOrder
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

  export type ProjectPhaseTaskListRelationFilter = {
    every?: ProjectPhaseTaskWhereInput
    some?: ProjectPhaseTaskWhereInput
    none?: ProjectPhaseTaskWhereInput
  }

  export type ProjectPhaseTaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectPhaseCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    expectedEndDate?: SortOrder
    endDate?: SortOrder
    notes?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectPhaseAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type ProjectPhaseMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    expectedEndDate?: SortOrder
    endDate?: SortOrder
    notes?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectPhaseMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    expectedEndDate?: SortOrder
    endDate?: SortOrder
    notes?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectPhaseSumOrderByAggregateInput = {
    order?: SortOrder
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

  export type ProjectPhaseScalarRelationFilter = {
    is?: ProjectPhaseWhereInput
    isNot?: ProjectPhaseWhereInput
  }

  export type ProjectPhaseTaskCountOrderByAggregateInput = {
    id?: SortOrder
    phaseId?: SortOrder
    name?: SortOrder
    status?: SortOrder
    responsible?: SortOrder
    startDate?: SortOrder
    expectedEndDate?: SortOrder
    endDate?: SortOrder
    notes?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectPhaseTaskAvgOrderByAggregateInput = {
    priority?: SortOrder
  }

  export type ProjectPhaseTaskMaxOrderByAggregateInput = {
    id?: SortOrder
    phaseId?: SortOrder
    name?: SortOrder
    status?: SortOrder
    responsible?: SortOrder
    startDate?: SortOrder
    expectedEndDate?: SortOrder
    endDate?: SortOrder
    notes?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectPhaseTaskMinOrderByAggregateInput = {
    id?: SortOrder
    phaseId?: SortOrder
    name?: SortOrder
    status?: SortOrder
    responsible?: SortOrder
    startDate?: SortOrder
    expectedEndDate?: SortOrder
    endDate?: SortOrder
    notes?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectPhaseTaskSumOrderByAggregateInput = {
    priority?: SortOrder
  }

  export type ConstructionTaskListRelationFilter = {
    every?: ConstructionTaskWhereInput
    some?: ConstructionTaskWhereInput
    none?: ConstructionTaskWhereInput
  }

  export type ConstructionTaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConstructionPhaseCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    expectedEndDate?: SortOrder
    endDate?: SortOrder
    budget?: SortOrder
    actualCost?: SortOrder
    notes?: SortOrder
    responsible?: SortOrder
    order?: SortOrder
  }

  export type ConstructionPhaseAvgOrderByAggregateInput = {
    budget?: SortOrder
    actualCost?: SortOrder
    order?: SortOrder
  }

  export type ConstructionPhaseMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    expectedEndDate?: SortOrder
    endDate?: SortOrder
    budget?: SortOrder
    actualCost?: SortOrder
    notes?: SortOrder
    responsible?: SortOrder
    order?: SortOrder
  }

  export type ConstructionPhaseMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    expectedEndDate?: SortOrder
    endDate?: SortOrder
    budget?: SortOrder
    actualCost?: SortOrder
    notes?: SortOrder
    responsible?: SortOrder
    order?: SortOrder
  }

  export type ConstructionPhaseSumOrderByAggregateInput = {
    budget?: SortOrder
    actualCost?: SortOrder
    order?: SortOrder
  }

  export type ConstructionPhaseScalarRelationFilter = {
    is?: ConstructionPhaseWhereInput
    isNot?: ConstructionPhaseWhereInput
  }

  export type ConstructionTaskCountOrderByAggregateInput = {
    id?: SortOrder
    phaseId?: SortOrder
    name?: SortOrder
    status?: SortOrder
    budget?: SortOrder
    actualCost?: SortOrder
    startDate?: SortOrder
    expectedEndDate?: SortOrder
    endDate?: SortOrder
    notes?: SortOrder
    responsible?: SortOrder
    priority?: SortOrder
  }

  export type ConstructionTaskAvgOrderByAggregateInput = {
    budget?: SortOrder
    actualCost?: SortOrder
    priority?: SortOrder
  }

  export type ConstructionTaskMaxOrderByAggregateInput = {
    id?: SortOrder
    phaseId?: SortOrder
    name?: SortOrder
    status?: SortOrder
    budget?: SortOrder
    actualCost?: SortOrder
    startDate?: SortOrder
    expectedEndDate?: SortOrder
    endDate?: SortOrder
    notes?: SortOrder
    responsible?: SortOrder
    priority?: SortOrder
  }

  export type ConstructionTaskMinOrderByAggregateInput = {
    id?: SortOrder
    phaseId?: SortOrder
    name?: SortOrder
    status?: SortOrder
    budget?: SortOrder
    actualCost?: SortOrder
    startDate?: SortOrder
    expectedEndDate?: SortOrder
    endDate?: SortOrder
    notes?: SortOrder
    responsible?: SortOrder
    priority?: SortOrder
  }

  export type ConstructionTaskSumOrderByAggregateInput = {
    budget?: SortOrder
    actualCost?: SortOrder
    priority?: SortOrder
  }

  export type ProjectDocumentCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    link?: SortOrder
    notes?: SortOrder
    uploadedAt?: SortOrder
    uploadedById?: SortOrder
    visibleToClient?: SortOrder
    description?: SortOrder
  }

  export type ProjectDocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    link?: SortOrder
    notes?: SortOrder
    uploadedAt?: SortOrder
    uploadedById?: SortOrder
    visibleToClient?: SortOrder
    description?: SortOrder
  }

  export type ProjectDocumentMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    link?: SortOrder
    notes?: SortOrder
    uploadedAt?: SortOrder
    uploadedById?: SortOrder
    visibleToClient?: SortOrder
    description?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type BudgetCountOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    totalValue?: SortOrder
    status?: SortOrder
    version?: SortOrder
    sentAt?: SortOrder
    acceptedAt?: SortOrder
    paymentTerms?: SortOrder
    summary?: SortOrder
    notes?: SortOrder
    fileUrl?: SortOrder
    title?: SortOrder
  }

  export type BudgetAvgOrderByAggregateInput = {
    totalValue?: SortOrder
    version?: SortOrder
  }

  export type BudgetMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    totalValue?: SortOrder
    status?: SortOrder
    version?: SortOrder
    sentAt?: SortOrder
    acceptedAt?: SortOrder
    paymentTerms?: SortOrder
    summary?: SortOrder
    notes?: SortOrder
    fileUrl?: SortOrder
    title?: SortOrder
  }

  export type BudgetMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    totalValue?: SortOrder
    status?: SortOrder
    version?: SortOrder
    sentAt?: SortOrder
    acceptedAt?: SortOrder
    paymentTerms?: SortOrder
    summary?: SortOrder
    notes?: SortOrder
    fileUrl?: SortOrder
    title?: SortOrder
  }

  export type BudgetSumOrderByAggregateInput = {
    totalValue?: SortOrder
    version?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
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

  export type ExecutionCostEstimateCountOrderByAggregateInput = {
    id?: SortOrder
    item?: SortOrder
    cme?: SortOrder
    r?: SortOrder
    re?: SortOrder
    ur?: SortOrder
    eur?: SortOrder
    min?: SortOrder
  }

  export type ExecutionCostEstimateAvgOrderByAggregateInput = {
    id?: SortOrder
    cme?: SortOrder
    r?: SortOrder
    re?: SortOrder
    ur?: SortOrder
    eur?: SortOrder
    min?: SortOrder
  }

  export type ExecutionCostEstimateMaxOrderByAggregateInput = {
    id?: SortOrder
    item?: SortOrder
    cme?: SortOrder
    r?: SortOrder
    re?: SortOrder
    ur?: SortOrder
    eur?: SortOrder
    min?: SortOrder
  }

  export type ExecutionCostEstimateMinOrderByAggregateInput = {
    id?: SortOrder
    item?: SortOrder
    cme?: SortOrder
    r?: SortOrder
    re?: SortOrder
    ur?: SortOrder
    eur?: SortOrder
    min?: SortOrder
  }

  export type ExecutionCostEstimateSumOrderByAggregateInput = {
    id?: SortOrder
    cme?: SortOrder
    r?: SortOrder
    re?: SortOrder
    ur?: SortOrder
    eur?: SortOrder
    min?: SortOrder
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

  export type UserProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    connect?: UserProfileWhereUniqueInput
  }

  export type UserTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<UserTokenCreateWithoutUserInput, UserTokenUncheckedCreateWithoutUserInput> | UserTokenCreateWithoutUserInput[] | UserTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTokenCreateOrConnectWithoutUserInput | UserTokenCreateOrConnectWithoutUserInput[]
    createMany?: UserTokenCreateManyUserInputEnvelope
    connect?: UserTokenWhereUniqueInput | UserTokenWhereUniqueInput[]
  }

  export type ProjectCreateNestedManyWithoutClientInput = {
    create?: XOR<ProjectCreateWithoutClientInput, ProjectUncheckedCreateWithoutClientInput> | ProjectCreateWithoutClientInput[] | ProjectUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutClientInput | ProjectCreateOrConnectWithoutClientInput[]
    createMany?: ProjectCreateManyClientInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type BudgetCreateNestedManyWithoutClientInput = {
    create?: XOR<BudgetCreateWithoutClientInput, BudgetUncheckedCreateWithoutClientInput> | BudgetCreateWithoutClientInput[] | BudgetUncheckedCreateWithoutClientInput[]
    connectOrCreate?: BudgetCreateOrConnectWithoutClientInput | BudgetCreateOrConnectWithoutClientInput[]
    createMany?: BudgetCreateManyClientInputEnvelope
    connect?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
  }

  export type ProjectDocumentCreateNestedManyWithoutUploadedByInput = {
    create?: XOR<ProjectDocumentCreateWithoutUploadedByInput, ProjectDocumentUncheckedCreateWithoutUploadedByInput> | ProjectDocumentCreateWithoutUploadedByInput[] | ProjectDocumentUncheckedCreateWithoutUploadedByInput[]
    connectOrCreate?: ProjectDocumentCreateOrConnectWithoutUploadedByInput | ProjectDocumentCreateOrConnectWithoutUploadedByInput[]
    createMany?: ProjectDocumentCreateManyUploadedByInputEnvelope
    connect?: ProjectDocumentWhereUniqueInput | ProjectDocumentWhereUniqueInput[]
  }

  export type UserProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    connect?: UserProfileWhereUniqueInput
  }

  export type UserTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserTokenCreateWithoutUserInput, UserTokenUncheckedCreateWithoutUserInput> | UserTokenCreateWithoutUserInput[] | UserTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTokenCreateOrConnectWithoutUserInput | UserTokenCreateOrConnectWithoutUserInput[]
    createMany?: UserTokenCreateManyUserInputEnvelope
    connect?: UserTokenWhereUniqueInput | UserTokenWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<ProjectCreateWithoutClientInput, ProjectUncheckedCreateWithoutClientInput> | ProjectCreateWithoutClientInput[] | ProjectUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutClientInput | ProjectCreateOrConnectWithoutClientInput[]
    createMany?: ProjectCreateManyClientInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type BudgetUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<BudgetCreateWithoutClientInput, BudgetUncheckedCreateWithoutClientInput> | BudgetCreateWithoutClientInput[] | BudgetUncheckedCreateWithoutClientInput[]
    connectOrCreate?: BudgetCreateOrConnectWithoutClientInput | BudgetCreateOrConnectWithoutClientInput[]
    createMany?: BudgetCreateManyClientInputEnvelope
    connect?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
  }

  export type ProjectDocumentUncheckedCreateNestedManyWithoutUploadedByInput = {
    create?: XOR<ProjectDocumentCreateWithoutUploadedByInput, ProjectDocumentUncheckedCreateWithoutUploadedByInput> | ProjectDocumentCreateWithoutUploadedByInput[] | ProjectDocumentUncheckedCreateWithoutUploadedByInput[]
    connectOrCreate?: ProjectDocumentCreateOrConnectWithoutUploadedByInput | ProjectDocumentCreateOrConnectWithoutUploadedByInput[]
    createMany?: ProjectDocumentCreateManyUploadedByInputEnvelope
    connect?: ProjectDocumentWhereUniqueInput | ProjectDocumentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    upsert?: UserProfileUpsertWithoutUserInput
    disconnect?: UserProfileWhereInput | boolean
    delete?: UserProfileWhereInput | boolean
    connect?: UserProfileWhereUniqueInput
    update?: XOR<XOR<UserProfileUpdateToOneWithWhereWithoutUserInput, UserProfileUpdateWithoutUserInput>, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type UserTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserTokenCreateWithoutUserInput, UserTokenUncheckedCreateWithoutUserInput> | UserTokenCreateWithoutUserInput[] | UserTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTokenCreateOrConnectWithoutUserInput | UserTokenCreateOrConnectWithoutUserInput[]
    upsert?: UserTokenUpsertWithWhereUniqueWithoutUserInput | UserTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserTokenCreateManyUserInputEnvelope
    set?: UserTokenWhereUniqueInput | UserTokenWhereUniqueInput[]
    disconnect?: UserTokenWhereUniqueInput | UserTokenWhereUniqueInput[]
    delete?: UserTokenWhereUniqueInput | UserTokenWhereUniqueInput[]
    connect?: UserTokenWhereUniqueInput | UserTokenWhereUniqueInput[]
    update?: UserTokenUpdateWithWhereUniqueWithoutUserInput | UserTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserTokenUpdateManyWithWhereWithoutUserInput | UserTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserTokenScalarWhereInput | UserTokenScalarWhereInput[]
  }

  export type ProjectUpdateManyWithoutClientNestedInput = {
    create?: XOR<ProjectCreateWithoutClientInput, ProjectUncheckedCreateWithoutClientInput> | ProjectCreateWithoutClientInput[] | ProjectUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutClientInput | ProjectCreateOrConnectWithoutClientInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutClientInput | ProjectUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ProjectCreateManyClientInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutClientInput | ProjectUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutClientInput | ProjectUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type BudgetUpdateManyWithoutClientNestedInput = {
    create?: XOR<BudgetCreateWithoutClientInput, BudgetUncheckedCreateWithoutClientInput> | BudgetCreateWithoutClientInput[] | BudgetUncheckedCreateWithoutClientInput[]
    connectOrCreate?: BudgetCreateOrConnectWithoutClientInput | BudgetCreateOrConnectWithoutClientInput[]
    upsert?: BudgetUpsertWithWhereUniqueWithoutClientInput | BudgetUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: BudgetCreateManyClientInputEnvelope
    set?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    disconnect?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    delete?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    connect?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    update?: BudgetUpdateWithWhereUniqueWithoutClientInput | BudgetUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: BudgetUpdateManyWithWhereWithoutClientInput | BudgetUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: BudgetScalarWhereInput | BudgetScalarWhereInput[]
  }

  export type ProjectDocumentUpdateManyWithoutUploadedByNestedInput = {
    create?: XOR<ProjectDocumentCreateWithoutUploadedByInput, ProjectDocumentUncheckedCreateWithoutUploadedByInput> | ProjectDocumentCreateWithoutUploadedByInput[] | ProjectDocumentUncheckedCreateWithoutUploadedByInput[]
    connectOrCreate?: ProjectDocumentCreateOrConnectWithoutUploadedByInput | ProjectDocumentCreateOrConnectWithoutUploadedByInput[]
    upsert?: ProjectDocumentUpsertWithWhereUniqueWithoutUploadedByInput | ProjectDocumentUpsertWithWhereUniqueWithoutUploadedByInput[]
    createMany?: ProjectDocumentCreateManyUploadedByInputEnvelope
    set?: ProjectDocumentWhereUniqueInput | ProjectDocumentWhereUniqueInput[]
    disconnect?: ProjectDocumentWhereUniqueInput | ProjectDocumentWhereUniqueInput[]
    delete?: ProjectDocumentWhereUniqueInput | ProjectDocumentWhereUniqueInput[]
    connect?: ProjectDocumentWhereUniqueInput | ProjectDocumentWhereUniqueInput[]
    update?: ProjectDocumentUpdateWithWhereUniqueWithoutUploadedByInput | ProjectDocumentUpdateWithWhereUniqueWithoutUploadedByInput[]
    updateMany?: ProjectDocumentUpdateManyWithWhereWithoutUploadedByInput | ProjectDocumentUpdateManyWithWhereWithoutUploadedByInput[]
    deleteMany?: ProjectDocumentScalarWhereInput | ProjectDocumentScalarWhereInput[]
  }

  export type UserProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    upsert?: UserProfileUpsertWithoutUserInput
    disconnect?: UserProfileWhereInput | boolean
    delete?: UserProfileWhereInput | boolean
    connect?: UserProfileWhereUniqueInput
    update?: XOR<XOR<UserProfileUpdateToOneWithWhereWithoutUserInput, UserProfileUpdateWithoutUserInput>, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type UserTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserTokenCreateWithoutUserInput, UserTokenUncheckedCreateWithoutUserInput> | UserTokenCreateWithoutUserInput[] | UserTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTokenCreateOrConnectWithoutUserInput | UserTokenCreateOrConnectWithoutUserInput[]
    upsert?: UserTokenUpsertWithWhereUniqueWithoutUserInput | UserTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserTokenCreateManyUserInputEnvelope
    set?: UserTokenWhereUniqueInput | UserTokenWhereUniqueInput[]
    disconnect?: UserTokenWhereUniqueInput | UserTokenWhereUniqueInput[]
    delete?: UserTokenWhereUniqueInput | UserTokenWhereUniqueInput[]
    connect?: UserTokenWhereUniqueInput | UserTokenWhereUniqueInput[]
    update?: UserTokenUpdateWithWhereUniqueWithoutUserInput | UserTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserTokenUpdateManyWithWhereWithoutUserInput | UserTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserTokenScalarWhereInput | UserTokenScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<ProjectCreateWithoutClientInput, ProjectUncheckedCreateWithoutClientInput> | ProjectCreateWithoutClientInput[] | ProjectUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutClientInput | ProjectCreateOrConnectWithoutClientInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutClientInput | ProjectUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ProjectCreateManyClientInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutClientInput | ProjectUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutClientInput | ProjectUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type BudgetUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<BudgetCreateWithoutClientInput, BudgetUncheckedCreateWithoutClientInput> | BudgetCreateWithoutClientInput[] | BudgetUncheckedCreateWithoutClientInput[]
    connectOrCreate?: BudgetCreateOrConnectWithoutClientInput | BudgetCreateOrConnectWithoutClientInput[]
    upsert?: BudgetUpsertWithWhereUniqueWithoutClientInput | BudgetUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: BudgetCreateManyClientInputEnvelope
    set?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    disconnect?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    delete?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    connect?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    update?: BudgetUpdateWithWhereUniqueWithoutClientInput | BudgetUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: BudgetUpdateManyWithWhereWithoutClientInput | BudgetUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: BudgetScalarWhereInput | BudgetScalarWhereInput[]
  }

  export type ProjectDocumentUncheckedUpdateManyWithoutUploadedByNestedInput = {
    create?: XOR<ProjectDocumentCreateWithoutUploadedByInput, ProjectDocumentUncheckedCreateWithoutUploadedByInput> | ProjectDocumentCreateWithoutUploadedByInput[] | ProjectDocumentUncheckedCreateWithoutUploadedByInput[]
    connectOrCreate?: ProjectDocumentCreateOrConnectWithoutUploadedByInput | ProjectDocumentCreateOrConnectWithoutUploadedByInput[]
    upsert?: ProjectDocumentUpsertWithWhereUniqueWithoutUploadedByInput | ProjectDocumentUpsertWithWhereUniqueWithoutUploadedByInput[]
    createMany?: ProjectDocumentCreateManyUploadedByInputEnvelope
    set?: ProjectDocumentWhereUniqueInput | ProjectDocumentWhereUniqueInput[]
    disconnect?: ProjectDocumentWhereUniqueInput | ProjectDocumentWhereUniqueInput[]
    delete?: ProjectDocumentWhereUniqueInput | ProjectDocumentWhereUniqueInput[]
    connect?: ProjectDocumentWhereUniqueInput | ProjectDocumentWhereUniqueInput[]
    update?: ProjectDocumentUpdateWithWhereUniqueWithoutUploadedByInput | ProjectDocumentUpdateWithWhereUniqueWithoutUploadedByInput[]
    updateMany?: ProjectDocumentUpdateManyWithWhereWithoutUploadedByInput | ProjectDocumentUpdateManyWithWhereWithoutUploadedByInput[]
    deleteMany?: ProjectDocumentScalarWhereInput | ProjectDocumentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    upsert?: UserUpsertWithoutProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfileInput, UserUpdateWithoutProfileInput>, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserCreateNestedOneWithoutTokensInput = {
    create?: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutTokensInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTokensNestedInput = {
    create?: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutTokensInput
    upsert?: UserUpsertWithoutTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTokensInput, UserUpdateWithoutTokensInput>, UserUncheckedUpdateWithoutTokensInput>
  }

  export type UserCreateNestedOneWithoutProjectsInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput
    connect?: UserWhereUniqueInput
  }

  export type ProjectDetailCreateNestedOneWithoutProjectInput = {
    create?: XOR<ProjectDetailCreateWithoutProjectInput, ProjectDetailUncheckedCreateWithoutProjectInput>
    connectOrCreate?: ProjectDetailCreateOrConnectWithoutProjectInput
    connect?: ProjectDetailWhereUniqueInput
  }

  export type ProjectPhaseCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectPhaseCreateWithoutProjectInput, ProjectPhaseUncheckedCreateWithoutProjectInput> | ProjectPhaseCreateWithoutProjectInput[] | ProjectPhaseUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectPhaseCreateOrConnectWithoutProjectInput | ProjectPhaseCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectPhaseCreateManyProjectInputEnvelope
    connect?: ProjectPhaseWhereUniqueInput | ProjectPhaseWhereUniqueInput[]
  }

  export type ConstructionPhaseCreateNestedManyWithoutProjectInput = {
    create?: XOR<ConstructionPhaseCreateWithoutProjectInput, ConstructionPhaseUncheckedCreateWithoutProjectInput> | ConstructionPhaseCreateWithoutProjectInput[] | ConstructionPhaseUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ConstructionPhaseCreateOrConnectWithoutProjectInput | ConstructionPhaseCreateOrConnectWithoutProjectInput[]
    createMany?: ConstructionPhaseCreateManyProjectInputEnvelope
    connect?: ConstructionPhaseWhereUniqueInput | ConstructionPhaseWhereUniqueInput[]
  }

  export type ProjectDocumentCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectDocumentCreateWithoutProjectInput, ProjectDocumentUncheckedCreateWithoutProjectInput> | ProjectDocumentCreateWithoutProjectInput[] | ProjectDocumentUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectDocumentCreateOrConnectWithoutProjectInput | ProjectDocumentCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectDocumentCreateManyProjectInputEnvelope
    connect?: ProjectDocumentWhereUniqueInput | ProjectDocumentWhereUniqueInput[]
  }

  export type ProjectDetailUncheckedCreateNestedOneWithoutProjectInput = {
    create?: XOR<ProjectDetailCreateWithoutProjectInput, ProjectDetailUncheckedCreateWithoutProjectInput>
    connectOrCreate?: ProjectDetailCreateOrConnectWithoutProjectInput
    connect?: ProjectDetailWhereUniqueInput
  }

  export type ProjectPhaseUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectPhaseCreateWithoutProjectInput, ProjectPhaseUncheckedCreateWithoutProjectInput> | ProjectPhaseCreateWithoutProjectInput[] | ProjectPhaseUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectPhaseCreateOrConnectWithoutProjectInput | ProjectPhaseCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectPhaseCreateManyProjectInputEnvelope
    connect?: ProjectPhaseWhereUniqueInput | ProjectPhaseWhereUniqueInput[]
  }

  export type ConstructionPhaseUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ConstructionPhaseCreateWithoutProjectInput, ConstructionPhaseUncheckedCreateWithoutProjectInput> | ConstructionPhaseCreateWithoutProjectInput[] | ConstructionPhaseUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ConstructionPhaseCreateOrConnectWithoutProjectInput | ConstructionPhaseCreateOrConnectWithoutProjectInput[]
    createMany?: ConstructionPhaseCreateManyProjectInputEnvelope
    connect?: ConstructionPhaseWhereUniqueInput | ConstructionPhaseWhereUniqueInput[]
  }

  export type ProjectDocumentUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectDocumentCreateWithoutProjectInput, ProjectDocumentUncheckedCreateWithoutProjectInput> | ProjectDocumentCreateWithoutProjectInput[] | ProjectDocumentUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectDocumentCreateOrConnectWithoutProjectInput | ProjectDocumentCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectDocumentCreateManyProjectInputEnvelope
    connect?: ProjectDocumentWhereUniqueInput | ProjectDocumentWhereUniqueInput[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type UserUpdateOneWithoutProjectsNestedInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput
    upsert?: UserUpsertWithoutProjectsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProjectsInput, UserUpdateWithoutProjectsInput>, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type ProjectDetailUpdateOneWithoutProjectNestedInput = {
    create?: XOR<ProjectDetailCreateWithoutProjectInput, ProjectDetailUncheckedCreateWithoutProjectInput>
    connectOrCreate?: ProjectDetailCreateOrConnectWithoutProjectInput
    upsert?: ProjectDetailUpsertWithoutProjectInput
    disconnect?: ProjectDetailWhereInput | boolean
    delete?: ProjectDetailWhereInput | boolean
    connect?: ProjectDetailWhereUniqueInput
    update?: XOR<XOR<ProjectDetailUpdateToOneWithWhereWithoutProjectInput, ProjectDetailUpdateWithoutProjectInput>, ProjectDetailUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectPhaseUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectPhaseCreateWithoutProjectInput, ProjectPhaseUncheckedCreateWithoutProjectInput> | ProjectPhaseCreateWithoutProjectInput[] | ProjectPhaseUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectPhaseCreateOrConnectWithoutProjectInput | ProjectPhaseCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectPhaseUpsertWithWhereUniqueWithoutProjectInput | ProjectPhaseUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectPhaseCreateManyProjectInputEnvelope
    set?: ProjectPhaseWhereUniqueInput | ProjectPhaseWhereUniqueInput[]
    disconnect?: ProjectPhaseWhereUniqueInput | ProjectPhaseWhereUniqueInput[]
    delete?: ProjectPhaseWhereUniqueInput | ProjectPhaseWhereUniqueInput[]
    connect?: ProjectPhaseWhereUniqueInput | ProjectPhaseWhereUniqueInput[]
    update?: ProjectPhaseUpdateWithWhereUniqueWithoutProjectInput | ProjectPhaseUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectPhaseUpdateManyWithWhereWithoutProjectInput | ProjectPhaseUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectPhaseScalarWhereInput | ProjectPhaseScalarWhereInput[]
  }

  export type ConstructionPhaseUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ConstructionPhaseCreateWithoutProjectInput, ConstructionPhaseUncheckedCreateWithoutProjectInput> | ConstructionPhaseCreateWithoutProjectInput[] | ConstructionPhaseUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ConstructionPhaseCreateOrConnectWithoutProjectInput | ConstructionPhaseCreateOrConnectWithoutProjectInput[]
    upsert?: ConstructionPhaseUpsertWithWhereUniqueWithoutProjectInput | ConstructionPhaseUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ConstructionPhaseCreateManyProjectInputEnvelope
    set?: ConstructionPhaseWhereUniqueInput | ConstructionPhaseWhereUniqueInput[]
    disconnect?: ConstructionPhaseWhereUniqueInput | ConstructionPhaseWhereUniqueInput[]
    delete?: ConstructionPhaseWhereUniqueInput | ConstructionPhaseWhereUniqueInput[]
    connect?: ConstructionPhaseWhereUniqueInput | ConstructionPhaseWhereUniqueInput[]
    update?: ConstructionPhaseUpdateWithWhereUniqueWithoutProjectInput | ConstructionPhaseUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ConstructionPhaseUpdateManyWithWhereWithoutProjectInput | ConstructionPhaseUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ConstructionPhaseScalarWhereInput | ConstructionPhaseScalarWhereInput[]
  }

  export type ProjectDocumentUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectDocumentCreateWithoutProjectInput, ProjectDocumentUncheckedCreateWithoutProjectInput> | ProjectDocumentCreateWithoutProjectInput[] | ProjectDocumentUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectDocumentCreateOrConnectWithoutProjectInput | ProjectDocumentCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectDocumentUpsertWithWhereUniqueWithoutProjectInput | ProjectDocumentUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectDocumentCreateManyProjectInputEnvelope
    set?: ProjectDocumentWhereUniqueInput | ProjectDocumentWhereUniqueInput[]
    disconnect?: ProjectDocumentWhereUniqueInput | ProjectDocumentWhereUniqueInput[]
    delete?: ProjectDocumentWhereUniqueInput | ProjectDocumentWhereUniqueInput[]
    connect?: ProjectDocumentWhereUniqueInput | ProjectDocumentWhereUniqueInput[]
    update?: ProjectDocumentUpdateWithWhereUniqueWithoutProjectInput | ProjectDocumentUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectDocumentUpdateManyWithWhereWithoutProjectInput | ProjectDocumentUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectDocumentScalarWhereInput | ProjectDocumentScalarWhereInput[]
  }

  export type ProjectDetailUncheckedUpdateOneWithoutProjectNestedInput = {
    create?: XOR<ProjectDetailCreateWithoutProjectInput, ProjectDetailUncheckedCreateWithoutProjectInput>
    connectOrCreate?: ProjectDetailCreateOrConnectWithoutProjectInput
    upsert?: ProjectDetailUpsertWithoutProjectInput
    disconnect?: ProjectDetailWhereInput | boolean
    delete?: ProjectDetailWhereInput | boolean
    connect?: ProjectDetailWhereUniqueInput
    update?: XOR<XOR<ProjectDetailUpdateToOneWithWhereWithoutProjectInput, ProjectDetailUpdateWithoutProjectInput>, ProjectDetailUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectPhaseUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectPhaseCreateWithoutProjectInput, ProjectPhaseUncheckedCreateWithoutProjectInput> | ProjectPhaseCreateWithoutProjectInput[] | ProjectPhaseUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectPhaseCreateOrConnectWithoutProjectInput | ProjectPhaseCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectPhaseUpsertWithWhereUniqueWithoutProjectInput | ProjectPhaseUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectPhaseCreateManyProjectInputEnvelope
    set?: ProjectPhaseWhereUniqueInput | ProjectPhaseWhereUniqueInput[]
    disconnect?: ProjectPhaseWhereUniqueInput | ProjectPhaseWhereUniqueInput[]
    delete?: ProjectPhaseWhereUniqueInput | ProjectPhaseWhereUniqueInput[]
    connect?: ProjectPhaseWhereUniqueInput | ProjectPhaseWhereUniqueInput[]
    update?: ProjectPhaseUpdateWithWhereUniqueWithoutProjectInput | ProjectPhaseUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectPhaseUpdateManyWithWhereWithoutProjectInput | ProjectPhaseUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectPhaseScalarWhereInput | ProjectPhaseScalarWhereInput[]
  }

  export type ConstructionPhaseUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ConstructionPhaseCreateWithoutProjectInput, ConstructionPhaseUncheckedCreateWithoutProjectInput> | ConstructionPhaseCreateWithoutProjectInput[] | ConstructionPhaseUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ConstructionPhaseCreateOrConnectWithoutProjectInput | ConstructionPhaseCreateOrConnectWithoutProjectInput[]
    upsert?: ConstructionPhaseUpsertWithWhereUniqueWithoutProjectInput | ConstructionPhaseUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ConstructionPhaseCreateManyProjectInputEnvelope
    set?: ConstructionPhaseWhereUniqueInput | ConstructionPhaseWhereUniqueInput[]
    disconnect?: ConstructionPhaseWhereUniqueInput | ConstructionPhaseWhereUniqueInput[]
    delete?: ConstructionPhaseWhereUniqueInput | ConstructionPhaseWhereUniqueInput[]
    connect?: ConstructionPhaseWhereUniqueInput | ConstructionPhaseWhereUniqueInput[]
    update?: ConstructionPhaseUpdateWithWhereUniqueWithoutProjectInput | ConstructionPhaseUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ConstructionPhaseUpdateManyWithWhereWithoutProjectInput | ConstructionPhaseUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ConstructionPhaseScalarWhereInput | ConstructionPhaseScalarWhereInput[]
  }

  export type ProjectDocumentUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectDocumentCreateWithoutProjectInput, ProjectDocumentUncheckedCreateWithoutProjectInput> | ProjectDocumentCreateWithoutProjectInput[] | ProjectDocumentUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectDocumentCreateOrConnectWithoutProjectInput | ProjectDocumentCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectDocumentUpsertWithWhereUniqueWithoutProjectInput | ProjectDocumentUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectDocumentCreateManyProjectInputEnvelope
    set?: ProjectDocumentWhereUniqueInput | ProjectDocumentWhereUniqueInput[]
    disconnect?: ProjectDocumentWhereUniqueInput | ProjectDocumentWhereUniqueInput[]
    delete?: ProjectDocumentWhereUniqueInput | ProjectDocumentWhereUniqueInput[]
    connect?: ProjectDocumentWhereUniqueInput | ProjectDocumentWhereUniqueInput[]
    update?: ProjectDocumentUpdateWithWhereUniqueWithoutProjectInput | ProjectDocumentUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectDocumentUpdateManyWithWhereWithoutProjectInput | ProjectDocumentUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectDocumentScalarWhereInput | ProjectDocumentScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutDetailsInput = {
    create?: XOR<ProjectCreateWithoutDetailsInput, ProjectUncheckedCreateWithoutDetailsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutDetailsInput
    connect?: ProjectWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutDetailsNestedInput = {
    create?: XOR<ProjectCreateWithoutDetailsInput, ProjectUncheckedCreateWithoutDetailsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutDetailsInput
    upsert?: ProjectUpsertWithoutDetailsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutDetailsInput, ProjectUpdateWithoutDetailsInput>, ProjectUncheckedUpdateWithoutDetailsInput>
  }

  export type ProjectCreateNestedOneWithoutDesignPhasesInput = {
    create?: XOR<ProjectCreateWithoutDesignPhasesInput, ProjectUncheckedCreateWithoutDesignPhasesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutDesignPhasesInput
    connect?: ProjectWhereUniqueInput
  }

  export type ProjectPhaseTaskCreateNestedManyWithoutPhaseInput = {
    create?: XOR<ProjectPhaseTaskCreateWithoutPhaseInput, ProjectPhaseTaskUncheckedCreateWithoutPhaseInput> | ProjectPhaseTaskCreateWithoutPhaseInput[] | ProjectPhaseTaskUncheckedCreateWithoutPhaseInput[]
    connectOrCreate?: ProjectPhaseTaskCreateOrConnectWithoutPhaseInput | ProjectPhaseTaskCreateOrConnectWithoutPhaseInput[]
    createMany?: ProjectPhaseTaskCreateManyPhaseInputEnvelope
    connect?: ProjectPhaseTaskWhereUniqueInput | ProjectPhaseTaskWhereUniqueInput[]
  }

  export type ProjectPhaseTaskUncheckedCreateNestedManyWithoutPhaseInput = {
    create?: XOR<ProjectPhaseTaskCreateWithoutPhaseInput, ProjectPhaseTaskUncheckedCreateWithoutPhaseInput> | ProjectPhaseTaskCreateWithoutPhaseInput[] | ProjectPhaseTaskUncheckedCreateWithoutPhaseInput[]
    connectOrCreate?: ProjectPhaseTaskCreateOrConnectWithoutPhaseInput | ProjectPhaseTaskCreateOrConnectWithoutPhaseInput[]
    createMany?: ProjectPhaseTaskCreateManyPhaseInputEnvelope
    connect?: ProjectPhaseTaskWhereUniqueInput | ProjectPhaseTaskWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProjectUpdateOneRequiredWithoutDesignPhasesNestedInput = {
    create?: XOR<ProjectCreateWithoutDesignPhasesInput, ProjectUncheckedCreateWithoutDesignPhasesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutDesignPhasesInput
    upsert?: ProjectUpsertWithoutDesignPhasesInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutDesignPhasesInput, ProjectUpdateWithoutDesignPhasesInput>, ProjectUncheckedUpdateWithoutDesignPhasesInput>
  }

  export type ProjectPhaseTaskUpdateManyWithoutPhaseNestedInput = {
    create?: XOR<ProjectPhaseTaskCreateWithoutPhaseInput, ProjectPhaseTaskUncheckedCreateWithoutPhaseInput> | ProjectPhaseTaskCreateWithoutPhaseInput[] | ProjectPhaseTaskUncheckedCreateWithoutPhaseInput[]
    connectOrCreate?: ProjectPhaseTaskCreateOrConnectWithoutPhaseInput | ProjectPhaseTaskCreateOrConnectWithoutPhaseInput[]
    upsert?: ProjectPhaseTaskUpsertWithWhereUniqueWithoutPhaseInput | ProjectPhaseTaskUpsertWithWhereUniqueWithoutPhaseInput[]
    createMany?: ProjectPhaseTaskCreateManyPhaseInputEnvelope
    set?: ProjectPhaseTaskWhereUniqueInput | ProjectPhaseTaskWhereUniqueInput[]
    disconnect?: ProjectPhaseTaskWhereUniqueInput | ProjectPhaseTaskWhereUniqueInput[]
    delete?: ProjectPhaseTaskWhereUniqueInput | ProjectPhaseTaskWhereUniqueInput[]
    connect?: ProjectPhaseTaskWhereUniqueInput | ProjectPhaseTaskWhereUniqueInput[]
    update?: ProjectPhaseTaskUpdateWithWhereUniqueWithoutPhaseInput | ProjectPhaseTaskUpdateWithWhereUniqueWithoutPhaseInput[]
    updateMany?: ProjectPhaseTaskUpdateManyWithWhereWithoutPhaseInput | ProjectPhaseTaskUpdateManyWithWhereWithoutPhaseInput[]
    deleteMany?: ProjectPhaseTaskScalarWhereInput | ProjectPhaseTaskScalarWhereInput[]
  }

  export type ProjectPhaseTaskUncheckedUpdateManyWithoutPhaseNestedInput = {
    create?: XOR<ProjectPhaseTaskCreateWithoutPhaseInput, ProjectPhaseTaskUncheckedCreateWithoutPhaseInput> | ProjectPhaseTaskCreateWithoutPhaseInput[] | ProjectPhaseTaskUncheckedCreateWithoutPhaseInput[]
    connectOrCreate?: ProjectPhaseTaskCreateOrConnectWithoutPhaseInput | ProjectPhaseTaskCreateOrConnectWithoutPhaseInput[]
    upsert?: ProjectPhaseTaskUpsertWithWhereUniqueWithoutPhaseInput | ProjectPhaseTaskUpsertWithWhereUniqueWithoutPhaseInput[]
    createMany?: ProjectPhaseTaskCreateManyPhaseInputEnvelope
    set?: ProjectPhaseTaskWhereUniqueInput | ProjectPhaseTaskWhereUniqueInput[]
    disconnect?: ProjectPhaseTaskWhereUniqueInput | ProjectPhaseTaskWhereUniqueInput[]
    delete?: ProjectPhaseTaskWhereUniqueInput | ProjectPhaseTaskWhereUniqueInput[]
    connect?: ProjectPhaseTaskWhereUniqueInput | ProjectPhaseTaskWhereUniqueInput[]
    update?: ProjectPhaseTaskUpdateWithWhereUniqueWithoutPhaseInput | ProjectPhaseTaskUpdateWithWhereUniqueWithoutPhaseInput[]
    updateMany?: ProjectPhaseTaskUpdateManyWithWhereWithoutPhaseInput | ProjectPhaseTaskUpdateManyWithWhereWithoutPhaseInput[]
    deleteMany?: ProjectPhaseTaskScalarWhereInput | ProjectPhaseTaskScalarWhereInput[]
  }

  export type ProjectPhaseCreateNestedOneWithoutTasksInput = {
    create?: XOR<ProjectPhaseCreateWithoutTasksInput, ProjectPhaseUncheckedCreateWithoutTasksInput>
    connectOrCreate?: ProjectPhaseCreateOrConnectWithoutTasksInput
    connect?: ProjectPhaseWhereUniqueInput
  }

  export type ProjectPhaseUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<ProjectPhaseCreateWithoutTasksInput, ProjectPhaseUncheckedCreateWithoutTasksInput>
    connectOrCreate?: ProjectPhaseCreateOrConnectWithoutTasksInput
    upsert?: ProjectPhaseUpsertWithoutTasksInput
    connect?: ProjectPhaseWhereUniqueInput
    update?: XOR<XOR<ProjectPhaseUpdateToOneWithWhereWithoutTasksInput, ProjectPhaseUpdateWithoutTasksInput>, ProjectPhaseUncheckedUpdateWithoutTasksInput>
  }

  export type ProjectCreateNestedOneWithoutConstructionPhasesInput = {
    create?: XOR<ProjectCreateWithoutConstructionPhasesInput, ProjectUncheckedCreateWithoutConstructionPhasesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutConstructionPhasesInput
    connect?: ProjectWhereUniqueInput
  }

  export type ConstructionTaskCreateNestedManyWithoutPhaseInput = {
    create?: XOR<ConstructionTaskCreateWithoutPhaseInput, ConstructionTaskUncheckedCreateWithoutPhaseInput> | ConstructionTaskCreateWithoutPhaseInput[] | ConstructionTaskUncheckedCreateWithoutPhaseInput[]
    connectOrCreate?: ConstructionTaskCreateOrConnectWithoutPhaseInput | ConstructionTaskCreateOrConnectWithoutPhaseInput[]
    createMany?: ConstructionTaskCreateManyPhaseInputEnvelope
    connect?: ConstructionTaskWhereUniqueInput | ConstructionTaskWhereUniqueInput[]
  }

  export type ConstructionTaskUncheckedCreateNestedManyWithoutPhaseInput = {
    create?: XOR<ConstructionTaskCreateWithoutPhaseInput, ConstructionTaskUncheckedCreateWithoutPhaseInput> | ConstructionTaskCreateWithoutPhaseInput[] | ConstructionTaskUncheckedCreateWithoutPhaseInput[]
    connectOrCreate?: ConstructionTaskCreateOrConnectWithoutPhaseInput | ConstructionTaskCreateOrConnectWithoutPhaseInput[]
    createMany?: ConstructionTaskCreateManyPhaseInputEnvelope
    connect?: ConstructionTaskWhereUniqueInput | ConstructionTaskWhereUniqueInput[]
  }

  export type ProjectUpdateOneRequiredWithoutConstructionPhasesNestedInput = {
    create?: XOR<ProjectCreateWithoutConstructionPhasesInput, ProjectUncheckedCreateWithoutConstructionPhasesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutConstructionPhasesInput
    upsert?: ProjectUpsertWithoutConstructionPhasesInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutConstructionPhasesInput, ProjectUpdateWithoutConstructionPhasesInput>, ProjectUncheckedUpdateWithoutConstructionPhasesInput>
  }

  export type ConstructionTaskUpdateManyWithoutPhaseNestedInput = {
    create?: XOR<ConstructionTaskCreateWithoutPhaseInput, ConstructionTaskUncheckedCreateWithoutPhaseInput> | ConstructionTaskCreateWithoutPhaseInput[] | ConstructionTaskUncheckedCreateWithoutPhaseInput[]
    connectOrCreate?: ConstructionTaskCreateOrConnectWithoutPhaseInput | ConstructionTaskCreateOrConnectWithoutPhaseInput[]
    upsert?: ConstructionTaskUpsertWithWhereUniqueWithoutPhaseInput | ConstructionTaskUpsertWithWhereUniqueWithoutPhaseInput[]
    createMany?: ConstructionTaskCreateManyPhaseInputEnvelope
    set?: ConstructionTaskWhereUniqueInput | ConstructionTaskWhereUniqueInput[]
    disconnect?: ConstructionTaskWhereUniqueInput | ConstructionTaskWhereUniqueInput[]
    delete?: ConstructionTaskWhereUniqueInput | ConstructionTaskWhereUniqueInput[]
    connect?: ConstructionTaskWhereUniqueInput | ConstructionTaskWhereUniqueInput[]
    update?: ConstructionTaskUpdateWithWhereUniqueWithoutPhaseInput | ConstructionTaskUpdateWithWhereUniqueWithoutPhaseInput[]
    updateMany?: ConstructionTaskUpdateManyWithWhereWithoutPhaseInput | ConstructionTaskUpdateManyWithWhereWithoutPhaseInput[]
    deleteMany?: ConstructionTaskScalarWhereInput | ConstructionTaskScalarWhereInput[]
  }

  export type ConstructionTaskUncheckedUpdateManyWithoutPhaseNestedInput = {
    create?: XOR<ConstructionTaskCreateWithoutPhaseInput, ConstructionTaskUncheckedCreateWithoutPhaseInput> | ConstructionTaskCreateWithoutPhaseInput[] | ConstructionTaskUncheckedCreateWithoutPhaseInput[]
    connectOrCreate?: ConstructionTaskCreateOrConnectWithoutPhaseInput | ConstructionTaskCreateOrConnectWithoutPhaseInput[]
    upsert?: ConstructionTaskUpsertWithWhereUniqueWithoutPhaseInput | ConstructionTaskUpsertWithWhereUniqueWithoutPhaseInput[]
    createMany?: ConstructionTaskCreateManyPhaseInputEnvelope
    set?: ConstructionTaskWhereUniqueInput | ConstructionTaskWhereUniqueInput[]
    disconnect?: ConstructionTaskWhereUniqueInput | ConstructionTaskWhereUniqueInput[]
    delete?: ConstructionTaskWhereUniqueInput | ConstructionTaskWhereUniqueInput[]
    connect?: ConstructionTaskWhereUniqueInput | ConstructionTaskWhereUniqueInput[]
    update?: ConstructionTaskUpdateWithWhereUniqueWithoutPhaseInput | ConstructionTaskUpdateWithWhereUniqueWithoutPhaseInput[]
    updateMany?: ConstructionTaskUpdateManyWithWhereWithoutPhaseInput | ConstructionTaskUpdateManyWithWhereWithoutPhaseInput[]
    deleteMany?: ConstructionTaskScalarWhereInput | ConstructionTaskScalarWhereInput[]
  }

  export type ConstructionPhaseCreateNestedOneWithoutTasksInput = {
    create?: XOR<ConstructionPhaseCreateWithoutTasksInput, ConstructionPhaseUncheckedCreateWithoutTasksInput>
    connectOrCreate?: ConstructionPhaseCreateOrConnectWithoutTasksInput
    connect?: ConstructionPhaseWhereUniqueInput
  }

  export type ConstructionPhaseUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<ConstructionPhaseCreateWithoutTasksInput, ConstructionPhaseUncheckedCreateWithoutTasksInput>
    connectOrCreate?: ConstructionPhaseCreateOrConnectWithoutTasksInput
    upsert?: ConstructionPhaseUpsertWithoutTasksInput
    connect?: ConstructionPhaseWhereUniqueInput
    update?: XOR<XOR<ConstructionPhaseUpdateToOneWithWhereWithoutTasksInput, ConstructionPhaseUpdateWithoutTasksInput>, ConstructionPhaseUncheckedUpdateWithoutTasksInput>
  }

  export type ProjectCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<ProjectCreateWithoutDocumentsInput, ProjectUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutDocumentsInput
    connect?: ProjectWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUploadedDocsInput = {
    create?: XOR<UserCreateWithoutUploadedDocsInput, UserUncheckedCreateWithoutUploadedDocsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUploadedDocsInput
    connect?: UserWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: XOR<ProjectCreateWithoutDocumentsInput, ProjectUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutDocumentsInput
    upsert?: ProjectUpsertWithoutDocumentsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutDocumentsInput, ProjectUpdateWithoutDocumentsInput>, ProjectUncheckedUpdateWithoutDocumentsInput>
  }

  export type UserUpdateOneWithoutUploadedDocsNestedInput = {
    create?: XOR<UserCreateWithoutUploadedDocsInput, UserUncheckedCreateWithoutUploadedDocsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUploadedDocsInput
    upsert?: UserUpsertWithoutUploadedDocsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUploadedDocsInput, UserUpdateWithoutUploadedDocsInput>, UserUncheckedUpdateWithoutUploadedDocsInput>
  }

  export type UserCreateNestedOneWithoutBudgetsInput = {
    create?: XOR<UserCreateWithoutBudgetsInput, UserUncheckedCreateWithoutBudgetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBudgetsInput
    connect?: UserWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type UserUpdateOneWithoutBudgetsNestedInput = {
    create?: XOR<UserCreateWithoutBudgetsInput, UserUncheckedCreateWithoutBudgetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBudgetsInput
    upsert?: UserUpsertWithoutBudgetsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBudgetsInput, UserUpdateWithoutBudgetsInput>, UserUncheckedUpdateWithoutBudgetsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
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

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
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

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
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

  export type UserProfileCreateWithoutUserInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    phone?: string | null
    avatarUrl?: string | null
    birthDate?: Date | string | null
    gender?: string | null
    identityDoc?: string | null
    cpf?: string | null
    occupation?: string | null
    maritalStatus?: string | null
    hasChildren?: boolean | null
    ageGroup?: string | null
    stylePreference?: string | null
    referralSource?: string | null
    privateNotes?: string | null
  }

  export type UserProfileUncheckedCreateWithoutUserInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    phone?: string | null
    avatarUrl?: string | null
    birthDate?: Date | string | null
    gender?: string | null
    identityDoc?: string | null
    cpf?: string | null
    occupation?: string | null
    maritalStatus?: string | null
    hasChildren?: boolean | null
    ageGroup?: string | null
    stylePreference?: string | null
    referralSource?: string | null
    privateNotes?: string | null
  }

  export type UserProfileCreateOrConnectWithoutUserInput = {
    where: UserProfileWhereUniqueInput
    create: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
  }

  export type UserTokenCreateWithoutUserInput = {
    id?: string
    tokenType?: string | null
    token: string
    tokenExpiry?: Date | string | null
    createdAt?: Date | string | null
  }

  export type UserTokenUncheckedCreateWithoutUserInput = {
    id?: string
    tokenType?: string | null
    token: string
    tokenExpiry?: Date | string | null
    createdAt?: Date | string | null
  }

  export type UserTokenCreateOrConnectWithoutUserInput = {
    where: UserTokenWhereUniqueInput
    create: XOR<UserTokenCreateWithoutUserInput, UserTokenUncheckedCreateWithoutUserInput>
  }

  export type UserTokenCreateManyUserInputEnvelope = {
    data: UserTokenCreateManyUserInput | UserTokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProjectCreateWithoutClientInput = {
    id?: string
    slug: string
    title: string
    status?: string | null
    projectType?: string | null
    developmentType?: string | null
    investmentExpectation?: Decimal | DecimalJsLike | number | string | null
    area?: Decimal | DecimalJsLike | number | string | null
    initialBudget?: Decimal | DecimalJsLike | number | string | null
    expectedBudget?: Decimal | DecimalJsLike | number | string | null
    actualBudget?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string | null
    startDate?: Date | string | null
    expectedEndDate?: Date | string | null
    endDate?: Date | string | null
    coverUrl?: string | null
    details?: ProjectDetailCreateNestedOneWithoutProjectInput
    designPhases?: ProjectPhaseCreateNestedManyWithoutProjectInput
    constructionPhases?: ConstructionPhaseCreateNestedManyWithoutProjectInput
    documents?: ProjectDocumentCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutClientInput = {
    id?: string
    slug: string
    title: string
    status?: string | null
    projectType?: string | null
    developmentType?: string | null
    investmentExpectation?: Decimal | DecimalJsLike | number | string | null
    area?: Decimal | DecimalJsLike | number | string | null
    initialBudget?: Decimal | DecimalJsLike | number | string | null
    expectedBudget?: Decimal | DecimalJsLike | number | string | null
    actualBudget?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string | null
    startDate?: Date | string | null
    expectedEndDate?: Date | string | null
    endDate?: Date | string | null
    coverUrl?: string | null
    details?: ProjectDetailUncheckedCreateNestedOneWithoutProjectInput
    designPhases?: ProjectPhaseUncheckedCreateNestedManyWithoutProjectInput
    constructionPhases?: ConstructionPhaseUncheckedCreateNestedManyWithoutProjectInput
    documents?: ProjectDocumentUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutClientInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutClientInput, ProjectUncheckedCreateWithoutClientInput>
  }

  export type ProjectCreateManyClientInputEnvelope = {
    data: ProjectCreateManyClientInput | ProjectCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type BudgetCreateWithoutClientInput = {
    id?: string
    totalValue: Decimal | DecimalJsLike | number | string
    status?: string | null
    version?: number | null
    sentAt?: Date | string | null
    acceptedAt?: Date | string | null
    paymentTerms?: string | null
    summary?: string | null
    notes?: string | null
    fileUrl?: string | null
    title?: string | null
  }

  export type BudgetUncheckedCreateWithoutClientInput = {
    id?: string
    totalValue: Decimal | DecimalJsLike | number | string
    status?: string | null
    version?: number | null
    sentAt?: Date | string | null
    acceptedAt?: Date | string | null
    paymentTerms?: string | null
    summary?: string | null
    notes?: string | null
    fileUrl?: string | null
    title?: string | null
  }

  export type BudgetCreateOrConnectWithoutClientInput = {
    where: BudgetWhereUniqueInput
    create: XOR<BudgetCreateWithoutClientInput, BudgetUncheckedCreateWithoutClientInput>
  }

  export type BudgetCreateManyClientInputEnvelope = {
    data: BudgetCreateManyClientInput | BudgetCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type ProjectDocumentCreateWithoutUploadedByInput = {
    id?: string
    name: string
    type: string
    link: string
    notes?: string | null
    uploadedAt?: Date | string | null
    visibleToClient?: boolean | null
    description?: string | null
    project: ProjectCreateNestedOneWithoutDocumentsInput
  }

  export type ProjectDocumentUncheckedCreateWithoutUploadedByInput = {
    id?: string
    projectId: string
    name: string
    type: string
    link: string
    notes?: string | null
    uploadedAt?: Date | string | null
    visibleToClient?: boolean | null
    description?: string | null
  }

  export type ProjectDocumentCreateOrConnectWithoutUploadedByInput = {
    where: ProjectDocumentWhereUniqueInput
    create: XOR<ProjectDocumentCreateWithoutUploadedByInput, ProjectDocumentUncheckedCreateWithoutUploadedByInput>
  }

  export type ProjectDocumentCreateManyUploadedByInputEnvelope = {
    data: ProjectDocumentCreateManyUploadedByInput | ProjectDocumentCreateManyUploadedByInput[]
    skipDuplicates?: boolean
  }

  export type UserProfileUpsertWithoutUserInput = {
    update: XOR<UserProfileUpdateWithoutUserInput, UserProfileUncheckedUpdateWithoutUserInput>
    create: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    where?: UserProfileWhereInput
  }

  export type UserProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: UserProfileWhereInput
    data: XOR<UserProfileUpdateWithoutUserInput, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type UserProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    identityDoc?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null
    hasChildren?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ageGroup?: NullableStringFieldUpdateOperationsInput | string | null
    stylePreference?: NullableStringFieldUpdateOperationsInput | string | null
    referralSource?: NullableStringFieldUpdateOperationsInput | string | null
    privateNotes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    identityDoc?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null
    hasChildren?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ageGroup?: NullableStringFieldUpdateOperationsInput | string | null
    stylePreference?: NullableStringFieldUpdateOperationsInput | string | null
    referralSource?: NullableStringFieldUpdateOperationsInput | string | null
    privateNotes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: UserTokenWhereUniqueInput
    update: XOR<UserTokenUpdateWithoutUserInput, UserTokenUncheckedUpdateWithoutUserInput>
    create: XOR<UserTokenCreateWithoutUserInput, UserTokenUncheckedCreateWithoutUserInput>
  }

  export type UserTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: UserTokenWhereUniqueInput
    data: XOR<UserTokenUpdateWithoutUserInput, UserTokenUncheckedUpdateWithoutUserInput>
  }

  export type UserTokenUpdateManyWithWhereWithoutUserInput = {
    where: UserTokenScalarWhereInput
    data: XOR<UserTokenUpdateManyMutationInput, UserTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type UserTokenScalarWhereInput = {
    AND?: UserTokenScalarWhereInput | UserTokenScalarWhereInput[]
    OR?: UserTokenScalarWhereInput[]
    NOT?: UserTokenScalarWhereInput | UserTokenScalarWhereInput[]
    id?: StringFilter<"UserToken"> | string
    userId?: StringFilter<"UserToken"> | string
    tokenType?: StringNullableFilter<"UserToken"> | string | null
    token?: StringFilter<"UserToken"> | string
    tokenExpiry?: DateTimeNullableFilter<"UserToken"> | Date | string | null
    createdAt?: DateTimeNullableFilter<"UserToken"> | Date | string | null
  }

  export type ProjectUpsertWithWhereUniqueWithoutClientInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutClientInput, ProjectUncheckedUpdateWithoutClientInput>
    create: XOR<ProjectCreateWithoutClientInput, ProjectUncheckedCreateWithoutClientInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutClientInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutClientInput, ProjectUncheckedUpdateWithoutClientInput>
  }

  export type ProjectUpdateManyWithWhereWithoutClientInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutClientInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: StringFilter<"Project"> | string
    clientId?: StringNullableFilter<"Project"> | string | null
    slug?: StringFilter<"Project"> | string
    title?: StringFilter<"Project"> | string
    status?: StringNullableFilter<"Project"> | string | null
    projectType?: StringNullableFilter<"Project"> | string | null
    developmentType?: StringNullableFilter<"Project"> | string | null
    investmentExpectation?: DecimalNullableFilter<"Project"> | Decimal | DecimalJsLike | number | string | null
    area?: DecimalNullableFilter<"Project"> | Decimal | DecimalJsLike | number | string | null
    initialBudget?: DecimalNullableFilter<"Project"> | Decimal | DecimalJsLike | number | string | null
    expectedBudget?: DecimalNullableFilter<"Project"> | Decimal | DecimalJsLike | number | string | null
    actualBudget?: DecimalNullableFilter<"Project"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeNullableFilter<"Project"> | Date | string | null
    startDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    expectedEndDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    coverUrl?: StringNullableFilter<"Project"> | string | null
  }

  export type BudgetUpsertWithWhereUniqueWithoutClientInput = {
    where: BudgetWhereUniqueInput
    update: XOR<BudgetUpdateWithoutClientInput, BudgetUncheckedUpdateWithoutClientInput>
    create: XOR<BudgetCreateWithoutClientInput, BudgetUncheckedCreateWithoutClientInput>
  }

  export type BudgetUpdateWithWhereUniqueWithoutClientInput = {
    where: BudgetWhereUniqueInput
    data: XOR<BudgetUpdateWithoutClientInput, BudgetUncheckedUpdateWithoutClientInput>
  }

  export type BudgetUpdateManyWithWhereWithoutClientInput = {
    where: BudgetScalarWhereInput
    data: XOR<BudgetUpdateManyMutationInput, BudgetUncheckedUpdateManyWithoutClientInput>
  }

  export type BudgetScalarWhereInput = {
    AND?: BudgetScalarWhereInput | BudgetScalarWhereInput[]
    OR?: BudgetScalarWhereInput[]
    NOT?: BudgetScalarWhereInput | BudgetScalarWhereInput[]
    id?: StringFilter<"Budget"> | string
    clientId?: StringNullableFilter<"Budget"> | string | null
    totalValue?: DecimalFilter<"Budget"> | Decimal | DecimalJsLike | number | string
    status?: StringNullableFilter<"Budget"> | string | null
    version?: IntNullableFilter<"Budget"> | number | null
    sentAt?: DateTimeNullableFilter<"Budget"> | Date | string | null
    acceptedAt?: DateTimeNullableFilter<"Budget"> | Date | string | null
    paymentTerms?: StringNullableFilter<"Budget"> | string | null
    summary?: StringNullableFilter<"Budget"> | string | null
    notes?: StringNullableFilter<"Budget"> | string | null
    fileUrl?: StringNullableFilter<"Budget"> | string | null
    title?: StringNullableFilter<"Budget"> | string | null
  }

  export type ProjectDocumentUpsertWithWhereUniqueWithoutUploadedByInput = {
    where: ProjectDocumentWhereUniqueInput
    update: XOR<ProjectDocumentUpdateWithoutUploadedByInput, ProjectDocumentUncheckedUpdateWithoutUploadedByInput>
    create: XOR<ProjectDocumentCreateWithoutUploadedByInput, ProjectDocumentUncheckedCreateWithoutUploadedByInput>
  }

  export type ProjectDocumentUpdateWithWhereUniqueWithoutUploadedByInput = {
    where: ProjectDocumentWhereUniqueInput
    data: XOR<ProjectDocumentUpdateWithoutUploadedByInput, ProjectDocumentUncheckedUpdateWithoutUploadedByInput>
  }

  export type ProjectDocumentUpdateManyWithWhereWithoutUploadedByInput = {
    where: ProjectDocumentScalarWhereInput
    data: XOR<ProjectDocumentUpdateManyMutationInput, ProjectDocumentUncheckedUpdateManyWithoutUploadedByInput>
  }

  export type ProjectDocumentScalarWhereInput = {
    AND?: ProjectDocumentScalarWhereInput | ProjectDocumentScalarWhereInput[]
    OR?: ProjectDocumentScalarWhereInput[]
    NOT?: ProjectDocumentScalarWhereInput | ProjectDocumentScalarWhereInput[]
    id?: StringFilter<"ProjectDocument"> | string
    projectId?: StringFilter<"ProjectDocument"> | string
    name?: StringFilter<"ProjectDocument"> | string
    type?: StringFilter<"ProjectDocument"> | string
    link?: StringFilter<"ProjectDocument"> | string
    notes?: StringNullableFilter<"ProjectDocument"> | string | null
    uploadedAt?: DateTimeNullableFilter<"ProjectDocument"> | Date | string | null
    uploadedById?: StringNullableFilter<"ProjectDocument"> | string | null
    visibleToClient?: BoolNullableFilter<"ProjectDocument"> | boolean | null
    description?: StringNullableFilter<"ProjectDocument"> | string | null
  }

  export type UserCreateWithoutProfileInput = {
    id?: string
    email: string
    emailVerified?: boolean | null
    passwordHash: string
    accountStatus?: string | null
    createdAt?: Date | string | null
    lastLogin?: Date | string | null
    userType?: string | null
    tokens?: UserTokenCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutClientInput
    budgets?: BudgetCreateNestedManyWithoutClientInput
    uploadedDocs?: ProjectDocumentCreateNestedManyWithoutUploadedByInput
  }

  export type UserUncheckedCreateWithoutProfileInput = {
    id?: string
    email: string
    emailVerified?: boolean | null
    passwordHash: string
    accountStatus?: string | null
    createdAt?: Date | string | null
    lastLogin?: Date | string | null
    userType?: string | null
    tokens?: UserTokenUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutClientInput
    budgets?: BudgetUncheckedCreateNestedManyWithoutClientInput
    uploadedDocs?: ProjectDocumentUncheckedCreateNestedManyWithoutUploadedByInput
  }

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type UserUpsertWithoutProfileInput = {
    update: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    accountStatus?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userType?: NullableStringFieldUpdateOperationsInput | string | null
    tokens?: UserTokenUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutClientNestedInput
    budgets?: BudgetUpdateManyWithoutClientNestedInput
    uploadedDocs?: ProjectDocumentUpdateManyWithoutUploadedByNestedInput
  }

  export type UserUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    accountStatus?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userType?: NullableStringFieldUpdateOperationsInput | string | null
    tokens?: UserTokenUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutClientNestedInput
    budgets?: BudgetUncheckedUpdateManyWithoutClientNestedInput
    uploadedDocs?: ProjectDocumentUncheckedUpdateManyWithoutUploadedByNestedInput
  }

  export type UserCreateWithoutTokensInput = {
    id?: string
    email: string
    emailVerified?: boolean | null
    passwordHash: string
    accountStatus?: string | null
    createdAt?: Date | string | null
    lastLogin?: Date | string | null
    userType?: string | null
    profile?: UserProfileCreateNestedOneWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutClientInput
    budgets?: BudgetCreateNestedManyWithoutClientInput
    uploadedDocs?: ProjectDocumentCreateNestedManyWithoutUploadedByInput
  }

  export type UserUncheckedCreateWithoutTokensInput = {
    id?: string
    email: string
    emailVerified?: boolean | null
    passwordHash: string
    accountStatus?: string | null
    createdAt?: Date | string | null
    lastLogin?: Date | string | null
    userType?: string | null
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutClientInput
    budgets?: BudgetUncheckedCreateNestedManyWithoutClientInput
    uploadedDocs?: ProjectDocumentUncheckedCreateNestedManyWithoutUploadedByInput
  }

  export type UserCreateOrConnectWithoutTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
  }

  export type UserUpsertWithoutTokensInput = {
    update: XOR<UserUpdateWithoutTokensInput, UserUncheckedUpdateWithoutTokensInput>
    create: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTokensInput, UserUncheckedUpdateWithoutTokensInput>
  }

  export type UserUpdateWithoutTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    accountStatus?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userType?: NullableStringFieldUpdateOperationsInput | string | null
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutClientNestedInput
    budgets?: BudgetUpdateManyWithoutClientNestedInput
    uploadedDocs?: ProjectDocumentUpdateManyWithoutUploadedByNestedInput
  }

  export type UserUncheckedUpdateWithoutTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    accountStatus?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userType?: NullableStringFieldUpdateOperationsInput | string | null
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutClientNestedInput
    budgets?: BudgetUncheckedUpdateManyWithoutClientNestedInput
    uploadedDocs?: ProjectDocumentUncheckedUpdateManyWithoutUploadedByNestedInput
  }

  export type UserCreateWithoutProjectsInput = {
    id?: string
    email: string
    emailVerified?: boolean | null
    passwordHash: string
    accountStatus?: string | null
    createdAt?: Date | string | null
    lastLogin?: Date | string | null
    userType?: string | null
    profile?: UserProfileCreateNestedOneWithoutUserInput
    tokens?: UserTokenCreateNestedManyWithoutUserInput
    budgets?: BudgetCreateNestedManyWithoutClientInput
    uploadedDocs?: ProjectDocumentCreateNestedManyWithoutUploadedByInput
  }

  export type UserUncheckedCreateWithoutProjectsInput = {
    id?: string
    email: string
    emailVerified?: boolean | null
    passwordHash: string
    accountStatus?: string | null
    createdAt?: Date | string | null
    lastLogin?: Date | string | null
    userType?: string | null
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    tokens?: UserTokenUncheckedCreateNestedManyWithoutUserInput
    budgets?: BudgetUncheckedCreateNestedManyWithoutClientInput
    uploadedDocs?: ProjectDocumentUncheckedCreateNestedManyWithoutUploadedByInput
  }

  export type UserCreateOrConnectWithoutProjectsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
  }

  export type ProjectDetailCreateWithoutProjectInput = {
    id?: string
    type?: string | null
    standard?: string | null
    technicalManager?: string | null
    postalCode?: string | null
    country?: string | null
    state?: string | null
    city?: string | null
    neighborhood?: string | null
    street?: string | null
    number?: string | null
    complement?: string | null
  }

  export type ProjectDetailUncheckedCreateWithoutProjectInput = {
    id?: string
    type?: string | null
    standard?: string | null
    technicalManager?: string | null
    postalCode?: string | null
    country?: string | null
    state?: string | null
    city?: string | null
    neighborhood?: string | null
    street?: string | null
    number?: string | null
    complement?: string | null
  }

  export type ProjectDetailCreateOrConnectWithoutProjectInput = {
    where: ProjectDetailWhereUniqueInput
    create: XOR<ProjectDetailCreateWithoutProjectInput, ProjectDetailUncheckedCreateWithoutProjectInput>
  }

  export type ProjectPhaseCreateWithoutProjectInput = {
    id?: string
    name: string
    status?: string | null
    startDate?: Date | string | null
    expectedEndDate?: Date | string | null
    endDate?: Date | string | null
    notes?: string | null
    order?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    tasks?: ProjectPhaseTaskCreateNestedManyWithoutPhaseInput
  }

  export type ProjectPhaseUncheckedCreateWithoutProjectInput = {
    id?: string
    name: string
    status?: string | null
    startDate?: Date | string | null
    expectedEndDate?: Date | string | null
    endDate?: Date | string | null
    notes?: string | null
    order?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    tasks?: ProjectPhaseTaskUncheckedCreateNestedManyWithoutPhaseInput
  }

  export type ProjectPhaseCreateOrConnectWithoutProjectInput = {
    where: ProjectPhaseWhereUniqueInput
    create: XOR<ProjectPhaseCreateWithoutProjectInput, ProjectPhaseUncheckedCreateWithoutProjectInput>
  }

  export type ProjectPhaseCreateManyProjectInputEnvelope = {
    data: ProjectPhaseCreateManyProjectInput | ProjectPhaseCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type ConstructionPhaseCreateWithoutProjectInput = {
    id?: string
    name: string
    status: string
    startDate?: Date | string | null
    expectedEndDate?: Date | string | null
    endDate?: Date | string | null
    budget?: Decimal | DecimalJsLike | number | string | null
    actualCost?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
    responsible?: string | null
    order?: number | null
    tasks?: ConstructionTaskCreateNestedManyWithoutPhaseInput
  }

  export type ConstructionPhaseUncheckedCreateWithoutProjectInput = {
    id?: string
    name: string
    status: string
    startDate?: Date | string | null
    expectedEndDate?: Date | string | null
    endDate?: Date | string | null
    budget?: Decimal | DecimalJsLike | number | string | null
    actualCost?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
    responsible?: string | null
    order?: number | null
    tasks?: ConstructionTaskUncheckedCreateNestedManyWithoutPhaseInput
  }

  export type ConstructionPhaseCreateOrConnectWithoutProjectInput = {
    where: ConstructionPhaseWhereUniqueInput
    create: XOR<ConstructionPhaseCreateWithoutProjectInput, ConstructionPhaseUncheckedCreateWithoutProjectInput>
  }

  export type ConstructionPhaseCreateManyProjectInputEnvelope = {
    data: ConstructionPhaseCreateManyProjectInput | ConstructionPhaseCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type ProjectDocumentCreateWithoutProjectInput = {
    id?: string
    name: string
    type: string
    link: string
    notes?: string | null
    uploadedAt?: Date | string | null
    visibleToClient?: boolean | null
    description?: string | null
    uploadedBy?: UserCreateNestedOneWithoutUploadedDocsInput
  }

  export type ProjectDocumentUncheckedCreateWithoutProjectInput = {
    id?: string
    name: string
    type: string
    link: string
    notes?: string | null
    uploadedAt?: Date | string | null
    uploadedById?: string | null
    visibleToClient?: boolean | null
    description?: string | null
  }

  export type ProjectDocumentCreateOrConnectWithoutProjectInput = {
    where: ProjectDocumentWhereUniqueInput
    create: XOR<ProjectDocumentCreateWithoutProjectInput, ProjectDocumentUncheckedCreateWithoutProjectInput>
  }

  export type ProjectDocumentCreateManyProjectInputEnvelope = {
    data: ProjectDocumentCreateManyProjectInput | ProjectDocumentCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutProjectsInput = {
    update: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProjectsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type UserUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    accountStatus?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userType?: NullableStringFieldUpdateOperationsInput | string | null
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    tokens?: UserTokenUpdateManyWithoutUserNestedInput
    budgets?: BudgetUpdateManyWithoutClientNestedInput
    uploadedDocs?: ProjectDocumentUpdateManyWithoutUploadedByNestedInput
  }

  export type UserUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    accountStatus?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userType?: NullableStringFieldUpdateOperationsInput | string | null
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    tokens?: UserTokenUncheckedUpdateManyWithoutUserNestedInput
    budgets?: BudgetUncheckedUpdateManyWithoutClientNestedInput
    uploadedDocs?: ProjectDocumentUncheckedUpdateManyWithoutUploadedByNestedInput
  }

  export type ProjectDetailUpsertWithoutProjectInput = {
    update: XOR<ProjectDetailUpdateWithoutProjectInput, ProjectDetailUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectDetailCreateWithoutProjectInput, ProjectDetailUncheckedCreateWithoutProjectInput>
    where?: ProjectDetailWhereInput
  }

  export type ProjectDetailUpdateToOneWithWhereWithoutProjectInput = {
    where?: ProjectDetailWhereInput
    data: XOR<ProjectDetailUpdateWithoutProjectInput, ProjectDetailUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectDetailUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: NullableStringFieldUpdateOperationsInput | string | null
    technicalManager?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    neighborhood?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    complement?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectDetailUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: NullableStringFieldUpdateOperationsInput | string | null
    technicalManager?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    neighborhood?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    complement?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectPhaseUpsertWithWhereUniqueWithoutProjectInput = {
    where: ProjectPhaseWhereUniqueInput
    update: XOR<ProjectPhaseUpdateWithoutProjectInput, ProjectPhaseUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectPhaseCreateWithoutProjectInput, ProjectPhaseUncheckedCreateWithoutProjectInput>
  }

  export type ProjectPhaseUpdateWithWhereUniqueWithoutProjectInput = {
    where: ProjectPhaseWhereUniqueInput
    data: XOR<ProjectPhaseUpdateWithoutProjectInput, ProjectPhaseUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectPhaseUpdateManyWithWhereWithoutProjectInput = {
    where: ProjectPhaseScalarWhereInput
    data: XOR<ProjectPhaseUpdateManyMutationInput, ProjectPhaseUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectPhaseScalarWhereInput = {
    AND?: ProjectPhaseScalarWhereInput | ProjectPhaseScalarWhereInput[]
    OR?: ProjectPhaseScalarWhereInput[]
    NOT?: ProjectPhaseScalarWhereInput | ProjectPhaseScalarWhereInput[]
    id?: StringFilter<"ProjectPhase"> | string
    projectId?: StringFilter<"ProjectPhase"> | string
    name?: StringFilter<"ProjectPhase"> | string
    status?: StringNullableFilter<"ProjectPhase"> | string | null
    startDate?: DateTimeNullableFilter<"ProjectPhase"> | Date | string | null
    expectedEndDate?: DateTimeNullableFilter<"ProjectPhase"> | Date | string | null
    endDate?: DateTimeNullableFilter<"ProjectPhase"> | Date | string | null
    notes?: StringNullableFilter<"ProjectPhase"> | string | null
    order?: IntNullableFilter<"ProjectPhase"> | number | null
    createdAt?: DateTimeNullableFilter<"ProjectPhase"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"ProjectPhase"> | Date | string | null
  }

  export type ConstructionPhaseUpsertWithWhereUniqueWithoutProjectInput = {
    where: ConstructionPhaseWhereUniqueInput
    update: XOR<ConstructionPhaseUpdateWithoutProjectInput, ConstructionPhaseUncheckedUpdateWithoutProjectInput>
    create: XOR<ConstructionPhaseCreateWithoutProjectInput, ConstructionPhaseUncheckedCreateWithoutProjectInput>
  }

  export type ConstructionPhaseUpdateWithWhereUniqueWithoutProjectInput = {
    where: ConstructionPhaseWhereUniqueInput
    data: XOR<ConstructionPhaseUpdateWithoutProjectInput, ConstructionPhaseUncheckedUpdateWithoutProjectInput>
  }

  export type ConstructionPhaseUpdateManyWithWhereWithoutProjectInput = {
    where: ConstructionPhaseScalarWhereInput
    data: XOR<ConstructionPhaseUpdateManyMutationInput, ConstructionPhaseUncheckedUpdateManyWithoutProjectInput>
  }

  export type ConstructionPhaseScalarWhereInput = {
    AND?: ConstructionPhaseScalarWhereInput | ConstructionPhaseScalarWhereInput[]
    OR?: ConstructionPhaseScalarWhereInput[]
    NOT?: ConstructionPhaseScalarWhereInput | ConstructionPhaseScalarWhereInput[]
    id?: StringFilter<"ConstructionPhase"> | string
    projectId?: StringFilter<"ConstructionPhase"> | string
    name?: StringFilter<"ConstructionPhase"> | string
    status?: StringFilter<"ConstructionPhase"> | string
    startDate?: DateTimeNullableFilter<"ConstructionPhase"> | Date | string | null
    expectedEndDate?: DateTimeNullableFilter<"ConstructionPhase"> | Date | string | null
    endDate?: DateTimeNullableFilter<"ConstructionPhase"> | Date | string | null
    budget?: DecimalNullableFilter<"ConstructionPhase"> | Decimal | DecimalJsLike | number | string | null
    actualCost?: DecimalNullableFilter<"ConstructionPhase"> | Decimal | DecimalJsLike | number | string | null
    notes?: StringNullableFilter<"ConstructionPhase"> | string | null
    responsible?: StringNullableFilter<"ConstructionPhase"> | string | null
    order?: IntNullableFilter<"ConstructionPhase"> | number | null
  }

  export type ProjectDocumentUpsertWithWhereUniqueWithoutProjectInput = {
    where: ProjectDocumentWhereUniqueInput
    update: XOR<ProjectDocumentUpdateWithoutProjectInput, ProjectDocumentUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectDocumentCreateWithoutProjectInput, ProjectDocumentUncheckedCreateWithoutProjectInput>
  }

  export type ProjectDocumentUpdateWithWhereUniqueWithoutProjectInput = {
    where: ProjectDocumentWhereUniqueInput
    data: XOR<ProjectDocumentUpdateWithoutProjectInput, ProjectDocumentUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectDocumentUpdateManyWithWhereWithoutProjectInput = {
    where: ProjectDocumentScalarWhereInput
    data: XOR<ProjectDocumentUpdateManyMutationInput, ProjectDocumentUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectCreateWithoutDetailsInput = {
    id?: string
    slug: string
    title: string
    status?: string | null
    projectType?: string | null
    developmentType?: string | null
    investmentExpectation?: Decimal | DecimalJsLike | number | string | null
    area?: Decimal | DecimalJsLike | number | string | null
    initialBudget?: Decimal | DecimalJsLike | number | string | null
    expectedBudget?: Decimal | DecimalJsLike | number | string | null
    actualBudget?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string | null
    startDate?: Date | string | null
    expectedEndDate?: Date | string | null
    endDate?: Date | string | null
    coverUrl?: string | null
    client?: UserCreateNestedOneWithoutProjectsInput
    designPhases?: ProjectPhaseCreateNestedManyWithoutProjectInput
    constructionPhases?: ConstructionPhaseCreateNestedManyWithoutProjectInput
    documents?: ProjectDocumentCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutDetailsInput = {
    id?: string
    clientId?: string | null
    slug: string
    title: string
    status?: string | null
    projectType?: string | null
    developmentType?: string | null
    investmentExpectation?: Decimal | DecimalJsLike | number | string | null
    area?: Decimal | DecimalJsLike | number | string | null
    initialBudget?: Decimal | DecimalJsLike | number | string | null
    expectedBudget?: Decimal | DecimalJsLike | number | string | null
    actualBudget?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string | null
    startDate?: Date | string | null
    expectedEndDate?: Date | string | null
    endDate?: Date | string | null
    coverUrl?: string | null
    designPhases?: ProjectPhaseUncheckedCreateNestedManyWithoutProjectInput
    constructionPhases?: ConstructionPhaseUncheckedCreateNestedManyWithoutProjectInput
    documents?: ProjectDocumentUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutDetailsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutDetailsInput, ProjectUncheckedCreateWithoutDetailsInput>
  }

  export type ProjectUpsertWithoutDetailsInput = {
    update: XOR<ProjectUpdateWithoutDetailsInput, ProjectUncheckedUpdateWithoutDetailsInput>
    create: XOR<ProjectCreateWithoutDetailsInput, ProjectUncheckedCreateWithoutDetailsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutDetailsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutDetailsInput, ProjectUncheckedUpdateWithoutDetailsInput>
  }

  export type ProjectUpdateWithoutDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    projectType?: NullableStringFieldUpdateOperationsInput | string | null
    developmentType?: NullableStringFieldUpdateOperationsInput | string | null
    investmentExpectation?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    initialBudget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    expectedBudget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualBudget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expectedEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    client?: UserUpdateOneWithoutProjectsNestedInput
    designPhases?: ProjectPhaseUpdateManyWithoutProjectNestedInput
    constructionPhases?: ConstructionPhaseUpdateManyWithoutProjectNestedInput
    documents?: ProjectDocumentUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    projectType?: NullableStringFieldUpdateOperationsInput | string | null
    developmentType?: NullableStringFieldUpdateOperationsInput | string | null
    investmentExpectation?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    initialBudget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    expectedBudget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualBudget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expectedEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    designPhases?: ProjectPhaseUncheckedUpdateManyWithoutProjectNestedInput
    constructionPhases?: ConstructionPhaseUncheckedUpdateManyWithoutProjectNestedInput
    documents?: ProjectDocumentUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateWithoutDesignPhasesInput = {
    id?: string
    slug: string
    title: string
    status?: string | null
    projectType?: string | null
    developmentType?: string | null
    investmentExpectation?: Decimal | DecimalJsLike | number | string | null
    area?: Decimal | DecimalJsLike | number | string | null
    initialBudget?: Decimal | DecimalJsLike | number | string | null
    expectedBudget?: Decimal | DecimalJsLike | number | string | null
    actualBudget?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string | null
    startDate?: Date | string | null
    expectedEndDate?: Date | string | null
    endDate?: Date | string | null
    coverUrl?: string | null
    client?: UserCreateNestedOneWithoutProjectsInput
    details?: ProjectDetailCreateNestedOneWithoutProjectInput
    constructionPhases?: ConstructionPhaseCreateNestedManyWithoutProjectInput
    documents?: ProjectDocumentCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutDesignPhasesInput = {
    id?: string
    clientId?: string | null
    slug: string
    title: string
    status?: string | null
    projectType?: string | null
    developmentType?: string | null
    investmentExpectation?: Decimal | DecimalJsLike | number | string | null
    area?: Decimal | DecimalJsLike | number | string | null
    initialBudget?: Decimal | DecimalJsLike | number | string | null
    expectedBudget?: Decimal | DecimalJsLike | number | string | null
    actualBudget?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string | null
    startDate?: Date | string | null
    expectedEndDate?: Date | string | null
    endDate?: Date | string | null
    coverUrl?: string | null
    details?: ProjectDetailUncheckedCreateNestedOneWithoutProjectInput
    constructionPhases?: ConstructionPhaseUncheckedCreateNestedManyWithoutProjectInput
    documents?: ProjectDocumentUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutDesignPhasesInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutDesignPhasesInput, ProjectUncheckedCreateWithoutDesignPhasesInput>
  }

  export type ProjectPhaseTaskCreateWithoutPhaseInput = {
    id?: string
    name: string
    status?: string | null
    responsible?: string | null
    startDate?: Date | string | null
    expectedEndDate?: Date | string | null
    endDate?: Date | string | null
    notes?: string | null
    priority?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type ProjectPhaseTaskUncheckedCreateWithoutPhaseInput = {
    id?: string
    name: string
    status?: string | null
    responsible?: string | null
    startDate?: Date | string | null
    expectedEndDate?: Date | string | null
    endDate?: Date | string | null
    notes?: string | null
    priority?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type ProjectPhaseTaskCreateOrConnectWithoutPhaseInput = {
    where: ProjectPhaseTaskWhereUniqueInput
    create: XOR<ProjectPhaseTaskCreateWithoutPhaseInput, ProjectPhaseTaskUncheckedCreateWithoutPhaseInput>
  }

  export type ProjectPhaseTaskCreateManyPhaseInputEnvelope = {
    data: ProjectPhaseTaskCreateManyPhaseInput | ProjectPhaseTaskCreateManyPhaseInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithoutDesignPhasesInput = {
    update: XOR<ProjectUpdateWithoutDesignPhasesInput, ProjectUncheckedUpdateWithoutDesignPhasesInput>
    create: XOR<ProjectCreateWithoutDesignPhasesInput, ProjectUncheckedCreateWithoutDesignPhasesInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutDesignPhasesInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutDesignPhasesInput, ProjectUncheckedUpdateWithoutDesignPhasesInput>
  }

  export type ProjectUpdateWithoutDesignPhasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    projectType?: NullableStringFieldUpdateOperationsInput | string | null
    developmentType?: NullableStringFieldUpdateOperationsInput | string | null
    investmentExpectation?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    initialBudget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    expectedBudget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualBudget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expectedEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    client?: UserUpdateOneWithoutProjectsNestedInput
    details?: ProjectDetailUpdateOneWithoutProjectNestedInput
    constructionPhases?: ConstructionPhaseUpdateManyWithoutProjectNestedInput
    documents?: ProjectDocumentUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutDesignPhasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    projectType?: NullableStringFieldUpdateOperationsInput | string | null
    developmentType?: NullableStringFieldUpdateOperationsInput | string | null
    investmentExpectation?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    initialBudget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    expectedBudget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualBudget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expectedEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    details?: ProjectDetailUncheckedUpdateOneWithoutProjectNestedInput
    constructionPhases?: ConstructionPhaseUncheckedUpdateManyWithoutProjectNestedInput
    documents?: ProjectDocumentUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectPhaseTaskUpsertWithWhereUniqueWithoutPhaseInput = {
    where: ProjectPhaseTaskWhereUniqueInput
    update: XOR<ProjectPhaseTaskUpdateWithoutPhaseInput, ProjectPhaseTaskUncheckedUpdateWithoutPhaseInput>
    create: XOR<ProjectPhaseTaskCreateWithoutPhaseInput, ProjectPhaseTaskUncheckedCreateWithoutPhaseInput>
  }

  export type ProjectPhaseTaskUpdateWithWhereUniqueWithoutPhaseInput = {
    where: ProjectPhaseTaskWhereUniqueInput
    data: XOR<ProjectPhaseTaskUpdateWithoutPhaseInput, ProjectPhaseTaskUncheckedUpdateWithoutPhaseInput>
  }

  export type ProjectPhaseTaskUpdateManyWithWhereWithoutPhaseInput = {
    where: ProjectPhaseTaskScalarWhereInput
    data: XOR<ProjectPhaseTaskUpdateManyMutationInput, ProjectPhaseTaskUncheckedUpdateManyWithoutPhaseInput>
  }

  export type ProjectPhaseTaskScalarWhereInput = {
    AND?: ProjectPhaseTaskScalarWhereInput | ProjectPhaseTaskScalarWhereInput[]
    OR?: ProjectPhaseTaskScalarWhereInput[]
    NOT?: ProjectPhaseTaskScalarWhereInput | ProjectPhaseTaskScalarWhereInput[]
    id?: StringFilter<"ProjectPhaseTask"> | string
    phaseId?: StringFilter<"ProjectPhaseTask"> | string
    name?: StringFilter<"ProjectPhaseTask"> | string
    status?: StringNullableFilter<"ProjectPhaseTask"> | string | null
    responsible?: StringNullableFilter<"ProjectPhaseTask"> | string | null
    startDate?: DateTimeNullableFilter<"ProjectPhaseTask"> | Date | string | null
    expectedEndDate?: DateTimeNullableFilter<"ProjectPhaseTask"> | Date | string | null
    endDate?: DateTimeNullableFilter<"ProjectPhaseTask"> | Date | string | null
    notes?: StringNullableFilter<"ProjectPhaseTask"> | string | null
    priority?: IntNullableFilter<"ProjectPhaseTask"> | number | null
    createdAt?: DateTimeNullableFilter<"ProjectPhaseTask"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"ProjectPhaseTask"> | Date | string | null
  }

  export type ProjectPhaseCreateWithoutTasksInput = {
    id?: string
    name: string
    status?: string | null
    startDate?: Date | string | null
    expectedEndDate?: Date | string | null
    endDate?: Date | string | null
    notes?: string | null
    order?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    project: ProjectCreateNestedOneWithoutDesignPhasesInput
  }

  export type ProjectPhaseUncheckedCreateWithoutTasksInput = {
    id?: string
    projectId: string
    name: string
    status?: string | null
    startDate?: Date | string | null
    expectedEndDate?: Date | string | null
    endDate?: Date | string | null
    notes?: string | null
    order?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type ProjectPhaseCreateOrConnectWithoutTasksInput = {
    where: ProjectPhaseWhereUniqueInput
    create: XOR<ProjectPhaseCreateWithoutTasksInput, ProjectPhaseUncheckedCreateWithoutTasksInput>
  }

  export type ProjectPhaseUpsertWithoutTasksInput = {
    update: XOR<ProjectPhaseUpdateWithoutTasksInput, ProjectPhaseUncheckedUpdateWithoutTasksInput>
    create: XOR<ProjectPhaseCreateWithoutTasksInput, ProjectPhaseUncheckedCreateWithoutTasksInput>
    where?: ProjectPhaseWhereInput
  }

  export type ProjectPhaseUpdateToOneWithWhereWithoutTasksInput = {
    where?: ProjectPhaseWhereInput
    data: XOR<ProjectPhaseUpdateWithoutTasksInput, ProjectPhaseUncheckedUpdateWithoutTasksInput>
  }

  export type ProjectPhaseUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expectedEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    project?: ProjectUpdateOneRequiredWithoutDesignPhasesNestedInput
  }

  export type ProjectPhaseUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expectedEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProjectCreateWithoutConstructionPhasesInput = {
    id?: string
    slug: string
    title: string
    status?: string | null
    projectType?: string | null
    developmentType?: string | null
    investmentExpectation?: Decimal | DecimalJsLike | number | string | null
    area?: Decimal | DecimalJsLike | number | string | null
    initialBudget?: Decimal | DecimalJsLike | number | string | null
    expectedBudget?: Decimal | DecimalJsLike | number | string | null
    actualBudget?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string | null
    startDate?: Date | string | null
    expectedEndDate?: Date | string | null
    endDate?: Date | string | null
    coverUrl?: string | null
    client?: UserCreateNestedOneWithoutProjectsInput
    details?: ProjectDetailCreateNestedOneWithoutProjectInput
    designPhases?: ProjectPhaseCreateNestedManyWithoutProjectInput
    documents?: ProjectDocumentCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutConstructionPhasesInput = {
    id?: string
    clientId?: string | null
    slug: string
    title: string
    status?: string | null
    projectType?: string | null
    developmentType?: string | null
    investmentExpectation?: Decimal | DecimalJsLike | number | string | null
    area?: Decimal | DecimalJsLike | number | string | null
    initialBudget?: Decimal | DecimalJsLike | number | string | null
    expectedBudget?: Decimal | DecimalJsLike | number | string | null
    actualBudget?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string | null
    startDate?: Date | string | null
    expectedEndDate?: Date | string | null
    endDate?: Date | string | null
    coverUrl?: string | null
    details?: ProjectDetailUncheckedCreateNestedOneWithoutProjectInput
    designPhases?: ProjectPhaseUncheckedCreateNestedManyWithoutProjectInput
    documents?: ProjectDocumentUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutConstructionPhasesInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutConstructionPhasesInput, ProjectUncheckedCreateWithoutConstructionPhasesInput>
  }

  export type ConstructionTaskCreateWithoutPhaseInput = {
    id?: string
    name: string
    status: string
    budget?: Decimal | DecimalJsLike | number | string | null
    actualCost?: Decimal | DecimalJsLike | number | string | null
    startDate?: Date | string | null
    expectedEndDate?: Date | string | null
    endDate?: Date | string | null
    notes?: string | null
    responsible?: string | null
    priority?: number | null
  }

  export type ConstructionTaskUncheckedCreateWithoutPhaseInput = {
    id?: string
    name: string
    status: string
    budget?: Decimal | DecimalJsLike | number | string | null
    actualCost?: Decimal | DecimalJsLike | number | string | null
    startDate?: Date | string | null
    expectedEndDate?: Date | string | null
    endDate?: Date | string | null
    notes?: string | null
    responsible?: string | null
    priority?: number | null
  }

  export type ConstructionTaskCreateOrConnectWithoutPhaseInput = {
    where: ConstructionTaskWhereUniqueInput
    create: XOR<ConstructionTaskCreateWithoutPhaseInput, ConstructionTaskUncheckedCreateWithoutPhaseInput>
  }

  export type ConstructionTaskCreateManyPhaseInputEnvelope = {
    data: ConstructionTaskCreateManyPhaseInput | ConstructionTaskCreateManyPhaseInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithoutConstructionPhasesInput = {
    update: XOR<ProjectUpdateWithoutConstructionPhasesInput, ProjectUncheckedUpdateWithoutConstructionPhasesInput>
    create: XOR<ProjectCreateWithoutConstructionPhasesInput, ProjectUncheckedCreateWithoutConstructionPhasesInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutConstructionPhasesInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutConstructionPhasesInput, ProjectUncheckedUpdateWithoutConstructionPhasesInput>
  }

  export type ProjectUpdateWithoutConstructionPhasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    projectType?: NullableStringFieldUpdateOperationsInput | string | null
    developmentType?: NullableStringFieldUpdateOperationsInput | string | null
    investmentExpectation?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    initialBudget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    expectedBudget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualBudget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expectedEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    client?: UserUpdateOneWithoutProjectsNestedInput
    details?: ProjectDetailUpdateOneWithoutProjectNestedInput
    designPhases?: ProjectPhaseUpdateManyWithoutProjectNestedInput
    documents?: ProjectDocumentUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutConstructionPhasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    projectType?: NullableStringFieldUpdateOperationsInput | string | null
    developmentType?: NullableStringFieldUpdateOperationsInput | string | null
    investmentExpectation?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    initialBudget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    expectedBudget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualBudget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expectedEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    details?: ProjectDetailUncheckedUpdateOneWithoutProjectNestedInput
    designPhases?: ProjectPhaseUncheckedUpdateManyWithoutProjectNestedInput
    documents?: ProjectDocumentUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ConstructionTaskUpsertWithWhereUniqueWithoutPhaseInput = {
    where: ConstructionTaskWhereUniqueInput
    update: XOR<ConstructionTaskUpdateWithoutPhaseInput, ConstructionTaskUncheckedUpdateWithoutPhaseInput>
    create: XOR<ConstructionTaskCreateWithoutPhaseInput, ConstructionTaskUncheckedCreateWithoutPhaseInput>
  }

  export type ConstructionTaskUpdateWithWhereUniqueWithoutPhaseInput = {
    where: ConstructionTaskWhereUniqueInput
    data: XOR<ConstructionTaskUpdateWithoutPhaseInput, ConstructionTaskUncheckedUpdateWithoutPhaseInput>
  }

  export type ConstructionTaskUpdateManyWithWhereWithoutPhaseInput = {
    where: ConstructionTaskScalarWhereInput
    data: XOR<ConstructionTaskUpdateManyMutationInput, ConstructionTaskUncheckedUpdateManyWithoutPhaseInput>
  }

  export type ConstructionTaskScalarWhereInput = {
    AND?: ConstructionTaskScalarWhereInput | ConstructionTaskScalarWhereInput[]
    OR?: ConstructionTaskScalarWhereInput[]
    NOT?: ConstructionTaskScalarWhereInput | ConstructionTaskScalarWhereInput[]
    id?: StringFilter<"ConstructionTask"> | string
    phaseId?: StringFilter<"ConstructionTask"> | string
    name?: StringFilter<"ConstructionTask"> | string
    status?: StringFilter<"ConstructionTask"> | string
    budget?: DecimalNullableFilter<"ConstructionTask"> | Decimal | DecimalJsLike | number | string | null
    actualCost?: DecimalNullableFilter<"ConstructionTask"> | Decimal | DecimalJsLike | number | string | null
    startDate?: DateTimeNullableFilter<"ConstructionTask"> | Date | string | null
    expectedEndDate?: DateTimeNullableFilter<"ConstructionTask"> | Date | string | null
    endDate?: DateTimeNullableFilter<"ConstructionTask"> | Date | string | null
    notes?: StringNullableFilter<"ConstructionTask"> | string | null
    responsible?: StringNullableFilter<"ConstructionTask"> | string | null
    priority?: IntNullableFilter<"ConstructionTask"> | number | null
  }

  export type ConstructionPhaseCreateWithoutTasksInput = {
    id?: string
    name: string
    status: string
    startDate?: Date | string | null
    expectedEndDate?: Date | string | null
    endDate?: Date | string | null
    budget?: Decimal | DecimalJsLike | number | string | null
    actualCost?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
    responsible?: string | null
    order?: number | null
    project: ProjectCreateNestedOneWithoutConstructionPhasesInput
  }

  export type ConstructionPhaseUncheckedCreateWithoutTasksInput = {
    id?: string
    projectId: string
    name: string
    status: string
    startDate?: Date | string | null
    expectedEndDate?: Date | string | null
    endDate?: Date | string | null
    budget?: Decimal | DecimalJsLike | number | string | null
    actualCost?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
    responsible?: string | null
    order?: number | null
  }

  export type ConstructionPhaseCreateOrConnectWithoutTasksInput = {
    where: ConstructionPhaseWhereUniqueInput
    create: XOR<ConstructionPhaseCreateWithoutTasksInput, ConstructionPhaseUncheckedCreateWithoutTasksInput>
  }

  export type ConstructionPhaseUpsertWithoutTasksInput = {
    update: XOR<ConstructionPhaseUpdateWithoutTasksInput, ConstructionPhaseUncheckedUpdateWithoutTasksInput>
    create: XOR<ConstructionPhaseCreateWithoutTasksInput, ConstructionPhaseUncheckedCreateWithoutTasksInput>
    where?: ConstructionPhaseWhereInput
  }

  export type ConstructionPhaseUpdateToOneWithWhereWithoutTasksInput = {
    where?: ConstructionPhaseWhereInput
    data: XOR<ConstructionPhaseUpdateWithoutTasksInput, ConstructionPhaseUncheckedUpdateWithoutTasksInput>
  }

  export type ConstructionPhaseUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expectedEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    responsible?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    project?: ProjectUpdateOneRequiredWithoutConstructionPhasesNestedInput
  }

  export type ConstructionPhaseUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expectedEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    responsible?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProjectCreateWithoutDocumentsInput = {
    id?: string
    slug: string
    title: string
    status?: string | null
    projectType?: string | null
    developmentType?: string | null
    investmentExpectation?: Decimal | DecimalJsLike | number | string | null
    area?: Decimal | DecimalJsLike | number | string | null
    initialBudget?: Decimal | DecimalJsLike | number | string | null
    expectedBudget?: Decimal | DecimalJsLike | number | string | null
    actualBudget?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string | null
    startDate?: Date | string | null
    expectedEndDate?: Date | string | null
    endDate?: Date | string | null
    coverUrl?: string | null
    client?: UserCreateNestedOneWithoutProjectsInput
    details?: ProjectDetailCreateNestedOneWithoutProjectInput
    designPhases?: ProjectPhaseCreateNestedManyWithoutProjectInput
    constructionPhases?: ConstructionPhaseCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutDocumentsInput = {
    id?: string
    clientId?: string | null
    slug: string
    title: string
    status?: string | null
    projectType?: string | null
    developmentType?: string | null
    investmentExpectation?: Decimal | DecimalJsLike | number | string | null
    area?: Decimal | DecimalJsLike | number | string | null
    initialBudget?: Decimal | DecimalJsLike | number | string | null
    expectedBudget?: Decimal | DecimalJsLike | number | string | null
    actualBudget?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string | null
    startDate?: Date | string | null
    expectedEndDate?: Date | string | null
    endDate?: Date | string | null
    coverUrl?: string | null
    details?: ProjectDetailUncheckedCreateNestedOneWithoutProjectInput
    designPhases?: ProjectPhaseUncheckedCreateNestedManyWithoutProjectInput
    constructionPhases?: ConstructionPhaseUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutDocumentsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutDocumentsInput, ProjectUncheckedCreateWithoutDocumentsInput>
  }

  export type UserCreateWithoutUploadedDocsInput = {
    id?: string
    email: string
    emailVerified?: boolean | null
    passwordHash: string
    accountStatus?: string | null
    createdAt?: Date | string | null
    lastLogin?: Date | string | null
    userType?: string | null
    profile?: UserProfileCreateNestedOneWithoutUserInput
    tokens?: UserTokenCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutClientInput
    budgets?: BudgetCreateNestedManyWithoutClientInput
  }

  export type UserUncheckedCreateWithoutUploadedDocsInput = {
    id?: string
    email: string
    emailVerified?: boolean | null
    passwordHash: string
    accountStatus?: string | null
    createdAt?: Date | string | null
    lastLogin?: Date | string | null
    userType?: string | null
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    tokens?: UserTokenUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutClientInput
    budgets?: BudgetUncheckedCreateNestedManyWithoutClientInput
  }

  export type UserCreateOrConnectWithoutUploadedDocsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUploadedDocsInput, UserUncheckedCreateWithoutUploadedDocsInput>
  }

  export type ProjectUpsertWithoutDocumentsInput = {
    update: XOR<ProjectUpdateWithoutDocumentsInput, ProjectUncheckedUpdateWithoutDocumentsInput>
    create: XOR<ProjectCreateWithoutDocumentsInput, ProjectUncheckedCreateWithoutDocumentsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutDocumentsInput, ProjectUncheckedUpdateWithoutDocumentsInput>
  }

  export type ProjectUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    projectType?: NullableStringFieldUpdateOperationsInput | string | null
    developmentType?: NullableStringFieldUpdateOperationsInput | string | null
    investmentExpectation?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    initialBudget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    expectedBudget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualBudget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expectedEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    client?: UserUpdateOneWithoutProjectsNestedInput
    details?: ProjectDetailUpdateOneWithoutProjectNestedInput
    designPhases?: ProjectPhaseUpdateManyWithoutProjectNestedInput
    constructionPhases?: ConstructionPhaseUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    projectType?: NullableStringFieldUpdateOperationsInput | string | null
    developmentType?: NullableStringFieldUpdateOperationsInput | string | null
    investmentExpectation?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    initialBudget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    expectedBudget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualBudget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expectedEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    details?: ProjectDetailUncheckedUpdateOneWithoutProjectNestedInput
    designPhases?: ProjectPhaseUncheckedUpdateManyWithoutProjectNestedInput
    constructionPhases?: ConstructionPhaseUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type UserUpsertWithoutUploadedDocsInput = {
    update: XOR<UserUpdateWithoutUploadedDocsInput, UserUncheckedUpdateWithoutUploadedDocsInput>
    create: XOR<UserCreateWithoutUploadedDocsInput, UserUncheckedCreateWithoutUploadedDocsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUploadedDocsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUploadedDocsInput, UserUncheckedUpdateWithoutUploadedDocsInput>
  }

  export type UserUpdateWithoutUploadedDocsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    accountStatus?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userType?: NullableStringFieldUpdateOperationsInput | string | null
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    tokens?: UserTokenUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutClientNestedInput
    budgets?: BudgetUpdateManyWithoutClientNestedInput
  }

  export type UserUncheckedUpdateWithoutUploadedDocsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    accountStatus?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userType?: NullableStringFieldUpdateOperationsInput | string | null
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    tokens?: UserTokenUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutClientNestedInput
    budgets?: BudgetUncheckedUpdateManyWithoutClientNestedInput
  }

  export type UserCreateWithoutBudgetsInput = {
    id?: string
    email: string
    emailVerified?: boolean | null
    passwordHash: string
    accountStatus?: string | null
    createdAt?: Date | string | null
    lastLogin?: Date | string | null
    userType?: string | null
    profile?: UserProfileCreateNestedOneWithoutUserInput
    tokens?: UserTokenCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutClientInput
    uploadedDocs?: ProjectDocumentCreateNestedManyWithoutUploadedByInput
  }

  export type UserUncheckedCreateWithoutBudgetsInput = {
    id?: string
    email: string
    emailVerified?: boolean | null
    passwordHash: string
    accountStatus?: string | null
    createdAt?: Date | string | null
    lastLogin?: Date | string | null
    userType?: string | null
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    tokens?: UserTokenUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutClientInput
    uploadedDocs?: ProjectDocumentUncheckedCreateNestedManyWithoutUploadedByInput
  }

  export type UserCreateOrConnectWithoutBudgetsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBudgetsInput, UserUncheckedCreateWithoutBudgetsInput>
  }

  export type UserUpsertWithoutBudgetsInput = {
    update: XOR<UserUpdateWithoutBudgetsInput, UserUncheckedUpdateWithoutBudgetsInput>
    create: XOR<UserCreateWithoutBudgetsInput, UserUncheckedCreateWithoutBudgetsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBudgetsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBudgetsInput, UserUncheckedUpdateWithoutBudgetsInput>
  }

  export type UserUpdateWithoutBudgetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    accountStatus?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userType?: NullableStringFieldUpdateOperationsInput | string | null
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    tokens?: UserTokenUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutClientNestedInput
    uploadedDocs?: ProjectDocumentUpdateManyWithoutUploadedByNestedInput
  }

  export type UserUncheckedUpdateWithoutBudgetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    accountStatus?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userType?: NullableStringFieldUpdateOperationsInput | string | null
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    tokens?: UserTokenUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutClientNestedInput
    uploadedDocs?: ProjectDocumentUncheckedUpdateManyWithoutUploadedByNestedInput
  }

  export type UserTokenCreateManyUserInput = {
    id?: string
    tokenType?: string | null
    token: string
    tokenExpiry?: Date | string | null
    createdAt?: Date | string | null
  }

  export type ProjectCreateManyClientInput = {
    id?: string
    slug: string
    title: string
    status?: string | null
    projectType?: string | null
    developmentType?: string | null
    investmentExpectation?: Decimal | DecimalJsLike | number | string | null
    area?: Decimal | DecimalJsLike | number | string | null
    initialBudget?: Decimal | DecimalJsLike | number | string | null
    expectedBudget?: Decimal | DecimalJsLike | number | string | null
    actualBudget?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string | null
    startDate?: Date | string | null
    expectedEndDate?: Date | string | null
    endDate?: Date | string | null
    coverUrl?: string | null
  }

  export type BudgetCreateManyClientInput = {
    id?: string
    totalValue: Decimal | DecimalJsLike | number | string
    status?: string | null
    version?: number | null
    sentAt?: Date | string | null
    acceptedAt?: Date | string | null
    paymentTerms?: string | null
    summary?: string | null
    notes?: string | null
    fileUrl?: string | null
    title?: string | null
  }

  export type ProjectDocumentCreateManyUploadedByInput = {
    id?: string
    projectId: string
    name: string
    type: string
    link: string
    notes?: string | null
    uploadedAt?: Date | string | null
    visibleToClient?: boolean | null
    description?: string | null
  }

  export type UserTokenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenType?: NullableStringFieldUpdateOperationsInput | string | null
    token?: StringFieldUpdateOperationsInput | string
    tokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserTokenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenType?: NullableStringFieldUpdateOperationsInput | string | null
    token?: StringFieldUpdateOperationsInput | string
    tokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserTokenUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenType?: NullableStringFieldUpdateOperationsInput | string | null
    token?: StringFieldUpdateOperationsInput | string
    tokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProjectUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    projectType?: NullableStringFieldUpdateOperationsInput | string | null
    developmentType?: NullableStringFieldUpdateOperationsInput | string | null
    investmentExpectation?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    initialBudget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    expectedBudget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualBudget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expectedEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    details?: ProjectDetailUpdateOneWithoutProjectNestedInput
    designPhases?: ProjectPhaseUpdateManyWithoutProjectNestedInput
    constructionPhases?: ConstructionPhaseUpdateManyWithoutProjectNestedInput
    documents?: ProjectDocumentUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    projectType?: NullableStringFieldUpdateOperationsInput | string | null
    developmentType?: NullableStringFieldUpdateOperationsInput | string | null
    investmentExpectation?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    initialBudget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    expectedBudget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualBudget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expectedEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    details?: ProjectDetailUncheckedUpdateOneWithoutProjectNestedInput
    designPhases?: ProjectPhaseUncheckedUpdateManyWithoutProjectNestedInput
    constructionPhases?: ConstructionPhaseUncheckedUpdateManyWithoutProjectNestedInput
    documents?: ProjectDocumentUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    projectType?: NullableStringFieldUpdateOperationsInput | string | null
    developmentType?: NullableStringFieldUpdateOperationsInput | string | null
    investmentExpectation?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    initialBudget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    expectedBudget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualBudget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expectedEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BudgetUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableIntFieldUpdateOperationsInput | number | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentTerms?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BudgetUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableIntFieldUpdateOperationsInput | number | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentTerms?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BudgetUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableIntFieldUpdateOperationsInput | number | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentTerms?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectDocumentUpdateWithoutUploadedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    visibleToClient?: NullableBoolFieldUpdateOperationsInput | boolean | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    project?: ProjectUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type ProjectDocumentUncheckedUpdateWithoutUploadedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    visibleToClient?: NullableBoolFieldUpdateOperationsInput | boolean | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectDocumentUncheckedUpdateManyWithoutUploadedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    visibleToClient?: NullableBoolFieldUpdateOperationsInput | boolean | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectPhaseCreateManyProjectInput = {
    id?: string
    name: string
    status?: string | null
    startDate?: Date | string | null
    expectedEndDate?: Date | string | null
    endDate?: Date | string | null
    notes?: string | null
    order?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type ConstructionPhaseCreateManyProjectInput = {
    id?: string
    name: string
    status: string
    startDate?: Date | string | null
    expectedEndDate?: Date | string | null
    endDate?: Date | string | null
    budget?: Decimal | DecimalJsLike | number | string | null
    actualCost?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
    responsible?: string | null
    order?: number | null
  }

  export type ProjectDocumentCreateManyProjectInput = {
    id?: string
    name: string
    type: string
    link: string
    notes?: string | null
    uploadedAt?: Date | string | null
    uploadedById?: string | null
    visibleToClient?: boolean | null
    description?: string | null
  }

  export type ProjectPhaseUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expectedEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tasks?: ProjectPhaseTaskUpdateManyWithoutPhaseNestedInput
  }

  export type ProjectPhaseUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expectedEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tasks?: ProjectPhaseTaskUncheckedUpdateManyWithoutPhaseNestedInput
  }

  export type ProjectPhaseUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expectedEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ConstructionPhaseUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expectedEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    responsible?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    tasks?: ConstructionTaskUpdateManyWithoutPhaseNestedInput
  }

  export type ConstructionPhaseUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expectedEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    responsible?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    tasks?: ConstructionTaskUncheckedUpdateManyWithoutPhaseNestedInput
  }

  export type ConstructionPhaseUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expectedEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    responsible?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProjectDocumentUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    visibleToClient?: NullableBoolFieldUpdateOperationsInput | boolean | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedBy?: UserUpdateOneWithoutUploadedDocsNestedInput
  }

  export type ProjectDocumentUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    uploadedById?: NullableStringFieldUpdateOperationsInput | string | null
    visibleToClient?: NullableBoolFieldUpdateOperationsInput | boolean | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectDocumentUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    uploadedById?: NullableStringFieldUpdateOperationsInput | string | null
    visibleToClient?: NullableBoolFieldUpdateOperationsInput | boolean | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectPhaseTaskCreateManyPhaseInput = {
    id?: string
    name: string
    status?: string | null
    responsible?: string | null
    startDate?: Date | string | null
    expectedEndDate?: Date | string | null
    endDate?: Date | string | null
    notes?: string | null
    priority?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type ProjectPhaseTaskUpdateWithoutPhaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    responsible?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expectedEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProjectPhaseTaskUncheckedUpdateWithoutPhaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    responsible?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expectedEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProjectPhaseTaskUncheckedUpdateManyWithoutPhaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    responsible?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expectedEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ConstructionTaskCreateManyPhaseInput = {
    id?: string
    name: string
    status: string
    budget?: Decimal | DecimalJsLike | number | string | null
    actualCost?: Decimal | DecimalJsLike | number | string | null
    startDate?: Date | string | null
    expectedEndDate?: Date | string | null
    endDate?: Date | string | null
    notes?: string | null
    responsible?: string | null
    priority?: number | null
  }

  export type ConstructionTaskUpdateWithoutPhaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expectedEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    responsible?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ConstructionTaskUncheckedUpdateWithoutPhaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expectedEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    responsible?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ConstructionTaskUncheckedUpdateManyWithoutPhaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expectedEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    responsible?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
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