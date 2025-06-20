import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLinkSimpleSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={22}
    viewBox='0 0 16 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.125 10.75A4.37 4.37 0 0 1 4.5 6.375h1.969c.355 0 .656.3.656.656 0 .383-.3.657-.656.657H4.5a3.075 3.075 0 0 0-3.062 3.062A3.057 3.057 0 0 0 4.5 13.813h1.969c.355 0 .656.3.656.656 0 .383-.3.656-.656.656H4.5A4.353 4.353 0 0 1 .125 10.75m15.75 0a4.37 4.37 0 0 1-4.375 4.375H9.531a.63.63 0 0 1-.656-.656c0-.356.273-.656.656-.656H11.5a3.075 3.075 0 0 0 3.063-3.063c0-1.668-1.395-3.062-3.063-3.062H9.531a.63.63 0 0 1-.656-.657c0-.355.273-.656.656-.656H11.5a4.39 4.39 0 0 1 4.375 4.375m-10.719-.656h5.688c.355 0 .656.3.656.656 0 .383-.3.656-.656.656H5.156a.63.63 0 0 1-.656-.656c0-.355.273-.656.656-.656' />
    </g>
    <defs>
      <clipPath id='ff94eff5159caab6434728a34a35a28a__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLinkSimpleSmBoldIcon);
export default ForwardRef;
