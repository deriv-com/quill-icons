import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEllipsisVerticalLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={5}
    height={30}
    viewBox='0 0 5 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.5 19.875q1.055.039 1.64.938.47.938 0 1.875-.585.898-1.64.937-1.055-.039-1.64-.937-.47-.937 0-1.875.585-.9 1.64-.938m0-6.25q1.055.038 1.64.938.47.937 0 1.874-.585.9-1.64.938-1.055-.039-1.64-.937-.47-.937 0-1.875.585-.9 1.64-.938M4.375 9.25q-.04 1.055-.937 1.64-.938.47-1.876 0-.897-.585-.937-1.64.04-1.055.938-1.64.938-.47 1.875 0 .898.585.937 1.64' />
    </g>
    <defs>
      <clipPath id='ffe2378aee045f39f75294e47aec3243__a'>
        <path d='M0 0h5v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEllipsisVerticalLgBoldIcon);
export default ForwardRef;
