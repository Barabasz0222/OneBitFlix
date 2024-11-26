import { ResourceOptions } from "adminjs";

export const courseResourceOptions: ResourceOptions = {
    navigation: 'Cursos',
    editProperties: ['name', 'synopsis', 'uploaThumbnail', 'featured', 'categoryId'],
    filterProperties: ['name', 'synopsis', 'featured', 'categoryId', 'createdAt', 'updatedAt'],
    listProperties: ['id', 'name', 'synopsis', 'featured', 'categoryId'],
    showProperties: ['id', 'name', 'synopsis', 'featured', 'thumbnailUrl', 'categoryId', 'createdAt', 'updatedAt']
}