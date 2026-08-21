import type { Request } from "express";
import {
  clientNameValidator,
  validClaimsValidator,
} from "./shared-client-validators.js";
import { FieldValidator, when } from "./validator.js";
import { notEmptyListValidator } from "./shared-validators.js";

export const clientNameSummaryFieldValidator = new FieldValidator(
  clientNameValidator.adaptedFrom(
    (req: Request) => req.session.newClientData?.name ?? ""
  ),
  "name"
);

export const claimsSummaryFieldValidator = new FieldValidator(
  validClaimsValidator
    .adaptedFrom((req: Request) => req.session.newClientData?.claims ?? [])
    .and(
      when(
        (req: Request) =>
          req.session.newClientData?.isIdentityVerificationSupported ?? false,
        notEmptyListValidator(
          "Claims cannot be empty when identity verification is supported"
        ).adaptedFrom((req: Request) => req.session.newClientData?.claims ?? [])
      )
    ),
  "claims"
);
