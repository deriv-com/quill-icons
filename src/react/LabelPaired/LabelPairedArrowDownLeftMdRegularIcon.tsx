import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownLeftMdRegularIcon = (
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
      <path d='M1.5 17a.494.494 0 0 1-.5-.5v-7c0-.25.219-.5.5-.5.25 0 .5.25.5.5v5.813l8.125-8.157a.53.53 0 0 1 .719 0 .53.53 0 0 1 0 .719L2.688 16H8.5c.25 0 .5.25.5.5 0 .281-.25.5-.5.5z' />
    </g>
    <defs>
      <clipPath id='2515269e258535c4e48c8249d8ef2d77__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownLeftMdRegularIcon);
export default ForwardRef;
