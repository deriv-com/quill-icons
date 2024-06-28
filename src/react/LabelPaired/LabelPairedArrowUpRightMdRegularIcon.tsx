import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpRightMdRegularIcon = (
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
      <path d='M10.5 7c.25 0 .5.25.5.5v7c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5V8.719l-8.156 8.156a.53.53 0 0 1-.719 0 .53.53 0 0 1 0-.719L9.281 8H3.5a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5z' />
    </g>
    <defs>
      <clipPath id='584a19ca451da834d79036ffaebce6c9__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpRightMdRegularIcon);
export default ForwardRef;
