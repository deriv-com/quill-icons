import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedStarLgRegularIcon = (
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
      <path d='M9.117 12.102a1.31 1.31 0 0 1-.976.703l-5.352.78 3.906 3.868q.43.43.352 1.094l-.938 5.43 4.805-2.54q.585-.312 1.172 0l4.805 2.54-.938-5.43q-.078-.664.352-1.094l3.906-3.867-5.39-.781q-.626-.117-.938-.703L11.5 7.14zm7.735 13.28-5.352-2.85-5.352 2.85q-.507.274-.976-.077-.47-.352-.39-.899l1.015-6.093-4.336-4.297q-.39-.39-.234-.938.195-.547.78-.625l5.977-.898 2.657-5.508A.99.99 0 0 1 11.5 5.5q.585.039.86.547l2.656 5.508 5.976.86q.585.116.781.663.157.547-.234.938l-4.336 4.297 1.016 6.093q.078.547-.39.899-.47.351-.977.078' />
    </g>
    <defs>
      <clipPath id='a4bde6d2d2d0227489a0034d726ce537__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStarLgRegularIcon);
export default ForwardRef;
