import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPauseLgBoldIcon = (
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
      <path d='M2.125 9.875v11.25H4V9.875zm-1.875 0q.039-.781.547-1.328.546-.508 1.328-.547H4q.781.039 1.328.547.508.546.547 1.328v11.25q-.039.78-.547 1.328Q4.782 22.961 4 23H2.125a2.04 2.04 0 0 1-1.328-.547 2.04 2.04 0 0 1-.547-1.328zm8.75 0v11.25h1.875V9.875zm-1.875 0q.039-.781.547-1.328Q8.218 8.039 9 8h1.875q.78.039 1.328.547.508.546.547 1.328v11.25q-.039.78-.547 1.328-.546.508-1.328.547H9a2.04 2.04 0 0 1-1.328-.547 2.04 2.04 0 0 1-.547-1.328z' />
    </g>
    <defs>
      <clipPath id='bcebd07817bd317881df959465fe249c__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPauseLgBoldIcon);
export default ForwardRef;
