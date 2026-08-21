import type { Request, Response } from "express";
import { PATH_NAMES } from "../../../app.constants.js";
import { ClientEnvironment, ExpressRouteFunc } from "../../../types.js";
import { permissionsService } from "../../../services/permissions-service.js";

export const createClientSummaryGet = (): ExpressRouteFunc => {
  return async (req: Request, res: Response) => {
    if (
      await permissionsService.checkUserHasWriterPermissions(
        "user",
        "service",
        ClientEnvironment.INTEGRATION
      )
    ) {
      res.render("create-client/summary/index.njk", {
        serviceName: "Service Name",
        serviceId: req.params.serviceId as string,
        client: req.session.newClientData,
      });
    } else {
      return res.redirect(PATH_NAMES.ROOT);
    }
  };
};

export const createClientSummaryPost = (): ExpressRouteFunc => {
  return async (req: Request, res: Response) => {
    if (
      await permissionsService.checkUserHasWriterPermissions(
        "user",
        "service",
        ClientEnvironment.INTEGRATION
      )
    ) {
      res.render("create-client/summary/index.njk", {
        serviceName: "Service Name",
        serviceId: req.params.serviceId as string,
        client: req.session.newClientData,
      });
    } else {
      return res.redirect(PATH_NAMES.ROOT);
    }
  };
};
