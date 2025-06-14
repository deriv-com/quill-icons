import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBriefcaseMdFillIcon = (
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
      <path d='M5.75 5.5a.246.246 0 0 0-.25.25V7h5V5.75a.27.27 0 0 0-.25-.25zM4 5.75C4 4.813 4.781 4 5.75 4h4.5c.938 0 1.75.813 1.75 1.75V7h2c1.094 0 2 .906 2 2v3H0V9c0-1.094.875-2 2-2h2zM16 13v4c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2v-4h6v1c0 .563.438 1 1 1h2c.531 0 1-.437 1-1v-1z' />
    </g>
    <defs>
      <clipPath id='cc9916524c33ca86205bdbd2d830f05f__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBriefcaseMdFillIcon);
export default ForwardRef;
