const express = require('express');

const router = express.Router();

const modulesRouter = require('./modules.router');
const mapcoordinatesRouter = require('./mapcoordinates.router');

router.use('/modules', modulesRouter);

router.use('/mapcoordinates', mapcoordinatesRouter);

const questionsRouter = require('./questions.router');
const allUsersRouter = require('./allUsers.router');
const qrRouter = require('./qr.router');

const possibleanswerRouter = require('./GameQuestionAnswerOptions.router');
const createUserProfilesRouter = require('./create-user-profiles.routes');
const createUserRolesRouter = require('./create-user-roles.routes');
const nextQuestion = require('./nextQuestions.router');
const gameInstancesRouter = require('./gameInstances.router');

router.use('/answer_choices', possibleanswerRouter);
router.use('/modules', modulesRouter);
router.use('/createUserProfiles', createUserProfilesRouter);
router.use('/createUserRoles', createUserRolesRouter);
router.use('/next_question', nextQuestion);
router.use('/questions', questionsRouter);
router.use('/allUsers', allUsersRouter);
router.use('/qr', qrRouter);
router.use('/gameInstances', gameInstancesRouter);

module.exports = router;
