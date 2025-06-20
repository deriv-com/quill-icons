import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleFiveCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6 4.25a5.24 5.24 0 0 0-4.547 2.625 5.14 5.14 0 0 0 0 5.25A5.19 5.19 0 0 0 6 14.75a5.18 5.18 0 0 0 4.523-2.625 5.14 5.14 0 0 0 0-5.25A5.23 5.23 0 0 0 6 4.25M6 15.5a5.97 5.97 0 0 1-5.203-3 5.97 5.97 0 0 1 0-6A6.01 6.01 0 0 1 6 3.5a6 6 0 0 1 5.18 3 5.97 5.97 0 0 1 0 6 5.96 5.96 0 0 1-5.18 3m-1.125-9H7.5c.188 0 .375.188.375.375 0 .21-.187.375-.375.375H5.156l-.375 1.547 1.875.187c.89.094 1.57.868 1.57 1.758A1.74 1.74 0 0 1 6.47 12.5H5.437a1.9 1.9 0 0 1-1.593-.844l-.047-.07a.36.36 0 0 1 .117-.516.375.375 0 0 1 .516.094l.047.07c.21.329.585.516.96.516H6.47A1.02 1.02 0 0 0 7.5 10.742c0-.515-.398-.937-.914-1.008L4.266 9.5c-.118 0-.211-.07-.282-.14a.47.47 0 0 1-.046-.305l.562-2.25c.047-.188.188-.305.375-.305' />
    </g>
    <defs>
      <clipPath id='fa76b86b0ddce96d294bfaa368f60257__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleFiveCaptionRegularIcon);
export default ForwardRef;
