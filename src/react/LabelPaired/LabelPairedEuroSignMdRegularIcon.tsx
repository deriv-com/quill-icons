import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEuroSignMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={10}
    height={24}
    viewBox='0 0 10 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.063 11H.5q-.469-.03-.5-.5.031-.469.5-.5h.781q.688-2.22 2.5-3.594T8 5h1.531q.47.031.5.5-.03.47-.5.5H8q-2 .03-3.5 1.125A6.07 6.07 0 0 0 2.344 10H8.5q.47.031.5.5-.03.47-.5.5H2.094a5.4 5.4 0 0 0 0 2H8.5q.47.031.5.5-.03.47-.5.5H2.344A6.07 6.07 0 0 0 4.5 16.875Q6 17.969 8 18h1.531q.47.031.5.5-.03.47-.5.5H8q-2.406-.031-4.219-1.406Q1.97 16.218 1.281 14H.5q-.469-.03-.5-.5.031-.469.5-.5h.563a8 8 0 0 1 0-2' />
    </g>
    <defs>
      <clipPath id='d85ae7af1b0d64bbd265775791d62c38__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEuroSignMdRegularIcon);
export default ForwardRef;
