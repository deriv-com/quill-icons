import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileShieldSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={22}
    viewBox='0 0 16 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.125 5.5c0-.957.766-1.75 1.75-1.75H6.25v3.5c0 .492.383.875.875.875h3.5V9.41l-2.543 1.04c-.602.218-.957.792-.957 1.421 0 1.531.492 4.047 2.57 5.688a1.7 1.7 0 0 1-.82.191h-7c-.984 0-1.75-.766-1.75-1.75zm10.5 1.75h-3.5v-3.5zm1.066 2.68a.68.68 0 0 1 .465 0l3.281 1.312c.274.11.438.356.438.602 0 1.75-.71 4.62-3.691 5.879a.84.84 0 0 1-.52 0C8.684 16.465 8 13.593 8 11.843c0-.245.164-.491.41-.6zm2.844 2.351-2.597-1.039v5.14c1.859-.902 2.488-2.706 2.597-4.1' />
    </g>
    <defs>
      <clipPath id='04826a98c06ef0935456c98a9db89ca4__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileShieldSmFillIcon);
export default ForwardRef;
