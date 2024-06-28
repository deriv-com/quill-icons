import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedThreeLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={30}
    viewBox='0 0 13 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.25 7.375c0-.312.273-.625.625-.625H11.5c.234 0 .469.156.547.43a.54.54 0 0 1-.156.664L4.938 14.25H7.75c2.734 0 5 2.266 5 5 0 2.773-2.266 5-5 5H3.727c-1.407 0-2.735-.781-3.36-2.07l-.078-.117a.64.64 0 0 1 .274-.86.64.64 0 0 1 .859.274l.078.156C1.93 22.493 2.79 23 3.727 23H7.75a3.751 3.751 0 0 0 0-7.5H3.375c-.273 0-.508-.156-.586-.39a.54.54 0 0 1 .156-.665L9.898 8H.875a.617.617 0 0 1-.625-.625' />
    </g>
    <defs>
      <clipPath id='fe6a2f37211d3e2a233923852a7c82bd__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedThreeLgRegularIcon);
export default ForwardRef;
