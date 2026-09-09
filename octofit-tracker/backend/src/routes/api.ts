import { Router } from 'express'
import { Activity } from '../models/Activity.js'
import { Leaderboard } from '../models/Leaderboard.js'
import { Team } from '../models/Team.js'
import { User } from '../models/User.js'
import { Workout } from '../models/Workout.js'

const router = Router()

router.get('/users/', async (_request, response, next) => {
  try {
    const users = await User.find().sort({ username: 1 })
    response.json({ users })
  } catch (error) {
    next(error)
  }
})

router.get('/teams/', async (_request, response, next) => {
  try {
    const teams = await Team.find().sort({ name: 1 })
    response.json({ teams })
  } catch (error) {
    next(error)
  }
})

router.get('/activities/', async (_request, response, next) => {
  try {
    const activities = await Activity.find().sort({ completedAt: -1 })
    response.json({ activities })
  } catch (error) {
    next(error)
  }
})

router.get('/leaderboard/', async (_request, response, next) => {
  try {
    const leaderboard = await Leaderboard.find().sort({ rank: 1 })
    response.json({ leaderboard })
  } catch (error) {
    next(error)
  }
})

router.get('/workouts/', async (_request, response, next) => {
  try {
    const workouts = await Workout.find().sort({ title: 1 })
    response.json({ workouts })
  } catch (error) {
    next(error)
  }
})

export default router