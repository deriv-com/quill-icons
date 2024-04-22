import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronLeftCaptionRegularIcon = (
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
      <path d='M.719 9.781a.397.397 0 0 1 0-.539l4.5-4.5c.14-.14.398-.14.539 0 .14.14.14.399 0 .54L1.516 9.5l4.242 4.242c.14.14.14.399 0 .54a.397.397 0 0 1-.54 0z' />
    </g>
    <defs>
      <clipPath id='c992ebc080ce8fe0e30a0e16e8f7e473__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronLeftCaptionRegularIcon);
export default ForwardRef;
