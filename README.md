# VectorShift Studio - AI Pipeline Builder

A modern, beautiful AI pipeline builder with a sleek dark theme and glassmorphism design. This project provides a flexible and reusable node abstraction for building complex AI workflows.

## ✨ Features

### 🎨 Modern Design
- **Dark Theme**: Sleek dark interface with purple and pink gradients
- **Glassmorphism**: Beautiful glass-like effects with backdrop blur
- **Smooth Animations**: Hover effects, transitions, and micro-interactions
- **Responsive Layout**: Optimized for different screen sizes

### 🔧 Core Functionality
- **Drag & Drop**: Intuitive node-based pipeline building
- **Real-time Preview**: See your pipeline structure as you build
- **API Integration**: Test API calls with modal feedback
- **Auto-closing Modals**: Results display for 3-4 seconds automatically

### 📊 Node Categories

#### Core Nodes (Required)
- **Data Input**: Entry point for data sources
- **AI Model**: LLM integration and processing
- **Data Output**: Final output destination
- **Text Template**: Dynamic text with variable support

#### Data Processing
- **Number Input**: Numeric data handling
- **Text Merge**: String concatenation operations
- **Calculator**: Mathematical operations
- **Condition**: Boolean logic and filtering

#### Utilities
- **Color Picker**: Color selection and manipulation
- **Data Transform**: Format conversion and transformation
- **API Connector**: External API integration
- **Filter**: Data filtering and validation
- **Processor**: Data processing and enrichment
- **Trigger**: Pipeline automation and scheduling

## 🚀 How to Run

### Frontend
```bash
cd frontend
npm install
npm start
```
The frontend will start on `http://localhost:3000`

### Backend
```bash
cd backend
uvicorn main:app --reload
```
The backend will start on `http://localhost:8000`

## 🎯 Key Features

### Text Node API Testing
- Click "Test API Call" button in any Text Template node
- Results display in a beautiful modal
- Auto-closes after 3.5 seconds
- Shows detailed API response or error messages

### Modern UI Components
- **Glassmorphism Cards**: Semi-transparent nodes with blur effects
- **Gradient Borders**: Beautiful color transitions
- **Hover Effects**: Interactive feedback on all elements
- **Smooth Transitions**: 200ms animations throughout

### Enhanced Node System
- **Category-based Organization**: Nodes grouped by functionality
- **Color-coded Categories**: Visual distinction between node types
- **Dynamic Handles**: Automatic input/output port generation
- **Variable Support**: Text templates with `{{variable}}` syntax

## 🛠️ Technologies Used

### Frontend
- **React 18**: Modern React with hooks
- **React Flow**: Professional node-based UI
- **NextUI**: Beautiful component library
- **TailwindCSS**: Utility-first CSS framework
- **Framer Motion**: Smooth animations
- **React Icons**: Comprehensive icon library
- **Zustand**: Lightweight state management

### Backend
- **FastAPI**: Modern Python web framework
- **NetworkX**: Graph analysis and DAG validation

## 🎨 Design System

### Color Palette
- **Primary**: Purple (#8B5CF6) to Pink (#EC4899) gradients
- **Background**: Dark slate (#0F172A) with purple accents
- **Text**: White with opacity variations
- **Borders**: Semi-transparent white with blur effects

### Typography
- **Headers**: Bold, white text with proper hierarchy
- **Body**: Medium weight with good contrast
- **Labels**: Smaller, muted text for secondary information

### Animations
- **Hover Effects**: Scale and glow on interactive elements
- **Transitions**: 200ms ease-in-out for smooth interactions
- **Loading States**: Pulsing animations for active elements
- **Modal Animations**: Fade-in with scale effects

## 🔮 Future Enhancements

- [ ] Real-time collaboration features
- [ ] Advanced node customization
- [ ] Pipeline templates and sharing
- [ ] Enhanced error handling and validation
- [ ] Performance optimizations
- [ ] Mobile-responsive design improvements
- [ ] Dark/light theme toggle
- [ ] Custom node creation interface

## 📝 License

This project is part of the VectorShift Frontend Technical Assessment.





