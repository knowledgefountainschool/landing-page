const sharedMedia = {
  toddlersInClassSmiling: {
    name: 'toddlers in class smiling',
    image: '/images/toddler-in-class-smiling.webp',
    video: '/videos/toddler-in-class-smiling.mp4',
  },
  studentsLearningInClassroom: {
    name: 'students learning in a classroom setting',
    image: '/images/teacher-in-class.webp',
    video: '/videos/teacher-in-class.mp4',
  },
  entireSchoolBuilding: {
    name: 'entire school building',
    image: '/images/admin-and-nursery-blocks.webp',
    video: '/videos/admin-and-nursery-blocks.mp4',
  },
  sunSkyAndSurroundings: {
    name: 'sun, sky, and surroundings',
    image: '/images/cloudy-sky.webp',
    video: undefined,
  },
  childrenPlayingOutside: {
    name: 'children playing outside',
    image: '/images/children-playing-on-swing.webp',
    video: '/videos/children-playing-on-swing.mp4',
  },
  childrenParticipatingInSports: {
    name: 'children participating in sports',
    image: '/images/children-in-sportswear.webp',
    video: undefined,
  },
  childrenPraying: {
    name: 'children praying',
    image: '/images/child-praying.webp',
    video: undefined,
  },
  class1: {
    name: 'Lower Reception',
    image: undefined,
    video: undefined,
  },
  class2: {
    name: 'Reception One',
    image: '/images/reception-one.webp',
    video: undefined,
  },
  class3: {
    name: 'Reception Two',
    image: '/images/reception-two.webp',
    video: undefined,
  },
  class4: {
    name: 'Nursery One',
    image: '/images/nursery-one.webp',
    video: undefined,
  },
  class5: {
    name: 'Nursery Two',
    image: undefined,
    video: undefined,
  },
  class6: {
    name: 'Class Of Excellence One',
    image: '/images/coe-one.webp',
    video: undefined,
  },
  class7: {
    name: 'Class Of Excellence Two',
    image: '/images/coe-two.webp',
    video: undefined,
  },
  class8: {
    name: 'Class Of Excellence Three',
    image: '/images/coe-three.webp',
    video: undefined,
  },
  class9: {
    name: 'Class Of Excellence Four',
    image: '/images/coe-four.webp',
    video: undefined,
  },
  class10: {
    name: 'Class Of Excellence Five',
    image: undefined,
    video: undefined,
  },
  staff: {
    name: 'knf staff',
    image: '/images/staff.webp',
    video: undefined,
  },
  proprietress: {
    name: 'the proprietress - mrs edo',
    image: '/images/proprietress.webp',
    video: undefined,
  },
  studentFocusingOnAssignment: {
    name: 'student focusing on an assignment',
    image: '/images/student-colouring-book.webp',
    video: undefined,
  },
  studentsStaring: {
    name: 'students starting at camera',
    image: '/images/students-staring.webp',
    video: undefined,
  },
  awardsCeremony: {
    name: 'awards ceremony recognizing academic excellence',
    image: '/images/student-receiving-award.webp',
    video: undefined,
  },
  studentsPlayingFlutesOrTraditionalAttire: {
    name: 'students playing flutes or in traditional attire',
    image: '/images/students-in-traditional-attire.webp',
    video: undefined,
  },
  studentInCostume: {
    name: 'student in costume',
    image: '/images/student-in-costume.webp',
    video: undefined,
  },
  studentsPlayingFootball: {
    name: 'students playing football',
    image: '/images/students-holding-a-ball.webp',
    video: '/videos/students-playing-football.mp4',
  },
  cOmbination: {
    name: 'combination',
    image: '',
    video: '/videos/hero.mp4',
  },
};

const devMedia = { ...sharedMedia };

const prodMedia = {
  toddlersInClassSmiling: {
    ...sharedMedia.toddlersInClassSmiling,
    image:
      'https://res.cloudinary.com/dt1wzz6ae/image/upload/v1729786622/toddler-in-class-smiling_j5v89j.webp',
    video:
      'https://res.cloudinary.com/dt1wzz6ae/video/upload/v1729786464/toddler-in-class-smiling_wzte4h.mp4',
  },
  studentsLearningInClassroom: {
    ...sharedMedia.studentsLearningInClassroom,
    image:
      'https://res.cloudinary.com/dt1wzz6ae/image/upload/v1729786620/teacher-in-class_nsk1hb.webp',
    video:
      'https://res.cloudinary.com/dt1wzz6ae/video/upload/v1729786467/teacher-in-class_ph8bdx.mp4',
  },
  entireSchoolBuilding: {
    ...sharedMedia.entireSchoolBuilding,
    image:
      'https://res.cloudinary.com/dt1wzz6ae/image/upload/v1729786600/admin-and-nursery-blocks_tbqowa.webp',
    video:
      'https://res.cloudinary.com/dt1wzz6ae/video/upload/v1729786462/admin-and-nursery-blocks_riomou.mp4',
  },
  sunSkyAndSurroundings: {
    ...sharedMedia.sunSkyAndSurroundings,
    image:
      'https://res.cloudinary.com/dt1wzz6ae/image/upload/v1729786602/cloudy-sky_wjwks4.webp',
  },
  childrenPlayingOutside: {
    ...sharedMedia.childrenPlayingOutside,
    image:
      'https://res.cloudinary.com/dt1wzz6ae/image/upload/v1729786602/children-playing-on-swing_izdlil.webp',
    video:
      'https://res.cloudinary.com/dt1wzz6ae/video/upload/v1729786459/children-playing-on-swing_rzusxn.mp4',
  },
  childrenParticipatingInSports: {
    ...sharedMedia.childrenParticipatingInSports,
    image:
      'https://res.cloudinary.com/dt1wzz6ae/image/upload/v1729786601/children-in-sportswear_zrrbyi.webp',
  },
  childrenPraying: {
    ...sharedMedia.childrenPraying,
    image:
      'https://res.cloudinary.com/dt1wzz6ae/image/upload/v1729786600/child-praying_yjrcop.webp',
  },
  class1: {
    ...sharedMedia.class1,
  },
  class2: {
    ...sharedMedia.class2,
    image:
      'https://res.cloudinary.com/dt1wzz6ae/image/upload/v1729786610/reception-one_wwkyqq.webp',
  },
  class3: {
    ...sharedMedia.class3,
    image:
      'https://res.cloudinary.com/dt1wzz6ae/image/upload/v1729786612/reception-two_jc73pt.webp',
  },
  class4: {
    ...sharedMedia.class4,
    image:
      'https://res.cloudinary.com/dt1wzz6ae/image/upload/v1729786607/nursery-one_p0mntl.webp',
  },
  class5: {
    ...sharedMedia.class5,
  },
  class6: {
    ...sharedMedia.class6,
    image:
      'https://res.cloudinary.com/dt1wzz6ae/image/upload/v1729786604/coe-one_l3nxhy.webp',
  },
  class7: {
    ...sharedMedia.class7,
    image:
      'https://res.cloudinary.com/dt1wzz6ae/image/upload/v1729786606/coe-two_zjmhec.webp',
  },
  class8: {
    ...sharedMedia.class8,
    image:
      'https://res.cloudinary.com/dt1wzz6ae/image/upload/v1729786605/coe-three_vh0c1j.webp',
  },
  class9: {
    ...sharedMedia.class9,
    image:
      'https://res.cloudinary.com/dt1wzz6ae/image/upload/v1729786603/coe-four_isrnfe.webp',
  },
  class10: {
    ...sharedMedia.class10,
  },
  staff: {
    ...sharedMedia.staff,
    image:
      'https://res.cloudinary.com/dt1wzz6ae/image/upload/v1729786612/staff_dw0o3q.webp',
  },
  proprietress: {
    ...sharedMedia.proprietress,
    image:
      'https://res.cloudinary.com/dt1wzz6ae/image/upload/v1729786608/proprietress_r86kze.webp',
  },
  studentFocusingOnAssignment: {
    ...sharedMedia.studentFocusingOnAssignment,
    image:
      'https://res.cloudinary.com/dt1wzz6ae/image/upload/v1729786612/student-colouring-book_sza1ht.webp',
  },
  studentsStaring: {
    ...sharedMedia.studentsStaring,
    image:
      'https://res.cloudinary.com/dt1wzz6ae/image/upload/v1729786618/students-staring_ssknu4.webp',
  },
  awardsCeremony: {
    ...sharedMedia.awardsCeremony,
    image:
      'https://res.cloudinary.com/dt1wzz6ae/image/upload/v1729786616/student-receiving-award_nj6kkq.webp',
  },
  studentsPlayingFlutesOrTraditionalAttire: {
    ...sharedMedia.studentsPlayingFlutesOrTraditionalAttire,
    image:
      'https://res.cloudinary.com/dt1wzz6ae/image/upload/v1729786618/students-in-traditional-attire_raogxb.webp',
  },
  studentInCostume: {
    ...sharedMedia.studentInCostume,
    image:
      'https://res.cloudinary.com/dt1wzz6ae/image/upload/v1729786614/student-in-costume_b0pjal.webp',
  },
  studentsPlayingFootball: {
    ...sharedMedia.studentsPlayingFootball,
    image:
      'https://res.cloudinary.com/dt1wzz6ae/image/upload/v1729786616/students-holding-a-ball_vvrd60.webp',
    video:
      'https://res.cloudinary.com/dt1wzz6ae/video/upload/v1729786467/students-playing-football_t9tuts.mp4',
  },
  cOmbination: {
    ...sharedMedia.cOmbination,
    video:
      'https://res.cloudinary.com/dt1wzz6ae/video/upload/v1729786473/hero_gr29jb.mp4',
  },
};

const media = import.meta.env.DEV ? devMedia : prodMedia;
// const media = prodMedia;

const galleryMarqueeMedia = [
  media.class2,
  media.class3,
  media.class4,
  media.class6,
  media.class7,
  media.class8,
  media.class9,
  media.staff,
  media.proprietress,
];

export { media, galleryMarqueeMedia };
