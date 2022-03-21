import express, { Express } from 'express'
import multer, { diskStorage, DiskStorageOptions, FileFilterCallback } from 'multer'
import path from 'path'
import StorageService from './uploads.service'


type DestinationCallback = (error: Error | null, destination: string) => void
type FileNameCallback = (error: Error | null, filename: string) => void

const destinationController = (req: Express.Request, file: Express.Multer.File, cb: DestinationCallback) => {
  cb(null, 'uploads/')
}

const fileNameController = (req: Express.Request, file: Express.Multer.File, cb: FileNameCallback) => {

}

const fileFilterController = (req: Express.Request, file: Express.Multer.File, cb: FileFilterCallback) => {
  const { originalname, mimetype } = file
  const isImage = StorageService.isImage(originalname, mimetype)
  if (isImage) {
    
  }
}