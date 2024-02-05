import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpLgBoldIcon = (
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
      <path d='M8.164 7.023v.04l6.563 6.875q.546.663 0 1.289-.704.546-1.329 0l-4.96-5.196v13.282q-.079.858-.938.937-.86-.079-.937-.937V10.03l-4.961 5.156q-.626.586-1.329.04-.546-.625 0-1.329l6.563-6.875A.9.9 0 0 1 7.5 6.75q.39 0 .664.273' />
    </g>
    <defs>
      <clipPath id='2c6a777c98943dc8e4ae3db980824c25__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpLgBoldIcon);
export default ForwardRef;
