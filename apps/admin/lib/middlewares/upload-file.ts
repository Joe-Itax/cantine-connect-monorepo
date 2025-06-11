import { put, del, copy } from "@vercel/blob";
import mime from "mime";

type Folder = "avatars" | "temp";

export async function handleUpload({
  file,
  folder,
  filenamePrefix,
}: {
  file: Blob;
  folder: Folder;
  filenamePrefix: string;
}): Promise<string> {
  const ext = mime.getExtension(file.type) || "bin";
  const filename = `${filenamePrefix}-${new Date()
    .toISOString()
    .replace(/[:.]/g, "-")}.${ext}`;

  const blobPath = `uploads/${folder}/${filename}`;

  const { url } = await put(blobPath, file, {
    access: "public",
    addRandomSuffix: false,
  });

  return url;
}

export async function deleteFileFromVercelBlob(fileUrl: string) {
  try {
    await del(fileUrl);
  } catch (error) {
    console.error(`Error deleting blob: ${fileUrl}`, error);
  }
}

export async function moveFileInVercelBlob(
  oldUrl: string,
  newPath: string
): Promise<string> {
  try {
    const { url: finalUrl } = await copy(oldUrl, newPath, { access: "public" });
    await del(oldUrl);
    return finalUrl;
  } catch (error) {
    console.error(`Failed to move blob from ${oldUrl} to ${newPath}:`, error);
    throw new Error(`Failed to move blob: ${error}`);
  }
}
