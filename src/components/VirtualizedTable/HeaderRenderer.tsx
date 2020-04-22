import React from "react";
import clsx from "clsx";
import { TableCell } from "@material-ui/core";
import { IColumn } from "./index";
import { TableHeaderProps } from "react-virtualized";

interface IProps {
  classes: any;
  headerHeight: number;
  columns: IColumn[];
  columnIndex: number;
}

type TProps = TableHeaderProps & IProps;

const HeaderRenderer: React.FC<TProps> = ({
  classes,
  headerHeight,
  columns,
  columnIndex,
  label,
}) => {
  return (
    <TableCell
      component="div"
      className={clsx(
        classes.tableCell,
        classes.flexContainer,
        classes.noClick
      )}
      variant="head"
      style={{ height: headerHeight }}
      align={columns[columnIndex].numeric || false ? "right" : "left"}
    >
      <span>{label}</span>
    </TableCell>
  );
};

export default HeaderRenderer;
