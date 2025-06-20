import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedQuestionMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={10}
    height={24}
    viewBox='0 0 10 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.5 6a3 3 0 0 0-3 3c0 .281-.25.5-.5.5A.494.494 0 0 1 .5 9c0-2.187 1.781-4 4-4h1c2.188 0 4 1.813 4 4a3.5 3.5 0 0 1-1.406 2.813L6.188 13.25a1.7 1.7 0 0 0-.688 1.375V15c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5v-.375c0-.844.406-1.656 1.094-2.187L7.5 11c.625-.469 1-1.187 1-2a3 3 0 0 0-3-3zm-.25 12a.74.74 0 0 1 .75-.75.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75.72.72 0 0 1-.75-.75' />
    </g>
    <defs>
      <clipPath id='2c19e0e937cfc46b96bee2331a996331__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedQuestionMdRegularIcon);
export default ForwardRef;
