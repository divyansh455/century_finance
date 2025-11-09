# Coursera-like LMS Features

This document outlines the new Coursera-inspired features added to the Gradus LMS platform.

## New Features

### 1. Video Progress Tracking
**Backend:** `backend/src/modules/video-progress/`
- Tracks video watch time and completion status
- Resumes videos from last watched position
- Marks videos as completed when 90% watched

**API Endpoints:**
- `PUT /api/v1/courses/:courseId/lessons/:lessonId/videos/:videoId/progress` - Update progress
- `GET /api/v1/courses/:courseId/progress` - Get all video progress for a course
- `GET /api/v1/courses/:courseId/lessons/:lessonId/videos/:videoId/progress` - Get specific video progress

**Frontend:** `apps/learner/src/components/VideoPlayer.tsx`
- Auto-saves progress every 5 seconds
- Resumes from last position on reload

### 2. Certificate Generation & Verification
**Backend:** `backend/src/modules/certificates/`
- Generates unique certificate numbers
- Creates verification URLs
- Tracks certificate issuance

**Models:** `backend/src/models/Certificate.js`

**API Endpoints:**
- `POST /api/v1/enrollments/:enrollmentId/certificate` - Generate certificate (requires 100% completion)
- `GET /api/v1/certificates/verify/:certificateNumber` - Public verification
- `GET /api/v1/certificates/my` - Get user's certificates

**Frontend:** `apps/learner/src/pages/Certificates.tsx`

### 3. Course Recommendations
**Backend:** `backend/src/modules/recommendations/`
- Personalized recommendations based on completed courses and tags
- Popular courses based on enrollment count

**API Endpoints:**
- `GET /api/v1/recommendations` - Personalized recommendations (authenticated)
- `GET /api/v1/courses/popular` - Popular courses (public)

**Frontend:** `apps/learner/src/pages/Recommendations.tsx`

### 4. Specializations (Learning Paths)
**Backend:** `backend/src/modules/specializations/`
- Group multiple courses into learning paths
- Track estimated completion time
- Support beginner/intermediate/advanced levels

**Models:** `backend/src/models/Specialization.js`

**API Endpoints:**
- `POST /api/v1/specializations` - Create specialization (instructor/admin)
- `GET /api/v1/specializations` - List all specializations
- `GET /api/v1/specializations/:id` - Get specialization details
- `PATCH /api/v1/specializations/:id` - Update specialization

**Frontend:** `apps/admin/src/pages/Specializations.tsx`

### 5. Peer Review System
**Backend:** `backend/src/modules/peer-reviews/`
- Automatic peer review assignment
- Rubric-based scoring
- Anonymous peer feedback

**Models:** `backend/src/models/PeerReview.js`

**API Endpoints:**
- `POST /api/v1/assessments/:assessmentId/peer-reviews/assign` - Assign peer reviews (instructor)
- `PUT /api/v1/peer-reviews/:reviewId` - Submit peer review
- `GET /api/v1/peer-reviews/my` - Get reviews assigned to me
- `GET /api/v1/submissions/:submissionId/reviews` - Get reviews for a submission

## Setup Instructions

1. **Install dependencies** (already done if you ran `npm install --workspaces`)

2. **Database models** are automatically registered when the server starts

3. **Start the backend:**
   ```bash
   cd lms/backend
   npm run dev
   ```

4. **Start the learner app:**
   ```bash
   cd lms/apps/learner
   npm run dev
   ```

5. **Start the admin app:**
   ```bash
   cd lms/apps/admin
   npm run dev
   ```

## Usage Examples

### Generate a Certificate
```javascript
// After completing a course (100% progress)
POST /api/v1/enrollments/{enrollmentId}/certificate
Authorization: Bearer {token}

Response:
{
  "data": {
    "certificateNumber": "GRADUS-ABC123XYZ",
    "verificationUrl": "https://api.gradusindia.in/verify/GRADUS-ABC123XYZ",
    "issuedAt": "2024-01-15T10:30:00Z"
  }
}
```

### Track Video Progress
```javascript
// Update progress every 5 seconds
PUT /api/v1/courses/{courseId}/lessons/{lessonId}/videos/{videoId}/progress
{
  "watchedSeconds": 120,
  "totalSeconds": 600,
  "lastPosition": 120
}
```

### Create a Specialization
```javascript
POST /api/v1/specializations
{
  "title": "Full Stack Web Development",
  "description": "Master frontend and backend development",
  "courses": ["courseId1", "courseId2", "courseId3"],
  "estimatedMonths": 6,
  "level": "intermediate"
}
```

### Assign Peer Reviews
```javascript
POST /api/v1/assessments/{assessmentId}/peer-reviews/assign
{
  "reviewsPerSubmission": 3
}
```

## Key Differences from Basic LMS

1. **Video Intelligence** - Tracks exact watch time, not just completion
2. **Verified Certificates** - Unique numbers with public verification
3. **Smart Recommendations** - ML-ready recommendation engine
4. **Learning Paths** - Bundle courses into career-focused specializations
5. **Peer Learning** - Automated peer review assignment and grading

## Next Steps

- Add PDF certificate generation with templates
- Implement ML-based recommendation algorithm
- Add specialization progress tracking
- Create peer review rubric builder UI
- Add video analytics dashboard
- Implement certificate sharing to LinkedIn
