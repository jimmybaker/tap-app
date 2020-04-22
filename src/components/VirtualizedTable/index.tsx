import React from "react";
import clsx from "clsx";
import { TableCell, withStyles } from "@material-ui/core";
import { AutoSizer, Column, Table, TableProps } from "react-virtualized";
import HeaderRenderer from "./HeaderRenderer";
import CellRenderer from "./CellRenderer";

export interface IColumn {
  dataKey: string;
  label: string;
  numeric?: boolean;
  width: number;
}

interface IProps {
  classes: any;
  columns: IColumn[];
  headerHeight: number;
  onRowClick: (row: any) => void;
  rowHeight: number;
}

type TProps = TableProps & IProps;

const VirtualizedTable: React.FC<TProps> = ({
  classes,
  columns,
  headerHeight = 48,
  rowHeight = 48,
  onRowClick,
  ...tableProps
}) => {
  const getRowClassName = ({ index }: any) => {
    return clsx(classes.tableRow, classes.flexContainer, {
      [classes.tableRowHover]: index !== -1 && onRowClick != null,
    });
  };

  return (
    <AutoSizer>
      {({ height, width }) => (
        <Table
          height={height}
          width={width}
          rowHeight={rowHeight}
          gridStyle={{
            direction: "inherit",
          }}
          headerHeight={headerHeight}
          className={classes.table}
          rowClassName={getRowClassName}
          onRowClick={onRowClick}
          {...tableProps}
        >
          {columns.map(({ dataKey, ...other }, index) => {
            return (
              <Column
                key={dataKey}
                headerRenderer={(headerProps) => (
                  <HeaderRenderer
                    {...headerProps}
                    columnIndex={index}
                    columns={columns}
                    classes={classes}
                    headerHeight={headerHeight}
                  />
                )}
                className={classes.flexContainer}
                cellRenderer={(cellProps) => (
                  <CellRenderer
                    {...cellProps}
                    classes={classes}
                    onRowClick={onRowClick}
                    columns={columns}
                    rowHeight={rowHeight}
                  />
                )}
                dataKey={dataKey}
                {...other}
              />
            );
          })}
        </Table>
      )}
    </AutoSizer>
  );
};

const styles = (theme: any) => ({
  flexContainer: {
    display: "flex",
    alignItems: "center",
    boxSizing: "border-box",
  },
  table: {
    // temporary right-to-left patch, waiting for
    // https://github.com/bvaughn/react-virtualized/issues/454
    "& .ReactVirtualized__Table__headerRow": {
      flip: false,
      paddingRight: theme.direction === "rtl" ? "0px !important" : undefined,
    },
  },
  tableRow: {
    cursor: "pointer",
  },
  tableRowHover: {
    "&:hover": {
      backgroundColor: theme.palette.grey[200],
    },
  },
  tableCell: {
    flex: 1,
  },
  noClick: {
    cursor: "initial",
  },
});

export default withStyles(styles as any)(VirtualizedTable);
