import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedXmarkLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={30}
    viewBox='0 0 15 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12.695 21.555 7.5 16.398l-5.156 5.157q-.469.351-.899 0-.351-.43 0-.86L6.602 15.5l-5.157-5.156q-.351-.469 0-.899.43-.351.899 0L7.5 14.602l5.195-5.157q.43-.351.86 0 .351.43 0 .899L8.398 15.5l5.157 5.195q.351.43 0 .86-.43.351-.86 0' />
    </g>
    <defs>
      <clipPath id='1ab3a0586e0bf219__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedXmarkLgRegularIcon);
export default ForwardRef;
