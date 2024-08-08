import React from 'react';

interface TileChartProps {
    data: {
        date: string;
        status?: "success" | "warning" | "alert" | "holiday" | "weekend";
    }[];
    range?: 3 | 5 | 6 | 12;
    onTileHover?: (date: string, status?: "success" | "warning" | "alert" | "holiday" | "weekend") => void;
    tileText?: string;
}
declare const TileChart: React.FC<TileChartProps>;

export { TileChart };
