/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Empty } from "../../../google/protobuf/empty";
import { ColumnDescription } from "./column_description";
import { ConnectionConfig } from "./connection_config";
import { Project } from "./project";
import { ProjectDag } from "./project_dag";
import { ColumnTest, ProjectFile } from "./project_file";
import { Range } from "./range";
import { Table } from "./table";
import { DatabaseSource } from "./types";

export const protobufPackage = "quary.service.v1";

export interface GetProjectConfigRequest {
  projectRoot: string;
}

export interface GetProjectConfigResponse {
  connectionConfig: ConnectionConfig | undefined;
}

export interface InitFilesRequest {
}

export interface InitFilesResponse {
}

export interface IsPathEmptyRequest {
  projectRoot: string;
}

export interface IsPathEmptyResponse {
  isEmpty: boolean;
}

export interface GenerateProjectFilesRequest {
  connectionConfig: ConnectionConfig | undefined;
}

export interface GenerateProjectFilesResponse {
}

export interface StringifyProjectFileRequest {
  projectFile: ProjectFile | undefined;
}

export interface StringifyProjectFileResponse {
  stringifiedProjectFile: string;
}

export interface ListAssetsRequest {
  projectRoot: string;
}

export interface ListAssetsResponse {
  assets: ListAssetsResponse_Asset[];
}

/** TODO This asset type should probably be refactored to just use the core types. */
export interface ListAssetsResponse_Asset {
  name: string;
  description?: string | undefined;
  tags: string[];
  assetType: ListAssetsResponse_Asset_AssetType;
  filePath: string;
}

export enum ListAssetsResponse_Asset_AssetType {
  ASSET_TYPE_UNSPECIFIED = 0,
  ASSET_TYPE_MODEL = 1,
  ASSET_TYPE_SEED = 2,
  ASSET_TYPE_SOURCE = 3,
  ASSET_TYPE_SNAPSHOT = 4,
  UNRECOGNIZED = -1,
}

export function listAssetsResponse_Asset_AssetTypeFromJSON(object: any): ListAssetsResponse_Asset_AssetType {
  switch (object) {
    case 0:
    case "ASSET_TYPE_UNSPECIFIED":
      return ListAssetsResponse_Asset_AssetType.ASSET_TYPE_UNSPECIFIED;
    case 1:
    case "ASSET_TYPE_MODEL":
      return ListAssetsResponse_Asset_AssetType.ASSET_TYPE_MODEL;
    case 2:
    case "ASSET_TYPE_SEED":
      return ListAssetsResponse_Asset_AssetType.ASSET_TYPE_SEED;
    case 3:
    case "ASSET_TYPE_SOURCE":
      return ListAssetsResponse_Asset_AssetType.ASSET_TYPE_SOURCE;
    case 4:
    case "ASSET_TYPE_SNAPSHOT":
      return ListAssetsResponse_Asset_AssetType.ASSET_TYPE_SNAPSHOT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ListAssetsResponse_Asset_AssetType.UNRECOGNIZED;
  }
}

export function listAssetsResponse_Asset_AssetTypeToJSON(object: ListAssetsResponse_Asset_AssetType): string {
  switch (object) {
    case ListAssetsResponse_Asset_AssetType.ASSET_TYPE_UNSPECIFIED:
      return "ASSET_TYPE_UNSPECIFIED";
    case ListAssetsResponse_Asset_AssetType.ASSET_TYPE_MODEL:
      return "ASSET_TYPE_MODEL";
    case ListAssetsResponse_Asset_AssetType.ASSET_TYPE_SEED:
      return "ASSET_TYPE_SEED";
    case ListAssetsResponse_Asset_AssetType.ASSET_TYPE_SOURCE:
      return "ASSET_TYPE_SOURCE";
    case ListAssetsResponse_Asset_AssetType.ASSET_TYPE_SNAPSHOT:
      return "ASSET_TYPE_SNAPSHOT";
    case ListAssetsResponse_Asset_AssetType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface ParseProjectRequest {
  projectRoot: string;
}

export interface ParseProjectResponse {
  project: Project | undefined;
}

export interface RenderSchemaRequest {
  projectRoot: string;
}

export interface RenderSchemaResponse {
  schema: string;
}

export interface ReturnSQLForSeedsAndModelsRequest {
  projectRoot: string;
  dbQualifier: string;
}

export interface ReturnSQLForSeedsAndModelsResponse {
  sql: string[];
  project: Project | undefined;
}

export interface ReturnFullSqlForAssetRequest {
  projectRoot: string;
  assetName: string;
  cacheView?: { $case: "cacheViewInformation"; cacheViewInformation: CacheViewInformation } | {
    $case: "doNotUse";
    doNotUse: Empty;
  } | undefined;
}

export interface ReturnFullProjectDagRequest {
  projectRoot: string;
}

export interface ReturnFullProjectDagResponse {
  dag: ProjectDag | undefined;
}

export interface CacheViewInformation {
  cacheViewPaths: string[];
}

export interface ReturnFullSqlForAssetResponse {
  fullSql: string;
  description?: string | undefined;
  dag: ProjectDag | undefined;
  columns: ColumnDescription[];
}

export interface GetModelTableRequest {
  projectRoot: string;
  modelName: string;
}

export interface GetModelTableResponse {
  table: Table | undefined;
}

export interface CreateModelSchemaEntryRequest {
  projectRoot: string;
  modelName: string;
}

export interface CreateModelSchemaEntryResponse {
  path: string;
  projectFile: ProjectFile | undefined;
}

export interface UpdateAssetDescriptionRequest {
  projectRoot: string;
  assetName: string;
  description: string;
}

export interface UpdateAssetDescriptionResponse {
}

export interface AddColumnToModelOrSourceRequest {
  projectRoot: string;
  modelOrSourceName: string;
  columnName: string;
}

export interface AddColumnToModelOrSourceResponse {
}

export interface UpdateModelOrSourceColumnDescriptionRequest {
  projectRoot: string;
  modelOrSourceName: string;
  columnName: string;
  description?: string | undefined;
}

export interface UpdateModelOrSourceColumnDescriptionResponse {
}

export interface AddColumnTestToModelOrSourceColumnRequest {
  projectRoot: string;
  modelOrSourceName: string;
  columnName: string;
  columnTest: ColumnTest | undefined;
}

export interface AddColumnTestToModelOrSourceColumnResponse {
}

export interface RemoveColumnTestFromModelOrSourceColumnRequest {
  projectRoot: string;
  modelOrSourceName: string;
  columnName: string;
  columnTest: ColumnTest | undefined;
}

export interface RemoveColumnTestFromModelOrSourceColumnResponse {
}

export interface GenerateSourceFilesRequest {
  projectRoot: string;
  sources: DatabaseSource[];
  /** folder_path is the path to the folder where the source files will be generated. */
  folderPath: string;
}

export interface GenerateSourceFilesResponse {
}

export interface ReturnDefinitionLocationsForSQLRequest {
  projectRoot: string;
  sql: string;
}

export interface ReturnDefinitionLocationsForSQLResponse {
  definitions: ReturnDefinitionLocationsForSQLResponse_Definition[];
}

export interface ReturnDefinitionLocationsForSQLResponse_Definition {
  range: Range | undefined;
  targetModel: string;
  targetFile: string;
}

export interface ReturnSQLForInjectedModelRequest {
  projectRoot: string;
  sql: string;
}

export interface ReturnSQLForInjectedModelResponse {
  sql: string;
}

function createBaseGetProjectConfigRequest(): GetProjectConfigRequest {
  return { projectRoot: "" };
}

export const GetProjectConfigRequest = {
  encode(message: GetProjectConfigRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectRoot !== "") {
      writer.uint32(18).string(message.projectRoot);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetProjectConfigRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetProjectConfigRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.projectRoot = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetProjectConfigRequest {
    return { projectRoot: isSet(object.projectRoot) ? gt.String(object.projectRoot) : "" };
  },

  toJSON(message: GetProjectConfigRequest): unknown {
    const obj: any = {};
    if (message.projectRoot !== "") {
      obj.projectRoot = message.projectRoot;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetProjectConfigRequest>, I>>(base?: I): GetProjectConfigRequest {
    return GetProjectConfigRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetProjectConfigRequest>, I>>(object: I): GetProjectConfigRequest {
    const message = createBaseGetProjectConfigRequest();
    message.projectRoot = object.projectRoot ?? "";
    return message;
  },
};

function createBaseGetProjectConfigResponse(): GetProjectConfigResponse {
  return { connectionConfig: undefined };
}

export const GetProjectConfigResponse = {
  encode(message: GetProjectConfigResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionConfig !== undefined) {
      ConnectionConfig.encode(message.connectionConfig, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetProjectConfigResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetProjectConfigResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.connectionConfig = ConnectionConfig.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetProjectConfigResponse {
    return {
      connectionConfig: isSet(object.connectionConfig) ? ConnectionConfig.fromJSON(object.connectionConfig) : undefined,
    };
  },

  toJSON(message: GetProjectConfigResponse): unknown {
    const obj: any = {};
    if (message.connectionConfig !== undefined) {
      obj.connectionConfig = ConnectionConfig.toJSON(message.connectionConfig);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetProjectConfigResponse>, I>>(base?: I): GetProjectConfigResponse {
    return GetProjectConfigResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetProjectConfigResponse>, I>>(object: I): GetProjectConfigResponse {
    const message = createBaseGetProjectConfigResponse();
    message.connectionConfig = (object.connectionConfig !== undefined && object.connectionConfig !== null)
      ? ConnectionConfig.fromPartial(object.connectionConfig)
      : undefined;
    return message;
  },
};

function createBaseInitFilesRequest(): InitFilesRequest {
  return {};
}

export const InitFilesRequest = {
  encode(_: InitFilesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InitFilesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInitFilesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): InitFilesRequest {
    return {};
  },

  toJSON(_: InitFilesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<InitFilesRequest>, I>>(base?: I): InitFilesRequest {
    return InitFilesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<InitFilesRequest>, I>>(_: I): InitFilesRequest {
    const message = createBaseInitFilesRequest();
    return message;
  },
};

function createBaseInitFilesResponse(): InitFilesResponse {
  return {};
}

export const InitFilesResponse = {
  encode(_: InitFilesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InitFilesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInitFilesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): InitFilesResponse {
    return {};
  },

  toJSON(_: InitFilesResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<InitFilesResponse>, I>>(base?: I): InitFilesResponse {
    return InitFilesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<InitFilesResponse>, I>>(_: I): InitFilesResponse {
    const message = createBaseInitFilesResponse();
    return message;
  },
};

function createBaseIsPathEmptyRequest(): IsPathEmptyRequest {
  return { projectRoot: "" };
}

export const IsPathEmptyRequest = {
  encode(message: IsPathEmptyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectRoot !== "") {
      writer.uint32(18).string(message.projectRoot);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IsPathEmptyRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIsPathEmptyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.projectRoot = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): IsPathEmptyRequest {
    return { projectRoot: isSet(object.projectRoot) ? gt.String(object.projectRoot) : "" };
  },

  toJSON(message: IsPathEmptyRequest): unknown {
    const obj: any = {};
    if (message.projectRoot !== "") {
      obj.projectRoot = message.projectRoot;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<IsPathEmptyRequest>, I>>(base?: I): IsPathEmptyRequest {
    return IsPathEmptyRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<IsPathEmptyRequest>, I>>(object: I): IsPathEmptyRequest {
    const message = createBaseIsPathEmptyRequest();
    message.projectRoot = object.projectRoot ?? "";
    return message;
  },
};

function createBaseIsPathEmptyResponse(): IsPathEmptyResponse {
  return { isEmpty: false };
}

export const IsPathEmptyResponse = {
  encode(message: IsPathEmptyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isEmpty === true) {
      writer.uint32(8).bool(message.isEmpty);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IsPathEmptyResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIsPathEmptyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.isEmpty = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): IsPathEmptyResponse {
    return { isEmpty: isSet(object.isEmpty) ? gt.Boolean(object.isEmpty) : false };
  },

  toJSON(message: IsPathEmptyResponse): unknown {
    const obj: any = {};
    if (message.isEmpty === true) {
      obj.isEmpty = message.isEmpty;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<IsPathEmptyResponse>, I>>(base?: I): IsPathEmptyResponse {
    return IsPathEmptyResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<IsPathEmptyResponse>, I>>(object: I): IsPathEmptyResponse {
    const message = createBaseIsPathEmptyResponse();
    message.isEmpty = object.isEmpty ?? false;
    return message;
  },
};

function createBaseGenerateProjectFilesRequest(): GenerateProjectFilesRequest {
  return { connectionConfig: undefined };
}

export const GenerateProjectFilesRequest = {
  encode(message: GenerateProjectFilesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionConfig !== undefined) {
      ConnectionConfig.encode(message.connectionConfig, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenerateProjectFilesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenerateProjectFilesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.connectionConfig = ConnectionConfig.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenerateProjectFilesRequest {
    return {
      connectionConfig: isSet(object.connectionConfig) ? ConnectionConfig.fromJSON(object.connectionConfig) : undefined,
    };
  },

  toJSON(message: GenerateProjectFilesRequest): unknown {
    const obj: any = {};
    if (message.connectionConfig !== undefined) {
      obj.connectionConfig = ConnectionConfig.toJSON(message.connectionConfig);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GenerateProjectFilesRequest>, I>>(base?: I): GenerateProjectFilesRequest {
    return GenerateProjectFilesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GenerateProjectFilesRequest>, I>>(object: I): GenerateProjectFilesRequest {
    const message = createBaseGenerateProjectFilesRequest();
    message.connectionConfig = (object.connectionConfig !== undefined && object.connectionConfig !== null)
      ? ConnectionConfig.fromPartial(object.connectionConfig)
      : undefined;
    return message;
  },
};

function createBaseGenerateProjectFilesResponse(): GenerateProjectFilesResponse {
  return {};
}

export const GenerateProjectFilesResponse = {
  encode(_: GenerateProjectFilesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenerateProjectFilesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenerateProjectFilesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): GenerateProjectFilesResponse {
    return {};
  },

  toJSON(_: GenerateProjectFilesResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<GenerateProjectFilesResponse>, I>>(base?: I): GenerateProjectFilesResponse {
    return GenerateProjectFilesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GenerateProjectFilesResponse>, I>>(_: I): GenerateProjectFilesResponse {
    const message = createBaseGenerateProjectFilesResponse();
    return message;
  },
};

function createBaseStringifyProjectFileRequest(): StringifyProjectFileRequest {
  return { projectFile: undefined };
}

export const StringifyProjectFileRequest = {
  encode(message: StringifyProjectFileRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectFile !== undefined) {
      ProjectFile.encode(message.projectFile, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StringifyProjectFileRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStringifyProjectFileRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.projectFile = ProjectFile.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StringifyProjectFileRequest {
    return { projectFile: isSet(object.projectFile) ? ProjectFile.fromJSON(object.projectFile) : undefined };
  },

  toJSON(message: StringifyProjectFileRequest): unknown {
    const obj: any = {};
    if (message.projectFile !== undefined) {
      obj.projectFile = ProjectFile.toJSON(message.projectFile);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StringifyProjectFileRequest>, I>>(base?: I): StringifyProjectFileRequest {
    return StringifyProjectFileRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StringifyProjectFileRequest>, I>>(object: I): StringifyProjectFileRequest {
    const message = createBaseStringifyProjectFileRequest();
    message.projectFile = (object.projectFile !== undefined && object.projectFile !== null)
      ? ProjectFile.fromPartial(object.projectFile)
      : undefined;
    return message;
  },
};

function createBaseStringifyProjectFileResponse(): StringifyProjectFileResponse {
  return { stringifiedProjectFile: "" };
}

export const StringifyProjectFileResponse = {
  encode(message: StringifyProjectFileResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.stringifiedProjectFile !== "") {
      writer.uint32(10).string(message.stringifiedProjectFile);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StringifyProjectFileResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStringifyProjectFileResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.stringifiedProjectFile = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StringifyProjectFileResponse {
    return {
      stringifiedProjectFile: isSet(object.stringifiedProjectFile) ? gt.String(object.stringifiedProjectFile) : "",
    };
  },

  toJSON(message: StringifyProjectFileResponse): unknown {
    const obj: any = {};
    if (message.stringifiedProjectFile !== "") {
      obj.stringifiedProjectFile = message.stringifiedProjectFile;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StringifyProjectFileResponse>, I>>(base?: I): StringifyProjectFileResponse {
    return StringifyProjectFileResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StringifyProjectFileResponse>, I>>(object: I): StringifyProjectFileResponse {
    const message = createBaseStringifyProjectFileResponse();
    message.stringifiedProjectFile = object.stringifiedProjectFile ?? "";
    return message;
  },
};

function createBaseListAssetsRequest(): ListAssetsRequest {
  return { projectRoot: "" };
}

export const ListAssetsRequest = {
  encode(message: ListAssetsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectRoot !== "") {
      writer.uint32(26).string(message.projectRoot);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListAssetsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListAssetsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          if (tag !== 26) {
            break;
          }

          message.projectRoot = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListAssetsRequest {
    return { projectRoot: isSet(object.projectRoot) ? gt.String(object.projectRoot) : "" };
  },

  toJSON(message: ListAssetsRequest): unknown {
    const obj: any = {};
    if (message.projectRoot !== "") {
      obj.projectRoot = message.projectRoot;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListAssetsRequest>, I>>(base?: I): ListAssetsRequest {
    return ListAssetsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListAssetsRequest>, I>>(object: I): ListAssetsRequest {
    const message = createBaseListAssetsRequest();
    message.projectRoot = object.projectRoot ?? "";
    return message;
  },
};

function createBaseListAssetsResponse(): ListAssetsResponse {
  return { assets: [] };
}

export const ListAssetsResponse = {
  encode(message: ListAssetsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.assets) {
      ListAssetsResponse_Asset.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListAssetsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListAssetsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.assets.push(ListAssetsResponse_Asset.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListAssetsResponse {
    return {
      assets: gt.Array.isArray(object?.assets)
        ? object.assets.map((e: any) => ListAssetsResponse_Asset.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ListAssetsResponse): unknown {
    const obj: any = {};
    if (message.assets?.length) {
      obj.assets = message.assets.map((e) => ListAssetsResponse_Asset.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListAssetsResponse>, I>>(base?: I): ListAssetsResponse {
    return ListAssetsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListAssetsResponse>, I>>(object: I): ListAssetsResponse {
    const message = createBaseListAssetsResponse();
    message.assets = object.assets?.map((e) => ListAssetsResponse_Asset.fromPartial(e)) || [];
    return message;
  },
};

function createBaseListAssetsResponse_Asset(): ListAssetsResponse_Asset {
  return { name: "", description: undefined, tags: [], assetType: 0, filePath: "" };
}

export const ListAssetsResponse_Asset = {
  encode(message: ListAssetsResponse_Asset, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== undefined) {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.tags) {
      writer.uint32(42).string(v!);
    }
    if (message.assetType !== 0) {
      writer.uint32(24).int32(message.assetType);
    }
    if (message.filePath !== "") {
      writer.uint32(34).string(message.filePath);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListAssetsResponse_Asset {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListAssetsResponse_Asset();
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
        case 5:
          if (tag !== 42) {
            break;
          }

          message.tags.push(reader.string());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.assetType = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.filePath = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListAssetsResponse_Asset {
    return {
      name: isSet(object.name) ? gt.String(object.name) : "",
      description: isSet(object.description) ? gt.String(object.description) : undefined,
      tags: gt.Array.isArray(object?.tags) ? object.tags.map((e: any) => gt.String(e)) : [],
      assetType: isSet(object.assetType) ? listAssetsResponse_Asset_AssetTypeFromJSON(object.assetType) : 0,
      filePath: isSet(object.filePath) ? gt.String(object.filePath) : "",
    };
  },

  toJSON(message: ListAssetsResponse_Asset): unknown {
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
    if (message.assetType !== 0) {
      obj.assetType = listAssetsResponse_Asset_AssetTypeToJSON(message.assetType);
    }
    if (message.filePath !== "") {
      obj.filePath = message.filePath;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListAssetsResponse_Asset>, I>>(base?: I): ListAssetsResponse_Asset {
    return ListAssetsResponse_Asset.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListAssetsResponse_Asset>, I>>(object: I): ListAssetsResponse_Asset {
    const message = createBaseListAssetsResponse_Asset();
    message.name = object.name ?? "";
    message.description = object.description ?? undefined;
    message.tags = object.tags?.map((e) => e) || [];
    message.assetType = object.assetType ?? 0;
    message.filePath = object.filePath ?? "";
    return message;
  },
};

function createBaseParseProjectRequest(): ParseProjectRequest {
  return { projectRoot: "" };
}

export const ParseProjectRequest = {
  encode(message: ParseProjectRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectRoot !== "") {
      writer.uint32(26).string(message.projectRoot);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ParseProjectRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParseProjectRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          if (tag !== 26) {
            break;
          }

          message.projectRoot = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ParseProjectRequest {
    return { projectRoot: isSet(object.projectRoot) ? gt.String(object.projectRoot) : "" };
  },

  toJSON(message: ParseProjectRequest): unknown {
    const obj: any = {};
    if (message.projectRoot !== "") {
      obj.projectRoot = message.projectRoot;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ParseProjectRequest>, I>>(base?: I): ParseProjectRequest {
    return ParseProjectRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ParseProjectRequest>, I>>(object: I): ParseProjectRequest {
    const message = createBaseParseProjectRequest();
    message.projectRoot = object.projectRoot ?? "";
    return message;
  },
};

function createBaseParseProjectResponse(): ParseProjectResponse {
  return { project: undefined };
}

export const ParseProjectResponse = {
  encode(message: ParseProjectResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.project !== undefined) {
      Project.encode(message.project, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ParseProjectResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParseProjectResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.project = Project.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ParseProjectResponse {
    return { project: isSet(object.project) ? Project.fromJSON(object.project) : undefined };
  },

  toJSON(message: ParseProjectResponse): unknown {
    const obj: any = {};
    if (message.project !== undefined) {
      obj.project = Project.toJSON(message.project);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ParseProjectResponse>, I>>(base?: I): ParseProjectResponse {
    return ParseProjectResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ParseProjectResponse>, I>>(object: I): ParseProjectResponse {
    const message = createBaseParseProjectResponse();
    message.project = (object.project !== undefined && object.project !== null)
      ? Project.fromPartial(object.project)
      : undefined;
    return message;
  },
};

function createBaseRenderSchemaRequest(): RenderSchemaRequest {
  return { projectRoot: "" };
}

export const RenderSchemaRequest = {
  encode(message: RenderSchemaRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectRoot !== "") {
      writer.uint32(26).string(message.projectRoot);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RenderSchemaRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRenderSchemaRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          if (tag !== 26) {
            break;
          }

          message.projectRoot = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RenderSchemaRequest {
    return { projectRoot: isSet(object.projectRoot) ? gt.String(object.projectRoot) : "" };
  },

  toJSON(message: RenderSchemaRequest): unknown {
    const obj: any = {};
    if (message.projectRoot !== "") {
      obj.projectRoot = message.projectRoot;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RenderSchemaRequest>, I>>(base?: I): RenderSchemaRequest {
    return RenderSchemaRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RenderSchemaRequest>, I>>(object: I): RenderSchemaRequest {
    const message = createBaseRenderSchemaRequest();
    message.projectRoot = object.projectRoot ?? "";
    return message;
  },
};

function createBaseRenderSchemaResponse(): RenderSchemaResponse {
  return { schema: "" };
}

export const RenderSchemaResponse = {
  encode(message: RenderSchemaResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.schema !== "") {
      writer.uint32(10).string(message.schema);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RenderSchemaResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRenderSchemaResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.schema = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RenderSchemaResponse {
    return { schema: isSet(object.schema) ? gt.String(object.schema) : "" };
  },

  toJSON(message: RenderSchemaResponse): unknown {
    const obj: any = {};
    if (message.schema !== "") {
      obj.schema = message.schema;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RenderSchemaResponse>, I>>(base?: I): RenderSchemaResponse {
    return RenderSchemaResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RenderSchemaResponse>, I>>(object: I): RenderSchemaResponse {
    const message = createBaseRenderSchemaResponse();
    message.schema = object.schema ?? "";
    return message;
  },
};

function createBaseReturnSQLForSeedsAndModelsRequest(): ReturnSQLForSeedsAndModelsRequest {
  return { projectRoot: "", dbQualifier: "" };
}

export const ReturnSQLForSeedsAndModelsRequest = {
  encode(message: ReturnSQLForSeedsAndModelsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectRoot !== "") {
      writer.uint32(26).string(message.projectRoot);
    }
    if (message.dbQualifier !== "") {
      writer.uint32(34).string(message.dbQualifier);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReturnSQLForSeedsAndModelsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReturnSQLForSeedsAndModelsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          if (tag !== 26) {
            break;
          }

          message.projectRoot = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.dbQualifier = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ReturnSQLForSeedsAndModelsRequest {
    return {
      projectRoot: isSet(object.projectRoot) ? gt.String(object.projectRoot) : "",
      dbQualifier: isSet(object.dbQualifier) ? gt.String(object.dbQualifier) : "",
    };
  },

  toJSON(message: ReturnSQLForSeedsAndModelsRequest): unknown {
    const obj: any = {};
    if (message.projectRoot !== "") {
      obj.projectRoot = message.projectRoot;
    }
    if (message.dbQualifier !== "") {
      obj.dbQualifier = message.dbQualifier;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ReturnSQLForSeedsAndModelsRequest>, I>>(
    base?: I,
  ): ReturnSQLForSeedsAndModelsRequest {
    return ReturnSQLForSeedsAndModelsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ReturnSQLForSeedsAndModelsRequest>, I>>(
    object: I,
  ): ReturnSQLForSeedsAndModelsRequest {
    const message = createBaseReturnSQLForSeedsAndModelsRequest();
    message.projectRoot = object.projectRoot ?? "";
    message.dbQualifier = object.dbQualifier ?? "";
    return message;
  },
};

function createBaseReturnSQLForSeedsAndModelsResponse(): ReturnSQLForSeedsAndModelsResponse {
  return { sql: [], project: undefined };
}

export const ReturnSQLForSeedsAndModelsResponse = {
  encode(message: ReturnSQLForSeedsAndModelsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.sql) {
      writer.uint32(10).string(v!);
    }
    if (message.project !== undefined) {
      Project.encode(message.project, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReturnSQLForSeedsAndModelsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReturnSQLForSeedsAndModelsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sql.push(reader.string());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.project = Project.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ReturnSQLForSeedsAndModelsResponse {
    return {
      sql: gt.Array.isArray(object?.sql) ? object.sql.map((e: any) => gt.String(e)) : [],
      project: isSet(object.project) ? Project.fromJSON(object.project) : undefined,
    };
  },

  toJSON(message: ReturnSQLForSeedsAndModelsResponse): unknown {
    const obj: any = {};
    if (message.sql?.length) {
      obj.sql = message.sql;
    }
    if (message.project !== undefined) {
      obj.project = Project.toJSON(message.project);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ReturnSQLForSeedsAndModelsResponse>, I>>(
    base?: I,
  ): ReturnSQLForSeedsAndModelsResponse {
    return ReturnSQLForSeedsAndModelsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ReturnSQLForSeedsAndModelsResponse>, I>>(
    object: I,
  ): ReturnSQLForSeedsAndModelsResponse {
    const message = createBaseReturnSQLForSeedsAndModelsResponse();
    message.sql = object.sql?.map((e) => e) || [];
    message.project = (object.project !== undefined && object.project !== null)
      ? Project.fromPartial(object.project)
      : undefined;
    return message;
  },
};

function createBaseReturnFullSqlForAssetRequest(): ReturnFullSqlForAssetRequest {
  return { projectRoot: "", assetName: "", cacheView: undefined };
}

export const ReturnFullSqlForAssetRequest = {
  encode(message: ReturnFullSqlForAssetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectRoot !== "") {
      writer.uint32(26).string(message.projectRoot);
    }
    if (message.assetName !== "") {
      writer.uint32(34).string(message.assetName);
    }
    switch (message.cacheView?.$case) {
      case "cacheViewInformation":
        CacheViewInformation.encode(message.cacheView.cacheViewInformation, writer.uint32(42).fork()).ldelim();
        break;
      case "doNotUse":
        Empty.encode(message.cacheView.doNotUse, writer.uint32(50).fork()).ldelim();
        break;
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReturnFullSqlForAssetRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReturnFullSqlForAssetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          if (tag !== 26) {
            break;
          }

          message.projectRoot = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.assetName = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.cacheView = {
            $case: "cacheViewInformation",
            cacheViewInformation: CacheViewInformation.decode(reader, reader.uint32()),
          };
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.cacheView = { $case: "doNotUse", doNotUse: Empty.decode(reader, reader.uint32()) };
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ReturnFullSqlForAssetRequest {
    return {
      projectRoot: isSet(object.projectRoot) ? gt.String(object.projectRoot) : "",
      assetName: isSet(object.assetName) ? gt.String(object.assetName) : "",
      cacheView: isSet(object.cacheViewInformation)
        ? {
          $case: "cacheViewInformation",
          cacheViewInformation: CacheViewInformation.fromJSON(object.cacheViewInformation),
        }
        : isSet(object.doNotUse)
        ? { $case: "doNotUse", doNotUse: Empty.fromJSON(object.doNotUse) }
        : undefined,
    };
  },

  toJSON(message: ReturnFullSqlForAssetRequest): unknown {
    const obj: any = {};
    if (message.projectRoot !== "") {
      obj.projectRoot = message.projectRoot;
    }
    if (message.assetName !== "") {
      obj.assetName = message.assetName;
    }
    if (message.cacheView?.$case === "cacheViewInformation") {
      obj.cacheViewInformation = CacheViewInformation.toJSON(message.cacheView.cacheViewInformation);
    }
    if (message.cacheView?.$case === "doNotUse") {
      obj.doNotUse = Empty.toJSON(message.cacheView.doNotUse);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ReturnFullSqlForAssetRequest>, I>>(base?: I): ReturnFullSqlForAssetRequest {
    return ReturnFullSqlForAssetRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ReturnFullSqlForAssetRequest>, I>>(object: I): ReturnFullSqlForAssetRequest {
    const message = createBaseReturnFullSqlForAssetRequest();
    message.projectRoot = object.projectRoot ?? "";
    message.assetName = object.assetName ?? "";
    if (
      object.cacheView?.$case === "cacheViewInformation" &&
      object.cacheView?.cacheViewInformation !== undefined &&
      object.cacheView?.cacheViewInformation !== null
    ) {
      message.cacheView = {
        $case: "cacheViewInformation",
        cacheViewInformation: CacheViewInformation.fromPartial(object.cacheView.cacheViewInformation),
      };
    }
    if (
      object.cacheView?.$case === "doNotUse" &&
      object.cacheView?.doNotUse !== undefined &&
      object.cacheView?.doNotUse !== null
    ) {
      message.cacheView = { $case: "doNotUse", doNotUse: Empty.fromPartial(object.cacheView.doNotUse) };
    }
    return message;
  },
};

function createBaseReturnFullProjectDagRequest(): ReturnFullProjectDagRequest {
  return { projectRoot: "" };
}

export const ReturnFullProjectDagRequest = {
  encode(message: ReturnFullProjectDagRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectRoot !== "") {
      writer.uint32(18).string(message.projectRoot);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReturnFullProjectDagRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReturnFullProjectDagRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.projectRoot = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ReturnFullProjectDagRequest {
    return { projectRoot: isSet(object.projectRoot) ? gt.String(object.projectRoot) : "" };
  },

  toJSON(message: ReturnFullProjectDagRequest): unknown {
    const obj: any = {};
    if (message.projectRoot !== "") {
      obj.projectRoot = message.projectRoot;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ReturnFullProjectDagRequest>, I>>(base?: I): ReturnFullProjectDagRequest {
    return ReturnFullProjectDagRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ReturnFullProjectDagRequest>, I>>(object: I): ReturnFullProjectDagRequest {
    const message = createBaseReturnFullProjectDagRequest();
    message.projectRoot = object.projectRoot ?? "";
    return message;
  },
};

function createBaseReturnFullProjectDagResponse(): ReturnFullProjectDagResponse {
  return { dag: undefined };
}

export const ReturnFullProjectDagResponse = {
  encode(message: ReturnFullProjectDagResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dag !== undefined) {
      ProjectDag.encode(message.dag, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReturnFullProjectDagResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReturnFullProjectDagResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.dag = ProjectDag.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ReturnFullProjectDagResponse {
    return { dag: isSet(object.dag) ? ProjectDag.fromJSON(object.dag) : undefined };
  },

  toJSON(message: ReturnFullProjectDagResponse): unknown {
    const obj: any = {};
    if (message.dag !== undefined) {
      obj.dag = ProjectDag.toJSON(message.dag);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ReturnFullProjectDagResponse>, I>>(base?: I): ReturnFullProjectDagResponse {
    return ReturnFullProjectDagResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ReturnFullProjectDagResponse>, I>>(object: I): ReturnFullProjectDagResponse {
    const message = createBaseReturnFullProjectDagResponse();
    message.dag = (object.dag !== undefined && object.dag !== null) ? ProjectDag.fromPartial(object.dag) : undefined;
    return message;
  },
};

function createBaseCacheViewInformation(): CacheViewInformation {
  return { cacheViewPaths: [] };
}

export const CacheViewInformation = {
  encode(message: CacheViewInformation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.cacheViewPaths) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CacheViewInformation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCacheViewInformation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.cacheViewPaths.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CacheViewInformation {
    return {
      cacheViewPaths: gt.Array.isArray(object?.cacheViewPaths)
        ? object.cacheViewPaths.map((e: any) => gt.String(e))
        : [],
    };
  },

  toJSON(message: CacheViewInformation): unknown {
    const obj: any = {};
    if (message.cacheViewPaths?.length) {
      obj.cacheViewPaths = message.cacheViewPaths;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CacheViewInformation>, I>>(base?: I): CacheViewInformation {
    return CacheViewInformation.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CacheViewInformation>, I>>(object: I): CacheViewInformation {
    const message = createBaseCacheViewInformation();
    message.cacheViewPaths = object.cacheViewPaths?.map((e) => e) || [];
    return message;
  },
};

function createBaseReturnFullSqlForAssetResponse(): ReturnFullSqlForAssetResponse {
  return { fullSql: "", description: undefined, dag: undefined, columns: [] };
}

export const ReturnFullSqlForAssetResponse = {
  encode(message: ReturnFullSqlForAssetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fullSql !== "") {
      writer.uint32(10).string(message.fullSql);
    }
    if (message.description !== undefined) {
      writer.uint32(18).string(message.description);
    }
    if (message.dag !== undefined) {
      ProjectDag.encode(message.dag, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.columns) {
      ColumnDescription.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReturnFullSqlForAssetResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReturnFullSqlForAssetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.fullSql = reader.string();
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

          message.dag = ProjectDag.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.columns.push(ColumnDescription.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ReturnFullSqlForAssetResponse {
    return {
      fullSql: isSet(object.fullSql) ? gt.String(object.fullSql) : "",
      description: isSet(object.description) ? gt.String(object.description) : undefined,
      dag: isSet(object.dag) ? ProjectDag.fromJSON(object.dag) : undefined,
      columns: gt.Array.isArray(object?.columns) ? object.columns.map((e: any) => ColumnDescription.fromJSON(e)) : [],
    };
  },

  toJSON(message: ReturnFullSqlForAssetResponse): unknown {
    const obj: any = {};
    if (message.fullSql !== "") {
      obj.fullSql = message.fullSql;
    }
    if (message.description !== undefined) {
      obj.description = message.description;
    }
    if (message.dag !== undefined) {
      obj.dag = ProjectDag.toJSON(message.dag);
    }
    if (message.columns?.length) {
      obj.columns = message.columns.map((e) => ColumnDescription.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ReturnFullSqlForAssetResponse>, I>>(base?: I): ReturnFullSqlForAssetResponse {
    return ReturnFullSqlForAssetResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ReturnFullSqlForAssetResponse>, I>>(
    object: I,
  ): ReturnFullSqlForAssetResponse {
    const message = createBaseReturnFullSqlForAssetResponse();
    message.fullSql = object.fullSql ?? "";
    message.description = object.description ?? undefined;
    message.dag = (object.dag !== undefined && object.dag !== null) ? ProjectDag.fromPartial(object.dag) : undefined;
    message.columns = object.columns?.map((e) => ColumnDescription.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetModelTableRequest(): GetModelTableRequest {
  return { projectRoot: "", modelName: "" };
}

export const GetModelTableRequest = {
  encode(message: GetModelTableRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectRoot !== "") {
      writer.uint32(26).string(message.projectRoot);
    }
    if (message.modelName !== "") {
      writer.uint32(34).string(message.modelName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetModelTableRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetModelTableRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          if (tag !== 26) {
            break;
          }

          message.projectRoot = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.modelName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetModelTableRequest {
    return {
      projectRoot: isSet(object.projectRoot) ? gt.String(object.projectRoot) : "",
      modelName: isSet(object.modelName) ? gt.String(object.modelName) : "",
    };
  },

  toJSON(message: GetModelTableRequest): unknown {
    const obj: any = {};
    if (message.projectRoot !== "") {
      obj.projectRoot = message.projectRoot;
    }
    if (message.modelName !== "") {
      obj.modelName = message.modelName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetModelTableRequest>, I>>(base?: I): GetModelTableRequest {
    return GetModelTableRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetModelTableRequest>, I>>(object: I): GetModelTableRequest {
    const message = createBaseGetModelTableRequest();
    message.projectRoot = object.projectRoot ?? "";
    message.modelName = object.modelName ?? "";
    return message;
  },
};

function createBaseGetModelTableResponse(): GetModelTableResponse {
  return { table: undefined };
}

export const GetModelTableResponse = {
  encode(message: GetModelTableResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.table !== undefined) {
      Table.encode(message.table, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetModelTableResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetModelTableResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.table = Table.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetModelTableResponse {
    return { table: isSet(object.table) ? Table.fromJSON(object.table) : undefined };
  },

  toJSON(message: GetModelTableResponse): unknown {
    const obj: any = {};
    if (message.table !== undefined) {
      obj.table = Table.toJSON(message.table);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetModelTableResponse>, I>>(base?: I): GetModelTableResponse {
    return GetModelTableResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetModelTableResponse>, I>>(object: I): GetModelTableResponse {
    const message = createBaseGetModelTableResponse();
    message.table = (object.table !== undefined && object.table !== null) ? Table.fromPartial(object.table) : undefined;
    return message;
  },
};

function createBaseCreateModelSchemaEntryRequest(): CreateModelSchemaEntryRequest {
  return { projectRoot: "", modelName: "" };
}

export const CreateModelSchemaEntryRequest = {
  encode(message: CreateModelSchemaEntryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectRoot !== "") {
      writer.uint32(18).string(message.projectRoot);
    }
    if (message.modelName !== "") {
      writer.uint32(26).string(message.modelName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateModelSchemaEntryRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateModelSchemaEntryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.projectRoot = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.modelName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateModelSchemaEntryRequest {
    return {
      projectRoot: isSet(object.projectRoot) ? gt.String(object.projectRoot) : "",
      modelName: isSet(object.modelName) ? gt.String(object.modelName) : "",
    };
  },

  toJSON(message: CreateModelSchemaEntryRequest): unknown {
    const obj: any = {};
    if (message.projectRoot !== "") {
      obj.projectRoot = message.projectRoot;
    }
    if (message.modelName !== "") {
      obj.modelName = message.modelName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateModelSchemaEntryRequest>, I>>(base?: I): CreateModelSchemaEntryRequest {
    return CreateModelSchemaEntryRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateModelSchemaEntryRequest>, I>>(
    object: I,
  ): CreateModelSchemaEntryRequest {
    const message = createBaseCreateModelSchemaEntryRequest();
    message.projectRoot = object.projectRoot ?? "";
    message.modelName = object.modelName ?? "";
    return message;
  },
};

function createBaseCreateModelSchemaEntryResponse(): CreateModelSchemaEntryResponse {
  return { path: "", projectFile: undefined };
}

export const CreateModelSchemaEntryResponse = {
  encode(message: CreateModelSchemaEntryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.path !== "") {
      writer.uint32(10).string(message.path);
    }
    if (message.projectFile !== undefined) {
      ProjectFile.encode(message.projectFile, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateModelSchemaEntryResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateModelSchemaEntryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.path = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.projectFile = ProjectFile.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateModelSchemaEntryResponse {
    return {
      path: isSet(object.path) ? gt.String(object.path) : "",
      projectFile: isSet(object.projectFile) ? ProjectFile.fromJSON(object.projectFile) : undefined,
    };
  },

  toJSON(message: CreateModelSchemaEntryResponse): unknown {
    const obj: any = {};
    if (message.path !== "") {
      obj.path = message.path;
    }
    if (message.projectFile !== undefined) {
      obj.projectFile = ProjectFile.toJSON(message.projectFile);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateModelSchemaEntryResponse>, I>>(base?: I): CreateModelSchemaEntryResponse {
    return CreateModelSchemaEntryResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateModelSchemaEntryResponse>, I>>(
    object: I,
  ): CreateModelSchemaEntryResponse {
    const message = createBaseCreateModelSchemaEntryResponse();
    message.path = object.path ?? "";
    message.projectFile = (object.projectFile !== undefined && object.projectFile !== null)
      ? ProjectFile.fromPartial(object.projectFile)
      : undefined;
    return message;
  },
};

function createBaseUpdateAssetDescriptionRequest(): UpdateAssetDescriptionRequest {
  return { projectRoot: "", assetName: "", description: "" };
}

export const UpdateAssetDescriptionRequest = {
  encode(message: UpdateAssetDescriptionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectRoot !== "") {
      writer.uint32(18).string(message.projectRoot);
    }
    if (message.assetName !== "") {
      writer.uint32(26).string(message.assetName);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAssetDescriptionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateAssetDescriptionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.projectRoot = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.assetName = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
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

  fromJSON(object: any): UpdateAssetDescriptionRequest {
    return {
      projectRoot: isSet(object.projectRoot) ? gt.String(object.projectRoot) : "",
      assetName: isSet(object.assetName) ? gt.String(object.assetName) : "",
      description: isSet(object.description) ? gt.String(object.description) : "",
    };
  },

  toJSON(message: UpdateAssetDescriptionRequest): unknown {
    const obj: any = {};
    if (message.projectRoot !== "") {
      obj.projectRoot = message.projectRoot;
    }
    if (message.assetName !== "") {
      obj.assetName = message.assetName;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateAssetDescriptionRequest>, I>>(base?: I): UpdateAssetDescriptionRequest {
    return UpdateAssetDescriptionRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateAssetDescriptionRequest>, I>>(
    object: I,
  ): UpdateAssetDescriptionRequest {
    const message = createBaseUpdateAssetDescriptionRequest();
    message.projectRoot = object.projectRoot ?? "";
    message.assetName = object.assetName ?? "";
    message.description = object.description ?? "";
    return message;
  },
};

function createBaseUpdateAssetDescriptionResponse(): UpdateAssetDescriptionResponse {
  return {};
}

export const UpdateAssetDescriptionResponse = {
  encode(_: UpdateAssetDescriptionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAssetDescriptionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateAssetDescriptionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): UpdateAssetDescriptionResponse {
    return {};
  },

  toJSON(_: UpdateAssetDescriptionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateAssetDescriptionResponse>, I>>(base?: I): UpdateAssetDescriptionResponse {
    return UpdateAssetDescriptionResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateAssetDescriptionResponse>, I>>(_: I): UpdateAssetDescriptionResponse {
    const message = createBaseUpdateAssetDescriptionResponse();
    return message;
  },
};

function createBaseAddColumnToModelOrSourceRequest(): AddColumnToModelOrSourceRequest {
  return { projectRoot: "", modelOrSourceName: "", columnName: "" };
}

export const AddColumnToModelOrSourceRequest = {
  encode(message: AddColumnToModelOrSourceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectRoot !== "") {
      writer.uint32(18).string(message.projectRoot);
    }
    if (message.modelOrSourceName !== "") {
      writer.uint32(26).string(message.modelOrSourceName);
    }
    if (message.columnName !== "") {
      writer.uint32(34).string(message.columnName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddColumnToModelOrSourceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddColumnToModelOrSourceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.projectRoot = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.modelOrSourceName = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.columnName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddColumnToModelOrSourceRequest {
    return {
      projectRoot: isSet(object.projectRoot) ? gt.String(object.projectRoot) : "",
      modelOrSourceName: isSet(object.modelOrSourceName) ? gt.String(object.modelOrSourceName) : "",
      columnName: isSet(object.columnName) ? gt.String(object.columnName) : "",
    };
  },

  toJSON(message: AddColumnToModelOrSourceRequest): unknown {
    const obj: any = {};
    if (message.projectRoot !== "") {
      obj.projectRoot = message.projectRoot;
    }
    if (message.modelOrSourceName !== "") {
      obj.modelOrSourceName = message.modelOrSourceName;
    }
    if (message.columnName !== "") {
      obj.columnName = message.columnName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AddColumnToModelOrSourceRequest>, I>>(base?: I): AddColumnToModelOrSourceRequest {
    return AddColumnToModelOrSourceRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AddColumnToModelOrSourceRequest>, I>>(
    object: I,
  ): AddColumnToModelOrSourceRequest {
    const message = createBaseAddColumnToModelOrSourceRequest();
    message.projectRoot = object.projectRoot ?? "";
    message.modelOrSourceName = object.modelOrSourceName ?? "";
    message.columnName = object.columnName ?? "";
    return message;
  },
};

function createBaseAddColumnToModelOrSourceResponse(): AddColumnToModelOrSourceResponse {
  return {};
}

export const AddColumnToModelOrSourceResponse = {
  encode(_: AddColumnToModelOrSourceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddColumnToModelOrSourceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddColumnToModelOrSourceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): AddColumnToModelOrSourceResponse {
    return {};
  },

  toJSON(_: AddColumnToModelOrSourceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<AddColumnToModelOrSourceResponse>, I>>(
    base?: I,
  ): AddColumnToModelOrSourceResponse {
    return AddColumnToModelOrSourceResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AddColumnToModelOrSourceResponse>, I>>(
    _: I,
  ): AddColumnToModelOrSourceResponse {
    const message = createBaseAddColumnToModelOrSourceResponse();
    return message;
  },
};

function createBaseUpdateModelOrSourceColumnDescriptionRequest(): UpdateModelOrSourceColumnDescriptionRequest {
  return { projectRoot: "", modelOrSourceName: "", columnName: "", description: undefined };
}

export const UpdateModelOrSourceColumnDescriptionRequest = {
  encode(message: UpdateModelOrSourceColumnDescriptionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectRoot !== "") {
      writer.uint32(18).string(message.projectRoot);
    }
    if (message.modelOrSourceName !== "") {
      writer.uint32(26).string(message.modelOrSourceName);
    }
    if (message.columnName !== "") {
      writer.uint32(34).string(message.columnName);
    }
    if (message.description !== undefined) {
      writer.uint32(42).string(message.description);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateModelOrSourceColumnDescriptionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateModelOrSourceColumnDescriptionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.projectRoot = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.modelOrSourceName = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.columnName = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
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

  fromJSON(object: any): UpdateModelOrSourceColumnDescriptionRequest {
    return {
      projectRoot: isSet(object.projectRoot) ? gt.String(object.projectRoot) : "",
      modelOrSourceName: isSet(object.modelOrSourceName) ? gt.String(object.modelOrSourceName) : "",
      columnName: isSet(object.columnName) ? gt.String(object.columnName) : "",
      description: isSet(object.description) ? gt.String(object.description) : undefined,
    };
  },

  toJSON(message: UpdateModelOrSourceColumnDescriptionRequest): unknown {
    const obj: any = {};
    if (message.projectRoot !== "") {
      obj.projectRoot = message.projectRoot;
    }
    if (message.modelOrSourceName !== "") {
      obj.modelOrSourceName = message.modelOrSourceName;
    }
    if (message.columnName !== "") {
      obj.columnName = message.columnName;
    }
    if (message.description !== undefined) {
      obj.description = message.description;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateModelOrSourceColumnDescriptionRequest>, I>>(
    base?: I,
  ): UpdateModelOrSourceColumnDescriptionRequest {
    return UpdateModelOrSourceColumnDescriptionRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateModelOrSourceColumnDescriptionRequest>, I>>(
    object: I,
  ): UpdateModelOrSourceColumnDescriptionRequest {
    const message = createBaseUpdateModelOrSourceColumnDescriptionRequest();
    message.projectRoot = object.projectRoot ?? "";
    message.modelOrSourceName = object.modelOrSourceName ?? "";
    message.columnName = object.columnName ?? "";
    message.description = object.description ?? undefined;
    return message;
  },
};

function createBaseUpdateModelOrSourceColumnDescriptionResponse(): UpdateModelOrSourceColumnDescriptionResponse {
  return {};
}

export const UpdateModelOrSourceColumnDescriptionResponse = {
  encode(_: UpdateModelOrSourceColumnDescriptionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateModelOrSourceColumnDescriptionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateModelOrSourceColumnDescriptionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): UpdateModelOrSourceColumnDescriptionResponse {
    return {};
  },

  toJSON(_: UpdateModelOrSourceColumnDescriptionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateModelOrSourceColumnDescriptionResponse>, I>>(
    base?: I,
  ): UpdateModelOrSourceColumnDescriptionResponse {
    return UpdateModelOrSourceColumnDescriptionResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateModelOrSourceColumnDescriptionResponse>, I>>(
    _: I,
  ): UpdateModelOrSourceColumnDescriptionResponse {
    const message = createBaseUpdateModelOrSourceColumnDescriptionResponse();
    return message;
  },
};

function createBaseAddColumnTestToModelOrSourceColumnRequest(): AddColumnTestToModelOrSourceColumnRequest {
  return { projectRoot: "", modelOrSourceName: "", columnName: "", columnTest: undefined };
}

export const AddColumnTestToModelOrSourceColumnRequest = {
  encode(message: AddColumnTestToModelOrSourceColumnRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectRoot !== "") {
      writer.uint32(18).string(message.projectRoot);
    }
    if (message.modelOrSourceName !== "") {
      writer.uint32(26).string(message.modelOrSourceName);
    }
    if (message.columnName !== "") {
      writer.uint32(34).string(message.columnName);
    }
    if (message.columnTest !== undefined) {
      ColumnTest.encode(message.columnTest, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddColumnTestToModelOrSourceColumnRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddColumnTestToModelOrSourceColumnRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.projectRoot = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.modelOrSourceName = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.columnName = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.columnTest = ColumnTest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddColumnTestToModelOrSourceColumnRequest {
    return {
      projectRoot: isSet(object.projectRoot) ? gt.String(object.projectRoot) : "",
      modelOrSourceName: isSet(object.modelOrSourceName) ? gt.String(object.modelOrSourceName) : "",
      columnName: isSet(object.columnName) ? gt.String(object.columnName) : "",
      columnTest: isSet(object.columnTest) ? ColumnTest.fromJSON(object.columnTest) : undefined,
    };
  },

  toJSON(message: AddColumnTestToModelOrSourceColumnRequest): unknown {
    const obj: any = {};
    if (message.projectRoot !== "") {
      obj.projectRoot = message.projectRoot;
    }
    if (message.modelOrSourceName !== "") {
      obj.modelOrSourceName = message.modelOrSourceName;
    }
    if (message.columnName !== "") {
      obj.columnName = message.columnName;
    }
    if (message.columnTest !== undefined) {
      obj.columnTest = ColumnTest.toJSON(message.columnTest);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AddColumnTestToModelOrSourceColumnRequest>, I>>(
    base?: I,
  ): AddColumnTestToModelOrSourceColumnRequest {
    return AddColumnTestToModelOrSourceColumnRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AddColumnTestToModelOrSourceColumnRequest>, I>>(
    object: I,
  ): AddColumnTestToModelOrSourceColumnRequest {
    const message = createBaseAddColumnTestToModelOrSourceColumnRequest();
    message.projectRoot = object.projectRoot ?? "";
    message.modelOrSourceName = object.modelOrSourceName ?? "";
    message.columnName = object.columnName ?? "";
    message.columnTest = (object.columnTest !== undefined && object.columnTest !== null)
      ? ColumnTest.fromPartial(object.columnTest)
      : undefined;
    return message;
  },
};

function createBaseAddColumnTestToModelOrSourceColumnResponse(): AddColumnTestToModelOrSourceColumnResponse {
  return {};
}

export const AddColumnTestToModelOrSourceColumnResponse = {
  encode(_: AddColumnTestToModelOrSourceColumnResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddColumnTestToModelOrSourceColumnResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddColumnTestToModelOrSourceColumnResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): AddColumnTestToModelOrSourceColumnResponse {
    return {};
  },

  toJSON(_: AddColumnTestToModelOrSourceColumnResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<AddColumnTestToModelOrSourceColumnResponse>, I>>(
    base?: I,
  ): AddColumnTestToModelOrSourceColumnResponse {
    return AddColumnTestToModelOrSourceColumnResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AddColumnTestToModelOrSourceColumnResponse>, I>>(
    _: I,
  ): AddColumnTestToModelOrSourceColumnResponse {
    const message = createBaseAddColumnTestToModelOrSourceColumnResponse();
    return message;
  },
};

function createBaseRemoveColumnTestFromModelOrSourceColumnRequest(): RemoveColumnTestFromModelOrSourceColumnRequest {
  return { projectRoot: "", modelOrSourceName: "", columnName: "", columnTest: undefined };
}

export const RemoveColumnTestFromModelOrSourceColumnRequest = {
  encode(
    message: RemoveColumnTestFromModelOrSourceColumnRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.projectRoot !== "") {
      writer.uint32(18).string(message.projectRoot);
    }
    if (message.modelOrSourceName !== "") {
      writer.uint32(26).string(message.modelOrSourceName);
    }
    if (message.columnName !== "") {
      writer.uint32(34).string(message.columnName);
    }
    if (message.columnTest !== undefined) {
      ColumnTest.encode(message.columnTest, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveColumnTestFromModelOrSourceColumnRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveColumnTestFromModelOrSourceColumnRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.projectRoot = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.modelOrSourceName = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.columnName = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.columnTest = ColumnTest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RemoveColumnTestFromModelOrSourceColumnRequest {
    return {
      projectRoot: isSet(object.projectRoot) ? gt.String(object.projectRoot) : "",
      modelOrSourceName: isSet(object.modelOrSourceName) ? gt.String(object.modelOrSourceName) : "",
      columnName: isSet(object.columnName) ? gt.String(object.columnName) : "",
      columnTest: isSet(object.columnTest) ? ColumnTest.fromJSON(object.columnTest) : undefined,
    };
  },

  toJSON(message: RemoveColumnTestFromModelOrSourceColumnRequest): unknown {
    const obj: any = {};
    if (message.projectRoot !== "") {
      obj.projectRoot = message.projectRoot;
    }
    if (message.modelOrSourceName !== "") {
      obj.modelOrSourceName = message.modelOrSourceName;
    }
    if (message.columnName !== "") {
      obj.columnName = message.columnName;
    }
    if (message.columnTest !== undefined) {
      obj.columnTest = ColumnTest.toJSON(message.columnTest);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RemoveColumnTestFromModelOrSourceColumnRequest>, I>>(
    base?: I,
  ): RemoveColumnTestFromModelOrSourceColumnRequest {
    return RemoveColumnTestFromModelOrSourceColumnRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RemoveColumnTestFromModelOrSourceColumnRequest>, I>>(
    object: I,
  ): RemoveColumnTestFromModelOrSourceColumnRequest {
    const message = createBaseRemoveColumnTestFromModelOrSourceColumnRequest();
    message.projectRoot = object.projectRoot ?? "";
    message.modelOrSourceName = object.modelOrSourceName ?? "";
    message.columnName = object.columnName ?? "";
    message.columnTest = (object.columnTest !== undefined && object.columnTest !== null)
      ? ColumnTest.fromPartial(object.columnTest)
      : undefined;
    return message;
  },
};

function createBaseRemoveColumnTestFromModelOrSourceColumnResponse(): RemoveColumnTestFromModelOrSourceColumnResponse {
  return {};
}

export const RemoveColumnTestFromModelOrSourceColumnResponse = {
  encode(_: RemoveColumnTestFromModelOrSourceColumnResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveColumnTestFromModelOrSourceColumnResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveColumnTestFromModelOrSourceColumnResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): RemoveColumnTestFromModelOrSourceColumnResponse {
    return {};
  },

  toJSON(_: RemoveColumnTestFromModelOrSourceColumnResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<RemoveColumnTestFromModelOrSourceColumnResponse>, I>>(
    base?: I,
  ): RemoveColumnTestFromModelOrSourceColumnResponse {
    return RemoveColumnTestFromModelOrSourceColumnResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RemoveColumnTestFromModelOrSourceColumnResponse>, I>>(
    _: I,
  ): RemoveColumnTestFromModelOrSourceColumnResponse {
    const message = createBaseRemoveColumnTestFromModelOrSourceColumnResponse();
    return message;
  },
};

function createBaseGenerateSourceFilesRequest(): GenerateSourceFilesRequest {
  return { projectRoot: "", sources: [], folderPath: "" };
}

export const GenerateSourceFilesRequest = {
  encode(message: GenerateSourceFilesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectRoot !== "") {
      writer.uint32(18).string(message.projectRoot);
    }
    for (const v of message.sources) {
      DatabaseSource.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.folderPath !== "") {
      writer.uint32(34).string(message.folderPath);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenerateSourceFilesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenerateSourceFilesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.projectRoot = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.sources.push(DatabaseSource.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.folderPath = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenerateSourceFilesRequest {
    return {
      projectRoot: isSet(object.projectRoot) ? gt.String(object.projectRoot) : "",
      sources: gt.Array.isArray(object?.sources) ? object.sources.map((e: any) => DatabaseSource.fromJSON(e)) : [],
      folderPath: isSet(object.folderPath) ? gt.String(object.folderPath) : "",
    };
  },

  toJSON(message: GenerateSourceFilesRequest): unknown {
    const obj: any = {};
    if (message.projectRoot !== "") {
      obj.projectRoot = message.projectRoot;
    }
    if (message.sources?.length) {
      obj.sources = message.sources.map((e) => DatabaseSource.toJSON(e));
    }
    if (message.folderPath !== "") {
      obj.folderPath = message.folderPath;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GenerateSourceFilesRequest>, I>>(base?: I): GenerateSourceFilesRequest {
    return GenerateSourceFilesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GenerateSourceFilesRequest>, I>>(object: I): GenerateSourceFilesRequest {
    const message = createBaseGenerateSourceFilesRequest();
    message.projectRoot = object.projectRoot ?? "";
    message.sources = object.sources?.map((e) => DatabaseSource.fromPartial(e)) || [];
    message.folderPath = object.folderPath ?? "";
    return message;
  },
};

function createBaseGenerateSourceFilesResponse(): GenerateSourceFilesResponse {
  return {};
}

export const GenerateSourceFilesResponse = {
  encode(_: GenerateSourceFilesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenerateSourceFilesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenerateSourceFilesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): GenerateSourceFilesResponse {
    return {};
  },

  toJSON(_: GenerateSourceFilesResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<GenerateSourceFilesResponse>, I>>(base?: I): GenerateSourceFilesResponse {
    return GenerateSourceFilesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GenerateSourceFilesResponse>, I>>(_: I): GenerateSourceFilesResponse {
    const message = createBaseGenerateSourceFilesResponse();
    return message;
  },
};

function createBaseReturnDefinitionLocationsForSQLRequest(): ReturnDefinitionLocationsForSQLRequest {
  return { projectRoot: "", sql: "" };
}

export const ReturnDefinitionLocationsForSQLRequest = {
  encode(message: ReturnDefinitionLocationsForSQLRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectRoot !== "") {
      writer.uint32(18).string(message.projectRoot);
    }
    if (message.sql !== "") {
      writer.uint32(26).string(message.sql);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReturnDefinitionLocationsForSQLRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReturnDefinitionLocationsForSQLRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.projectRoot = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.sql = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ReturnDefinitionLocationsForSQLRequest {
    return {
      projectRoot: isSet(object.projectRoot) ? gt.String(object.projectRoot) : "",
      sql: isSet(object.sql) ? gt.String(object.sql) : "",
    };
  },

  toJSON(message: ReturnDefinitionLocationsForSQLRequest): unknown {
    const obj: any = {};
    if (message.projectRoot !== "") {
      obj.projectRoot = message.projectRoot;
    }
    if (message.sql !== "") {
      obj.sql = message.sql;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ReturnDefinitionLocationsForSQLRequest>, I>>(
    base?: I,
  ): ReturnDefinitionLocationsForSQLRequest {
    return ReturnDefinitionLocationsForSQLRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ReturnDefinitionLocationsForSQLRequest>, I>>(
    object: I,
  ): ReturnDefinitionLocationsForSQLRequest {
    const message = createBaseReturnDefinitionLocationsForSQLRequest();
    message.projectRoot = object.projectRoot ?? "";
    message.sql = object.sql ?? "";
    return message;
  },
};

function createBaseReturnDefinitionLocationsForSQLResponse(): ReturnDefinitionLocationsForSQLResponse {
  return { definitions: [] };
}

export const ReturnDefinitionLocationsForSQLResponse = {
  encode(message: ReturnDefinitionLocationsForSQLResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.definitions) {
      ReturnDefinitionLocationsForSQLResponse_Definition.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReturnDefinitionLocationsForSQLResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReturnDefinitionLocationsForSQLResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.definitions.push(ReturnDefinitionLocationsForSQLResponse_Definition.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ReturnDefinitionLocationsForSQLResponse {
    return {
      definitions: gt.Array.isArray(object?.definitions)
        ? object.definitions.map((e: any) => ReturnDefinitionLocationsForSQLResponse_Definition.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ReturnDefinitionLocationsForSQLResponse): unknown {
    const obj: any = {};
    if (message.definitions?.length) {
      obj.definitions = message.definitions.map((e) => ReturnDefinitionLocationsForSQLResponse_Definition.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ReturnDefinitionLocationsForSQLResponse>, I>>(
    base?: I,
  ): ReturnDefinitionLocationsForSQLResponse {
    return ReturnDefinitionLocationsForSQLResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ReturnDefinitionLocationsForSQLResponse>, I>>(
    object: I,
  ): ReturnDefinitionLocationsForSQLResponse {
    const message = createBaseReturnDefinitionLocationsForSQLResponse();
    message.definitions =
      object.definitions?.map((e) => ReturnDefinitionLocationsForSQLResponse_Definition.fromPartial(e)) || [];
    return message;
  },
};

function createBaseReturnDefinitionLocationsForSQLResponse_Definition(): ReturnDefinitionLocationsForSQLResponse_Definition {
  return { range: undefined, targetModel: "", targetFile: "" };
}

export const ReturnDefinitionLocationsForSQLResponse_Definition = {
  encode(
    message: ReturnDefinitionLocationsForSQLResponse_Definition,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.range !== undefined) {
      Range.encode(message.range, writer.uint32(10).fork()).ldelim();
    }
    if (message.targetModel !== "") {
      writer.uint32(18).string(message.targetModel);
    }
    if (message.targetFile !== "") {
      writer.uint32(26).string(message.targetFile);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReturnDefinitionLocationsForSQLResponse_Definition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReturnDefinitionLocationsForSQLResponse_Definition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.range = Range.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.targetModel = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.targetFile = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ReturnDefinitionLocationsForSQLResponse_Definition {
    return {
      range: isSet(object.range) ? Range.fromJSON(object.range) : undefined,
      targetModel: isSet(object.targetModel) ? gt.String(object.targetModel) : "",
      targetFile: isSet(object.targetFile) ? gt.String(object.targetFile) : "",
    };
  },

  toJSON(message: ReturnDefinitionLocationsForSQLResponse_Definition): unknown {
    const obj: any = {};
    if (message.range !== undefined) {
      obj.range = Range.toJSON(message.range);
    }
    if (message.targetModel !== "") {
      obj.targetModel = message.targetModel;
    }
    if (message.targetFile !== "") {
      obj.targetFile = message.targetFile;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ReturnDefinitionLocationsForSQLResponse_Definition>, I>>(
    base?: I,
  ): ReturnDefinitionLocationsForSQLResponse_Definition {
    return ReturnDefinitionLocationsForSQLResponse_Definition.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ReturnDefinitionLocationsForSQLResponse_Definition>, I>>(
    object: I,
  ): ReturnDefinitionLocationsForSQLResponse_Definition {
    const message = createBaseReturnDefinitionLocationsForSQLResponse_Definition();
    message.range = (object.range !== undefined && object.range !== null) ? Range.fromPartial(object.range) : undefined;
    message.targetModel = object.targetModel ?? "";
    message.targetFile = object.targetFile ?? "";
    return message;
  },
};

function createBaseReturnSQLForInjectedModelRequest(): ReturnSQLForInjectedModelRequest {
  return { projectRoot: "", sql: "" };
}

export const ReturnSQLForInjectedModelRequest = {
  encode(message: ReturnSQLForInjectedModelRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectRoot !== "") {
      writer.uint32(10).string(message.projectRoot);
    }
    if (message.sql !== "") {
      writer.uint32(18).string(message.sql);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReturnSQLForInjectedModelRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReturnSQLForInjectedModelRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.projectRoot = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.sql = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ReturnSQLForInjectedModelRequest {
    return {
      projectRoot: isSet(object.projectRoot) ? gt.String(object.projectRoot) : "",
      sql: isSet(object.sql) ? gt.String(object.sql) : "",
    };
  },

  toJSON(message: ReturnSQLForInjectedModelRequest): unknown {
    const obj: any = {};
    if (message.projectRoot !== "") {
      obj.projectRoot = message.projectRoot;
    }
    if (message.sql !== "") {
      obj.sql = message.sql;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ReturnSQLForInjectedModelRequest>, I>>(
    base?: I,
  ): ReturnSQLForInjectedModelRequest {
    return ReturnSQLForInjectedModelRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ReturnSQLForInjectedModelRequest>, I>>(
    object: I,
  ): ReturnSQLForInjectedModelRequest {
    const message = createBaseReturnSQLForInjectedModelRequest();
    message.projectRoot = object.projectRoot ?? "";
    message.sql = object.sql ?? "";
    return message;
  },
};

function createBaseReturnSQLForInjectedModelResponse(): ReturnSQLForInjectedModelResponse {
  return { sql: "" };
}

export const ReturnSQLForInjectedModelResponse = {
  encode(message: ReturnSQLForInjectedModelResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sql !== "") {
      writer.uint32(10).string(message.sql);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReturnSQLForInjectedModelResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReturnSQLForInjectedModelResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sql = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ReturnSQLForInjectedModelResponse {
    return { sql: isSet(object.sql) ? gt.String(object.sql) : "" };
  },

  toJSON(message: ReturnSQLForInjectedModelResponse): unknown {
    const obj: any = {};
    if (message.sql !== "") {
      obj.sql = message.sql;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ReturnSQLForInjectedModelResponse>, I>>(
    base?: I,
  ): ReturnSQLForInjectedModelResponse {
    return ReturnSQLForInjectedModelResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ReturnSQLForInjectedModelResponse>, I>>(
    object: I,
  ): ReturnSQLForInjectedModelResponse {
    const message = createBaseReturnSQLForInjectedModelResponse();
    message.sql = object.sql ?? "";
    return message;
  },
};

/**
 * RustWithoutDatabaseService is the service that is used and where the database is not used and so not passed in as a
 * parameter in.
 */
export interface RustWithoutDatabaseService {
  /** GetProjectConfig returns the config from quary.yaml */
  GetProjectConfig(request: GetProjectConfigRequest): Promise<GetProjectConfigResponse>;
  /** InitFiles returns the init files to start off a project. */
  InitFiles(request: InitFilesRequest): Promise<InitFilesResponse>;
  /** ListFiles returns the list of files in the project, bar ignored files. */
  IsPathEmpty(request: IsPathEmptyRequest): Promise<IsPathEmptyResponse>;
  /** StringifyProjectFile returns the stringified version of the given project file. */
  StringifyProjectFile(request: StringifyProjectFileRequest): Promise<StringifyProjectFileResponse>;
  /**
   * GenerateProjectFiles generates the project files after onboarding. This includes the project file, and some other
   * ancillary files for set up like .gitignore, github actions, and some folders.
   */
  GenerateProjectFiles(request: GenerateProjectFilesRequest): Promise<GenerateProjectFilesResponse>;
}

export const RustWithoutDatabaseServiceServiceName = "quary.service.v1.RustWithoutDatabaseService";
export class RustWithoutDatabaseServiceClientImpl implements RustWithoutDatabaseService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || RustWithoutDatabaseServiceServiceName;
    this.rpc = rpc;
    this.GetProjectConfig = this.GetProjectConfig.bind(this);
    this.InitFiles = this.InitFiles.bind(this);
    this.IsPathEmpty = this.IsPathEmpty.bind(this);
    this.StringifyProjectFile = this.StringifyProjectFile.bind(this);
    this.GenerateProjectFiles = this.GenerateProjectFiles.bind(this);
  }
  GetProjectConfig(request: GetProjectConfigRequest): Promise<GetProjectConfigResponse> {
    const data = GetProjectConfigRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetProjectConfig", data);
    return promise.then((data) => GetProjectConfigResponse.decode(_m0.Reader.create(data)));
  }

  InitFiles(request: InitFilesRequest): Promise<InitFilesResponse> {
    const data = InitFilesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "InitFiles", data);
    return promise.then((data) => InitFilesResponse.decode(_m0.Reader.create(data)));
  }

  IsPathEmpty(request: IsPathEmptyRequest): Promise<IsPathEmptyResponse> {
    const data = IsPathEmptyRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "IsPathEmpty", data);
    return promise.then((data) => IsPathEmptyResponse.decode(_m0.Reader.create(data)));
  }

  StringifyProjectFile(request: StringifyProjectFileRequest): Promise<StringifyProjectFileResponse> {
    const data = StringifyProjectFileRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "StringifyProjectFile", data);
    return promise.then((data) => StringifyProjectFileResponse.decode(_m0.Reader.create(data)));
  }

  GenerateProjectFiles(request: GenerateProjectFilesRequest): Promise<GenerateProjectFilesResponse> {
    const data = GenerateProjectFilesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GenerateProjectFiles", data);
    return promise.then((data) => GenerateProjectFilesResponse.decode(_m0.Reader.create(data)));
  }
}

/**
 * RustServiceWithDatabase is the service that is used and where the database is used and so passed in as a parameter in
 * the rpc calls
 */
export interface RustWithDatabaseService {
  /** ListAssets returns a list of model, seeds, sources & snapshots */
  ListAssets(request: ListAssetsRequest): Promise<ListAssetsResponse>;
  /** ParseProject returns the project for the given project file. */
  ParseProject(request: ParseProjectRequest): Promise<ParseProjectResponse>;
  /** RenderSchema renderSchema returns the sql to create the views for the seeds and the models but without any data */
  RenderSchema(request: RenderSchemaRequest): Promise<RenderSchemaResponse>;
  /**
   * ReturnFullSqlForAsset returns the sql to create the view for the given asset. It also returns the dag and the
   * columns as well as the description for the asset.
   */
  ReturnFullSqlForAsset(request: ReturnFullSqlForAssetRequest): Promise<ReturnFullSqlForAssetResponse>;
  /** ReturnFullProjectDag returns the dag for the full project. Manually Excludes tests from the dag response. */
  ReturnFullProjectDag(request: ReturnFullProjectDagRequest): Promise<ReturnFullProjectDagResponse>;
  /** ReturnSQLForSeedsAndModels returns sql to create tables for the seeds and views for the models. */
  ReturnSQLForSeedsAndModels(request: ReturnSQLForSeedsAndModelsRequest): Promise<ReturnSQLForSeedsAndModelsResponse>;
  /**
   * ReturnSQLForInjectedModel returns the sql select statement that isn't part of the project yet but you want to
   * inject into the project to get the sql out for it.
   * TODO Implement caching
   */
  ReturnSQLForInjectedModel(request: ReturnSQLForInjectedModelRequest): Promise<ReturnSQLForInjectedModelResponse>;
  /**
   * GetModelTableDetails returns the details of the model table. It can also return details for a source.
   *
   * If there is no schema entry this returns an error.
   */
  GetModelTable(request: GetModelTableRequest): Promise<GetModelTableResponse>;
  /**
   * CreateModelSchemaEntry creates a schema entry for the given model. If the model already has a schema entry this returns nothing.
   * By default the schema entry is created with the name of the model and no description.
   * The schema is put inside the file schema.yaml in the same folder as the model's sql definition.
   */
  CreateModelSchemaEntry(request: CreateModelSchemaEntryRequest): Promise<CreateModelSchemaEntryResponse>;
  /**
   * UpdateAssetDescription updates the description for the given model, source or snapshot.
   * If the model or source cannot be found, UpdateAssetDescription essentially calls CreateModelSchemaEntry and
   * adds the description to the schema entry.
   */
  UpdateAssetDescription(request: UpdateAssetDescriptionRequest): Promise<UpdateAssetDescriptionResponse>;
  /**
   * AddColumnToModelOrSource adds a column to the given model schema definition. If the column already exists, this
   * returns nothing.
   */
  AddColumnToModelOrSource(request: AddColumnToModelOrSourceRequest): Promise<AddColumnToModelOrSourceResponse>;
  /**
   * UpdateModelOrSourceColumnDescription sets the description for the given column. If the column, model, source definition doesn't
   * exist, this calls AddColumnToModelOrSource and then adds the description.
   */
  UpdateModelOrSourceColumnDescription(
    request: UpdateModelOrSourceColumnDescriptionRequest,
  ): Promise<UpdateModelOrSourceColumnDescriptionResponse>;
  /**
   * AddColumnTestToModelOrSourceColumn adds a column test to the given column. If the column test already exists, this
   * returns nothing. If no entry exists for the column, this creates it.
   */
  AddColumnTestToModelOrSourceColumn(
    request: AddColumnTestToModelOrSourceColumnRequest,
  ): Promise<AddColumnTestToModelOrSourceColumnResponse>;
  /**
   * RemoveColumnTestFromModelOrSourceColumn removes a column test for a given column by finding a matching the full column test.
   * If the column test does not exist, this returns nothing. If an entry exists for the column, this removes it.
   */
  RemoveColumnTestFromModelOrSourceColumn(
    request: RemoveColumnTestFromModelOrSourceColumnRequest,
  ): Promise<RemoveColumnTestFromModelOrSourceColumnResponse>;
  /** GenerateSourceFiles generates the source files for the given project that have been selected in an import flow. */
  GenerateSourceFiles(request: GenerateSourceFilesRequest): Promise<GenerateSourceFilesResponse>;
  /**
   * ReturnDefinitionLocationsForSQL takes in a SQL statement, looks for the models it references and returns location of those
   * definitions in the file as well as the file path for the definition.
   */
  ReturnDefinitionLocationsForSQL(
    request: ReturnDefinitionLocationsForSQLRequest,
  ): Promise<ReturnDefinitionLocationsForSQLResponse>;
}

export const RustWithDatabaseServiceServiceName = "quary.service.v1.RustWithDatabaseService";
export class RustWithDatabaseServiceClientImpl implements RustWithDatabaseService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || RustWithDatabaseServiceServiceName;
    this.rpc = rpc;
    this.ListAssets = this.ListAssets.bind(this);
    this.ParseProject = this.ParseProject.bind(this);
    this.RenderSchema = this.RenderSchema.bind(this);
    this.ReturnFullSqlForAsset = this.ReturnFullSqlForAsset.bind(this);
    this.ReturnFullProjectDag = this.ReturnFullProjectDag.bind(this);
    this.ReturnSQLForSeedsAndModels = this.ReturnSQLForSeedsAndModels.bind(this);
    this.ReturnSQLForInjectedModel = this.ReturnSQLForInjectedModel.bind(this);
    this.GetModelTable = this.GetModelTable.bind(this);
    this.CreateModelSchemaEntry = this.CreateModelSchemaEntry.bind(this);
    this.UpdateAssetDescription = this.UpdateAssetDescription.bind(this);
    this.AddColumnToModelOrSource = this.AddColumnToModelOrSource.bind(this);
    this.UpdateModelOrSourceColumnDescription = this.UpdateModelOrSourceColumnDescription.bind(this);
    this.AddColumnTestToModelOrSourceColumn = this.AddColumnTestToModelOrSourceColumn.bind(this);
    this.RemoveColumnTestFromModelOrSourceColumn = this.RemoveColumnTestFromModelOrSourceColumn.bind(this);
    this.GenerateSourceFiles = this.GenerateSourceFiles.bind(this);
    this.ReturnDefinitionLocationsForSQL = this.ReturnDefinitionLocationsForSQL.bind(this);
  }
  ListAssets(request: ListAssetsRequest): Promise<ListAssetsResponse> {
    const data = ListAssetsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ListAssets", data);
    return promise.then((data) => ListAssetsResponse.decode(_m0.Reader.create(data)));
  }

  ParseProject(request: ParseProjectRequest): Promise<ParseProjectResponse> {
    const data = ParseProjectRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ParseProject", data);
    return promise.then((data) => ParseProjectResponse.decode(_m0.Reader.create(data)));
  }

  RenderSchema(request: RenderSchemaRequest): Promise<RenderSchemaResponse> {
    const data = RenderSchemaRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "RenderSchema", data);
    return promise.then((data) => RenderSchemaResponse.decode(_m0.Reader.create(data)));
  }

  ReturnFullSqlForAsset(request: ReturnFullSqlForAssetRequest): Promise<ReturnFullSqlForAssetResponse> {
    const data = ReturnFullSqlForAssetRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ReturnFullSqlForAsset", data);
    return promise.then((data) => ReturnFullSqlForAssetResponse.decode(_m0.Reader.create(data)));
  }

  ReturnFullProjectDag(request: ReturnFullProjectDagRequest): Promise<ReturnFullProjectDagResponse> {
    const data = ReturnFullProjectDagRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ReturnFullProjectDag", data);
    return promise.then((data) => ReturnFullProjectDagResponse.decode(_m0.Reader.create(data)));
  }

  ReturnSQLForSeedsAndModels(request: ReturnSQLForSeedsAndModelsRequest): Promise<ReturnSQLForSeedsAndModelsResponse> {
    const data = ReturnSQLForSeedsAndModelsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ReturnSQLForSeedsAndModels", data);
    return promise.then((data) => ReturnSQLForSeedsAndModelsResponse.decode(_m0.Reader.create(data)));
  }

  ReturnSQLForInjectedModel(request: ReturnSQLForInjectedModelRequest): Promise<ReturnSQLForInjectedModelResponse> {
    const data = ReturnSQLForInjectedModelRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ReturnSQLForInjectedModel", data);
    return promise.then((data) => ReturnSQLForInjectedModelResponse.decode(_m0.Reader.create(data)));
  }

  GetModelTable(request: GetModelTableRequest): Promise<GetModelTableResponse> {
    const data = GetModelTableRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetModelTable", data);
    return promise.then((data) => GetModelTableResponse.decode(_m0.Reader.create(data)));
  }

  CreateModelSchemaEntry(request: CreateModelSchemaEntryRequest): Promise<CreateModelSchemaEntryResponse> {
    const data = CreateModelSchemaEntryRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateModelSchemaEntry", data);
    return promise.then((data) => CreateModelSchemaEntryResponse.decode(_m0.Reader.create(data)));
  }

  UpdateAssetDescription(request: UpdateAssetDescriptionRequest): Promise<UpdateAssetDescriptionResponse> {
    const data = UpdateAssetDescriptionRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateAssetDescription", data);
    return promise.then((data) => UpdateAssetDescriptionResponse.decode(_m0.Reader.create(data)));
  }

  AddColumnToModelOrSource(request: AddColumnToModelOrSourceRequest): Promise<AddColumnToModelOrSourceResponse> {
    const data = AddColumnToModelOrSourceRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AddColumnToModelOrSource", data);
    return promise.then((data) => AddColumnToModelOrSourceResponse.decode(_m0.Reader.create(data)));
  }

  UpdateModelOrSourceColumnDescription(
    request: UpdateModelOrSourceColumnDescriptionRequest,
  ): Promise<UpdateModelOrSourceColumnDescriptionResponse> {
    const data = UpdateModelOrSourceColumnDescriptionRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateModelOrSourceColumnDescription", data);
    return promise.then((data) => UpdateModelOrSourceColumnDescriptionResponse.decode(_m0.Reader.create(data)));
  }

  AddColumnTestToModelOrSourceColumn(
    request: AddColumnTestToModelOrSourceColumnRequest,
  ): Promise<AddColumnTestToModelOrSourceColumnResponse> {
    const data = AddColumnTestToModelOrSourceColumnRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AddColumnTestToModelOrSourceColumn", data);
    return promise.then((data) => AddColumnTestToModelOrSourceColumnResponse.decode(_m0.Reader.create(data)));
  }

  RemoveColumnTestFromModelOrSourceColumn(
    request: RemoveColumnTestFromModelOrSourceColumnRequest,
  ): Promise<RemoveColumnTestFromModelOrSourceColumnResponse> {
    const data = RemoveColumnTestFromModelOrSourceColumnRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "RemoveColumnTestFromModelOrSourceColumn", data);
    return promise.then((data) => RemoveColumnTestFromModelOrSourceColumnResponse.decode(_m0.Reader.create(data)));
  }

  GenerateSourceFiles(request: GenerateSourceFilesRequest): Promise<GenerateSourceFilesResponse> {
    const data = GenerateSourceFilesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GenerateSourceFiles", data);
    return promise.then((data) => GenerateSourceFilesResponse.decode(_m0.Reader.create(data)));
  }

  ReturnDefinitionLocationsForSQL(
    request: ReturnDefinitionLocationsForSQLRequest,
  ): Promise<ReturnDefinitionLocationsForSQLResponse> {
    const data = ReturnDefinitionLocationsForSQLRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ReturnDefinitionLocationsForSQL", data);
    return promise.then((data) => ReturnDefinitionLocationsForSQLResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

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
