import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEyeCaptionBoldIcon = (
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
      <path d='M7 5.375c-1.547 0-2.79.703-3.75 1.594A8.4 8.4 0 0 0 1.398 9.5c.329.703.938 1.71 1.852 2.555.96.89 2.203 1.57 3.75 1.57 1.523 0 2.766-.68 3.727-1.57.914-.844 1.546-1.852 1.851-2.555-.305-.703-.937-1.687-1.828-2.531-.984-.89-2.227-1.594-3.75-1.594m-4.523.773C3.578 5.118 5.102 4.25 7 4.25c1.875 0 3.398.867 4.5 1.898 1.102 1.032 1.828 2.227 2.18 3.07a.84.84 0 0 1 0 .587c-.352.82-1.078 2.039-2.18 3.07S8.875 14.75 7 14.75c-1.898 0-3.422-.844-4.523-1.875-1.102-1.031-1.829-2.25-2.18-3.07a.84.84 0 0 1 0-.586c.351-.844 1.078-2.063 2.18-3.07M7 11.375c1.031 0 1.875-.82 1.875-1.875A1.88 1.88 0 0 0 7 7.625h-.047c.024.14.047.258.047.375 0 .844-.68 1.5-1.5 1.5-.14 0-.258 0-.375-.047V9.5c0 1.055.82 1.875 1.875 1.875M7 6.5c1.055 0 2.04.586 2.578 1.5.54.938.54 2.086 0 3A2.97 2.97 0 0 1 7 12.5 2.98 2.98 0 0 1 4.398 11a2.99 2.99 0 0 1 0-3A3.03 3.03 0 0 1 7 6.5' />
    </g>
    <defs>
      <clipPath id='cfd2149428db3a2ef45bc42afc45e298__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEyeCaptionBoldIcon);
export default ForwardRef;
