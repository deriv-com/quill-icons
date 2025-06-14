import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEyeCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={18}
    viewBox='0 0 14 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7 4.25c1.875 0 3.398.867 4.5 1.898 1.102 1.008 1.828 2.227 2.18 3.07a.84.84 0 0 1 0 .587c-.352.82-1.078 2.039-2.18 3.07S8.875 14.75 7 14.75c-1.898 0-3.422-.844-4.523-1.875-1.102-1.031-1.829-2.25-2.18-3.07a.84.84 0 0 1 0-.586c.351-.844 1.078-2.063 2.18-3.07C3.578 5.116 5.102 4.25 7 4.25M3.625 9.5c0 1.219.633 2.32 1.688 2.93 1.03.61 2.32.61 3.375 0a3.4 3.4 0 0 0 1.687-2.93c0-1.195-.656-2.297-1.687-2.906a3.34 3.34 0 0 0-3.376 0A3.35 3.35 0 0 0 3.625 9.5M7 8c0-.164-.047-.305-.094-.469-.047-.117.047-.281.188-.281a2.26 2.26 0 0 1 2.062 1.688c.328 1.195-.375 2.414-1.594 2.742a2.23 2.23 0 0 1-2.742-1.594 1.8 1.8 0 0 1-.07-.469c-.023-.14.14-.234.258-.187.164.047.305.07.492.07C6.32 9.5 7 8.844 7 8' />
    </g>
    <defs>
      <clipPath id='0f494135004936497a3e546388e729e7__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEyeCaptionFillIcon);
export default ForwardRef;
