import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMoonLgBoldIcon = (
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
      <path d='M5.664 9.367a6.75 6.75 0 0 0-2.734 2.461Q1.914 13.47 1.875 15.5q.078 2.93 1.992 4.844 1.953 1.953 4.844 2.031a7.4 7.4 0 0 0 1.523-.156q-2.616-.938-4.218-3.164-1.602-2.188-1.641-5.117 0-2.54 1.29-4.57M8.086 6.79q.118 0 .273-.039h.704q.195 0 .39.04.47.077.586.468.078.468-.312.703-.195.078-.391.234a6 6 0 0 0-.469.352h-.039l-.078.078a7 7 0 0 0-1.836 2.344 6.7 6.7 0 0 0-.664 2.969q.078 2.93 1.992 4.843 1.913 1.953 4.844 2.032h.156q.313 0 .586-.04.235-.039.43-.039.468-.078.664.313.195.39-.117.742-.156.118-.313.273a3 3 0 0 1-.547.43l-.078.078a.5.5 0 0 1-.117.078q-2.187 1.563-5 1.602-2.46-.04-4.414-1.21a8.2 8.2 0 0 1-3.125-3.126Q.039 17.961 0 15.5q.078-3.555 2.344-5.977Q4.609 7.102 8.086 6.79' />
    </g>
    <defs>
      <clipPath id='b24ad14cbb39555da01e531ad828d550__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMoonLgBoldIcon);
export default ForwardRef;
