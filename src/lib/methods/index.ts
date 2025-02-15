import { notifications } from "@mantine/notifications";

export const validateEmail = (email: string) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
export const validatePassword = (password: string) => {
  return password.length >= 8;
};

export const getFinancialValueFromNumeric = (
  value: number | string | undefined
) => {
  if (value !== undefined) {
    return parseFloat(value.toString()).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }
  return "...";
};

export const generateRandomString = (length: number) => {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
};
export const DefaultErrorNotification = (message?: string, title?: string) => {
  notifications.show({
    color: "red",
    message: message ?? "An error occurred",
    title: title ?? "Error",
  });
};
export const DefaultWarningNotification = (
  message?: string,
  title?: string
) => {
  notifications.show({
    color: "orange",
    message: message ?? "An error occurred",
    title: title ?? "Warning",
  });
};
export const DefaultSuccessNotification = (
  message?: string,
  title?: string
) => {
  notifications.show({
    color: "green",
    message: message ?? "Completed!",
    title: title ?? "Success",
  });
};

export const getDifferencesInObjects = (obj1: any, obj2: any) => {
  const differences: any[] = [];
  for (const key in obj1) {
    if (!(key in obj2) || obj1[key] !== obj2[key]) {
      if (!differences.includes(key)) {
        differences.push(key);
      }
    }
  }
  for (const key in obj2) {
    if (!(key in obj1) || obj2[key] !== obj1[key]) {
      if (!differences.includes(key)) {
        differences.push(key);
      }
    }
  }
  return differences;
};

export const showValidationErrors = (r: any) => {
  if (r && r.data && r.data[0]) {
    DefaultErrorNotification(r.data[0]);
  }
};

export const trimString = (str: string) => {
  return str ? str.toString().trim() : "";
};

export const isStringEmpty = (str: string) => {
  if (str) {
    return str.length === 0;
  } else {
    return true;
  }
};

export const removeNullUndefinedFields = (obj: any) => {
  Object.keys(obj).forEach((key) => {
    if (obj[key] === null || obj[key] === undefined) {
      delete obj[key];
    }
  });
  return obj;
};
