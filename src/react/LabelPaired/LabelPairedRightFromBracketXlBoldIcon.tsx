import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRightFromBracketXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M16.5 12.89v2.485a1.11 1.11 0 0 1-1.125 1.125H9.75v3h5.625c.61 0 1.125.516 1.125 1.125v2.531L21.656 18zM24 18c0 .563-.234 1.078-.61 1.453l-5.437 5.438c-.422.422-.984.609-1.547.609a2.12 2.12 0 0 1-2.156-2.156V21.75h-4.5A2.22 2.22 0 0 1 7.5 19.5v-3a2.25 2.25 0 0 1 2.25-2.25h4.5v-1.547c0-1.219.938-2.203 2.156-2.203.563 0 1.125.234 1.547.656l5.438 5.438c.375.375.609.89.609 1.406M7.875 9.75h-3.75a1.85 1.85 0 0 0-1.875 1.875v12.75c0 1.078.797 1.875 1.875 1.875h3.75c.61 0 1.125.516 1.125 1.125A1.11 1.11 0 0 1 7.875 28.5h-3.75A4.1 4.1 0 0 1 0 24.375v-12.75A4.13 4.13 0 0 1 4.125 7.5h3.75C8.485 7.5 9 8.016 9 8.625A1.11 1.11 0 0 1 7.875 9.75' />
    </g>
    <defs>
      <clipPath id='f629f57e4591e0704ddda46e45151fcd__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRightFromBracketXlBoldIcon);
export default ForwardRef;
