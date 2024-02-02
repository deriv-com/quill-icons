import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedStarLgBoldIcon = (
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
      <path d='M11.5 5.5q.585.039.86.547l2.656 5.508 5.976.86q.585.116.781.663.157.547-.234.938l-4.336 4.297 1.016 6.093q.078.547-.39.938-.47.312-.977.039L11.5 22.53l-5.352 2.852q-.507.273-.976-.078-.47-.352-.39-.899l1.015-6.093-4.336-4.297q-.39-.39-.234-.938.195-.547.78-.664l5.977-.86 2.657-5.507A.99.99 0 0 1 11.5 5.5m0 3.086-2.07 4.219q-.195.429-.703.547l-4.61.664 3.36 3.32q.312.352.273.82l-.82 4.688 4.14-2.188a.85.85 0 0 1 .86 0l4.101 2.188-.781-4.688a.9.9 0 0 1 .273-.82l3.36-3.32-4.61-.664q-.507-.117-.703-.547z' />
    </g>
    <defs>
      <clipPath id='3c91f2033ad8e86a__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStarLgBoldIcon);
export default ForwardRef;
