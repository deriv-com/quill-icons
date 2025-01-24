import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronDownMdBoldIcon = (
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
      <path d='m7.469 16.531-6-6c-.313-.281-.313-.75 0-1.062.281-.281.75-.281 1.062 0L8 14.969 13.469 9.5c.281-.312.75-.312 1.062 0a.736.736 0 0 1 0 1.031l-6.031 6a.684.684 0 0 1-1.031 0' />
    </g>
    <defs>
      <clipPath id='07b6f785a6f7396ecf20ae551ceca51d__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronDownMdBoldIcon);
export default ForwardRef;
