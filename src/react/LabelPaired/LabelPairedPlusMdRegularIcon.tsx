import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPlusMdRegularIcon = (
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
      <path d='M7.5 6v5.5H13q.47.031.5.5-.03.47-.5.5H7.5V18q-.03.47-.5.5-.469-.03-.5-.5v-5.5H1q-.469-.03-.5-.5.031-.469.5-.5h5.5V6q.031-.469.5-.5.47.031.5.5' />
    </g>
    <defs>
      <clipPath id='f68cfe4cffc1b1ad2cb9f59a88f7f0ec__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlusMdRegularIcon);
export default ForwardRef;
