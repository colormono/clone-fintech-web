const myTheme = {
  // Alert
  alert: {
    base: "space-x-2 rounded-md leading-0",
    type: {
      primary:
        "bg-primary-100 text-primary-900 border border-primary-300 dark:bg-primary-600 dark:text-white",
      secondary:
        "bg-secondary-100 text-secondary-900 border border-secondary-300 dark:bg-secondary-600 dark:text-white",
      success:
        "bg-success-100 text-neutral-800 border border-success-300 dark:bg-success-700 dark:text-white",
      error:
        "bg-error-100 text-neutral-800 border border-error-300 dark:bg-error-700 dark:text-white",
      warning:
        "bg-warning-100 text-neutral-800 border border-warning-300 dark:bg-warning-700 dark:text-white",
      neutral:
        "bg-neutral-100 text-neutral-800 border border-neutral-300 dark:bg-neutral-700 dark:text-neutral-300",
      info: "bg-info-100 text-neutral-800 border border-info-300 dark:bg-info-700 dark:text-white",
    },
    size: {
      sm: "p-2 leading-5 text-sm",
      md: "p-4 leading-5 text-base",
      lg: "p-6 leading-5 text-lg",
    },
    icon: {
      base: "h-5 w-5",
      primary: "text-primary-400 dark:text-primary-300",
      seconday: "text-secondary-400 dark:text-secondary-300",
      success: "text-success-500 dark:text-success-300",
      error: "text-error-500 dark:text-error-300",
      warning: "text-warning-500 dark:text-warning-300",
      neutral: "text-neutral-500 dark:text-neutral-300",
      info: "text-info-500 dark:text-info-300",
    },
    title: {
      base: "font-medium",
    },
    message: {
      base: "text-sm opacity-60",
    },
    inlineAction: {
      base: "hover:underline px-1",
    },
    close: {
      base: "h-5 w-5",
      primary:
        "text-primary-400 hover:text-primary-700 dark:text-primary-300 dark:hover:text-primary-100",
      seconday:
        "text-secondary-400 hover:text-secondary-700 dark:text-secondary-300 dark:hover:text-secondary-100",
      success:
        "text-success-500 hover:text-success-700 dark:text-success-300 dark:hover:text-success-100",
      error:
        "text-error-500 hover:text-error-700 dark:text-error-300 dark:hover:text-error-100",
      warning:
        "text-warning-500 hover:text-warning-700 dark:text-warning-300 dark:hover:text-warning-100",
      neutral:
        "text-neutral-500 hover:text-neutral-700 dark:text-neutral-300 dark:hover:text-neutral-100",
      info: "text-info-500 hover:text-info-700 dark:text-info-300 dark:hover:text-info-100",
    },
  },

  // Pagination
  pagination: {
    base: "flex flex-col justify-between text-xs sm:flex-row text-neutral-600 dark:text-neutral-400",
  },

  // TableFooter
  tableFooter: {
    base: "px-4 py-3 border-t dark:border-neutral-700 bg-neutral-50 text-neutral-500 dark:text-neutral-400 dark:bg-neutral-800",
  },

  // TableRow
  tableRow: {
    base: "",
  },

  // TableHeader
  tableHeader: {
    base: "text-xs font-semibold tracking-wide text-left text-neutral-500 uppercase border-b dark:border-neutral-700 bg-neutral-50 dark:text-neutral-400 dark:bg-neutral-800",
  },

  // TableContainer
  tableContainer: {
    base: "w-full overflow-hidden rounded-lg ring-1 ring-black ring-opacity-5",
  },

  // TableCell
  tableCell: {
    base: "px-4 py-3",
  },

  // TableBody
  tableBody: {
    base: "bg-white divide-y dark:divide-neutral-700 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-400",
  },

  // DropdownItem

  // this is the <li> that lives inside the Dropdown <ul>

  // you're probably looking for the dropdownItem style inside button
  dropdownItem: {
    base: "mb-2 last:mb-0",
  },

  // Dropdown
  dropdown: {
    base: "absolute w-56 p-2 mt-2 text-neutral-600 bg-white border border-neutral-100 rounded-lg shadow-md min-w-max-content dark:text-neutral-300 dark:border-neutral-700 dark:bg-neutral-700",
    align: {
      left: "left-0",
      right: "right-0",
    },
  },

  // Avatar
  avatar: {
    base: "relative rounded-full inline-block",
    size: {
      large: "w-10 h-10",
      regular: "w-8 h-8",
      small: "w-6 h-6",
    },
  },

  // Modal
  modal: {
    base: "w-full px-6 py-4 overflow-hidden bg-white rounded-t-lg dark:bg-neutral-800 sm:rounded-lg sm:m-4 sm:max-w-xl",
  },

  // ModalBody
  modalBody: {
    base: "mb-6 text-sm text-neutral-700 dark:text-neutral-400",
  },

  // ModalFooter
  modalFooter: {
    base: "flex flex-col items-center justify-end px-6 py-3 -mx-6 -mb-4 space-y-4 sm:space-y-0 sm:space-x-6 sm:flex-row bg-neutral-50 dark:bg-neutral-800",
  },

  // ModalHeader
  modalHeader: {
    base: "mt-4 mb-2 text-lg font-semibold text-neutral-700 dark:text-neutral-300",
  },

  // Badge
  badge: {
    base: "inline-flex px-2 text-xs font-medium leading-5 rounded-full",
    success:
      "text-success-700 bg-success-100 dark:bg-success-700 dark:text-success-100",
    danger: "text-error-700 bg-error-100 dark:text-error-100 dark:bg-error-700",
    warning: "text-orange-700 bg-orange-100 dark:text-white dark:bg-orange-600",
    neutral:
      "text-neutral-700 bg-neutral-100 dark:text-neutral-100 dark:bg-neutral-700",
    primary: "text-purple-700 bg-purple-100 dark:text-white dark:bg-purple-600",
  },

  // Backdrop
  backdrop: {
    base: "fixed inset-0 z-40 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center",
  },

  // Textarea
  textarea: {
    base: "block w-full text-sm dark:text-neutral-300 rounded-md focus:outline-none",
    active:
      "focus:border-purple-400 border-neutral-300 dark:border-neutral-600 dark:focus:border-neutral-600 dark:bg-neutral-700 dark:focus:ring-neutral-300 focus:ring focus:ring-purple-300",
    disabled:
      "cursor-not-allowed opacity-50 bg-neutral-300 dark:bg-neutral-800",
    valid:
      "border-success-600 dark:bg-neutral-700 focus:border-success-400 dark:focus:border-success-400 focus:ring focus:ring-success-200 dark:focus:ring-success-200",
    invalid:
      "border-error-600 dark:bg-neutral-700 focus:border-error-400 dark:focus:border-error-400 focus:ring focus:ring-error-200 dark:focus:ring-error-200",
  },

  // Select
  select: {
    base: "block w-full text-sm dark:text-neutral-300 focus:outline-none rounded-md",
    active:
      "focus:border-purple-400 border-neutral-300 dark:border-neutral-600 dark:bg-neutral-700 focus:ring focus:ring-purple-300 dark:focus:ring-neutral-300 dark:focus:border-neutral-600",
    select: "leading-5",
    disabled:
      "cursor-not-allowed opacity-50 bg-neutral-300 dark:bg-neutral-800",
    valid:
      "border-success-600 dark:bg-neutral-700 focus:border-success-400 dark:focus:border-success-400 focus:ring focus:ring-success-200 dark:focus:ring-success-200",
    invalid:
      "border-error-600 dark:bg-neutral-700 focus:border-error-400 dark:focus:border-error-400 focus:ring focus:ring-error-200 dark:focus:ring-error-200",
  },

  // Label
  label: {
    base: "block text-sm text-neutral-700 dark:text-neutral-400",

    // check and radio get this same style
    check: "inline-flex items-center",
    disabled: "opacity-50 cursor-not-allowed",
  },

  // Input
  input: {
    base: "block w-full text-sm focus:outline-none dark:text-neutral-300 leading-5 rounded-md",
    active:
      "focus:border-purple-400 border-neutral-300 dark:border-neutral-600 focus:ring focus:ring-purple-300 dark:focus:border-neutral-600 dark:focus:ring-neutral-300 dark:bg-neutral-700",
    disabled:
      "cursor-not-allowed opacity-50 bg-neutral-300 dark:bg-neutral-800",
    valid:
      "border-success-600 dark:bg-neutral-700 focus:border-success-400 dark:focus:border-success-400 focus:ring focus:ring-success-200 dark:focus:ring-success-200",
    invalid:
      "border-error-600 dark:bg-neutral-700 focus:border-error-400 dark:focus:border-error-400 focus:ring focus:ring-error-200 dark:focus:ring-error-200",
    radio:
      "text-purple-600 form-radio focus:border-purple-400 focus:outline-none focus:ring focus:ring-purple-300 focus:ring-offset-0 dark:focus:ring-neutral-300",
    checkbox:
      "text-purple-600 form-checkbox focus:border-purple-400 focus:outline-none focus:ring focus:ring-purple-300 focus:ring-offset-0 rounded dark:focus:ring-neutral-300",
  },

  // HelperText
  helperText: {
    base: "text-xs",
    valid: "text-success-600 dark:text-success-400",
    invalid: "text-error-600 dark:text-error-400",
  },

  // Card
  card: {
    base: "min-w-0 rounded-lg ring-1 ring-black ring-opacity-5 overflow-hidden",
    default: "bg-white dark:bg-neutral-800",
  },
  cardBody: {
    base: "p-4",
  },

  // Button
  button: {
    base: "align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none",
    block: "w-full",
    size: {
      larger: "px-10 py-4 rounded-lg",
      large: "px-5 py-3 rounded-lg",
      regular: "px-4 py-2 rounded-lg text-sm",
      small: "px-3 py-1 rounded-md text-sm",
      icon: {
        larger: "p-4 rounded-lg",
        large: "p-3 rounded-lg",
        regular: "p-2 rounded-lg",
        small: "p-2 rounded-md",
      },
      pagination: "px-3 py-1 rounded-md text-xs",
    },

    // styles applied to the SVG icon
    icon: {
      larger: "h-5 w-5",
      large: "h-5 w-5",
      regular: "h-5 w-5",
      small: "h-3 w-3",
      left: "mr-2 -ml-1",
      right: "ml-2 -mr-1",
    },
    primary: {
      base: "text-white bg-purple-600 border border-transparent",
      active:
        "active:bg-purple-600 hover:bg-purple-700 focus:ring focus:ring-purple-300",
      disabled: "opacity-50 cursor-not-allowed",
    },
    outline: {
      base: "text-neutral-600 border-neutral-300 border dark:text-neutral-400 focus:outline-none",
      active:
        "active:bg-transparent hover:border-neutral-500 focus:border-neutral-500 active:text-neutral-500 focus:ring focus:ring-neutral-300",
      disabled: "opacity-50 cursor-not-allowed bg-neutral-300",
    },
    link: {
      base: "text-neutral-600 dark:text-neutral-400 focus:outline-none border border-transparent",
      active:
        "active:bg-transparent hover:bg-neutral-100 focus:ring focus:ring-neutral-300 dark:hover:bg-neutral-500 dark:hover:text-neutral-300 dark:hover:bg-opacity-10",
      disabled: "opacity-50 cursor-not-allowed",
    },

    // this is the button that lives inside the DropdownItem
    dropdownItem: {
      base: "inline-flex items-center cursor-pointer w-full px-2 py-1 text-sm font-medium transition-colors duration-150 rounded-md hover:bg-neutral-100 hover:text-neutral-800 dark:hover:bg-neutral-800 dark:hover:text-neutral-200",
    },
  },
};

export default myTheme;
