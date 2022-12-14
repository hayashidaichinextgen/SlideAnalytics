function GET_FILEID_FROM_URL(url){
  return url.split("/")[5];
}

function GET_FILE_TYPE (id) {
  return DriveApp.getFileById(id).getMimeType();
}

function CONVERT_SLIDE_FROM_PPT(id) {
  let preconvert_blob = DriveApp.getFileById(id).getBlob(); 

  let new_file_data = Drive.Files.insert(
    { title: preconvert_blob.getName()}, 
    preconvert_blob, 
    { convert: true }
  );

  FILE_MOVE_TO(new_file_data.id);
  return new_file_data.id;
}

function FILE_MOVE_TO (file_id) {
  let movedto_folder = DriveApp.getFolderById(STORE_FOLDER);
  let move_file = DriveApp.getFileById(file_id);
  move_file.moveTo(movedto_folder);
}