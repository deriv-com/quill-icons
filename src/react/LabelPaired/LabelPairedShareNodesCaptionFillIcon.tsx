import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedShareNodesCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8.5 8.75c-.61 0-1.172-.234-1.57-.61L4.727 9.243c0 .07.023.164.023.258 0 .117-.023.188-.023.281l2.203 1.102c.398-.375.96-.633 1.57-.633a2.25 2.25 0 1 1-2.25 2.25v-.258l-2.203-1.101c-.399.375-.961.609-1.547.609a2.25 2.25 0 0 1 0-4.5c.586 0 1.148.258 1.547.633L6.25 6.78V6.5A2.25 2.25 0 1 1 8.5 8.75' />
    </g>
    <defs>
      <clipPath id='67fd510ef7aac9d58832a313983ccdba__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedShareNodesCaptionFillIcon);
export default ForwardRef;
