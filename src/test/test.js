import {
  expect,
} from "chai";
import config from "config";
import moment from "moment";
import {
  sendRequest,
} from "../support/utils";

describe("Get characters", function () {
  const url = `${config.get("url")}characters`;
  const headers = {
    "Content-Type": "application/json",
    Date: moment().format("YYYY-MM-DD HH:mm:ss"),
  };
  const myparams = {
    apikey: config.get("apikey"),
    ts: config.get("ts"),
    hash: config.get("hash"),
  };

  it("Get Spider-Man", async function () {
    myparams.name = "Spider-Man";

    const response = await sendRequest({
      method: "get",
      url,
      params: myparams,
      headers,
    });
    expect(response.data.data.results[0].name).to.equal("Spider-Man");
    expect(response.status).to.equal(200);
  });
});
