/** 
 *  @service storage
 */
import { extname } from 'path'
import StorageConstants from './uploads.constants'

const isImage = (fileName: string, fileMimetype: string) => {
  const fileExt = extname(fileName).toLowerCase()
  const isImageExt = StorageConstants.imageExtensions.includes(fileExt)
  const isImageMimeType = StorageConstants.imageMimeTypes.includes(fileMimetype)

  return isImageExt && isImageMimeType
}


const UploadService = Object.freeze({
  isImage,
})

export default UploadService
  