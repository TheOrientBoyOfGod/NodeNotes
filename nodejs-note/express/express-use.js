var express=requrie('express')
var app=requrie();
app.use([path],fn1,fn2..),app.use([path],[fn1,fn2..]);
var router=express.Router();
express.static(root,[options]);
app.locals:app.locals.var;
app.mountpath:is mount path/sub express:the next express();example:app.use(['/adm*n', '/manager'], admin);
			var admin = express();
			admin.get('/', function (req, res) {
			  console.log(admin.mountpath); // [ '/adm*n', '/manager' ]
			  res.send('Admin Homepage');
			})
			var secret = express();
			secret.get('/', function (req, res) {
			  console.log(secret.mountpath); // /secr*t
			  res.send('Admin Secret');
			});
			admin.use('/secr*t', secret); // load the 'secret' router on '/secr*t', on the 'admin' sub app
			app.use(['/adm*n', '/manager'], admin); // load the 'admin' router on '/adm*n' and '/manager', on the parent app
app.on('mount', callback(parent));
app.all/get/delete/post/put/
boolean:app.disable(name);app.disabled(name);app.get(name);app.enable(name);app.enabled(name);
app.engine(ext, callback):
		app.engine('jade', require('jade').__express);
		app.engine('html', require('ejs').renderFile);

app.set(name, value);
name is the application settings:{
	case sensitive routing:boolean,
	'env':process.env.NODE_ENV(NODE_ENV/environment variable/development/production),
	'views':process.cwd()+"/views",
	'view cache':boolean,
	'view engine':extension,
	'trust proxy':
}
app.engine(extension,function (filepath,options,callback));
app.get(name);
app.listen(port, [hostname], [backlog], [callback]);

app.param(nameorarray,function (req,res,next,value){});param before get application
app.path():return the canonical the path of app;
app.render(view, [locals], function (err,html){});
app.route(path).all(fn).get(fn).post(fn)....;



Request:{
	req.param,
	req.params,
	req.originalUrl=req.baseUrl+req.path;
	req.app;get app Object;
	req.body,
	req.cookies;is cookies;
	req.fresh/req.state;
	req.hostname;
	req.ip;
	rep.ips;
	req.protocoal;
	req.query;
	req.route;
	req.secure;
	req.subdomains
	req.xhr;
	req.accepts(types)
};
Respons:{
	res.app;
	res.headersSent;
	res.locals;
	res.append(field [, value]);
	res.download(path [, filename] [, fn]);
	res.clearCookie(name [, options]);
	res.end([data] [, encoding]);
	res.format(object);
	res.get(field);
	res.json([body]);
	res.jsonp([body]);
	res.links(links);
	res.location(path);
	res.redirect([status,] path);
	res.render(view [, locals] [, callback]);
	res.send([body])
	res.json([body]);
	res.sendFile(path [, options] [, fn]);
	res.sendStatus(statusCode);
	res.set(field [, value]);
	res.type(type);
}