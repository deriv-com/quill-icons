import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedNineSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={22}
    viewBox='0 0 9 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.875 9c0 .957.492 1.805 1.313 2.297a2.65 2.65 0 0 0 2.625 0c.792-.492 1.312-1.34 1.312-2.297 0-.93-.52-1.777-1.312-2.27a2.65 2.65 0 0 0-2.625 0c-.82.493-1.313 1.34-1.313 2.27m2.379 4.375C1.957 13.265.125 11.352.125 9A4.37 4.37 0 0 1 4.5 4.625 4.39 4.39 0 0 1 8.875 9c0 .082-.027.164-.027.219-.028.984-.41 1.914-1.04 2.68l-3.964 4.675c-.301.383-.875.41-1.23.11-.384-.301-.41-.875-.11-1.23z' />
    </g>
    <defs>
      <clipPath id='c4ed347056cb19b71e0b36b6e8351e74__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedNineSmFillIcon);
export default ForwardRef;
