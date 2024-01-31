const requiredDataByStage = {
  1: [
    "firstName",
    "lastName",
    "address",
    "city",
    "state",
    "postCode",
    "country",
    "phone",
    "email",
    "birthday",
    "gender",
    "race",
  ],
  2: [
    "highSchool",
    "highSchoolDuration",
    "highSchoolGraduate",
    "university",
    "univeristyDuration",
    "univeristyCourse",
    "universityGraduate",
  ],
  3: ["skills"],
  4: [],
  5: [
    "referenceName",
    "refRelationship",
    "refRelDuration",
    "refPhone",
    "refEmail",
  ],
  6: ["resume"],
  7: [],
};

export const canSaveStageToDB = (stage, data) =>
  requiredDataByStage[stage]?.every((key) => data[key]);
