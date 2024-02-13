import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBadgeCheckMdBoldIcon = (
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
      <path d='M6.25 6.563q-.312.5-.875.343-1.094-.312-1.969.5-.812.876-.5 1.969.157.563-.344.875-.999.562-1.062 1.75.063 1.188 1.063 1.75.5.312.343.875-.312 1.094.5 1.969.876.812 1.969.5.563-.156.875.343.562 1 1.75 1.063 1.188-.063 1.75-1.062.312-.5.875-.344 1.094.28 1.969-.5.812-.876.5-1.969-.157-.563.375-.875.97-.562 1.031-1.75-.062-1.188-1.031-1.75-.532-.312-.375-.875.312-1.094-.5-1.969-.876-.812-1.969-.5-.563.156-.875-.343-.562-1-1.75-1.063-1.188.063-1.75 1.063M8 4q1.75.063 2.75 1.344 1.625-.188 2.906 1 1.188 1.281 1 2.906 1.281 1 1.344 2.75-.063 1.75-1.344 2.75.188 1.625-1 2.906-1.281 1.188-2.906 1Q9.75 19.937 8 20q-1.75-.063-2.75-1.344-1.625.188-2.906-1-1.188-1.281-1-2.906Q.063 13.75 0 12q.063-1.75 1.344-2.75-.188-1.625 1-2.906 1.281-1.188 2.906-1Q6.25 4.063 8 4m3.531 6.531-4 4q-.531.438-1.062 0l-2-2q-.438-.531 0-1.062.531-.438 1.062 0L7 12.938l3.469-3.47q.531-.435 1.062 0 .438.533 0 1.063' />
    </g>
    <defs>
      <clipPath id='b7c08176132a505e9b6340e0842e7760__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBadgeCheckMdBoldIcon);
export default ForwardRef;
