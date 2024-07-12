import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRightToLineMdRegularIcon = (
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
      <path d='M14 6.5v11c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5v-11c0-.25.219-.5.5-.5.25 0 .5.25.5.5m-3.156 5.875-4 4a.53.53 0 0 1-.719 0 .53.53 0 0 1 0-.719L9.281 12.5H.5A.494.494 0 0 1 0 12c0-.25.219-.5.5-.5h8.781L6.125 8.375a.53.53 0 0 1 0-.719.53.53 0 0 1 .719 0l4 4a.53.53 0 0 1 0 .719' />
    </g>
    <defs>
      <clipPath id='8638f7c18883eb84bed02c8a5bb0854c__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightToLineMdRegularIcon);
export default ForwardRef;
