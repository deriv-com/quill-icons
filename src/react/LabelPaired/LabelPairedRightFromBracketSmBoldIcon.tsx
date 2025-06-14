import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRightFromBracketSmBoldIcon = (
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
      <path d='M9.625 7.77v1.449c0 .383-.3.656-.656.656H5.688v1.75h3.28c.356 0 .657.3.657.656v1.477l3.008-3.008zM14 10.75a1.2 1.2 0 0 1-.355.848l-3.172 3.172a1.26 1.26 0 0 1-.903.355c-.71 0-1.258-.547-1.258-1.258v-.93H5.688a1.296 1.296 0 0 1-1.313-1.312v-1.75c0-.71.574-1.312 1.313-1.312h2.625V7.66c0-.71.546-1.285 1.257-1.285.328 0 .657.137.903.383l3.172 3.172c.218.218.355.52.355.82M4.594 5.938H2.406A1.08 1.08 0 0 0 1.312 7.03v7.438c0 .629.465 1.094 1.094 1.094h2.188c.355 0 .656.3.656.656 0 .383-.3.656-.656.656H2.406A2.39 2.39 0 0 1 0 14.469V7.03a2.41 2.41 0 0 1 2.406-2.406h2.188c.355 0 .656.3.656.656 0 .383-.3.657-.656.657' />
    </g>
    <defs>
      <clipPath id='8768217d7a82fded56302f0d0aa94289__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRightFromBracketSmBoldIcon);
export default ForwardRef;
