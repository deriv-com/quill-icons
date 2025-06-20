import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileChartColumnSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={22}
    viewBox='0 0 11 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.563 16c0 .246.19.438.437.438h7A.45.45 0 0 0 9.438 16V8.125H7.25a.864.864 0 0 1-.875-.875V5.063H2a.45.45 0 0 0-.437.437zM2 3.75h4.512c.465 0 .902.191 1.23.52l2.488 2.488c.329.328.52.765.52 1.23V16c0 .984-.793 1.75-1.75 1.75H2c-.984 0-1.75-.766-1.75-1.75V5.5c0-.957.766-1.75 1.75-1.75m4.156 7.656v3.5c0 .383-.3.656-.656.656a.63.63 0 0 1-.656-.656v-3.5c0-.355.273-.656.656-.656.355 0 .656.3.656.656m2.407.875v2.625c0 .383-.301.656-.657.656a.63.63 0 0 1-.656-.656v-2.625c0-.355.273-.656.656-.656.356 0 .657.3.657.656m-4.813.875v1.75c0 .383-.3.656-.656.656a.63.63 0 0 1-.656-.656v-1.75c0-.355.273-.656.656-.656.355 0 .656.3.656.656' />
    </g>
    <defs>
      <clipPath id='2f3526644ccd7c4842711e1cef66bd63__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileChartColumnSmBoldIcon);
export default ForwardRef;
