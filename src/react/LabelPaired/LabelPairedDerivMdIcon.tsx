import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedDerivMdIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M13.25 4.531 16.375 4l-2.187 12.5C13.844 18.438 12 20 10.03 20H7.656c-2.687 0-4.468-2.156-4-4.812l.219-1.157c.469-2.656 3-4.844 5.688-4.844h2.843zm-2.031 11.532.687-4h-2.5c-1.219 0-2.344 1-2.562 2.187l-.125.719c-.219 1.187.593 2.156 1.781 2.156h1.469c.594 0 1.125-.469 1.25-1.062' />
    </g>
    <defs>
      <clipPath id='ecd6d629e7b06e282baf3b3216401070__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDerivMdIcon);
export default ForwardRef;
