import type { ProjectCoverVariant } from '@/types/project'
import { FC } from 'react'
import { ArtCover } from './ArtCover'
import { BooksCover } from './BooksCover'
import { CommerceCover } from './CommerceCover'
import { FleetCover } from './FleetCover'
import { LearningCover } from './LearningCover'
import { PortfolioCover } from './PortfolioCover'
import type { CoverProps } from './types'
import { WatchLogCover } from './WatchLogCover'

const COVERS: Record<ProjectCoverVariant, FC<CoverProps>> = {
  books: BooksCover,
  art: ArtCover,
  fleet: FleetCover,
  learning: LearningCover,
  commerce: CommerceCover,
  portfolio: PortfolioCover,
  watchLog: WatchLogCover,
}

type ProjectCoverProps = {
  variant: ProjectCoverVariant
  title: string
  projectId?: string
}

export const ProjectCover: FC<ProjectCoverProps> = ({ variant, title, projectId }) => {
  const Cover = COVERS[variant]
  const safeProjectId = (projectId ?? title).replace(/[^a-zA-Z0-9_-]/g, '') || variant
  const svgId = `cover-${variant}-${safeProjectId}`

  return (
    <div className="h-full w-full" role="img" aria-label={title}>
      <Cover svgId={svgId} />
    </div>
  )
}
