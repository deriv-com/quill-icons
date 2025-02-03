import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsLeftCaptionRegularIcon = (
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
      <path d='m1.219 9.242 4.5-4.5c.14-.14.398-.14.539 0 .14.14.14.399 0 .54L2.016 9.5l4.242 4.242c.14.14.14.399 0 .54a.397.397 0 0 1-.54 0l-4.5-4.5a.397.397 0 0 1 0-.54m9-4.5c.14-.14.398-.14.539 0 .14.14.14.399 0 .54L6.516 9.5l4.242 4.242c.14.14.14.399 0 .54a.397.397 0 0 1-.54 0l-4.5-4.5a.397.397 0 0 1 0-.54z' />
    </g>
    <defs>
      <clipPath id='120029694519b5c89237f770f57043b8__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsLeftCaptionRegularIcon);
export default ForwardRef;
