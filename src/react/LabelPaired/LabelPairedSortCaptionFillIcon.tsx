import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSortCaptionFillIcon = (
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
      <path d='M3.46 4.484a.723.723 0 0 1 1.056 0l3 3c.21.211.28.54.164.82a.74.74 0 0 1-.68.47H1a.77.77 0 0 1-.703-.47.76.76 0 0 1 .164-.82zm0 10.055-3-3a.76.76 0 0 1-.163-.82A.77.77 0 0 1 1 10.25h6a.76.76 0 0 1 .68.469.76.76 0 0 1-.164.82l-3 3a.723.723 0 0 1-1.055 0' />
    </g>
    <defs>
      <clipPath id='75c7151f2ca022a38af6f5ad68bc534f__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortCaptionFillIcon);
export default ForwardRef;
