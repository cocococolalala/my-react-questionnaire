import Mock from "mockjs";

Mock.mock("/api/test", "get", () => {
  return {
    errorno: 0,
    data: {
      name:`coco ${Date.now()}`,
    }
  };
});
