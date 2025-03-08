import expert1 from "@/assets/experts/expert1.png";
import expert2 from "@/assets/experts/expert2.png";

export const experts = [
  {
    name: "李珊珊",
    base: "阳光心理咨询中心",
    avatar: expert1,
    allTimes: 10,
    currentTimes: 9,
    status: "talking" as const,
  },
  {
    name: "王强",
    base: "安心心理咨询所",
    avatar: expert2,
    allTimes: 15,
    currentTimes: 6,
    status: "connecting" as const,
  },
  {
    name: "刘丽丽",
    base: "阳光心理咨询中心",
    avatar: expert1,
    allTimes: 12,
    currentTimes: 7,
    status: "busy" as const,
  },
  {
    name: "李志强",
    base: "安心心理咨询所",
    avatar: expert2,
    allTimes: 8,
    currentTimes: 8,
    status: "free" as const,
  },
  {
    name: "王丽萍",
    base: "阳光心理咨询中心",
    avatar: expert1,
    allTimes: 10,
    currentTimes: 3,
    status: "afterCall" as const,
  },
  {
    name: "张毅",
    base: "安心心理咨询所",
    avatar: expert2,
    allTimes: 24,
    currentTimes: 17,
    status: "rest" as const,
  },
];