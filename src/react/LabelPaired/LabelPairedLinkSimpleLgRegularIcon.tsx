import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLinkSimpleLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={23}
    height={30}
    viewBox='0 0 23 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.25 15.5A6.243 6.243 0 0 1 6.5 9.25h3.125c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H6.5c-2.773 0-5 2.266-5 5 0 2.773 2.227 5 5 5h3.125c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H6.5A6.22 6.22 0 0 1 .25 15.5m22.5 0a6.243 6.243 0 0 1-6.25 6.25h-3.125a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625H16.5c2.734 0 5-2.227 5-5 0-2.734-2.266-5-5-5h-3.125a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625H16.5c3.438 0 6.25 2.813 6.25 6.25m-16.562-.625h10.625c.312 0 .625.313.625.625a.64.64 0 0 1-.625.625H6.188a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625' />
    </g>
    <defs>
      <clipPath id='a0c2015845f0f26c7be666d7044db7ab__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLinkSimpleLgRegularIcon);
export default ForwardRef;
