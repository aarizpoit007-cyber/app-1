const STOP = (title)=>({
  title,
  tags: ['safety'],
  body:
`I can’t help with that directly here.
If you’re in any danger or thinking about harming yourself or others, please contact a trusted adult or local helpline immediately.`,
  actions: [
    'Tell a trusted adult (parent/guardian/teacher/counselor).',
    'If urgent, contact local emergency services.'
  ]
})

const playbooks = {
  study: {
    title: 'Lock a 7-day focus sprint',
    tags: ['study','ibdp','focus'],
    body: 'Short sprint, high clarity, no perfectionism. You’ll win the week, not the year.',
    actions: [
      'Pick 2 high-leverage topics. Write them on paper.',
      'Daily: 3 x 50-min deep-work blocks, 10-min breaks.',
      'Phone in another room during blocks.',
      'Evening: 15-min quick recap, 5-min plan for tomorrow.'
    ]
  },
  fitness: {
    title: 'Basic teen strength & energy plan',
    tags: ['fitness','health'],
    body: 'Consistency over intensity. Form first. Sleep is your performance drug.',
    actions: [
      '3x/week: pushups/squats/planks (20-15-max, 3 rounds).',
      'Walk 8–10k steps daily.',
      'Sleep target: 8–9 hours; no screens 45 min before.'
    ]
  },
  friends: {
    title: 'Fix awkward friend drama',
    tags: ['friends','communication'],
    body: 'Assume good intent; clarify in private; don’t make it a group event.',
    actions: [
      'Send a private “Can we clear the air?” text.',
      'Use the XYZ template: “When X happened, I felt Y. In future can we Z?”',
      'Agree one tiny experiment for the week.'
    ]
  },
  money: {
    title: 'First ₹10k project blueprint',
    tags: ['money','projects','skills'],
    body: 'Tiny paid project > 100 tutorials. Ship something small.',
    actions: [
      'Pick a skill you can offer (editing, thumbnails, coding).',
      'Write a 3-line pitch. DM 20 targets.',
      'Deliver in 72 hours. Ask for a testimonial. Repeat.'
    ]
  }
}

export const curated = [
  playbooks.study, playbooks.fitness, playbooks.friends, playbooks.money
]

function unsafeTopic(q){
  const s = q.toLowerCase()
  const banned = ['self-harm','kill myself','suicide','harm someone','weapons','drugs','steroids','explicit']
  return banned.some(b=>s.includes(b))
}

export function getAdvice(question){
  if(unsafeTopic(question)) return STOP('Safety first')

  const s = question.toLowerCase()
  if(s.includes('study') || s.includes('ibdp') || s.includes('focus')) return playbooks.study
  if(s.includes('workout') || s.includes('gym') || s.includes('fitness')) return playbooks.fitness
  if(s.includes('friend') || s.includes('bully') || s.includes('communication')) return playbooks.friends
  if(s.includes('money') || s.includes('freelance') || s.includes('earn') || s.includes('project')) return playbooks.money

  return {
    title: 'Make progress in 48 minutes',
    tags: ['clarity','action'],
    body:
`When the problem is fuzzy, shrink the scope and define success for *today*. 
You don’t need motivation; you need a tiny plan and a timer.`,
    actions: [
      'Write 1 clear outcome for today on paper.',
      'Break it into 3 micro-steps you can finish in 48 minutes.',
      'Start a 16/4 focus timer (3 rounds). Put phone away.',
      'End by writing the first step for tomorrow.'
    ]
  }
}
