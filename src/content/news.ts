import type { Language } from "@/context/LanguageContext";

type NewsCategory = {
  en: string;
  kr: string;
};

type NewsTranslation = {
  title: string;
  excerpt: string;
  body: string[];
};

export type NewsPost = {
  slug: string;
  publishedAt: string;
  category: NewsCategory;
  featured?: boolean;
  translations: Record<Language, NewsTranslation>;
};

const newsPosts: NewsPost[] = [
  {
    slug: "qg3030-phase-2-readiness",
    publishedAt: "2026-03-12",
    category: {
      en: "Pipeline",
      kr: "파이프라인"
    },
    featured: true,
    translations: {
      en: {
        title: "QG3030 Advances Toward Phase 2 Readiness",
        excerpt: "Qgenetics has completed key preparation milestones to support the next clinical stage of QG3030.",
        body: [
          "Qgenetics has completed the core operational milestones required to advance QG3030 toward its next clinical stage. The team has aligned manufacturing, documentation, and clinical operations to support the upcoming development phase.",
          "QG3030 remains a flagship oral osteoanabolic program within the company's Soft Aging pipeline. Recent work has focused on maintaining development speed while protecting quality and regulatory discipline.",
          "Further updates will be shared as enrollment timelines and external collaboration milestones are finalized."
        ]
      },
      kr: {
        title: "QG3030, 임상 2상 준비 단계 진입",
        excerpt: "큐제네틱스는 QG3030의 다음 임상 단계 진입을 위한 핵심 준비 마일스톤을 완료했습니다.",
        body: [
          "큐제네틱스는 QG3030의 다음 임상 단계 진입을 위해 필요한 주요 운영 마일스톤을 완료했습니다. 제조, 문서화, 임상 운영 체계를 정렬해 다음 개발 단계에 대응할 수 있도록 준비를 마쳤습니다.",
          "QG3030은 소프트에이징 파이프라인의 핵심 경구용 골형성 촉진 프로그램으로 자리잡고 있습니다. 최근에는 개발 속도를 유지하면서도 품질과 규제 대응의 완성도를 높이는 데 집중했습니다.",
          "향후 등록 일정과 외부 협력 마일스톤이 확정되는 대로 추가 소식을 안내할 예정입니다."
        ]
      }
    }
  },
  {
    slug: "soft-aging-platform-update",
    publishedAt: "2026-02-24",
    category: {
      en: "Platform",
      kr: "플랫폼"
    },
    translations: {
      en: {
        title: "AI-MSC Platform Update Highlights Translational Progress",
        excerpt: "The company has expanded platform validation work linking stem-cell differentiation control with disease-focused development.",
        body: [
          "Qgenetics has continued to extend the translational scope of its AI-MSC platform through disease-focused validation work. The latest update emphasizes tighter integration between target selection, medicinal chemistry, and differentiation control.",
          "This work is intended to strengthen downstream development efficiency across osteoporosis, osteoarthritis, and metabolic indications connected to the Soft Aging strategy.",
          "The company expects these platform improvements to support both internal pipeline expansion and future partnering discussions."
        ]
      },
      kr: {
        title: "AI-MSC 플랫폼 업데이트, 전임상 연계 성과 확대",
        excerpt: "줄기세포 분화 제어 기술과 질환 중심 개발을 연결하는 플랫폼 검증 범위가 확대되었습니다.",
        body: [
          "큐제네틱스는 질환 중심 검증 작업을 통해 AI-MSC 플랫폼의 전임상 연계 범위를 지속적으로 확장하고 있습니다. 이번 업데이트는 타깃 선정, 의약화학, 분화 제어 간의 연결성을 한층 강화한 점이 핵심입니다.",
          "이러한 작업은 골다공증, 퇴행성 관절염, 대사성 적응증 등 소프트에이징 전략과 연결된 후속 개발 효율을 높이기 위한 것입니다.",
          "회사는 이번 플랫폼 고도화가 내부 파이프라인 확장뿐 아니라 향후 파트너링 논의에도 긍정적으로 작용할 것으로 기대하고 있습니다."
        ]
      }
    }
  },
  {
    slug: "corporate-briefing-center-opened",
    publishedAt: "2026-03-01",
    category: {
      en: "Corporate",
      kr: "기업"
    },
    translations: {
      en: {
        title: "Corporate Briefing Channel in Preparation for Investors and Partners",
        excerpt: "Qgenetics is preparing a structured briefing channel to share company updates, pipeline direction, and collaboration information.",
        body: [
          "Qgenetics is preparing a corporate briefing channel so that investors, strategic partners, and industry stakeholders can more clearly understand the company's growth direction.",
          "This briefing structure is being designed to organize key company updates, development priorities, and partnering information into a more coherent communications flow.",
          "Once ready, the channel is expected to support more consistent and transparent delivery of future news, notices, and milestone updates."
        ]
      },
      kr: {
        title: "투자자 및 파트너 대상 기업 브리핑 채널 준비 중",
        excerpt: "기업 업데이트, 파이프라인 방향성, 협력 정보를 전달하는 구조화된 브리핑 채널을 준비하고 있습니다.",
        body: [
          "큐제네틱스는 투자자, 전략적 파트너, 업계 이해관계자가 회사의 성장 방향을 보다 명확히 파악할 수 있도록 기업 브리핑 채널을 준비하고 있습니다.",
          "이 브리핑 채널은 주요 기업 업데이트, 개발 우선순위, 파트너링 관련 핵심 정보를 하나의 흐름으로 정리해 전달하는 구조를 목표로 하고 있습니다.",
          "향후 뉴스, 공지, 주요 마일스톤을 보다 일관되고 투명하게 전달하기 위한 기반으로 활용할 예정입니다."
        ]
      }
    }
  }
];

export function getNewsPosts() {
  return [...newsPosts].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getFeaturedNewsPosts(limit = 3) {
  return getNewsPosts()
    .filter((post) => post.featured)
    .concat(getNewsPosts().filter((post) => !post.featured))
    .slice(0, limit);
}

export function getNewsPostBySlug(slug: string) {
  return newsPosts.find((post) => post.slug === slug);
}
