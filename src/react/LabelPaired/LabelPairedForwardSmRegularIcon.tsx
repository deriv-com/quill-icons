import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedForwardSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12.96 10.75 7 6.43v8.64zM6.946 5.5a.8.8 0 0 1 .492.164l6.29 4.567q.273.19.273.519a.6.6 0 0 1-.273.52l-6.29 4.566a.8.8 0 0 1-.492.164.73.73 0 0 1-.574-.246.73.73 0 0 1-.246-.574v-2.817l-4.812 3.473A.8.8 0 0 1 .82 16a.73.73 0 0 1-.574-.246A.73.73 0 0 1 0 15.18V6.32q0-.355.246-.574A.73.73 0 0 1 .82 5.5a.8.8 0 0 1 .493.164l4.812 3.473V6.32q0-.355.246-.574a.73.73 0 0 1 .574-.246m-.82 5.77v-1.04l-5.25-3.8v8.64z' />
    </g>
    <defs>
      <clipPath id='08dcf091b026d148dc11a52392512ed4__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardSmRegularIcon);
export default ForwardRef;
