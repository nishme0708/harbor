import { ICONS } from '../components/Icon';

export const sortOptions = {
  alphaASC: {
    label: 'Name A-Z',
    comparator: (a, b) => {
      return a.name.localeCompare(b.name);
    },
  },
  alphaDSC: {
    label: 'Name Z-A',
    comparator: (a, b) => {
      return b.name.localeCompare(a.name);
    },
  },
  status: {
    label: 'Status',
    comparator: (a, b) => {
      return a.statusCount - b.statusCount;
    },
    custom: true,
  },
  createdDate: {
    label: 'Date created',
    comparator: (a, b) => {
      return new Date(a.created_at) - new Date(b.created_at);
    },
  },
  modifiedDate: {
    label: 'Last modified',
    comparator: (a, b) => {
      return new Date(a.updated_at) - new Date(b.updated_at);
    },
  },
};

export const statusSortOptions = [
  {
    key: 'alphaASC',
    props: {
      text: 'Name A-Z',
    },
  },
  {
    key: 'alphaDSC',
    props: {
      text: 'Name Z-A',
    },
  },
  {
    key: 'status',
    props: {
      text: 'Status',
    },
  },
  {
    key: 'createdDate',
    props: {
      text: 'Date Created',
    },
  },
  {
    key: 'modifiedDate',
    props: {
      text: 'Last Modified',
    },
  },
];

export const COLORS = {
  SUCCESS: '#509900',
  PROGRESS: '#DB9000',
  UPDATING: '#7B61FF',
  FAILED: '#CD3A4C',
  INACTIVE: '#AAAAAA',
  WHITE: '#FFF',
  BADGE_TEXT: '#999',
  BADGE_BG: '#f6f6f6',
  DOT: '#d2d5db',
  BORDER: '#e5e5e5',
  PRIMARY: '#2F80ED',
  BLACK: '#000',
  GRAY: '#555555',
};

export const statusOptions = {
  RUNNING: {
    label: 'Running',
    icon: ICONS.RUNNING_TICK,
    state: COLORS.SUCCESS,
  },
  STOPPED: {
    label: 'Failed',
    icon: ICONS.FAILED,
    state: COLORS.FAILED,
  },
  PENDING: {
    label: 'Standing up',
    icon: ICONS.STANDING_UP_HOUR_GLASS,
    state: COLORS.PROGRESS,
  },
  SETTINGS_INACTIVE: {
    label: 'Settings',
    icon: ICONS.SETTINGS,
    state: COLORS.INACTIVE,
  },
  SETTINGS_ACTIVE: {
    label: 'Settings',
    icon: ICONS.SETTINGS,
    state: COLORS.PRIMARY,
  },
  ALL: {
    label: 'All',
    icon: ICONS.ALL_STATUS,
    state: COLORS.PRIMARY,
  },
  BACK: {
    label: 'Back to all projects',
    icon: ICONS.ARROW_LEFT_LONG,
    state: COLORS.INACTIVE,
  },
  TESTNET: {
    label: 'Testnets',
    icon: ICONS.TESTNETS,
    state: COLORS.PRIMARY,
  },
  MEMBERS: {
    label: 'Members',
    icon: ICONS.MEMBERS,
    state: COLORS.BLACK,
  },
  PROJECT_KEY: {
    label: 'Project Key',
    icon: ICONS.PROJECT_KEY,
    state: COLORS.BLACK,
  },
  USER_KEY: {
    label: 'Your User Key',
    icon: ICONS.USER_KEY,
    state: COLORS.INACTIVE,
  },
};
