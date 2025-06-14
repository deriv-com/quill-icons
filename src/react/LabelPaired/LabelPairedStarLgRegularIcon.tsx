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
      <path d='M9.078 12.102c-.195.39-.547.625-.937.703l-5.352.78 3.867 3.868c.313.274.43.703.352 1.094l-.899 5.469 4.766-2.578c.39-.196.82-.196 1.21 0l4.767 2.578-.899-5.47c-.078-.39.04-.82.352-1.093l3.867-3.867-5.352-.781c-.43-.078-.78-.313-.937-.703L11.46 7.18zm7.735 13.32h.039l-5.352-2.89-5.352 2.89c-.312.156-.703.117-1.015-.078-.274-.235-.43-.586-.352-.938l1.016-6.054-4.336-4.297a.92.92 0 0 1-.234-.977c.117-.312.39-.586.742-.625l5.976-.898 2.696-5.508c.156-.313.468-.547.82-.547a.96.96 0 0 1 .86.547l2.695 5.508 5.976.898c.352.04.625.313.742.625a.92.92 0 0 1-.234.977l-4.336 4.297 1.016 6.054c.078.352-.078.703-.352.938a1.05 1.05 0 0 1-1.015.078' />
    </g>
    <defs>
      <clipPath id='04c5334e17169de6b98b9b5738bf0968__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStarLgRegularIcon);
export default ForwardRef;
