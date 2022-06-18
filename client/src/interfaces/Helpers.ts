export interface ICardInfo {
  title: string;
  text?: string;
  link1_target: string;
  link1_text: string;
  link2_target?: string;
  link2_text?: string;
  image?: string;
  children?: React.ReactNode;
}
