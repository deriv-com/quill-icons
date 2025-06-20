import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPresentationScreenMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={24}
    viewBox='0 0 18 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.75 4h16.5a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75H.75A.72.72 0 0 1 0 4.75.74.74 0 0 1 .75 4M1 6.5h1.5v6.75c0 .156.094.25.25.25h12.5c.125 0 .25-.094.25-.25V6.5H17v6.75c0 .969-.812 1.75-1.75 1.75H9.719v1.469L12 18.75a.684.684 0 0 1 0 1.031c-.281.313-.75.313-1.062 0l-1.97-1.968L7 19.78a.684.684 0 0 1-1.031 0 .684.684 0 0 1 0-1.031l2.281-2.281V15h-5.5C1.781 15 1 14.219 1 13.25z' />
    </g>
    <defs>
      <clipPath id='013759314679c55be75b691885e1cebd__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPresentationScreenMdBoldIcon);
export default ForwardRef;
