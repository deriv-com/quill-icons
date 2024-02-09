import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTwoLgRegularIcon = (
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
      <path d='M6.031 8q-1.757.04-3.008 1.25L1.93 10.305q-.43.39-.86 0-.39-.43 0-.86l1.055-1.093Q3.766 6.789 6.031 6.75q2.306.039 3.867 1.602 1.524 1.523 1.602 3.828-.039 2.343-1.719 3.945L2.477 23h9.648q.585.039.625.625-.039.585-.625.625H.875q-.43 0-.586-.39a.7.7 0 0 1 .156-.704l8.477-7.93q1.29-1.25 1.328-3.046-.04-1.758-1.25-2.97Q7.829 8.04 6.031 8' />
    </g>
    <defs>
      <clipPath id='8758ae990875b9e2ba2298cf03f24228__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTwoLgRegularIcon);
export default ForwardRef;
