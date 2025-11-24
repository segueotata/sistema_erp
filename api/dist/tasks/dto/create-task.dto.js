"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTaskDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateTaskDto {
    task_title;
    task_description;
    task_priority;
    task_status;
    task_from;
    task_to;
}
exports.CreateTaskDto = CreateTaskDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Finish project report',
        description: 'Title of the task',
    }),
    __metadata("design:type", String)
], CreateTaskDto.prototype, "task_title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Complete the final report for the project by Friday',
        description: 'Description of the task',
    }),
    __metadata("design:type", String)
], CreateTaskDto.prototype, "task_description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Low', description: 'Priority of the task' }),
    __metadata("design:type", String)
], CreateTaskDto.prototype, "task_priority", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Pending', description: 'Status of the task' }),
    __metadata("design:type", String)
], CreateTaskDto.prototype, "task_status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2024-06-01', description: 'Start date of the task' }),
    __metadata("design:type", String)
], CreateTaskDto.prototype, "task_from", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2024-06-07', description: 'End date of the task' }),
    __metadata("design:type", String)
], CreateTaskDto.prototype, "task_to", void 0);
//# sourceMappingURL=create-task.dto.js.map