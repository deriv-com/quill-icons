import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpArrowDownMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={24}
    viewBox='0 0 18 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m5.344 5.156 3 3a.53.53 0 0 1 0 .719.53.53 0 0 1-.719 0L5.5 6.719V18.5c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5V6.719L2.344 8.875a.53.53 0 0 1-.719 0 .53.53 0 0 1 0-.719l3-3a.53.53 0 0 1 .719 0m11 10.719-3 3a.53.53 0 0 1-.719 0l-3-3a.53.53 0 0 1 0-.719.53.53 0 0 1 .719 0l2.156 2.156V5.5c0-.25.219-.5.5-.5.25 0 .5.25.5.5v11.813l2.125-2.157a.53.53 0 0 1 .719 0 .53.53 0 0 1 0 .719' />
    </g>
    <defs>
      <clipPath id='bdfae91a63cf81b6d399a011b8f917ef__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpArrowDownMdRegularIcon);
export default ForwardRef;
