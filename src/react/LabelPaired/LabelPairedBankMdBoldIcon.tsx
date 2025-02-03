import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBankMdBoldIcon = (
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
      <path d='m8.344 4.094 7.094 3.937c.343.188.562.531.562.906C16 9.532 15.5 10 14.906 10H1.063A1.054 1.054 0 0 1 0 8.938c0-.376.188-.72.531-.907l7.094-3.937a.74.74 0 0 1 .719 0M7.125 8.5C7.031 8.375 7 8.188 7 8c0-.531.438-1 1-1 .531 0 1 .469 1 1a.87.87 0 0 1-.156.5h4.375L8 5.625 2.75 8.5zM2 11h1.5v5h2v-5H7v5h2v-5h1.5v5h2v-5H14v5h.25a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75H2a.72.72 0 0 1-.75-.75A.74.74 0 0 1 2 16zm-1 7.5h14.25a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75H1a.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75' />
    </g>
    <defs>
      <clipPath id='ac967b2cb8f2fcea79d9d7d5b2ecd077__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBankMdBoldIcon);
export default ForwardRef;
