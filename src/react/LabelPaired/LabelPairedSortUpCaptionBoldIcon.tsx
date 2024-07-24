import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSortUpCaptionBoldIcon = (
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
      <path d='M4 5.54 1.89 7.624h4.196zm-.54-1.056a.723.723 0 0 1 1.056 0l3 3c.21.211.28.54.164.82a.74.74 0 0 1-.68.47H1a.77.77 0 0 1-.703-.47.76.76 0 0 1 .164-.82z' />
    </g>
    <defs>
      <clipPath id='5deca9e31241ceb88320e76c54e8596b__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortUpCaptionBoldIcon);
export default ForwardRef;
