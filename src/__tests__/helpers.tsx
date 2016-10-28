import * as React from "react";
import { Everything } from "../interfaces";
import { ConfigState } from "../config/interfaces";
import { BotState } from "../devices/interfaces";

export class Wrapper extends React.Component<any, any> {
  render() {
    return <div> {this.props.children} </div>;
  }
}

/** Factory function for empty state object. */
export function fakeState(dispatcher?: Function): Everything {
  let query = {} as { [name: string]: string };
  let sequences = {
    all: [],
    current: 0
  };
  let location = {
    pathname: "/testsuite",
    search: "?foo=bar",
    hash: "??????",
    action: "PUSH",
    key: "jhedoi",
    query
  };
  let auth = {
    token: "=================",
    authenticated: true,
    sub: "admin@admin.com",
    iat: 1469114361,
    jti: "4cbecefb-2009-4820-b8a2-09ab12c283b9",
    iss: "my.farmbot.io",
    exp: 1549767783,
    mqtt: "mqtt.farmbot.io",
    os_update_server:
    "https://api.github.com/repos/farmbot/farmbot_os/releases/latest",
    fw_update_server:
    "https://api.github.com/repos/FarmBot/farmbot-arduino-firmware/releases/latest",
    bot: "4cbecefb-2009-4820-b8a2-09ab12c283b9"
  };
  let designer = {
    x_size: 200,
    y_size: 200,
    plants: [],
    cropSearchQuery: "?foo=bar",
    cropSearchResults: []
  };
  let bot: BotState = {
    account: {
      id: 1,
      name: "wow",
      uuid: "000-000-000-000"
    },
    /** Maximum number of messages to cache. Excess is truncated. */
    logQueueSize: 0,
    logQueue: [],
    status: "???",
    dirty: false,
    /** How many steps to move when the user presses a manual movement arrow */
    stepSize: 100,
    /** Holds coordinates that the user is currently editing, but has not sent */
    axisBuffer: {
      x: "",
      y: "",
      z: "",
    },
    /** Holds settings that the user is currently editing, but has not sent */
    settingsBuffer: {
      movement_max_spd_x: "",
      movement_max_spd_y: "",
      movement_max_spd_z: "",
      movement_steps_acc_dec_x: "",
      movement_steps_acc_dec_y: "",
      movement_steps_acc_dec_z: "",
      movement_timeout_x: "",
      movement_timeout_y: "",
      movement_timeout_z: "",
    },
    hardware: {
      mcu_params: {},
      informational_settings: {},
      configuration: {},
      location: [-1, -1, -1],
      pins: {},
      farm_events: {
        current_sequence: null,
        paused_sequences: [],
        running_regimens: [],
        paused_regimens: [],
        sequence_log: [],
      }
    },
  };

  let regimens = {
    current: 0,
    all: []
  };

  let ticker = {
    message: "Inside test suite",
    color: "red",
    show: true
  };

  let bulkScheduler = {
    currentRegimen: 0,
    form: {
      dailyOffsetMs: 1,
      weeks: []
    }
  };
  let dispatch = dispatcher || function (p: any) { };
  let config: ConfigState = {
    host: "localhost",
    port: "5555"
  };

  let draggable = { dataTransfer: {} };
  return {
    location
    , auth
    , designer
    , dispatch
    , bot
    , ticker
    , sequences
    , regimens
    , bulkScheduler
    , config
    , draggable
  };
}
