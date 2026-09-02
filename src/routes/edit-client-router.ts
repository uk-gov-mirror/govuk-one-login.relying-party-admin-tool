import express from "express";
import { PATH_NAMES } from "../app.constants.js";
import {
  editIdTokenSigningAlgorithmGet,
  editIdTokenSigningAlgorithmPost,
} from "../components/clients/edit-id-token-signing-algorithm/edit-id-token-signing-algorithm-controller.js";
import { validateEditIdTokenSigningAlgorithmRequest } from "../components/clients/edit-id-token-signing-algorithm/edit-id-token-signing-algorithm-validation.js";
import {
  editPostLogoutRedirectUrlsGet,
  editPostLogoutRedirectUrlsPost,
} from "../components/clients/edit-post-logout-redirect-urls/edit-post-logout-redirect-urls-controller.js";
import { validateEditPostLogoutRedirectUrlsRequest } from "../components/clients/edit-post-logout-redirect-urls/edit-post-logout-redirect-urls-validation.js";

const router = express.Router();

router.get(
  PATH_NAMES.CLIENT_EDIT_ID_TOKEN_SIGNING_ALGORITHM,
  editIdTokenSigningAlgorithmGet()
);

router.post(
  PATH_NAMES.CLIENT_EDIT_ID_TOKEN_SIGNING_ALGORITHM,
  validateEditIdTokenSigningAlgorithmRequest(),
  editIdTokenSigningAlgorithmPost()
);

router.get(
  PATH_NAMES.CLIENT_EDIT_POST_LOGOUT_REDIRECT_URLS,
  editPostLogoutRedirectUrlsGet()
);

router.post(
  PATH_NAMES.CLIENT_EDIT_POST_LOGOUT_REDIRECT_URLS,
  validateEditPostLogoutRedirectUrlsRequest(),
  editPostLogoutRedirectUrlsPost()
);

export { router as editClientRouter };
