type ButtonData = {
  url: string;
  label: string;
  state: 'previous' | 'next';
};

export interface NavigationProps {
  navigations: ButtonData[];
}
