import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRightMdRegularIcon = (
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
      <path d='m13.844 12.375-5.5 5.5a.53.53 0 0 1-.719 0 .53.53 0 0 1 0-.719l4.656-4.656H.5A.494.494 0 0 1 0 12c0-.25.219-.5.5-.5h11.781L7.625 6.875a.53.53 0 0 1 0-.719.53.53 0 0 1 .719 0l5.5 5.5a.53.53 0 0 1 0 .719' />
    </g>
    <defs>
      <clipPath id='94fd7c939661e6011d67a408ba2a6478__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightMdRegularIcon);
export default ForwardRef;
