const { routerActions } = require('connected-react-router');
const Router = require('koa-router');
const { default: modules } = require('../../../../src/modules/index');
const authCtrl = require('./auth.ctrl');
const auth  = new Router();

auth.post('/register',authCtrl.register);
auth.post('/login',authCtrl.login);
auth.get('/check',authCtrl.check);
auth.post('/logout',authCtrl.logout);

module.exports = auth;