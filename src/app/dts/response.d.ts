interface Response<T = unknown> extends Response {
  json(): Promise<T>;
}
