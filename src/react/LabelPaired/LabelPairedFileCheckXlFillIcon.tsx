import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileCheckXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={36}
    viewBox='0 0 18 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3 6h7.5v6c0 .844.656 1.5 1.5 1.5h6V27c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3V9c0-1.64 1.313-3 3-3m9 0 6 6h-6zm2.297 13.172h-.047c.469-.422.469-1.125 0-1.594a1.103 1.103 0 0 0-1.547 0l-5.25 5.25-2.203-2.203a1.026 1.026 0 0 0-1.547 0 1.027 1.027 0 0 0 0 1.547l3 3c.422.469 1.125.469 1.594 0z' />
    </g>
    <defs>
      <clipPath id='e171f7cfa7e347a45c6cb32bc2805eb5__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileCheckXlFillIcon);
export default ForwardRef;
