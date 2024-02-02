import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedXmarkMdRegularIcon = (
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
      <path d='M10.156 16.844 6 12.719l-4.125 4.125q-.375.28-.719 0-.28-.345 0-.688L5.281 12 1.156 7.875q-.28-.375 0-.719.345-.28.719 0L6 11.281l4.156-4.125q.345-.28.688 0 .28.345 0 .719L6.719 12l4.125 4.156q.28.345 0 .688-.345.28-.688 0' />
    </g>
    <defs>
      <clipPath id='77d1fe7ef46f8ef29637d711195cc3c5__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedXmarkMdRegularIcon);
export default ForwardRef;
