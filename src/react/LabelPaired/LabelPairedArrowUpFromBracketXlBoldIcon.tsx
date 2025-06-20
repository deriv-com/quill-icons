import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpFromBracketXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m11.297 6.328 5.953 6c.469.469.469 1.172 0 1.594-.422.469-1.125.469-1.594 0l-4.078-4.078v11.531c0 .656-.469 1.125-1.125 1.125a1.11 1.11 0 0 1-1.125-1.125V9.844L5.25 13.922a1.027 1.027 0 0 1-1.547 0c-.469-.422-.469-1.125 0-1.594l6-6c.422-.422 1.125-.422 1.594 0M2.25 22.125v3.75c0 1.078.797 1.875 1.875 1.875h12.75a1.85 1.85 0 0 0 1.875-1.875v-3.75c0-.61.469-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125v3.75A4.13 4.13 0 0 1 16.875 30H4.125A4.1 4.1 0 0 1 0 25.875v-3.75C0 21.515.469 21 1.125 21c.61 0 1.125.516 1.125 1.125' />
    </g>
    <defs>
      <clipPath id='4514f3435f8d4ae6aca7c834be23c7ff__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpFromBracketXlBoldIcon);
export default ForwardRef;
