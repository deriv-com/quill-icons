import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleStarMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 12q.03-2.187 1.063-4Q2.125 6.188 4 5.063 5.906 4 8 4t4 1.063Q13.875 6.188 14.938 8q1.03 1.813 1.062 4-.03 2.188-1.062 4-1.063 1.812-2.938 2.938Q10.095 20 8 20t-4-1.062Q2.124 17.813 1.063 16 .03 14.188 0 12m8-4.75a.44.44 0 0 0-.437.281L6.438 9.813l-2.532.374a.5.5 0 0 0-.406.344.46.46 0 0 0 .125.5l1.813 1.813-.438 2.5a.52.52 0 0 0 .219.5.54.54 0 0 0 .531.031L8 14.688l2.281 1.187a.48.48 0 0 0 .5-.031.52.52 0 0 0 .219-.5l-.437-2.5 1.843-1.781a.63.63 0 0 0 .125-.532.56.56 0 0 0-.406-.344l-2.531-.374L8.438 7.53A.44.44 0 0 0 8 7.25' />
    </g>
    <defs>
      <clipPath id='ddd00b9242c3712544ead62a14282d38__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleStarMdFillIcon);
export default ForwardRef;
