# ReviewIQ — Adaptive AI for Smarter Travel Reviews

**2026 Wharton Hack-AI-thon × Expedia Group**

## What is ReviewIQ?

ReviewIQ is an AI-powered tool that detects information gaps in hotel reviews and generates smart, personalized follow-up questions to fill those gaps. It sits at the end of the review submission flow, asking travelers 1–2 targeted questions via text or voice input, while keeping the experience smooth and low-friction.

## The Problem

Hotel reviews are rich but inconsistent. Some topics are over-covered, some are missing entirely, and data gets stale fast. Static review prompts don't adapt — every guest gets the same questions regardless of what's already known or missing about a property.

## Our Solution

ReviewIQ uses a **multi-signal gap detection engine** that:

1. **Analyzes** existing reviews across 16 topic categories (cleanliness, noise, Wi-Fi, accessibility, etc.)
2. **Detects** rating sub-category null rates (e.g., 100% of guests skip "check-in" and "value" ratings)
3. **Scores** gaps by severity using weighted priority: missing data × 10, low coverage × 8, staleness × 9
4. **Generates** 1–2 contextual follow-up questions that avoid topics the reviewer already covered
5. **Collects** answers via conversational chat UI with voice input (Web Speech API) + quick-tap chips
6. **Visualizes** the reviewer's impact with animated before/after completeness metrics

## Key Features

- **Data-driven gap detection** from real Expedia datasets (13 properties, 5,999 reviews)
- **Contextual question avoidance** — reads the user's review to skip redundant topics
- **Multimodal input** — voice dictation + text + quick-tap answer chips
- **Animated radar chart** showing topic coverage with color-coded severity
- **Impact dashboard** with progress rings and before/after comparison

## Tech Stack

- **Frontend**: React + Vite (deployed on Vercel)
- **Gap Engine**: Client-side NLP with keyword extraction + statistical analysis
- **Voice**: Web Speech API (Chrome, Safari, Edge)
- **Data**: Expedia challenge datasets (Description_PROC.csv + Reviews_PROC.csv) embedded as JSON

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Data Sources

- `Description_PROC.csv` — Property metadata (13 properties, amenities, policies)
- `Reviews_PROC.csv` — Guest reviews (5,999 reviews with ratings and text)
- Data provided by Expedia Group for the 2026 Wharton Hack-AI-thon

## Team

Penn Kids — University of Pennsylvania
