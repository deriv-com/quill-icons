import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleCalendarLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M18.75 15.5q-.04-2.383-1.172-4.375a9 9 0 0 0-3.203-3.203Q12.305 6.75 10 6.75q-2.304 0-4.375 1.172a9 9 0 0 0-3.203 3.203Q1.289 13.117 1.25 15.5q.04 2.383 1.172 4.375a9 9 0 0 0 3.203 3.203Q7.695 24.25 10 24.25t4.375-1.172a9 9 0 0 0 3.203-3.203q1.133-1.992 1.172-4.375M0 15.5q.04-2.735 1.328-5Q2.657 8.235 5 6.828 7.383 5.5 10 5.5t5 1.328q2.344 1.407 3.672 3.672 1.29 2.265 1.328 5-.04 2.735-1.328 5-1.329 2.265-3.672 3.672-2.382 1.328-5 1.328t-5-1.328Q2.657 22.765 1.328 20.5.038 18.235 0 15.5m8.125-6.25q.585.039.625.625v.625h2.5v-.625q.039-.585.625-.625.585.039.625.625v.625h.625q.78.039 1.328.547.508.546.547 1.328v6.25q-.039.78-.547 1.328-.546.508-1.328.547h-6.25a2.04 2.04 0 0 1-1.328-.547A2.04 2.04 0 0 1 5 18.625v-6.25q.039-.78.547-1.328.546-.508 1.328-.547H7.5v-.625q.039-.585.625-.625M6.25 12.375V13h7.5v-.625q-.039-.585-.625-.625h-6.25q-.585.039-.625.625m7.5 1.875h-7.5v4.375q.039.585.625.625h6.25q.585-.039.625-.625z' />
    </g>
    <defs>
      <clipPath id='32a98066c20788210cb469d2a9d99cf5__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleCalendarLgRegularIcon);
export default ForwardRef;
