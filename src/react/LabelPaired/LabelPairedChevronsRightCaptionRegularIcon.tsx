import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsRightCaptionRegularIcon = (
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
      <path d='M1.758 14.281a.397.397 0 0 1-.54 0 .397.397 0 0 1 0-.539L5.462 9.5 1.219 5.281a.397.397 0 0 1 0-.539c.14-.14.398-.14.539 0l4.5 4.5c.14.14.14.399 0 .54zm4.5 0a.397.397 0 0 1-.54 0 .397.397 0 0 1 0-.539L9.962 9.5 5.719 5.281a.397.397 0 0 1 0-.539c.14-.14.398-.14.539 0l4.5 4.5c.14.14.14.399 0 .54z' />
    </g>
    <defs>
      <clipPath id='6894829b6f6795dec423cede4fb91602__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsRightCaptionRegularIcon);
export default ForwardRef;
