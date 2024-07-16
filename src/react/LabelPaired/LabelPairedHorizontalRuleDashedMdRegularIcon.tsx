import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHorizontalRuleDashedMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 12c0-.25.219-.5.5-.5H3c.25 0 .5.25.5.5 0 .281-.25.5-.5.5H.5A.494.494 0 0 1 0 12m5.5 0c0-.25.219-.5.5-.5h2.5c.25 0 .5.25.5.5 0 .281-.25.5-.5.5H6a.494.494 0 0 1-.5-.5m5.5 0c0-.25.219-.5.5-.5H14c.25 0 .5.25.5.5 0 .281-.25.5-.5.5h-2.5a.494.494 0 0 1-.5-.5m5.5 0c0-.25.219-.5.5-.5h2.5c.25 0 .5.25.5.5 0 .281-.25.5-.5.5H17a.494.494 0 0 1-.5-.5' />
    </g>
    <defs>
      <clipPath id='e7e15b80dff30d7a82500e71b1f3817f__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHorizontalRuleDashedMdRegularIcon);
export default ForwardRef;
