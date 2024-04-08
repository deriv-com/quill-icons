import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBackwardStepLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={30}
    viewBox='0 0 13 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.75 8.625v5.313l6.953-5.665c.195-.156.43-.273.703-.273.586 0 1.094.508 1.094 1.094v12.851c0 .586-.508 1.055-1.094 1.055a1.1 1.1 0 0 1-.703-.234L2.75 17.102v5.273a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625V8.625c0-.312.273-.625.625-.625.313 0 .625.313.625.625m7.5.82L2.79 15.5l7.46 6.094z' />
    </g>
    <defs>
      <clipPath id='4d21e727ab4d1eb10e0daed90059d71e__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardStepLgRegularIcon);
export default ForwardRef;
