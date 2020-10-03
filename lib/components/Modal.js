import React, { Component } from "react";
import { Dialog } from "@blueprintjs/core";
import classnames from "classnames";
import Button from "./Button";

class Modal extends Component {
  render() {
    const {
      isOpen,
      onClose,
      size,
      className,
      autoHeight,
      autoWidth,
      showFooter,
      submitButtonProps,
      cancelButtonProps,
      ...otherProps
    } = this.props;
    return (
      <Dialog
        isOpen={isOpen}
        onClose={onClose}
        className={classnames(
          [
            "relative bg-white rounded-lg overflow-hidden shadow-xl nui-modal--wrapper",
            className
          ],
          {
            "nui-modal--wrapper__sm": size === "small",
            "nui-modal--wrapper__md": size === "medium",
            "nui-modal--wrapper__lg": size === "large",
            "nui-modal--wrapper__footer": showFooter,
            "nui-modal--auto-height": autoHeight,
            "nui-modal--auto-width": autoWidth
          }
        )}
        {...otherProps}
      >
        {this.props.children}
        {showFooter && (
          <div className="absolute bottom-0 left-0 flex flex-row items-center justify-end w-full px-6 py-3.5 bg-gray-50">
            <Button
              label="Cancel"
              style="secondary"
              size="large"
              onClick={onClose}
              {...cancelButtonProps}
            />
            <Button
              label="Update"
              className="ml-3"
              size="large"
              {...submitButtonProps}
            />
          </div>
        )}
      </Dialog>
    );
  }
}

const Title = ({ children }) => {
  return (
    <h1 className="mb-4 text-2xl font-semibold text-gray-800">{children}</h1>
  );
};

Modal.Title = Title;

export default Modal;