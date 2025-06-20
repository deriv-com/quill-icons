import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleEightMdRegularIcon = (
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
      <path d='M15 12c0-2.5-1.344-4.781-3.5-6.031-2.187-1.282-4.844-1.282-7 0A6.9 6.9 0 0 0 1 12c0 2.531 1.313 4.813 3.5 6.063 2.156 1.28 4.813 1.28 7 0A6.98 6.98 0 0 0 15 12M0 12a7.94 7.94 0 0 1 4-6.906c2.469-1.438 5.5-1.438 8 0C14.469 6.53 16 9.156 16 12c0 2.875-1.531 5.5-4 6.938-2.5 1.437-5.531 1.437-8 0A7.95 7.95 0 0 1 0 12m8.375-4c1.156 0 2.125.969 2.125 2.125 0 .656-.281 1.219-.719 1.594.563.437.969 1.125.969 1.906A2.374 2.374 0 0 1 8.375 16h-.75a2.374 2.374 0 0 1-2.375-2.375c0-.781.375-1.469.938-1.906-.438-.375-.688-.938-.688-1.594C5.5 8.969 6.438 8 7.625 8zm-.75 3.25h.75c.594 0 1.125-.5 1.125-1.125C9.5 9.531 8.969 9 8.375 9h-.75A1.14 1.14 0 0 0 6.5 10.125c0 .625.5 1.125 1.125 1.125m.75 1h-.75c-.781 0-1.375.625-1.375 1.375 0 .781.594 1.375 1.375 1.375h.75c.75 0 1.375-.594 1.375-1.375 0-.75-.625-1.375-1.375-1.375' />
    </g>
    <defs>
      <clipPath id='b96ee37cefc17ff36cdb84239226253d__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleEightMdRegularIcon);
export default ForwardRef;
