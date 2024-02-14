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
      <path d='M7.5 9.25q-1.055-.04-1.64-.937-.47-.938 0-1.876.585-.897 1.64-.937 1.055.04 1.64.938.47.938 0 1.875-.585.898-1.64.937m-.547 3.125h-.078v5h1.25v-5zm-.078 12.188q-.078.858-.937.937-.86-.079-.938-.937V14.25l-1.68 2.969q-.507.703-1.289.351-.703-.507-.351-1.289l2.304-4.023q.47-.82 1.25-1.29a3.3 3.3 0 0 1 1.72-.468H12.5V7.375q.039-.781.547-1.328.546-.508 1.328-.547h8.75q.78.039 1.328.547.508.546.547 1.328v8.75q-.039.78-.547 1.328-.546.508-1.328.547h-8.75a2.04 2.04 0 0 1-1.328-.547 2.04 2.04 0 0 1-.547-1.328V14.25h1.875v1.875h8.75v-8.75h-8.75V10.5h.938q.858.078.937.938-.078.858-.937.937H10v12.188q-.079.858-.937.937-.86-.079-.938-.937V19.25h-1.25z' />
    </g>
    <defs>
      <clipPath id='f8e52f1448f7acbc5db6342867d61673__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPersonChalkboardLgBoldIcon);
export default ForwardRef;
