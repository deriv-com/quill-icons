import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownMdFillIcon = (
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
      <path d='m5.281 18.719-5-5a.964.964 0 0 1 0-1.406.964.964 0 0 1 1.406 0L5 15.593V6c0-.531.438-1 1-1 .531 0 1 .469 1 1v9.594l3.281-3.281a.964.964 0 0 1 1.406 0 .964.964 0 0 1 0 1.406l-5 5a.964.964 0 0 1-1.406 0' />
    </g>
    <defs>
      <clipPath id='b5e7bdfe92d280b60f4e44adc168a5e0__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownMdFillIcon);
export default ForwardRef;
