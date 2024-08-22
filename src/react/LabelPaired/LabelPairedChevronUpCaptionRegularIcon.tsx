import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronUpCaptionRegularIcon = (
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
      <path d='M5.719 6.242c.14-.14.398-.14.539 0l4.5 4.5c.14.14.14.399 0 .54a.397.397 0 0 1-.54 0L6 7.038l-4.242 4.242a.397.397 0 0 1-.54 0 .397.397 0 0 1 0-.539z' />
    </g>
    <defs>
      <clipPath id='32838a110908e986d05ae6532741fcb7__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronUpCaptionRegularIcon);
export default ForwardRef;
