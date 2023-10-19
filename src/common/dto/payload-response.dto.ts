export class IMetadata {
  public readonly page: number;
  public readonly totalCount: number;
  public readonly totalPage?: number;
  public readonly limit: number;
}

export class MetadataDTO extends IMetadata {
  constructor(
    public readonly page: number,
    public readonly totalCount: number,
    public readonly limit: number,
  ) {
    super();
  }
}

export class PayloadDTO {
  constructor(
    public readonly list: any[],
    public readonly details: any,
  ) {}
}

export class PayloadResponseDto {
  public statusCode: number;
  public message?: string;
  public metadata?: IMetadata;
  public payload?: Record<any, any> | Record<string, any>[];

  constructor(partial: Partial<PayloadResponseDto>) {
    if (partial.metadata) {
      const totalPage = Math.ceil(
        partial.metadata.totalCount / partial.metadata.limit,
      );
      partial.metadata = {
        ...partial.metadata,
        totalPage: totalPage,
      };
    }
    /*if (partial.payload) {
				partial.payload = instanceToPlain(partial.payload);
		}*/

    Object.assign(this, partial);
  }
}
