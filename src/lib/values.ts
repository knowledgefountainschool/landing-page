import { siteName } from '@/config/site';
import { media } from './db';

const values = [
  {
    title: 'Discipline',
    subtitle: 'Disciplined and Focused',
    description: `A disciplined student at ${siteName} exhibits self-control and dedication, consistently adhering to high standards both academically and personally.`,
    mediaSrc:
      media.studentFocusingOnAssignment.video ||
      media.studentFocusingOnAssignment?.image,
    mediaAlt: media.studentFocusingOnAssignment.name,
  },
  {
    title: 'Accountability',
    subtitle: 'Responsible and Trustworthy',
    description: `Students at ${siteName} are taught to take responsibility for their actions, owning up to successes and failures alike.`,
    mediaSrc: media.athletesTraining.video || media.athletesTraining.image,
    mediaAlt: media.athletesTraining.name,
  },
  {
    title: 'Teamwork',
    subtitle: 'Collaborative and Supportive',
    description: `${siteName} students engage in collaboration with their peers, valuing diverse perspectives and supporting one another to achieve common goals.`,
    mediaSrc:
      media.studentsBrainstorming.video || media.studentsBrainstorming?.image,
    mediaAlt: media.studentsBrainstorming.name,
  },
  {
    title: 'Excellence',
    subtitle: 'Ambitious and Driven',
    description: `Striving for excellence is a core principle at ${siteName}. Students are encouraged to push beyond their comfort zones, setting high standards in all areas of their lives.`,
    mediaSrc: media.awardsCeremony.video || media.awardsCeremony?.image,
    mediaAlt: media.awardsCeremony.name,
  },
  {
    title: 'Spirituality',
    subtitle: 'Reflective and Grounded',
    description: `Spirituality at ${siteName} is about more than religious belief; it’s about cultivating a reflective and grounded approach to life.`,
    mediaSrc:
      media.studentsReflectingAtAssembly.video ||
      media.studentsReflectingAtAssembly?.image,
    mediaAlt: media.studentsReflectingAtAssembly.name,
  },
];

export { values };
