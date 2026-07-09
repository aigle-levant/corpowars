import { CompanyDefinition } from "../engine/schema/company";
import { CompanyId } from "../engine/schema/core";

export const Companies: Record<CompanyId, CompanyDefinition> = {
  envida: {
    id: "envida",
    name: "Envida",
    ticker: "ENVA",
    description: "Leader in GPU computing and AI infrastructure.",
    sector: "hardware",

    stats: {
      capital: 90,
      innovation: 98,
      influence: 60,
      trust: 82,
      marketShare: 78,
      resilience: 80,
      execution: 94,
    },

    passive: "cuda_ecosystem",

    moves: ["ai_hype", "gpu_launch", "rtx_101040", "earnings_beat"],

    tags: ["ai", "hardware", "gpu"],
  },

  pear: {
    id: "pear",
    name: "Pear",
    ticker: "PEAR",
    description:
      "Consumer technology giant with a tightly integrated ecosystem.",
    sector: "consumer",

    stats: {
      capital: 95,
      innovation: 88,
      influence: 82,
      trust: 96,
      marketShare: 85,
      resilience: 92,
      execution: 90,
    },

    passive: "ecosystem_lockin",

    moves: [
      "product_launch",
      "services_growth",
      "marketing_campaign",
      "os_lock",
    ],
    tags: ["consumer", "hardware", "ecosystem"],
  },

  sigma: {
    id: "sigma",
    name: "Sigma",
    ticker: "SIGM",
    description: "Collaborative design platform focused on creativity.",
    sector: "design",

    stats: {
      capital: 72,
      innovation: 95,
      influence: 65,
      trust: 90,
      marketShare: 70,
      resilience: 74,
      execution: 92,
    },

    passive: "design_first",

    moves: [
      "real_time_collaboration",
      "community_templates",
      "plugin_ecosystem",
      "prototype_launch",
    ],

    tags: ["design", "saas", "collaboration"],
  },

  tabx: {
    id: "tabx",
    name: "TabX",
    ticker: "TABX",
    description:
      "Private aerospace company pushing reusable launch technology.",
    sector: "aerospace",

    stats: {
      capital: 84,
      innovation: 99,
      influence: 80,
      trust: 78,
      marketShare: 76,
      resilience: 88,
      execution: 87,
    },

    passive: "rapid_iteration",

    moves: [
      "starship_launch",
      "rocket_reuse",
      "to_the_moon",
      "government_contract",
    ],

    tags: ["space", "launch", "engineering"],
  },

  daintree: {
    id: "daintree",
    name: "Daintree",
    ticker: "DNTR",
    description: "Global commerce and cloud computing giant.",
    sector: "commerce",

    stats: {
      capital: 97,
      innovation: 84,
      influence: 90,
      trust: 80,
      marketShare: 94,
      resilience: 95,
      execution: 91,
    },

    passive: "logistics_network",

    moves: ["membership", "dws", "same_day_delivery", "price_cut"],

    tags: ["commerce", "cloud", "logistics"],
  },

  ringring: {
    id: "ringring",
    name: "RingRing",
    ticker: "RING",
    description:
      "Short-form video platform driven by recommendation algorithms.",
    sector: "social_media",

    stats: {
      capital: 82,
      innovation: 89,
      influence: 94,
      trust: 68,
      marketShare: 90,
      resilience: 73,
      execution: 87,
    },

    passive: "viral_algorithm",

    moves: ["go_viral", "infinite_scroll", "creator_fund", "lets_dance"],

    tags: ["social", "media", "algorithm"],
  },

  vansys: {
    id: "vansys",
    name: "Vansys",
    ticker: "VANY",
    description: "Global IT consulting and digital transformation company.",
    sector: "services",

    stats: {
      capital: 88,
      innovation: 75,
      influence: 79,
      trust: 89,
      marketShare: 74,
      resilience: 91,
      execution: 93,
    },

    passive: "enterprise_expertise",

    moves: [
      "digital_transformation",
      "global_delivery",
      "consulting_engagement",
      "enterprise_modernization",
    ],

    tags: ["consulting", "enterprise", "services"],
  },
};