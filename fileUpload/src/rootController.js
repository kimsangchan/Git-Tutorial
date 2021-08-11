var fs = require('fs');

export const main = (req, res) => {
	//const videos = await Video.find({});
	//console.log(videos);
  	return res.render("main", { pageTitle: "Main"});
};

export const postUpload = (req, res) => {	
	const {path: fileUrl} = req.file;
	console.log("file: ", req.file);
	//Directory 존재 여부 체크
	const directory = fs.existsSync("./uploads")//디렉토리 경로 입력

	//Directory가 존재 한다면 true 없다면 false
	console.log("Boolan : ", directory);
	//비동기 방식으로 파일 정보 읽기
	fs.readFile('./'+fileUrl, 'utf8', (err, data) => {
		if (err) throw err;
		
		console.log(data); // 파일 데이터 정보
		
		return res.render("upload", { pageTitle: "Text to HTML", text: data});
	});
	
	
	
	
};