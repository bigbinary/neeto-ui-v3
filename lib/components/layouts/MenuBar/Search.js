import React from "react";
import { Search as SearchIcon, Close } from "@bigbinary/neeto-icons";
import PropTypes from "prop-types";

import Input from "../../Input";
import Button from "../../Button";

const Search = ({ collapse = true, onCollapse, ...props }) =>
  !collapse && (
    <div className="neeto-ui-menubar__search">
      <Input
        type="search"
        placeholder="Search"
        prefix={<SearchIcon />}
        {...props}
      />
      <Button size="large" style="text" icon={Close} onClick={onCollapse} />
    </div>
  );

Search.propTypes = {
  ...Input.propTypes,
  /**
   * To specify whether the search field is collapsed
   */
  collapse: PropTypes.bool,
  /**
   * To provide a callback function on collapse of the search field
   */
  onCollapse: PropTypes.func,
};

export default Search;
