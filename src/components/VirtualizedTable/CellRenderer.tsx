import React from "react";
import clsx from "clsx";
import { TableCellProps } from "react-virtualized";
import { TableCell } from "@material-ui/core";
import { IColumn } from "./index";

interface IProps {
  classes: any;
  onRowClick: (row: any) => void;
  columns: IColumn[];
  cellData?: any;
  rowHeight: number;
}

type TProps = TableCellProps & IProps;

const CellRenderer: React.FC<TProps> = ({
  classes,
  onRowClick,
  columns,
  columnIndex,
  cellData,
  rowHeight,
}) => {
  return (
    <TableCell
      component="div"
      className={clsx(classes.tableCell, classes.flexContainer, {
        [classes.noClick]: onRowClick == null,
      })}
      variant="body"
      style={{ height: rowHeight }}
      align={
        (columnIndex != null && columns[columnIndex].numeric) || false
          ? "right"
          : "left"
      }
    >
      {cellData}
    </TableCell>
  );
};

export default CellRenderer;
