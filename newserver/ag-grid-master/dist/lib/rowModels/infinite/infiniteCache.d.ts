// Type definitions for ag-grid v10.0.1
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ceolter/>
import { RowNode } from "../../entities/rowNode";
import { IDatasource } from "../iDatasource";
import { InfiniteBlock } from "./infiniteBlock";
import { RowNodeCache, RowNodeCacheParams } from "../cache/rowNodeCache";
export interface InfiniteCacheParams extends RowNodeCacheParams {
    datasource: IDatasource;
}
export declare class InfiniteCache extends RowNodeCache<InfiniteBlock, InfiniteCacheParams> {
    private eventService;
    private context;
    constructor(params: InfiniteCacheParams);
    private setBeans(loggerFactory);
    protected init(): void;
    private moveItemsDown(page, moveFromIndex, moveCount);
    private insertItems(block, indexToInsert, items);
    insertItemsAtIndex(indexToInsert: number, items: any[]): void;
    getRow(rowIndex: number, dontCreatePage?: boolean): RowNode;
    private createBlock(blockNumber);
    refreshCache(): void;
}
