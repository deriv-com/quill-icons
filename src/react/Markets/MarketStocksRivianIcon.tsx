import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketStocksRivianIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath='url(#4c47b3541263d8e546165010894dd52c__a)'>
      <path
        fill='#000'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
      />
      <path
        fill='#FFAC00'
        d='M26.273 15.212c-1.156-1.191-7.496-7.706-8.652-8.652-.42-.315-.946-.56-1.611-.56-.666 0-1.191.245-1.611.56-1.191.946-7.496 7.461-8.687 8.652-.07.105 0 .28.14.28h2.732c.28 0 .386-.035.56-.245a51 51 0 0 1 1.087-1.156c1.155-1.226 3.922-3.958 4.938-4.799.386-.315.806-.315.806-.315s.455 0 .806.315c1.05.876 3.852 3.573 4.973 4.8 0 0 .91.98 1.086 1.155.175.21.28.245.56.245h2.733c.14 0 .245-.175.14-.28m-20.56 1.576c1.155 1.191 7.495 7.706 8.65 8.652.421.315.946.56 1.612.56.665 0 1.19-.245 1.611-.56 1.191-.946 7.496-7.461 8.652-8.652.105-.105 0-.28-.14-.28h-2.733c-.28 0-.385.035-.56.245s-1.086 1.156-1.086 1.156c-1.156 1.226-3.923 3.958-4.939 4.799-.385.315-.805.315-.805.315s-.455 0-.806-.316c-1.016-.84-3.818-3.572-4.938-4.798 0 0-.911-.98-1.086-1.156-.175-.21-.28-.245-.56-.245H5.851c-.14-.035-.21.14-.14.28m9.526 1.366c-.525-.49-1.436-1.366-1.786-1.751-.14-.175-.14-.386-.14-.386s0-.21.14-.385c.35-.385 1.26-1.296 1.786-1.751.21-.21.28-.315.28-.56v-2.697c0-.106-.14-.176-.21-.07-1.155 1.085-3.747 3.642-4.623 4.623-.42.455-.385.875-.385.875s-.035.456.385.876c.876.98 3.467 3.573 4.623 4.624.106.105.21.035.21-.105V18.75c-.034-.28-.07-.386-.28-.596m1.506 0c.526-.49 1.436-1.366 1.787-1.751.14-.175.14-.386.14-.386s0-.21-.14-.385a29 29 0 0 0-1.787-1.751c-.21-.21-.28-.315-.28-.56v-2.697c0-.14.105-.176.21-.106 1.156 1.086 3.748 3.643 4.624 4.624.42.455.385.875.385.875s.035.456-.385.876c-.876.98-3.468 3.573-4.624 4.624-.105.105-.21.035-.21-.105v-2.697c.035-.246.07-.35.28-.56'
      />
    </g>
    <defs>
      <clipPath id='4c47b3541263d8e546165010894dd52c__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketStocksRivianIcon);
export default ForwardRef;
