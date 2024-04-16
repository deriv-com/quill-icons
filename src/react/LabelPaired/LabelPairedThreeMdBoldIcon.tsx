import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedThreeMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={10}
    height={24}
    viewBox='0 0 10 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 5.75A.74.74 0 0 1 .75 5h8c.281 0 .563.188.688.5.124.281.03.594-.188.813L4.594 10.75h1.281c2.25 0 4.125 1.875 4.125 4.125C10 17.156 8.125 19 5.875 19H3.031a3.28 3.28 0 0 1-2.906-1.781l-.062-.125a.74.74 0 0 1 .343-1 .74.74 0 0 1 1 .343l.063.094c.281.594.906.969 1.562.969h2.844A2.62 2.62 0 0 0 8.5 14.875a2.64 2.64 0 0 0-2.625-2.625H2.75a.79.79 0 0 1-.719-.469.79.79 0 0 1 .188-.812L6.875 6.5H.75A.72.72 0 0 1 0 5.75' />
    </g>
    <defs>
      <clipPath id='9c4e858a86e2887827e31bdbabd0faee__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedThreeMdBoldIcon);
export default ForwardRef;
