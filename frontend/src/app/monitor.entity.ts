
export class Monitor {
  constructor(
    private _endpoint: string,
    private _schedule: string
  ) {}

  get endpoint(): string { return this._endpoint; }
  get schedule(): string { return this._schedule; }
}
