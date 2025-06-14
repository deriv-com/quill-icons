import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpFromBracketMdRegularIcon = (
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
      <path d='m7.344 4.156 4 4a.53.53 0 0 1 0 .719.53.53 0 0 1-.719 0L7.5 5.719V14.5c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5V5.719L3.344 8.875a.53.53 0 0 1-.719 0 .53.53 0 0 1 0-.719l4-4a.53.53 0 0 1 .719 0M1 14.5v3c0 .844.656 1.5 1.5 1.5h9a1.5 1.5 0 0 0 1.5-1.5v-3c0-.25.219-.5.5-.5.25 0 .5.25.5.5v3c0 1.406-1.125 2.5-2.5 2.5h-9A2.47 2.47 0 0 1 0 17.5v-3c0-.25.219-.5.5-.5.25 0 .5.25.5.5' />
    </g>
    <defs>
      <clipPath id='69ea8f9352aaa6a08bf1afdcdc611669__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpFromBracketMdRegularIcon);
export default ForwardRef;
