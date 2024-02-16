import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLinkSimpleLgBoldIcon = (
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
      <path d='M.25 15.5q.078-2.655 1.836-4.414T6.5 9.25h2.813q.858.078.937.938-.079.858-.937.937H6.5q-1.875.039-3.086 1.29-1.25 1.21-1.289 3.085.039 1.875 1.29 3.086 1.21 1.25 3.085 1.289h2.813q.858.078.937.938-.079.858-.937.937H6.5q-2.655-.078-4.414-1.836T.25 15.5m22.5 0q-.078 2.656-1.836 4.414T16.5 21.75h-2.812q-.86-.079-.938-.937.078-.86.938-.938H16.5q1.875-.039 3.086-1.29 1.25-1.21 1.289-3.085-.039-1.875-1.29-3.086-1.21-1.25-3.085-1.289h-2.812q-.86-.079-.938-.937.078-.86.938-.938H16.5q2.656.078 4.414 1.836T22.75 15.5m-15.312-.937h8.125q.858.078.937.937-.078.859-.937.938H7.437q-.859-.079-.937-.938.078-.86.938-.937' />
    </g>
    <defs>
      <clipPath id='863a5da599742578f04c245e9b297e57__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLinkSimpleLgBoldIcon);
export default ForwardRef;
