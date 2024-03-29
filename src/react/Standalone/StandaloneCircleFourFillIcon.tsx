import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneCircleFourFillIcon = (
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
    <path d='M6 16.5a9.93 9.93 0 0 1 5-8.633c3.086-1.797 6.875-1.797 10 0 3.086 1.797 5 5.078 5 8.633 0 3.594-1.914 6.875-5 8.672-3.125 1.797-6.914 1.797-10 0-3.125-1.797-5-5.078-5-8.672m8.71-4.922c-.468-.195-1.015.078-1.17.586l-1.876 5.625c-.117.273-.039.586.117.82.196.274.469.391.781.391h4.063v1.563c0 .546.39.937.938.937.507 0 .937-.39.937-.937V19h.313c.507 0 .937-.39.937-.937a.95.95 0 0 0-.937-.938H18.5v-2.187a.95.95 0 0 0-.937-.938.925.925 0 0 0-.938.938v2.187h-2.773l1.445-4.375c.195-.508-.078-1.016-.586-1.172' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCircleFourFillIcon);
export default ForwardRef;
