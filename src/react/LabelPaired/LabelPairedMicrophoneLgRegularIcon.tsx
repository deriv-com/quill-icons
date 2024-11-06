import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMicrophoneLgRegularIcon = (
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
      <path d='M10 9.25c0-1.367-1.133-2.5-2.5-2.5A2.49 2.49 0 0 0 5 9.25v6.25C5 16.906 6.094 18 7.5 18c1.367 0 2.5-1.094 2.5-2.5zm-6.25 0a3.751 3.751 0 0 1 7.5 0v6.25a3.751 3.751 0 0 1-7.5 0zM2.5 13.625V15.5c0 2.773 2.227 5 5 5 2.734 0 5-2.227 5-5v-1.875c0-.312.273-.625.625-.625.313 0 .625.313.625.625V15.5c0 3.242-2.5 5.938-5.625 6.25v2.5h2.5c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-6.25a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625h2.5v-2.5c-3.164-.312-5.625-3.008-5.625-6.25v-1.875c0-.312.273-.625.625-.625.313 0 .625.313.625.625' />
    </g>
    <defs>
      <clipPath id='f252a05224cab33e9dfeb69df3e545a3__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMicrophoneLgRegularIcon);
export default ForwardRef;
