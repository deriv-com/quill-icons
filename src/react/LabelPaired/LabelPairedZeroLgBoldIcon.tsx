import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedZeroLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={30}
    viewBox='0 0 13 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.25 13q.078-2.656 1.836-4.414T6.5 6.75q2.656.078 4.414 1.836T12.75 13v5q-.078 2.656-1.836 4.414T6.5 24.25q-2.655-.078-4.414-1.836T.25 18zM6.5 8.625q-1.875.039-3.086 1.29-1.25 1.21-1.289 3.085v5q.039 1.875 1.29 3.086 1.21 1.25 3.085 1.289 1.875-.039 3.086-1.29 1.25-1.21 1.289-3.085v-5q-.039-1.875-1.29-3.086-1.21-1.25-3.085-1.289' />
    </g>
    <defs>
      <clipPath id='cb7b47069060757d7ac04eb6db904f4a__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedZeroLgBoldIcon);
export default ForwardRef;
