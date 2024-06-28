import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedStopwatchLgFillIcon = (
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
      <path d='M7.125 5.5h3.75c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25h-.625v1.367c1.445.235 2.773.82 3.867 1.719l.86-.82a1.205 1.205 0 0 1 1.757 0c.508.468.508 1.289 0 1.757l-.937.938c.82 1.289 1.328 2.812 1.328 4.414 0 4.492-3.672 8.125-8.125 8.125a8.12 8.12 0 0 1-8.125-8.125A8.08 8.08 0 0 1 7.75 9.367V8h-.625c-.703 0-1.25-.547-1.25-1.25 0-.664.547-1.25 1.25-1.25M9.938 13A.95.95 0 0 0 9 12.063a.925.925 0 0 0-.937.937v5c0 .547.39.938.937.938.508 0 .938-.391.938-.938z' />
    </g>
    <defs>
      <clipPath id='36f8005d9a5c5b931aa886711943058a__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStopwatchLgFillIcon);
export default ForwardRef;
