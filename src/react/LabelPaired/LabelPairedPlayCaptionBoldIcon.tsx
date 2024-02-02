import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPlayCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={18}
    viewBox='0 0 9 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.125 13.625 7.875 9.5l-6.75-4.125zm-.54-9.234q.563-.305 1.126.023L8.46 8.54q.515.329.539.961-.023.633-.54.96l-6.75 4.126q-.562.328-1.124.023A1.12 1.12 0 0 1 0 13.625v-8.25q.023-.656.586-.984' />
    </g>
    <defs>
      <clipPath id='76efb92bcaa2079542438f7c1f55218b__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlayCaptionBoldIcon);
export default ForwardRef;
