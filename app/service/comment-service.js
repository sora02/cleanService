import { commentModel } from "../db/model/comment-model";

class CommentService {
    constructor(commentModel) {
        this.commentModel = commentModel;
    }

    async addComment(commentInfo) {
        const createdComment = await this.commentModel.create(commentInfo);
        
        return createdComment;
    }

    async updateComment(commentId, toUpdate) {
        const updatedComment = await this.commentModel.update({
            commentId,
            update: toUpdate
        })

        return updatedComment;
    }

    async getCommentById(commentId) {
        const findedComment = await this.commentModel.findById(commentId);

        return findedComment;
    }
    async getCommentAll() {
        const findedComment = await this.commentModel.findAll({});

        return findedComment;
    }
    async deleteComment(commentId) {
        const { deletedCount } = await this.commentModel.delete(commentId);

        if (deletedCount === 0) {
            throw new Error(`${commentId} 제품의 삭제에 실패하였습니다`);
          }

        return { result: "success" };
     }
}

const commentService = new CommentService(commentModel);

export { commentService };