import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBackwardStepMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={10}
    height={24}
    viewBox='0 0 10 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m8.344 17.781-6-5L2 12.47V17c0 .563-.469 1-1 1-.562 0-1-.437-1-1V7c0-.531.438-1 1-1 .531 0 1 .469 1 1v4.531l.344-.281 6-5c.312-.25.719-.312 1.062-.156.344.187.594.531.594.906v10c0 .406-.25.75-.594.906-.344.188-.75.125-1.062-.125' />
    </g>
    <defs>
      <clipPath id='ddcdeb1926f6bf072bf34f76edfb7042__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardStepMdFillIcon);
export default ForwardRef;
