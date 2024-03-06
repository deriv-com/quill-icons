import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronUpSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6.535 6.785q.465-.383.93 0l5.25 5.25q.383.465 0 .93-.465.383-.93 0L7 8.18l-4.785 4.785q-.465.383-.93 0-.383-.465 0-.93z' />
    </g>
    <defs>
      <clipPath id='9bd7797d4c4e7ff972470df691e3b4f5__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronUpSmBoldIcon);
export default ForwardRef;
