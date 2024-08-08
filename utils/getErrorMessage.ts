// Try Catch Error Handling With TypeScript

export function getErrorMessage(error: unknown): string {
  let errorMsg: string;

  if (error instanceof Error) {
    errorMsg = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    errorMsg = String(error.message);
  } else if (typeof error === "string") {
    errorMsg = error;
  } else {
    errorMsg = "Unknown error";
  }

  return errorMsg;
}
