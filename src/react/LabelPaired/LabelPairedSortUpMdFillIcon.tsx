import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSortUpMdFillIcon = (
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
      <path d='m5.688 5.313 4 4c.28.28.374.718.218 1.093a1.01 1.01 0 0 1-.906.625H1c-.406 0-.781-.25-.937-.625A1.01 1.01 0 0 1 .28 9.312l4-4a.964.964 0 0 1 1.407 0' />
    </g>
    <defs>
      <clipPath id='44f3c7819c0f3a95543560418c7702b5__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortUpMdFillIcon);
export default ForwardRef;
