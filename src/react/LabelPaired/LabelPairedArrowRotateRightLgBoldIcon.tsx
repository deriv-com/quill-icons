import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRotateRightLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M18.438 14.25h-5.625c-.547 0-.938-.39-.938-.937 0-.508.39-.938.938-.938h3.515l-1.055-1.25c-1.289-1.523-3.164-2.5-5.273-2.5A6.86 6.86 0 0 0 3.125 15.5 6.836 6.836 0 0 0 10 22.375a6.8 6.8 0 0 0 4.102-1.367.94.94 0 0 1 1.328.195.94.94 0 0 1-.196 1.328C13.79 23.625 11.954 24.25 10 24.25a8.736 8.736 0 0 1-8.75-8.75c0-4.805 3.906-8.75 8.75-8.75 2.695 0 5.117 1.25 6.719 3.164l.781.938V7.687c0-.507.39-.937.938-.937a.95.95 0 0 1 .937.938v5.625c0 .546-.43.937-.937.937' />
    </g>
    <defs>
      <clipPath id='e83e4d95b0902767652af628bbfdef06__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRotateRightLgBoldIcon);
export default ForwardRef;
