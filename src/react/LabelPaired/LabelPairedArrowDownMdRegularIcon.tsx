import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownMdRegularIcon = (
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
      <path d='m5.625 18.875-5.5-5.5a.53.53 0 0 1 0-.719.53.53 0 0 1 .719 0L5.5 17.312V5.5c0-.25.219-.5.5-.5.25 0 .5.25.5.5v11.813l4.625-4.657a.53.53 0 0 1 .719 0 .53.53 0 0 1 0 .719l-5.5 5.5a.53.53 0 0 1-.719 0' />
    </g>
    <defs>
      <clipPath id='f8dd7d24f9cb54aa46c487784d50024f__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownMdRegularIcon);
export default ForwardRef;
