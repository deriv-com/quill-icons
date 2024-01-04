import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const CurrencyAvaxIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <path
      fill='#E84142'
      d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16Z'
    />
    <path
      fill='#fff'
      d='M8.306 23.185h3.101c.73 0 1.096 0 1.421-.09a2.34 2.34 0 0 0 .954-.554c.344-.327.561-.783.793-1.19l4.022-7.109c.357-.624.534-.938.612-1.268a2.332 2.332 0 0 0 0-1.091c-.078-.327-.256-.639-.608-1.254L17.02 7.867c-.326-.573-.49-.86-.699-.965a.79.79 0 0 0-.714 0c-.208.106-.373.392-.699.965L7.25 21.364c-.321.565-.482.848-.47 1.08a.788.788 0 0 0 .357.615c.196.126.518.126 1.17.126ZM23.682 23.185h-4.444c-.655 0-.985 0-1.177-.126a.795.795 0 0 1-.357-.62c-.012-.23.15-.51.475-1.07l2.225-3.82c.326-.562.491-.84.695-.947a.782.782 0 0 1 .71 0c.203.103.361.37.674.899l2.283 3.906c.309.533.466.804.455 1.028a.785.785 0 0 1-.357.62c-.197.13-.527.13-1.182.13Z'
    />
  </svg>
);
const ForwardRef = forwardRef(CurrencyAvaxIcon);
export default ForwardRef;
