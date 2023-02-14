const pasiveSkills = [
  {
    name: "Quick Learning",
    point: 10,
    icon: "/logoIcons/quicklearning.png",
  },
];

const basicSkills = [
  { name: "HTML", point: 8, icon: "/logoIcons/html.png" },
  { name: "CSS", point: 7, icon: "/logoIcons/css.png" },
  { name: "Python", point: 5, icon: "/logoIcons/python.png" },
  { name: "C#", point: 4, icon: "/logoIcons/csharp.png" },
  { name: "Javascript", point: 8, icon: "/logoIcons/javascript.png" },
  { name: "Typescript", point: 5, icon: "/logoIcons/typescript.png" },
  { name: "Bash", point: 4, icon: "/logoIcons/bash.png" },
];

const lenguageSkills = [
  { name: "Spain", point: 10, icon: "" },
  { name: "English", point: 6, icon: "" },
];

const mobileDevelopment = [
  { name: "ReactNative", point: 4, icon: "/logoIcons/reactjs.png" },
];
const desktopDevelopment = [
  { name: "ElectronJS", point: 2, icon: "/logoIcons/electronjs.png" },
];
const frontendDevelopment = [
  { name: "ReactJS", point: 8, icon: "/logoIcons/reactjs.png" },
  { name: "NextJS", point: 6, icon: "/logoIcons/nextjs.png" },
];
const backendDevelopment = [
  { name: "Flask", point: 5, icon: "/logoIcons/flask.png" },
  { name: "ExpressJS", point: 7, icon: "/logoIcons/expressjs.png" },
];
const devOps = [
  { name: "Linux", point: 6, icon: "/logoIcons/linux.png" },
  { name: "Git", point: 5, icon: "/logoIcons/git.png" },
  { name: "AWS", point: 5, icon: "/logoIcons/git.png" },
  { name: "Netlify", point: 5, icon: "/logoIcons/git.png" },
];
const gameDevelopment = [
  { name: "Unity3D", point: 7, icon: "/logoIcons/unity3d.png" },
  { name: "Unreal Engine", point: 2, icon: "/logoIcons/unreal.png" },
  { name: "Blender", point: 5, icon: "/logoIcons/blender.png" },
];

const sum = (total, { point }) => total + point;
const average = (values = []) => {
  return values.reduce(sum, 0) / values.length;
};

const averagePasiveSkill = average(pasiveSkills).toFixed(2);
const averageBasicSkill = average(basicSkills).toFixed(2);
const averageMobileSkill = average(mobileDevelopment).toFixed(2);
const averageDesktopSkill = average(desktopDevelopment).toFixed(2);
const averageFrontendSkill = average(frontendDevelopment).toFixed(2);
const averageBackendSkill = average(backendDevelopment).toFixed(2);
const averageDevOps = average(devOps).toFixed(2);
const averageGameDevelopmentSkill = average(gameDevelopment).toFixed(2);

export const pasiveSkillPoints = pasiveSkills.reduce(sum, 0);
export const basicSkillPoints = basicSkills.reduce(sum, 0);
export const mobileSkillPoints = mobileDevelopment.reduce(sum, 0);
export const desktopSkillPoints = desktopDevelopment.reduce(sum, 0);
export const frontendSkillPoints = frontendDevelopment.reduce(sum, 0);
export const backendSkillPoints = backendDevelopment.reduce(sum, 0);
export const devOpsSkillPoints = devOps.reduce(sum, 0);
export const gameDevSkillPoints = gameDevelopment.reduce(sum, 0);

const skills = [
  { set: "Passive", skills: pasiveSkills, average: averagePasiveSkill },
  { set: "Basics", skills: basicSkills, average: averageBasicSkill },
  {
    set: "Frontend Development",
    skills: frontendDevelopment,
    average: averageFrontendSkill,
  },
  {
    set: "Backend Development",
    skills: backendDevelopment,
    average: averageBackendSkill,
  },
  {
    set: "Mobile Development",
    skills: mobileDevelopment,
    average: averageMobileSkill,
  },
  {
    set: "Desktop Development",
    skills: desktopDevelopment,
    average: averageDesktopSkill,
  },
  {
    set: "Game Development",
    skills: gameDevelopment,
    average: averageGameDevelopmentSkill,
  },
  { set: "DevOps", skills: devOps, average: averageDevOps },
];

export const totalSkills = skills.reduce((total, curValue) => {
  return total + curValue.skills.length;
}, 0);

export const totalSkillPoints = skills.reduce(
  (total, curValue) =>
    total +
    curValue.skills.reduce((subTotal, value) => subTotal + value.point, 0),
  0
);

export default skills;
