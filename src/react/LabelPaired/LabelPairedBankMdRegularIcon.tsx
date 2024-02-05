import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBankMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m8.25 4.063 7.25 4.125a.99.99 0 0 1 .5.843q0 .406-.281.688a.94.94 0 0 1-.688.281H.97q-.406 0-.688-.281A.94.94 0 0 1 0 9.03a.99.99 0 0 1 .5-.844l7.25-4.124a.53.53 0 0 1 .5 0M9.594 9h5.344L8 5.063 1.063 9h5.343a1.8 1.8 0 0 1-.156-.75q.031-.75.5-1.25.5-.469 1.25-.5.75.031 1.25.5.47.5.5 1.25 0 .405-.156.75M8 7.5q-.687.063-.75.75.063.687.75.75.687-.063.75-.75-.063-.687-.75-.75M2 15v-4h1v4h2.5v-4h1v4h3v-4h1v4H13v-4h1v4q.47.031.5.5-.03.47-.5.5H2q-.469-.03-.5-.5.031-.469.5-.5m-.75 2h13.5q.47.031.5.5-.03.47-.5.5H1.25q-.469-.03-.5-.5.031-.469.5-.5M.5 19h15q.47.031.5.5-.03.47-.5.5H.5q-.469-.03-.5-.5.031-.469.5-.5' />
    </g>
    <defs>
      <clipPath id='9b0c4e744bf140d9638eb6e2bc67ddd5__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBankMdRegularIcon);
export default ForwardRef;
