import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedOneXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={36}
    viewBox='0 0 12 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6.75 8.25V27h4.5q.703.046.75.75-.047.704-.75.75H.75q-.703-.046-.75-.75.047-.704.75-.75h4.5V9.656L1.922 11.86q-.61.33-1.031-.187-.33-.61.187-1.031l4.5-3a.8.8 0 0 1 .797-.047q.375.234.375.656' />
    </g>
    <defs>
      <clipPath id='bcd271bdefaa123b__a'>
        <path d='M0 0h12v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedOneXlRegularIcon);
export default ForwardRef;
