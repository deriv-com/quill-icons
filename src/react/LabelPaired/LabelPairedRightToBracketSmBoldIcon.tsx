import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRightToBracketSmBoldIcon = (
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
      <path d='m5.25 13.758 3.008-3.008L5.25 7.77v1.449c0 .383-.3.656-.656.656H1.312v1.75h3.282c.355 0 .656.3.656.656zm4.375-3.008a1.2 1.2 0 0 1-.355.848L6.098 14.77a1.26 1.26 0 0 1-.903.355c-.71 0-1.258-.547-1.258-1.258v-.93H1.314A1.296 1.296 0 0 1 0 11.626v-1.75c0-.71.574-1.312 1.313-1.312h2.625V7.66c0-.71.546-1.285 1.257-1.285.328 0 .657.137.903.383L9.27 9.93c.218.218.355.52.355.82m-.219 4.813h2.188a1.08 1.08 0 0 0 1.094-1.094V7.03c0-.601-.493-1.093-1.094-1.093H9.406a.63.63 0 0 1-.656-.657c0-.355.273-.656.656-.656h2.188A2.43 2.43 0 0 1 14 7.031v7.438a2.41 2.41 0 0 1-2.406 2.406H9.406a.63.63 0 0 1-.656-.656c0-.356.273-.657.656-.657' />
    </g>
    <defs>
      <clipPath id='1dd4533f6e66cbdff5b1311d3b61c1f4__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRightToBracketSmBoldIcon);
export default ForwardRef;
