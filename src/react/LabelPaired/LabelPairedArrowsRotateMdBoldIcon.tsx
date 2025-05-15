import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowsRotateMdBoldIcon = (
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
      <path d='M2.938 9.875c-.188.375-.626.531-1 .375a.75.75 0 0 1-.407-.969C2.594 6.781 5.094 5 8 5c1.625 0 3.188.656 4.344 1.813L14 8.469V6.75a.74.74 0 0 1 .75-.75.76.76 0 0 1 .75.75v3.5a.74.74 0 0 1-.75.75h-3.5a.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75h1.688L11.28 7.875A4.67 4.67 0 0 0 8 6.5a5.49 5.49 0 0 0-5.062 3.375m11.5 4.906C13.344 17.25 10.875 19 8 19c-1.656 0-3.219-.625-4.375-1.812L2 15.563v1.687a.74.74 0 0 1-.75.75.72.72 0 0 1-.75-.75v-3.5a.74.74 0 0 1 .75-.75h3.5a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75H3.031l1.656 1.656C5.563 17.031 6.75 17.5 8 17.5c2.25 0 4.219-1.344 5.031-3.312.188-.407.625-.563 1-.407a.77.77 0 0 1 .406 1' />
    </g>
    <defs>
      <clipPath id='9cf857d650643096454590ad832e36ed__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowsRotateMdBoldIcon);
export default ForwardRef;
