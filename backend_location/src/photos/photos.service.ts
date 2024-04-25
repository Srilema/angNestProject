import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PhotoEntity } from './photo.entity/photo.entity';

@Injectable()
export class PhotosService {
    constructor(@InjectRepository(PhotoEntity) private photosRepository: Repository<PhotoEntity>) { }

    async getPhotos(): Promise<PhotoEntity[]> {
        return await this.photosRepository.find(
            {
                relations: ["location"]
            }
        );
    }

    async getPhoto(_id: number): Promise<PhotoEntity[]> {
        return await this.photosRepository.find({
            where: [{ "id": _id }],
            relations: ["location"]
        });
    }

    async createPhoto(photo: PhotoEntity){
        return await this.photosRepository.save(photo);
    }

    async updatePhoto(photo: PhotoEntity) {
        this.photosRepository.save(photo)
    }

    async deletePhoto(photo: PhotoEntity) {
        this.photosRepository.delete(photo);
    }

}
