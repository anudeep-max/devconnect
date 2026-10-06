# DevConnect — Day 2

## Goal
Design the PostgreSQL database schema for DevConnect.

## Planned Models
- User
- Project
- BlogPost
- Skill
- UserSkill
- Connection
- Endorsement
- Notification

## Relationships
- One User → many Projects
- One User → many BlogPosts
- Users ↔ Skills through UserSkill
- Users ↔ Users through Connection
- User endorsements reference an endorser, receiver, and skill
- Users receive Notifications

## Next Steps
1. Define Prisma models
2. Define relationships and constraints
3. Create Prisma migration
4. Apply schema to Neon PostgreSQL
5. Generate Prisma Client
6. Test database operations
