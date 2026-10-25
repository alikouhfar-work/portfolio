export type ProjectCover = 'books' | 'art' | 'fleet' | 'learning' | 'commerce' | 'portfolio' | 'cinema'

export type Project = {
  id: string
  link: string
  title: string
  cover: ProjectCover
  scope: 'client' | 'personal'
  status: 'live' | 'nda'
  year: string
  category: string
  constraints: string
  approach: string
  impact: string
  tech: Array<string>
}

export type ProjectDictionary = {
  desc: string
  title: string
  heading: string
}
