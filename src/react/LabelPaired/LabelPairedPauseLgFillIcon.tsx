import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPauseLgFillIcon = (
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
      <path d='M2.125 8h1.25q.781.039 1.328.547.508.546.547 1.328v11.25q-.039.78-.547 1.328-.546.508-1.328.547h-1.25a2.04 2.04 0 0 1-1.328-.547 2.04 2.04 0 0 1-.547-1.328V9.875q.039-.781.547-1.328.546-.508 1.328-.547m7.5 0h1.25q.78.039 1.328.547.508.546.547 1.328v11.25q-.039.78-.547 1.328-.546.508-1.328.547h-1.25a2.04 2.04 0 0 1-1.328-.547 2.04 2.04 0 0 1-.547-1.328V9.875q.039-.781.547-1.328.546-.508 1.328-.547' />
    </g>
    <defs>
      <clipPath id='cd14dc7b98588d597cf51ee744b1823e__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPauseLgFillIcon);
export default ForwardRef;
