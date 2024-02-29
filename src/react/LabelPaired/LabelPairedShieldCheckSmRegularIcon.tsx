import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedShieldCheckSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m6.672 4.762-4.84 2.05q-.492.247-.52.766 0 1.313.438 3.063.465 1.723 1.613 3.363 1.176 1.64 3.282 2.707.355.165.71 0 2.106-1.04 3.254-2.707 1.176-1.641 1.641-3.363.438-1.75.438-3.063-.028-.519-.52-.766l-4.813-2.05a.9.9 0 0 0-.683 0m1.012-.793 4.84 2.05q.464.192.738.602.3.411.3.957.028 1.395-.464 3.281-.491 1.887-1.778 3.664-1.257 1.806-3.61 2.98a1.62 1.62 0 0 1-1.42 0q-2.353-1.174-3.61-2.98Q1.394 12.746.902 10.86.41 8.973.438 7.58q0-.547.3-.958.274-.41.739-.601l4.84-2.051a1.78 1.78 0 0 1 1.367 0M7 8.78q-.602.055-.656.656.054.602.656.657.602-.055.656-.656Q7.602 8.836 7 8.78m1.531.656q0 .52-.3.93-.301.383-.793.547v2.024q-.029.41-.438.437-.41-.027-.437-.437v-2.024a1.64 1.64 0 0 1-.793-.547q-.301-.41-.301-.93.027-.656.437-1.093.438-.411 1.094-.438.656.027 1.094.438.41.437.437 1.094' />
    </g>
    <defs>
      <clipPath id='b1133f5fe07cb7629e0486f5ff8e5064__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedShieldCheckSmRegularIcon);
export default ForwardRef;
