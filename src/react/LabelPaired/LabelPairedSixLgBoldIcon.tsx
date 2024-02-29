import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSixLgBoldIcon = (
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
      <path d='M10.875 18q-.039-1.875-1.29-3.086-1.21-1.25-3.085-1.289-1.953.04-3.203 1.406l-.195.235q-.977 1.21-.977 2.734.039 1.875 1.29 3.086 1.21 1.25 3.085 1.289 1.875-.039 3.086-1.29 1.25-1.21 1.289-3.085m-4.922-6.21q.274-.04.547-.04 2.656.078 4.414 1.836T12.75 18q-.078 2.656-1.836 4.414T6.5 24.25q-2.655-.078-4.414-1.836T.25 18q.04-2.5 1.64-4.219l5.43-6.68q.626-.624 1.328-.156.626.626.157 1.328z' />
    </g>
    <defs>
      <clipPath id='cf3925ad695049b2f7ebc505366ceeaa__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSixLgBoldIcon);
export default ForwardRef;
