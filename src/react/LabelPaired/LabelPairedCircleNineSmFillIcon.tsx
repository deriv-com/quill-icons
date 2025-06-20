import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleNineSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 10.75a6.95 6.95 0 0 1 3.5-6.043c2.16-1.258 4.813-1.258 7 0C12.66 5.965 14 8.262 14 10.75a7.02 7.02 0 0 1-3.5 6.07c-2.187 1.258-4.84 1.258-7 0A6.96 6.96 0 0 1 0 10.75m7 .438a1.31 1.31 0 0 1-1.148-.657c-.247-.383-.247-.902 0-1.312.246-.383.656-.656 1.148-.656.465 0 .875.273 1.121.656.246.41.246.93 0 1.312-.246.41-.656.656-1.121.656m-.71 1.23-.821.684a.68.68 0 0 0-.082.93c.246.273.656.3.93.081L8.558 12.2a3.1 3.1 0 0 0 1.066-2.324 2.626 2.626 0 0 0-5.25 0c0 1.203.793 2.242 1.914 2.543' />
    </g>
    <defs>
      <clipPath id='a1a090c802106b5b804a13f57d513763__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleNineSmFillIcon);
export default ForwardRef;
