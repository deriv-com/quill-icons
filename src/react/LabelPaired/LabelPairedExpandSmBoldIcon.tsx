import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedExpandSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.094 4.625c.355 0 .656.3.656.656 0 .383-.3.657-.656.657H1.687v2.406c0 .383-.3.656-.656.656a.63.63 0 0 1-.656-.656V5.28c0-.355.273-.656.656-.656zM.375 13.156c0-.355.273-.656.656-.656.356 0 .657.3.657.656v2.406h2.406c.355 0 .656.301.656.657 0 .383-.3.656-.656.656H1.03a.63.63 0 0 1-.656-.656zm11.594-8.531c.355 0 .656.3.656.656v3.063c0 .383-.3.656-.656.656a.63.63 0 0 1-.656-.656V5.938H8.906a.63.63 0 0 1-.656-.657c0-.355.273-.656.656-.656zm-.656 8.531c0-.355.273-.656.656-.656.355 0 .656.3.656.656v3.063c0 .383-.3.656-.656.656H8.906a.63.63 0 0 1-.656-.656c0-.356.273-.657.656-.657h2.406z' />
    </g>
    <defs>
      <clipPath id='e5d9c6859ead6e6e55af71c3d12bc60f__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedExpandSmBoldIcon);
export default ForwardRef;
