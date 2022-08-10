import React from "react";
import HeaderLeftAlignedNoSubheadRegular2 from "../HeaderLeftAlignedNoSubheadRegular2";
import HeaderLeftAlignedNoSubheadRegular from "../HeaderLeftAlignedNoSubheadRegular";
import RowMain from "../RowMain";
import "./Table2.css";

function Table2(props) {
  const { headerLeftAlignedNoSubheadRegularProps, rowMainProps } = props;

  return (
    <div className="table-3">
      <div className="header-row-3">
        <HeaderLeftAlignedNoSubheadRegular2 />
        <HeaderLeftAlignedNoSubheadRegular className={headerLeftAlignedNoSubheadRegularProps.className}>
          {headerLeftAlignedNoSubheadRegularProps.children}
        </HeaderLeftAlignedNoSubheadRegular>
      </div>
      <RowMain
        className={rowMainProps.className}
        itemText1Row1Props={rowMainProps.itemText1Row1Props}
        itemText1Row2Props={rowMainProps.itemText1Row2Props}
      />
    </div>
  );
}

export default Table2;
