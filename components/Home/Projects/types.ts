export type Project = {
  id: string;
  title: string;
  blurb: string;          // short one-liner shown on cards
  description?: string;   // longer copy for modal
  tags: string[];         // used for filters (e.g. ["Web","React","Node"])
  stack: string[];        // tech chips shown in modal
  highlights?: string[];  // bullet points in modal
  repo?: string;          // GitHub link
  live?: string;          // live/demo link
  images?: string[];      // /public paths (first used as cover)
};
