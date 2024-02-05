import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPhoneMdBoldIcon = (
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
      <path d='m11.75 12.594 3.5 1.5q.406.187.625.594.187.374.094.843l-.75 3.5q-.25.906-1.219.969h-.562l-.938-.062q-3.562-.438-6.375-2.344a14 14 0 0 1-4.437-4.938Q.03 9.656 0 6q.063-.969 1-1.219l3.5-.75q.438-.093.813.125.405.188.593.594l1.5 3.5q.313.844-.375 1.469l-1.25 1.031a9.55 9.55 0 0 0 3.469 3.469l1.031-1.25q.625-.688 1.469-.375m2.063 5.906.656-3.094-3.125-1.344-.938 1.126q-.374.405-.875.5A1.4 1.4 0 0 1 8.5 15.53 11.3 11.3 0 0 1 4.469 11.5a1.55 1.55 0 0 1-.157-1q.095-.531.5-.906l1.125-.906L4.595 5.53 1.5 6.22q.094 3.406 1.75 6.156a12.23 12.23 0 0 0 4.375 4.375q2.75 1.656 6.188 1.75' />
    </g>
    <defs>
      <clipPath id='eb24eb970001d7e37bfb6b7cea91fbdc__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPhoneMdBoldIcon);
export default ForwardRef;
