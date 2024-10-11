import { siteName } from '@/config/site';
import { media } from './db';

const values = [
  {
    title: 'Discipline',
    subtitle: 'Disciplined and Focused',
    description: `A disciplined student at ${siteName} exhibits self-control and dedication, consistently adhering to high standards both academically and personally. Their focus allows them to meet challenges head-on, remaining steadfast in the pursuit of their goals.`,
    mediaSrc:
      media.studentLeaderEnsuringTasks.video ||
      media.studentLeaderEnsuringTasks?.image,
    mediaAlt: media.studentLeaderEnsuringTasks.name,
  },
  {
    title: 'Accountability',
    subtitle: 'Responsible and Trustworthy',
    description: `Students at ${siteName} are taught to take responsibility for their actions, owning up to successes and failures alike. This accountability fosters an environment of trust and integrity, where each individual contributes to a culture of honesty and dependability.`,
    mediaSrc:
      media.studentLeaderEnsuringTasks.video ||
      media.studentLeaderEnsuringTasks?.image,
    mediaAlt: media.studentLeaderEnsuringTasks.name,
  },
  {
    title: 'Teamwork',
    subtitle: 'Collaborative and Supportive',
    description: `${siteName} students understand the power of working together. They engage in collaboration with their peers, valuing diverse perspectives and supporting one another to achieve common goals. Through teamwork, they learn that collective effort leads to greater success.`,
    mediaSrc:
      media.studentLeaderEnsuringTasks.video ||
      media.studentLeaderEnsuringTasks?.image,
    mediaAlt: media.studentLeaderEnsuringTasks.name,
  },
  {
    title: 'Excellence',
    subtitle: 'Ambitious and Driven',
    description: `Striving for excellence is a core principle at ${siteName}. Students are encouraged to push beyond their comfort zones, setting high standards in all areas of their lives. Their drive for continuous improvement leads them to excel in academics, athletics, and extracurriculars.`,
    mediaSrc:
      media.studentLeaderEnsuringTasks.video ||
      media.studentLeaderEnsuringTasks?.image,
    mediaAlt: media.studentLeaderEnsuringTasks.name,
  },
  {
    title: 'Spirituality',
    subtitle: 'Reflective and Grounded',
    description: `Spirituality at ${siteName} is about more than religious belief; it’s about cultivating a reflective and grounded approach to life. Students are encouraged to explore their inner values, develop a strong moral compass, and contribute positively to their community and the world.`,
    mediaSrc:
      media.studentLeaderEnsuringTasks.video ||
      media.studentLeaderEnsuringTasks?.image,
    mediaAlt: media.studentLeaderEnsuringTasks.name,
  },
];

export { values };
