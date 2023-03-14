import { toast } from "react-toastify";
import { MessageTypes } from "./constants";

export const generateNotification = (message: string, type: MessageTypes) => {
  toast(message, { type });
};
