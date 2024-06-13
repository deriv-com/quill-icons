import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleOneMdFillIcon = (
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
      <path d='M0 12a7.94 7.94 0 0 1 4-6.906c2.469-1.438 5.5-1.438 8 0C14.469 6.53 16 9.156 16 12c0 2.875-1.531 5.5-4 6.938-2.5 1.437-5.531 1.437-8 0A7.95 7.95 0 0 1 0 12m8.375-3.875c-.25-.156-.531-.156-.75 0l-1.75 1a.7.7 0 0 0-.281 1c.187.375.656.5 1 .281l.656-.344V14.5H6a.74.74 0 0 0-.75.75c0 .438.313.75.75.75h4a.74.74 0 0 0 .75-.75.76.76 0 0 0-.75-.75H8.75V8.75a.75.75 0 0 0-.375-.625' />
    </g>
    <defs>
      <clipPath id='127e534f0d94d4ff743a1ad426925566__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleOneMdFillIcon);
export default ForwardRef;
