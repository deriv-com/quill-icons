import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleSortSmBoldIcon = (
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
      <path d='M12.688 10.75c0-2.023-1.094-3.883-2.844-4.922a5.71 5.71 0 0 0-5.688 0 5.68 5.68 0 0 0-2.843 4.922c0 2.05 1.066 3.91 2.843 4.95a5.71 5.71 0 0 0 5.688 0c1.75-1.04 2.844-2.9 2.844-4.95M0 10.75a6.95 6.95 0 0 1 3.5-6.043c2.16-1.258 4.813-1.258 7 0C12.66 5.965 14 8.262 14 10.75a7.02 7.02 0 0 1-3.5 6.07c-2.187 1.258-4.84 1.258-7 0A6.96 6.96 0 0 1 0 10.75m7.3-4.238 2.626 2.625c.11.136.164.328.082.492a.43.43 0 0 1-.383.246h-5.25c-.191 0-.355-.082-.41-.246-.082-.164-.027-.356.082-.492l2.625-2.625a.463.463 0 0 1 .629 0m-.628 8.504L4.047 12.39c-.11-.137-.164-.328-.082-.493a.42.42 0 0 1 .41-.273h5.25c.164 0 .328.11.383.273.082.165.027.356-.082.493L7.3 15.016a.463.463 0 0 1-.63 0' />
    </g>
    <defs>
      <clipPath id='71ede8c841d2b4c7bb8103e40c56ed74__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleSortSmBoldIcon);
export default ForwardRef;
