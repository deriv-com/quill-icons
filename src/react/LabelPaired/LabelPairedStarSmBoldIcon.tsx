import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedStarSmBoldIcon = (
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
      <path d='M8 3.75a.7.7 0 0 1 .602.383l1.859 3.855 4.184.602q.41.082.546.465a.63.63 0 0 1-.164.656l-3.035 3.008.711 4.265q.055.383-.273.657a.62.62 0 0 1-.684.027L8 15.672l-3.746 1.996a.59.59 0 0 1-.684-.055q-.328-.245-.273-.629l.71-4.265L.974 9.71a.63.63 0 0 1-.164-.656.69.69 0 0 1 .546-.465l4.184-.602L7.4 4.133A.7.7 0 0 1 8 3.75m0 2.16L6.55 8.863q-.135.3-.491.383l-3.227.465 2.352 2.324q.218.247.191.574l-.574 3.282 2.898-1.532q.3-.163.602 0l2.87 1.532-.546-3.282a.63.63 0 0 1 .191-.574l2.352-2.324-3.227-.465q-.355-.082-.492-.383z' />
    </g>
    <defs>
      <clipPath id='e35fb03dae2762b1d20993d8d7a115c4__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStarSmBoldIcon);
export default ForwardRef;
