import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHorizontalRuleDashedSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={22}
    viewBox='0 0 18 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.25 10.75c0-.355.273-.656.656-.656h1.75c.356 0 .656.3.656.656 0 .383-.3.656-.656.656H.906a.63.63 0 0 1-.656-.656m4.813 0c0-.355.273-.656.656-.656h1.75c.355 0 .656.3.656.656 0 .383-.3.656-.656.656h-1.75a.63.63 0 0 1-.657-.656m4.812 0c0-.355.273-.656.656-.656h1.75c.356 0 .656.3.656.656 0 .383-.3.656-.656.656h-1.75a.63.63 0 0 1-.656-.656m4.813 0c0-.355.273-.656.656-.656h1.75c.355 0 .656.3.656.656 0 .383-.3.656-.656.656h-1.75a.63.63 0 0 1-.656-.656' />
    </g>
    <defs>
      <clipPath id='cbde7c446cf4ba8ea75d03fdf5437dfb__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHorizontalRuleDashedSmBoldIcon);
export default ForwardRef;
