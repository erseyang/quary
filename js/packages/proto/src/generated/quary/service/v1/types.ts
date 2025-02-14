/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "quary.service.v1";

export interface Test {
  testType?:
    | { $case: "sql"; sql: TestSQLFile }
    | { $case: "unique"; unique: TestUnique }
    | { $case: "notNull"; notNull: TestNotNull }
    | { $case: "relationship"; relationship: TestRelationship }
    | { $case: "acceptedValues"; acceptedValues: TestAcceptedValues }
    | { $case: "greaterThanOrEqual"; greaterThanOrEqual: TestGreaterThanOrEqual }
    | { $case: "lessThanOrEqual"; lessThanOrEqual: TestLessThanOrEqual }
    | { $case: "greaterThan"; greaterThan: TestGreaterThan }
    | { $case: "lessThan"; lessThan: TestLessThan }
    | { $case: "multiColumnUnique"; multiColumnUnique: TestMultiColumnUnique }
    | undefined;
}

export interface TestSQLFile {
  filePath: string;
  references: string[];
}

export interface TestUnique {
  filePath: string;
  model: string;
  path: string;
  column: string;
}

export interface TestNotNull {
  filePath: string;
  model: string;
  path: string;
  column: string;
}

export interface TestGreaterThanOrEqual {
  filePath: string;
  model: string;
  path: string;
  column: string;
  value: string;
}

export interface TestLessThanOrEqual {
  filePath: string;
  model: string;
  path: string;
  column: string;
  value: string;
}

export interface TestGreaterThan {
  filePath: string;
  model: string;
  path: string;
  column: string;
  value: string;
}

export interface TestLessThan {
  filePath: string;
  model: string;
  path: string;
  column: string;
  value: string;
}

export interface TestRelationship {
  filePath: string;
  sourceModel: string;
  sourcePath: string;
  sourceColumn: string;
  targetModel: string;
  targetPath: string;
  targetColumn: string;
}

export interface TestAcceptedValues {
  filePath: string;
  model: string;
  path: string;
  column: string;
  acceptedValues: string[];
}

export interface TestMultiColumnUnique {
  filePath: string;
  model: string;
  path: string;
  columns: string[];
}

export interface Seed {
  name: string;
  filePath: string;
  fileSha256Hash: string;
}

export interface Model {
  name: string;
  description?:
    | string
    | undefined;
  /** Tags are used to group different parts of the project together. */
  tags: string[];
  filePath: string;
  fileSha256Hash: string;
  materialization?: string | undefined;
  columns: Model_ModelColum[];
  /**
   * References to other models/seeds/snapshots that are used in the model. These are unique keys and sorted
   * alphabetically.
   */
  references: string[];
}

export interface Model_ModelColum {
  title: string;
  description?: string | undefined;
}

export interface Snapshot {
  name: string;
  description?:
    | string
    | undefined;
  /** Tags are used to group different parts of the project together. */
  tags: string[];
  filePath: string;
  fileSha256Hash: string;
  uniqueKey: string;
  strategy:
    | Snapshot_SnapshotStrategy
    | undefined;
  /**
   * References to other seeds/sources that are used in the snapshot. These are unique keys and sorted
   * alphabetically.
   */
  references: string[];
}

export interface Snapshot_SnapshotStrategy {
  strategyType?: { $case: "timestamp"; timestamp: Snapshot_SnapshotStrategy_TimestampStrategy } | undefined;
}

export interface Snapshot_SnapshotStrategy_TimestampStrategy {
  updatedAt: string;
}

/** Generic source structure, used as input to generate the quary-specific source structure */
export interface DatabaseSource {
  name: string;
  path: string;
  columns: string[];
}

export interface Source {
  name: string;
  description?: string | undefined;
  path: string;
  /** Tags are used to group different parts of the project together. */
  tags: string[];
  /** TODO Replace File path references with whole file references */
  filePath: string;
  columns: Source_SourceColumn[];
}

export interface Source_SourceColumn {
  title: string;
  description?: string | undefined;
}

function createBaseTest(): Test {
  return { testType: undefined };
}

export const Test = {
  encode(message: Test, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    switch (message.testType?.$case) {
      case "sql":
        TestSQLFile.encode(message.testType.sql, writer.uint32(10).fork()).ldelim();
        break;
      case "unique":
        TestUnique.encode(message.testType.unique, writer.uint32(18).fork()).ldelim();
        break;
      case "notNull":
        TestNotNull.encode(message.testType.notNull, writer.uint32(26).fork()).ldelim();
        break;
      case "relationship":
        TestRelationship.encode(message.testType.relationship, writer.uint32(34).fork()).ldelim();
        break;
      case "acceptedValues":
        TestAcceptedValues.encode(message.testType.acceptedValues, writer.uint32(42).fork()).ldelim();
        break;
      case "greaterThanOrEqual":
        TestGreaterThanOrEqual.encode(message.testType.greaterThanOrEqual, writer.uint32(50).fork()).ldelim();
        break;
      case "lessThanOrEqual":
        TestLessThanOrEqual.encode(message.testType.lessThanOrEqual, writer.uint32(58).fork()).ldelim();
        break;
      case "greaterThan":
        TestGreaterThan.encode(message.testType.greaterThan, writer.uint32(66).fork()).ldelim();
        break;
      case "lessThan":
        TestLessThan.encode(message.testType.lessThan, writer.uint32(74).fork()).ldelim();
        break;
      case "multiColumnUnique":
        TestMultiColumnUnique.encode(message.testType.multiColumnUnique, writer.uint32(82).fork()).ldelim();
        break;
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Test {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.testType = { $case: "sql", sql: TestSQLFile.decode(reader, reader.uint32()) };
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.testType = { $case: "unique", unique: TestUnique.decode(reader, reader.uint32()) };
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.testType = { $case: "notNull", notNull: TestNotNull.decode(reader, reader.uint32()) };
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.testType = { $case: "relationship", relationship: TestRelationship.decode(reader, reader.uint32()) };
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.testType = {
            $case: "acceptedValues",
            acceptedValues: TestAcceptedValues.decode(reader, reader.uint32()),
          };
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.testType = {
            $case: "greaterThanOrEqual",
            greaterThanOrEqual: TestGreaterThanOrEqual.decode(reader, reader.uint32()),
          };
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.testType = {
            $case: "lessThanOrEqual",
            lessThanOrEqual: TestLessThanOrEqual.decode(reader, reader.uint32()),
          };
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.testType = { $case: "greaterThan", greaterThan: TestGreaterThan.decode(reader, reader.uint32()) };
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.testType = { $case: "lessThan", lessThan: TestLessThan.decode(reader, reader.uint32()) };
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.testType = {
            $case: "multiColumnUnique",
            multiColumnUnique: TestMultiColumnUnique.decode(reader, reader.uint32()),
          };
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Test {
    return {
      testType: isSet(object.sql)
        ? { $case: "sql", sql: TestSQLFile.fromJSON(object.sql) }
        : isSet(object.unique)
        ? { $case: "unique", unique: TestUnique.fromJSON(object.unique) }
        : isSet(object.notNull)
        ? { $case: "notNull", notNull: TestNotNull.fromJSON(object.notNull) }
        : isSet(object.relationship)
        ? { $case: "relationship", relationship: TestRelationship.fromJSON(object.relationship) }
        : isSet(object.acceptedValues)
        ? { $case: "acceptedValues", acceptedValues: TestAcceptedValues.fromJSON(object.acceptedValues) }
        : isSet(object.greaterThanOrEqual)
        ? {
          $case: "greaterThanOrEqual",
          greaterThanOrEqual: TestGreaterThanOrEqual.fromJSON(object.greaterThanOrEqual),
        }
        : isSet(object.lessThanOrEqual)
        ? { $case: "lessThanOrEqual", lessThanOrEqual: TestLessThanOrEqual.fromJSON(object.lessThanOrEqual) }
        : isSet(object.greaterThan)
        ? { $case: "greaterThan", greaterThan: TestGreaterThan.fromJSON(object.greaterThan) }
        : isSet(object.lessThan)
        ? { $case: "lessThan", lessThan: TestLessThan.fromJSON(object.lessThan) }
        : isSet(object.multiColumnUnique)
        ? { $case: "multiColumnUnique", multiColumnUnique: TestMultiColumnUnique.fromJSON(object.multiColumnUnique) }
        : undefined,
    };
  },

  toJSON(message: Test): unknown {
    const obj: any = {};
    if (message.testType?.$case === "sql") {
      obj.sql = TestSQLFile.toJSON(message.testType.sql);
    }
    if (message.testType?.$case === "unique") {
      obj.unique = TestUnique.toJSON(message.testType.unique);
    }
    if (message.testType?.$case === "notNull") {
      obj.notNull = TestNotNull.toJSON(message.testType.notNull);
    }
    if (message.testType?.$case === "relationship") {
      obj.relationship = TestRelationship.toJSON(message.testType.relationship);
    }
    if (message.testType?.$case === "acceptedValues") {
      obj.acceptedValues = TestAcceptedValues.toJSON(message.testType.acceptedValues);
    }
    if (message.testType?.$case === "greaterThanOrEqual") {
      obj.greaterThanOrEqual = TestGreaterThanOrEqual.toJSON(message.testType.greaterThanOrEqual);
    }
    if (message.testType?.$case === "lessThanOrEqual") {
      obj.lessThanOrEqual = TestLessThanOrEqual.toJSON(message.testType.lessThanOrEqual);
    }
    if (message.testType?.$case === "greaterThan") {
      obj.greaterThan = TestGreaterThan.toJSON(message.testType.greaterThan);
    }
    if (message.testType?.$case === "lessThan") {
      obj.lessThan = TestLessThan.toJSON(message.testType.lessThan);
    }
    if (message.testType?.$case === "multiColumnUnique") {
      obj.multiColumnUnique = TestMultiColumnUnique.toJSON(message.testType.multiColumnUnique);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Test>, I>>(base?: I): Test {
    return Test.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Test>, I>>(object: I): Test {
    const message = createBaseTest();
    if (object.testType?.$case === "sql" && object.testType?.sql !== undefined && object.testType?.sql !== null) {
      message.testType = { $case: "sql", sql: TestSQLFile.fromPartial(object.testType.sql) };
    }
    if (
      object.testType?.$case === "unique" && object.testType?.unique !== undefined && object.testType?.unique !== null
    ) {
      message.testType = { $case: "unique", unique: TestUnique.fromPartial(object.testType.unique) };
    }
    if (
      object.testType?.$case === "notNull" &&
      object.testType?.notNull !== undefined &&
      object.testType?.notNull !== null
    ) {
      message.testType = { $case: "notNull", notNull: TestNotNull.fromPartial(object.testType.notNull) };
    }
    if (
      object.testType?.$case === "relationship" &&
      object.testType?.relationship !== undefined &&
      object.testType?.relationship !== null
    ) {
      message.testType = {
        $case: "relationship",
        relationship: TestRelationship.fromPartial(object.testType.relationship),
      };
    }
    if (
      object.testType?.$case === "acceptedValues" &&
      object.testType?.acceptedValues !== undefined &&
      object.testType?.acceptedValues !== null
    ) {
      message.testType = {
        $case: "acceptedValues",
        acceptedValues: TestAcceptedValues.fromPartial(object.testType.acceptedValues),
      };
    }
    if (
      object.testType?.$case === "greaterThanOrEqual" &&
      object.testType?.greaterThanOrEqual !== undefined &&
      object.testType?.greaterThanOrEqual !== null
    ) {
      message.testType = {
        $case: "greaterThanOrEqual",
        greaterThanOrEqual: TestGreaterThanOrEqual.fromPartial(object.testType.greaterThanOrEqual),
      };
    }
    if (
      object.testType?.$case === "lessThanOrEqual" &&
      object.testType?.lessThanOrEqual !== undefined &&
      object.testType?.lessThanOrEqual !== null
    ) {
      message.testType = {
        $case: "lessThanOrEqual",
        lessThanOrEqual: TestLessThanOrEqual.fromPartial(object.testType.lessThanOrEqual),
      };
    }
    if (
      object.testType?.$case === "greaterThan" &&
      object.testType?.greaterThan !== undefined &&
      object.testType?.greaterThan !== null
    ) {
      message.testType = {
        $case: "greaterThan",
        greaterThan: TestGreaterThan.fromPartial(object.testType.greaterThan),
      };
    }
    if (
      object.testType?.$case === "lessThan" &&
      object.testType?.lessThan !== undefined &&
      object.testType?.lessThan !== null
    ) {
      message.testType = { $case: "lessThan", lessThan: TestLessThan.fromPartial(object.testType.lessThan) };
    }
    if (
      object.testType?.$case === "multiColumnUnique" &&
      object.testType?.multiColumnUnique !== undefined &&
      object.testType?.multiColumnUnique !== null
    ) {
      message.testType = {
        $case: "multiColumnUnique",
        multiColumnUnique: TestMultiColumnUnique.fromPartial(object.testType.multiColumnUnique),
      };
    }
    return message;
  },
};

function createBaseTestSQLFile(): TestSQLFile {
  return { filePath: "", references: [] };
}

export const TestSQLFile = {
  encode(message: TestSQLFile, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filePath !== "") {
      writer.uint32(10).string(message.filePath);
    }
    for (const v of message.references) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestSQLFile {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestSQLFile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filePath = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.references.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestSQLFile {
    return {
      filePath: isSet(object.filePath) ? gt.String(object.filePath) : "",
      references: gt.Array.isArray(object?.references) ? object.references.map((e: any) => gt.String(e)) : [],
    };
  },

  toJSON(message: TestSQLFile): unknown {
    const obj: any = {};
    if (message.filePath !== "") {
      obj.filePath = message.filePath;
    }
    if (message.references?.length) {
      obj.references = message.references;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TestSQLFile>, I>>(base?: I): TestSQLFile {
    return TestSQLFile.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TestSQLFile>, I>>(object: I): TestSQLFile {
    const message = createBaseTestSQLFile();
    message.filePath = object.filePath ?? "";
    message.references = object.references?.map((e) => e) || [];
    return message;
  },
};

function createBaseTestUnique(): TestUnique {
  return { filePath: "", model: "", path: "", column: "" };
}

export const TestUnique = {
  encode(message: TestUnique, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filePath !== "") {
      writer.uint32(10).string(message.filePath);
    }
    if (message.model !== "") {
      writer.uint32(18).string(message.model);
    }
    if (message.path !== "") {
      writer.uint32(26).string(message.path);
    }
    if (message.column !== "") {
      writer.uint32(34).string(message.column);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestUnique {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestUnique();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filePath = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.model = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.path = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.column = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestUnique {
    return {
      filePath: isSet(object.filePath) ? gt.String(object.filePath) : "",
      model: isSet(object.model) ? gt.String(object.model) : "",
      path: isSet(object.path) ? gt.String(object.path) : "",
      column: isSet(object.column) ? gt.String(object.column) : "",
    };
  },

  toJSON(message: TestUnique): unknown {
    const obj: any = {};
    if (message.filePath !== "") {
      obj.filePath = message.filePath;
    }
    if (message.model !== "") {
      obj.model = message.model;
    }
    if (message.path !== "") {
      obj.path = message.path;
    }
    if (message.column !== "") {
      obj.column = message.column;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TestUnique>, I>>(base?: I): TestUnique {
    return TestUnique.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TestUnique>, I>>(object: I): TestUnique {
    const message = createBaseTestUnique();
    message.filePath = object.filePath ?? "";
    message.model = object.model ?? "";
    message.path = object.path ?? "";
    message.column = object.column ?? "";
    return message;
  },
};

function createBaseTestNotNull(): TestNotNull {
  return { filePath: "", model: "", path: "", column: "" };
}

export const TestNotNull = {
  encode(message: TestNotNull, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filePath !== "") {
      writer.uint32(10).string(message.filePath);
    }
    if (message.model !== "") {
      writer.uint32(18).string(message.model);
    }
    if (message.path !== "") {
      writer.uint32(26).string(message.path);
    }
    if (message.column !== "") {
      writer.uint32(34).string(message.column);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestNotNull {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestNotNull();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filePath = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.model = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.path = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.column = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestNotNull {
    return {
      filePath: isSet(object.filePath) ? gt.String(object.filePath) : "",
      model: isSet(object.model) ? gt.String(object.model) : "",
      path: isSet(object.path) ? gt.String(object.path) : "",
      column: isSet(object.column) ? gt.String(object.column) : "",
    };
  },

  toJSON(message: TestNotNull): unknown {
    const obj: any = {};
    if (message.filePath !== "") {
      obj.filePath = message.filePath;
    }
    if (message.model !== "") {
      obj.model = message.model;
    }
    if (message.path !== "") {
      obj.path = message.path;
    }
    if (message.column !== "") {
      obj.column = message.column;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TestNotNull>, I>>(base?: I): TestNotNull {
    return TestNotNull.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TestNotNull>, I>>(object: I): TestNotNull {
    const message = createBaseTestNotNull();
    message.filePath = object.filePath ?? "";
    message.model = object.model ?? "";
    message.path = object.path ?? "";
    message.column = object.column ?? "";
    return message;
  },
};

function createBaseTestGreaterThanOrEqual(): TestGreaterThanOrEqual {
  return { filePath: "", model: "", path: "", column: "", value: "" };
}

export const TestGreaterThanOrEqual = {
  encode(message: TestGreaterThanOrEqual, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filePath !== "") {
      writer.uint32(10).string(message.filePath);
    }
    if (message.model !== "") {
      writer.uint32(18).string(message.model);
    }
    if (message.path !== "") {
      writer.uint32(26).string(message.path);
    }
    if (message.column !== "") {
      writer.uint32(34).string(message.column);
    }
    if (message.value !== "") {
      writer.uint32(42).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestGreaterThanOrEqual {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestGreaterThanOrEqual();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filePath = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.model = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.path = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.column = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestGreaterThanOrEqual {
    return {
      filePath: isSet(object.filePath) ? gt.String(object.filePath) : "",
      model: isSet(object.model) ? gt.String(object.model) : "",
      path: isSet(object.path) ? gt.String(object.path) : "",
      column: isSet(object.column) ? gt.String(object.column) : "",
      value: isSet(object.value) ? gt.String(object.value) : "",
    };
  },

  toJSON(message: TestGreaterThanOrEqual): unknown {
    const obj: any = {};
    if (message.filePath !== "") {
      obj.filePath = message.filePath;
    }
    if (message.model !== "") {
      obj.model = message.model;
    }
    if (message.path !== "") {
      obj.path = message.path;
    }
    if (message.column !== "") {
      obj.column = message.column;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TestGreaterThanOrEqual>, I>>(base?: I): TestGreaterThanOrEqual {
    return TestGreaterThanOrEqual.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TestGreaterThanOrEqual>, I>>(object: I): TestGreaterThanOrEqual {
    const message = createBaseTestGreaterThanOrEqual();
    message.filePath = object.filePath ?? "";
    message.model = object.model ?? "";
    message.path = object.path ?? "";
    message.column = object.column ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseTestLessThanOrEqual(): TestLessThanOrEqual {
  return { filePath: "", model: "", path: "", column: "", value: "" };
}

export const TestLessThanOrEqual = {
  encode(message: TestLessThanOrEqual, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filePath !== "") {
      writer.uint32(10).string(message.filePath);
    }
    if (message.model !== "") {
      writer.uint32(18).string(message.model);
    }
    if (message.path !== "") {
      writer.uint32(26).string(message.path);
    }
    if (message.column !== "") {
      writer.uint32(34).string(message.column);
    }
    if (message.value !== "") {
      writer.uint32(42).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestLessThanOrEqual {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestLessThanOrEqual();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filePath = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.model = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.path = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.column = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestLessThanOrEqual {
    return {
      filePath: isSet(object.filePath) ? gt.String(object.filePath) : "",
      model: isSet(object.model) ? gt.String(object.model) : "",
      path: isSet(object.path) ? gt.String(object.path) : "",
      column: isSet(object.column) ? gt.String(object.column) : "",
      value: isSet(object.value) ? gt.String(object.value) : "",
    };
  },

  toJSON(message: TestLessThanOrEqual): unknown {
    const obj: any = {};
    if (message.filePath !== "") {
      obj.filePath = message.filePath;
    }
    if (message.model !== "") {
      obj.model = message.model;
    }
    if (message.path !== "") {
      obj.path = message.path;
    }
    if (message.column !== "") {
      obj.column = message.column;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TestLessThanOrEqual>, I>>(base?: I): TestLessThanOrEqual {
    return TestLessThanOrEqual.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TestLessThanOrEqual>, I>>(object: I): TestLessThanOrEqual {
    const message = createBaseTestLessThanOrEqual();
    message.filePath = object.filePath ?? "";
    message.model = object.model ?? "";
    message.path = object.path ?? "";
    message.column = object.column ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseTestGreaterThan(): TestGreaterThan {
  return { filePath: "", model: "", path: "", column: "", value: "" };
}

export const TestGreaterThan = {
  encode(message: TestGreaterThan, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filePath !== "") {
      writer.uint32(10).string(message.filePath);
    }
    if (message.model !== "") {
      writer.uint32(18).string(message.model);
    }
    if (message.path !== "") {
      writer.uint32(26).string(message.path);
    }
    if (message.column !== "") {
      writer.uint32(34).string(message.column);
    }
    if (message.value !== "") {
      writer.uint32(42).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestGreaterThan {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestGreaterThan();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filePath = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.model = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.path = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.column = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestGreaterThan {
    return {
      filePath: isSet(object.filePath) ? gt.String(object.filePath) : "",
      model: isSet(object.model) ? gt.String(object.model) : "",
      path: isSet(object.path) ? gt.String(object.path) : "",
      column: isSet(object.column) ? gt.String(object.column) : "",
      value: isSet(object.value) ? gt.String(object.value) : "",
    };
  },

  toJSON(message: TestGreaterThan): unknown {
    const obj: any = {};
    if (message.filePath !== "") {
      obj.filePath = message.filePath;
    }
    if (message.model !== "") {
      obj.model = message.model;
    }
    if (message.path !== "") {
      obj.path = message.path;
    }
    if (message.column !== "") {
      obj.column = message.column;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TestGreaterThan>, I>>(base?: I): TestGreaterThan {
    return TestGreaterThan.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TestGreaterThan>, I>>(object: I): TestGreaterThan {
    const message = createBaseTestGreaterThan();
    message.filePath = object.filePath ?? "";
    message.model = object.model ?? "";
    message.path = object.path ?? "";
    message.column = object.column ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseTestLessThan(): TestLessThan {
  return { filePath: "", model: "", path: "", column: "", value: "" };
}

export const TestLessThan = {
  encode(message: TestLessThan, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filePath !== "") {
      writer.uint32(10).string(message.filePath);
    }
    if (message.model !== "") {
      writer.uint32(18).string(message.model);
    }
    if (message.path !== "") {
      writer.uint32(26).string(message.path);
    }
    if (message.column !== "") {
      writer.uint32(34).string(message.column);
    }
    if (message.value !== "") {
      writer.uint32(42).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestLessThan {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestLessThan();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filePath = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.model = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.path = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.column = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestLessThan {
    return {
      filePath: isSet(object.filePath) ? gt.String(object.filePath) : "",
      model: isSet(object.model) ? gt.String(object.model) : "",
      path: isSet(object.path) ? gt.String(object.path) : "",
      column: isSet(object.column) ? gt.String(object.column) : "",
      value: isSet(object.value) ? gt.String(object.value) : "",
    };
  },

  toJSON(message: TestLessThan): unknown {
    const obj: any = {};
    if (message.filePath !== "") {
      obj.filePath = message.filePath;
    }
    if (message.model !== "") {
      obj.model = message.model;
    }
    if (message.path !== "") {
      obj.path = message.path;
    }
    if (message.column !== "") {
      obj.column = message.column;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TestLessThan>, I>>(base?: I): TestLessThan {
    return TestLessThan.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TestLessThan>, I>>(object: I): TestLessThan {
    const message = createBaseTestLessThan();
    message.filePath = object.filePath ?? "";
    message.model = object.model ?? "";
    message.path = object.path ?? "";
    message.column = object.column ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseTestRelationship(): TestRelationship {
  return {
    filePath: "",
    sourceModel: "",
    sourcePath: "",
    sourceColumn: "",
    targetModel: "",
    targetPath: "",
    targetColumn: "",
  };
}

export const TestRelationship = {
  encode(message: TestRelationship, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filePath !== "") {
      writer.uint32(10).string(message.filePath);
    }
    if (message.sourceModel !== "") {
      writer.uint32(18).string(message.sourceModel);
    }
    if (message.sourcePath !== "") {
      writer.uint32(26).string(message.sourcePath);
    }
    if (message.sourceColumn !== "") {
      writer.uint32(34).string(message.sourceColumn);
    }
    if (message.targetModel !== "") {
      writer.uint32(42).string(message.targetModel);
    }
    if (message.targetPath !== "") {
      writer.uint32(58).string(message.targetPath);
    }
    if (message.targetColumn !== "") {
      writer.uint32(66).string(message.targetColumn);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestRelationship {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestRelationship();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filePath = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.sourceModel = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.sourcePath = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.sourceColumn = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.targetModel = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.targetPath = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.targetColumn = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestRelationship {
    return {
      filePath: isSet(object.filePath) ? gt.String(object.filePath) : "",
      sourceModel: isSet(object.sourceModel) ? gt.String(object.sourceModel) : "",
      sourcePath: isSet(object.sourcePath) ? gt.String(object.sourcePath) : "",
      sourceColumn: isSet(object.sourceColumn) ? gt.String(object.sourceColumn) : "",
      targetModel: isSet(object.targetModel) ? gt.String(object.targetModel) : "",
      targetPath: isSet(object.targetPath) ? gt.String(object.targetPath) : "",
      targetColumn: isSet(object.targetColumn) ? gt.String(object.targetColumn) : "",
    };
  },

  toJSON(message: TestRelationship): unknown {
    const obj: any = {};
    if (message.filePath !== "") {
      obj.filePath = message.filePath;
    }
    if (message.sourceModel !== "") {
      obj.sourceModel = message.sourceModel;
    }
    if (message.sourcePath !== "") {
      obj.sourcePath = message.sourcePath;
    }
    if (message.sourceColumn !== "") {
      obj.sourceColumn = message.sourceColumn;
    }
    if (message.targetModel !== "") {
      obj.targetModel = message.targetModel;
    }
    if (message.targetPath !== "") {
      obj.targetPath = message.targetPath;
    }
    if (message.targetColumn !== "") {
      obj.targetColumn = message.targetColumn;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TestRelationship>, I>>(base?: I): TestRelationship {
    return TestRelationship.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TestRelationship>, I>>(object: I): TestRelationship {
    const message = createBaseTestRelationship();
    message.filePath = object.filePath ?? "";
    message.sourceModel = object.sourceModel ?? "";
    message.sourcePath = object.sourcePath ?? "";
    message.sourceColumn = object.sourceColumn ?? "";
    message.targetModel = object.targetModel ?? "";
    message.targetPath = object.targetPath ?? "";
    message.targetColumn = object.targetColumn ?? "";
    return message;
  },
};

function createBaseTestAcceptedValues(): TestAcceptedValues {
  return { filePath: "", model: "", path: "", column: "", acceptedValues: [] };
}

export const TestAcceptedValues = {
  encode(message: TestAcceptedValues, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filePath !== "") {
      writer.uint32(10).string(message.filePath);
    }
    if (message.model !== "") {
      writer.uint32(18).string(message.model);
    }
    if (message.path !== "") {
      writer.uint32(26).string(message.path);
    }
    if (message.column !== "") {
      writer.uint32(34).string(message.column);
    }
    for (const v of message.acceptedValues) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestAcceptedValues {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestAcceptedValues();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filePath = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.model = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.path = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.column = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.acceptedValues.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestAcceptedValues {
    return {
      filePath: isSet(object.filePath) ? gt.String(object.filePath) : "",
      model: isSet(object.model) ? gt.String(object.model) : "",
      path: isSet(object.path) ? gt.String(object.path) : "",
      column: isSet(object.column) ? gt.String(object.column) : "",
      acceptedValues: gt.Array.isArray(object?.acceptedValues)
        ? object.acceptedValues.map((e: any) => gt.String(e))
        : [],
    };
  },

  toJSON(message: TestAcceptedValues): unknown {
    const obj: any = {};
    if (message.filePath !== "") {
      obj.filePath = message.filePath;
    }
    if (message.model !== "") {
      obj.model = message.model;
    }
    if (message.path !== "") {
      obj.path = message.path;
    }
    if (message.column !== "") {
      obj.column = message.column;
    }
    if (message.acceptedValues?.length) {
      obj.acceptedValues = message.acceptedValues;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TestAcceptedValues>, I>>(base?: I): TestAcceptedValues {
    return TestAcceptedValues.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TestAcceptedValues>, I>>(object: I): TestAcceptedValues {
    const message = createBaseTestAcceptedValues();
    message.filePath = object.filePath ?? "";
    message.model = object.model ?? "";
    message.path = object.path ?? "";
    message.column = object.column ?? "";
    message.acceptedValues = object.acceptedValues?.map((e) => e) || [];
    return message;
  },
};

function createBaseTestMultiColumnUnique(): TestMultiColumnUnique {
  return { filePath: "", model: "", path: "", columns: [] };
}

export const TestMultiColumnUnique = {
  encode(message: TestMultiColumnUnique, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filePath !== "") {
      writer.uint32(10).string(message.filePath);
    }
    if (message.model !== "") {
      writer.uint32(18).string(message.model);
    }
    if (message.path !== "") {
      writer.uint32(26).string(message.path);
    }
    for (const v of message.columns) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestMultiColumnUnique {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestMultiColumnUnique();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filePath = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.model = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.path = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.columns.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestMultiColumnUnique {
    return {
      filePath: isSet(object.filePath) ? gt.String(object.filePath) : "",
      model: isSet(object.model) ? gt.String(object.model) : "",
      path: isSet(object.path) ? gt.String(object.path) : "",
      columns: gt.Array.isArray(object?.columns) ? object.columns.map((e: any) => gt.String(e)) : [],
    };
  },

  toJSON(message: TestMultiColumnUnique): unknown {
    const obj: any = {};
    if (message.filePath !== "") {
      obj.filePath = message.filePath;
    }
    if (message.model !== "") {
      obj.model = message.model;
    }
    if (message.path !== "") {
      obj.path = message.path;
    }
    if (message.columns?.length) {
      obj.columns = message.columns;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TestMultiColumnUnique>, I>>(base?: I): TestMultiColumnUnique {
    return TestMultiColumnUnique.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TestMultiColumnUnique>, I>>(object: I): TestMultiColumnUnique {
    const message = createBaseTestMultiColumnUnique();
    message.filePath = object.filePath ?? "";
    message.model = object.model ?? "";
    message.path = object.path ?? "";
    message.columns = object.columns?.map((e) => e) || [];
    return message;
  },
};

function createBaseSeed(): Seed {
  return { name: "", filePath: "", fileSha256Hash: "" };
}

export const Seed = {
  encode(message: Seed, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.filePath !== "") {
      writer.uint32(18).string(message.filePath);
    }
    if (message.fileSha256Hash !== "") {
      writer.uint32(26).string(message.fileSha256Hash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Seed {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSeed();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.filePath = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.fileSha256Hash = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Seed {
    return {
      name: isSet(object.name) ? gt.String(object.name) : "",
      filePath: isSet(object.filePath) ? gt.String(object.filePath) : "",
      fileSha256Hash: isSet(object.fileSha256Hash) ? gt.String(object.fileSha256Hash) : "",
    };
  },

  toJSON(message: Seed): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.filePath !== "") {
      obj.filePath = message.filePath;
    }
    if (message.fileSha256Hash !== "") {
      obj.fileSha256Hash = message.fileSha256Hash;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Seed>, I>>(base?: I): Seed {
    return Seed.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Seed>, I>>(object: I): Seed {
    const message = createBaseSeed();
    message.name = object.name ?? "";
    message.filePath = object.filePath ?? "";
    message.fileSha256Hash = object.fileSha256Hash ?? "";
    return message;
  },
};

function createBaseModel(): Model {
  return {
    name: "",
    description: undefined,
    tags: [],
    filePath: "",
    fileSha256Hash: "",
    materialization: undefined,
    columns: [],
    references: [],
  };
}

export const Model = {
  encode(message: Model, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== undefined) {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.tags) {
      writer.uint32(34).string(v!);
    }
    if (message.filePath !== "") {
      writer.uint32(26).string(message.filePath);
    }
    if (message.fileSha256Hash !== "") {
      writer.uint32(58).string(message.fileSha256Hash);
    }
    if (message.materialization !== undefined) {
      writer.uint32(66).string(message.materialization);
    }
    for (const v of message.columns) {
      Model_ModelColum.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.references) {
      writer.uint32(50).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Model {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.tags.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.filePath = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.fileSha256Hash = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.materialization = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.columns.push(Model_ModelColum.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.references.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Model {
    return {
      name: isSet(object.name) ? gt.String(object.name) : "",
      description: isSet(object.description) ? gt.String(object.description) : undefined,
      tags: gt.Array.isArray(object?.tags) ? object.tags.map((e: any) => gt.String(e)) : [],
      filePath: isSet(object.filePath) ? gt.String(object.filePath) : "",
      fileSha256Hash: isSet(object.fileSha256Hash) ? gt.String(object.fileSha256Hash) : "",
      materialization: isSet(object.materialization) ? gt.String(object.materialization) : undefined,
      columns: gt.Array.isArray(object?.columns) ? object.columns.map((e: any) => Model_ModelColum.fromJSON(e)) : [],
      references: gt.Array.isArray(object?.references) ? object.references.map((e: any) => gt.String(e)) : [],
    };
  },

  toJSON(message: Model): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== undefined) {
      obj.description = message.description;
    }
    if (message.tags?.length) {
      obj.tags = message.tags;
    }
    if (message.filePath !== "") {
      obj.filePath = message.filePath;
    }
    if (message.fileSha256Hash !== "") {
      obj.fileSha256Hash = message.fileSha256Hash;
    }
    if (message.materialization !== undefined) {
      obj.materialization = message.materialization;
    }
    if (message.columns?.length) {
      obj.columns = message.columns.map((e) => Model_ModelColum.toJSON(e));
    }
    if (message.references?.length) {
      obj.references = message.references;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Model>, I>>(base?: I): Model {
    return Model.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Model>, I>>(object: I): Model {
    const message = createBaseModel();
    message.name = object.name ?? "";
    message.description = object.description ?? undefined;
    message.tags = object.tags?.map((e) => e) || [];
    message.filePath = object.filePath ?? "";
    message.fileSha256Hash = object.fileSha256Hash ?? "";
    message.materialization = object.materialization ?? undefined;
    message.columns = object.columns?.map((e) => Model_ModelColum.fromPartial(e)) || [];
    message.references = object.references?.map((e) => e) || [];
    return message;
  },
};

function createBaseModel_ModelColum(): Model_ModelColum {
  return { title: "", description: undefined };
}

export const Model_ModelColum = {
  encode(message: Model_ModelColum, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== undefined) {
      writer.uint32(18).string(message.description);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Model_ModelColum {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModel_ModelColum();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Model_ModelColum {
    return {
      title: isSet(object.title) ? gt.String(object.title) : "",
      description: isSet(object.description) ? gt.String(object.description) : undefined,
    };
  },

  toJSON(message: Model_ModelColum): unknown {
    const obj: any = {};
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.description !== undefined) {
      obj.description = message.description;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Model_ModelColum>, I>>(base?: I): Model_ModelColum {
    return Model_ModelColum.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Model_ModelColum>, I>>(object: I): Model_ModelColum {
    const message = createBaseModel_ModelColum();
    message.title = object.title ?? "";
    message.description = object.description ?? undefined;
    return message;
  },
};

function createBaseSnapshot(): Snapshot {
  return {
    name: "",
    description: undefined,
    tags: [],
    filePath: "",
    fileSha256Hash: "",
    uniqueKey: "",
    strategy: undefined,
    references: [],
  };
}

export const Snapshot = {
  encode(message: Snapshot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== undefined) {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.tags) {
      writer.uint32(66).string(v!);
    }
    if (message.filePath !== "") {
      writer.uint32(26).string(message.filePath);
    }
    if (message.fileSha256Hash !== "") {
      writer.uint32(34).string(message.fileSha256Hash);
    }
    if (message.uniqueKey !== "") {
      writer.uint32(42).string(message.uniqueKey);
    }
    if (message.strategy !== undefined) {
      Snapshot_SnapshotStrategy.encode(message.strategy, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.references) {
      writer.uint32(58).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Snapshot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSnapshot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.tags.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.filePath = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.fileSha256Hash = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.uniqueKey = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.strategy = Snapshot_SnapshotStrategy.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.references.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Snapshot {
    return {
      name: isSet(object.name) ? gt.String(object.name) : "",
      description: isSet(object.description) ? gt.String(object.description) : undefined,
      tags: gt.Array.isArray(object?.tags) ? object.tags.map((e: any) => gt.String(e)) : [],
      filePath: isSet(object.filePath) ? gt.String(object.filePath) : "",
      fileSha256Hash: isSet(object.fileSha256Hash) ? gt.String(object.fileSha256Hash) : "",
      uniqueKey: isSet(object.uniqueKey) ? gt.String(object.uniqueKey) : "",
      strategy: isSet(object.strategy) ? Snapshot_SnapshotStrategy.fromJSON(object.strategy) : undefined,
      references: gt.Array.isArray(object?.references) ? object.references.map((e: any) => gt.String(e)) : [],
    };
  },

  toJSON(message: Snapshot): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== undefined) {
      obj.description = message.description;
    }
    if (message.tags?.length) {
      obj.tags = message.tags;
    }
    if (message.filePath !== "") {
      obj.filePath = message.filePath;
    }
    if (message.fileSha256Hash !== "") {
      obj.fileSha256Hash = message.fileSha256Hash;
    }
    if (message.uniqueKey !== "") {
      obj.uniqueKey = message.uniqueKey;
    }
    if (message.strategy !== undefined) {
      obj.strategy = Snapshot_SnapshotStrategy.toJSON(message.strategy);
    }
    if (message.references?.length) {
      obj.references = message.references;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Snapshot>, I>>(base?: I): Snapshot {
    return Snapshot.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Snapshot>, I>>(object: I): Snapshot {
    const message = createBaseSnapshot();
    message.name = object.name ?? "";
    message.description = object.description ?? undefined;
    message.tags = object.tags?.map((e) => e) || [];
    message.filePath = object.filePath ?? "";
    message.fileSha256Hash = object.fileSha256Hash ?? "";
    message.uniqueKey = object.uniqueKey ?? "";
    message.strategy = (object.strategy !== undefined && object.strategy !== null)
      ? Snapshot_SnapshotStrategy.fromPartial(object.strategy)
      : undefined;
    message.references = object.references?.map((e) => e) || [];
    return message;
  },
};

function createBaseSnapshot_SnapshotStrategy(): Snapshot_SnapshotStrategy {
  return { strategyType: undefined };
}

export const Snapshot_SnapshotStrategy = {
  encode(message: Snapshot_SnapshotStrategy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    switch (message.strategyType?.$case) {
      case "timestamp":
        Snapshot_SnapshotStrategy_TimestampStrategy.encode(message.strategyType.timestamp, writer.uint32(10).fork())
          .ldelim();
        break;
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Snapshot_SnapshotStrategy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSnapshot_SnapshotStrategy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.strategyType = {
            $case: "timestamp",
            timestamp: Snapshot_SnapshotStrategy_TimestampStrategy.decode(reader, reader.uint32()),
          };
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Snapshot_SnapshotStrategy {
    return {
      strategyType: isSet(object.timestamp)
        ? { $case: "timestamp", timestamp: Snapshot_SnapshotStrategy_TimestampStrategy.fromJSON(object.timestamp) }
        : undefined,
    };
  },

  toJSON(message: Snapshot_SnapshotStrategy): unknown {
    const obj: any = {};
    if (message.strategyType?.$case === "timestamp") {
      obj.timestamp = Snapshot_SnapshotStrategy_TimestampStrategy.toJSON(message.strategyType.timestamp);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Snapshot_SnapshotStrategy>, I>>(base?: I): Snapshot_SnapshotStrategy {
    return Snapshot_SnapshotStrategy.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Snapshot_SnapshotStrategy>, I>>(object: I): Snapshot_SnapshotStrategy {
    const message = createBaseSnapshot_SnapshotStrategy();
    if (
      object.strategyType?.$case === "timestamp" &&
      object.strategyType?.timestamp !== undefined &&
      object.strategyType?.timestamp !== null
    ) {
      message.strategyType = {
        $case: "timestamp",
        timestamp: Snapshot_SnapshotStrategy_TimestampStrategy.fromPartial(object.strategyType.timestamp),
      };
    }
    return message;
  },
};

function createBaseSnapshot_SnapshotStrategy_TimestampStrategy(): Snapshot_SnapshotStrategy_TimestampStrategy {
  return { updatedAt: "" };
}

export const Snapshot_SnapshotStrategy_TimestampStrategy = {
  encode(message: Snapshot_SnapshotStrategy_TimestampStrategy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.updatedAt !== "") {
      writer.uint32(10).string(message.updatedAt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Snapshot_SnapshotStrategy_TimestampStrategy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSnapshot_SnapshotStrategy_TimestampStrategy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.updatedAt = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Snapshot_SnapshotStrategy_TimestampStrategy {
    return { updatedAt: isSet(object.updatedAt) ? gt.String(object.updatedAt) : "" };
  },

  toJSON(message: Snapshot_SnapshotStrategy_TimestampStrategy): unknown {
    const obj: any = {};
    if (message.updatedAt !== "") {
      obj.updatedAt = message.updatedAt;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Snapshot_SnapshotStrategy_TimestampStrategy>, I>>(
    base?: I,
  ): Snapshot_SnapshotStrategy_TimestampStrategy {
    return Snapshot_SnapshotStrategy_TimestampStrategy.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Snapshot_SnapshotStrategy_TimestampStrategy>, I>>(
    object: I,
  ): Snapshot_SnapshotStrategy_TimestampStrategy {
    const message = createBaseSnapshot_SnapshotStrategy_TimestampStrategy();
    message.updatedAt = object.updatedAt ?? "";
    return message;
  },
};

function createBaseDatabaseSource(): DatabaseSource {
  return { name: "", path: "", columns: [] };
}

export const DatabaseSource = {
  encode(message: DatabaseSource, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.path !== "") {
      writer.uint32(18).string(message.path);
    }
    for (const v of message.columns) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DatabaseSource {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDatabaseSource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.path = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.columns.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DatabaseSource {
    return {
      name: isSet(object.name) ? gt.String(object.name) : "",
      path: isSet(object.path) ? gt.String(object.path) : "",
      columns: gt.Array.isArray(object?.columns) ? object.columns.map((e: any) => gt.String(e)) : [],
    };
  },

  toJSON(message: DatabaseSource): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.path !== "") {
      obj.path = message.path;
    }
    if (message.columns?.length) {
      obj.columns = message.columns;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DatabaseSource>, I>>(base?: I): DatabaseSource {
    return DatabaseSource.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DatabaseSource>, I>>(object: I): DatabaseSource {
    const message = createBaseDatabaseSource();
    message.name = object.name ?? "";
    message.path = object.path ?? "";
    message.columns = object.columns?.map((e) => e) || [];
    return message;
  },
};

function createBaseSource(): Source {
  return { name: "", description: undefined, path: "", tags: [], filePath: "", columns: [] };
}

export const Source = {
  encode(message: Source, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== undefined) {
      writer.uint32(18).string(message.description);
    }
    if (message.path !== "") {
      writer.uint32(26).string(message.path);
    }
    for (const v of message.tags) {
      writer.uint32(50).string(v!);
    }
    if (message.filePath !== "") {
      writer.uint32(34).string(message.filePath);
    }
    for (const v of message.columns) {
      Source_SourceColumn.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Source {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.path = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.tags.push(reader.string());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.filePath = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.columns.push(Source_SourceColumn.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Source {
    return {
      name: isSet(object.name) ? gt.String(object.name) : "",
      description: isSet(object.description) ? gt.String(object.description) : undefined,
      path: isSet(object.path) ? gt.String(object.path) : "",
      tags: gt.Array.isArray(object?.tags) ? object.tags.map((e: any) => gt.String(e)) : [],
      filePath: isSet(object.filePath) ? gt.String(object.filePath) : "",
      columns: gt.Array.isArray(object?.columns) ? object.columns.map((e: any) => Source_SourceColumn.fromJSON(e)) : [],
    };
  },

  toJSON(message: Source): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== undefined) {
      obj.description = message.description;
    }
    if (message.path !== "") {
      obj.path = message.path;
    }
    if (message.tags?.length) {
      obj.tags = message.tags;
    }
    if (message.filePath !== "") {
      obj.filePath = message.filePath;
    }
    if (message.columns?.length) {
      obj.columns = message.columns.map((e) => Source_SourceColumn.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Source>, I>>(base?: I): Source {
    return Source.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Source>, I>>(object: I): Source {
    const message = createBaseSource();
    message.name = object.name ?? "";
    message.description = object.description ?? undefined;
    message.path = object.path ?? "";
    message.tags = object.tags?.map((e) => e) || [];
    message.filePath = object.filePath ?? "";
    message.columns = object.columns?.map((e) => Source_SourceColumn.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSource_SourceColumn(): Source_SourceColumn {
  return { title: "", description: undefined };
}

export const Source_SourceColumn = {
  encode(message: Source_SourceColumn, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== undefined) {
      writer.uint32(18).string(message.description);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Source_SourceColumn {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSource_SourceColumn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Source_SourceColumn {
    return {
      title: isSet(object.title) ? gt.String(object.title) : "",
      description: isSet(object.description) ? gt.String(object.description) : undefined,
    };
  },

  toJSON(message: Source_SourceColumn): unknown {
    const obj: any = {};
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.description !== undefined) {
      obj.description = message.description;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Source_SourceColumn>, I>>(base?: I): Source_SourceColumn {
    return Source_SourceColumn.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Source_SourceColumn>, I>>(object: I): Source_SourceColumn {
    const message = createBaseSource_SourceColumn();
    message.title = object.title ?? "";
    message.description = object.description ?? undefined;
    return message;
  },
};

declare const self: any | undefined;
declare const window: any | undefined;
declare const global: any | undefined;
const gt: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends { $case: string } ? { [K in keyof Omit<T, "$case">]?: DeepPartial<T[K]> } & { $case: T["$case"] }
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
