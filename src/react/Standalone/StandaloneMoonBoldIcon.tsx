import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneMoonBoldIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d='M14.164 10.367a6.75 6.75 0 0 0-2.734 2.461q-1.016 1.641-1.055 3.672.078 2.93 1.992 4.844 1.953 1.953 4.844 2.031a7.4 7.4 0 0 0 1.523-.156q-2.616-.938-4.218-3.164-1.602-2.188-1.641-5.117 0-2.54 1.29-4.57m2.422-2.578q.118 0 .273-.039h.704q.195 0 .39.04.47.077.586.468.078.469-.312.703-.195.078-.391.234a6 6 0 0 0-.469.352h-.039l-.078.078a7 7 0 0 0-1.836 2.344 6.7 6.7 0 0 0-.664 2.969q.078 2.93 1.992 4.843 1.913 1.953 4.844 2.032h.156q.313 0 .586-.04.234-.039.43-.039.468-.078.664.313.195.39-.117.742-.156.118-.313.273a3 3 0 0 1-.547.43l-.078.078a.5.5 0 0 1-.117.078q-2.187 1.563-5 1.602-2.46-.04-4.414-1.21a8.2 8.2 0 0 1-3.125-3.126Q8.539 18.961 8.5 16.5q.078-3.555 2.344-5.977 2.265-2.421 5.742-2.734' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneMoonBoldIcon);
export default ForwardRef;
