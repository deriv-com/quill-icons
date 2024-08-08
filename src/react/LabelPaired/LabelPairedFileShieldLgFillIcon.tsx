import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileShieldLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={23}
    height={30}
    viewBox='0 0 23 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.25 8c0-1.367 1.094-2.5 2.5-2.5H9v5c0 .703.547 1.25 1.25 1.25h5v1.836l-3.633 1.484c-.86.313-1.367 1.133-1.367 2.032 0 2.187.703 5.78 3.672 8.125-.352.195-.781.273-1.172.273h-10A2.47 2.47 0 0 1 .25 23zm15 2.5h-5v-5zm1.523 3.828a.97.97 0 0 1 .665 0l4.687 1.875c.39.156.625.508.625.86 0 2.5-1.016 6.601-5.273 8.398a1.2 1.2 0 0 1-.743 0c-4.257-1.797-5.234-5.898-5.234-8.398 0-.352.234-.704.586-.86zm4.063 3.36-3.711-1.485v7.344c2.656-1.29 3.555-3.867 3.71-5.86' />
    </g>
    <defs>
      <clipPath id='6a922f17e77d3a15588493efc30220ac__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileShieldLgFillIcon);
export default ForwardRef;
