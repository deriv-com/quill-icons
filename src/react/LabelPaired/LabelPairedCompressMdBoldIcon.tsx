import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCompressMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5 5.75v3.5a.74.74 0 0 1-.75.75H.75A.72.72 0 0 1 0 9.25a.74.74 0 0 1 .75-.75H3.5V5.75A.74.74 0 0 1 4.25 5a.76.76 0 0 1 .75.75M.75 14h3.5a.76.76 0 0 1 .75.75v3.5a.74.74 0 0 1-.75.75.72.72 0 0 1-.75-.75V15.5H.75a.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75m9.75-8.25V8.5h2.75a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75h-3.5A.72.72 0 0 1 9 9.25v-3.5A.74.74 0 0 1 9.75 5a.76.76 0 0 1 .75.75M9.75 14h3.5a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75H10.5v2.75a.74.74 0 0 1-.75.75.72.72 0 0 1-.75-.75v-3.5a.74.74 0 0 1 .75-.75' />
    </g>
    <defs>
      <clipPath id='4eb0efd8d655e5ad8ab73b416d145bbf__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCompressMdBoldIcon);
export default ForwardRef;
