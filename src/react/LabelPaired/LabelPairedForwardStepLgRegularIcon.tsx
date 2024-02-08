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
      <path d='M10.25 8.625q.039-.585.625-.625.585.039.625.625v13.75q-.039.585-.625.625-.585-.039-.625-.625v-5.312l-6.992 5.703a.99.99 0 0 1-.664.234 1.06 1.06 0 0 1-.781-.312 1.06 1.06 0 0 1-.313-.782V9.094q0-.47.313-.781A1.06 1.06 0 0 1 2.593 8q.392 0 .665.234l6.992 5.704zm-7.5.82v12.11l7.46-6.055z' />
    </g>
    <defs>
      <clipPath id='0762806b45e171f4236295f939a59b2d__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardStepLgRegularIcon);
export default ForwardRef;
