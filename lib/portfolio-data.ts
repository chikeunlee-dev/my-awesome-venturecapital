export const portfolioCompanies = [
  {
    slug: "neuralflow",
    name: "NeuralFlow",
    category: "AI / Machine Learning",
    description: "Enterprise AI platform automating complex business workflows with advanced natural language processing.",
    stage: "Series B",
    extendedContent: {
      overview: "NeuralFlow는 복잡한 비즈니스 워크플로우를 고급 자연어 처리 기술로 자동화하는 엔터프라이즈 AI 플랫폼입니다.",
      about: "NeuralFlow는 기업이 문서 처리, 고객 지원, 의사결정 지원 등 다양한 업무를 AI로 자동화할 수 있도록 지원합니다. 자연어 처리(NLP) 기술을 핵심으로 하여 한국어, 영어 등 다국어를 지원하며, 기존 비즈니스 시스템과의 원활한 통합이 가능합니다.",
      highlights: [
        "고급 자연어 처리(NLP) 엔진으로 문서 분석 및 자동 분류",
        "복잡한 비즈니스 워크플로우 자동화",
        "엔터프라이즈급 보안 및 규정 준수",
        "기존 시스템과의 API 기반 통합",
      ],
    },
  },
  {
    slug: "greengrid",
    name: "GreenGrid",
    category: "CleanTech",
    description: "Next-generation energy management system optimizing renewable energy distribution for smart cities.",
    stage: "Series A",
    extendedContent: {
      overview: "스마트 시티를 위한 재생 에너지 분배 최적화 차세대 에너지 관리 시스템.",
      about: "GreenGrid는 태양광, 풍력 등 재생 에너지원의 효율적인 분배와 관리를 위한 플랫폼을 제공합니다.",
      highlights: [
        "재생 에너지 분배 최적화",
        "스마트 시티 통합 솔루션",
        "실시간 에너지 모니터링",
      ],
    },
  },
  {
    slug: "medsync",
    name: "MedSync",
    category: "HealthTech",
    description: "Digital health platform connecting patients with specialists through AI-powered diagnostics and telemedicine.",
    stage: "Series C",
    extendedContent: {
      overview: "AI 기반 진단과 원격 의료로 환자와 전문의를 연결하는 디지털 헬스 플랫폼.",
      about: "MedSync는 의료 접근성을 혁신하고 환자-의사 연결을 개선하는 디지털 헬스케어 솔루션을 제공합니다.",
      highlights: [
        "AI 기반 진단 지원",
        "원격 의료(텔레메디슨) 서비스",
        "환자-전문의 매칭 플랫폼",
      ],
    },
  },
  {
    slug: "quantumledger",
    name: "QuantumLedger",
    category: "FinTech",
    description: "Blockchain-based financial infrastructure enabling instant cross-border settlements for institutions.",
    stage: "Series A",
    extendedContent: {
      overview: "기관 간 즉시 국경 간 결제를 가능하게 하는 블록체인 기반 금융 인프라.",
      about: "QuantumLedger는 블록체인 기술을 활용하여 전통적인 국제 송금의 속도와 비용 문제를 해결합니다.",
      highlights: [
        "블록체인 기반 결제 인프라",
        "즉시 국경 간 결제",
        "기관 투자자 대상 B2B 솔루션",
      ],
    },
  },
  {
    slug: "aerovista",
    name: "AeroVista",
    category: "Aerospace",
    description: "Autonomous drone technology for industrial inspection and precision agriculture applications.",
    stage: "Seed",
    extendedContent: {
      overview: "산업 검사 및 정밀 농업용 자율 드론 기술.",
      about: "AeroVista는 산업 시설 검사, 농업 모니터링 등 다양한 분야에 활용되는 자율 비행 드론 솔루션을 개발합니다.",
      highlights: [
        "자율 비행 드론 기술",
        "산업 시설 검사 자동화",
        "정밀 농업 모니터링",
      ],
    },
  },
  {
    slug: "cybervault",
    name: "CyberVault",
    category: "Cybersecurity",
    description: "Zero-trust security platform protecting enterprise cloud infrastructure with AI-driven threat detection.",
    stage: "Series B",
    extendedContent: {
      overview: "AI 기반 위협 탐지로 엔터프라이즈 클라우드 인프라를 보호하는 제로 트러스트 보안 플랫폼.",
      about: "CyberVault는 Zero Trust 아키텍처와 AI 기반 위협 탐지를 결합하여 기업 클라우드 환경을 보호합니다.",
      highlights: [
        "제로 트러스트 보안 아키텍처",
        "AI 기반 위협 탐지",
        "엔터프라이즈 클라우드 보호",
      ],
    },
  },
] as const

export type CompanySlug = (typeof portfolioCompanies)[number]["slug"]

export function getCompanyBySlug(slug: string) {
  return portfolioCompanies.find((c) => c.slug === slug)
}
