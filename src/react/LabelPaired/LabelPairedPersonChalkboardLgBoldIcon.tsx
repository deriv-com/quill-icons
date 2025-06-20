import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPersonChalkboardLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={30}
    viewBox='0 0 25 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.5 9.25a1.87 1.87 0 0 1-1.64-.937c-.352-.547-.352-1.29 0-1.876.35-.546.937-.937 1.64-.937.664 0 1.25.39 1.602.938.351.585.351 1.328 0 1.875-.352.585-.938.937-1.602.937m-.547 3.125c-.039 0-.078.04-.078.04v4.96h1.25v-5zm-.078 12.188c0 .546-.43.937-.937.937-.547 0-.938-.39-.938-.937V14.25l-1.719 2.969a.876.876 0 0 1-1.25.351.876.876 0 0 1-.351-1.25l2.265-4.062C4.57 11.203 5.703 10.5 6.953 10.5H12.5V7.375c0-1.016.82-1.875 1.875-1.875h8.75C24.141 5.5 25 6.36 25 7.375v8.75C25 17.18 24.14 18 23.125 18h-8.75a1.85 1.85 0 0 1-1.875-1.875V14.25h1.875v1.875h8.75v-8.75h-8.75V10.5h.938a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937H10v12.188c0 .546-.43.937-.937.937-.547 0-.938-.39-.938-.937V19.25h-1.25z' />
    </g>
    <defs>
      <clipPath id='389629ea84daf9ea15fa0dd6605e6018__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPersonChalkboardLgBoldIcon);
export default ForwardRef;
