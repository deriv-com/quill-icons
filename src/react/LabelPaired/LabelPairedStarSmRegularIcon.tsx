import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedStarSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={22}
    viewBox='0 0 16 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6.332 8.371a.92.92 0 0 1-.684.492l-3.746.547 2.735 2.707q.3.3.246.766l-.656 3.8 3.363-1.777a.82.82 0 0 1 .82 0l3.363 1.778-.656-3.801q-.054-.465.246-.766l2.735-2.707-3.774-.547a.9.9 0 0 1-.656-.492L8 4.898zm5.414 9.297L8 15.672l-3.746 1.996a.59.59 0 0 1-.684-.055q-.328-.245-.273-.629l.71-4.265L.974 9.71a.63.63 0 0 1-.164-.656.63.63 0 0 1 .546-.438l4.184-.629L7.4 4.133A.7.7 0 0 1 8 3.75a.7.7 0 0 1 .602.383l1.859 3.855 4.184.602q.41.082.546.465a.63.63 0 0 1-.164.656l-3.035 3.008.711 4.265q.055.383-.273.63a.59.59 0 0 1-.684.054' />
    </g>
    <defs>
      <clipPath id='f7024e8e0479bcb2578b16046c8f29b2__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStarSmRegularIcon);
export default ForwardRef;
