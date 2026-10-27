export type ProjectCoverVariant =
  | 'books'
  | 'art'
  | 'fleet'
  | 'learning'
  | 'commerce'
  | 'portfolio'
  | 'watchLog'

export type ProjectMeta = {
  id: string
  link?: string
  cover: ProjectCoverVariant
  scope: 'client' | 'personal'
  visibility: 'public' | 'nda'
  stack: Array<string>
}

export type ProjectCopy = {
  year: string
  title: string
  category: string
  challenge: string
  approach: string
  outcome: string
}

export type Project = ProjectMeta & ProjectCopy
