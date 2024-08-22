import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCopyMdFillIcon = (
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
      <path d='M6.5 4h3.875c.375 0 .781.188 1.063.469l2.093 2.093c.281.282.469.688.469 1.063V14.5a1.5 1.5 0 0 1-1.5 1.5h-6A1.48 1.48 0 0 1 5 14.5v-9A1.5 1.5 0 0 1 6.5 4m-5 4H4v2H2v8h6v-1h2v1.5A1.5 1.5 0 0 1 8.5 20h-7A1.48 1.48 0 0 1 0 18.5v-9A1.5 1.5 0 0 1 1.5 8' />
    </g>
    <defs>
      <clipPath id='28f35c6dcde81ca4e23e97cd0fee3b4a__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCopyMdFillIcon);
export default ForwardRef;
