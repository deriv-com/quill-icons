import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFourLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={30}
    viewBox='0 0 15 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6.797 7.688 1.602 18h9.648v-6.875c0-.312.273-.625.625-.625.313 0 .625.313.625.625V18h1.875c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H12.5v4.375a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625v-4.336H.586a.61.61 0 0 1-.508-.312.7.7 0 0 1-.039-.625l5.625-11.25a.64.64 0 0 1 .86-.274c.312.156.43.547.273.86' />
    </g>
    <defs>
      <clipPath id='640501e930861f90a12e8c8e5df96699__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFourLgRegularIcon);
export default ForwardRef;
