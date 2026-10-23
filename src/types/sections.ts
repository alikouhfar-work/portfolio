export type NavDictionary = {
  brand: string
  skills: string
  index: string
  lab: string
  philosophy: string
  contact: string
  availability: string
  menu: string
  close: string
}

export type SkillPillar = {
  code: string
  title: string
  summary: string
  items: Array<string>
}

export type SkillsDictionary = {
  eyebrow: string
  heading: string
  desc: string
  note: string
  labels: {
    pillars: string
    instruments: string
  }
  pillars: Array<SkillPillar>
}

export type SpatialIndexDictionary = {
  eyebrow: string
  heading: string
  desc: string
  count: string
  note: string
  labels: {
    constraints: string
    approach: string
    impact: string
    stack: string
    sheet: string
    view: string
    private: string
    client: string
    personal: string
    live: string
    nda: string
  }
}

export type LabItem = {
  code: string
  title: string
  description: string
  tags: Array<string>
}

export type LabDictionary = {
  eyebrow: string
  heading: string
  desc: string
  count: string
  live: string
  labels: {
    stack: string
  }
  items: Array<LabItem>
}

export type PhilosophyDictionary = {
  eyebrow: string
  heading: string
  lead: string
  facts: Array<{ label: string; value: string }>
  principles: Array<{ code: string; structural: string; applied: string; description: string }>
  signature: string
  signatureNote: string
}

export type ContactDictionary = {
  eyebrow: string
  heading: string
  whoami: string
  whoamiValue: string
  promptContact: string
  promptConnect: string
  status: string
  statusLabel: string
  location: string
  locationLabel: string
  navLabel: string
  connectLabel: string
  copyEmail: string
  copied: string
  backToTop: string
  colophon: string
  rights: string
  emailHint: string
}
