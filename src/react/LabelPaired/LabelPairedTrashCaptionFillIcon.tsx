import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTrashCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.414 3.922A.72.72 0 0 1 4.07 3.5h2.836c.282 0 .54.164.657.422l.187.328H10c.398 0 .75.352.75.75 0 .422-.352.75-.75.75H1A.74.74 0 0 1 .25 5c0-.398.328-.75.75-.75h2.25zM10 6.5l-.516 7.945c-.023.61-.515 1.055-1.125 1.055H2.617c-.61 0-1.101-.445-1.125-1.055L1 6.5z' />
    </g>
    <defs>
      <clipPath id='f84e41a1866d2b9bfc7d60a8bff70cf7__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTrashCaptionFillIcon);
export default ForwardRef;
