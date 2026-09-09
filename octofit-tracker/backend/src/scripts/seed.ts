import mongoose from 'mongoose'
import { connectionString } from '../config/database.js'
import { Activity } from '../models/Activity.js'
import { Leaderboard } from '../models/Leaderboard.js'
import { Team } from '../models/Team.js'
import { User } from '../models/User.js'
import { Workout } from '../models/Workout.js'

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    console.log('Seed the octofit_db database with test data')
    await mongoose.connect(connectionString)

    console.log('Connected to octofit_db')

    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      Leaderboard.deleteMany({}),
      Workout.deleteMany({}),
    ])

    await User.insertMany([
      {
        username: 'alex-rivera',
        email: 'alex.rivera@example.com',
        firstName: 'Alex',
        lastName: 'Rivera',
        age: 29,
        fitnessGoal: 'Build endurance for a spring half marathon',
      },
      {
        username: 'maya-chen',
        email: 'maya.chen@example.com',
        firstName: 'Maya',
        lastName: 'Chen',
        age: 34,
        fitnessGoal: 'Improve strength and mobility',
      },
      {
        username: 'jordan-kim',
        email: 'jordan.kim@example.com',
        firstName: 'Jordan',
        lastName: 'Kim',
        age: 26,
        fitnessGoal: 'Stay consistent with weekday workouts',
      },
    ])

    await Team.insertMany([
      {
        name: 'Trail Blazers',
        motto: 'Climb steady, finish strong',
        memberCount: 8,
        weeklyGoalMinutes: 1800,
      },
      {
        name: 'Core Crew',
        motto: 'Form first, progress always',
        memberCount: 6,
        weeklyGoalMinutes: 1320,
      },
      {
        name: 'Lunch Lap Legends',
        motto: 'Move before the inbox wins',
        memberCount: 10,
        weeklyGoalMinutes: 1500,
      },
    ])

    await Activity.insertMany([
      {
        user: 'alex-rivera',
        type: 'Outdoor run',
        durationMinutes: 48,
        caloriesBurned: 520,
        completedAt: new Date('2026-09-05T06:45:00.000Z'),
      },
      {
        user: 'maya-chen',
        type: 'Strength training',
        durationMinutes: 55,
        caloriesBurned: 390,
        completedAt: new Date('2026-09-06T17:30:00.000Z'),
      },
      {
        user: 'jordan-kim',
        type: 'Cycling',
        durationMinutes: 42,
        caloriesBurned: 460,
        completedAt: new Date('2026-09-07T12:15:00.000Z'),
      },
    ])

    await Leaderboard.insertMany([
      {
        username: 'maya-chen',
        rank: 1,
        points: 2480,
        streakDays: 21,
      },
      {
        username: 'alex-rivera',
        rank: 2,
        points: 2315,
        streakDays: 14,
      },
      {
        username: 'jordan-kim',
        rank: 3,
        points: 1990,
        streakDays: 9,
      },
    ])

    await Workout.insertMany([
      {
        title: 'Tempo Builder Run',
        category: 'Cardio',
        difficulty: 'Intermediate',
        durationMinutes: 35,
        equipment: ['Running shoes'],
      },
      {
        title: 'Desk Break Mobility',
        category: 'Mobility',
        difficulty: 'Beginner',
        durationMinutes: 12,
        equipment: ['Yoga mat'],
      },
      {
        title: 'Full Body Dumbbell Circuit',
        category: 'Strength',
        difficulty: 'Intermediate',
        durationMinutes: 40,
        equipment: ['Dumbbells', 'Bench'],
      },
    ])

    console.log('Database seeding complete')
    await mongoose.disconnect()
  } catch (error) {
    console.error('Error seeding database:', error)
    process.exit(1)
  }
}

seedDatabase()
