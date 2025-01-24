import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpLeftMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={24}
    viewBox='0 0 12 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.5 7h7c.25 0 .5.25.5.5 0 .281-.25.5-.5.5H2.688l8.156 8.156a.53.53 0 0 1 0 .719.53.53 0 0 1-.719 0L2 8.719V14.5c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5v-7c0-.25.219-.5.5-.5' />
    </g>
    <defs>
      <clipPath id='92660e0c37e8fe082977aee8c4b2d8ba__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpLeftMdRegularIcon);
export default ForwardRef;
