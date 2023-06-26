import { skillOptions } from "../const";

export const getSkillsArray = (arr) => {
  let array;
  if (!arr) return [];
  array = arr?.map((i) => {
    const item = skillOptions.filter((skill) => {
      return skill.value == i;
    });
    return item[0].label;
  });
  return array;
};
