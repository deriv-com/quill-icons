import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedStopwatchLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5.25 6.125q.039-.585.625-.625h6.25q.585.039.625.625-.039.585-.625.625h-2.5v2.54q2.97.272 5 2.226l1.445-1.446q.43-.39.86 0 .39.43 0 .86l-1.485 1.484q1.641 2.11 1.68 4.961-.078 3.438-2.383 5.742Q12.438 25.422 9 25.5q-3.438-.078-5.742-2.383Q.954 20.813.875 17.375q.078-3.28 2.188-5.547 2.11-2.226 5.312-2.539V6.75h-2.5q-.585-.039-.625-.625m-3.125 11.25q0 1.875.938 3.438a6.77 6.77 0 0 0 2.5 2.5q1.64.937 3.437.937t3.438-.937a6.77 6.77 0 0 0 2.5-2.5 6.56 6.56 0 0 0 .937-3.438q0-1.875-.937-3.437a6.77 6.77 0 0 0-2.5-2.5Q10.797 10.5 9 10.5t-3.437.938a6.77 6.77 0 0 0-2.5 2.5 6.56 6.56 0 0 0-.938 3.437m7.5-3.75V18q-.039.585-.625.625-.585-.039-.625-.625v-4.375Q8.414 13.04 9 13q.585.039.625.625' />
    </g>
    <defs>
      <clipPath id='99f38984ddc43853__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStopwatchLgRegularIcon);
export default ForwardRef;
