import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEightCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={18}
    viewBox='0 0 8 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.375 7.25a3 3 0 0 1-.844 2.086c.727.562 1.219 1.43 1.219 2.414 0 1.664-1.36 3-3 3h-1.5a2.99 2.99 0 0 1-3-3c0-.984.469-1.852 1.219-2.414A2.9 2.9 0 0 1 .625 7.25c0-1.64 1.336-3 3-3h.75c1.64 0 3 1.36 3 3m-3 3H3.25c-.844 0-1.5.68-1.5 1.5 0 .844.656 1.5 1.5 1.5h1.5c.82 0 1.5-.656 1.5-1.5 0-.82-.68-1.5-1.5-1.5zm0-1.5c.82 0 1.5-.656 1.5-1.5 0-.82-.68-1.5-1.5-1.5h-.75c-.844 0-1.5.68-1.5 1.5 0 .844.656 1.5 1.5 1.5z' />
    </g>
    <defs>
      <clipPath id='8a8a2712b0999533471f495f533e4de4__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEightCaptionFillIcon);
export default ForwardRef;
