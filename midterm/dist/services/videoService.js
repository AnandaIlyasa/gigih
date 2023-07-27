"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const videoRepository_1 = __importDefault(require("../repositories/videoRepository"));
class VideoService {
    static readOneById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const foundVideo = yield videoRepository_1.default.readById(id);
            return foundVideo;
        });
    }
    static readAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const allVideos = yield videoRepository_1.default.readAll();
            return allVideos;
        });
    }
}
exports.default = VideoService;
//# sourceMappingURL=videoService.js.map