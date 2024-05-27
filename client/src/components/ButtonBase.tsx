import { Button, ButtonProps } from 'react-aria-components';

type ButtonBaseProps = {
  tooltip?: string;
  narrow?: boolean;
} & ButtonProps;

export function ButtonBase({ children, isDisabled, narrow }: ButtonBaseProps) {
  return (
    <Button
      isDisabled={isDisabled}
      className={`flex animate-fade-in-2 cursor-pointer flex-row items-center gap-6 rounded-lg bg-secondary-background p-8 font-semibold text-primary-text outline-none transition duration-100 ease-linear data-[disabled]:relative  data-[pressed]:bg-primary-block data-[focus-visible]:ring-2 data-[focus-visible]:ring-primary-accent data-[disabled]:brightness-[40%] data-[disabled]:after:absolute data-[disabled]:after:inset-0 data-[disabled]:after:cursor-not-allowed data-[disabled]:after:content-[''] ${narrow && 'py-6'}`}
    >
      {children}
    </Button>
  );
}
