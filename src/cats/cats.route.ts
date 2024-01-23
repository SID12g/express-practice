import { Cat } from "./cats.model";
import { Router } from "express";
import {
  createCat,
  deleteCat,
  readAllcat,
  readCat,
  updateCat,
} from "./cats.service";

const router = Router();

//* read 고양이 전체 데이터 조회
router.get("/cats", readAllcat);

//* read 특정 고양이 데이터 조회
router.get("/cats/:id", readCat);

//* create 새로운 고양이 추가
router.post("/cats", createCat);

//* update 고양이 데이터 업데이트
router.put("/cats/:id", updateCat);

//* delete 고양이 데이터 삭제
router.delete("/cats/:id", deleteCat);

export default router;
