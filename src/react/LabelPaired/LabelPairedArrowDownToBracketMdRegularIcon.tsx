import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownToBracketMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m11.344 10.875-4 4a.53.53 0 0 1-.719 0l-4-4a.53.53 0 0 1 0-.719.53.53 0 0 1 .719 0L6.5 13.312V4.5c0-.25.219-.5.5-.5.25 0 .5.25.5.5v8.813l3.125-3.157a.53.53 0 0 1 .719 0 .53.53 0 0 1 0 .719M1 14.5v3c0 .844.656 1.5 1.5 1.5h9a1.5 1.5 0 0 0 1.5-1.5v-3c0-.25.219-.5.5-.5.25 0 .5.25.5.5v3c0 1.406-1.125 2.5-2.5 2.5h-9A2.47 2.47 0 0 1 0 17.5v-3c0-.25.219-.5.5-.5.25 0 .5.25.5.5' />
    </g>
    <defs>
      <clipPath id='2d7afac82aeb77d17017748b96a2bd3b__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownToBracketMdRegularIcon);
export default ForwardRef;
