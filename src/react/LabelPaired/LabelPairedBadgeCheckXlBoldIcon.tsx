import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBadgeCheckXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9.375 9.844q-.469.75-1.312.515-1.641-.468-2.954.75-1.218 1.313-.75 2.954.235.844-.515 1.312-1.5.844-1.594 2.625.094 1.782 1.594 2.625.75.469.515 1.313-.468 1.64.75 2.953 1.313 1.218 2.954.75.844-.235 1.312.515.845 1.5 2.625 1.594 1.782-.094 2.625-1.594.469-.75 1.313-.515 1.64.42 2.953-.75 1.218-1.313.75-2.953-.236-.844.562-1.313 1.454-.843 1.547-2.625-.093-1.78-1.547-2.625-.797-.469-.562-1.312.468-1.641-.75-2.954-1.313-1.218-2.953-.75-.844.235-1.313-.515-.843-1.5-2.625-1.594-1.78.094-2.625 1.594M12 6q2.625.094 4.125 2.016 2.437-.282 4.36 1.5 1.78 1.92 1.5 4.359Q23.905 15.375 24 18q-.093 2.625-2.016 4.125.282 2.437-1.5 4.36-1.92 1.78-4.359 1.5Q14.625 29.905 12 30q-2.625-.093-4.125-2.016-2.437.282-4.36-1.5-1.78-1.92-1.5-4.359Q.095 20.625 0 18q.094-2.625 2.016-4.125-.282-2.437 1.5-4.36 1.92-1.78 4.359-1.5Q9.375 6.095 12 6m5.297 9.797-6 6q-.797.656-1.594 0l-3-3q-.656-.797 0-1.594.797-.655 1.594 0l2.203 2.203 5.203-5.203q.797-.655 1.594 0 .656.797 0 1.594' />
    </g>
    <defs>
      <clipPath id='3eae6410d58d7a85__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBadgeCheckXlBoldIcon);
export default ForwardRef;
