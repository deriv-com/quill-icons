import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleSortCaptionRegularIcon = (
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
      <path d='M11.25 9.5a5.23 5.23 0 0 0-2.625-4.523 5.14 5.14 0 0 0-5.25 0A5.18 5.18 0 0 0 .75 9.5a5.19 5.19 0 0 0 2.625 4.547c1.617.96 3.61.96 5.25 0A5.24 5.24 0 0 0 11.25 9.5M0 9.5a5.96 5.96 0 0 1 3-5.18 5.97 5.97 0 0 1 6 0 6 6 0 0 1 3 5.18 6.01 6.01 0 0 1-3 5.203 5.97 5.97 0 0 1-6 0A5.97 5.97 0 0 1 0 9.5m5.719-3.633c.14-.14.398-.14.539 0l2.25 2.25c.094.117.14.281.07.422a.37.37 0 0 1-.328.211h-4.5c-.164 0-.305-.07-.352-.21-.07-.142-.023-.306.07-.423zM4.64 8h2.695L6 6.664zm-1.172 2.906c-.094-.117-.14-.281-.07-.422a.36.36 0 0 1 .351-.234h4.5c.14 0 .281.094.328.234.07.141.024.305-.07.422l-2.25 2.25a.397.397 0 0 1-.54 0zM6 12.36 7.336 11H4.64z' />
    </g>
    <defs>
      <clipPath id='5dab4fb7f744e65296c20464473aa999__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleSortCaptionRegularIcon);
export default ForwardRef;
