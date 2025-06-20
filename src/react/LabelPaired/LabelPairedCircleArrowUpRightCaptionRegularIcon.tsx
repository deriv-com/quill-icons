import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleArrowUpRightCaptionRegularIcon = (
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
      <path d='M6 14.75a5.18 5.18 0 0 0 4.523-2.625 5.14 5.14 0 0 0 0-5.25 5.228 5.228 0 0 0-9.07 0 5.14 5.14 0 0 0 0 5.25A5.19 5.19 0 0 0 6 14.75M6 3.5a6 6 0 0 1 5.18 3 5.97 5.97 0 0 1 0 6 5.96 5.96 0 0 1-5.18 3 5.97 5.97 0 0 1-5.203-3 5.97 5.97 0 0 1 0-6A6.01 6.01 0 0 1 6 3.5M4.688 7.25h3.187c.188 0 .375.188.375.375V11c0 .21-.187.375-.375.375A.37.37 0 0 1 7.5 11V8.54l-3.117 3.116a.397.397 0 0 1-.54 0 .397.397 0 0 1 0-.539L6.962 8H4.687a.37.37 0 0 1-.375-.375c0-.187.165-.375.375-.375' />
    </g>
    <defs>
      <clipPath id='c598d904a3f25aa4fe24e25aeae201a2__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleArrowUpRightCaptionRegularIcon);
export default ForwardRef;
