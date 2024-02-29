import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedYoutubeXlIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={27}
    height={36}
    viewBox='0 0 27 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M25.781 11.813q.236 1.077.375 2.484.095 1.453.14 2.578v2.297q-.045 1.125-.14 2.531a22 22 0 0 1-.375 2.531q-.562 1.735-2.297 2.25-1.125.235-3.468.375-2.344.094-4.36.141h-4.312a261 261 0 0 1-4.36-.14q-2.343-.142-3.468-.376-1.735-.515-2.297-2.25a22 22 0 0 1-.375-2.53 103 103 0 0 1-.14-2.532v-2.297q.045-1.125.14-2.578a22 22 0 0 1 .375-2.485q.562-1.734 2.297-2.296Q4.64 9.28 6.984 9.14q2.344-.095 4.36-.141h4.312q2.016.047 4.36.14 2.343.142 3.468.376 1.735.562 2.297 2.297m-14.906 10.03L17.578 18l-6.703-3.797z' />
    </g>
    <defs>
      <clipPath id='7543dfb8ac8a60a21c3a8de0bf422441__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedYoutubeXlIcon);
export default ForwardRef;
