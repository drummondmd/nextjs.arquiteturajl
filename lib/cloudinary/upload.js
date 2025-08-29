import cloudinary from "./config";

function getFolderFromMime(mimeType) {
  if (mimeType.startsWith('image/')) return 'uploads/images';
  if (mimeType === 'application/pdf') return 'uploads/pdfs';
  if (mimeType === 'text/csv' || mimeType === 'application/vnd.ms-excel') return 'uploads/csvs';
  return 'uploads/others';
}

/**
 *
 * @param {Buffer} fileBuffer - buffer do arquivo
 * @param {String} filename - nome do arquivo(vindo do cliente)
 * @param {String} mimeType  - tipo de arquivo, pasta será alocada automaticamente
 * @returns resultado do cloudnary(id deve estar no meio)
 */

export function uploadToCloudinary(fileBuffer, filename, mimeType) {
  const folder = getFolderFromMime(mimeType);

  return new Promise((resolve, reject) => {
    const isImage = mimeType.startsWith('image/');
    const resourceType = isImage ? 'image' : 'raw';

    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder,
        resource_type: resourceType,
        public_id: filename,
        use_filename: true,
        unique_filename: false,
        overwrite: true,
        type:"upload"
      },
      (error, result) => {
        if (error) return reject(error);
        resolve(result);
      }
    );

    uploadStream.end(fileBuffer);
  });
}