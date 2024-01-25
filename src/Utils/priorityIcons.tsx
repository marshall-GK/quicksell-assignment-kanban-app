import React from 'react';
import { ReactComponent as LowPriorityIcon } from '../assets/low.svg'
import { ReactComponent as MediumPriorityIcon } from '../assets/medium.svg'
import { ReactComponent as HightPriorityIcon } from '../assets/high.svg'
import { ReactComponent as UrgenPrioritytIcon } from '../assets/urgent.svg'
import { ReactComponent as NoPriorityIcon } from '../assets/no_priority.svg'
import { ReactComponent as InCompleteTaskIcon } from '../assets/incomplete.svg'
import { ReactComponent as InProgressIcon } from '../assets/inprogress.svg'
import { ReactComponent as DoneIcon } from '../assets/done.svg'
import { ReactComponent as BackLogIcon } from '../assets/backlog.svg'

export const getPriorityIcons = (priority: number) => {
  switch(priority) {
    case 1: return <LowPriorityIcon />
    case 2: return <MediumPriorityIcon />
    case 3: return <HightPriorityIcon />
    case 4: return <UrgenPrioritytIcon />
    default: return <NoPriorityIcon />
  }
}

export const getTicketStatusIcons = (status: string) => {
  switch(status) {
    case 'Todo': return <InCompleteTaskIcon />
    case 'In Progress': return <InProgressIcon />
    case 'Backlog': return <BackLogIcon />
    default: return <DoneIcon />
  }
}

export const getPriorityColor = (priority: number) => {
  switch(priority) {
    case 1: return 'lightgrey'
    case 2: return 'mediumgrey'
    case 3: return 'grey'
    case 4: return 'red'
    default: return 'lightgrey'
  }
}