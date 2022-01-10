interface Accordion {
  accordId: string;
  headerId: string;
  btnName: string;
  contentId: string;
  body: string;
}

interface Card {
  title: string;
  subtitle: string;
  text: string;
  link: string;
  linkName: string;
  anotherLink: string;
  anotherLinkName: string;
}

interface PageTitle {
  title: string;
}

export type { Accordion, Card, PageTitle };
