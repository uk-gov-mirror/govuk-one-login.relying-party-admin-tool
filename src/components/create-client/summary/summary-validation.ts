import { ValidationChainFunc } from "../../../types.js";
import { validateFieldsMiddleware } from "../../../middleware/form-validation-middleware.js";
import { clientNameSummaryFieldValidator } from "../../../validation/create-client-summary-field-validators.js";

export function validateCreateClientRequest(): ValidationChainFunc {
  return [
    validateFieldsMiddleware(
      "create-client/summary/index.njk",
      summaryFieldValidators
    ),
  ];
}

const summaryFieldValidators = clientNameSummaryFieldValidator;
