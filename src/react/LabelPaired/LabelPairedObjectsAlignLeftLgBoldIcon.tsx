import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedObjectsAlignLeftLgBoldIcon = (
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
      <path d='M0 6.438C0 5.93.39 5.5.938 5.5a.95.95 0 0 1 .937.938v18.125c0 .546-.43.937-.937.937-.547 0-.938-.39-.938-.937zm6.875 5.937h11.25v-2.5H6.875zM5 9.875C5 8.859 5.82 8 6.875 8h11.25C19.141 8 20 8.86 20 9.875v2.5c0 1.055-.86 1.875-1.875 1.875H6.875A1.85 1.85 0 0 1 5 12.375zm1.875 11.25h6.25v-2.5h-6.25zM5 18.625c0-1.016.82-1.875 1.875-1.875h6.25c1.016 0 1.875.86 1.875 1.875v2.5C15 22.18 14.14 23 13.125 23h-6.25A1.85 1.85 0 0 1 5 21.125z' />
    </g>
    <defs>
      <clipPath id='904f34c6d7239b5adef58c0dba0f00ab__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedObjectsAlignLeftLgBoldIcon);
export default ForwardRef;
