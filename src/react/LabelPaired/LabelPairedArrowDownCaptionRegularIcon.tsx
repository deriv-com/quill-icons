import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={18}
    viewBox='0 0 9 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.219 14.656.094 10.531a.397.397 0 0 1 0-.539c.14-.14.398-.14.539 0l3.492 3.492V4.625c0-.187.164-.375.375-.375.188 0 .375.188.375.375v8.86l3.469-3.493c.14-.14.398-.14.539 0 .14.14.14.399 0 .54l-4.125 4.124a.397.397 0 0 1-.54 0' />
    </g>
    <defs>
      <clipPath id='aa5658fec5fece1e8e97ede277516f7c__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownCaptionRegularIcon);
export default ForwardRef;
