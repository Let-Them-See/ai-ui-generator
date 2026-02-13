AI-Powered Deterministic UI Generator
Overview
A production-ready multi-agent AI system that transforms natural language instructions into predictable, safe UI layouts using a strictly controlled component library. Unlike conventional AI UI generators that produce arbitrary JSX with unpredictable outputs, this system enforces schema validation and component whitelisting to guarantee safety, consistency, and maintainability.

Architecture
User Prompt
    ↓
Planner Agent (Intent Analysis)
    ↓
Generator Agent (Schema Creation)
    ↓
Explainer Agent (Decision Transparency)
    ↓
Schema Validation (Safety Layer)
    ↓
Deterministic Renderer (UI Output)

Multi-Agent Design
The system deliberately separates reasoning across three specialized agents, ensuring no single LLM call controls the entire generation process:

1. Planner Agent
Interprets user intent and context
Designs optimal layout structure
Handles incremental modifications and version history
Makes high-level architectural decisions

2. Generator Agent
Converts plans into strict JSON schemas
Outputs only pre-approved component types
Enforces structural constraints
Ensures schema compliance

3. Explainer Agent
Documents layout decisions and rationale
Improves system transparency
Helps users understand generated structures
Facilitates debugging and iteration

This multi-agent approach satisfies the core requirement: A single LLM call is not acceptable.
Deterministic Component System
All UI generation relies on a fixed, auditable component registry. The renderer enforces this whitelist at runtime, blocking any unauthorized components.
Approved Components

Button - Actions and interactions
Card - Content containers
Input - Form fields
Navbar - Top navigation
Sidebar - Side navigation
Modal - Overlays and dialogs
Table - Tabular data
Chart - Data visualization

No arbitrary JSX or custom components are permitted.
Safety & Security
Protection Mechanisms

Prompt injection defense - Sanitizes and validates all user inputs
Markdown cleanup - Strips LLM formatting artifacts
Defensive props - Component properties validated against schemas
Strict parsing - Rejects malformed or suspicious schemas
No inline CSS - Prevents style injection attacks
Sandboxed execution - Zero external code execution
Component whitelisting - Hard-coded allowed component list

Iterative Editing
The system maintains UI state and supports incremental modifications by feeding existing schemas back to the Planner Agent.
Capabilities

Modify existing layouts without regeneration
Add or remove components selectively
Version control with rollback support
Context-aware updates that preserve user intent

Tech Stack

Next.js 14 - React framework with App Router
React 18 - UI rendering
TypeScript - Type safety and developer experience
Gemini 2.0 Flash API - Multi-agent LLM orchestration

How To Run
npm install
npm run dev

Open:
http://localhost:3000

API key reset on 1:30 IST