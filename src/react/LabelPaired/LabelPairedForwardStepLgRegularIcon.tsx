import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedForwardStepLgRegularIcon = (
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
      <path d='M10.25 8.625c0-.312.273-.625.625-.625.313 0 .625.313.625.625v13.75a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625v-5.273l-6.992 5.664a1.1 1.1 0 0 1-.703.234A1.05 1.05 0 0 1 1.5 21.945V9.094C1.5 8.508 1.969 8 2.555 8c.273 0 .507.117.703.273l6.992 5.665zm-7.5.82v12.149l7.422-6.094z' />
    </g>
    <defs>
      <clipPath id='fc17dbff4653d2c98d9d4a1ab1959fbc__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardStepLgRegularIcon);
export default ForwardRef;
