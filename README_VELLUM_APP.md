# Vellum - Digital Graphic Novel Creation and Publishing Platform

Vellum is a comprehensive SaaS platform that empowers creators to design, publish, and monetize graphic novels and illustrated stories. With sophisticated content creation tools, flexible publishing models, and integrated payment processing, Vellum provides everything creators need to build a sustainable creative business.

🌐 **Live at**: [https://app.projectvellum.com](https://app.projectvellum.com)

## 🚀 Key Features

### For Creators
- **Visual Panel Editor**: Design comics with flexible 3x3 and 4x4 dual-grid layouts
- **Story Editor**: Write illustrated narratives with rich text formatting
- **Template System**: Save and reuse your favorite panel layouts
- **Image Management**: Automatic optimization and cloud storage for all assets
- **Publishing Control**: Choose when and how your content is released

### For Readers
- **Responsive Reader**: Optimized viewing experience on any device
- **Progressive Access**: Unlock content through purchases or subscriptions
- **Personal Library**: Track reading progress across all your content
- **Offline Support**: Download content for reading anywhere

### Monetization Options
- **Individual Sales**: Sell projects as one-time purchases
- **Subscriptions**: Build recurring revenue with subscriber benefits
- **Trickle Publishing**: Release content gradually to maximize engagement
- **Early Access**: Reward subscribers with preview content

## 🛠️ Technology Stack

### Backend
- **Framework**: FastAPI (Python 3.13+)
- **Database**: Azure MySQL with SQLAlchemy ORM
- **Storage**: Azure Blob Storage for images
- **Authentication**: JWT with secure token management
- **Payments**: Stripe integration
- **Background Jobs**: Celery + Redis
- **Email**: Resend with HTML templates

### Frontend
- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite
- **UI Library**: Material-UI v7
- **State Management**: Zustand + Context API
- **Editor**: TipTap for rich text
- **Graphics**: Three.js for effects

### Infrastructure
- **Cloud Platform**: Microsoft Azure
- **Container Orchestration**: Azure Container Apps
- **CI/CD**: GitHub Actions with automated deployments
- **Monitoring**: Application Insights
- **Security**: Azure Key Vault for secrets

## Quick Start

### Prerequisites
- Python 3.13+
- Node.js 18+
- MySQL 8.0+
- Redis (for Celery)
- Azure CLI (for deployment)

### Backend Setup

1. Create virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Configure environment:
```bash
cp .env.example .env
# Edit .env with your database credentials and settings
```

4. Run migrations:
```bash
alembic upgrade head
```

5. Start the backend server:
```bash
python run.py
# Backend will run on http://localhost:8019 by default
```

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment:
```bash
cp .env.example .env
# Edit .env if needed (default API URL is http://localhost:8019)
```

4. Start the development server:
```bash
npm run dev
# Frontend will run on http://localhost:3019 by default
```

## Custom Port Configuration

The application uses custom ports to avoid conflicts:
- Backend: `8019` (configurable via `PORT` in `.env`)
- Frontend: `3019` (configurable via `VITE_PORT` in `frontend/.env`)

See [README_PORTS.md](./README_PORTS.md) for detailed port configuration instructions.

## Project Structure

```
vellum/
├── app/                    # Backend FastAPI application
│   ├── api/               # API endpoints
│   ├── core/              # Core configuration and security
│   ├── crud/              # Database CRUD operations
│   ├── models/            # SQLAlchemy models
│   └── schemas/           # Pydantic schemas
├── frontend/              # React frontend application
│   ├── src/
│   │   ├── api/          # API client modules
│   │   ├── components/   # React components
│   │   ├── pages/        # Page components
│   │   ├── store/        # State management (Zustand)
│   │   └── theme/        # Material-UI theme configuration
├── tests/                 # Backend tests
├── infrastructure/        # Azure deployment scripts
└── specification/         # Project specifications
```

## 📊 Platform Architecture

### Publishing Models
Vellum supports multiple content delivery strategies:

1. **Global Trickle**: Simultaneous scheduled releases to all users
2. **User Trickle**: Individual reading queues based on user start time
3. **Full Drop**: Immediate complete access upon purchase
4. **Subscription-Only**: Exclusive content for subscribers

### Content Types
- **Graphic Novels**: Panel-based visual storytelling with speech bubbles
- **Illustrated Stories**: Text-driven narratives with integrated artwork
- **Hybrid Projects**: Combine both formats in a single project

### Security & Compliance
- **PCI DSS Compliant**: Secure payment processing with Stripe
- **Data Protection**: Encrypted storage and transmission
- **Access Control**: Role-based permissions system
- **Input Validation**: Comprehensive sanitization and validation
- **Azure Key Vault**: Secure secrets management

## Development

### Running Tests

Backend tests:
```bash
pytest
```

Frontend tests:
```bash
cd frontend
npm test
```

### Code Quality

Backend linting:
```bash
ruff check .
```

Frontend linting:
```bash
cd frontend
npm run lint
```

## 🚀 Deployment

Vellum uses a modern CI/CD pipeline with multiple environments:

### Environments
- **Development**: Local development with hot reload
- **Test**: [https://test.projectvellum.com](https://test.projectvellum.com)
- **Production**: [https://app.projectvellum.com](https://app.projectvellum.com)

### Deployment Pipeline
1. **Automated Testing**: Unit, integration, and security tests
2. **Docker Build**: Multi-stage builds with layer caching
3. **Container Registry**: Push to Azure Container Registry
4. **Container Apps**: Deploy with zero-downtime updates
5. **Health Checks**: Automated verification of deployment

### Infrastructure as Code
All infrastructure is defined using Azure Bicep templates:
- Container Apps with auto-scaling
- MySQL Flexible Server
- Blob Storage with CDN
- Redis Cache
- Key Vault for secrets
- Application Insights monitoring

See [infrastructure/README.md](./infrastructure/README.md) for detailed deployment instructions.

## API Documentation

When the backend is running, API documentation is available at:
- Swagger UI: http://localhost:8019/api/v1/docs
- ReDoc: http://localhost:8019/api/v1/redoc

## 📈 Performance & Optimization

### Deployment Optimization
- **Build Caching**: ~50% faster deployments with Docker layer caching
- **Parallel Deployments**: All services deploy simultaneously
- **Health Check Optimization**: Smart retries for faster verification

### Content Delivery
- **Image Optimization**: Automatic compression and format conversion
- **Progressive Loading**: Content loads as users scroll
- **CDN Integration**: Global content delivery through Azure
- **Browser Caching**: Smart cache headers for static assets

### Database Performance
- **Query Optimization**: Indexed queries for fast lookups
- **Connection Pooling**: Efficient database connection management
- **Read Replicas**: Scale read operations independently

## 🧪 Testing Strategy

### Coverage
- **Unit Tests**: Core business logic validation
- **Integration Tests**: API endpoint verification
- **E2E Tests**: Critical user journey validation
- **Security Tests**: Vulnerability scanning with bandit

### Continuous Integration
- Pre-commit hooks for code quality
- Automated test runs on pull requests
- Security scanning in CI pipeline
- Performance regression testing

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](./CONTRIBUTING.md) for details.

### Development Workflow
1. Fork the repository
2. Create a feature branch
3. Make your changes with tests
4. Submit a pull request

## 📄 License

Copyright (c) 2025 Vellum. All rights reserved.

## 🙏 Acknowledgments

Built with love by the Vellum team using:
- FastAPI for the powerful backend framework
- React for the dynamic frontend
- Azure for reliable cloud infrastructure
- And countless open-source libraries that make this possible
