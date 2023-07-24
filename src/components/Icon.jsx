import { useEffect, useRef, useState } from 'react';
import { ReactComponent as FAILED } from '/src/assets/Icons/Failed.svg';
import { ReactComponent as ADD } from '/src/assets/Icons/Add.svg';
import { ReactComponent as ALL_STATUS } from '/src/assets/Icons/All status.svg';
import { ReactComponent as ARROW_DOWN_SHORT } from '/src/assets/Icons/Arrow down short.svg';
import { ReactComponent as ARROW_LEFT_LONG } from '/src/assets/Icons/Arrow left long.svg';
import { ReactComponent as ARROW_RIGHT_LONG } from '/src/assets/Icons/Arrow right long.svg';
import { ReactComponent as ARROW_RIGHT_SHORT } from '/src/assets/Icons/Arrow right short.svg';
import { ReactComponent as BRIDGE_LIBRARY } from '/src/assets/Icons/Bridge library.svg';
import { ReactComponent as CLOCK } from '/src/assets/Icons/Clock.svg';
import { ReactComponent as CLONING } from '/src/assets/Icons/Cloning.svg';
import { ReactComponent as COMMAND_FOR_CLI } from '/src/assets/Icons/Command for CLI.svg';
import { ReactComponent as COMMAND_SHEET } from '/src/assets/Icons/Command sheet.svg';
import { ReactComponent as COPY_TO_CLIPBOARD } from '/src/assets/Icons/Copy to clipboard.svg';
import { ReactComponent as DOCS } from '/src/assets/Icons/Docs.svg';

import { ReactComponent as EXTERNAL_LINK } from '/src/assets/Icons/External link.svg';
import { ReactComponent as HARBOR_LOGO } from '/src/assets/Icons/Harbor logo.svg';
import { ReactComponent as KILLED } from '/src/assets/Icons/Killed.svg';

import { ReactComponent as MEMBERS } from '/src/assets/Icons/Members.svg';
import { ReactComponent as PROJECT_KEY } from '/src/assets/Icons/Project key.svg';
import { ReactComponent as PROJECTS } from '/src/assets/Icons/Projects.svg';
import { ReactComponent as RUNNING_TICK } from '/src/assets/Icons/Running tick.svg';

import { ReactComponent as SETTINGS } from '/src/assets/Icons/Settings.svg';
import { ReactComponent as STANDING_UP_HOUR_GLASS } from '/src/assets/Icons/Standing up hour glass.svg';
import { ReactComponent as STAR_IN_PROJECT } from '/src/assets/Icons/Star in project.svg';
import { ReactComponent as TESTNETS } from '/src/assets/Icons/Testnets.svg';

import { ReactComponent as USER_KEY } from '/src/assets/Icons/User key.svg';

export const ICONS = {
  ADD: ADD,
  ALL_STATUS: ALL_STATUS,
  ARROW_DOWN_SHORT: ARROW_DOWN_SHORT,
  ARROW_LEFT_LONG: ARROW_LEFT_LONG,
  ARROW_RIGHT_LONG: ARROW_RIGHT_LONG,
  ARROW_RIGHT_SHORT: ARROW_RIGHT_SHORT,
  BRIDGE_LIBRARY: BRIDGE_LIBRARY,
  CLOCK: CLOCK,
  CLONING: CLONING,
  COMMAND_FOR_CLI: COMMAND_FOR_CLI,
  COMMAND_SHEET: COMMAND_SHEET,
  COPY_TO_CLIPBOARD: COPY_TO_CLIPBOARD,
  DOCS: DOCS,
  EXTERNAL_LINK: EXTERNAL_LINK,
  FAILED: FAILED,
  HARBOR_LOGO: HARBOR_LOGO,
  KILLED: KILLED,
  MEMBERS: MEMBERS,
  PROJECT_KEY: PROJECT_KEY,
  PROJECTS: PROJECTS,
  RUNNING_TICK: RUNNING_TICK,
  SETTINGS: SETTINGS,
  STANDING_UP_HOUR_GLASS: STANDING_UP_HOUR_GLASS,
  STAR_IN_PROJECT: STAR_IN_PROJECT,
  TESTNETS: TESTNETS,
  USER_KEY: USER_KEY,
};

function Icon({ iconComp, color, customStyle }) {
  return (
    <span className='icon flex items-center' style={{ ...customStyle }}>
      {iconComp({ fill: `${color}` })}
    </span>
  );
}

export default Icon;
