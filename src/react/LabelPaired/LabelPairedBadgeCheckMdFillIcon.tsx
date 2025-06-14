import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBadgeCheckMdFillIcon = (
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
      <path d='M8 4c1.125 0 2.125.656 2.625 1.625a2.97 2.97 0 0 1 3.031.719c.813.812 1.063 2 .719 3.031.969.5 1.625 1.5 1.625 2.625a2.98 2.98 0 0 1-1.625 2.656 2.92 2.92 0 0 1-.719 3c-.812.813-2 1.063-3.031.75C10.125 19.375 9.125 20 8 20c-1.156 0-2.156-.625-2.656-1.594a3 3 0 0 1-3-.75 3 3 0 0 1-.75-3C.625 14.156 0 13.156 0 12c0-1.125.625-2.125 1.594-2.625a3.05 3.05 0 0 1 .75-3.031 2.92 2.92 0 0 1 3-.719C5.844 4.656 6.844 4 8 4m3.531 6.531a.736.736 0 0 0 0-1.031c-.312-.312-.781-.312-1.062 0L7 12.969 5.531 11.5c-.312-.312-.781-.312-1.062 0a.684.684 0 0 0 0 1.031l2 2c.281.313.75.313 1.062 0z' />
    </g>
    <defs>
      <clipPath id='c0bc66bb4acd87b1573f9665098ce007__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBadgeCheckMdFillIcon);
export default ForwardRef;
