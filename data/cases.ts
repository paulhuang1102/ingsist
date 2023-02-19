import { CaseContentType, CaseDetail, CaseMeta } from "@/models/case";

export const caseItems: CaseMeta[] = [
  {
    id: "1",
    name: "Printer Integration",
    year: 2022,
    tag: ["Cloud Services", "SaaS"],
    imageUrl: "https://picsum.photos/200/300",
  },
  {
    id: "2",
    name: "Tresl official site",
    year: 2022,
    tag: ["Cloud Services", "SaaS"],
    imageUrl: "https://picsum.photos/200/300",
  },
  {
    id: "3",
    name: "ROEHL App",
    year: 2022,
    tag: ["Cloud Services", "SaaS"],
    imageUrl: "https://picsum.photos/200/300",
  },
  {
    id: "4",
    name: "168 MONEY \nBackend System",
    year: 2022,
    tag: ["Cloud Services", "SaaS"],
    imageUrl: "https://picsum.photos/200/300",
  },
];

export const caseDetail: CaseDetail = {
  id: "1",
  name: "Printer Integration",
  year: 2022,
  coverUrl: "https://picsum.photos/400/300",
  overview: {
    client: "TSC Auto ID (H.K.) Ltd.",
    awards: ["AWWWWARD 2022", "UXDA 2021"],
    description:
      "CAFECA 是去中心化的數位身份技術，提供用戶安全且最便捷的身份認證服務。藉由區塊鏈、生物辨識以及人工智慧技術的整合，將過去耗時數日的註冊與身份認證流程縮短至數秒內，讓用戶不需記憶複雜的密碼，也不需提供個人隱私資訊的情況下使用各種網路服務。 此案依據產品核心、Product Owner對於品牌的想像，逐步凝聚共識交付設計。",
    tags: ["Cloud Services", "SaaS"],
    website: "https://google.com",
  },
  paragraph: [
    {
      title: "Challenge",
      content: [
        {
          type: CaseContentType.text,
          data: "在原宇宙這樣的虛擬世界中，要偽造、竊取身份並非難事。而前陣子台灣發生網紅利用深偽技術 （Deepfake）製作不雅影片牟利一事，引起社會關注，也讓人們開始思考這類技術使用的合理性與犯罪手法，例如犯罪集團有可能鎖定網路銀行用戶，偽造用戶身份，再利用假人臉申辦人頭帳戶，突破層層驗證。\n總結來說，元宇宙下的身份驗證是無論個人、企業或政府單位都應該積極瞭解的議題，而像Socure這類的身分驗證新創公司能否洞燭先機、防患未然，也值得我們持續關注。",
        },
        {
          type: CaseContentType.image,
          data: ["https://picsum.photos/400/300"],
        },
      ],
    },
    {
      title: "Design Process",
      content: [
        {
          type: CaseContentType.header,
          data: "User Flow",
        },
        {
          type: CaseContentType.text,
          data: "我們創建了用於創建 NFT、分發、創建網頁模板的自定義用戶流程。 管理系統分為 Dashboard、Collections & NFTs 和 Releases 頁面。 有添加單獨分析頁面的情況，但我們在發布和 NFT 頁面上的小信息塊中保留了少量數據。 我們還為管理員、用戶和經理角色創建了不同的佈局——每個角色都有自己的訪問級別。",
        },
        {
          type: CaseContentType.image,
          data: ["https://picsum.photos/400/300"],
        },
        {
          type: CaseContentType.header,
          data: "Micro Interaction",
        },
        {
          type: CaseContentType.text,
          data: "我們創建了用於創建 NFT、分發、創建網頁模板的自定義用戶流程。 管理系統分為 Dashboard、Collections & NFTs 和 Releases 頁面。 有添加單獨分析頁面的情況，但我們在發布和 NFT 頁面上的小信息塊中保留了少量數據。 我們還為管理員、用戶和經理角色創建了不同的佈局——每個角色都有自己的訪問級別。",
        },
        {
          type: CaseContentType.image,
          data: [
            "https://picsum.photos/400/300",
            "https://picsum.photos/400/300",
          ],
        },
      ],
    },
  ],
  credit: {
    members: [
      {
        title: "Creative Director",
        name: "Holden Chen",
      },
      {
        title: "Design Director",
        name: "Sushi Su",
      },
      {
        title: "Jr. UI Designer",
        name: "Tina",
      },
      {
        title: "UX Designer",
        name: "Lisa Huang",
      },
      {
        title: "Product Manerger",
        name: "Emily Peng",
      },
      {
        title: "UX Researcher",
        name: "Amber Tsai",
      },
    ],
  },
};
